#!/usr/bin/env python3
"""Check vulnerable (municipal/provincial/regional/agency/crown corp) links in awesome-canada."""
import json
import sys
import time
import concurrent.futures
import urllib.request
import urllib.error
import ssl
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
DATA_FILE = REPO_ROOT / 'data' / 'resources.json'
USER_AGENT = 'Mozilla/5.0 (compatible; AwesomeCanadaLinkChecker/1.0; +https://github.com/wra-sol/awesome-canada)'

SKIP_FEDERAL = True
MAX_WORKERS = 12
TIMEOUT = 10


def check_url(url, timeout=TIMEOUT):
    start = time.time()
    try:
        req = urllib.request.Request(url, method='HEAD', headers={
            'User-Agent': USER_AGENT,
            'Accept': '*/*',
        })
        ctx = ssl.create_default_context()
        resp = urllib.request.urlopen(req, timeout=timeout, context=ctx)
        status_code = resp.status
        duration = time.time() - start
        if 200 <= status_code < 300:
            return ('ok', status_code, None, duration)
        elif 300 <= status_code < 400:
            return ('redirect', status_code, resp.headers.get('Location', 'unknown'), duration)
        else:
            return ('broken', status_code, None, duration)
    except urllib.error.HTTPError as e:
        duration = time.time() - start
        if e.code == 403:
            return _retry_get(url, timeout)
        elif 400 <= e.code < 500:
            return ('broken', e.code, None, duration)
        elif 500 <= e.code < 600:
            return ('server_error', e.code, None, duration)
        return ('broken', e.code, None, duration)
    except urllib.error.URLError as e:
        duration = time.time() - start
        reason = str(e.reason)
        if 'Name or service not known' in reason or 'Temporary failure' in reason:
            return ('dns_failure', None, reason, duration)
        elif 'timed out' in reason.lower():
            return ('timeout', None, reason, duration)
        elif 'Connection refused' in reason:
            return ('connection_refused', None, reason, duration)
        elif 'Connection reset' in reason:
            return ('connection_reset', None, reason, duration)
        else:
            return ('error', None, reason, duration)
    except Exception as e:
        duration = time.time() - start
        return ('error', None, str(e), duration)


def _retry_get(url, timeout):
    start = time.time()
    try:
        req = urllib.request.Request(url, method='GET', headers={
            'User-Agent': USER_AGENT,
            'Accept': '*/*',
        })
        ctx = ssl.create_default_context()
        resp = urllib.request.urlopen(req, timeout=timeout, context=ctx)
        status_code = resp.status
        duration = time.time() - start
        if 200 <= status_code < 300:
            return ('ok', status_code, None, duration)
        elif 300 <= status_code < 400:
            return ('redirect', status_code, resp.headers.get('Location', 'unknown'), duration)
        else:
            return ('broken', status_code, None, duration)
    except urllib.error.HTTPError as e:
        duration = time.time() - start
        if 400 <= e.code < 500:
            return ('broken', e.code, None, duration)
        elif 500 <= e.code < 600:
            return ('server_error', e.code, None, duration)
        return ('broken', e.code, None, duration)
    except Exception as e:
        duration = time.time() - start
        return ('error', None, str(e), duration)


def main():
    with open(DATA_FILE) as f:
        data = json.load(f)

    # Filter to vulnerable entries
    entries = []
    for entry in data:
        level = entry.get('level', '')
        if level == 'Federal' and SKIP_FEDERAL:
            continue
        if entry.get('status') == 'dead':
            continue
        entries.append(entry)

    print(f"Checking {len(entries)} vulnerable URLs (excluded Federal + dead)...", file=sys.stderr)

    results = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
        future_map = {executor.submit(check_url, e['url'], TIMEOUT): e for e in entries}
        for future in concurrent.futures.as_completed(future_map):
            entry = future_map[future]
            status, code, redirect, duration = future.result()
            results.append({
                'entry': entry,
                'status': status,
                'code': code,
                'redirect': redirect,
                'duration': duration,
            })
            icon = {'ok': '✓', 'redirect': '→', 'broken': '✗', 'server_error': '⚠',
                    'dns_failure': '✗', 'connection_refused': '✗', 'connection_reset': '✗',
                    'timeout': '⌛', 'error': '?'}.get(status, '?')
            print(f"  {icon} {status:20s} {str(code or '-'):>4s} {duration:.1f}s  {entry['name'][:60]}", file=sys.stderr)

    # Print JSON summary to stdout
    broken = [r for r in results if r['status'] not in ('ok', 'redirect')]
    ok = [r for r in results if r['status'] == 'ok']
    redirect = [r for r in results if r['status'] == 'redirect']
    print(json.dumps({
        'total': len(results),
        'ok': len(ok),
        'redirect': len(redirect),
        'broken': len(broken),
        'broken_details': [
            {
                'name': r['entry']['name'],
                'url': r['entry']['url'],
                'level': r['entry']['level'],
                'jurisdiction': r['entry']['jurisdiction'],
                'status': r['status'],
                'code': r['code'],
                'redirect': r['redirect'],
            }
            for r in broken
        ]
    }, indent=2))


if __name__ == '__main__':
    main()
