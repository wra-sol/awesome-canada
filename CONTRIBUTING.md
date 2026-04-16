# Contributing to Awesome Canada

Thank you for your interest in contributing! This document outlines how to add new resources to the list.

## How to Contribute

### Adding a New Resource

1. **Check for duplicates** — Search the existing list to ensure the resource isn't already included
2. **Verify the resource** — Confirm it's an official Canadian government resource that's publicly accessible
3. **Add to resources.json** — Add a new entry following the schema below

### Resource Schema

Each resource must follow this JSON schema:

```json
{
  "name": "Resource Name",
  "level": "Federal|Provincial|Municipal|Regional|Agency|Crown Corp",
  "jurisdiction": "Exact jurisdiction name",
  "type": "Resource type (e.g., Open data portal, Calculator, Map)",
  "description": "Brief description (1-2 sentences max)",
  "url": "https://...",
  "tags": ["tag1", "tag2"]
}
```

### Level Guide

| Level | Examples |
|-------|----------|
| Federal | Government of Canada, Stats Can, Parks Canada |
| Provincial | Ontario, BC, Alberta, Quebec, etc. |
| Municipal | Toronto, Vancouver, Montreal, etc. |
| Regional | Metrolinx, TransLink, PRESTO |
| Agency | Elections Canada, Conservation Authorities |
| Crown Corp | CMHC, Canada Post, CBC, BDC |

### Jurisdiction Naming

- **Federal**: Use `Canada` or `Parks Canada`
- **Provincial**: Use full province/territory name (Ontario, British Columbia, Yukon, etc.)
- **Municipal**: Use city name (Toronto, Ottawa, Calgary)
- **Regional**: Use region name (Ontario/GTA, Metro Vancouver)
- **Agency**: Use organization name
- **Crown Corp**: Use `Canada`

### Tags

Use lowercase tags. Common tags:
- `open data`, `maps`, `transit`, `parks`, `budget`, `safety`
- `finance`, `housing`, `employment`, `health`, `environment`
- City/region names as tags (e.g., `Toronto`, `Ontario`, `BC`)

### Description Guidelines

- Keep descriptions to 1-2 sentences
- Focus on what the resource does, not what it "is"
- Include useful context (e.g., "one of the best", "official", "real-time")
- Avoid marketing language

### Pull Request Process

1. Fork the repository
2. Create a feature branch: `git checkout -b add-resource-name`
3. Add your entry to `data/resources.json`
4. Run `node scripts/validate.js` to verify your entry is valid
5. Commit with a clear message
6. Push and open a Pull Request

### Validation

Run the validation script before submitting:

```bash
node scripts/validate.js
```

This checks for:
- Required fields present
- Valid URL format
- Valid level values
- Valid jurisdiction values
- Non-empty tags array

## Questions?

Open an issue for discussion before submitting a PR if you're unsure whether a resource fits.