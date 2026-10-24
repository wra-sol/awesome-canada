/**
 * Broken-link report triage — triggered by GitHub "issues" webhooks.
 *
 * Flow: verify HMAC signature -> filter to [Broken] reports -> parse the
 * submission-form fields -> probe the catalog URL (+ suggested replacement)
 * with the same health semantics as clean.js -> post a verdict comment and
 * relabel. Never edits data files; a human (or future job) applies fixes.
 */

const HEALTHY = new Set(['ok', 'redirect']);
// "exists but blocks automated checks" — mirrors clean.js BLOCKED_STATUSES,
// plus soft network failures. Never call these dead.
const SOFT = new Set(['blocked', 'timeout', 'network_error', 'server_error']);
const DEAD = new Set(['broken', 'dns_failure', 'connection_refused', 'connection_reset', 'ssl_error']);

export function verdictFor(oldStatus, newStatus) {
  const bucket = (s) => (HEALTHY.has(s) ? 'healthy' : DEAD.has(s) ? 'dead' : 'soft');
  const o = bucket(oldStatus);
  const n = newStatus ? bucket(newStatus) : null;
  if (o === 'dead') return n === 'healthy' ? 'confirmed-swap' : 'confirmed-dead';
  return 'not-reproduced';
}

/** Parse the `### Field` format used by the submit/report web forms.
 *  Everything after a heading (including blank lines) belongs to that field. */
export function parseIssueBody(body) {
  const fields = {};
  const re = /^### (.+)$/;
  let current = null;
  for (const line of String(body || '').split('\n')) {
    const m = line.match(re);
    if (m) {
      current = m[1].trim();
      fields[current] = [];
    } else if (current) {
      fields[current].push(line);
    }
  }
  const out = {};
  for (const [k, v] of Object.entries(fields)) out[k] = v.join('\n').trim();
  return out;
}

export async function verifySignature(secret, headers, rawBody) {
  const sig = headers.get('X-Hub-Signature-256');
  if (!sig || !sig.startsWith('sha256=')) return false;
  const expected = sig.slice('sha256='.length);
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['verify']
  );
  const sigBytes = Uint8Array.from(expected.match(/.{2}/g).map((h) => parseInt(h, 16)));
  return crypto.subtle.verify('HMAC', key, sigBytes, new TextEncoder().encode(rawBody));
}

export async function probeUrl(url, timeoutMs = 8000) {
  try {
    const res = await fetch(url, {
      method: 'GET',
      redirect: 'follow',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0 Safari/537.36',
        Accept: '*/*',
      },
      signal: AbortSignal.timeout(timeoutMs),
    });
    const s = res.status;
    if (s >= 200 && s < 300) return { status: 'ok' };
    if (s >= 300 && s < 400) return { status: 'redirect' };
    if ([401, 403, 429].includes(s)) return { status: 'blocked' };
    // Cloudflare edge synthesizes 52x-531 error pages when the ORIGIN fails;
    // from inside a Worker, dead hosts often surface as these instead of
    // thrown fetch errors. Decode them into clean.js-style statuses.
    if (s === 521 || s === 522 || s === 527) return { status: 'broken', code: s }; // host down/refused
    if (s === 523 || s === 530 || s === 531) return { status: 'dns_failure', code: s }; // origin unroutable/DNS
    if (s === 525 || s === 526) return { status: 'ssl_error', code: s };
    if (s >= 400 && s < 500) return { status: 'broken', code: s };
    return { status: 'server_error', code: s }; // incl. 500-520, 528, 529: soft
  } catch (e) {
    const msg = String((e && e.message) || e);
    if (/abort|timeout|timed out/i.test(msg)) return { status: 'timeout' };
    if (/certificate|ssl|tls/i.test(msg)) return { status: 'ssl_error' };
    if (/refused/i.test(msg)) return { status: 'connection_refused' };
    if (/reset/i.test(msg)) return { status: 'connection_reset' };
    if (/dns|name or service|not known|nxdomain/i.test(msg)) return { status: 'dns_failure' };
    return { status: 'network_error' };
  }
}

export function buildComment(issueNumber, title, fields, oldProbe, newProbe, verdict) {
  const line = (label, p) =>
    p ? `| ${label} | \`${p.url}\` | ${p.status}${p.code ? ` (${p.code})` : ''} |` : null;
  const rows = [
    line('Current URL', oldProbe),
    newProbe ? line('Suggested URL', newProbe) : null,
  ].filter(Boolean);

  const verdictText = {
    'confirmed-swap': '**Replacement looks good** — the suggested URL resolves while the catalog URL is dead. Ready for a URL swap.',
    'confirmed-dead': '**Confirmed unreachable** — removal candidate unless someone can supply a working URL.',
    'not-reproduced': '**Could not reproduce** — the catalog URL responded (or blocked automation) from our vantage point. Keeping the entry for now.',
  }[verdict];

  return [
    `## Automated triage — report #${issueNumber}`,
    '',
    `Probed live from the awesome-canada-maintenance Worker:`,
    '',
    '| | URL | Result |',
    '|---|---|---|',
    ...rows,
    '',
    verdictText,
    '',
    '_Statuses like `blocked`/`timeout` mean the site exists but resists automated checks — treated as alive._',
  ].join('\n');
}

/**
 * Entry point called from index.js. Returns a response-shaped object;
 * never throws for expected conditions.
 */
export async function handleWebhook(request, env, ghApi) {
  if (!env.GH_WEBHOOK_SECRET) {
    return { status: 503, body: { error: 'GH_WEBHOOK_SECRET not configured' } };
  }
  const raw = await request.text();
  if (!(await verifySignature(env.GH_WEBHOOK_SECRET, request.headers, raw))) {
    return { status: 401, body: { error: 'bad signature' } };
  }

  let event;
  try {
    event = JSON.parse(raw);
  } catch {
    return { status: 400, body: { error: 'invalid json' } };
  }

  const kind = request.headers.get('X-GitHub-Event');
  if (kind === 'ping') return { status: 200, body: { ok: true, pong: true } };
  if (kind !== 'issues') return { status: 200, body: { ignored: `event:${kind}` } };

  const action = event.action;
  const issue = event.issue || {};
  const labels = (issue.labels || []).map((l) => l.name);
  const isReport =
    action === 'opened' &&
    (labels.includes('broken-link') || String(issue.title || '').startsWith('[Broken]'));
  if (!isReport) return { status: 200, body: { ignored: `${action}/${issue.number || '?'}` } };

  const number = issue.number;
  const fields = parseIssueBody(issue.body);
  const oldUrl = (fields['Current URL in Directory'] || '').trim();
  const newUrl = (fields['New URL (if known)'] || '').trim();

  if (!oldUrl) {
    await ghApi.comment(number, `Automated triage skipped: no \`Current URL in Directory\` field found in the report body.`);
    return { status: 200, body: { triaged: false, reason: 'missing-url' } };
  }

  const oldProbe = { url: oldUrl, ...(await probeUrl(oldUrl)) };
  const newProbe = newUrl ? { url: newUrl, ...(await probeUrl(newUrl)) } : null;
  const verdict = verdictFor(oldProbe.status, newProbe ? newProbe.status : null);

  console.log(`[webhook] #${number} old=${oldProbe.status} new=${newProbe?.status || '-'} -> ${verdict}`);

  const results = {};
  results.comment = await ghApi
    .comment(number, buildComment(number, issue.title, fields, oldProbe, newProbe, verdict))
    .catch((e) => ({ error: e.message }));

  const verdictLabel =
    verdict === 'not-reproduced' ? 'report:unverifiable' : 'report:confirmed';
  results.labels = await ghApi
    .replaceLabels(number, ['broken-link', verdictLabel])
    .catch((e) => ({ error: e.message }));

  return { status: 200, body: { triaged: true, number, verdict, ...results } };
}
