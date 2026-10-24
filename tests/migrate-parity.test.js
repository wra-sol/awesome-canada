/**
 * Parity test: scripts/migrate.js merge semantics ≡ worker/src/catalog.js
 * mergeStaged. The Worker runs the merge nightly on cron while migrate.js is
 * the local/CI path — this test fails if the two implementations drift.
 * Run: node --test tests/
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { orderedEntry, mergeEntries } = require('../scripts/migrate.js');
const { mergeStaged, normUrl } = await import('../worker/src/catalog.js');

const clone = (v) => structuredClone(v);

const EXISTING = [
  {
    name: 'Zeta Transit', level: 'Municipal', jurisdiction: 'Vancouver',
    category: 'transit', type: 'Map', description: 'A map.',
    url: 'https://z.example/', tags: ['transit'], dateAdded: '2026-08-24',
  },
  {
    name: 'Alpha Fed', level: 'Federal', jurisdiction: 'Canada',
    category: 'open-data', type: 'Portal', description: 'A portal.',
    url: 'https://a.example/', tags: ['open-data'],
  },
  {
    name: 'Mid Prov', level: 'Provincial', jurisdiction: 'British Columbia',
    category: 'planning-zoning', type: 'Registry', description: 'A registry.',
    url: 'https://m.example/', tags: ['planning'],
  },
  {
    name: 'Kind Existing', level: 'Federal', jurisdiction: 'Canada',
    category: 'open-data', type: 'Portal', description: 'Has a kind facet.',
    url: 'https://ke.example/', tags: ['open-data'], kind: 'open-data',
  },
];

const STAGED = [
  {
    name: 'Beta Fed', level: 'Federal', jurisdiction: 'Canada',
    category: 'open-data', type: 'Portal', description: 'New.',
    url: 'https://b.example/', tags: ['new'],
  },
  {
    name: 'Dated Newcomer', level: 'Federal', jurisdiction: 'Canada',
    category: 'budget', type: 'Tool', description: 'New with date.',
    url: 'https://d.example/', tags: ['new'], dateAdded: '2026-08-25',
  },
  {
    name: 'Staged Kinded', level: 'Provincial', jurisdiction: 'Ontario',
    category: 'transit', type: 'Tool', description: 'New with kind.',
    url: 'https://s.example/', tags: ['new'], kind: 'app',
  },
  {
    // duplicate of EXISTING[0] modulo case + trailing slash — must be skipped
    name: 'Zeta Transit Copy', level: 'Municipal', jurisdiction: 'Vancouver',
    category: 'transit', type: 'Map', description: 'Dupe.',
    url: 'HTTPS://Z.EXAMPLE///', tags: ['dupe'],
  },
];

test('mergeEntries and mergeStaged produce byte-identical output on shared fixture', () => {
  const viaMigrate = mergeEntries(clone(EXISTING), clone(STAGED));
  const viaWorker = mergeStaged(clone(EXISTING), clone(STAGED));

  assert.deepEqual(viaMigrate.cleaned, viaWorker.ordered);
  assert.equal(viaMigrate.added, viaWorker.added);
  assert.equal(viaMigrate.skipped, viaWorker.skipped);

  assert.equal(viaMigrate.added, 3);
  assert.equal(viaMigrate.skipped, 1);
});

test('both implementations agree entry-by-entry on every staged URL disposition', () => {
  const allUrls = new Set([
    ...EXISTING.map((e) => normUrl(e.url)),
    ...STAGED.map((e) => normUrl(e.url)),
  ]);
  const migrateByurl = new Map(
    mergeEntries(clone(EXISTING), clone(STAGED)).cleaned.map((e) => [normUrl(e.url), e])
  );
  const workerByUrl = new Map(
    mergeStaged(clone(EXISTING), clone(STAGED)).ordered.map((e) => [normUrl(e.url), e])
  );

  assert.equal(migrateByurl.size, workerByUrl.size);
  for (const url of allUrls) {
    assert.deepEqual(migrateByurl.get(url), workerByUrl.get(url), url);
  }
});

test('orderedEntry (migrate) preserves dateAdded only when present', () => {
  const withDate = orderedEntry({ ...clone(EXISTING[0]) });
  const noDate = orderedEntry({ ...clone(EXISTING[1]), dateAdded: undefined });

  assert.equal(withDate.dateAdded, '2026-08-24');
  assert.equal('dateAdded' in noDate, false);
});

test('orderedEntry and mergeStaged preserve kind when present on existing and staged entries', () => {
  const kinded = orderedEntry({ ...clone(EXISTING[3]) });
  assert.equal(kinded.kind, 'open-data');

  const out = mergeStaged(clone(EXISTING), clone(STAGED));
  const byUrl = new Map(out.ordered.map((e) => [normUrl(e.url), e]));
  assert.equal(byUrl.get(normUrl('https://ke.example/')).kind, 'open-data');
  assert.equal(byUrl.get(normUrl('https://s.example/')).kind, 'app');
  assert.equal('kind' in byUrl.get(normUrl('https://b.example/')), false);
});
