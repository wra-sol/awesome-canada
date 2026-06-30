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
3. **ArcGIS Hub** — many cities host open data here: `https://[city].opendata.arcgis.com/`. NOTE: both `[city].opendata.arcgis.com` AND `data-[city].opendata.arcgis.com` (hyphen prefix) can be unconfigured placeholder hubs that return HTTP 200 on the root page but 401 "GWM_0003 ... Unauthorized" on `/api/search/v1/collections/all/items?limit=1`. Always verify the items API returns 200 before adding. The REAL hub is usually linked from the city's official `/open-data/` page and may use a different subdomain (e.g., Brantford's real hub is `brantfordopendata-brantford.hub.arcgis.com`, not the placeholder `data-brantford.opendata.arcgis.com`).
4. **Socrata/OpenGov** — mid-size cities use these platforms: `https://data.[city].gov/` or similar
5. **CKAN instances** — Canadian cities running CKAN: search "[city] ckan"
6. **Transit agencies** — look for "Developers" or "GTFS" links, not "Rider Info"
7. **Municipal planning department pages** — often have PDF maps but also hidden GIS layers
8. **Questica OpenBook** — budget transparency portals for mid-size cities: `https://[city].openbook.questica.com` or `https://openbook.questica.com/[city]` — check under "Operating Budget" and "Capital Budget" tabs for downloadable CSV exports
9. **CivicLive-hosted city websites** — many Canadian cities use CivicLive (e.g., Charlottetown). Look for `/mayor___council/` or `/finance/` paths for PDF disclosure statements, audited financials, and council minutes
10. **Yellowknife and other Northern cities** — budget documents are often published under `/budget-and-initiatives/` or `/council-meetings-and-agendas/` with direct PDF links, not traditional open data portals
11. **Blanko CMS (Quebec municipal sites)** — many Quebec mid-size cities (e.g., Rimouski, Rouyn-Noranda) use the Blanko CMS platform (`#Blankonumérique` in footer). Budget PDFs are published under predictable paths like `/ville/administration/budget-et-rapports-financiers` or `/ville/vie-democratique/budget-et-rapports-financiers`, and council agendas/minutes under `/ville/vie-democratique/seances-conseil`. Grep the homepage HTML for `href` links containing `budget`, `conseil`, `pdf` to find these pages. Some Blanko cities also link to Données Québec pages (`donneesquebec.ca/organisation/ville-de-[city]/`) and ArcGIS Hub portals (`donnees-ouvertes-[city].opendata.arcgis.com/`) from their "Cartes et données ouvertes" page
12. **AllNetMeetings** — some Manitoba and Saskatchewan cities outsource council agenda/minute hosting to AllNetMeetings (`[city].allnetmeetings.com/pubs/agendaCategories.aspx`). The portal provides searchable agendas, minutes, and attachments for council meetings, committees, and public hearings, with downloadable PDFs and video preview links. If a city's native council page (`/p/council-meetings` or `/city-hall/council-meetings/`) returns 404, check if the city uses AllNetMeetings by searching the homepage HTML for `allnetmeetings.com` or by probing the predictable subdomain directly

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
- **ArcGIS Hub OGC API (newer Hub 2.0 portals):** many cities now run ArcGIS OpenData 2.0, which exposes an OGC-style API. List collection types at `/api/search/v1/collections`, and list actual datasets (with titles + types) at `/api/search/v1/collections/all/items?limit=20` — note it uses `limit`, NOT `rows` (which returns a 400 "invalid queryables" error). Use this to confirm a hub is real (200 on items) vs. an unconfigured placeholder (401 "GWM_0003 ... Unauthorized"). To find SPECIFIC Tier-1 datasets (e.g. building/development permits), add `&q=building%20permits` to the items query and extract the item `id`, then link the dataset landing page at `{base}/datasets/{id}/about`.
- **ArcGIS sharing REST to resolve "Document Link" downloads:** when a hub dataset is typed "Document Link" (e.g. a GTFS feed) the OGC API only returns the item record, not the file URL. Resolve the direct download by querying `https://www.arcgis.com/sharing/rest/content/items/{itemId}?f=json` and reading the `url` field — this yielded the Lethbridge GTFS direct .zip (`gis.lethbridge.ca/.../GTFS_Transit_Data.zip`) which is not indexed by Transitland. Verify the resolved URL returns the expected file (ZIP magic bytes `50 4b 03 04` for .zip) with a ranged HEAD request.
- **DCAT `/data.json` catalog for ArcGIS Hub portals:** when a city's ArcGIS Hub CKAN-style API (`/api/3/action/package_search`) returns a 404 or "Cannot GET" error (e.g., Greater Sudbury's `opendata.greatersudbury.ca`), try the DCAT v1.1 catalog at `/data.json` instead — it returns a JSON array of all datasets with `title`, `landingPage`, `identifier`, and `description` fields. This yielded 177 datasets for Greater Sudbury including building permits, zoning, and budget vote data that were not discoverable via the CKAN API. Parse with `j.dataset` to filter by keyword in the `title` field.
- **Socrata catalog API:** search for datasets on Socrata-powered portals via `https://data.[domain].ca/api/catalog/v1?domains=data.[domain].ca&q=[term]`
- **Transitland** — search `https://www.transit.land/feeds?q=[city]` to find GTFS feed URLs for mid-size transit agencies that don't publicize their feeds directly; each feed page shows the direct GTFS.zip URL and last-fetch timestamp
- **YouTube RSS feed verification** — to confirm a city YouTube channel actually posts council meeting videos (vs promotional content), fetch `https://www.youtube.com/feeds/videos.xml?channel_id=UC...`; the channel ID is extractable from the channel page HTML (`channel/UC[A-Za-z0-9_-]{20,26}`). The RSS feed returns the 15 most recent video titles in XML — council meetings show up as "City Council Meeting | [date]". This avoids adding channels that look official but only contain marketing videos (e.g., Oshawa's channel is promotional only).
- **WordPress REST API** — many mid-size Canadian city sites run WordPress (e.g., Weyburn, Selkirk). Query `https://[city].ca/wp-json/wp/v2/pages?per_page=100&_fields=slug,title,link` to enumerate all page slugs/titles when a JS-rendered site hides subpage links from curl. For agenda/minute posts, also check `/wp-json/wp/v2/categories` and `/wp-json/wp/v2/posts`. If the page sitemap is needed, try `[city].ca/page-sitemap.xml` (WordPress Yoast sitemap) to find exact subpage URLs (e.g., Selkirk's council minutes live at `/city-government/city-council/council-and-committee-minutes/` and link out to a CivicWeb portal at `selkirk.civicweb.net/Portal/`).
- **OnlineReporting .aspx development application trackers** — mid-size cities (e.g., Abbotsford) host live Crystal Reports-style reporting queries at `services.[city].ca/OnlineReporting/*.aspx` for development variance permits, rezoning applications, and subdivision applications. Each report is a separate .aspx URL (e.g., `InstreamDevelopmentApplications.aspx`, `RezoningApplicationsInProgress.aspx`, `SubdivisionApplicationsWithFinalApprovalCurrentYear.aspx`) with real-time application data (address, status, file number) and export to CSV/Excel/PDF. The hub page (e.g., `[city].ca/developmentdata`) links to all available reports — grep its HTML for `Reporting/*.aspx` to enumerate them. This is a high-value planning-zoning source that doesn't show up in open-data catalogues.

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

- Total resources: **944**
- Municipal + provincial + regional: **~65%** of catalog
- Live site: [wra-sol.github.io/awesome-canada](https://wra-sol.github.io/awesome-canada/) — searchable, filterable directory
- Priority categories deepened: `planning-zoning` (58), `council` (63), `lobbyist` (14), `heritage` registers (14), `health-region` (24), `transit` GTFS (57), `weather` (11), `budget` (45), `school-board` (37), `open-data` (152), `environment` (26)
- Provincial lobbyist registries now cover ON, QC, AB, BC, SK, MB, NB, NS, NL, PEI
- **All 4 previously zero-entry Quebec mid-size cities now have entries** — Rouyn-Noranda (ArcGIS Hub open data portal with 19 datasets), Shawinigan (council agendas/minutes PDFs), Repentigny (council + budget PDFs), Rimouski (budget + financial reports PDFs). No jurisdictions remain at zero entries.
- Remaining gaps: municipal vendor payment ledgers (especially MB); live URL verification on ArcGIS/`http://` links; Saskatchewan mid-size city open data portals (note: `[city].opendata.arcgis.com` subdomains for Swift Current/Estevan/North Battleford/Weyburn/Humboldt return 200 on root but 401 "private org id" on the API — they are unconfigured placeholder hubs, NOT real portals — reject them); Ontario municipal council video archives (partially addressed: Kingston, Cambridge, Barrie now have YouTube video archives); mid-size-city open-data portals are now largely covered (Prince George, Grande Prairie, Airdrie, Courtenay, Peterborough, Kamloops, Nanaimo, St Albert, New Westminster, Medicine Hat each already have a single ArcGIS Hub portal entry) — the higher-value gap-fill is now SPECIFIC Tier-1 datasets (building/development permits, zoning, council agendas, budget PDFs) from those cities rather than duplicate portal entries; Greater Sudbury now has building permits + zoning depth entries; Laval now has budget depth entry (was only council); Whitby now has zoning by-law map + ward lookup depth entries (was only GeoHub portal); Brantford ON had zero entries and now has council + budget (its real ArcGIS hub is `brantfordopendata-brantford.hub.arcgis.com`, while `data-brantford.opendata.arcgis.com` is a 401 placeholder — same pattern as the SK placeholders); Rimouski also has a Données Québec page (`donneesquebec.ca/organisation/ville-de-rimouski/`) with GTFS transit data and orthophoto datasets — a future depth entry opportunity; confirmed placeholder hubs (401 on API): Vaughan (`opendata-vaughan.hub.arcgis.com`), Durham (`opendata-durham.hub.arcgis.com`) — both have portal entries but no accessible OGC API; Steinbach now has zoning map + financial plans depth entries (was only council); Thompson now has council agendas/minutes portal (was only budget); Weyburn now has council video archive (was only building permits); Dauphin now has monthly building statistics (was only budget)
- Data quality: 9 duplicate URLs fixed (Halifax, L\u00e9vis, Interior Health, Alberta, S\u00e9paq, Ontario, Edmonton GTFS, Hamilton GTFS) and 1 exact duplicate entry removed (SK Lobbyist); 3 jurisdiction format errors fixed (Steinbach, Portage la Prairie entries)
- New discovery: Questica OpenBook provides budget transparency for mid-size cities (Moose Jaw confirmed); CivicLive-hosted sites (Charlottetown) publish disclosure statements and audited financials as direct PDFs; Northern cities (Yellowknife) publish budget PDFs under `/budget-and-initiatives/` without traditional open data portals; Newfoundland and Labrador cities (St. John's, Corner Brook, Grand Falls-Windsor, Mount Pearl) publish budget and financial statement PDFs under `/budget` or `/publications` paths; St. John's publishes weekly vendor payment vouchers as proactive disclosure; New Brunswick school districts use BusPlanner subdomains (`[district]bp.nbed.nb.ca/Eligibility`) for address-based school eligibility lookups; Lloydminster publishes monthly accounts payable PDFs as vendor payment ledgers; Alberta ACIS provides 535-station weather data viewer with CSV downloads; Ontario PWQMN provides provincial stream water quality monitoring data with CSV downloads; Saskatchewan Air Quality Monitoring Network on GeoHub provides province-wide validated air quality data with CSV downloads (first SK environmental monitoring dataset); UVic PCIC BC Meteorological Station Data Portal provides 100+ weather stations with CSV/NetCDF/Excel downloads (first BC weather station network with bulk data access); environment-saskatchewan.hub.arcgis.com is the primary portal for SK Ministry of Environment data (air quality, water, solid waste datasets); Abbotsford hosts live Crystal Reports-style development application trackers at `services.abbotsford.ca/OnlineReporting/*.aspx` (development variance permits, rezonings, subdivisions — export to CSV/Excel/PDF, not in any open-data catalogue); Selkirk (MB) uses a CivicWeb portal (`selkirk.civicweb.net/Portal/`) for council agendas/minutes and publishes audited financial statements + financial plans as direct PDFs
- Jurisdiction taxonomy updated: added `Moose Jaw` (Saskatchewan), `Charlottetown` (Atlantic), and `Lloydminster` (Saskatchewan/Alberta) to `scripts/categories.js`

## Updates

- **2026-06-30:** Added **5** gap-fill entries for Manitoba and Saskatchewan mid-size cities that previously had only 1 entry each. Steinbach — Property & Development Info Map (Zoning) (first Steinbach planning-zoning depth entry; ArcGIS Experience interactive map for address/parcel-based zoning lookup), Steinbach — Annual Financial Plans & Statements (first Steinbach budget entry; direct PDF downloads of audited financial statements and signed financial plans 2018–2026), Thompson — Council Agendas & Minutes (AllNetMeetings) (first Thompson council entry; searchable portal with 1,200+ meetings, downloadable PDF agendas/minutes, and video previews), Weyburn — Council Meeting Video Archive (first Weyburn council entry; YouTube archive of regular and special council meeting videos 2023–present, verified via RSS), and Dauphin — Monthly Building Statistics (first Dauphin planning-zoning entry; monthly PDF downloads of building permit statistics by type, value, and month). New discovery technique documented: AllNetMeetings (`[city].allnetmeetings.com/pubs/agendaCategories.aspx`) — a council meeting management platform used by some MB/SK cities that provides searchable agendas, minutes, and attachments with downloadable PDFs; if a city's native council page returns 404, probe for AllNetMeetings by checking the homepage HTML for `allnetmeetings.com` links or by testing the predictable subdomain directly. Also noted: some cities embed ArcGIS Experience apps directly on city website pages for zoning/property lookup (e.g., Steinbach `/zoning-map/`), separate from ArcGIS Hub portals. Verified all URLs return 200 with actual downloadable content. Total now 944 resources. Validation passes.

- **2026-06-29:** Added **5** Tier-1 depth entries for mid-size cities that previously had only a single open-data portal entry. Greater Sudbury Open Data — Building Permits (first Sudbury planning-zoning depth entry; Accela permit system data downloadable as CSV/GeoJSON/Shapefile + ArcGIS REST API; found via DCAT `/data.json` catalog after CKAN API returned 404), Greater Sudbury Open Data — Zoning (zoning/community/township/parcel boundaries; CSV/GeoJSON/Shapefile + REST API; same DCAT discovery), Laval Budget & Financial Reports (first Laval budget entry — QC's 3rd-largest city ~440k pop had only a council entry; budget PDFs 2020–2026, capital investment programs, consolidated financial reports 2019–2024, councillor remuneration disclosures, credit rating reports), Whitby Zoning By-law Interactive Map (first Whitby planning-zoning depth entry; ArcGIS instant sidebar app for address-based zoning by-law lookup), and Whitby Find Your Ward (first Whitby council depth entry; address-based ward and councillor lookup tool). New discovery technique documented: DCAT `/data.json` catalog for ArcGIS Hub portals — when the CKAN API returns 404, the DCAT v1.1 catalog at `/data.json` returns all datasets with titles and landing pages (yielded 177 datasets for Greater Sudbury). Confirmed placeholder hubs (401 on OGC API): Vaughan (`opendata-vaughan.hub.arcgis.com`), Durham (`opendata-durham.hub.arcgis.com`) — both already have portal entries but no accessible API for depth discovery. Total now 939 resources. Validation passes.

- **2026-06-28:** Added **5** entries — Rouyn-Noranda Open Data Portal (ArcGIS Hub) (first Rouyn-Noranda entry; 19 CC-BY-4.0 Feature Service datasets including zoning plan, property assessment units, building footprints, transit stops/routes, road network, bike network, hydrography, electoral districts, water protection areas — verified via OGC API `/api/search/v1/collections/all/items?limit=20` returning 200 with all 19 items), Shawinigan Council Agendas & Minutes (first Shawinigan entry; direct PDF downloads of ordre du jour and procès-verbaux for all regular/special council meetings — found via WordPress page-sitemap.xml after the REST API returned 401), Repentigny Council Agendas & Minutes (first Repentigny council entry; direct PDF downloads from Drupal site), Repentigny Budget & Finance (first Repentigny budget entry; annual budget PDFs 2015–2026), and Rimouski Budget & Financial Reports (first Rimouski entry; budget PDFs 2022–2026 + audited financial reports + salary/expense disclosure + public contracts list + PQI capital plan). This run eliminated ALL 4 remaining zero-entry jurisdictions — Rouyn-Noranda, Shawinigan, Repentigny, Rimouski — which were all Quebec mid-size cities. New discovery: Blanko CMS (Quebec-based municipal web platform used by both Rimouski and Rouyn-Noranda) publishes budget and council PDFs under predictable paths (`/ville/administration/budget-et-rapports-financiers` and `/ville/vie-democratique/seances-conseil` or `/ville/vie-democratique/budget-et-rapports-financiers`); Shawinigan uses WordPress but the REST API returned 401 "MISSING_AUTHORIZATION_HEADER" — fallback to Yoast page-sitemap.xml (`/page-sitemap.xml`) successfully enumerated all page slugs including `/ville/conseil-municipal/seances-du-conseil/`; Rouyn-Noranda also has a Données Québec page (`donneesquebec.ca/organisation/ville-de-rouyn-noranda/`) in addition to its ArcGIS Hub. Total now 934 resources. Validation passes.

- **2026-06-27:** Added **5** entries — Abbotsford Development Data — Development Application Tracker (first Abbotsford planning-zoning depth entry; live Crystal Reports-style `.aspx` reporting queries for development variance permits, rezoning, and subdivision applications with CSV/Excel/PDF export — not in any open-data catalogue), Abbotsford Council — Agendas, Minutes & Video (first Abbotsford council entry; eScribe + CivicWeb + live stream), Burnaby Council — eScribe Agendas, Minutes & Video (first Burnaby council entry; eScribe portal + city livestream video + Heritage Burnaby historical minutes archive), Selkirk Council & Committee Minutes (CivicWeb) (first Selkirk entry; Manitoba city at zero entries — found via WordPress page-sitemap.xml), and Selkirk Financial Plan & Audited Statements (first Selkirk budget entry; 11 direct PDFs — audited statements 2020–2024 + financial plans 2024–2026). Rejected Burnaby's `@TheCityofBurnaby` YouTube channel via RSS verification (promotional/interview content only — no council meetings; Burnaby's video recordings are on the city's own livestream system at `video.isilive.ca/burnaby`, not YouTube). New discovery techniques documented: WordPress Yoast `page-sitemap.xml` to find exact subpage URLs on JS-rendered WordPress city sites; `OnlineReporting/*.aspx` Crystal Reports-style development application trackers hosted at `services.[city].ca` (grep the hub page HTML for `Reporting/*.aspx` to enumerate reports). Selkirk reduced the zero-entry jurisdiction list from 5 to 4 (remaining: Shawinigan, Rimouski, Repentigny, Rouyn-Noranda — all QC mid-size cities). Total now 929 resources. Validation passes.

- **2026-06-26:** Added **5** entries — Lethbridge Transit GTFS (direct .zip on the City GIS server, resolved via ArcGIS sharing REST `url` field; not indexed by Transitland — first Lethbridge transit entry and first Lethbridge entry beyond the existing portal), St. Albert Open Data — Weekly Development Permit Decisions (weekly-updated planning-zoning Feature Service; first St. Albert depth entry beyond its portal), New Westminster Open Data — Building & Plumbing Permits (Feature Service; first New West depth entry beyond its portal), Brantford Council Agendas and Minutes (downloadable PDF agendas for Council/Committee of the Whole/Committee of Adjustment; first Brantford entry — Brantford had zero), and Brantford Budget and Finance (2024-2026 operating/capital budget PDFs). Pivoted from portal entries to SPECIFIC Tier-1 datasets after discovering (via the JSON parser) that Medicine Hat, St Albert, and New Westminster already had portal entries that an earlier text search had falsely reported as missing — caught 3 would-be duplicate URLs via `node scripts/validate.js` and removed them. Confirmed `data-brantford.opendata.arcgis.com` is a 401 placeholder hub (rejected); Brantford's real hub is `brantfordopendata-brantford.hub.arcgis.com`. Rejected Nanaimo's `CityOfNanaimo` YouTube channel via RSS verification (promotional/tourism videos only, no council meetings). New discovery techniques documented: ArcGIS Hub OGC API (`/api/search/v1/collections/all/items?limit=20`, uses `limit` not `rows`) to confirm real vs. placeholder hubs and find specific datasets; ArcGIS sharing REST (`/sharing/rest/content/items/{id}?f=json`) to resolve "Document Link" downloads to direct file URLs. Total now 924 resources. Validation passes.

- **2026-06-25:** Added **5** gap-fill entries — Brandon Council Agendas and Minutes (downloadable PDF agendas/minutes for Manitoba's 2nd-largest city, distinct from the existing council overview page), Brandon Budget and Finance (2026 approved budget + audited financial statements), Weyburn Building Permit Reports (first Weyburn entry; monthly building permit reports 2021–2026 + annual reports back to 2018), Cambridge Council Meeting Video Archive (first Cambridge entry; YouTube council/planning meeting videos), and Barrie Council Meeting Video Archive (YouTube council & committee meeting videos, complementing existing eScribe agendas entry). Updated `scripts/categories.js` to add `Weyburn` (Saskatchewan) jurisdiction. New discovery techniques added: YouTube RSS feed verification (`/feeds/videos.xml?channel_id=`) to distinguish real council video archives from promotional channels (rejected Oshawa — promotional only); WordPress REST API (`/wp-json/wp/v2/pages`) to enumerate page slugs on JS-rendered city sites (Weyburn uses WordPress). Confirmed that `[city].opendata.arcgis.com` subdomains for SK mid-size cities (Swift Current, Estevan, North Battleford, Weyburn, Humboldt) are unconfigured placeholder hubs (401 on API) — not real open data portals. Caught a duplicate (Brandon Compensation Disclosure URL already existed with trailing slash) via validation. Total now 919 resources. Validation passes.

- **2026-06-20:** Added **2** gap-fill entries — Saskatchewan Air Quality Monitoring Network on GeoHub (first SK provincial air quality monitoring dataset with CSV downloads; Ministry of Environment operates province-wide station network covering Swift Current, Estevan, Prince Albert, Buffalo Narrows); UVic PCIC BC Meteorological Station Data Portal (first BC weather station network with bulk CSV/NetCDF/Excel downloads; 100+ stations with interactive map filter by date, variable, agency). Also fixed 3 pre-existing validation errors (jurisdiction format for Steinbach and Portage la Prairie entries from June 19). Total now 908 resources. Validation passes.

- **2026-06-19:** Added **4** gap-fill entries — Steinbach Council Minutes & Videos (first Manitoba municipal council minutes archive with PDF minutes and video recordings), Portage la Prairie Council Agendas & Minutes (second Manitoba municipal council entries), Portage la Prairie Finance Reports & Plans (budget speeches, financial plans, audited statements, and public sector compensation disclosures as PDFs), and Manitoba Ag Weather Station Network KML download (first MB provincial weather station network beyond federal AQHI; 120+ stations with 15-minute interval data). Updated `scripts/categories.js` to add `Steinbach`, `Portage la Prairie`, and `Selkirk` jurisdictions.

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
