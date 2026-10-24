import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  parseIssueBody,
  verdictFor,
  verifySignature,
  buildComment,
} from '../worker/src/reports.js';

const REPORT_BODY = `_Reported via the awesome-canada web form (no GitHub account)._

### Resource Name
Canadian Urban Transit Association — Stats Dashboard

### Current URL in Directory
https://cutaactu.ca/

### What happened?
Other

### New URL (if known)
https://cutaactu.ca/reports-resources/statistics/
`;

test('parseIssueBody extracts form fields, absorbing multi-line values', () => {
  const f = parseIssueBody(REPORT_BODY);
  assert.equal(f['Resource Name'], 'Canadian Urban Transit Association — Stats Dashboard');
  assert.equal(f['Current URL in Directory'], 'https://cutaactu.ca/');
  assert.equal(f['What happened?'], 'Other');
  assert.equal(f['New URL (if known)'], 'https://cutaactu.ca/reports-resources/statistics/');
});

test('parseIssueBody keeps blank lines inside a value and ignores preamble', () => {
  const f = parseIssueBody('prose before any heading\n### Notes\nline one\n\nline two\n### Next\nx');
  assert.equal(f['Notes'], 'line one\n\nline two');
  assert.equal(f['Next'], 'x');
  assert.ok(!('preamble' in f));
});

test('parseIssueBody handles empty/null bodies', () => {
  assert.deepEqual(parseIssueBody(''), {});
  assert.deepEqual(parseIssueBody(null), {});
});

test('verdictFor truth table', () => {
  // old dead + new healthy = swap candidate
  assert.equal(verdictFor('broken', 'ok'), 'confirmed-swap');
  assert.equal(verdictFor('dns_failure', 'redirect'), 'confirmed-swap');
  // old dead + new dead/absent/soft = removal candidate
  assert.equal(verdictFor('broken', 'broken'), 'confirmed-dead');
  assert.equal(verdictFor('connection_refused', null), 'confirmed-dead');
  assert.equal(verdictFor('ssl_error', 'blocked'), 'confirmed-dead');
  // old alive or soft = not reproduced
  assert.equal(verdictFor('ok', 'broken'), 'not-reproduced');
  assert.equal(verdictFor('redirect', null), 'not-reproduced');
  assert.equal(verdictFor('blocked', 'ok'), 'not-reproduced');
  assert.equal(verdictFor('timeout', null), 'not-reproduced');
});

test('verifySignature accepts valid HMAC and rejects bad ones', async () => {
  const secret = 'whsec_test';
  const body = JSON.stringify({ action: 'opened', zen: 'Keep it simple.' });
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const mac = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(body));
  const hex = [...new Uint8Array(mac)].map((b) => b.toString(16).padStart(2, '0')).join('');
  const headers = new Headers({ 'X-Hub-Signature-256': `sha256=${hex}` });

  assert.equal(await verifySignature(secret, headers, body), true);
  assert.equal(await verifySignature('wrong-secret', headers, body), false);
  assert.equal(await verifySignature(secret, new Headers(), body), false);
  assert.equal(
    await verifySignature(secret, new Headers({ 'X-Hub-Signature-256': 'sha256=deadbeef' }), body),
    false
  );
});

test('buildComment renders probe table + verdict without markdown breakage', () => {
  const md = buildComment(
    11,
    '[Broken] Something',
    {},
    { url: 'https://old.example/', status: 'broken', code: 404 },
    { url: 'https://new.example/', status: 'ok' },
    'confirmed-swap'
  );
  assert.match(md, /## Automated triage — report #11/);
  assert.match(md, /\| Current URL \| `https:\/\/old\.example\/` \| broken \(404\) \|/);
  assert.match(md, /\| Suggested URL \| `https:\/\/new\.example\/` \| ok \|/);
  assert.match(md, /Replacement looks good/);
  // no soft-status caveat needed rows stay table-valid
  assert.equal(md.split('\n').filter((l) => l.startsWith('|')).length, 4);
});
