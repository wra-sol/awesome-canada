#!/usr/bin/env node
/**
 * Regenerate worker/categories.json from scripts/categories.js.
 * Run this whenever the canonical taxonomy changes; CI fails if stale.
 */
const fs = require('fs');
const path = require('path');
const { CATEGORIES, REGIONS, JURISDICTION_TO_REGION } = require('./categories');

const out = path.join(__dirname, '..', 'worker', 'categories.json');
fs.writeFileSync(
  out,
  JSON.stringify({ CATEGORIES, REGIONS, JURISDICTION_TO_REGION }, null, 1) + '\n'
);
console.log(`worker/categories.json synced (${CATEGORIES.length} categories, ${Object.keys(JURISDICTION_TO_REGION).length} jurisdictions)`);
