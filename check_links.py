#!/usr/bin/env python3
import json
import sys
import urllib.request
import ssl
from concurrent.futures import ThreadPoolExecutor, as_completed
import time

# Create a context that allows us to check sites with cert issues (we just care if they exist)
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

headers = {
    'User-Agent': 'Mozilla/5.0 (compatible; LinkChecker/1.0)'
}

def check_url(url, timeout=15):
    try:
        req = urllib.request.Request(url, method='HEAD', headers=headers)
        response = urllib.request.urlopen(req, context=ctx, timeout=timeout)
        return response.status, response.geturl()
    except urllib.error.HTTPError as e:
        return e.code, e.geturl()
    except Exception as e:
        return str(type(e).__name__), str(e)

with open('data/resources.json') as f:
    data = json.load(f)

# Focus on Municipal, Provincial, Regional, Agency
priority_levels = {'Municipal', 'Provincial', 'Regional', 'Agency'}
# Also check any with status=dead to see if they revived
resources = []
for r in data:
    if r.get('status') == 'dead':
        continue  # skip known dead unless we want to check revival
    if r['level'] in priority_levels:
        resources.append(r)

print(f"Checking {len(resources)} resources...")

results = []
with ThreadPoolExecutor(max_workers=10) as executor:
    future_to_r = {executor.submit(check_url, r['url']): r for r in resources}
    for future in as_completed(future_to_r):
        r = future_to_r[future]
        try:
            status, info = future.result()
        except Exception as e:
            status, info = f"ERROR:{type(e).__name__}", str(e)
        results.append((r, status, info))

# Sort by status code
broken = []
redirects = []
ok = []
for r, status, info in results:
    try:
        code = int(status)
        if code >= 400:
            broken.append((r, status, info))
        elif code >= 300 and code < 400:
            redirects.append((r, status, info))
        else:
            ok.append((r, status, info))
    except ValueError:
        broken.append((r, status, info))

print(f"\nOK: {len(ok)}")
print(f"Redirects: {len(redirects)}")
print(f"Broken: {len(broken)}")

if broken:
    print("\n=== BROKEN ===")
    for r, status, info in sorted(broken, key=lambda x: str(x[1])):
        print(f"[{status}] {r['name']} ({r['level']}) — {r['url']}")
        if str(status) in ('404', '410', '500', '502', '503', '504'):
            print(f"   -> {info}")

if redirects:
    print("\n=== REDIRECTS ===")
    for r, status, info in redirects:
        print(f"[{status}] {r['name']} ({r['level']}) — {r['url']}")
        print(f"   -> {info}")
