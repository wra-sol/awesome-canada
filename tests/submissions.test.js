/**
 * Unit tests for the no-account submit/report endpoints' pure helpers.
 * Run: node --test tests/
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

import {
  validateUrl, cleanText, validateSubmission, validateReport,
  buildSubmissionBody, buildReportBody, CATEGORIES,
} from '../functions/api/_submissions.js';

const require = createRequire(import.meta.url);
const { CATEGORIES: TAXONOMY } = require('../scripts/categories.js');

const GOOD_SUBMISSION = {
  name: 'Guelph Open Data — Building Permits',
  url: 'https://data.guelph.ca/building-permits',
  level: 'Municipal',
  jurisdiction: 'Guelph, Ontario',
  category: 'open-data',
  description: 'CSV download of building permits issued 2015-present, geocoded.',
  tags: 'guelph, permits, csv',
  notes: '',
};

const GOOD_REPORT = {
  resource_name: 'Guelph Open Data — Building Permits',
  current_url: 'https://data.guelph.ca/building-permits',
  issue_type: 'Page not found (404)',
  new_url: '',
  details: '',
};

test('validateUrl accepts http(s) URLs and trims whitespace', () => {
  assert.equal(validateUrl(' https://example.gov.ca/a?b=1 '), 'https://example.gov.ca/a?b=1');
});

test('validateUrl rejects junk', () => {
  assert.equal(validateUrl(null), null);
  assert.equal(validateUrl('javascript:alert(1)'), null);
  assert.equal(validateUrl('//example.com'), null);
  assert.equal(validateUrl(''), null);
});

test('cleanText strips control chars and markdown headings that would break issue parsing', () => {
  const out = cleanText('Nice resource.\n### URL\nhttps://evil.example', 1000);
  assert.ok(!out.includes('### '), JSON.stringify(out));
  assert.equal(cleanText('a\x00\x07b', 10), 'ab');
  assert.equal(cleanText(42, 10), '');
  assert.equal(cleanText(undefined, 10), '');
});

test('cleanText caps length', () => {
  assert.equal(cleanText('x'.repeat(50), 10).length, 10);
});

test('validateSubmission accepts a well-formed submission', () => {
  const r = validateSubmission(GOOD_SUBMISSION);
  assert.equal(r.ok, true);
  assert.deepEqual(Object.keys(r.data).sort(), [
    'category', 'description', 'jurisdiction', 'level', 'name', 'notes', 'tags', 'url',
  ]);
});

test('validateSubmission rejects missing/invalid fields with per-field messages', () => {
  const r = validateSubmission({ ...GOOD_SUBMISSION, url: 'notaurl', category: 'made-up', description: 'short' });
  assert.equal(r.ok, false);
  assert.ok(r.fields.url);
  assert.ok(r.fields.category);
  assert.ok(r.fields.description);
  assert.ok(!r.fields.name);
});

test('validateReport accepts a well-formed report', () => {
  const r = validateReport(GOOD_REPORT);
  assert.equal(r.ok, true);
});

test('validateReport rejects unknown issue_type and bad url', () => {
  const r = validateReport({ ...GOOD_REPORT, issue_type: 'Exploded', current_url: 'ftp://x' });
  assert.equal(r.ok, false);
  assert.ok(r.fields.issue_type);
  assert.ok(r.fields.current_url);
});

// process-issues.mjs splits bodies on "### " and reads Key -> following lines.
function parseLikeAutomation(body) {
  const fields = {};
  for (const section of body.split(/### /)) {
    const lines = section.trim().split('\n');
    const key = lines[0]?.trim();
    const value = lines.slice(1).join('\n').trim();
    if (key && value) fields[key] = value;
  }
  return fields;
}

test('buildSubmissionBody is machine-parseable by scripts/process-issues.mjs', () => {
  const d = validateSubmission(GOOD_SUBMISSION).data;
  const f = parseLikeAutomation(buildSubmissionBody(d));
  assert.equal(f['Resource Name'], GOOD_SUBMISSION.name);
  assert.equal(f['URL'], GOOD_SUBMISSION.url);
  assert.equal(f['Government Level'], GOOD_SUBMISSION.level);
  assert.equal(f['Jurisdiction'], GOOD_SUBMISSION.jurisdiction);
  assert.equal(f['Category'], GOOD_SUBMISSION.category);
  assert.equal(f['Description'], GOOD_SUBMISSION.description);
  assert.equal(f['Tags'], GOOD_SUBMISSION.tags);
});

test('buildSubmissionBody omits optional sections when empty (parser tolerates)', () => {
  const d = validateSubmission({ ...GOOD_SUBMISSION, tags: '', notes: '' }).data;
  const f = parseLikeAutomation(buildSubmissionBody(d));
  assert.ok(!('Tags' in f));
  assert.ok(!('Additional Notes' in f));
});

test('buildReportBody is machine-parseable by scripts/process-issues.mjs', () => {
  const d = validateReport({ ...GOOD_REPORT, new_url: 'https://new.example.ca', details: 'Broke last week' }).data;
  const f = parseLikeAutomation(buildReportBody(d));
  assert.equal(f['Resource Name'], GOOD_REPORT.resource_name);
  assert.equal(f['Current URL in Directory'], GOOD_REPORT.current_url);
  assert.equal(f['What happened?'], GOOD_REPORT.issue_type);
  assert.equal(f['New URL (if known)'], 'https://new.example.ca');
  assert.equal(f['Additional Details'], 'Broke last week');
});

test('endpoint category list stays in sync with scripts/categories.js', () => {
  assert.deepEqual([...CATEGORIES].sort(), TAXONOMY.map(c => c.id).sort());
});
