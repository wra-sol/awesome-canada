#!/usr/bin/env node
/**
 * Backfill the `kind` facet in data/resources.json.
 *
 * By default only entries missing a kind are assigned (classified from their
 * type/name/tags via scripts/kinds.js), so manual corrections stick.
 * Pass --force to recompute every entry from the rules.
 */

const fs = require('fs');
const path = require('path');
const { classify, KIND_IDS } = require('./kinds');

const DATA_FILE = path.join(__dirname, '..', 'data', 'resources.json');
const force = process.argv.includes('--force');

const resources = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
let assigned = 0;
for (const r of resources) {
  if (force || !r.kind || !KIND_IDS.has(r.kind)) {
    const k = classify(force ? { ...r, kind: undefined } : r);
    if (r.kind !== k) { r.kind = k; assigned++; }
  }
}

fs.writeFileSync(DATA_FILE, JSON.stringify(resources, null, 2) + '\n');
console.log(`Assigned kind on ${assigned} of ${resources.length} entries.`);
