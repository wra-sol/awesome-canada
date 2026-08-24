#!/usr/bin/env node

/**
 * Stage discovered candidates into the new-resources.js queue.
 *
 * Reads scripts/candidates.json (produced by scripts/discover-candidates.py),
 * dedupes by normalized URL against both the current staging file and
 * candidates.json itself, and rewrites scripts/new-resources.js with the
 * merged array. Entries already in data/resources.json are NOT checked here —
 * scripts/migrate.js skips them at merge time.
 */

const fs = require('fs');
const path = require('path');

const STAGING = path.join(__dirname, 'new-resources.js');
const CANDIDATES = path.join(__dirname, 'candidates.json');

const HEADER = `/**
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

function norm(url) {
  return String(url || '').toLowerCase().replace(/\/+$/, '');
}

function main() {
  const staged = require('./new-resources');

  let candidates = [];
  try {
    candidates = JSON.parse(fs.readFileSync(CANDIDATES, 'utf8'));
  } catch {
    console.log('No candidates.json found (or unreadable) — nothing to stage.');
    console.log(JSON.stringify({ staged: 0 }));
    return;
  }

  const seen = new Set(staged.map((e) => norm(e.url)));
  const fresh = [];
  for (const c of candidates) {
    const key = norm(c.url);
    if (!c.name || !c.url || seen.has(key)) continue;
    seen.add(key);
    fresh.push(c);
  }

  const merged = [...staged, ...fresh];
  fs.writeFileSync(STAGING, HEADER + JSON.stringify(merged, null, 2) + ';\n', 'utf8');

  console.log(`Staged ${fresh.length} new candidate(s); staging queue now has ${merged.length} entries.`);
  console.log(JSON.stringify({ staged: fresh.length, total: merged.length }));

  if (fresh.length > 0) {
    for (const e of fresh) console.log(`  + ${e.name} — ${e.url}`);
  }
}

main();
