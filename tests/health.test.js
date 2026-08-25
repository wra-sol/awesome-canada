/**
 * Unit tests for the link-health state machine (worker/src/health.js),
 * plus conformance runs over the shared Python↔JS scenario fixtures.
 * Run: node --test tests/
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

import {
  classify,
  kindFromError,
  nextFailureCount,
  updateState,
  selectDoomed,
} from '../worker/src/health.js';

const HERE = dirname(fileURLToPath(import.meta.url));

test('classify maps HTTP status codes to health statuses', () => {
  assert.equal(classify(200), 'ok');
  assert.equal(classify(204), 'ok');
  assert.equal(classify(301), 'redirect');
  assert.equal(classify(302), 'redirect');
  assert.equal(classify(401), 'blocked');
  assert.equal(classify(403), 'blocked');
  assert.equal(classify(429), 'blocked');
  assert.equal(classify(404), 'broken');
  assert.equal(classify(451), 'broken');
  assert.equal(classify(500), 'server_error');
  assert.equal(classify(530), 'server_error');
});

test('kindFromError decodes failure messages into the shared kind vocabulary', () => {
  assert.equal(kindFromError('The operation was aborted due to timeout'), 'timeout');
  assert.equal(kindFromError('fetch failed: timed out'), 'timeout');
  assert.equal(kindFromError('unable to verify the first certificate'), 'ssl_error');
  assert.equal(kindFromError('Connection refused by host'), 'connection_refused');
  assert.equal(kindFromError('socket hang up: connection reset'), 'connection_reset');
  // NOTE: getaddrinfo/ENOTFOUND-style messages are NOT matched today — the
  // extracted regex preserves clean.js behavior verbatim. Tightening
  // ENOTFOUND/EAI_AGAIN -> dns_failure must happen in BOTH this module and
  // daily-clean.py, with new fixtures, in the probe-intelligence phase.
  assert.equal(kindFromError('getaddrinfo ENOTFOUND gone.example'), 'network_error');
  assert.equal(kindFromError('no such name or service known'), 'dns_failure');
  assert.equal(kindFromError('dns error: nxdomain'), 'dns_failure');
  assert.equal(kindFromError('something completely different'), 'network_error');
});

test('nextFailureCount: healthy resets, hard increments, blocked/soft freeze', () => {
  assert.equal(nextFailureCount(3, 'ok'), 0);
  assert.equal(nextFailureCount(3, 'redirect'), 0);
  assert.equal(nextFailureCount(0, 'broken'), 1);
  assert.equal(nextFailureCount(2, 'dns_failure'), 3);
  assert.equal(nextFailureCount(2, 'ssl_error'), 3);
  assert.equal(nextFailureCount(2, 'connection_refused'), 3);
  assert.equal(nextFailureCount(2, 'connection_reset'), 3);
  assert.equal(nextFailureCount(1, 'blocked'), 1);
  assert.equal(nextFailureCount(0, 'blocked'), 0);
  assert.equal(nextFailureCount(1, 'timeout'), 1);
  assert.equal(nextFailureCount(1, 'server_error'), 1);
  assert.equal(nextFailureCount(1, 'network_error'), 1);
});

test('updateState preserves first_failure across consecutive failures and clears it on recovery', () => {
  const prev = {
    'https://x.example/': { failures: 1, first_failure: '2026-08-20' },
  };
  const results = new Map([
    ['https://x.example/', 'dns_failure'],
    ['https://y.example/', 'ok'],
  ]);
  const state = updateState(prev, results, '2026-08-26');

  assert.equal(state['https://x.example/'].failures, 2);
  assert.equal(state['https://x.example/'].first_failure, '2026-08-20');
  assert.equal(state['https://y.example/'].failures, 0);
  assert.equal(state['https://y.example/'].first_failure, undefined);
  assert.equal(state['https://y.example/'].last_checked, '2026-08-26');
});

test('updateState only includes URLs checked this run', () => {
  const prev = {
    'https://checked.example/': { failures: 0 },
    'https://unchecked.example/': { failures: 2 },
  };
  const results = new Map([['https://checked.example/', 'ok']]);
  const state = updateState(prev, results, '2026-08-26');
  assert.deepEqual(Object.keys(state), ['https://checked.example/']);
});

test('selectDoomed enforces the threshold boundary', () => {
  const state = {
    a: { failures: 0 },
    b: { failures: 1 },
    c: { failures: 2 },
    d: { failures: 3 },
  };
  assert.deepEqual([...selectDoomed(state, 2)].sort(), ['c', 'd']);
  assert.deepEqual([...selectDoomed(state, 3)], ['d']);
  assert.deepEqual([...selectDoomed(state, 4)], []);
});

// --- Shared Python↔JS conformance fixtures ---

const FIXTURES = JSON.parse(
  readFileSync(join(HERE, 'fixtures', 'link-state-scenarios.json'), 'utf8')
);

function checkToStatus(check) {
  if ('httpStatus' in check) return classify(check.httpStatus);
  return check.errorKind;
}

for (const scenario of FIXTURES.scenarios) {
  test(`scenario: ${scenario.name}`, () => {
    const results = new Map(
      scenario.checks.map((c) => [c.url, checkToStatus(c)])
    );
    const state = updateState(scenario.prev, results, scenario.today);

    assert.deepEqual(
      Object.keys(state).sort(),
      scenario.checks.map((c) => c.url).sort(),
      'state must cover exactly the checked URLs'
    );
    for (const [url, exp] of Object.entries(scenario.expected)) {
      assert.equal(state[url].failures, exp.failures, `${url} failures`);
      assert.equal(
        state[url].first_failure ?? undefined,
        exp.first_failure ?? undefined,
        `${url} first_failure`
      );
    }
  });
}
