/**
 * Awesome Canada — analytics event bridge.
 *
 * Transports, in priority order:
 *   1. Cloudflare Zaraz  (window.zaraz.track) — active once Zaraz serves on
 *     the zone and maps events to the GA4 property configured in its dashboard.
 *   2. gtag/dataLayer    — if a GA4 loader is ever added directly.
 *   3. Buffered queue    — events kept in window.acEventQueue for debugging.
 *
 * Never throws: analytics must not break the page.
 */
(function () {
  'use strict';

  function track(event, params) {
    try {
      var w = window;
      var p = params || {};
      if (w.zaraz && typeof w.zaraz.track === 'function') {
        w.zaraz.track(event, p);
        return;
      }
      if (typeof w.gtag === 'function') {
        w.gtag('event', event, p);
        return;
      }
      (w.acEventQueue = w.acEventQueue || []).push({ event: event, params: p });
    } catch (e) { /* analytics must never break the page */ }
  }

  window.acTrack = track;
})();
