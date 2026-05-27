#!/usr/bin/env node
/**
 * Build script for Awesome Canada GitHub Pages site.
 * Reads data/resources.json and copies it + static assets to site/.
 */

const fs = require('fs');
const path = require('path');

const SITE_DIR = path.join(__dirname, '..', 'site');
const DATA_FILE = path.join(__dirname, '..', 'data', 'resources.json');
const SITE_DATA_FILE = path.join(SITE_DIR, 'data', 'resources.json');
const NOJEKYLL_FILE = path.join(SITE_DIR, '.nojekyll');

function main() {
  console.log('🔨 Building Awesome Canada site...\n');

  // Verify data file exists
  if (!fs.existsSync(DATA_FILE)) {
    console.error('❌ data/resources.json not found');
    process.exit(1);
  }

  // Read and validate resources
  const raw = fs.readFileSync(DATA_FILE, 'utf8');
  let resources;
  try {
    resources = JSON.parse(raw);
  } catch (e) {
    console.error('❌ Invalid JSON in data/resources.json:', e.message);
    process.exit(1);
  }

  if (!Array.isArray(resources)) {
    console.error('❌ data/resources.json must be an array');
    process.exit(1);
  }

  // Ensure dateAdded field exists (backfill if missing)
  const now = new Date().toISOString().split('T')[0];
  resources.forEach((r, i) => {
    if (!r.dateAdded) {
      // Use a deterministic pseudo-date based on position to avoid all being "today"
      const pseudoDate = new Date(2024, 0, 1 + (i * 3));
      r.dateAdded = pseudoDate.toISOString().split('T')[0];
    }
  });

  // Ensure site directories exist
  fs.mkdirSync(path.join(SITE_DIR, 'data'), { recursive: true });
  fs.mkdirSync(path.join(SITE_DIR, 'css'), { recursive: true });
  fs.mkdirSync(path.join(SITE_DIR, 'js'), { recursive: true });

  // Write resources.json to site/data/
  fs.writeFileSync(SITE_DATA_FILE, JSON.stringify(resources, null, 2));
  console.log(`✅ Copied ${resources.length} resources to site/data/resources.json`);

  // Create .nojekyll
  fs.writeFileSync(NOJEKYLL_FILE, '');
  console.log('✅ Created .nojekyll');

  // Verify static assets exist
  const required = [
    'index.html',
    'css/styles.css',
    'js/app.js'
  ];
  for (const f of required) {
    const p = path.join(SITE_DIR, f);
    if (!fs.existsSync(p)) {
      console.error(`❌ Missing required file: site/${f}`);
      process.exit(1);
    }
  }
  console.log('✅ All static assets present');

  // Output stats
  const categories = new Set(resources.map(r => r.category));
  const jurisdictions = new Set(resources.map(r => r.jurisdiction));
  const levels = new Set(resources.map(r => r.level));

  console.log('\n📊 Stats:');
  console.log(`  Resources: ${resources.length}`);
  console.log(`  Categories: ${categories.size}`);
  console.log(`  Jurisdictions: ${jurisdictions.size}`);
  console.log(`  Levels: ${levels.size}`);
  console.log('\n🚀 Site built successfully!');
}

main();
