#!/usr/bin/env python3
"""
Awesome Canada Redirect Resolver

Reads data/resources.json and follows HTTP redirects for every URL.
Automatically updates entries where a 301/302 redirect leads to a new URL.

Usage:
  python3 scripts/resolve-redirects.py            # dry run (report only)
  python3 scripts/resolve-redirects.py --apply    # actually update resources.json
  python3 scripts/resolve-redirects.py --apply --no-backup  # skip backup
"""

import json
import sys
import os
import shutil
import urllib.request
import urllib.error
import ssl
from datetime import datetime, timezone
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
DATA_FILE = REPO_ROOT / 'data' / 'resources.json'
BACKUP_FILE = REPO_ROOT / 'data' / 'resources.json.bak'

USER_AGENT = 'Mozilla/5.0 (compatible; AwesomeCanadaRedirectResolver/1.0; +https://github.com/wra-sol/awesome-canada)'
MAX_REDIRECTS = 5


def follow_redirects(url, timeout=10):
    """Follow the redirect chain and return the final destination."""
    visited = set()
    chain = []
    current = url
    final_status = None

    for hop in range(MAX_REDIRECTS):
        if current in visited:
            break
        visited.add(current)

        try:
            req = urllib.request.Request(current, method='HEAD', headers={
                'User-Agent': USER_AGENT,
                'Accept': '*/*',
            })
            ctx = ssl.create_default_context()
            ctx.check_hostname = True
            ctx.verify_mode = ssl.CERT_REQUIRED

            resp = urllib.request.urlopen(req, timeout=timeout, context=ctx)
            status = resp.status

            if 300 <= status < 400:
                redirect_url = resp.headers.get('Location', '')
                # Handle relative redirects
                if redirect_url.startswith('/'):
                    from urllib.parse import urlparse
                    parsed = urlparse(current)
                    redirect_url = f"{parsed.scheme}://{parsed.netloc}{redirect_url}"
                chain.append((current, status, redirect_url))
                current = redirect_url
                final_status = status
            else:
                final_status = status
                break

        except urllib.error.HTTPError as e:
            if 300 <= e.code < 400:
                redirect_url = e.headers.get('Location', '')
                if redirect_url.startswith('/'):
                    from urllib.parse import urlparse
                    parsed = urlparse(current)
                    redirect_url = f"{parsed.scheme}://{parsed.netloc}{redirect_url}"
                chain.append((current, e.code, redirect_url))
                current = redirect_url
                final_status = e.code
            else:
                final_status = e.code
                break

        except Exception as e:
            # Can't resolve — return what we have
            return current, chain, final_status or 0, str(e)

    return current, chain, final_status or 0, None


def normalize_url(url):
    """Normalize URL for comparison — strip trailing slash, lowercase."""
    return url.strip().rstrip('/').lower()


def main():
    apply_changes = '--apply' in sys.argv
    no_backup = '--no-backup' in sys.argv

    # Load data
    with open(DATA_FILE) as f:
        data = json.load(f)

    print(f"📋 Loaded {len(data)} resources")
    print(f"   Mode: {'LIVE (updates will be applied)' if apply_changes else 'DRY RUN (no changes)'}")
    print()

    # Track unique URLs
    urls_seen = {}
    updated = []
    skipped_redirect_to_same = 0
    errors = 0

    for i, entry in enumerate(data):
        url = entry.get('url', '').strip()
        if not url:
            continue

        # Only process unique URLs
        normalized = normalize_url(url)
        if normalized in urls_seen:
            continue
        urls_seen[normalized] = i

        final_url, chain, status, error = follow_redirects(url)

        if error:
            print(f"  ⚠  [{i:4d}] {url[:60]:60s} → ERROR: {error[:50]}")
            errors += 1
            continue

        if len(chain) == 0:
            # No redirect — URL is fine as-is
            continue

        final_normalized = normalize_url(final_url)
        original_normalized = normalize_url(url)

        if final_normalized == original_normalized:
            skipped_redirect_to_same += 1
            continue

        # We have a redirect to a different URL
        redirect_str = ' → '.join([f"{s}" for _, s, _ in chain])
        print(f"  ↪  [{i:4d}] {url[:55]:55s}")
        for src, code, dst in chain:
            print(f"       {code} → {dst[:70]}")
        print(f"       => FINAL: {final_url[:70]}")

        updated.append({
            'entry_index': i,
            'entry': entry,
            'original_url': url,
            'new_url': final_url,
            'chain': chain,
        })

    print()
    print(f"📊 Summary:")
    print(f"   Total unique URLs: {len(urls_seen)}")
    print(f"   Redirects detected: {len(updated)}")
    print(f"   Redirects to same URL (ignored): {skipped_redirect_to_same}")
    print(f"   Errors: {errors}")

    if not updated:
        print(f"\n✅ No redirects to resolve!")
        return

    if not apply_changes:
        print(f"\n💡 Run with --apply to update {len(updated)} URLs in resources.json")
        return

    # Apply changes
    if not no_backup:
        shutil.copy2(DATA_FILE, BACKUP_FILE)
        print(f"\n💾 Backup saved to {BACKUP_FILE}")

    changed_entries = []
    for u in updated:
        old_url = u['entry']['url']
        u['entry']['url'] = u['new_url']
        changed_entries.append((u['entry_index'], old_url, u['new_url']))

    with open(DATA_FILE, 'w') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
        f.write('\n')

    print(f"\n✅ Updated {len(changed_entries)} URLs in resources.json")
    print()
    print("Changes made:")
    for idx, old, new in changed_entries[:20]:
        print(f"   [{idx}] {old[:55]:55s} → {new[:55]}")
    if len(changed_entries) > 20:
        print(f"   ... and {len(changed_entries) - 20} more")


if __name__ == '__main__':
    main()
