#!/usr/bin/env node

/**
 * Validation script for awesome-canada resources.json.
 * Validates data structure, required fields, URL format, and referential
 * integrity with the category/region taxonomy defined in categories.js.
 */

const fs = require('fs');
const path = require('path');

const {
  CATEGORIES,
  CATEGORY_IDS,
  JURISDICTION_TO_REGION,
} = require('./categories');

const VALID_LEVELS = ['Federal', 'Provincial', 'Municipal', 'Regional', 'Agency', 'Crown Corp'];
const VALID_JURISDICTIONS = Object.keys(JURISDICTION_TO_REGION);
const REQUIRED_FIELDS = ['name', 'level', 'jurisdiction', 'category', 'type', 'description', 'url', 'tags'];

function loadData() {
  const dataPath = path.join(__dirname, '..', 'data', 'resources.json');
  return JSON.parse(fs.readFileSync(dataPath, 'utf8'));
}

function isValidUrl(s) {
  try {
    const u = new URL(s);
    return u.protocol === 'http:' || u.protocol === 'https:';
  } catch {
    return false;
  }
}

function validateEntry(entry, index) {
  const errors = [];

  for (const field of REQUIRED_FIELDS) {
    if (!entry[field]) {
      errors.push(`Entry ${index}: missing required field '${field}' (name='${entry.name || '?'}')`);
    }
  }
  if (errors.length > 0) return errors;

  if (!VALID_LEVELS.includes(entry.level)) {
    errors.push(`Entry ${index}: invalid level '${entry.level}' (must be one of: ${VALID_LEVELS.join(', ')})`);
  }
  if (!VALID_JURISDICTIONS.includes(entry.jurisdiction)) {
    errors.push(`Entry ${index}: invalid jurisdiction '${entry.jurisdiction}'`);
  }
  if (!CATEGORY_IDS.has(entry.category)) {
    errors.push(`Entry ${index}: invalid category '${entry.category}' (see scripts/categories.js)`);
  }
  if (!isValidUrl(entry.url)) {
    errors.push(`Entry ${index}: invalid URL '${entry.url}'`);
  }
  if (!Array.isArray(entry.tags)) {
    errors.push(`Entry ${index}: tags must be an array`);
  } else if (entry.tags.length === 0) {
    errors.push(`Entry ${index}: tags array cannot be empty`);
  }

  return errors;
}

function validate() {
  console.log('Loading data...\n');

  let data;
  try {
    data = loadData();
  } catch (err) {
    console.error('ERROR: Failed to load or parse data/resources.json');
    console.error(err.message);
    process.exit(1);
  }

  console.log(`Total entries: ${data.length}\n`);

  const allErrors = [];
  const byLevel = {};
  const byJurisdiction = {};
  const byCategory = {};
  const urls = new Map();

  for (const lvl of VALID_LEVELS) byLevel[lvl] = 0;
  for (const c of CATEGORIES) byCategory[c.id] = 0;

  for (let i = 0; i < data.length; i++) {
    const entry = data[i];
    const errors = validateEntry(entry, i);
    if (errors.length) allErrors.push(...errors);

    if (byLevel[entry.level] !== undefined) byLevel[entry.level]++;
    byJurisdiction[entry.jurisdiction] = (byJurisdiction[entry.jurisdiction] || 0) + 1;
    if (byCategory[entry.category] !== undefined) byCategory[entry.category]++;

    const key = String(entry.url || '').toLowerCase().replace(/\/+$/, '');
    if (key) {
      if (urls.has(key)) {
        allErrors.push(`Entry ${i}: duplicate URL (first seen at entry ${urls.get(key)}): ${entry.url}`);
      } else {
        urls.set(key, i);
      }
    }
  }

  console.log('Summary by Category:');
  console.log('-'.repeat(40));
  for (const c of CATEGORIES) {
    console.log(`  ${c.title.padEnd(34)} ${byCategory[c.id]}`);
  }

  console.log('\nSummary by Level:');
  console.log('-'.repeat(40));
  for (const [lvl, count] of Object.entries(byLevel)) {
    if (count > 0) console.log(`  ${lvl}: ${count}`);
  }

  console.log('\nSummary by Jurisdiction (top 20):');
  console.log('-'.repeat(40));
  const topJur = Object.entries(byJurisdiction).sort((a, b) => b[1] - a[1]).slice(0, 20);
  for (const [j, count] of topJur) console.log(`  ${j}: ${count}`);

  if (allErrors.length > 0) {
    console.error('\nVALIDATION ERRORS:');
    console.error('-'.repeat(40));
    for (const err of allErrors.slice(0, 30)) console.error(`  ${err}`);
    if (allErrors.length > 30) {
      console.error(`  ... and ${allErrors.length - 30} more errors`);
    }
    console.error(`\nTotal errors: ${allErrors.length}`);
    process.exit(1);
  }

  console.log('\n✓ Validation PASSED');
  process.exit(0);
}

validate();
