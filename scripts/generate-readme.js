#!/usr/bin/env node

/**
 * Generates README.md from data/resources.json.
 *
 * Top-level organization is by FUNCTION (category). Within each category,
 * entries are grouped by REGION (Federal/National first, then provinces in
 * canonical order, then Atlantic, then Northern).
 *
 * Edit data/resources.json + scripts/categories.js and re-run this script to
 * regenerate; do not hand-edit the generated sections of README.md.
 */

const fs = require('fs');
const path = require('path');
const {
  CATEGORIES,
  REGIONS,
  JURISDICTION_TO_REGION,
} = require('./categories');

const DATA = path.join(__dirname, '..', 'data', 'resources.json');
const README = path.join(__dirname, '..', 'README.md');

const LEVEL_RANK = {
  'Federal': 0,
  'Crown Corp': 1,
  'Agency': 2,
  'Provincial': 3,
  'Regional': 4,
  'Municipal': 5,
};

function slugify(s) {
  return s.toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

function escapePipe(s) { return String(s).replace(/\|/g, '\\|'); }

function cmp(a, b) {
  const la = LEVEL_RANK[a.level] ?? 99;
  const lb = LEVEL_RANK[b.level] ?? 99;
  if (la !== lb) return la - lb;
  if (a.jurisdiction !== b.jurisdiction) return a.jurisdiction.localeCompare(b.jurisdiction);
  return a.name.localeCompare(b.name);
}

function main() {
  const data = JSON.parse(fs.readFileSync(DATA, 'utf8'));

  // Group by category → region.
  const byCategory = new Map();
  for (const c of CATEGORIES) byCategory.set(c.id, new Map());

  for (const e of data) {
    const cat = byCategory.get(e.category);
    if (!cat) {
      throw new Error(`Resource '${e.name}' has unknown category '${e.category}'`);
    }
    const region = JURISDICTION_TO_REGION[e.jurisdiction];
    if (!region) {
      throw new Error(`Resource '${e.name}' has unmapped jurisdiction '${e.jurisdiction}'`);
    }
    if (!cat.has(region)) cat.set(region, []);
    cat.get(region).push(e);
  }

  const lines = [];
  const total = data.length;

  lines.push('# Awesome Canada 🇨🇦');
  lines.push('');
  lines.push('> A curated list of official Canadian government digital tools, portals, open data, maps, calculators, and public-interest resources.');
  lines.push('');
  lines.push('[![CI](https://github.com/awesome-canada/awesome-canada/actions/workflows/validate.yml/badge.svg)](https://github.com/awesome-canada/awesome-canada/actions/workflows/validate.yml)');
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
  lines.push('');
  lines.push('---');
  lines.push('');
  lines.push('## Table of Contents');
  lines.push('');
  for (const c of CATEGORIES) {
    const regionMap = byCategory.get(c.id);
    const count = [...regionMap.values()].reduce((n, list) => n + list.length, 0);
    lines.push(`- [${c.icon} ${c.title}](#${slugify(c.title)}) — ${count}`);
  }
  lines.push('');
  lines.push('---');
  lines.push('');

  // Sections per category.
  for (const c of CATEGORIES) {
    const regionMap = byCategory.get(c.id);
    const total = [...regionMap.values()].reduce((n, list) => n + list.length, 0);
    if (total === 0) continue;

    lines.push(`## ${c.icon} ${c.title}`);
    lines.push('');

    for (const region of REGIONS) {
      const list = regionMap.get(region.id);
      if (!list || list.length === 0) continue;
      list.sort(cmp);

      lines.push(`### ${region.title}`);
      lines.push('');
      lines.push('| Name | Jurisdiction · Level | Type | Description | URL |');
      lines.push('|---|---|---|---|---|');
      for (const e of list) {
        const juris = `${escapePipe(e.jurisdiction)} · ${escapePipe(e.level)}`;
        lines.push(
          `| ${escapePipe(e.name)} | ${juris} | ${escapePipe(e.type)} | ${escapePipe(e.description)} | ${e.url} |`,
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

  fs.writeFileSync(README, lines.join('\n'), 'utf8');
  console.log(`Wrote README.md (${lines.length} lines, ${total} resources)`);
}

main();
