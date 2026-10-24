/**
 * Likes API — Cloudflare Pages Function (optional catch-all).
 *
 * Routes handled (same-origin only, no CORS):
 *   POST /api/likes            {url} -> like a resource (24h re-like cooldown,
 *                                     30 likes/hour burst cap per visitor)
 *   GET  /api/likes/all        -> { "<catalog url>": <all-time like count> }
 *   GET  /api/likes/top        ?window=hour|day|month|all&limit=N ->
 *                                { window, totalLiked, items:[{url,count}] }
 *
 * Bindings: env.LIKES_DB (D1), env.LIKES_SALT (Pages secret).
 * Privacy: visitors are a salted SHA-256 of IP+UA; resources are a SHA-256
 * of the trimmed catalog URL. No raw IPs or URLs-of-visitors are stored.
 *
 * URL matching contract: hashes are taken over the TRIMMED url exactly as it
 * appears in data/resources.json (no case folding, no slash stripping).
 * /all and /top therefore return strings the client can match with ===.
 */

const COOLDOWN_MS = 24 * 60 * 60 * 1000;
const BURST_LIMIT = 30;
const BURST_WINDOW_MS = 60 * 60 * 1000;
const WINDOW_MS = { hour: 3600e3, day: 86400e3, month: 30 * 86400e3 };
const HEX_LEN = 32;

export function validateUrl(raw) {
  if (typeof raw !== 'string') return null;
  const url = raw.trim();
  if (url.length === 0 || url.length > 2048) return null;
  if (!/^https?:\/\/[^\s]+$/i.test(url)) return null;
  return url;
}

export async function sha256Hex(input, len) {
  const bytes = new TextEncoder().encode(input);
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  const hex = [...new Uint8Array(digest)].map(b => b.toString(16).padStart(2, '0')).join('');
  return len ? hex.slice(0, len) : hex;
}

function json(data, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(data) + '\n', {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'X-Content-Type-Options': 'nosniff',
      ...extraHeaders,
    },
  });
}

async function requireEnv(env) {
  if (!env || !env.LIKES_DB || !env.LIKES_SALT) {
    return json({ error: 'likes_not_configured' }, 503);
  }
  return null;
}

async function visitorHash(env, request) {
  const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
  const ua = request.headers.get('User-Agent') || '';
  return sha256Hex(`${env.LIKES_SALT}\n${ip}\n${ua}`, HEX_LEN);
}

async function handleLike(env, request) {
  const notConfigured = await requireEnv(env);
  if (notConfigured) return notConfigured;

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'invalid_json' }, 400);
  }

  const url = validateUrl(body && body.url);
  if (!url) return json({ error: 'invalid_url' }, 400);

  const now = Date.now();
  const resourceHash = await sha256Hex(url, HEX_LEN);
  const vHash = await visitorHash(env, request);
  const db = env.LIKES_DB;

  // Guards: per-visitor cooldown on this resource, global burst cap.
  const [recent, burst] = await db.batch([
    db.prepare(
      'SELECT created_at FROM likes WHERE resource_hash = ? AND visitor_hash = ? ORDER BY created_at DESC LIMIT 1'
    ).bind(resourceHash, vHash),
    db.prepare(
      'SELECT COUNT(*) AS n FROM likes WHERE visitor_hash = ? AND created_at > ?'
    ).bind(vHash, now - BURST_WINDOW_MS),
  ]);

  const lastAt = recent.results[0] ? recent.results[0].created_at : 0;
  const nextEligibleAt = lastAt + COOLDOWN_MS;
  if (now < nextEligibleAt) {
    return json({ error: 'cooldown', nextEligibleAt }, 429);
  }
  if ((burst.results[0] ? burst.results[0].n : 0) >= BURST_LIMIT) {
    return json({ error: 'rate_limited' }, 429);
  }

  await db.batch([
    db.prepare(
      'INSERT INTO likes (resource_hash, visitor_hash, created_at) VALUES (?, ?, ?)'
    ).bind(resourceHash, vHash, now),
    db.prepare(
      `INSERT INTO liked_resources (resource_hash, url, total, first_liked_at)
       VALUES (?, ?, 1, ?)
       ON CONFLICT(resource_hash) DO UPDATE SET total = total + 1`
    ).bind(resourceHash, url, now),
  ]);

  const row = await db.prepare(
    'SELECT total FROM liked_resources WHERE resource_hash = ?'
  ).bind(resourceHash).first();

  return json({
    ok: true,
    url,
    count: row ? row.total : 1,
    likedAt: now,
    nextEligibleAt: now + COOLDOWN_MS,
  });
}

async function handleAll(env) {
  const notConfigured = await requireEnv(env);
  if (notConfigured) return notConfigured;

  const { results } = await env.LIKES_DB.prepare(
    'SELECT url, total FROM liked_resources WHERE total > 0'
  ).all();

  const counts = {};
  let grandTotal = 0;
  for (const r of results) {
    counts[r.url] = r.total;
    grandTotal += r.total;
  }
  return json({ counts, totalLikes: grandTotal }, 200, {
    'Cache-Control': 'public, max-age=30',
  });
}

async function handleTop(env, request) {
  const notConfigured = await requireEnv(env);
  if (notConfigured) return notConfigured;

  const params = new URL(request.url).searchParams;
  const windowParam = params.get('window');
  if (!(windowParam in WINDOW_MS) && windowParam !== 'all') {
    return json({ error: 'invalid_window', valid: ['hour', 'day', 'month', 'all'] }, 400);
  }
  let limit = parseInt(params.get('limit'), 10);
  if (!Number.isFinite(limit) || limit < 1) limit = 6;
  limit = Math.min(limit, 500);

  const db = env.LIKES_DB;
  let stmt;
  if (windowParam === 'all') {
    stmt = db.prepare(
      `SELECT url, total AS count FROM liked_resources
       WHERE total > 0 ORDER BY total DESC, first_liked_at ASC LIMIT ?`
    ).bind(limit);
  } else {
    stmt = db.prepare(
      `SELECT lr.url AS url, COUNT(*) AS count
       FROM likes l JOIN liked_resources lr ON lr.resource_hash = l.resource_hash
       WHERE l.created_at > ?
       GROUP BY l.resource_hash ORDER BY count DESC LIMIT ?`
    ).bind(Date.now() - WINDOW_MS[windowParam], limit);
  }

  const { results } = await stmt.all();
  const meta = await db.prepare(
    'SELECT COUNT(DISTINCT resource_hash) AS n FROM liked_resources'
  ).first();

  return json(
    { window: windowParam, totalLiked: meta ? meta.n : 0, items: results },
    200,
    { 'Cache-Control': 'public, max-age=30' }
  );
}

export async function onRequest(context) {
  const { request, env } = context;
  const { pathname } = new URL(request.url);
  const route = pathname.replace(/\/+$/, '');

  try {
    if (request.method === 'POST' && route === '/api/likes') {
      return await handleLike(env, request);
    }
    if (request.method === 'GET' && route === '/api/likes/all') {
      return await handleAll(env);
    }
    if (request.method === 'GET' && route === '/api/likes/top') {
      return await handleTop(env, request);
    }
    return json({ error: 'not_found' }, 404);
  } catch (e) {
    console.error('[likes]', request.method, route, e.message);
    return json({ error: 'internal_error' }, 500);
  }
}
