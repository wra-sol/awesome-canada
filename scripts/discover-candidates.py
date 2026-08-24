#!/usr/bin/env python3
"""
Awesome Canada Daily Resource Discovery

Deterministic implementation of the discovery techniques documented in
docs/DATA-SCOUTING-STRATEGY.md. Finds mid-size municipal jurisdictions with
Tier-1 gaps (no council, budget, planning-zoning, or open-data depth) and
probes known hosting patterns:

  - eScribe:       https://pub-{slug}.escribemeetings.com/
  - CivicWeb:      https://{slug}.civicweb.net/Portal/
  - AllNetMeetings:https://{slug}.allnetmeetings.com/pubs/agendaCategories.aspx
  - ArcGIS Hub:    https://{slug}.opendata.arcgis.com/  (verified via the OGC
                   items API — root 200 alone is NOT enough, placeholder hubs
                   return 401 on the API)

Verified candidates are written to scripts/candidates.json in full resource
schema, ready for staging into scripts/new-resources.js. A human-readable
report lands in docs/reports/research-YYYY-MM-DD.md.

Usage:
  python3 scripts/discover-candidates.py                     # daily run
  python3 scripts/discover-candidates.py --max-cities 5 --dry-run
"""

import argparse
import json
import os
import subprocess
import sys
import time
import urllib.parse
from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import datetime, timezone
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent

# check-links.py uses a hyphen, so it must be loaded by path rather than imported.
import importlib.util
_spec = importlib.util.spec_from_file_location(
    'check_links', REPO_ROOT / 'scripts' / 'check-links.py')
check_links = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(check_links)
check_url = check_links.check_url

DATA_FILE = REPO_ROOT / 'data' / 'resources.json'
CANDIDATES_FILE = REPO_ROOT / 'scripts' / 'candidates.json'
REPORTS_DIR = REPO_ROOT / 'docs' / 'reports'

TIER1_CATEGORIES = ['council', 'budget', 'planning-zoning', 'open-data', 'transit']

REGION_NAMES = {
    'bc': 'British Columbia', 'ab': 'Alberta', 'sk': 'Saskatchewan',
    'mb': 'Manitoba', 'on': 'Ontario', 'qc': 'Quebec',
    'atlantic': 'Atlantic Canada', 'north': 'Northern Canada',
}

USER_AGENT_BROWSER = ('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 '
                      '(KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36')


def slugify(name):
    """'Prince Albert' -> 'princealbert'; 'St. Albert' -> 'stalbert'; 'Lévis' -> 'levis'."""
    import unicodedata
    s = unicodedata.normalize('NFKD', name)
    s = ''.join(c for c in s if not unicodedata.combining(c))
    s = ''.join(ch for ch in s.lower() if ch.isalnum())
    return s


def load_jurisdiction_regions():
    """Get the canonical jurisdiction -> region map from scripts/categories.js."""
    try:
        out = subprocess.run(
            ['node', '-e',
             "console.log(JSON.stringify(require('./scripts/categories').JURISDICTION_TO_REGION))"],
            cwd=REPO_ROOT, capture_output=True, text=True, check=True, timeout=30)
        return json.loads(out.stdout)
    except Exception as e:
        print(f"⚠️  Could not load categories.js via node ({e}); region names unavailable",
              file=sys.stderr)
        return {}


def find_gap_cities(data):
    """Municipal jurisdictions missing specific Tier-1 category coverage."""
    by_jur = {}
    for e in data:
        by_jur.setdefault(e.get('jurisdiction'), []).append(e)

    gaps = {}
    for jur, entries in by_jur.items():
        levels = {e['level'] for e in entries}
        cats = {e['category'] for e in entries}
        if not levels & {'Municipal', 'Regional'}:
            continue  # only scout municipal-level targets
        missing = [c for c in TIER1_CATEGORIES if c not in cats]
        # A jurisdiction with zero missing categories has full Tier-1 depth.
        if missing:
            gaps[jur] = {'missing': missing, 'entry_count': len(entries),
                         'hosts': {urllib.parse.urlparse(e['url']).netloc.replace('www.', '')
                                   for e in entries if e.get('url')}}
    return gaps


def host_already_listed(gap_info, candidate_host):
    """Reject near-duplicate portal entries: if the city already lists this host."""
    return candidate_host in gap_info['hosts']


def probe_escribe(city):
    slug = slugify(city)
    url = f'https://pub-{slug}.escribemeetings.com/'
    status, code, _redir, _err, _dur = check_url(url, timeout=10)
    if status == 'ok':
        return make_candidate(
            city, 'council', 'Council portal',
            f'{city} — Council Agendas & Minutes (eScribe)',
            url,
            f'Searchable eScribe meeting portal for {city} with downloadable PDF agendas, '
            f'minutes, and supporting documents for regular, special, and committee meetings. '
            f'Discovered via the documented pub-[city].escribemeetings.com pattern and '
            f'verified live.',
            ['council', 'agendas', 'minutes', 'escribe'])
    return None


def probe_civicweb(city):
    slug = slugify(city)
    url = f'https://{slug}.civicweb.net/Portal/'
    status, code, _redir, _err, _dur = check_url(url, timeout=10)
    if status == 'ok':
        return make_candidate(
            city, 'council', 'Council portal',
            f'{city} — Council Agendas & Minutes (CivicWeb)',
            url,
            f'CivicWeb document portal for {city} council and committee meetings with a '
            f'meeting calendar and downloadable PDF agendas and minutes. Discovered via the '
            f'documented [city].civicweb.net pattern and verified live.',
            ['council', 'agendas', 'minutes', 'civicweb'])
    return None


def probe_allnetmeetings(city):
    slug = slugify(city)
    url = f'https://{slug}.allnetmeetings.com/pubs/agendaCategories.aspx'
    status, code, _redir, _err, _dur = check_url(url, timeout=10)
    if status == 'ok':
        return make_candidate(
            city, 'council', 'Council portal',
            f'{city} — Council Agendas & Minutes (AllNetMeetings)',
            url,
            f'Searchable AllNetMeetings portal for {city} council, committee, and public '
            f'hearing documents with downloadable PDF agendas and minutes. Discovered via '
            f'the documented [city].allnetmeetings.com pattern and verified live.',
            ['council', 'agendas', 'minutes', 'bylaws'])
    return None


def probe_arcgis_hub(city, gap_info):
    """Probe [city].opendata.arcgis.com and data-[city].opendata.arcgis.com.

    Per the scouting strategy: verify via the OGC items API — a real hub returns
    HTTP 200 with JSON; unconfigured placeholder hubs return 401 (GWM_0003).
    """
    slug = slugify(city)
    hosts = [f'{slug}.opendata.arcgis.com', f'data-{slug}.opendata.arcgis.com']
    for host in hosts:
        landing = f'https://{host}/'
        if host_already_listed(gap_info, host):
            continue  # city already lists this hub — never add duplicate portals
        api = f'https://{host}/api/search/v1/collections/all/items?limit=1'
        status, code, _redir, _err, _dur = check_url(api, timeout=12)
        if status == 'ok':
            return make_candidate(
                city, 'open-data', 'Open data hub',
                f'{city} Open Data Portal (ArcGIS Hub)', landing,
                f'ArcGIS Hub open data portal for {city} with downloadable GIS datasets '
                f'(CSV, GeoJSON, Shapefile) and REST/OGC API access. Hub verified live via '
                f'the OGC items API returning HTTP 200 (placeholder hubs return 401).',
                ['open data', 'gis', 'arcgis hub', 'datasets'])
        time.sleep(0.2)
    return None


def make_candidate(city, category, ctype, name, url, description, tag_words):
    return {
        'name': name,
        'level': 'Municipal',
        'jurisdiction': city,
        'category': category,
        'type': ctype,
        'description': description,
        'url': url,
        'tags': sorted({slugify(city), *tag_words}),
    }


def _no_redirect_opener():
    """Opener that refuses to follow redirects — placeholder tenants redirect
    to missing.html which returns HTTP 200."""
    import urllib.request
    import ssl as _ssl

    class NoRedirect(urllib.request.HTTPRedirectHandler):
        def redirect_request(self, *a, **k):
            return None

    ctx = _ssl.create_default_context()
    return urllib.request.build_opener(NoRedirect,
                                       urllib.request.HTTPSHandler(context=ctx))


_OPENER = _no_redirect_opener()


def _fetch_page(url, limit=300000):
    import urllib.request
    req = urllib.request.Request(url, headers={'User-Agent': USER_AGENT_BROWSER})
    with _OPENER.open(req, timeout=12) as r:
        return r.status, r.read(limit).decode('utf-8', 'replace')


def probe_questica(city):
    """Questica OpenBook budget transparency portals (documented pattern:
    [city].openbook.questica.com).

    Strict verification: *.openbook.questica.com is WILDCARD DNS — any
    subdomain 302s to a branded missing.html that returns HTTP 200. A real
    portal serves 200 directly on first request AND contains the full city
    name in the page body.
    """
    slug = slugify(city)
    url = f'https://{slug}.openbook.questica.com/'
    try:
        status, html = _fetch_page(url)
    except Exception:
        return None
    if status != 200:
        return None
    needle = slug.replace('.', '')
    if needle not in html.lower().replace("'", ''):
        return None
    return make_candidate(
        city, 'budget', 'Budget transparency portal',
        f'{city} — OpenBook Budget Explorer (Questica)', url,
        f'Interactive Questica OpenBook budget transparency portal for {city} — '
        f'explore operating and capital budgets by department, project, and year, '
        f'with drill-down visuals and CSV export. Verified live (direct 200, '
        f'city-named tenant; wildcard placeholders redirect and were rejected).',
        ['budget', 'finance', 'open book', 'questica', 'operating', 'capital'])


def probe_transitland(city):
    """Transitland GTFS feed lookup (documented technique: mid-size agencies
    that don't publicize their feed URLs).

    The Transitland v2 API requires an API key (free) — set TRANSITLAND_API_KEY.
    Without a key this probe silently skips.
    """
    import json as _json
    import urllib.request
    api_key = os.environ.get('TRANSITLAND_API_KEY')
    if not api_key:
        return None
    try:
        api = ('https://transit.land/api/v2/rest/operators?per_page=5&apikey='
               + urllib.parse.quote(api_key) + '&q=' + urllib.parse.quote(f'{city}'))
        req = urllib.request.Request(api, headers={'User-Agent': USER_AGENT_BROWSER})
        with urllib.request.urlopen(req, timeout=12) as resp:
            ops = _json.load(resp).get('operators', [])
        match = None
        for op in ops:
            name = str(op.get('name', ''))
            short = str(op.get('short_name', ''))
            if city.lower().replace(' ', '') in (name.lower().replace(' ', '')
                                                 + short.lower().replace(' ', '')):
                match = op
                break
        if not match:
            return None
        onestop = match.get('onestop_id')
        if not onestop:
            return None
        api2 = (f'https://transit.land/api/v2/rest/feeds?apikey='
                + urllib.parse.quote(api_key)
                + f'&operator_onestop_id={urllib.parse.quote(onestop)}')
        req2 = urllib.request.Request(api2, headers={'User-Agent': USER_AGENT_BROWSER})
        with urllib.request.urlopen(req2, timeout=12) as resp2:
            feeds = _json.load(resp2).get('feeds', [])
        zip_url = None
        for feed in feeds:
            urls = feed.get('urls') or {}
            for candidate_url in (urls.get('direct_download'), urls.get('static_current'),
                                  urls.get('latest')):
                if candidate_url and '.zip' in candidate_url.lower():
                    zip_url = candidate_url
                    break
            if zip_url:
                break
        if not zip_url:
            return None
        # Verify the resolved URL actually serves a ZIP (PK magic bytes).
        req3 = urllib.request.Request(zip_url, headers={'User-Agent': USER_AGENT_BROWSER,
                                                        'Range': 'bytes=0-3'})
        with urllib.request.urlopen(req3, timeout=15) as resp3:
            magic = resp3.read(4)
        if magic[:2] != b'PK':
            return None
        return make_candidate(
            city, 'transit', 'GTFS feed',
            f'{city} Transit — GTFS Feed (direct download)', zip_url,
            f'Direct GTFS schedule download ({zip_url.rsplit("/", 1)[-1]}) for the {city} '
            f'transit operator, resolved and ownership-matched via the Transitland registry '
            f'and verified live (ZIP magic-byte check). Suitable for trip planners and '
            f'transit analysis.',
            ['gtfs', 'transit', 'bus', 'schedule', 'open data'])
    except Exception:
        return None


# Each probe: (label, tier-1 category whose absence justifies the probe, fn(city, gap_info))
PROBES = [
    ('eScribe', 'council', lambda city, gi: probe_escribe(city)),
    ('CivicWeb', 'council', lambda city, gi: probe_civicweb(city)),
    ('AllNetMeetings', 'council', lambda city, gi: probe_allnetmeetings(city)),
    ('ArcGIS Hub', 'open-data', probe_arcgis_hub),
    ('Questica OpenBook', 'budget', probe_questica),
    ('Transitland GTFS', 'transit', lambda city, gi: probe_transitland(city)),
]


def main():
    parser = argparse.ArgumentParser(description='Daily resource discovery for awesome-canada.')
    parser.add_argument('--max-cities', type=int,
                        default=int(os.environ.get('MAX_CITIES', '25')),
                        help='Max gap cities to probe per run (rotates daily)')
    parser.add_argument('--concurrent', type=int, default=8, help='Parallel probes')
    parser.add_argument('--dry-run', action='store_true',
                        help='Print findings without writing any files')
    args = parser.parse_args()

    today = datetime.now(timezone.utc)
    today_str = today.strftime('%Y-%m-%d')

    with open(DATA_FILE) as f:
        data = json.load(f)

    regions = load_jurisdiction_regions()
    gaps = find_gap_cities(data)

    # Rotate deterministically by day-of-year so each run covers different cities.
    ordered = sorted(gaps.keys())
    offset = today.timetuple().tm_yday % len(ordered) if ordered else 0
    batch = [ordered[(offset + i) % len(ordered)] for i in range(min(args.max_cities, len(ordered)))]

    print(f"🔎 Discovery run {today_str}", file=sys.stderr)
    print(f"   Gap cities total: {len(ordered)} | probing: {len(batch)}", file=sys.stderr)

    candidates = []
    probe_log = []

    def run_probes(city):
        found = []
        for label, required_category, fn in PROBES:
            if required_category not in gaps[city]['missing']:
                continue  # city already has coverage for what this probe offers
            try:
                c = fn(city, gaps[city])
            except Exception as e:
                probe_log.append((city, label, None, f'error: {e}'))
                continue
            probe_log.append((city, label, c is not None, '' if c is None else c['url']))
            if c:
                found.append(c)
            time.sleep(0.15)
        return found

    with ThreadPoolExecutor(max_workers=args.concurrent) as ex:
        futures = {ex.submit(run_probes, city): city for city in batch}
        for fut in as_completed(futures):
            candidates.extend(fut.result())

    # Final dedupe by normalized URL (within candidates and against existing data).
    norm = lambda u: u.rstrip('/').lower()
    existing = {norm(e['url']) for e in data}
    seen = set()
    unique_candidates = []
    for c in candidates:
        n = norm(c['url'])
        if n in existing or n in seen:
            continue
        seen.add(n)
        c['dateAdded'] = today_str
        unique_candidates.append(c)

    # --- Report ---
    lines = [
        '# 🔭 Awesome Canada — Daily Research Report',
        '',
        f'**Generated:** {today.strftime("%Y-%m-%d %H:%M UTC")}',
        '',
        f'**Scope:** {len(batch)} gap jurisdictions probed (rotation offset '
        f'{offset}/{len(ordered)}) · {len(unique_candidates)} verified candidates',
        '',
        '## Verified candidates',
        '',
    ]
    if unique_candidates:
        for c in unique_candidates:
            lines.append(f"- **{c['name']}** (`{c['jurisdiction']}` · {c['type']})")
            lines.append(f"  - {c['url']}")
    else:
        lines.append('_None this run._')

    lines += ['', '## Probes', '', '| City | Pattern | Hit |', '|---|---|---|']
    for city, label, hit, extra in sorted(probe_log):
        icon = '✅' if hit else '—'
        suffix = f' — {extra}' if hit and extra else ''
        lines.append(f'| {city} | {label} | {icon}{suffix} |')

    lines += ['', f'_Total catalog: {len(data)} resources. '
              'Candidates are staged via PR for human review before entering the catalog._']

    report = '\n'.join(lines) + '\n'

    print(report, file=sys.stderr)

    if args.dry_run:
        print('\n[DRY RUN] No files written.', file=sys.stderr)
        print(json.dumps({'candidates': len(unique_candidates)}))
        return 0

    CANDIDATES_FILE.write_text(json.dumps(unique_candidates, indent=2) + '\n')
    REPORTS_DIR.mkdir(parents=True, exist_ok=True)
    (REPORTS_DIR / f'research-{today_str}.md').write_text(report)
    print(f"\n💾 {len(unique_candidates)} candidates -> {CANDIDATES_FILE}", file=sys.stderr)
    print(json.dumps({'candidates': len(unique_candidates)}))
    return 0


if __name__ == '__main__':
    sys.exit(main())
