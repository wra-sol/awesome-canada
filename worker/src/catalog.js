/**
 * Shared catalog access + formatting helpers.
 * Catalog snapshot is synced from scripts/categories.js by
 * scripts/sync-worker-catalog.js; CI (validate.yml) fails if stale.
 */
import catalog from '../categories.json' with { type: 'json' };

export const { CATEGORIES, REGIONS, JURISDICTION_TO_REGION } = catalog;

export const LEVEL_RANK = {
  Federal: 0,
  'Crown Corp': 1,
  Agency: 2,
  Provincial: 3,
  Regional: 4,
  Municipal: 5,
};

export const CATEGORY_IDS = new Set(CATEGORIES.map((c) => c.id));

export function normUrl(u) {
  return String(u || '').toLowerCase().replace(/\/+$/, '');
}

export function slugifyAnchor(s) {
  return s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-');
}

export function slugify(name) {
  const s = name.normalize('NFKD').replace(/[\u0300-\u036f]/g, '');
  return Array.from(s.toLowerCase()).filter((ch) => /[a-z0-9]/.test(ch)).join('');
}

const escapePipe = (s) => String(s).replace(/\|/g, '\\|');

function cmpEntries(a, b) {
  const la = LEVEL_RANK[a.level] ?? 99;
  const lb = LEVEL_RANK[b.level] ?? 99;
  if (la !== lb) return la - lb;
  if (a.jurisdiction !== b.jurisdiction) return a.jurisdiction.localeCompare(b.jurisdiction);
  return a.name.localeCompare(b.name);
}

/**
 * Faithful port of scripts/generate-readme.js (badges updated: scheduled
 * jobs run on Cloudflare Workers, not GitHub Actions).
 */
export function generateReadme(data) {
  const byCategory = new Map();
  for (const c of CATEGORIES) byCategory.set(c.id, new Map());
  for (const e of data) {
    const region = JURISDICTION_TO_REGION[e.jurisdiction];
    if (!region) throw new Error(`unmapped jurisdiction '${e.jurisdiction}'`);
    if (!byCategory.has(e.category)) throw new Error(`unknown category '${e.category}'`);
    const cat = byCategory.get(e.category);
    if (!cat.has(region)) cat.set(region, []);
    cat.get(region).push(e);
  }

  const lines = [];
  const total = data.length;

  lines.push('# Awesome Canada 🇨🇦');
  lines.push('');
  lines.push('> A curated list of official Canadian government digital tools, portals, open data, maps, calculators, and public-interest resources.');
  lines.push('');
  lines.push('[![Validate](https://github.com/wra-sol/awesome-canada/actions/workflows/validate.yml/badge.svg)](https://github.com/wra-sol/awesome-canada/actions/workflows/validate.yml)');
  lines.push('[![Live](https://img.shields.io/website?url=https%3A%2F%2Fawesome-canada.ca&label=live)](https://awesome-canada.ca/)');
  lines.push('[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)');
  lines.push('[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-green.svg)](CONTRIBUTING.md)');
  lines.push('');
  lines.push(`**Quick stats:** ${total} resources · ${CATEGORIES.length} categories · covering Federal, Provincial, Territorial, Regional and Municipal governments.`);
  lines.push('');
  lines.push('---');
  lines.push('');
  lines.push('## About');
  lines.push('');
  lines.push('This list is organized by **function first, then region**. Find the kind of resource you need (taxes, health, parks, justice, etc.), then drill down to the government level and jurisdiction that applies to you. Every entry links directly to an official government or public-interest source.');
  lines.push('');
  lines.push('The list is generated from [`data/resources.json`](data/resources.json) — the JSON file is the source of truth. Do not edit the tables in this README by hand; add/fix entries in the JSON and re-run `node scripts/generate-readme.js`.');
  lines.push('');
  lines.push('- New resources: see [CONTRIBUTING.md](CONTRIBUTING.md)');
  lines.push('- Schema and categories: [`scripts/categories.js`](scripts/categories.js)');
  lines.push('- Maintenance runs on a Cloudflare Worker (`worker/`) — nightly link cleaning at 04:00 UTC and research at 05:00 UTC');
  lines.push('');
  lines.push('---');
  lines.push('');
  lines.push('## Table of Contents');
  lines.push('');
  for (const c of CATEGORIES) {
    const regionMap = byCategory.get(c.id);
    const count = [...regionMap.values()].reduce((n, list) => n + list.length, 0);
    lines.push(`- [${c.icon} ${c.title}](#${slugifyAnchor(c.title)}) — ${count}`);
  }
  lines.push('');
  lines.push('---');
  lines.push('');

  for (const c of CATEGORIES) {
    const regionMap = byCategory.get(c.id);
    const count = [...regionMap.values()].reduce((n, list) => n + list.length, 0);
    if (count === 0) continue;
    lines.push(`## ${c.icon} ${c.title}`);
    lines.push('');
    for (const region of REGIONS) {
      const list = regionMap.get(region.id);
      if (!list || list.length === 0) continue;
      list.sort(cmpEntries);
      lines.push(`### ${region.title}`);
      lines.push('');
      lines.push('| Name | Jurisdiction · Level | Type | Description | URL |');
      lines.push('|---|---|---|---|---|');
      for (const e of list) {
        lines.push(
          `| ${escapePipe(e.name)} | ${escapePipe(e.jurisdiction)} · ${escapePipe(e.level)} | ${escapePipe(e.type)} | ${escapePipe(e.description)} | ${e.url} |`
        );
      }
      lines.push('');
    }
  }

  lines.push('---');
  lines.push('');
  lines.push('## Contributing');
  lines.push('');
  lines.push('See [CONTRIBUTING.md](CONTRIBUTING.md) for how to add new resources. In short: add to `data/resources.json`, run `node scripts/validate.js`, then `node scripts/generate-readme.js` before opening a PR.');
  lines.push('');
  lines.push('## License');
  lines.push('');
  lines.push('[MIT](LICENSE)');
  lines.push('');

  return lines.join('\n');
}

/** Port of scripts/migrate.js merge semantics: append non-duplicates, canonical sort+order. */
export function mergeStaged(data, staged) {
  const byUrl = new Map(data.map((e) => [normUrl(e.url), e]));
  let added = 0;
  let skipped = 0;
  for (const e of staged) {
    const key = normUrl(e.url);
    if (!key || byUrl.has(key)) { skipped++; continue; }
    if (!CATEGORY_IDS.has(e.category)) throw new Error(`unknown category '${e.category}' for '${e.name}'`);
    data.push(e);
    byUrl.set(key, e);
    added++;
  }
  data.sort((a, b) => {
    if (a.category !== b.category) return a.category.localeCompare(b.category);
    const la = LEVEL_RANK[a.level] ?? 99;
    const lb = LEVEL_RANK[b.level] ?? 99;
    if (la !== lb) return la - lb;
    if (a.jurisdiction !== b.jurisdiction) return a.jurisdiction.localeCompare(b.jurisdiction);
    return a.name.localeCompare(b.name);
  });
  const ordered = data.map((e) => {
    const out = {
      name: e.name, level: e.level, jurisdiction: e.jurisdiction, category: e.category,
      type: e.type, description: e.description, url: e.url, tags: e.tags,
    };
    if (e.dateAdded) out.dateAdded = e.dateAdded;
    if (e.kind) out.kind = e.kind;
    return out;
  });
  return { ordered, added, skipped };
}

/** Parse scripts/new-resources.js raw text into its entries array. */
export function parseStaging(raw) {
  const idx = raw.indexOf('module.exports');
  if (idx === -1) return [];
  const eq = raw.indexOf('=', idx);
  const end = raw.lastIndexOf(']');
  return JSON.parse(raw.slice(eq + 1, end + 1));
}
