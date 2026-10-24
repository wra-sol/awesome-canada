#!/usr/bin/env python3
"""
Conformance runner: pins scripts/daily-clean.py's link-health semantics
(is_hard_failure / update_state) to the SAME scenario fixtures that
tests/health.test.js runs against worker/src/health.js.

If this fails, the Python cleaner and the nightly Worker cron have drifted —
one of them will misclassify a failure the other treats differently.

Usage:
  python3 tests/state-conformance.py
"""

import json
import sys
from pathlib import Path

import importlib.util

REPO_ROOT = Path(__file__).resolve().parent.parent
FIXTURES = REPO_ROOT / "tests" / "fixtures" / "link-state-scenarios.json"


def load_daily_clean():
    spec = importlib.util.spec_from_file_location(
        "daily_clean", REPO_ROOT / "scripts" / "daily-clean.py")
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def check_to_tuple(check):
    """Neutral fixture check -> daily-clean result tuple
    (status, status_code, redirect_to, error_msg, duration).

    HTTP statuses are mapped exactly as check-links.check_url would report
    them; errorKinds pass through as their own status string (the vocabulary
    both implementations share).
    """
    if "httpStatus" in check:
        code = check["httpStatus"]
        if 200 <= code < 300:
            return ("ok", code, None, None, 0)
        if 300 <= code < 400:
            return ("redirect", code, "https://elsewhere.example/", None, 0)
        if 400 <= code < 500:
            # 401/403/429 land here too — is_hard_failure() excludes them
            # from hard classification via BLOCKED_STATUSES.
            return ("broken", code, None, None, 0)
        return ("server_error", code, None, None, 0)
    return (check["errorKind"], None, None, None, 0)


def run_scenario(daily_clean, scenario):
    results = {c["url"]: check_to_tuple(c) for c in scenario["checks"]}
    state = daily_clean.update_state(scenario["prev"], results, scenario["today"])

    errors = []
    expected_urls = sorted(c["url"] for c in scenario["checks"])
    if sorted(state.keys()) != expected_urls:
        errors.append(
            f"state covers {sorted(state.keys())}, expected {expected_urls}")
    for url, exp in scenario["expected"].items():
        actual = state.get(url, {})
        if actual.get("failures") != exp["failures"]:
            errors.append(
                f"{url}: failures={actual.get('failures')} expected {exp['failures']}")
        actual_ff = actual.get("first_failure")
        exp_ff = exp.get("first_failure")
        if (actual_ff or None) != (exp_ff or None):
            errors.append(
                f"{url}: first_failure={actual_ff} expected {exp_ff or 'absent'}")
    return errors


def main():
    with open(FIXTURES) as f:
        fixtures = json.load(f)

    daily_clean = load_daily_clean()
    failures = 0
    for scenario in fixtures["scenarios"]:
        errors = run_scenario(daily_clean, scenario)
        if errors:
            failures += 1
            print(f"FAIL  {scenario['name']}", file=sys.stderr)
            for e in errors:
                print(f"      {e}", file=sys.stderr)
        else:
            print(f"ok    {scenario['name']}")

    total = len(fixtures["scenarios"])
    if failures:
        print(f"\n{failures}/{total} scenarios FAILED "
              "(daily-clean.py diverged from worker/src/health.js)",
              file=sys.stderr)
        return 1
    print(f"\nAll {total} scenarios agree with worker/src/health.js")
    return 0


if __name__ == "__main__":
    sys.exit(main())
