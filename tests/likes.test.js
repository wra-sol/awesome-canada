/**
 * Unit tests for the likes API pure helpers.
 * Run: node --test tests/
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validateUrl, sha256Hex } from '../functions/api/likes/[[path]].js';

test('validateUrl accepts catalog-style URLs and trims whitespace', () => {
  assert.equal(validateUrl('https://agrifooddatacanada.ca/'), 'https://agrifooddatacanada.ca/');
  assert.equal(validateUrl('  https://planthardiness.gc.ca/en '), 'https://planthardiness.gc.ca/en');
  assert.equal(validateUrl('http://example.com/path?q=1&x=2'), 'http://example.com/path?q=1&x=2');
});

test('validateUrl rejects junk', () => {
  assert.equal(validateUrl(null), null);
  assert.equal(validateUrl(undefined), null);
  assert.equal(validateUrl(42), null);
  assert.equal(validateUrl(''), null);
  assert.equal(validateUrl('   '), null);
  assert.equal(validateUrl('javascript:alert(1)'), null);
  assert.equal(validateUrl('ftp://example.com'), null);
  assert.equal(validateUrl('//example.com'), null);
  assert.equal(validateUrl('https://exa mple.com'), null);
  assert.equal(validateUrl('https://' + 'a'.repeat(2048)), null);
});

test('sha256Hex matches known vector and honours length cap', async () => {
  assert.equal(
    await sha256Hex('hello'),
    '2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824'
  );
  const sliced = await sha256Hex('hello', 32);
  assert.equal(sliced.length, 32);
  assert.ok('2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824'.startsWith(sliced));
});
