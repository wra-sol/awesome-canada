#!/usr/bin/env node

/**
 * Derives optional catalogue metadata that is a property of the source, the
 * resource type, or the URL shape. Nothing here is editorial guesswork: every
 * field has a deterministic rule, and anything the rules cannot establish is
 * left off the entry.
 *
 *   access        how you consume it: api | dataset | portal | interactive | documents | service
 *   format        machine formats advertised by the type, tags or file extension
 *   licence       the source's default open licence (federal/provincial domains only)
 *   language      official-language availability where it is structural (federal, QC, NB)
 *   lastVerified  date the health job last saw a 2xx, from docs/state/link-health.json
 *   previousUrl   URL this entry was migrated from (set by the link sweep; preserved)
 *
 * Idempotent. Run after editing data/resources.json:
 *   node scripts/enrich.js           # dry run, prints coverage
 *   node scripts/enrich.js --write   # rewrite data/resources.json
 */

const fs = require('fs');
const path = require('path');

const DATA = path.join(__dirname, '..', 'data', 'resources.json');
const HEALTH = path.join(__dirname, '..', 'docs', 'state', 'link-health.json');
const MIGRATIONS = path.join(__dirname, '..', 'data', 'url-migrations.json');

const LICENCES = [
  [/(^|\.)canada\.ca$/, 'OGL-Canada'],
  [/(^|\.)gc\.ca$/, 'OGL-Canada'],
  [/(^|\.)ontario\.ca$/, 'OGL-Ontario'],
  [/(^|\.)gov\.bc\.ca$/, 'OGL-BC'],
  [/(^|\.)alberta\.ca$/, 'OGL-Alberta'],
  [/(^|\.)saskatchewan\.ca$/, 'OGL-Saskatchewan'],
  [/(^|\.)gov\.mb\.ca$/, 'OGL-Manitoba'],
  [/(^|\.)novascotia\.ca$/, 'OGL-Nova Scotia'],
  [/(^|\.)gnb\.ca$/, 'OGL-New Brunswick'],
  [/(^|\.)princeedwardisland\.ca$/, 'OGL-PEI'],
  [/(^|\.)gov\.nl\.ca$/, 'OGL-Newfoundland and Labrador'],
  [/(^|\.)yukon\.ca$/, 'OGL-Yukon'],
  [/(^|\.)gov\.nt\.ca$/, 'OGL-NWT'],
  [/(^|\.)gov\.nu\.ca$/, 'OGL-Nunavut'],
  [/(^|\.)donneesquebec\.ca$/, 'CC-BY-4.0'],
];

const ACCESS_RULES = [
  ['api', /\b(api|web service|web services)\b/i],
  ['dataset', /\b(dataset|data file|data files|bulk|download|gtfs feed|gtfs)\b/i],
  ['portal', /\b(portal|hub|catalogue|catalog|directory)\b/i],
  ['interactive', /\b(map|mapping|dashboard|calculator|lookup|interactive|tracker|visuali[sz]ation|search|tool)\b/i],
  ['documents', /\b(document|documents|report|reports|budget|agenda|agendas|minutes|register|records|publication|publications|archive|plan|bylaw|bylaws)\b/i],
];

const FORMAT_TAGS = {
  api: 'API',
  csv: 'CSV',
  geojson: 'GeoJSON',
  gtfs: 'GTFS',
  json: 'JSON',
  kml: 'KML',
  pdf: 'PDF',
  shapefile: 'Shapefile',
  xlsx: 'XLSX',
};

const FORMAT_EXT = {
  '.csv': 'CSV',
  '.geojson': 'GeoJSON',
  '.json': 'JSON',
  '.kml': 'KML',
  '.kmz': 'KML',
  '.pdf': 'PDF',
  '.xlsx': 'XLSX',
};

function hostOf(url) {
  try {
    return new URL(url).hostname.toLowerCase().replace(/^www\./, '');
  } catch {
    return '';
  }
}

function accessFor(entry) {
  const type = String(entry.type || '');
  for (const [access, re] of ACCESS_RULES) {
    if (re.test(type)) return access;
  }
  return 'service';
}

function formatsFor(entry) {
  const found = new Set();
  const type = String(entry.type || '');
  const name = String(entry.name || '');
  if (/\bapi\b/i.test(type)) found.add('API');
  if (/\bgtfs\b/i.test(type) || /\bgtfs\b/i.test(name)) found.add('GTFS');
  for (const tag of entry.tags || []) {
    const format = FORMAT_TAGS[String(tag).toLowerCase()];
    if (format) found.add(format);
  }
  try {
    const ext = path.extname(new URL(entry.url).pathname).toLowerCase();
    if (FORMAT_EXT[ext]) found.add(FORMAT_EXT[ext]);
  } catch {
    // invalid URLs are caught by validate.js
  }
  return [...found].sort();
}

function licenceFor(url) {
  const host = hostOf(url);
  for (const [re, name] of LICENCES) {
    if (re.test(host)) return name;
  }
  return null;
}

function languageFor(entry) {
  if (entry.level === 'Federal') return ['en', 'fr'];
  if (entry.jurisdiction === 'Quebec') return ['fr', 'en'];
  if (entry.jurisdiction === 'New Brunswick') return ['en', 'fr'];
  return null;
}

function main() {
  const write = process.argv.includes('--write');
  const data = JSON.parse(fs.readFileSync(DATA, 'utf8'));
  const health = fs.existsSync(HEALTH) ? JSON.parse(fs.readFileSync(HEALTH, 'utf8')) : {};
  const migrations = fs.existsSync(MIGRATIONS)
    ? JSON.parse(fs.readFileSync(MIGRATIONS, 'utf8'))
    : [];
  const previousByUrl = new Map(migrations.map((m) => [m.to, m.from]));

  const coverage = {
    access: 0,
    format: 0,
    licence: 0,
    language: 0,
    lastVerified: 0,
    previousUrl: 0,
  };

  for (const entry of data) {
    entry.access = accessFor(entry);

    const formats = formatsFor(entry);
    if (formats.length) entry.format = formats;
    else delete entry.format;

    const licence = licenceFor(entry.url);
    if (licence) entry.licence = licence;
    else delete entry.licence;

    const language = languageFor(entry);
    if (language) entry.language = language;
    else delete entry.language;

    const checked = health[entry.url]?.last_checked;
    if (health[entry.url]?.status === 'ok' && checked) {
      const current = entry.lastVerified;
      entry.lastVerified = current && current > checked ? current : checked;
    }

    const previous = previousByUrl.get(entry.url);
    if (previous) entry.previousUrl = previous;
    else if (entry.previousUrl) delete entry.previousUrl;
    for (const key of Object.keys(coverage)) {
      if (entry[key] !== undefined) coverage[key] += 1;
    }
  }

  const total = data.length;
  console.log(`entries: ${total}`);
  for (const [field, n] of Object.entries(coverage)) {
    console.log(`  ${field.padEnd(13)} ${String(n).padStart(5)}  ${((n / total) * 100).toFixed(0)}%`);
  }

  if (write) {
    fs.writeFileSync(DATA, JSON.stringify(data, null, 2) + '\n');
    console.log(`wrote ${DATA}`);
  } else {
    console.log('(dry run — pass --write to apply)');
  }
}

main();
