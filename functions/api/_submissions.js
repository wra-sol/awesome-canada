/**
 * Shared plumbing for the no-account submit/report endpoints
 * (functions/api/submit.js + functions/api/report.js).
 *
 * Bindings used by callers: env.LIKES_DB (D1), env.LIKES_SALT,
 * env.GITHUB_ISSUE_TOKEN (Pages secret — fine-grained PAT with
 * Issues: RW on wra-sol/awesome-canada). Missing token => 503 and the
 * UI falls back to the classic GitHub issue form.
 *
 * Issue bodies intentionally mirror the GitHub issue-form templates'
 * "### Field" sections so scripts/process-issues.mjs parses both kinds
 * of issues identically. Category ids mirror scripts/categories.js —
 * update both together (see docs/DEPLOYMENT.md).
 */

export const REPO = 'wra-sol/awesome-canada';

export const LEVELS = ['Federal', 'Provincial', 'Municipal', 'Regional', 'Agency', 'Crown Corp'];

export const CATEGORIES = [
  'open-data', 'planning-zoning', 'council', 'budget', 'gov-services', 'taxes',
  'finance', 'business', 'employment', 'education', 'school-board', 'immigration',
  'health', 'health-region', 'benefits', 'housing', 'transport-roads', 'transit',
  'aviation-marine', 'parks', 'environment', 'weather', 'utilities', 'agriculture',
  'science', 'culture', 'heritage', 'lobbyist', 'safety', 'justice', 'consumer',
  'indigenous', 'veterans', 'elections', 'telecom',
];

export const ISSUE_TYPES = [
  'Page not found (404)',
  'Redirects to a different page',
  'Site down / timeout',
  'Content changed / no longer the right resource',
  'Requires login now',
  'Other',
];

const LIMITS = {
  submission: { perHour: 2, perDay: 5 },
  report: { perHour: 3, perDay: 10 },
};
const GLOBAL_HOURLY_CAP = 40;
const HOUR_MS = 3600e3;
const DAY_MS = 24 * HOUR_MS;
const HEX_LEN = 32;
// eslint-disable-next-line no-control-regex
const CONTROL_CHARS = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;

export function validateUrl(raw) {
  if (typeof raw !== 'string') return null;
  const url = raw.trim();
  if (url.length === 0 || url.length > 2048) return null;
  if (!/^https?:\/\/[^\s]+$/i.test(url)) return null;
  return url;
}

export function cleanText(raw, max) {
  if (typeof raw !== 'string') return '';
  const collapsed = raw.replace(/\r\n/g, '\n').replace(CONTROL_CHARS, '').trim();
  const noHeadings = collapsed.replace(/^#{1,6}\s+/gm, '');
  return noHeadings.slice(0, max);
}

function pickEnum(raw, allowed) {
  return typeof raw === 'string' && allowed.includes(raw) ? raw : null;
}

export function validateSubmission(body) {
  const fields = {};
  const data = {
    name: cleanText(body.name, 120),
    url: validateUrl(body.url),
    level: pickEnum(body.level, LEVELS),
    jurisdiction: cleanText(body.jurisdiction, 80),
    category: pickEnum(body.category, CATEGORIES),
    description: cleanText(body.description, 1000),
    tags: cleanText(body.tags, 200),
    notes: cleanText(body.notes, 1000),
  };

  if (!data.name) fields.name = 'Resource name is required.';
  if (!data.url) fields.url = 'A valid http(s) URL is required.';
  if (!data.level) fields.level = 'Choose a government level.';
  if (!data.jurisdiction) fields.jurisdiction = 'Jurisdiction is required.';
  if (!data.category) fields.category = 'Choose a valid category.';
  if (data.description.length < 20) fields.description = 'Describe what someone can DO with this link (at least 20 characters).';

  return Object.keys(fields).length ? { ok: false, fields } : { ok: true, data };
}

export function validateReport(body) {
  const fields = {};
  const data = {
    resource_name: cleanText(body.resource_name, 120),
    current_url: validateUrl(body.current_url),
    issue_type: pickEnum(body.issue_type, ISSUE_TYPES),
    new_url: validateUrl(body.new_url || ''),
    details: cleanText(body.details, 1000),
  };

  if (!data.resource_name) fields.resource_name = 'Resource name is required.';
  if (!data.current_url) fields.current_url = 'The directory URL of the broken link is required.';
  if (!data.issue_type) fields.issue_type = 'Choose what happened.';

  return Object.keys(fields).length ? { ok: false, fields } : { ok: true, data };
}

export async function sha256Hex(input, len) {
  const bytes = new TextEncoder().encode(input);
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  const hex = [...new Uint8Array(digest)].map(b => b.toString(16).padStart(2, '0')).join('');
  return len ? hex.slice(0, len) : hex;
}

export async function visitorHash(env, request) {
  const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
  const ua = request.headers.get('User-Agent') || '';
  return sha256Hex(`${env.LIKES_SALT}\n${ip}\n${ua}`, HEX_LEN);
}

export function json(data, status = 200) {
  return new Response(JSON.stringify(data) + '\n', {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'X-Content-Type-Options': 'nosniff',
      'Cache-Control': 'no-store',
    },
  });
}

export function requireEnv(env) {
  if (!env || !env.LIKES_DB || !env.LIKES_SALT) {
    return json({ error: 'not_configured' }, 503);
  }
  return null;
}

export function requireIssueToken(env) {
  if (!env.GITHUB_ISSUE_TOKEN) {
    return json({ error: 'issue_backend_unavailable' }, 503);
  }
  return null;
}

// Returns null when allowed, or a json Response explaining the block.
export async function rateLimit(env, kind, vHash) {
  const db = env.LIKES_DB;
  const now = Date.now();
  const limits = LIMITS[kind];

  const [hourly, daily, globalHourlyRow] = await db.batch([
    db.prepare(
      'SELECT COUNT(*) AS n FROM submission_log WHERE visitor_hash = ? AND kind = ? AND created_at > ?'
    ).bind(vHash, kind, now - HOUR_MS),
    db.prepare(
      'SELECT COUNT(*) AS n FROM submission_log WHERE visitor_hash = ? AND kind = ? AND created_at > ?'
    ).bind(vHash, kind, now - DAY_MS),
    db.prepare(
      'SELECT COUNT(*) AS n FROM submission_log WHERE created_at > ?'
    ).bind(now - HOUR_MS),
  ]);

  const hourlyTotal = hourly.results[0] ? hourly.results[0].n : 0;
  const dailyKind = daily.results[0] ? daily.results[0].n : 0;
  const globalHourly = globalHourlyRow.results[0] ? globalHourlyRow.results[0].n : 0;

  if (hourlyTotal >= limits.perHour || dailyKind >= limits.perDay) {
    return json({ error: 'rate_limited', message: 'You’ve sent several recently — please try again tomorrow.' }, 429);
  }
  if (globalHourly >= GLOBAL_HOURLY_CAP) {
    return json({ error: 'rate_limited_global', message: 'The submission queue is busy right now — please try again later.' }, 429);
  }

  await db.prepare(
    'INSERT INTO submission_log (kind, visitor_hash, created_at) VALUES (?, ?, ?)'
  ).bind(kind, vHash, now).run();

  return null;
}

export function buildSubmissionBody(d) {
  // Provenance goes BEFORE any sections: the issue parser reads everything
  // after a "### Key" as that field's value, so a trailing footer would
  // bleed into the last field.
  const lines = [
    '_Submitted via the awesome-canada web form (no GitHub account)._',
    '',
    '### Resource Name', d.name,
    '', '### URL', d.url,
    '', '### Government Level', d.level,
    '', '### Jurisdiction', d.jurisdiction,
    '', '### Category', d.category,
    '', '### Description', d.description,
  ];
  if (d.tags) lines.push('', '### Tags', d.tags);
  if (d.notes) lines.push('', '### Additional Notes', d.notes);
  return lines.join('\n');
}

export function buildReportBody(d) {
  const lines = [
    '_Reported via the awesome-canada web form (no GitHub account)._',
    '',
    '### Resource Name', d.resource_name,
    '', '### Current URL in Directory', d.current_url,
    '', '### What happened?', d.issue_type,
  ];
  if (d.new_url) lines.push('', '### New URL (if known)', d.new_url);
  if (d.details) lines.push('', '### Additional Details', d.details);
  return lines.join('\n');
}

export async function createIssue(env, { title, labels, body }) {
  let res;
  try {
    res = await fetch(`https://api.github.com/repos/${REPO}/issues`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.GITHUB_ISSUE_TOKEN}`,
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
        'Content-Type': 'application/json',
        'User-Agent': 'awesome-canada-pages-function',
      },
      body: JSON.stringify({ title, labels, body }),
    });
  } catch {
    return { ok: false, reason: 'network' };
  }

  if (!res.ok) {
    console.error('[submissions] github issue create failed:', res.status);
    return { ok: false, reason: res.status === 401 || res.status === 403 || res.status === 404 ? 'auth' : 'github' };
  }
  const issue = await res.json();
  return { ok: true, number: issue.number, url: issue.html_url };
}

export async function readJson(request) {
  const type = (request.headers.get('Content-Type') || '').split(';')[0].trim().toLowerCase();
  if (type !== 'application/json') return null;
  try {
    return await request.json();
  } catch {
    return null;
  }
}
