/**
 * Nightly link-rot cleaning — Cloudflare Worker cron port of
 * scripts/daily-clean.py + scripts/migrate.js + scripts/generate-readme.js.
 *
 * 04:00 UTC daily:
 *   1. fetch resources.json, staging queue, and failure state from GitHub
 *   2. check every URL (HEAD -> GET fallback; bot-block statuses are soft)
 *   3. remove entries failing CLEAN_THRESHOLD consecutive hard checks
 *   4. merge any staged research entries (scripts/new-resources.js)
 *   5. regenerate README.md
 *   6. single atomic commit; Pages git-integration picks up the deploy
 */

import { getRawFile, getJsonFile, commitFiles } from './github.js';
import { generateReadme, mergeStaged, parseStaging, normUrl } from './catalog.js';

const USER_AGENT = 'Mozilla/5.0 (compatible; AwesomeCanadaLinkChecker/2.0; +https://github.com/wra-sol/awesome-canada)';
const BROWSER_UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0 Safari/537.36';
const FALSE_POSITIVE_DOMAINS = ['canada.ca'];
// "exists but blocks automated checks" — never auto-remove these.
const BLOCKED_STATUSES = new Set([401, 403, 429]);
const HEALTHY = new Set(['ok', 'redirect']);

function classify(res) {
  if (res.status >= 200 && res.status < 300) return 'ok';
  if (res.status >= 300 && res.status < 400) return 'redirect';
  if (BLOCKED_STATUSES.has(res.status)) return 'blocked';
  if (res.status >= 400 && res.status < 500) return 'broken';
  if (res.status >= 500) return 'server_error';
  return 'error';
}

async function checkUrl(url, timeoutMs = 8000) {
  const t0 = Date.now();
  const attempt = async (method, ua) => {
    try {
      const res = await fetch(url, {
        method,
        redirect: 'follow',
        headers: { 'User-Agent': ua, Accept: '*/*' },
        signal: AbortSignal.timeout(timeoutMs),
      });
      // redirect:'follow' hides 3xx from us; detect via response.url change is
      // unnecessary for health purposes — followed redirects that land 2xx
      // are healthy either way.
      return classify(res);
    } catch (e) {
      const msg = String(e && e.message || e);
      if (/abort|timeout|timed out/i.test(msg)) {
        return { kind: 'timeout', hard: false };
      }
      if (/certificate|ssl|tls/i.test(msg)) return { kind: 'ssl_error', hard: true };
      if (/refused/i.test(msg)) return { kind: 'connection_refused', hard: true };
      if (/reset/i.test(msg)) return { kind: 'connection_reset', hard: true };
      if (/dns|name or service|not known|nxdomain/i.test(msg)) return { kind: 'dns_failure', hard: true };
      return { kind: 'network_error', hard: false }; // soft: unknown network path
    }
  };

  let r = await attempt('GET', USER_AGENT);
  let status = typeof r === 'string' ? r : r.kind;

  if (status === 'timeout') {
    const domain = new URL(url).hostname;
    if (FALSE_POSITIVE_DOMAINS.some((d) => domain.endsWith(d))) {
      const retry = await attempt('GET', BROWSER_UA);
      status = typeof retry === 'string' ? retry : retry.kind;
    }
  }
  return { status, ms: Date.now() - t0 };
}

export async function runClean(env, { limit = null, dryRun = false } = {}) {
  if (limit && !dryRun) {
    // A limited run would replace the full state file with a partial one.
    throw new Error('limit requires dry-run mode (state would be clobbered)');
  }
  const threshold = parseInt(env.CLEAN_THRESHOLD || '2', 10);
  const today = new Date().toISOString().slice(0, 10);

  const data = await getJsonFile(env, 'data/resources.json');
  const rawState = await getRawFile(env, 'docs/state/link-health.json').catch(() => '{}');
  const prevState = JSON.parse(rawState || '{}');
  const stagingRaw = await getRawFile(env, 'scripts/new-resources.js');
  const stagedEntries = parseStaging(stagingRaw);

  const targets = limit ? data.slice(0, limit) : data;
  console.log(`[clean] checking ${targets.length} of ${data.length} URLs (threshold=${threshold})`);

  // Concurrency-limited checking
  const results = new Map();
  const CONCURRENCY = 20;
  let cursor = 0;
  async function worker() {
    while (cursor < targets.length) {
      const entry = targets[cursor++];
      const url = (entry.url || '').trim();
      if (!url || results.has(normUrl(url))) continue;
      const r = await checkUrl(url);
      results.set(url, r.status);
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));

  // Merge into consecutive-failure state
  const newState = {};
  for (const [url, status] of results.entries()) {
    const prev = prevState[url] || {};
    let failures = prev.failures || 0;
    const hard =
      status === 'broken' ||
      ['dns_failure', 'connection_refused', 'connection_reset', 'ssl_error'].includes(status);
    if (HEALTHY.has(status)) failures = 0;
    else if (hard) failures += 1;
    newState[url] = {
      failures,
      status,
      last_checked: today,
      ...(failures > 0 ? { first_failure: prev.first_failure || today } : {}),
    };
  }

  const doomed = new Set(
    Object.entries(newState).filter(([u, s]) => s.failures >= threshold).map(([u]) => u)
  );
  const removed = [];
  const kept = [];
  for (const entry of data) {
    if (doomed.has(entry.url.trim())) removed.push(entry);
    else kept.push(entry);
  }

  console.log(`[clean] issues=${results.size - [...results.values()].filter(HEALTHY.has.bind(HEALTHY)).length} removing=${removed.length}`);

  // Merge staged research entries (post-dedup by migrate.js semantics)
  let mergeInfo = { added: 0, skipped: 0 };
  let finalData = kept;
  if (stagedEntries.length > 0) {
    const m = mergeStaged(finalData, stagedEntries);
    finalData = m.ordered;
    mergeInfo = { added: m.added, skipped: m.skipped };
    console.log(`[clean] merged ${m.added} staged entries (${m.skipped} already present)`);
  }

  // Build watchlist for the report
  const pending = Object.entries(newState)
    .filter(([u, s]) => s.failures > 0 && s.failures < threshold &&
      !['ok', 'redirect', 'blocked'].includes(s.status))
    .sort((a, b) => b[1].failures - a[1].failures);

  let report = `# 🔗 Link-Rot Report\n\n**Generated:** ${new Date().toISOString().slice(0, 16).replace('T', ' ')} UTC\n`;
  report += `\n**Scope:** ${targets.length} unique URLs checked · threshold ${threshold} consecutive hard failures\n`;
  report += `\n## Removals\n\n`;
  report += removed.length
    ? removed.map((e) => `- ${e.name} — \`${e.url}\` (${newState[e.url.trim()]?.failures}× failed)`).join('\n')
    : '_None crossed the threshold._';
  if (pending.length) {
    report += `\n\n## Watchlist (${pending.length})\n\n`;
    report += pending.map(([u, s]) => `- ${s.failures}/${threshold} **${s.status}** — ${u}`).join('\n');
  }
  report += `\n\n_Runs on awesome-canada-maintenance Worker._\n`;

  const summary = {
    checked: results.size,
    unhealthy: [...results.values()].filter((s) => !HEALTHY.has(s)).length,
    removed: removed.length,
    merged_staged: mergeInfo.added,
    total: finalData.length,
  };
  console.log('[clean]', JSON.stringify(summary));

  if (!dryRun) {
    const files = [
      { path: 'data/resources.json', content: JSON.stringify(finalData, null, 2) + '\n' },
      { path: 'docs/state/link-health.json', content: JSON.stringify(newState, null, 2) + '\n' },
      { path: `docs/reports/link-rot-${today}.md`, content: report },
      { path: 'README.md', content: generateReadme(finalData) },
    ];
    const sha = await commitFiles(
      env,
      env.GH_BRANCH || 'master',
      `chore(maintenance): nightly clean + refresh [${today}]\n\n` +
        `- checked ${summary.checked} URLs, ${summary.unhealthy} unhealthy\n` +
        `- removed ${summary.removed} dead entr${summary.removed === 1 ? 'y' : 'ies'}\n` +
        `- merged ${summary.merged_staged} staged resource${summary.merged_staged === 1 ? '' : 's'}\n` +
        `- catalog now ${finalData.length} entries`,
      files
    );
    console.log(`[clean] committed ${sha}`);
  } else {
    console.log('[clean] DRY RUN — nothing committed');
  }

  return summary;
}
