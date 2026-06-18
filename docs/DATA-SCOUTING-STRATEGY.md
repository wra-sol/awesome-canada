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
8. **Questica OpenBook** — budget transparency portals for mid-size cities: `https://[city].openbook.questica.com` or `https://openbook.questica.com/[city]` — check under "Operating Budget" and "Capital Budget" tabs for downloadable CSV exports
9. **CivicLive-hosted city websites** — many Canadian cities use CivicLive (e.g., Charlottetown). Look for `/mayor___council/` or `/finance/` paths for PDF disclosure statements, audited financials, and council minutes
10. **Yellowknife and other Northern cities** — budget documents are often published under `/budget-and-initiatives/` or `/council-meetings-and-agendas/` with direct PDF links, not traditional open data portals

### Provincial
1. ** Provincial open data portals** — but look past the homepage for bulk download/API sections
2. ** Provincial geospatial services** — WMS/WFS endpoints, GeoJSON services
3. ** Election agencies** — candidate finance disclosures, polling division maps
4. ** Health authorities** — regional health unit websites with data dashboards
5. ** Education ministries** — school profiles, standardized test results by school
6. **School board division websites** — catchment-area PDFs, boundary maps (e.g., Hanover School Division)
7. ** Provincial geospatial hubs** — Data MB, GeoNB, and similar provincial geoviewers that may expose datasets not always listed in the main open-data catalogue
8. **BusPlanner-hosted school eligibility lookups** — Many Canadian school districts (especially New Brunswick) use BusPlanner subdomains at `[district]bp.nbed.nb.ca/Eligibility` for address-based school attendance and bus eligibility lookups. Look for patterns like `asdwbp`, `asdnbp`, `asdsbp`, `dsfsbp`

### Discovery Techniques
- Google: `"open data" "[city name]" filetype:json OR filetype:csv`
- Google: `"[city]" "GTFS" OR "General Transit Feed Specification"`
- GitHub search: `[city] opendata` or `[province] opendata`
- Check Wikipedia "[City]" page for official website, then dig deep
- Look at CivicTech Canada or Open Data Institute lists for leads
- Search Archive.org for defunct portals that may have moved
- **ArcGIS Hub API:** verify dataset availability on ArcGIS Hub portals via `/api/search/v1` or `/api/v3/datasets` endpoints
- **Socrata catalog API:** search for datasets on Socrata-powered portals via `https://data.[domain].ca/api/catalog/v1?domains=data.[domain].ca&q=[term]`

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

## Current State (June 2026)

- Total resources: **902**
- Municipal + provincial + regional: **~66%** of catalog (587 / 902)
- Live site: [wra-sol.github.io/awesome-canada](https://wra-sol.github.io/awesome-canada/) — searchable, filterable directory
- Priority categories deepened: `planning-zoning` (48), `council` (48), `lobbyist` (14), `heritage` registers (14), `health-region` (24), `transit` GTFS (52), `weather` (9), `budget` (37), `school-board` (37), `open-data` (152), `environment` (25)
- Provincial lobbyist registries now cover ON, QC, AB, BC, SK, MB, NB, NS, NL, PEI
- Remaining gaps: municipal vendor payment ledgers (especially MB); live URL verification on ArcGIS/`http://` links; Saskatchewan mid-size city open data portals; Manitoba municipal council agendas/minutes; more provincial weather station networks (beyond federal AQHI)
- Data quality: 9 duplicate URLs fixed (Halifax, L\u00e9vis, Interior Health, Alberta, S\u00e9paq, Ontario, Edmonton GTFS, Hamilton GTFS) and 1 exact duplicate entry removed (SK Lobbyist)
- New discovery: Questica OpenBook provides budget transparency for mid-size cities (Moose Jaw confirmed); CivicLive-hosted sites (Charlottetown) publish disclosure statements and audited financials as direct PDFs; Northern cities (Yellowknife) publish budget PDFs under `/budget-and-initiatives/` without traditional open data portals; Newfoundland and Labrador cities (St. John's, Corner Brook, Grand Falls-Windsor, Mount Pearl) publish budget and financial statement PDFs under `/budget` or `/publications` paths; St. John's publishes weekly vendor payment vouchers as proactive disclosure; New Brunswick school districts use BusPlanner subdomains (`[district]bp.nbed.nb.ca/Eligibility`) for address-based school eligibility lookups; Lloydminster publishes monthly accounts payable PDFs as vendor payment ledgers; Alberta ACIS provides 535-station weather data viewer with CSV downloads (first provincial weather station network beyond federal AQHI); Ontario PWQMN provides provincial stream water quality monitoring data with CSV downloads via the Ontario Data Catalogue
- Jurisdiction taxonomy updated: added `Moose Jaw` (Saskatchewan), `Charlottetown` (Atlantic), and `Lloydminster` (Saskatchewan/Alberta) to `scripts/categories.js`

## Updates

- **2026-06-18:** Added **2** gap-fill entries — Alberta Climate Information Service (ACIS) weather station data viewer with 535 stations and CSV downloads (first provincial weather monitoring data; weather category was all federal), and Ontario Provincial Stream Water Quality Monitoring Network (PWQMN) with CSV data for streams across Ontario (first ON water quality monitoring dataset in environment category).

- **2026-06-16:** Added **5** gap-fill entries — Anglophone North, Anglophone South, Anglophone West, and Francophone Sud School District “Which School Do I Attend?” interactive lookups (completing the NB district-level school locator coverage), and Lloydminster Accounts Payable Reports (first SK/AB municipal vendor payment ledger). Updated `scripts/categories.js` to add `Lloydminster` jurisdiction.

- **2026-06-10:** Added **5** gap-fill entries — Moose Jaw Open Budget (first Saskatchewan budget transparency tool via Questica OpenBook), Charlottetown Council Member Disclosure Statements (first PEI municipal disclosure PDFs), Charlottetown Audited Financial Statements (first PEI municipal audited financials), Charlottetown Council Resolutions and Approved Minutes (first PEI municipal council minutes), and Yellowknife Past and Present Budgets (first NWT municipal budget PDFs). Updated `scripts/categories.js` to add `Moose Jaw` and `Charlottetown` jurisdictions.

- **2026-06-03:** Added **5** gap-fill entries — Hanover School Division Catchment Maps (first rural Manitoba school-board boundary PDFs), Manitoba Data MB geospatial open data portal (first provincial geospatial portal for MB), Newfoundland and Labrador Municipalities and Local Service Districts (first NL municipal boundary dataset), Newfoundland and Labrador Provincial Electoral Districts 2015 (first NL electoral boundary dataset), and New Brunswick GeoNB Map Viewer (first NB interactive provincial geospatial viewer). Push to origin/master blocked by expired GitHub token.

- **2026-06-02:** Added **5** gap-fill entries — Prince Edward Island School Zoning and Transportation Portal (first PEI school-board interactive lookup), Nova Scotia School Board Zones in English and French (first province-wide NS school-board boundary datasets), Newfoundland and Labrador Health Regions (first NL health-region spatial dataset), and Winnipeg Council Member Expenses (Manitoba budget transparency).

- **2026-06-01:** Added **5** gap-fill entries — Québec school board and service centre territories (first province-wide Quebec school-board dataset), Halifax Regional Centre for Education School Finder (first Halifax school-board entry), Calgary Board of Education Find a School (address-based lookup distinct from existing directory), Fredericton Zoning By-law Dataset (first Fredericton planning-zoning entry), and Saint John Zoning Dataset (second Saint John planning entry, deepening Atlantic zoning coverage).

- **2026-05-31:** Added **5** gap-fill entries — Pembina Trails and Louis Riel school locators (Manitoba school-board depth), Sherbrooke buildings dataset (first Sherbrooke open-data entry), Longueuil industrial zones (first Longueuil planning-zoning entry), and PEI Estimates of Expenditure (first PEI budget dataset). Also resolved 9 pre-existing duplicate URLs and removed 1 exact duplicate.

- **2026-05-30:** Added **5** gap-fill entries — Newfoundland and Labrador food premises inspection reports, New Brunswick food premises inspections (closing the Atlantic health-inspection gap), Regina Public Schools and Regina Catholic Schools school finders (first SK school-board locators), and Winnipeg School Division Find a School (first MB school-board locator).

- **2026-05-27:** Added `dateAdded` field to all resources. Live directory site deployed to GitHub Pages. Repo cleaned of obsolete server files. Focus remains municipal/provincial actionable data.
- **2026-05-27:** Batches 1–2 added ~150 portal and category-fill resources (`append-batch-sources.js`, `append-batch-sources-2.js`).
- **2026-05-27:** Batch 3 (`append-batch-sources-3.js`) added **85** depth entries — GTFS feeds, lobbyist registries, heritage registers, council eScribe portals, budget datasets, AIC/planning tools — crossing the **>60%** M/P/R target.
- **2026-05-27:** Batch 4 (`append-batch-sources-4.js`) added **36** Ontario gap-fill entries — open data hubs, council CivicWeb portals, school locators, and regional GIS for Sarnia, North Bay, Belleville, Cornwall, Whitby, Woodstock, Orillia, Timmins, Caledon, Sault Ste. Marie, St. Thomas, and Clarington.
- **2026-05-27:** Batch 5 (`append-batch-sources-5.js`) added **26** Quebec and Atlantic entries — Données Québec catalogues (Lévis, Trois-Rivières, Saguenay), Gatineau council/budget depth, Truro/Moncton/CBRM GIS, and provincial Atlantic portals.
- **2026-05-28:** Added **5** gap-fill entries — Winnipeg Open Budget and Capital Projects Explorer (first Manitoba budget tools), Red Deer building permits and zoning datasets (depth on mid-size Alberta city), and Halton Catholic District School Board School Finder (school-board boundary map for Halton Region).
- **2026-05-29:** Added **5** entries — Saskatchewan Inspection InSite (provincial health inspection search), Saint John building permits dataset (Atlantic planning depth), Saskatoon non-standard procurement dataset (prairie budget transparency), Edmonton Catholic School District School Finder (school-board boundary map), and Nova Scotia food establishment inspection reports (provincial health-region gap-fill).
