/**
 * Daily resource discovery — Cloudflare Worker cron port of
 * scripts/discover-candidates.py + scripts/stage-candidates.js.
 *
 * 05:00 UTC daily:
 *   1. gap analysis of the catalog (Tier-1 coverage per jurisdiction)
 *   2. deterministic probes: eScribe, CivicWeb, AllNetMeetings,
 *      ArcGIS Hub OGC API, Questica OpenBook (+ Transitland if keyed)
 *   3. stage verified candidates into scripts/new-resources.js
 *   4. commit to research/staged branch and open/update the review PR
 *
 * Human review happens on the PR; the nightly clean job merges staging.
 */

import { getRawFile, getJsonFile, commitFiles, branchExists, deleteBranch, listPullRequests, createPullRequest, updatePullRequest } from './github.js';
import { CATEGORIES, normUrl, slugify } from './catalog.js';

const BROWSER_UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0 Safari/537.36';
const TIER1 = ['council', 'budget', 'planning-zoning', 'open-data', 'transit'];
const STAGING_HEADER = `/**
 * New resources to append to data/resources.json.
 * Each entry follows the schema (name, level, jurisdiction, category, type,
 * description, url, tags). Categories come from scripts/categories.js.
 *
 * To add new resources:
 *   1. Add entries to this array
 *   2. Run: node scripts/migrate.js
 *   3. Run: node scripts/generate-readme.js
 *   4. Commit and push
 *
 * Resources already in data/resources.json by URL are automatically skipped.
 */
module.exports = `;
const BRANCH = 'research/staged';

async function ok200(url, timeoutMs = 10000) {
  try {
    const res = await fetch(url, { headers: { 'User-Agent': BROWSER_UA }, redirect: 'manual', signal: AbortSignal.timeout(timeoutMs) });
    return res.status === 200;
  } catch {
    return false;
  }
}

function makeCandidate(city, category, ctype, name, url, description, tagWords) {
  return {
    name, level: 'Municipal', jurisdiction: city, category, type: ctype,
    description, url,
    tags: Array.from(new Set([slugify(city), ...tagWords])).sort(),
    dateAdded: new Date().toISOString().slice(0, 10),
  };
}

// ---- probes (documented patterns from docs/DATA-SCOUTING-STRATEGY.md) ----

async function probeEscribe(city) {
  const url = `https://pub-${slugify(city)}.escribemeetings.com/`;
  if (!(await ok200(url))) return null;
  return makeCandidate(city, 'council', 'Council portal',
    `${city} — Council Agendas & Minutes (eScribe)`, url,
    `Searchable eScribe meeting portal for ${city} with downloadable PDF agendas, minutes, and `
    + `supporting documents for regular, special, and committee meetings. Discovered via the `
    + `documented pub-[city].escribemeetings.com pattern; verified live.`,
    ['council', 'agendas', 'minutes', 'escribe']);
}

async function probeCivicweb(city) {
  const url = `https://${slugify(city)}.civicweb.net/Portal/`;
  if (!(await ok200(url))) return null;
  return makeCandidate(city, 'council', 'Council portal',
    `${city} — Council Agendas & Minutes (CivicWeb)`, url,
    `CivicWeb document portal for ${city} council and committee meetings with a meeting calendar `
    + `and downloadable PDF agendas and minutes. Verified live.`,
    ['council', 'agendas', 'minutes', 'civicweb']);
}

async function probeArcgisHub(city, knownHosts) {
  const slug = slugify(city);
  for (const host of [`${slug}.opendata.arcgis.com`, `data-${slug}.opendata.arcgis.com`]) {
    if (knownHosts.has(host)) continue; // city already lists this hub
    const api = `https://${host}/api/search/v1/collections/all/items?limit=1`;
    let owned = false;
    try {
      const res = await fetch(api, { headers: { 'User-Agent': BROWSER_UA }, signal: AbortSignal.timeout(12000) });
      if (res.status !== 200) continue; // placeholder hubs return 401
      const d = await res.json();
      for (const f of (d.features || []).slice(0, 5)) {
        const owner = String(f?.properties?.owner || '');
        if (owner && !/^[\d_]+$/.test(owner)) owned = true; // numeric owners are weak evidence
      }
    } catch { continue; }
    if (!owned) continue;
    return makeCandidate(city, 'open-data', 'Open data hub',
      `${city} Open Data Portal (ArcGIS Hub)`, `https://${host}/`,
      `ArcGIS Hub open data portal for ${city} with downloadable GIS datasets (CSV, GeoJSON, `
      + `Shapefile) and REST/OGC API access. Hub verified live via the OGC items API returning `
      + `HTTP 200 with municipal-owned items (placeholder hubs return 401).`,
      ['open data', 'gis', 'arcgis hub', 'datasets']);
  }
  return null;
}

/**
 * Questica wildcard-DNS trap: *.openbook.questica.com 302s any subdomain to a
 * branded missing.html that returns HTTP 200. Real portals answer 200 without
 * redirecting AND contain the full city slug in the body.
 */
async function probeQuestica(city) {
  const slug = slugify(city);
  const url = `https://${slug}.openbook.questica.com/`;
  let html = '';
  try {
    const res = await fetch(url, { headers: { 'User-Agent': BROWSER_UA }, redirect: 'manual', signal: AbortSignal.timeout(12000) });
    if (res.status !== 200) return null;
    html = (await res.text()).slice(0, 300000).toLowerCase();
  } catch { return null; }
  if (!html.includes(slug)) return null;
  return makeCandidate(city, 'budget', 'Budget transparency portal',
    `${city} — OpenBook Budget Explorer (Questica)`, url,
    `Interactive Questica OpenBook budget transparency portal for ${city} — explore operating and `
    + `capital budgets by department, project, and year, with drill-down visuals and CSV export. `
    + `Verified live (direct 200, city-named tenant; wildcard placeholders redirect and were rejected).`,
    ['budget', 'finance', 'open book', 'questica']);
}

// ---- gap analysis ----

function findGaps(data) {
  const byJur = new Map();
  for (const e of data) {
    if (!byJur.has(e.jurisdiction)) byJur.set(e.jurisdiction, { cats: new Set(), levels: new Set(), hosts: new Set() });
    const g = byJur.get(e.jurisdiction);
    g.cats.add(e.category);
    g.levels.add(e.level);
    try { g.hosts.add(new URL(e.url).hostname); } catch {}
  }
  const gaps = new Map();
  for (const [jur, g] of byJur) {
    if (!g.levels.has('Municipal') && !g.levels.has('Regional')) continue;
    const missing = TIER1.filter((c) => !g.cats.has(c));
    if (missing.length) gaps.set(jur, { missing, hosts: g.hosts });
  }
  return gaps;
}

export async function runResearch(env, { maxCities = null, dryRun = false } = {}) {
  const cap = maxCities || parseInt(env.MAX_CITIES || '25', 10);
  const today = new Date();
  const todayStr = today.toISOString().slice(0, 10);

  const data = await getJsonFile(env, 'data/resources.json');
  const gaps = findGaps(data);
  const ordered = [...gaps.keys()].sort();
  if (!ordered.length) return { candidates: 0 };

  const offset = Math.floor(Date.now() / 86400000) % ordered.length;
  const batch = Array.from({ length: Math.min(cap, ordered.length) },
    (_, i) => ordered[(offset + i) % ordered.length]);
  console.log(`[research] probing ${batch.length}/${ordered.length} gap cities (offset ${offset})`);

  // Concurrency-limited probe execution
  const candidates = [];
  const queue = [...batch];
  async function worker() {
    while (queue.length) {
      const city = queue.shift();
      const g = gaps.get(city);
      try {
        if (g.missing.includes('council')) {
          for (const p of [probeEscribe, probeCivicweb]) {
            const c = await p(city);
            if (c) candidates.push(c);
          }
        }
        if (g.missing.includes('open-data')) {
          const c = await probeArcgisHub(city, g.hosts);
          if (c) candidates.push(c);
        }
        if (g.missing.includes('budget')) {
          const c = await probeQuestica(city);
          if (c) candidates.push(c);
        }
      } catch (e) {
        console.log(`[research] ${city}: probe error ${e.message}`);
      }
    }
  }
  await Promise.all(Array.from({ length: 6 }, worker));

  // Dedupe within candidates and against existing catalog URLs
  const existing = new Set(data.map((e) => normUrl(e.url)));
  const seen = new Set();
  const fresh = candidates.filter((c) => {
    const n = normUrl(c.url);
    if (existing.has(n) || seen.has(n)) return false;
    seen.add(n);
    return true;
  });
  console.log(`[research] ${fresh.length} verified candidates`);
  for (const c of fresh) console.log(`[research]   + ${c.name}`);

  if (dryRun) return { candidates: fresh.length, dryRun: true };

  // Stage into new-resources.js on the rolling PR branch
  const stagingRaw = await getRawFile(env, 'scripts/new-resources.js');
  const currentStaged = JSON.parse(stagingRaw.slice(stagingRaw.indexOf('=', stagingRaw.indexOf('module.exports')) + 1, stagingRaw.lastIndexOf(']') + 1));
  const stagedSet = new Set(currentStaged.map((e) => normUrl(e.url)));
  const toStage = fresh.filter((c) => !stagedSet.has(normUrl(c.url)));

  if (toStage.length === 0) {
    console.log('[research] nothing new to stage');
    return { candidates: 0 };
  }

  const merged = [...currentStaged, ...toStage];
  const files = [
    { path: 'scripts/new-resources.js', content: STAGING_HEADER + JSON.stringify(merged, null, 2) + ';\n' },
    { path: 'scripts/candidates.json', content: JSON.stringify(toStage, null, 2) + '\n' },
  ];

  // Retire merged-out branch so a fresh one is cut from master
  const openPrs = await listPullRequests(env, BRANCH, 'open');
  const mergedPrs = await listPullRequests(env, BRANCH, 'closed').catch(() => []);
  const wasMerged = mergedPrs.some((p) => p.merged_at && !openPrs.some((o) => o.number === p.number));
  if (wasMerged && (await branchExists(env, BRANCH))) {
    console.log('[research] previous research PR was merged; recreating branch');
    await deleteBranch(env, BRANCH);
  }

  let baseSha;
  if (await branchExists(env, BRANCH)) {
    // merge master into the branch state implicitly by committing on top of
    // the branch's own history — conflicts are avoided because only this job
    // writes these paths between PR merges.
  } else {
    // create branch at master head
    const res = await fetch(`https://api.github.com/repos/${env.GH_REPO}/git/ref/heads/${env.GH_BRANCH || 'master'}`, {
      headers: { Authorization: `Bearer ${env.GH_TOKEN}`, Accept: 'application/vnd.github+json' },
    });
    baseSha = (await res.json()).object.sha;
    await fetch(`https://api.github.com/repos/${env.GH_REPO}/git/refs`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${env.GH_TOKEN}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ ref: `refs/heads/${BRANCH}`, sha: baseSha }),
    });
  }

  await commitFiles(
    { ...env },
    BRANCH,
    `research: stage ${toStage.length} candidate resource(s) [${todayStr}]`,
    files
  );

  const list = toStage.map((e) => `- **${e.name}** — \`${e.url}\``).join('\n');
  const body =
    `## 🔭 Daily research candidates — ${todayStr}\n\n`
    + `Automated discovery per \`docs/DATA-SCOUTING-STRATEGY.md\`, run by the \`awesome-canada-maintenance\` Cloudflare Worker.\n\n`
    + `### Pipeline\n`
    + `1. **Review** descriptions/URLs below, then merge this PR\n`
    + `2. The 04:00 UTC cleaning run folds staged entries into \`data/resources.json\`, regenerates the README, and commits — the Pages git integration deploys automatically\n\n`
    + `### Candidates (${toStage.length})\n${list}\n`;
  const title = `Research: new resource candidates (${todayStr})`;

  if (openPrs.length > 0) {
    await updatePullRequest(env, openPrs[0].number, { title, body });
    console.log(`[research] updated PR #${openPrs[0].number}`);
  } else {
    const pr = await createPullRequest(env, BRANCH, env.GH_BRANCH || 'master', title, body);
    console.log(`[research] opened PR #${pr.number}`);
  }

  return { candidates: toStage.length };
}
