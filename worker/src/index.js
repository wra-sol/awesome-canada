/**
 * awesome-canada maintenance worker.
 *
 * Cron Triggers (Workers Paid, 15-min wall time):
 *   - 04:00 UTC  nightly link-rot cleaning
 *   - 05:00 UTC  daily resource discovery + research PR
 *
 * HTTP surface (for smoke tests / manual runs), guarded by MAINTENANCE_TOKEN:
 *   POST /run/clean   ?limit=25&dry-run=1
 *   POST /run/research?limit=5&dry-run=1
 *
 * GitHub webhook receiver (HMAC-signed via GH_WEBHOOK_SECRET):
 *   POST /webhook/github  — triages new broken-link reports in place
 */

import { runClean } from './clean.js';
import { runResearch } from './research.js';
import { handleWebhook } from './reports.js';
import { issueClient } from './github.js';

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj, null, 2) + '\n', {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

async function handleRun(request, env, kind) {
  const url = new URL(request.url);
  const token = url.searchParams.get('token') || request.headers.get('X-Maintenance-Token');
  if (!env.MAINTENANCE_TOKEN || token !== env.MAINTENANCE_TOKEN) {
    return json({ error: 'unauthorized' }, 401);
  }
  const opts = {
    limit: url.searchParams.get('limit') ? parseInt(url.searchParams.get('limit'), 10) : null,
    maxCities: url.searchParams.get('max-cities') ? parseInt(url.searchParams.get('max-cities'), 10) : null,
    dryRun: url.searchParams.get('dry-run') === '1',
  };
  console.log(`[http] manual ${kind} limit=${opts.limit || opts.maxCities || 'all'} dryRun=${opts.dryRun}`);
  try {
    if (kind === 'clean') return json(await runClean(env, opts));
    return json(await runResearch(env, opts));
  } catch (e) {
    console.error(`[http] ${kind} FAILED: ${e.message}\n${e.stack}`);
    return json({ error: e.message, stack: (e.stack || '').split('\n').slice(0, 5) }, 500);
  }
}

export default {
  async scheduled(event, env, ctx) {
    const cron = event.cron;
    try {
      if (cron === '0 4 * * *') {
        await runClean(env, {});
      } else if (cron === '0 5 * * *') {
        await runResearch(env, {});
      } else {
        console.log(`[scheduled] unknown cron: ${cron}`);
      }
    } catch (e) {
      console.error(`[scheduled] ${cron} FAILED: ${e.message}\n${e.stack}`);
    }
  },

  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (request.method === 'POST' && url.pathname === '/run/clean') {
      return handleRun(request, env, 'clean');
    }
    if (request.method === 'POST' && url.pathname === '/run/research') {
      return handleRun(request, env, 'research');
    }
    if (request.method === 'POST' && url.pathname === '/webhook/github') {
      const r = await handleWebhook(request, env, issueClient(env));
      return json(r.body, r.status);
    }
    return json({
      ok: true,
      service: 'awesome-canada-maintenance',
      routes: ['POST /run/clean', 'POST /run/research', 'POST /webhook/github'],
    });
  },
};
