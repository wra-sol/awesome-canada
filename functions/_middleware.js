/**
 * Global Pages Function middleware — runs for every request (static + API).
 *
 * Host canonicalisation:
 *   www.awesome-canada.ca      -> https://awesome-canada.ca   (301)
 *   awesome-canada.pages.dev   -> https://awesome-canada.ca   (301)
 *
 * Per-deployment preview hosts (<hash>.awesome-canada.pages.dev) are left
 * untouched so previews and smoke tests keep working.
 */

const APEX = 'awesome-canada.ca';
const REDIRECT_HOSTS = new Set([`www.${APEX}`, 'awesome-canada.pages.dev']);

export async function onRequest(context) {
  const { request } = context;
  const host = request.headers.get('X-Forwarded-Host') || request.headers.get('Host') || '';

  if (REDIRECT_HOSTS.has(host.toLowerCase())) {
    const url = new URL(request.url);
    return Response.redirect(
      `https://${APEX}${url.pathname}${url.search}`,
      301
    );
  }

  return context.next();
}
