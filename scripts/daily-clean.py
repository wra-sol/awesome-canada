#!/usr/bin/env python3
"""
Awesome Canada Daily Link Cleaner

Checks every URL in data/resources.json, tracks consecutive hard failures in
docs/state/link-health.json, and removes entries that have failed the removal
threshold times in a row. Writes a dated markdown report to docs/reports/.

Hard failures (increment counter): broken (4xx), dns_failure,
connection_refused, connection_reset, ssl_error.
Soft statuses (counter frozen): server_error, timeout, rate_limited,
false_positive_timeout, error.
Healthy statuses (counter reset): ok, redirect.

Usage:
  python3 scripts/daily-clean.py                     # full clean run
  python3 scripts/daily-clean.py --threshold 3       # require 3 consecutive failures
  python3 scripts/daily-clean.py --limit 25          # check only first N URLs (testing)
  python3 scripts/daily-clean.py --dry-run           # report but never modify data/state
"""

import argparse
import json
import os
import sys
from datetime import datetime, timezone
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent

# check-links.py uses a hyphen, so it must be loaded by path rather than imported.
import importlib.util
_spec = importlib.util.spec_from_file_location(
    'check_links', REPO_ROOT / 'scripts' / 'check-links.py')
check_links = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(check_links)
DATA_FILE = check_links.DATA_FILE
check_all_urls = check_links.check_all_urls
format_report = check_links.format_report

STATE_FILE = REPO_ROOT / 'docs' / 'state' / 'link-health.json'
REPORTS_DIR = REPO_ROOT / 'docs' / 'reports'

HARD_FAILURE_STATUSES = {'broken', 'dns_failure', 'connection_refused',
                         'connection_reset', 'ssl_error'}
SOFT_FAILURE_STATUSES = {'server_error', 'timeout', 'rate_limited',
                         'false_positive_timeout', 'error'}
HEALTHY_STATUSES = {'ok', 'redirect'}
# HTTP statuses that mean "exists but blocks automated checks" — reported,
# never auto-removed.
BLOCKED_STATUSES = {401, 403, 429}


def is_hard_failure(status, status_code):
    """True only for signals that reliably indicate a dead resource."""
    if status == 'broken':
        return status_code not in BLOCKED_STATUSES
    return status in HARD_FAILURE_STATUSES


def load_state():
    if STATE_FILE.exists():
        try:
            with open(STATE_FILE) as f:
                return json.load(f)
        except (json.JSONDecodeError, OSError):
            print(f"⚠️  Could not parse {STATE_FILE}, starting fresh state", file=sys.stderr)
    return {}


def save_state(state):
    STATE_FILE.parent.mkdir(parents=True, exist_ok=True)
    with open(STATE_FILE, 'w') as f:
        json.dump(state, f, indent=2)
        f.write('\n')


def update_state(prev_state, results, today):
    """Merge this run's results into consecutive-failure state."""
    new_state = {}
    for url, (status, status_code, redirect_to, error_msg, _duration) in results.items():
        prev_failures = prev_state.get(url, {}).get('failures', 0)

        if status in HEALTHY_STATUSES:
            failures = 0
        elif is_hard_failure(status, status_code):
            failures = prev_failures + 1
        else:  # soft statuses (incl. bot-blocked 401/403/429) freeze the counter
            failures = prev_failures

        new_state[url] = {
            'failures': failures,
            'status': status,
            'status_code': status_code,
            'last_checked': today,
        }
        if failures > 0:
            new_state[url]['first_failure'] = \
                prev_state.get(url, {}).get('first_failure') or today
    return new_state


def main():
    parser = argparse.ArgumentParser(description='Daily link-rot cleaning for awesome-canada.')
    parser.add_argument('--threshold', type=int,
                        default=int(os.environ.get('CLEAN_THRESHOLD', '2')),
                        help='Consecutive hard failures before removal (default 2)')
    parser.add_argument('--timeout', type=int, default=8, help='Per-request timeout seconds')
    parser.add_argument('--concurrent', type=int, default=15, help='Parallel workers')
    parser.add_argument('--limit', type=int, default=None,
                        help='Only check the first N URLs (for testing)')
    parser.add_argument('--dry-run', action='store_true',
                        help='Report only; never modify resources.json or state')
    args = parser.parse_args()

    if args.limit and not args.dry_run:
        print("ERROR: --limit is for testing only and requires --dry-run "
              "(it would otherwise wipe state for unchecked URLs)", file=sys.stderr)
        return 1

    today = datetime.now(timezone.utc).strftime('%Y-%m-%d')

    with open(DATA_FILE) as f:
        data = json.load(f)
    print(f"📋 Loaded {len(data)} resources", file=sys.stderr)

    if args.limit:
        data = data[:args.limit]
        print(f"⚠️  LIMIT MODE: checking only first {args.limit} entries", file=sys.stderr)

    results, broken, stats, total = check_all_urls(
        data, timeout=args.timeout, max_workers=args.concurrent)

    bad_count = sum(v for k, v in stats.items()
                    if k not in ('ok', 'redirect', 'false_positive_timeout'))

    # --- Update state ---
    prev_state = {} if args.dry_run else load_state()
    new_state = update_state(prev_state, results, today)

    doomed_urls = {url for url, s in new_state.items() if s['failures'] >= args.threshold}

    # --- Remove dead entries ---
    removed = []
    kept = []
    for entry in data:
        if entry.get('url', '').strip() in doomed_urls:
            removed.append(entry)
        else:
            kept.append(entry)

    print(f"\n{'🧹 DRY RUN' if args.dry_run else '🧹 Clean'} summary:", file=sys.stderr)
    print(f"   Checked:              {total} unique URLs", file=sys.stderr)
    print(f"   Issues this run:      {bad_count}", file=sys.stderr)
    print(f"   Threshold:            {args.threshold} consecutive hard failures", file=sys.stderr)
    print(f"   Tracked failures:     {sum(1 for s in new_state.values() if s['failures'] > 0)}", file=sys.stderr)
    print(f"   Removing:             {len(removed)} entr{'y' if len(removed) == 1 else 'ies'}", file=sys.stderr)
    for entry in removed:
        print(f"      ✗ {entry['name']} — {entry['url']}", file=sys.stderr)

    # --- Write outputs ---
    if not args.dry_run:
        if removed:
            with open(DATA_FILE, 'w') as f:
                json.dump(kept, f, indent=2)
                f.write('\n')
            print(f"\n💾 Wrote {len(kept)} entries to {DATA_FILE}", file=sys.stderr)

        save_state(new_state)

        REPORTS_DIR.mkdir(parents=True, exist_ok=True)
        report_path = REPORTS_DIR / f'link-rot-{today}.md'
        with open(report_path, 'w') as f:
            f.write(format_report(results, broken, stats, total, data))
            f.write(f"\n\n---\n\n## 🧹 Cleaning Actions ({today})\n\n")
            f.write(f"- Threshold: removed after **{args.threshold}** consecutive hard failures\n")
            if removed:
                f.write(f"- **Removed {len(removed)} entries:**\n\n")
                for e in removed:
                    f.write(f"  - {e['name']} — `{e['url']}` "
                            f"(failed {new_state.get(e['url'], {}).get('failures', '?')}×)\n")
            else:
                f.write("- No entries crossed the removal threshold; nothing removed.\n")

            pending = [(u, s) for u, s in sorted(new_state.items())
                       if 0 < s['failures'] < args.threshold
                       and is_hard_failure(s['status'], s['status_code'])]
            if pending:
                f.write(f"\n### ⏳ Watchlist ({len(pending)} links approaching threshold)\n\n")
                for url, s in pending:
                    f.write(f"- {s['failures']}/{args.threshold} failures — {url}\n")
        print(f"📝 Report: {report_path}", file=sys.stderr)

        print(json.dumps({
            'checked': total,
            'issues': bad_count,
            'removed': len(removed),
            'total_remaining': len(kept),
        }))
    else:
        print("\n[DRY RUN] No files modified.", file=sys.stderr)

    print("✅ Daily clean complete", file=sys.stderr)
    return 0


if __name__ == '__main__':
    sys.exit(main())
