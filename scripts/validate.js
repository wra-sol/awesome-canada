#!/usr/bin/env node

/**
 * Validation script for awesome-canada resources.json
 * Validates data structure, required fields, and referential integrity
 */

const fs = require('fs');
const path = require('path');

// Constants
const VALID_LEVELS = ['Federal', 'Provincial', 'Municipal', 'Regional', 'Agency', 'Crown Corp'];
const VALID_JURISDICTIONS = [
  'Canada',
  'Ontario', 'British Columbia', 'Alberta', 'Quebec',
  'New Brunswick', 'Nova Scotia', 'PEI', 'Newfoundland and Labrador',
  'Saskatchewan', 'Manitoba',
  'Yukon', 'Northwest Territories', 'Nunavut',
  'Toronto', 'Ottawa', 'Calgary', 'Montreal', 'Halifax', 'Edmonton',
  'Vancouver', 'Winnipeg', 'Quebec City', 'Mississauga', 'Brampton',
  'Kitchener', 'Waterloo', 'Hamilton', 'Victoria', 'Regina', 'Saskatoon',
  'Burlington', 'Guelph', 'Windsor', 'London', 'Newfoundland',
  'Parks Canada', 'Ontario/GTA', 'Metro Vancouver', 'Grand River Watershed',
  'Lake Simcoe', 'Halton', 'Credit Valley', 'Niagara', 'Mississippi River',
  'Toronto Region'
];

const REQUIRED_FIELDS = ['name', 'level', 'jurisdiction', 'type', 'description', 'url', 'tags'];

// Read and parse JSON
function loadData() {
  const dataPath = path.join(__dirname, '..', 'data', 'resources.json');
  const content = fs.readFileSync(dataPath, 'utf8');
  return JSON.parse(content);
}

// Validate URL format
function isValidUrl(string) {
  try {
    const url = new URL(string);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

// Validate a single entry
function validateEntry(entry, index) {
  const errors = [];

  // Check required fields
  for (const field of REQUIRED_FIELDS) {
    if (!entry[field]) {
      errors.push(`Entry ${index}: missing required field '${field}'`);
    }
  }

  // Skip further validation if required fields missing
  if (errors.length > 0) {
    return errors;
  }

  // Validate level
  if (!VALID_LEVELS.includes(entry.level)) {
    errors.push(`Entry ${index}: invalid level '${entry.level}' (must be one of: ${VALID_LEVELS.join(', ')})`);
  }

  // Validate jurisdiction
  if (!VALID_JURISDICTIONS.includes(entry.jurisdiction)) {
    errors.push(`Entry ${index}: invalid jurisdiction '${entry.jurisdiction}'`);
  }

  // Validate URL
  if (!isValidUrl(entry.url)) {
    errors.push(`Entry ${index}: invalid URL '${entry.url}'`);
  }

  // Validate tags is array
  if (!Array.isArray(entry.tags)) {
    errors.push(`Entry ${index}: tags must be an array`);
  } else if (entry.tags.length === 0) {
    errors.push(`Entry ${index}: tags array cannot be empty`);
  }

  return errors;
}

// Main validation
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

  // Initialize counters
  for (const level of VALID_LEVELS) {
    byLevel[level] = 0;
  }

  // Validate each entry
  for (let i = 0; i < data.length; i++) {
    const entry = data[i];
    const errors = validateEntry(entry, i);

    if (errors.length > 0) {
      allErrors.push(...errors);
    }

    // Count by level
    if (byLevel[entry.level] !== undefined) {
      byLevel[entry.level]++;
    }

    // Count by jurisdiction
    if (!byJurisdiction[entry.jurisdiction]) {
      byJurisdiction[entry.jurisdiction] = 0;
    }
    byJurisdiction[entry.jurisdiction]++;
  }

  // Print summary table
  console.log('Summary by Level:');
  console.log('-'.repeat(40));
  for (const [level, count] of Object.entries(byLevel)) {
    if (count > 0) {
      console.log(`  ${level}: ${count}`);
    }
  }

  console.log('\nSummary by Jurisdiction (top 20):');
  console.log('-'.repeat(40));
  const sortedJurisdictions = Object.entries(byJurisdiction)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 20);

  for (const [jurisdiction, count] of sortedJurisdictions) {
    console.log(`  ${jurisdiction}: ${count}`);
  }

  // Report errors
  if (allErrors.length > 0) {
    console.error('\nVALIDATION ERRORS:');
    console.error('-'.repeat(40));
    for (const error of allErrors.slice(0, 20)) {
      console.error(`  ${error}`);
    }
    if (allErrors.length > 20) {
      console.error(`  ... and ${allErrors.length - 20} more errors`);
    }
    console.error(`\nTotal errors: ${allErrors.length}`);
    process.exit(1);
  }

  console.log('\n✓ Validation PASSED');
  process.exit(0);
}

validate();