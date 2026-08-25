/**
 * Pure link-health state machine — extracted from clean.js so it can be unit
 * tested and pinned against scripts/daily-clean.py via shared fixtures
 * (tests/fixtures/link-state-scenarios.json, run by tests/state-conformance.py).
 *
 * Semantics (must stay identical to daily-clean.py):
 *   healthy  ('ok', 'redirect')          -> counter resets to 0
 *   hard    ('broken' 4xx-not-blocked,
 *            'dns_failure', 'connection_refused', 'connection_reset',
 *            'ssl_error')                -> counter increments
 *   blocked ('blocked': HTTP 401/403/429 — "exists but blocks robots")
 *   soft    (everything else: server_error, timeout, network_error, ...)
 *                                        -> counter frozen
 */

// "exists but blocks automated checks" — never auto-remove these.
export const BLOCKED_STATUSES = new Set([401, 403, 429]);
export const HEALTHY = new Set(['ok', 'redirect']);

const HARD_KINDS = new Set([
  'dns_failure',
  'connection_refused',
  'connection_reset',
  'ssl_error',
]);

/** Map an HTTP response status code to a health status string. */
export function classify(statusCode) {
  if (statusCode >= 200 && statusCode < 300) return 'ok';
  if (statusCode >= 300 && statusCode < 400) return 'redirect';
  if (BLOCKED_STATUSES.has(statusCode)) return 'blocked';
  if (statusCode >= 400 && statusCode < 500) return 'broken';
  if (statusCode >= 500) return 'server_error';
  return 'error';
}

/** Classify a fetch failure by its error message (Cloudflare-edge quirks included). */
export function kindFromError(msg) {
  if (/abort|timeout|timed out/i.test(msg)) return 'timeout';
  if (/certificate|ssl|tls/i.test(msg)) return 'ssl_error';
  if (/refused/i.test(msg)) return 'connection_refused';
  if (/reset/i.test(msg)) return 'connection_reset';
  if (/dns|name or service|not known|nxdomain/i.test(msg)) return 'dns_failure';
  return 'network_error'; // soft: unknown network path
}

/**
 * Consecutive-failure counter transition for a single URL.
 * `status` is a classified status string (classify() or kindFromError()).
 */
export function nextFailureCount(prevFailures, status) {
  if (HEALTHY.has(status)) return 0;
  if (status === 'broken' || HARD_KINDS.has(status)) return prevFailures + 1;
  return prevFailures; // blocked / soft statuses freeze the counter
}

/**
 * Merge this run's results into consecutive-failure state.
 * `results`: Map<url, status>. Only checked URLs appear in the output.
 */
export function updateState(prevState, results, today) {
  const newState = {};
  for (const [url, status] of results.entries()) {
    const prev = prevState[url] || {};
    const failures = nextFailureCount(prev.failures || 0, status);
    newState[url] = {
      failures,
      status,
      last_checked: today,
      ...(failures > 0 ? { first_failure: prev.first_failure || today } : {}),
    };
  }
  return newState;
}

/** URLs that crossed the removal threshold. */
export function selectDoomed(state, threshold) {
  return new Set(
    Object.entries(state)
      .filter(([, s]) => s.failures >= threshold)
      .map(([u]) => u)
  );
}
