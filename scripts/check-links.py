#!/usr/bin/env python3
"""
Awesome Canada Link-Rot Checker

Reads data/resources.json, checks every URL, and reports broken/dead links.
Outputs a summary to stdout, broken links to stderr.

Usage:
  python3 scripts/check-links.py                    # quick check (HEAD requests)
  python3 scripts/check-links.py --report           # full markdown report
  python3 scripts/check-links.py --timeout 10       # custom timeout (default 8s)
  python3 scripts/check-links.py --concurrent 20    # parallel checks (default 15)
"""

import json
import sys
import os
import time
import concurrent.futures
import urllib.request
import urllib.parse
import urllib.error
import ssl
import argparse
from datetime import datetime, timezone
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
DATA_FILE = REPO_ROOT / 'data' / 'resources.json'

USER_AGENT = 'Mozilla/5.0 (compatible; AwesomeCanadaLinkChecker/1.0; +https://github.com/wra-sol/awesome-canada)'

# Known false-positive domains: these block HEAD requests or data-center IPs,
# returning timeouts even when the URL is valid. We retry with GET and a
# browser-grade UA; if that also fails, we skip rather than flag as broken.
FALSE_POSITIVE_DOMAINS = {'canada.ca'}

RESULTS = {}  # url -> {status, status_code, redirect_to, error, duration}


def check_url(url, timeout=8):
    """Check a single URL. Returns (status, status_code, redirect_to, error_msg)."""
    start = time.time()
    redirect_to = None

    try:
        req = urllib.request.Request(url, method='HEAD', headers={
            'User-Agent': USER_AGENT,
            'Accept': '*/*',
        })
        ctx = ssl.create_default_context()
        ctx.check_hostname = True
        ctx.verify_mode = ssl.CERT_REQUIRED

        try:
            resp = urllib.request.urlopen(req, timeout=timeout, context=ctx)
            status_code = resp.status
            duration = time.time() - start

            if 200 <= status_code < 300:
                return ('ok', status_code, None, None, duration)
            elif 300 <= status_code < 400:
                redirect_to = resp.headers.get('Location', 'unknown')
                return ('redirect', status_code, redirect_to, None, duration)
            elif status_code == 403:
                # 403 often means the site blocks HEAD — retry with GET
                return _retry_get(url, timeout)
            elif status_code == 429:
                return ('rate_limited', status_code, None, None, duration)
            else:
                return ('broken', status_code, None, None, duration)

        except urllib.error.HTTPError as e:
            status_code = e.code
            duration = time.time() - start

            if status_code == 403:
                return _retry_get(url, timeout)
            elif status_code == 429:
                return ('rate_limited', status_code, None, None, duration)
            elif 400 <= status_code < 500:
                return ('broken', status_code, None, None, duration)
            elif 500 <= status_code < 600:
                return ('server_error', status_code, None, None, duration)
            else:
                return ('broken', status_code, None, None, duration)

        except urllib.error.URLError as e:
            duration = time.time() - start
            reason = str(e.reason)
            if 'Name or service not known' in reason or 'Temporary failure' in reason:
                return ('dns_failure', None, None, reason, duration)
            elif 'Connection refused' in reason:
                return ('connection_refused', None, None, reason, duration)
            elif 'Connection reset' in reason:
                return ('connection_reset', None, None, reason, duration)
            elif 'timed out' in reason.lower():
                # Retry with GET for known false-positive domains
                domain = urllib.parse.urlparse(url).netloc
                if any(domain.endswith(d) for d in FALSE_POSITIVE_DOMAINS):
                    retry = _retry_get(url, timeout, browser_ua=True)
                    if retry[0] == 'ok':
                        return retry
                    return ('false_positive_timeout', None, None, f"timeout on {domain}, GET retry also failed", duration)
                return ('timeout', None, None, reason, duration)
            else:
                return ('error', None, None, reason, duration)

        except ssl.SSLCertVerificationError as e:
            duration = time.time() - start
            return ('ssl_error', None, None, str(e), duration)

        except OSError as e:
            duration = time.time() - start
            return ('error', None, None, str(e), duration)

    except Exception as e:
        duration = time.time() - start
        return ('error', None, None, str(e), duration)


def _retry_get(url, timeout, browser_ua=False):
    """Retry URL with GET method (HEAD may be blocked). Optionally use a browser UA."""
    start = time.time()
    try:
        headers = {
            'User-Agent': USER_AGENT,
            'Accept': '*/*',
        }
        if browser_ua:
            headers['User-Agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36'
            headers['Accept'] = 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
            headers['Accept-Language'] = 'en-US,en;q=0.5'

        req = urllib.request.Request(url, method='GET', headers=headers)
        ctx = ssl.create_default_context()
        ctx.check_hostname = True
        ctx.verify_mode = ssl.CERT_REQUIRED

        resp = urllib.request.urlopen(req, timeout=timeout, context=ctx)
        status_code = resp.status
        duration = time.time() - start

        if 200 <= status_code < 300:
            return ('ok', status_code, None, None, duration)
        elif 300 <= status_code < 400:
            redirect_to = resp.headers.get('Location', 'unknown')
            return ('redirect', status_code, redirect_to, None, duration)
        else:
            return ('broken', status_code, None, None, duration)

    except urllib.error.HTTPError as e:
        duration = time.time() - start
        if 400 <= e.code < 500:
            return ('broken', e.code, None, None, duration)
        elif 500 <= e.code < 600:
            return ('server_error', e.code, None, None, duration)
        return ('broken', e.code, None, None, duration)

    except Exception as e:
        duration = time.time() - start
        return ('error', None, None, str(e), duration)


def check_all_urls(data, timeout=8, max_workers=15):
    """Check all unique URLs from resources.json in parallel."""
    urls_seen = set()
    checked = []

    for entry in data:
        url = entry.get('url', '').strip()
        if not url:
            continue
        if url in urls_seen:
            continue
        urls_seen.add(url)
        checked.append((entry, url))

    print(f"🔍 Checking {len(checked)} unique URLs...", file=sys.stderr)
    print(f"   Timeout: {timeout}s | Parallel: {max_workers} workers\n", file=sys.stderr)

    results = {}
    broken = []
    stats = {'ok': 0, 'redirect': 0, 'broken': 0, 'server_error': 0,
             'dns_failure': 0, 'connection_refused': 0, 'connection_reset': 0,
             'timeout': 0, 'ssl_error': 0, 'error': 0, 'rate_limited': 0,
             'false_positive_timeout': 0}

    with concurrent.futures.ThreadPoolExecutor(max_workers=max_workers) as executor:
        future_map = {executor.submit(check_url, url, timeout): (entry, url) for entry, url in checked}

        for future in concurrent.futures.as_completed(future_map):
            entry, url = future_map[future]
            result = future.result()
            status, status_code, redirect_to, error_msg, duration = result
            results[url] = result

            if status in stats:
                stats[status] += 1
            else:
                stats[status] = 1

            # Also attribute to the resource itself
            entry_result = {
                'status': status,
                'status_code': status_code,
                'redirect_to': redirect_to,
                'error': error_msg,
                'duration': round(duration, 2),
            }

            if status in ('broken', 'server_error', 'dns_failure', 'connection_refused',
                          'connection_reset', 'timeout', 'ssl_error', 'error'):
                # Skip false-positive timeouts from known blocked domains
                if status == 'timeout' and url:
                    domain = urllib.parse.urlparse(url).netloc
                    if any(domain.endswith(d) for d in FALSE_POSITIVE_DOMAINS):
                        continue
                broken.append((entry, entry_result))

            # Brief progress
            icon = {'ok': '✓', 'redirect': '→', 'broken': '✗', 'server_error': '⚠',
                    'dns_failure': '✗', 'connection_refused': '✗', 'connection_reset': '✗',
                    'timeout': '⌛', 'ssl_error': '🔒', 'error': '?', 'rate_limited': '⏳',
                    'false_positive_timeout': '~'}.get(status, '?')
            duration_s = f"{duration:.1f}s"
            code_str = str(status_code or '-')
            print(f"  {icon} {status:20s} {code_str:>4s} {duration_s:6s} {url[:80]}", file=sys.stderr)

    return results, broken, stats, len(checked)


def format_report(results, broken, stats, total, data):
    """Generate a detailed markdown report."""
    lines = []
    lines.append(f"# 🔗 Awesome Canada — Link-Rot Report")
    lines.append(f"")
    lines.append(f"**Generated:** {datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M UTC')}")
    lines.append(f"")
    lines.append(f"**Scope:** {len(data)} resources · {total} unique URLs checked")
    lines.append(f"")

    # Summary table
    lines.append(f"## Summary")
    lines.append(f"")
    lines.append(f"| Status | Count |")
    lines.append(f"|--------|------:|")
    for label, key in [('OK', 'ok'), ('Redirects', 'redirect'),
                       ('Server Errors (5xx)', 'server_error'),
                       ('Client Errors (4xx)', 'broken'),
                       ('DNS Failures', 'dns_failure'),
                       ('SSL Errors', 'ssl_error'),
                       ('Timeouts', 'timeout'),
                       ('Connection Refused', 'connection_refused'),
                       ('Connection Reset', 'connection_reset'),
                       ('Rate Limited', 'rate_limited'),
                       ('False-Positive Timeouts', 'false_positive_timeout'),
                       ('Other Errors', 'error')]:
        if stats.get(key, 0) > 0:
            lines.append(f"| {label} | {stats[key]} |")

    ok_pct = round(stats.get('ok', 0) / total * 100, 1)
    bad_count = sum(v for k, v in stats.items() if k not in ('ok', 'redirect', 'false_positive_timeout'))
    lines.append(f"| **Total OK** | **{stats.get('ok', 0)} ({ok_pct}%)** |")
    lines.append(f"| **Total Issues** | **{bad_count}** |")
    lines.append(f"")

    if bad_count == 0:
        lines.append(f"🎉 **All links are healthy!** No action needed.")
        return '\n'.join(lines)

    # Broken links section
    lines.append(f"## ❌ Broken / Problematic Links")
    lines.append(f"")
    lines.append(f"These {len(broken)} links need attention:")
    lines.append(f"")

    status_order = ['broken', 'server_error', 'dns_failure', 'connection_refused',
                    'connection_reset', 'ssl_error', 'timeout', 'error']
    sorted_broken = sorted(broken, key=lambda x: (
        status_order.index(x[1]['status']) if x[1]['status'] in status_order else 99
    ))

    for entry, result in sorted_broken:
        name = entry.get('name', '?')
        url = entry.get('url', '?')
        category = entry.get('category', '?')
        jurisdiction = entry.get('jurisdiction', '?')
        status_str = result['status'].replace('_', ' ').title()
        code = result['status_code'] or '—'
        error = result['error'] or ''
        line = f"- **[{name}]({url})** — _{status_str}_ (HTTP {code})"
        if error:
            line += f"\n  - `{error}`"
        line += f"\n  - Category: {category} / {jurisdiction}"
        lines.append(line)

    lines.append(f"")
    lines.append(f"---")
    lines.append(f"")
    lines.append(f"_Report auto-generated by awesome-canada link-rot checker._")

    return '\n'.join(lines)


def format_brief(results, broken, stats, total, data):
    """Generate a concise summary for delivery (Telegram-friendly)."""
    bad_count = sum(v for k, v in stats.items() if k not in ('ok', 'redirect'))
    ok_count = stats.get('ok', 0)

    lines = [f"**🔗 Awesome Canada Link Check**"]
    lines.append(f"")
    lines.append(f"Checked {total} URLs — {ok_count} OK, {bad_count} issues")
    lines.append(f"")
    lines.append(f"Breakdown:")
    for label, key in [('✅ OK', 'ok'), ('→→ Redirects', 'redirect'),
                       ('⚠⃣ 5xx', 'server_error'), ('❌ 4xx', 'broken'),
                       ('DNS fail', 'dns_failure'), ('⌛ Timeout', 'timeout'),
                       ('SSL', 'ssl_error'), ('Conn refused', 'connection_refused'),
                       ('Other', 'error'), ('Rate limited', 'rate_limited'),
                       ('FP timeout', 'false_positive_timeout')]:
        if stats.get(key, 0) > 0:
            lines.append(f"  • {label}: {stats[key]}")
    lines.append(f"")

    bad_count = sum(v for k, v in stats.items() if k not in ('ok', 'redirect', 'false_positive_timeout'))
    if bad_count > 0:
        # Show top broken links (limit to 15 for Telegram)
        status_order = ['broken', 'server_error', 'dns_failure', 'connection_refused',
                        'connection_reset', 'ssl_error', 'timeout', 'error']
        sorted_broken = sorted(broken, key=lambda x: (
            status_order.index(x[1]['status']) if x[1]['status'] in status_order else 99
        ))
        lines.append(f"**Broken links:**")
        for entry, result in sorted_broken[:15]:
            name = entry.get('name', '?')
            url = entry.get('url', '?')
            code = result['status_code'] or ''
            lines.append(f"  • [{name}]({url}) — HTTP {code}")
        if len(broken) > 15:
            lines.append(f"  • ... and {len(broken) - 15} more")

    if bad_count == 0:
        lines.append(f"🥳 All clean!")

    return '\n'.join(lines)


def main():
    parser = argparse.ArgumentParser(description='Check awesome-canada links for rot.')
    parser.add_argument('--report', action='store_true', help='Output full markdown report')
    parser.add_argument('--timeout', type=int, default=8, help='Request timeout in seconds')
    parser.add_argument('--concurrent', type=int, default=15, help='Parallel workers')
    args = parser.parse_args()

    # Load data
    if not DATA_FILE.exists():
        print(f"ERROR: Data file not found: {DATA_FILE}", file=sys.stderr)
        sys.exit(1)

    with open(DATA_FILE) as f:
        data = json.load(f)

    print(f"📋 Loaded {len(data)} resources from {DATA_FILE}", file=sys.stderr)

    # Check URLs
    results, broken, stats, total = check_all_urls(data, args.timeout, args.concurrent)

    # Output
    if args.report:
        report = format_report(results, broken, stats, total, data)
        print(report)
    else:
        summary = format_brief(results, broken, stats, total, data)
        print(summary)

    # Exit code
    bad_count = sum(v for k, v in stats.items() if k not in ('ok', 'redirect', 'false_positive_timeout'))
    if bad_count > 0:
        print(f"\n⚠️  {bad_count} link(s) need attention.", file=sys.stderr)
        sys.exit(2 if bad_count > 0 else 0)
    else:
        print(f"\n✅ All clear!", file=sys.stderr)
        sys.exit(0)


if __name__ == '__main__':
    main()
