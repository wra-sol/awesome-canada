#!/usr/bin/env node

/**
 * One-shot migration: add a `category` field to every entry in
 * data/resources.json, append curated new resources, deduplicate by URL, and
 * write the file back with stable field ordering.
 */

const fs = require('fs');
const path = require('path');
const { categorize, CATEGORY_IDS } = require('./categories');
const newResources = require('./new-resources');

const DATA = path.join(__dirname, '..', 'data', 'resources.json');

function orderedEntry(e) {
  // Stable field order for readability in diffs.
  return {
    name: e.name,
    level: e.level,
    jurisdiction: e.jurisdiction,
    category: e.category,
    type: e.type,
    description: e.description,
    url: e.url,
    tags: e.tags,
  };
}

function main() {
  const raw = fs.readFileSync(DATA, 'utf8');
  const existing = JSON.parse(raw);

  // 1) Ensure every existing entry has a category (heuristic-assigned).
  let assigned = 0;
  for (const e of existing) {
    if (!e.category) {
      e.category = categorize(e);
      assigned++;
    }
    if (!CATEGORY_IDS.has(e.category)) {
      throw new Error(`Unknown category '${e.category}' for '${e.name}'`);
    }
  }

  // 2) Append new resources, skipping duplicates by normalized URL.
  const byUrl = new Map();
  for (const e of existing) {
    byUrl.set(String(e.url || '').toLowerCase().replace(/\/+$/, ''), e);
  }

  let added = 0;
  let skipped = 0;
  for (const e of newResources) {
    const key = String(e.url || '').toLowerCase().replace(/\/+$/, '');
    if (byUrl.has(key)) { skipped++; continue; }
    if (!CATEGORY_IDS.has(e.category)) {
      throw new Error(`Unknown category '${e.category}' for new '${e.name}'`);
    }
    existing.push(e);
    byUrl.set(key, e);
    added++;
  }

  // 3) Sort: category → level priority → jurisdiction → name.
  const levelRank = {
    'Federal': 0,
    'Crown Corp': 1,
    'Agency': 2,
    'Provincial': 3,
    'Regional': 4,
    'Municipal': 5,
  };
  existing.sort((a, b) => {
    if (a.category !== b.category) return a.category.localeCompare(b.category);
    const la = levelRank[a.level] ?? 99;
    const lb = levelRank[b.level] ?? 99;
    if (la !== lb) return la - lb;
    if (a.jurisdiction !== b.jurisdiction) return a.jurisdiction.localeCompare(b.jurisdiction);
    return a.name.localeCompare(b.name);
  });

  const cleaned = existing.map(orderedEntry);
  fs.writeFileSync(DATA, JSON.stringify(cleaned, null, 2) + '\n', 'utf8');

  console.log(`Migration complete:`);
  console.log(`  Existing entries categorized: ${assigned}`);
  console.log(`  New entries added:            ${added}`);
  console.log(`  Duplicates skipped:           ${skipped}`);
  console.log(`  Total entries:                ${cleaned.length}`);
}

main();
