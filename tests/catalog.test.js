/**
 * Unit tests for worker/src/catalog.js — URL normalization, staging-queue
 * parsing, merge semantics, and README generation.
 * Run: node --test tests/
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';

import {
  normUrl,
  slugify,
  slugifyAnchor,
  parseStaging,
  mergeStaged,
  generateReadme,
} from '../worker/src/catalog.js';

const ENTRY = (over = {}) => ({
  name: 'Alpha Open Data',
  level: 'Federal',
  jurisdiction: 'Canada',
  category: 'open-data',
  type: 'Portal',
  description: 'A portal.',
  url: 'https://open.example/',
  tags: ['example'],
  ...over,
});

test('normUrl lowercases and strips trailing slashes', () => {
  assert.equal(normUrl('HTTPS://Example.GOV.CA/Path/'), 'https://example.gov.ca/path');
  assert.equal(normUrl('https://x.example'), 'https://x.example');
  assert.equal(normUrl(null), '');
  assert.equal(normUrl(undefined), '');
});

test('slugify strips accents and non-alphanumerics', () => {
  assert.equal(slugify('Québec — Carte des inondations'), 'quebeccartedesinondations');
});

test('slugifyAnchor produces GitHub-style anchors', () => {
  assert.equal(slugifyAnchor('Parks & Recreation'), 'parks-and-recreation');
  assert.equal(slugifyAnchor('Open Data'), 'open-data');
});

test('parseStaging extracts the entries array from new-resources.js raw text', () => {
  const raw = `// staging queue
const meta = { note: 'module.exports marker inside a string' };
module.exports = [
  { "name": "One", "url": "https://one.example/" },
  { "name": "Two", "url": "https://two.example/" }
];
`;
  const entries = parseStaging(raw);
  assert.equal(entries.length, 2);
  assert.equal(entries[0].name, 'One');
});

test('parseStaging returns empty array when no staging marker exists', () => {
  assert.deepEqual(parseStaging('console.log("nothing here")'), []);
});

test('mergeStaged skips duplicates by normalized URL (case + trailing slash insensitive)', () => {
  const data = [ENTRY({ url: 'https://Open.Example/' })];
  const staged = [
    ENTRY({ name: 'Dupe', url: 'https://open.example///' }),
    ENTRY({ name: 'Fresh', url: 'https://fresh.example/', category: 'transit' }),
  ];
  const { ordered, added, skipped } = mergeStaged(data, staged);
  assert.equal(added, 1);
  assert.equal(skipped, 1);
  assert.equal(ordered.length, 2);
});

test('mergeStaged sorts by category → level rank → jurisdiction → name', () => {
  const data = [
    ENTRY({ name: 'Zeta', level: 'Municipal', jurisdiction: 'Vancouver', category: 'transit', url: 'https://z.example/' }),
    ENTRY({ name: 'Alpha Fed', level: 'Federal', jurisdiction: 'Canada', category: 'open-data', url: 'https://a.example/' }),
    ENTRY({ name: 'Mid Prov', level: 'Provincial', jurisdiction: 'British Columbia', category: 'open-data', url: 'https://m.example/' }),
    ENTRY({ name: 'Beta Fed', level: 'Federal', jurisdiction: 'Canada', category: 'open-data', url: 'https://b.example/' }),
  ];
  const { ordered } = mergeStaged(data, []);
  assert.deepEqual(ordered.map((e) => e.url), [
    'https://a.example/', // open-data Federal Canada Alpha
    'https://b.example/', // open-data Federal Canada Beta
    'https://m.example/', // open-data Provincial BC
    'https://z.example/', // transit Municipal Vancouver
  ]);
});

test('mergeStaged preserves dateAdded only when present and keeps stable field order', () => {
  const data = [
    ENTRY({ dateAdded: '2026-08-24' }),
    ENTRY({ name: 'No Date', url: 'https://nd.example/' }),
  ];
  const { ordered } = mergeStaged(data, []);
  assert.deepEqual(Object.keys(ordered[0]), [
    'name', 'level', 'jurisdiction', 'category', 'type', 'description', 'url', 'tags', 'dateAdded',
  ]);
  assert.deepEqual(Object.keys(ordered[1]), [
    'name', 'level', 'jurisdiction', 'category', 'type', 'description', 'url', 'tags',
  ]);
});

test('mergeStaged rejects unknown categories in staged entries', () => {
  assert.throws(() => mergeStaged([], [ENTRY({ category: 'not-a-category' })]), /unknown category/i);
});

test('generateReadme emits header stats, TOC anchors, and table rows', () => {
  const readme = generateReadme([
    ENTRY(),
    ENTRY({ name: 'Beta Transit', level: 'Municipal', jurisdiction: 'Vancouver', category: 'transit', type: 'Map', description: 'A map.', url: 'https://transit.example/' }),
  ]);

  assert.ok(readme.startsWith('# Awesome Canada'));
  assert.ok(readme.includes('**Quick stats:** 2 resources ·'));
  assert.ok(readme.includes('## Table of Contents'));
  assert.ok(readme.match(/^- \[.+?\]\(#.+?\) — \d+$/m), 'TOC entry with anchor + count');
  assert.ok(readme.match(/^## .+ Open Data & Statistics$/m));
  assert.ok(readme.includes('| Alpha Open Data |'));
  assert.ok(readme.includes('https://transit.example/ |'));
});

test('generateReadme escapes pipes inside table cells', () => {
  const readme = generateReadme([
    ENTRY({ description: 'Data | more data' }),
  ]);
  assert.ok(readme.includes('Data \\| more data'));
});

test('generateReadme throws on unmapped jurisdiction or unknown category', () => {
  assert.throws(() => generateReadme([ENTRY({ jurisdiction: 'Atlantis' })]), /unmapped jurisdiction/);
  assert.throws(() => generateReadme([ENTRY({ category: 'not-a-category' })]), /unknown category/);
});
