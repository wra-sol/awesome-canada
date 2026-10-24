/**
 * POST /api/report — no-account broken-link report.
 * Body: {resource_name, current_url, issue_type, new_url?, details?, website?}
 * Creates a GitHub issue (labels: broken-link, needs-triage) that the existing
 * process-issues automation triages. Rate-limited via D1; `website` is a
 * honeypot — bots get a fake success and nothing is stored.
 *
 * Bindings: env.LIKES_DB, env.LIKES_SALT, env.GITHUB_ISSUE_TOKEN.
 */

import {
  validateReport, buildReportBody, createIssue,
  readJson, json, requireEnv, requireIssueToken, visitorHash, rateLimit,
} from './_submissions.js';

export async function onRequest(context) {
  const { request, env } = context;

  if (request.method === 'OPTIONS') return new Response(null, { status: 204 });
  if (request.method !== 'POST') return json({ error: 'method_not_allowed' }, 405);

  try {
    const notConfigured = requireEnv(env);
    if (notConfigured) return notConfigured;

    const body = await readJson(request);
    if (!body || typeof body !== 'object') return json({ error: 'invalid_json' }, 400);

    if (typeof body.website === 'string' && body.website.trim() !== '') {
      return json({ ok: true });
    }

    const result = validateReport(body);
    if (!result.ok) return json({ error: 'invalid_fields', fields: result.fields }, 400);

    const tokenMissing = requireIssueToken(env);
    if (tokenMissing) return tokenMissing;

    const vHash = await visitorHash(env, request);
    const limited = await rateLimit(env, 'report', vHash);
    if (limited) return limited;

    const d = result.data;
    const issue = await createIssue(env, {
      title: `[Broken] ${d.resource_name}`,
      labels: ['broken-link', 'needs-triage'],
      body: buildReportBody(d),
    });

    if (!issue.ok) {
      return json({ error: 'issue_create_failed', reason: issue.reason }, 502);
    }

    return json({ ok: true, issueNumber: issue.number, issueUrl: issue.url });
  } catch (e) {
    console.error('[report]', e.message);
    return json({ error: 'internal_error' }, 500);
  }
}
