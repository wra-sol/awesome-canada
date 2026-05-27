# Data Scouting Strategy: Municipal & Provincial Focus

**Status:** Active (May 2026)  
**Goal:** Transform awesome-canada from a broad government directory into a focused, high-utility resource for municipal and provincial data sources that are hard to find.

---

## What We Want

This directory **prioritizes municipal and provincial data sources** — but federal resources are included where they provide unique value (census, geospatial, parliamentary, specialized research, regulatory databases). The key distinction: **actionable datasets and tools, not broad official websites.**

### Tier 1: Must-Have (Highest Priority)

| Category | What to Find | Why It Matters |
|----------|-------------|----------------|
| **Municipal Open Data** | Mid-size city portals with actual datasets (not just landing pages). CSV, GeoJSON, shapefile downloads. API docs. | Citizens, journalists, researchers, campaigns need local data. Most city portals are buried or poorly indexed. |
| **Planning & Zoning** | Interactive zoning maps, development application trackers, committee of adjustment search, building permit databases. | Critical for real estate, community organizing, urban planning, opposition research. |
| **Council Democracy** | Searchable agendas/minutes, vote trackers, speaking time records, livestream archives with timestamps, council calendar with iCal/ICS feeds. | Accountability tool. Most cities bury this in PDFs. |
| **Budget Transparency** | Checkbook explorers, vendor payment databases, salary disclosure searches, budget simulators, procurement portals. | Essential for fiscal accountability. Often hidden behind FOIA. |
| **Transit GTFS** | Actual GTFS.zip download URLs, real-time feed endpoints, API documentation. Not "plan your trip" pages. | GTFS is the standard for transit data. Many agencies don't publicize their feed URLs. |

### Tier 2: High-Value (Medium Priority)

| Category | What to Find |
|----------|-------------|
| **Environmental Monitoring** | Air quality station data, water quality test results, flood plain maps, tree inventories, climate projections at local scale. |
| **Health Region Data** | Public health inspection reports, vaccination coverage by neighbourhood, outbreak tracking, food safety ratings. |
| **School Board Data** | Enrollment trends, school boundary maps, facility condition reports, catchment area lookups, school board trustee contact/zone maps. |
| **Lobbyist Registries** | Municipal lobbyist registration, meeting logs, gifts/benefits disclosures. |
| **Heritage & Culture** | Heritage property registers, public art inventories, cultural grants databases, cemetery records. |
| **Property & Tax** | Property assessment searches, tax roll data, parcel maps, zoning compliance lookups. |

### Tier 3: Niche (Lower Priority but Welcome)

| Category | What to Find |
|----------|-------------|
| **Parks & Recreation** | Park amenity databases, trail GIS layers, recreation program APIs, dog park locations. |
| **Bids & Tenders** | Active municipal procurement opportunities, awarded contracts database, vendor registration portals. |
| **Noise & By-law** | Noise complaint maps, by-law enforcement statistics, animal services data. |
| **Demographics** | Ward/neighbourhood profiles from municipal planning departments (often more current than census). |

---

## Where to Look

### Municipal
1. **City websites → "Open Data" or "Data" footer link** (often buried)
2. **City websites → "City Clerk" or "Council" → agendas/minutes**
3. **ArcGIS Hub** — many cities host open data here: `https://[city].opendata.arcgis.com/`
4. **Socrata/OpenGov** — mid-size cities use these platforms: `https://data.[city].gov/` or similar
5. **CKAN instances** — Canadian cities running CKAN: search "[city] ckan"
6. **Transit agencies** — look for "Developers" or "GTFS" links, not "Rider Info"
7. **Municipal planning department pages** — often have PDF maps but also hidden GIS layers

### Provincial
1. ** Provincial open data portals** — but look past the homepage for bulk download/API sections
2. ** Provincial geospatial services** — WMS/WFS endpoints, GeoJSON services
3. ** Election agencies** — candidate finance disclosures, polling division maps
4. ** Health authorities** — regional health unit websites with data dashboards
5. ** Education ministries** — school profiles, standardized test results by school

### Discovery Techniques
- Google: `"open data" "[city name]" filetype:json OR filetype:csv`
- Google: `"[city]" "GTFS" OR "General Transit Feed Specification"`
- GitHub search: `[city] opendata` or `[province] opendata`
- Check Wikipedia "[City]" page for official website, then dig deep
- Look at CivicTech Canada or Open Data Institute lists for leads
- Search Archive.org for defunct portals that may have moved

---

## Quality Bar

### ✅ Good Entry
```json
{
  "name": "Guelph Open Data — Building Permits",
  "level": "Municipal",
  "jurisdiction": "Guelph, Ontario",
  "category": "open-data",
  "type": "Dataset",
  "description": "CSV download of all building permits issued 2015-present, geocoded to address with permit type, value, and status. Updated monthly.",
  "url": "https://data.guelph.ca/dataset/building-permits",
  "tags": ["building permits", "construction", "Guelph", "CSV", "geocoded"]
}
```

### ❌ Bad Entry
```json
{
  "name": "City of Guelph",
  "level": "Municipal",
  "jurisdiction": "Guelph, Ontario",
  "category": "government-services",
  "type": "Website",
  "description": "Official website of the City of Guelph",
  "url": "https://guelph.ca",
  "tags": ["Guelph"]
}
```

---

## Anti-Patterns to Avoid

1. **Broad official websites** — No "City of X homepage" entries (municipal, provincial, or federal)
2. **Information-only pages** — Must have downloadable data or API access
3. **Federal duplicates with no unique value** — StatCan and Canada.ca are well-covered; only add federal resources that provide specific datasets or tools
4. **Crown corp retail** — LCBO, SAQ, etc. are already in the list; don't add more
5. **Geocities-quality portals** — If the open data portal hasn't been updated since 2019, skip it
6. **Login-walled resources** — Must be publicly accessible without account creation (unless FOIA response tracker)

---

## Success Metrics

- % of resources that are Municipal or Provincial (target: >60%)
- % of resources with actual data download or API (target: >80%)
- Average "utility score" (subjective: how likely is someone to bookmark this?)
- Geographic coverage: every province represented, every major city, 50+ mid-size cities

---

## Current State (May 2026)

- Total resources: **847**
- Municipal + provincial + regional: **~63%** of catalog (533 / 847)
- Live site: [wra-sol.github.io/awesome-canada](https://wra-sol.github.io/awesome-canada/) — searchable, filterable directory
- Priority categories deepened: `planning-zoning` (22), `council` (33), `lobbyist` (15), `heritage` registers (14), `health-region` (17), `transit` GTFS (52), `weather` (8)
- Provincial lobbyist registries now cover ON, QC, AB, BC, SK, MB, NB, NS, NL, PEI
- Remaining gaps: municipal vendor payment ledgers where cities do not publish them; live URL verification on ArcGIS/`http://` links; more school-board boundary datasets per board

## Updates

- **2026-05-27:** Added `dateAdded` field to all resources. Live directory site deployed to GitHub Pages. Repo cleaned of obsolete server files. Focus remains municipal/provincial actionable data.
- **2026-05-27:** Batches 1–2 added ~150 portal and category-fill resources (`append-batch-sources.js`, `append-batch-sources-2.js`).
- **2026-05-27:** Batch 3 (`append-batch-sources-3.js`) added **85** depth entries — GTFS feeds, lobbyist registries, heritage registers, council eScribe portals, budget datasets, AIC/planning tools — crossing the **>60%** M/P/R target.
- **2026-05-27:** Batch 4 (`append-batch-sources-4.js`) added **36** Ontario gap-fill entries — open data hubs, council CivicWeb portals, school locators, and regional GIS for Sarnia, North Bay, Belleville, Cornwall, Whitby, Woodstock, Orillia, Timmins, Caledon, Sault Ste. Marie, St. Thomas, and Clarington.
- **2026-05-27:** Batch 5 (`append-batch-sources-5.js`) added **26** Quebec and Atlantic entries — Données Québec catalogues (Lévis, Trois-Rivières, Saguenay), Gatineau council/budget depth, Truro/Moncton/CBRM GIS, and provincial Atlantic portals.
