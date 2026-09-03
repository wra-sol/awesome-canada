# Awesome Canada 🇨🇦

> A curated list of official Canadian government digital tools, portals, open data, maps, calculators, and public-interest resources.

[![Validate](https://github.com/wra-sol/awesome-canada/actions/workflows/validate.yml/badge.svg)](https://github.com/wra-sol/awesome-canada/actions/workflows/validate.yml)
[![Deployed on Cloudflare Pages](https://img.shields.io/badge/Deploys-Cloudflare%20Pages-F38020?logo=cloudflarepages&logoColor=white)](https://awesome-canada.ca/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-green.svg)](CONTRIBUTING.md)

**Quick stats:** 1911 resources · 35 categories · covering Federal, Provincial, Territorial, Regional and Municipal governments.

---

## About

This list is organized by **function first, then region**. Find the kind of resource you need (taxes, health, parks, justice, etc.), then drill down to the government level and jurisdiction that applies to you. Every entry links directly to an official government or public-interest source.

The list is generated from [`data/resources.json`](data/resources.json) — the JSON file is the source of truth. Do not edit the tables in this README by hand; add/fix entries in the JSON and re-run `node scripts/generate-readme.js`.

- New resources: see [CONTRIBUTING.md](CONTRIBUTING.md)
- Schema and categories: [`scripts/categories.js`](scripts/categories.js)
- Maintenance runs on a Cloudflare Worker (`worker/`) — nightly link cleaning at 04:00 UTC, research PRs at 05:00 UTC

---

## Table of Contents

- [📊 Open Data & Statistics](#open-data-and-statistics) — 217
- [🏗️ Planning, Zoning & Development](#planning-zoning-and-development) — 98
- [🏛️ Council, Democracy & Transparency](#council-democracy-and-transparency) — 134
- [💳 Budget, Finance & Procurement](#budget-finance-and-procurement) — 119
- [🪪 Government Services & ID](#government-services-and-id) — 45
- [💰 Taxes & Revenue](#taxes-and-revenue) — 29
- [🏦 Finance, Banking & Economy](#finance-banking-and-economy) — 38
- [🏢 Business & Procurement](#business-and-procurement) — 51
- [💼 Employment & Labour](#employment-and-labour) — 39
- [🎓 Education & Student Aid](#education-and-student-aid) — 26
- [🎒 Schools, Education & Boards](#schools-education-and-boards) — 47
- [🛂 Immigration & Citizenship](#immigration-and-citizenship) — 29
- [🩺 Health & Wellness](#health-and-wellness) — 61
- [🏥 Health Regions & Local Health](#health-regions-and-local-health) — 34
- [🤝 Benefits & Social Services](#benefits-and-social-services) — 30
- [🏠 Housing & Real Estate](#housing-and-real-estate) — 37
- [🛣️ Transportation & Roads](#transportation-and-roads) — 43
- [🚌 Transit & Mobility](#transit-and-mobility) — 59
- [✈️ Aviation, Marine & Rail](#aviation-marine-and-rail) — 42
- [🌲 Parks, Trails & Outdoors](#parks-trails-and-outdoors) — 71
- [🌍 Environment, Climate & Monitoring](#environment-climate-and-monitoring) — 84
- [🌦️ Weather & Climate](#weather-and-climate) — 25
- [⚡ Energy & Utilities](#energy-and-utilities) — 45
- [🌾 Agriculture, Food & Drink](#agriculture-food-and-drink) — 35
- [🔬 Science, Research & Space](#science-research-and-space) — 61
- [🎭 Heritage, Culture & Arts](#heritage-culture-and-arts) — 52
- [🖼️ Heritage Registers & Public Art](#heritage-registers-and-public-art) — 45
- [📋 Lobbyists, Ethics & Disclosure](#lobbyists-ethics-and-disclosure) — 18
- [🚨 Emergency, Safety & Alerts](#emergency-safety-and-alerts) — 61
- [⚖️ Justice, Courts & Legal](#justice-courts-and-legal) — 58
- [🛡️ Consumer Protection & Privacy](#consumer-protection-and-privacy) — 37
- [🪶 Indigenous Services & Treaties](#indigenous-services-and-treaties) — 26
- [🎖️ Veterans & Military](#veterans-and-military) — 14
- [🗳️ Elections & Democracy](#elections-and-democracy) — 78
- [📡 Telecommunications & Digital](#telecommunications-and-digital) — 23

---

## 📊 Open Data & Statistics

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Canadian Database of Geochemical Surveys (CDoGS) | Canada · Federal | Survey database | Catalogue of 1,600+ regional geochemical surveys across Canada with standardized raw analytical data downloads as spreadsheets, KML maps and WMS, plus element search. | https://geochem.nrcan.gc.ca/cdogs/content/main/home_en.htm |
| Canadian Geographical Names Database Search | Canada · Federal | Lookup tool | Query nearly 350,000 official Canadian place names by name, coordinates or area, with API access and downloadable datasets, maintained by NRCan. | https://geonames.nrcan.gc.ca/search-place-names/search |
| Canadian Heritage — Grants and Contributions Search | Canada · Federal | Funding database | Search 138,000+ Canadian Heritage grant/contribution agreements by recipient, program, value, year and province; whole dataset also downloadable as CSV. | https://search.open.canada.ca/grants?owner_org=pch |
| Census Program | Canada · Federal | Census portal | Census profiles, maps, and reference materials | https://www12.statcan.gc.ca/census-recensement/index-eng.cfm |
| EODMS — Earth Observation Data Management System | Canada · Federal | Imagery search | Search and order from NRCan's archive of satellite imagery and the National Air Photo Library — over 3 million historical aerial photos of Canada dating to the 1920s, with footprints on a map. | https://eodms-sgdot.nrcan-rncan.gc.ca/index-en.html |
| GC API Store | Canada · Federal | API catalogue | Discover and try Government of Canada APIs in one catalogue, with documentation and self-serve access for building apps on government data and services. | https://api.canada.ca/en/homepage |
| GEO.ca | Canada · Federal | Geospatial portal | Canada's federal geospatial data portal, providing open access to authoritative geospatial information, maps, and datasets from federal sources. | https://geo.ca/ |
| Government of Canada — Grants and Contributions Search | Canada · Federal | Funding database | Search federal grants and contributions by recipient, department, program, location, value, date and agreement type across more than one million records. | https://search.open.canada.ca/grants/ |
| Government of Canada — Open Government Portal | Canada · Federal | Open data portal | Search 40,000+ federal datasets, reports, and geospatial layers with API access | https://search.open.canada.ca/opendata/ |
| Housing, Infrastructure and Communities Canada — Housing and Infrastructure Project Map | Canada · Federal | Interactive map | Browse federally funded housing and infrastructure projects by location, program, category, status and contribution value; download the map data. | https://housing-infrastructure.canada.ca/gmap-gcarte/index-eng.html |
| Infrastructure Canada — Approved Projects Dataset | Canada · Federal | Open data | Downloadable register of infrastructure projects approved by Infrastructure Canada/Housing, Infrastructure and Communities Canada, with funding, location and status fields; weekly-updated CSV, XLSX and JSON. | https://open.canada.ca/data/en/dataset/beee0771-dab9-4be8-9b80-f8e8b3fdfd9d |
| ISED — Federal Corporations Dataset | Canada · Federal | Corporate registry dataset | Download active and inactive federal corporation records, including businesses and nonprofits, as regularly updated CSV files. | https://open.canada.ca/data/en/dataset/0032ce54-c5dd-4b66-99a0-320a7b5e99f2 |
| ISED API Catalogue | Canada · Federal | API catalogue | Catalogue of APIs published by Innovation, Science and Economic Development Canada, including corporations, patents, and business data. | https://api.ised-isde.canada.ca/en |
| National Capital Commission — NCC Hub Open Data | Canada · Federal | Open data | NCC's official ArcGIS Hub (21 datasets): download CSV, GeoJSON, KML or query REST/WFS APIs for Rideau Canal Skateway ice conditions, Greenbelt land-use designations, NCR boundaries. | https://ncc-hub-ncc-ccn.hub.arcgis.com/ |
| National Defence — Open Data Datasets | Canada · Federal | Open data collection | Browse and download National Defence datasets on the Open Government portal — personnel statistics, pay scales, performance indicators, and more, many in CSV. | https://open.canada.ca/data/en/organization/dnd-mdn |
| NRC Digital Repository | Canada · Federal | Research data repository | National Research Council's persistent archive of research datasets, corporate publications back to 1954, and special collections, searchable and openly accessible. | https://nrc-digital-repository.canada.ca/eng/list/collections/ |
| NRCan Elevation API | Canada · Federal | Data API | Get the elevation of any Canadian coordinate or an elevation profile along a line, from the Canadian Digital Elevation Model and Digital Surface Model — JSON/GeoJSON or GML output. | https://natural-resources.canada.ca/science-data/data-analysis/geospatial-data-tools-services/elevation-api |
| NRCan Geolocator API | Canada · Federal | Geocoding API | Geocode Canadian place names, street addresses and intersections, postal-code prefixes and NTS mapsheet references in English or French — CORS-enabled, free for public and research use. | https://natural-resources.canada.ca/maps-tools-publications/satellite-elevation-air-photos/geolocation-service |
| Open Government — Briefing Note Titles Search | Canada · Federal | Search tool | Search titles and reference numbers of briefing notes sent to federal ministers and deputy heads since 2019 — then file an ATI request for any of interest. | https://search.open.canada.ca/briefing_titles/ |
| Open Government — Completed Access to Information Requests Search | Canada · Federal | Search tool | Search summaries of completed ATI requests across federal institutions since 2020 and informally request a free copy of any released records package. | https://open.canada.ca/en/access-to-information |
| Open Government — Open Resource Exchange | Canada · Federal | Code catalogue | Search open source code, software, and standards used or developed by Canadian federal, provincial, and municipal governments, with links to each project's repository. | https://code.open.canada.ca/en/index.html |
| Open Government — Portal Analytics Dashboard | Canada · Federal | Analytics dashboard | Explore monthly statistics on open.canada.ca usage — portal visits by region, top 25 downloaded datasets, and dataset growth since 2013. | https://open.canada.ca/en/content/open-government-analytics |
| Open Government of Canada — CKAN Action API | Canada · Federal | Catalogue API | Programmatically search, filter and download metadata for 47,000+ federal datasets on open.canada.ca via the CKAN Action API — package_search, datastore_search and more, GET-only, no key required. | https://open.canada.ca/data/en/api/3/action/package_search |
| Open Government Portal | Canada · Federal | Open data portal | Main federal portal for datasets, information, and downloadable public resources | https://open.canada.ca/ |
| Open Maps | Canada · Federal | Geospatial portal | Federal map and geospatial data discovery portal | https://open.canada.ca/en/open-maps/ |
| Open North | Canada · Federal | Civic tech nonprofit | Canadian nonprofit building open data standards and civic technology tools to help governments and communities share information and engage citizens | https://opennorth.ca/ |
| Proactive Publication of Government Contracts | Canada · Federal | Transparency | Search federal contracts over $10,000 disclosed quarterly by every department | https://search.open.canada.ca/contracts |
| Project Browser — Global Affairs Canada | Canada · Federal | Data portal | Browse and search Government of Canada international development and humanitarian assistance projects around the world. | https://w05.international.gc.ca/projectbrowser-banqueprojets/ |
| Statistics Canada | Canada · Federal | Data portal | One of the strongest public data sites in Canada; census, tables, visuals, releases | https://www.statcan.gc.ca/ |
| Statistics Canada — Census Profile | Canada · Federal | Census search | Search detailed population, demographic, and housing profiles by postal code, city, or region | https://www12.statcan.gc.ca/census-recensement/2021/dp-pd/prof/index.cfm |
| Statistics Canada — Consumer Price Index Portal | Canada · Federal | Inflation data | Monthly CPI releases, inflation calculators, and interactive charts by component and province | https://www.statcan.gc.ca/en/subjects-start/prices_and_price_indexes/consumer_price_indexes |
| Statistics Canada — Data Visualization Gallery | Canada · Federal | Data visualizations | Interactive dashboards, data explorers, and visual summaries across economy, society, and environment | https://www150.statcan.gc.ca/n1/pub/71-607-x/71-607-x2020016-eng.htm |
| Statistics Canada — GeoSearch | Canada · Federal | Interactive map | Find any place in Canada by name, postal code, address or geographic code and get its census geography boundaries and basic demographic data on an interactive map. | https://www12.statcan.gc.ca/census-recensement/2021/geo/maps-cartes/geosearch-georecherche/index-eng.cfm |
| Statistics Canada — Police-reported Hate Crime | Canada · Federal | Statistics table | Explore police-reported hate-crime incidents and rates by province, territory, census metropolitan area and military police; download CSV or SDMX. | https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3510019101 |
| Statistics Canada — The Daily | Canada · Federal | News/data feed | Daily releases of new statistics, economic indicators, and analytical reports from StatCan | https://www150.statcan.gc.ca/n1/dai-quo/index-eng.htm |
| Statistics Canada — Web Data Service (WDS) API | Canada · Federal | API | REST API for accessing StatCan tables, metadata, and bulk downloads programmatically | https://www.statcan.gc.ca/en/developers/wds |
| Statistics Canada Developers | Canada · Federal | Developer/data access | APIs and structured access for developers and researchers | https://www.statcan.gc.ca/en/developers |
| TBS — GC Service Inventory Dataset | Canada · Federal | Open dataset | Download CSVs listing every service federal departments deliver — volumes, online availability, service standards, and performance results from 2018 onward. | https://open.canada.ca/data/en/dataset/3ac0d080-6149-499a-8b06-7ce5f00ec56c |
| Toporama — Atlas of Canada | Canada · Federal | Interactive map | Dynamic topographic map viewer covering all of Canada with toggleable layers (contours, hydrography, transportation), distance measurement, water flow tracing, and free data downloads. | https://atlas.gc.ca/toporama/en/index.html |
| Canadian Urban Transit Association — Stats Dashboard | Canada · Agency | Transit data | National ridership, fare, and service data for Canadian transit systems | https://cutaactu.ca/reports-resources/statistics/ |

### British Columbia

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| B.C. API Gateway | British Columbia · Provincial | API portal | British Columbia government API gateway for discovering, accessing, and managing provincial APIs and data services | https://api.gov.bc.ca/ |
| BC Data Catalogue — CKAN API | British Columbia · Provincial | Catalogue API | Search and download datasets from British Columbia's open-data catalogue programmatically via its CKAN Action API — package_search, datastore_search and resource lookups, no key required. | https://catalogue.data.gov.bc.ca/api/3/action/package_search |
| BC Energy Regulator — Data Centre | British Columbia · Provincial | Open data portal | Download 131 regulator datasets on wells, pipelines, facilities and liabilities: Well Index and Rig Activity CSVs, daily shapefile/KML/geodatabase zips, FracFocus disclosures. | https://www.bc-er.ca/data-reports/data-centre/ |
| British Columbia — BC Address Geocoder API | British Columbia · Provincial | REST API | Standardize, validate, and geocode any B.C. address in real time via a free REST API — includes reverse geocoding, intersections, and parcel lookups. | https://www2.gov.bc.ca/gov/content/data/geographic-data-services/location-services/geocoder |
| DataBC | British Columbia · Provincial | Open data portal | Major open data and geospatial hub for BC | https://www2.gov.bc.ca/gov/content/data |
| iMapBC | British Columbia · Provincial | Interactive map | Layer hundreds of BC Geographic Warehouse datasets on one map — parcels, Crown tenures, the Agricultural Land Reserve, mineral titles, forest and wildlife layers — with upload, query and share tools. | https://www2.gov.bc.ca/gov/content/data/geographic-data-services/web-based-mapping/imapbc |
| Metro Vancouver Open Data Portal | Metro Vancouver · Regional | Open data hub | Regional GIS datasets including LiDAR point clouds, aerial orthoimagery, liquid and solid waste services, water services, regional parks, and Electoral Area A boundaries | https://open-data-portal-metrovancouver.hub.arcgis.com/ |
| Abbotsford Open Data Hub | Abbotsford · Municipal | Open data hub | ArcGIS Hub for City of Abbotsford datasets — parks, transportation, boundaries, and municipal infrastructure with bulk download. | https://opendata-abbotsford.hub.arcgis.com/ |
| Burnaby Open Data | Burnaby · Municipal | Open data portal | City of Burnaby maps and open data including zoning, parks, and civic datasets with download and API access. | https://www.burnaby.ca/City-Services/Maps-Open-Data.html |
| Chilliwack Open Data Catalogue | Chilliwack · Municipal | Open data catalogue | City of Chilliwack open data catalogue with 41+ GIS datasets available in multiple formats including Shapefile, GeoDatabase, DWG, KML, JSON, CSV, and XLSX. Covers zoning, property, roads, parks, trails, addresses, and sanitary infrastructure. | https://www.chilliwack.com/main/page.cfm?id=2331 |
| Coquitlam Open Data Portal | Coquitlam · Municipal | Open data portal | City of Coquitlam open data portal with planning, parks, transportation, and civic datasets. | https://data.coquitlam.ca/ |
| Courtenay Open Data | Courtenay · Municipal | Open data hub | City of Courtenay ArcGIS open data portal with civic and planning datasets. | https://data-courtenay.opendata.arcgis.com/ |
| Delta Open Data | Delta · Municipal | Open data hub | City of Delta ArcGIS Hub open data portal with 16 municipal datasets including building permits, business licences, property parcels, water mains, sanitary sewers, drainage, and rights-of-way. Download as CSV, GeoJSON, Shapefile, KML, or access via REST API. | https://opendata-deltabc.hub.arcgis.com/ |
| Kamloops Open Data Hub | Kamloops · Municipal | Open data hub | ArcGIS open data for Kamloops with zoning, trails, parks, and city infrastructure layers. | https://mydata-kamloops.opendata.arcgis.com/ |
| Kelowna Open Data Hub | Kelowna · Municipal | Open data hub | Download city datasets including zoning, property parcels, building footprints, tree inventory, parks, trails, and infrastructure as GeoJSON, shapefiles, or CSV | https://opendata-kelowna.hub.arcgis.com/ |
| Township of Langley Open Data | Langley · Municipal | Open data hub | Township of Langley ArcGIS open data with property, parks, and municipal infrastructure layers. | https://data-tol.opendata.arcgis.com/ |
| Maple Ridge OpenGov | Maple Ridge · Municipal | Open data portal | District of Maple Ridge open government data with parks, property, and infrastructure downloads. | https://opengov.mapleridge.ca/ |
| Nanaimo Open Data Catalogue | Nanaimo · Municipal | Open data portal | Municipal GIS and civic datasets for Nanaimo including property, parks, and infrastructure — bulk download available. | https://data.nanaimo.ca/ |
| New Westminster Open Data | New Westminster · Municipal | Open data portal | Download civic datasets for New Westminster including buildings, parks, and transportation in multiple formats. | https://opendata.newwestcity.ca/ |
| Prince George Open Data | Prince George · Municipal | Open data hub | City of Prince George ArcGIS Hub with parcels, zoning, utilities, and recreation datasets for download. | https://data-cityofpg.opendata.arcgis.com/ |
| Saanich Open Data Catalogue | Saanich · Municipal | Data catalogue | District of Saanich GIS data catalogue with parks, roads, zoning, and environmental datasets for download. | https://www.saanich.ca/EN/main/local-government/data-catalogue-1.html |
| Surrey — COSMOS Online Mapping System | Surrey · Municipal | Interactive GIS map | Query and print 200+ map layers for Surrey — zoning, utilities, parks, underground infrastructure near your property, and aerial photos back to 1949. | https://cosmos.surrey.ca/ |
| Surrey Open Data | Surrey · Municipal | Open data portal | CKAN portal with building footprints, parks, transportation, and health datasets — CSV, GeoJSON, and API export. | https://data.surrey.ca/ |
| Victoria Open Data — Parks and Recreation | Victoria · Municipal | Parks dataset | Parks, trails, and recreation facility datasets on the City of Victoria open data portal. | https://opendata.victoria.ca/browse?category=Parks+%26+Recreation |
| Victoria Open Data Catalogue | Victoria · Municipal | Open data portal | Municipal datasets and geospatial resources | https://opendata.victoria.ca/ |
| Whistler Open Data Portal | Whistler · Municipal | Open data hub | Resort Municipality of Whistler spatial and civic datasets including trails, zoning, and recreation amenities. | https://portal-rmow.opendata.arcgis.com/ |
| White Rock Open Data | White Rock · Municipal | Open data portal | City of White Rock CKAN open data catalogue with municipal GIS datasets. | https://data.whiterockcity.ca/ |

### Alberta

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Alberta — Municipal Data and Statistics | Alberta · Provincial | Data portal & dashboards | Municipal Affairs hub: explore and compare every municipality's revenues, expenses, tax rates, infrastructure stats and profiles via interactive dashboards and downloadable FIR/SIR data back to 1994. | https://www.alberta.ca/municipal-data-and-statistics |
| Alberta Open Government Portal | Alberta · Provincial | Open data portal | Alberta's open government portal providing open data, publications, and reports for researchers, developers, and citizens | https://open.alberta.ca/ |
| Airdrie Open Data | Airdrie · Municipal | Open data hub | City of Airdrie ArcGIS open data including parcels, addressing, and municipal boundaries with GTFS transit data. | https://data-airdrie.opendata.arcgis.com/ |
| Banff Open Data | Banff · Municipal | Open data portal | Town of Banff open data including trails, zoning, and municipal spatial datasets. | https://maps.banff.ca/opendata/ |
| Calgary Open Data overview | Calgary · Municipal | Portal landing page | Nice overview of categories, uses, and mapping assets | https://www.calgary.ca/research/open-data-portal.html |
| Open Calgary | Calgary · Municipal | Open data portal | Well-stocked municipal open data portal with lots of map assets | https://data.calgary.ca/ |
| Canmore Open Data | Canmore · Municipal | Open data hub | Town of Canmore ArcGIS open data with recreation, trails, and planning datasets. | https://opendata-canmore.opendata.arcgis.com/ |
| Edmonton Open Data Portal | Edmonton · Municipal | Open data portal | Large set of municipal datasets and maps | https://data.edmonton.ca/ |
| Grande Prairie Open Data | Grande Prairie · Municipal | Open data portal | City of Grande Prairie open data portal with property, infrastructure, and civic datasets via Socrata. | https://data.cityofgp.com/ |
| Lethbridge Open Data Portal | Lethbridge · Municipal | Open data hub | Municipal open data for Lethbridge with property parcels, building footprints, transit routes, parks, and infrastructure datasets | https://data-lethbridge.opendata.arcgis.com |
| Medicine Hat Open Data | Medicine Hat · Municipal | Open data portal | City of Medicine Hat open data portal with GIS and civic datasets for southeastern Alberta. | https://opendata.medicinehat.ca/ |
| Okotoks Open Data Portal (ArcGIS Hub) | Okotoks · Municipal | Open data hub | ArcGIS Hub open data portal for Okotoks with downloadable GIS datasets (CSV, GeoJSON, Shapefile) and REST/OGC API access — owner VR1_okotoks, 150 datasets incl. address points and waste collection zones. Verified live via the OGC items API returning HTTP 200. | https://okotoks.opendata.arcgis.com/ |
| Red Deer Open Data | Red Deer · Municipal | Open data portal | City of Red Deer datasets including property, transportation, and recreation — browse and download with API options. | https://data.reddeer.ca/ |
| St. Albert Open Data | St. Albert · Municipal | Open data portal | Municipal open data for St. Albert including civic datasets and transit GTFS developer resources. | https://data.stalbert.ca/ |
| Strathcona County Open Data | Strathcona County · Municipal | Open data portal | Socrata open data portal for Strathcona County with parcels, transit GTFS, buildings, and recreation datasets. | https://data.strathcona.ca/ |

### Saskatchewan

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Government of Saskatchewan — GeoHub Open Data | Saskatchewan · Provincial | Open data portal | Explore and download 180+ provincial GIS datasets (boundaries, environment, geoscience, agriculture) as GeoJSON/CSV via ArcGIS REST API or interactive maps. | https://geohub.saskatchewan.ca/ |
| Prince Albert Open Data Portal (ArcGIS Hub) | Prince Albert · Municipal | Open data hub | ArcGIS Hub open data portal for Prince Albert with downloadable GIS datasets (CSV, GeoJSON, Shapefile) and REST/OGC API access — owner princealbert, municipal boundary and zoning layers. Verified live via the OGC items API returning HTTP 200. | https://princealbert.opendata.arcgis.com/ |
| Regina Open Data | Regina · Municipal | Open data portal | CKAN open government portal for Regina with property, recreation, and civic datasets. | https://regina.opendata.arcgis.com/ |
| Saskatoon Open Data | Saskatoon · Municipal | Open data portal | City of Saskatoon open data catalogue with transit GTFS, property, and civic datasets — browse and download via the municipal portal. | https://opendata.saskatoon.ca/ |

### Manitoba

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Manitoba — Data MB (Geospatial Open Data Portal) | Manitoba · Provincial | Portal | Manitoba’s official geospatial open data portal. Search, explore, visualize, and download provincial datasets by category — agriculture, economy, transportation, education, health, environment, and government. Datasets available for download as GeoJSON, Shapefile, CSV, and KML. | https://geoportal.gov.mb.ca |
| Manitoba Petroleum Branch — Oil & Gas GIS Map Gallery | Manitoba · Provincial | Interactive map + shapefile downloads | Search wells, batteries and facilities on an interactive GIS map; download shapefiles of well locations, Crown lands, unit/field/pool boundaries (ZIP, 2026). | https://www.gov.mb.ca/iem/petroleum/gis/index.html |
| Brandon Open Data | Brandon · Municipal | Open data portal | City of Brandon open data service with civic and GIS datasets for Manitoba's second-largest city. | https://brandon.opendata.arcgis.com/ |
| Selkirk Open Data Portal (ArcGIS Hub) | Selkirk · Municipal | Open data hub | ArcGIS Hub open data portal for Selkirk with downloadable GIS datasets (CSV, GeoJSON, Shapefile) and REST/OGC API access — City of Selkirk staff accounts, 3,300+ datasets. Verified live via the OGC items API returning HTTP 200. | https://selkirk.opendata.arcgis.com/ |
| Thompson Open Data Portal (ArcGIS Hub) | Thompson · Municipal | Open data hub | ArcGIS Hub open data portal for Thompson with downloadable GIS datasets (CSV, GeoJSON, Shapefile) and REST/OGC API access — City of Thompson accounts (cot-*), 16 datasets incl. Thompson Utilities layers. Verified live via the OGC items API returning HTTP 200. | https://thompson.opendata.arcgis.com/ |
| Winnipeg Crime Stat — Open Data | Winnipeg · Municipal | Crime statistics | Winnipeg Police Service crime statistics datasets on the municipal open data portal — filter and export by type and district. | https://data.winnipeg.ca/browse?category=Public+Safety |
| Winnipeg Open Data Portal | Winnipeg · Municipal | Open data portal | Municipal data catalogue with maps and downloads | https://data.winnipeg.ca/ |

### Ontario

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Ministry of Finance — Ontario Population Projections | Ontario · Provincial | Statistical dashboard | Annual projections to 2051 for Ontario, 49 census divisions, health units and regions under reference/low/high scenarios; charts online plus XLSX table downloads. | https://www.ontario.ca/page/ontario-population-projections |
| MLITSD — Employment Standards Claims Report | Ontario · Provincial | Open data | CSV downloads of Ontario ESA claims received/resolved and dollars assessed by ministry officers, fiscal 2012-2025, refreshed yearly. | https://data.ontario.ca/dataset/8d8c31d3-4ec8-4684-b817-39ce2884bb2f |
| MLITSD — Occupational Health and Safety Inspections Report | Ontario · Provincial | Open data | CSV of MLITSD proactive OHS field-visit inspection counts by enforcement program area, fiscal 2011-2025, updated yearly. | https://data.ontario.ca/dataset/occupational-health-and-safety-inspections-report |
| Ontario Data Catalogue | Ontario · Provincial | Open data portal | Large and very usable provincial open data catalogue | https://data.ontario.ca/ |
| Durham Region Open Data | Clarington · Regional | Regional open data portal | Regional Municipality of Durham open data — boundaries, infrastructure, and regional datasets covering Clarington and other lower-tier municipalities. | https://opendata.durham.ca/ |
| Durham Region Open Data Portal | Durham · Regional | Open data portal | Open data portal for the Regional Municipality of Durham — transportation, environment, and community data | https://opendata-durham.hub.arcgis.com/ |
| Halton Region Open Data Portal | Halton · Regional | Open data portal | Open data portal for the Regional Municipality of Halton — planning, transportation, and public health datasets | https://opendata-halton.hub.arcgis.com/ |
| Niagara Open Data | Niagara · Regional | Regional open data | CKAN portal aggregating Niagara Region and local municipality datasets — buildings, transit GTFS, and boundaries. | https://niagaraopendata.ca/ |
| Simcoe County Open Data Hub (Orillia region) | Orillia · Regional | County open data portal | County of Simcoe regional open data — shared GIS layers and datasets for Orillia, Barrie, and Simcoe municipalities. | https://data-simcoe.opendata.arcgis.com/ |
| Peel Region Open Data | Peel · Regional | Regional open data | Peel Region datasets including Food Check, property, waste, and health data with search and download. | https://data.peelregion.ca/ |
| Peel Region Open Data Portal | Peel · Regional | Open data portal | Open data portal for the Regional Municipality of Peel — datasets on planning, transportation, health, and more | https://opendata-peel.hub.arcgis.com/ |
| County of Elgin GeoHub (St. Thomas area) | St. Thomas · Regional | County open data portal | Elgin County GIS open data covering St. Thomas and surrounding municipalities — parcels, roads, and planning layers via ArcGIS Hub. | https://geohub.elgin.ca/ |
| Region of Waterloo Open Data | Waterloo · Regional | Regional open data hub | Regional Municipality of Waterloo ArcGIS Hub with parcels, transit, libraries, and cross-municipal GIS layers. | https://rowopendata-rmw.opendata.arcgis.com/ |
| Oxford County Open Data Hub | Woodstock · Regional | Regional open data portal | Oxford County GIS open data serving Woodstock and area municipalities — parcels, zoning, addressing, and infrastructure with REST API and downloads. | https://public-oxfordcounty.opendata.arcgis.com/ |
| York Region Insights Open Data | York Region · Regional | Regional open data hub | York Region ArcGIS open data hub with regional boundaries, demographics, and municipal service layers. | https://insights-york.opendata.arcgis.com/ |
| York Region Open Data Portal | York Region · Regional | Open data portal | Open data portal for York Region — maps, statistics, and datasets for planning and public services | https://opendata-york.hub.arcgis.com/ |
| Ajax Open Data | Ajax · Municipal | Open data portal | Town of Ajax municipal open data with GIS layers for planning and civic services. | https://opendata.ajax.ca/ |
| Barrie Open Data Portal | Barrie · Municipal | Open data portal | City of Barrie open data portal — maps, statistics, and municipal datasets | https://opendata-barrie.hub.arcgis.com/ |
| City of Belleville Open Data | Belleville · Municipal | Open Data Portal | Belleville GIS open data on ArcGIS Hub — parcels, road network, and planning layers with shapefile/GeoJSON download and API. | https://opendata-bellevillegis.hub.arcgis.com/ |
| Brampton Open Data Portal (ArcGIS Hub) | Brampton · Municipal | Open data hub | ArcGIS Hub open data portal for Brampton with downloadable GIS datasets (CSV, GeoJSON, Shapefile) and REST/OGC API access — owner BramptonMaps, ~2,700 datasets incl. ward boundaries. Verified live via the OGC items API returning HTTP 200. | https://brampton.opendata.arcgis.com/ |
| Burlington Open Data | Burlington · Municipal | Open data hub | City of Burlington ArcGIS Hub with parks, zoning, property, and civic datasets. | https://navburl-burlington.opendata.arcgis.com/ |
| Town of Caledon Open Data | Caledon · Municipal | Open Data Portal | Caledon open data on ArcGIS Hub — trails, tourism, broadband coverage, and municipal GIS layers with bulk download and REST services. | https://data-caledon.opendata.arcgis.com/ |
| Cambridge GeoHub | Cambridge · Municipal | Open data hub | City of Cambridge open GIS hub with property, zoning, libraries, schools, and building datasets. | https://geohub.cambridge.ca/ |
| City of Cornwall Open Data | Cornwall · Municipal | Open Data Portal | Cornwall municipal open data catalogue — address points, buildings, watermains, official plan land use, and heritage sites with CSV/GeoJSON export. | https://data-cornwallcity.opendata.arcgis.com/ |
| Cornwall Address Points Open Data | Cornwall · Municipal | Address dataset | Municipal address point layer for Cornwall — geocoded civic addresses with export to CSV, Shapefile, or GeoJSON. | https://data-cornwallcity.opendata.arcgis.com/datasets/134ac6de89ff493484541b6d8a326e62_34 |
| Greater Sudbury Open Data | Greater Sudbury · Municipal | Open data portal | Municipal open data for Greater Sudbury including roads, property, recreation, and transit datasets. | https://opendata.greatersudbury.ca/ |
| Grey County Open Data | Grey County · Municipal | Open data portal | Grey County open GIS data portal with civic and planning datasets for southwestern Ontario. | https://maps.grey.ca/pages/open-data |
| Guelph Open Data Portal | Guelph · Municipal | Open data portal | City of Guelph open data portal — GIS datasets, infrastructure, and city services data | https://opendata-guelph.hub.arcgis.com/ |
| Haldimand County Open Data | Haldimand County · Municipal | Open data portal | Haldimand County open data portal with property, roads, and municipal GIS layers. | https://haldimandcounty.opendata.arcgis.com/ |
| Hamilton Open Data | Hamilton · Municipal | Open data portal | Datasets and map resources | https://open.hamilton.ca/ |
| Hamilton Red Light Camera Locations | Hamilton · Municipal | Traffic safety dataset | Red light camera intersection locations and related traffic safety datasets on Open Hamilton. | https://open.hamilton.ca/datasets?q=red%20light |
| Huron County Open Data | Huron County · Municipal | Open data hub | County of Huron ArcGIS open data with libraries, buildings, and municipal boundaries. | https://data-huron.opendata.arcgis.com/ |
| Kingston Open Data Hub | Kingston · Municipal | Open data hub | Download property parcels, building footprints, transit routes, tree inventory, election wards, parks, and trails as GeoJSON, shapefiles, or CSV | https://cityofkingston.hub.arcgis.com |
| Kitchener Open Data Portal | Kitchener · Municipal | Open data portal | City of Kitchener open data portal — transportation, parks, development, and demographic datasets | https://opendata-kitchener.hub.arcgis.com/ |
| Kitchener Open GIS Hub | Kitchener · Municipal | Open data hub | Kitchener GIS open data hub with property, schools, buildings, and planning layers. | https://open-kitchenergis.opendata.arcgis.com/ |
| London Open Data Catalogue | London · Municipal | Open data catalogue | City of London open data catalogue with property, transportation, and planning datasets for bulk download. | https://london.ca/government/council-civic-administration/open-data |
| Markham Open Data | Markham · Municipal | Open data hub | City of Markham ArcGIS open data including property, transportation, and recreation datasets. | https://data-markham.opendata.arcgis.com/ |
| Markham Open Data Portal | Markham · Municipal | Open data portal | City of Markham open data portal — GIS, demographics, transportation, and parks datasets | https://opendata-markham.hub.arcgis.com/ |
| Milton Open Data Hub | Milton · Municipal | Open data hub | Discover Milton ArcGIS Hub with civic datasets including property, zoning, and recreation — CSV and shapefile download. | https://discover-milton.hub.arcgis.com/ |
| Mississauga Open Data | Mississauga · Municipal | Open data portal | Strong GTA municipal data portal | https://data.mississauga.ca/ |
| Newmarket — Navigate Newmarket Interactive Map | Newmarket · Municipal | Interactive map | Explore Newmarket's public map for addresses, facilities, wards, waste collection days, trails, zoning and active developments, with layer toggles. | https://maps.newmarket.ca/NavigateNewmarket/ |
| Newmarket Open Data | Newmarket · Municipal | Open data portal | Town of Newmarket open data navigator with property, recreation, and civic datasets. | https://open.newmarket.ca/ |
| Niagara Falls Open Data | Niagara Falls · Municipal | Open data portal | City of Niagara Falls open data service with downloadable municipal datasets. | https://niagarafalls.ca/city-government/corporate-initiatives/open-data/ |
| Norfolk County Open Data | Norfolk County · Municipal | Open data hub | Norfolk County ArcGIS open data including building footprints and civic datasets. | https://opendata.norfolkcounty.ca/ |
| Explore North Bay GIS Portal | North Bay · Municipal | GIS Open Data Portal | City of North Bay ArcGIS Hub — zoning, transportation, public art, and community statistics with downloadable map layers and REST API access. | https://data-northbaygis.hub.arcgis.com/ |
| North Bay — Municipal Dashboard | North Bay · Municipal | Dashboard | Public KPIs and community statistics tracking city services, growth, infrastructure and finances, with targets and progress indicators for municipal transparency. | https://northbay.ca/city-government/municipal-dashboard/ |
| Oakville Explore Open Data | Oakville · Municipal | Open data hub | Town of Oakville ArcGIS open data portal with zoning, property, and municipal infrastructure layers. | https://portal-exploreoakville.opendata.arcgis.com/ |
| City of Orillia Open Data | Orillia · Municipal | Open Data Portal | Orillia municipal open data portal — addresses, zoning, and planning schedules with dataset download and map services. | https://orillia.opendata.arcgis.com/ |
| Oshawa Open Data | Oshawa · Municipal | Open data hub | City of Oshawa ArcGIS open data catalogue with civic, transportation, and planning layers. | https://city-oshawa.opendata.arcgis.com/ |
| Ottawa Budget Explorer | Ottawa · Municipal | Budget explorer | Interactive budget explainer with graphs, charts, and downloadable data | https://ottawa.ca/en/city-hall/city-news/newsroom/discover-draft-budget-2026-budget-explorer |
| Ottawa Budget Explorer datasets | Ottawa · Municipal | Dataset bundle | Raw datasets behind the budget visualizations | https://open.ottawa.ca/datasets/e88c52d7727e4a9dba6d427c9bd6445c |
| Ottawa Open Data | Ottawa · Municipal | Open data portal | Municipal open data portal with datasets and map resources | https://open.ottawa.ca/ |
| Peterborough Open Data | Peterborough · Municipal | Open data hub | City of Peterborough ArcGIS open data hub with civic and spatial datasets. | https://data-ptbo.opendata.arcgis.com/ |
| Pickering Open Data | Pickering · Municipal | Open data portal | City of Pickering open data portal with civic and GIS datasets for Durham Region. | https://opendata.pickering.ca/ |
| Richmond Hill Open Data Portal | Richmond Hill · Municipal | Open data portal | City of Richmond Hill open data portal — planning, transportation, and community services data | https://opendata-richmondhill.hub.arcgis.com/ |
| Sarnia GeoHub | Sarnia · Municipal | Open Data Portal | ArcGIS Hub for City of Sarnia GIS layers — zoning, transportation, infrastructure, and interactive community maps with CSV/GeoJSON export. | https://city-of-sarnia.hub.arcgis.com/ |
| SooMaps Open GIS Data Downloads | Sault Ste. Marie · Municipal | GIS data extracts | Official City of Sault Ste. Marie GIS extracts — addresses, streets, wards, bus stops, playgrounds, and heritage as CSV/JSON refreshed weekly. | https://github.com/cityssm/soomaps-data |
| St. Catharines Open Data (Niagara) | St. Catharines · Municipal | Open data portal | St. Catharines datasets on Niagara Open Data — property, recreation, and civic layers. | https://niagaraopendata.ca/organization/city-of-st-catharines |
| Thunder Bay — Building Feature Layer | Thunder Bay · Municipal | Dataset | Feature layer of all buildings in Thunder Bay with structural and occupancy attributes. Downloadable as CSV, GeoJSON, Shapefile, KML, XLSX, GPKG, or GDB, and queryable via ArcGIS REST API. Useful for urban planning, property research, and GIS analysis. | https://opendata-thunderbay.hub.arcgis.com/datasets/cc7cb51753384ca99e566834cd48924b_0 |
| Thunder Bay Open Data Hub | Thunder Bay · Municipal | Open data hub | Municipal datasets for Thunder Bay including property parcels, building footprints, transit routes, parks, zoning, and infrastructure available for bulk download | https://opendata-thunderbay.hub.arcgis.com |
| City of Timmins Open Data | Timmins · Municipal | Open Data Portal | Timmins municipal open data portal — infrastructure, planning, and community GIS datasets on ArcGIS Hub with export and API access. | https://timmins.opendata.arcgis.com/ |
| 2026 City Budget | Toronto · Municipal | Budget portal | Official budget portal with accessible explainer content and documents | https://www.toronto.ca/Budget |
| Toronto Maps / data and research hub | Toronto · Municipal | GIS / research hub | Broad entry point for city maps, data, and research tools | https://www.toronto.ca/city-government/data-research-maps/ |
| Toronto Open Data Portal | Toronto · Municipal | Open data portal | One of the best municipal open data portals in Canada | https://open.toronto.ca/ |
| Vaughan Open Data Portal | Vaughan · Municipal | Open data portal | City of Vaughan open data portal — municipal data, maps, and analytics for city services | https://opendata-vaughan.hub.arcgis.com/ |
| Waterloo City Open Data | Waterloo · Municipal | Open data hub | City of Waterloo ArcGIS open data with civic boundaries, property, and infrastructure datasets. | https://opendata-city-of-waterloo.opendata.arcgis.com/ |
| Whitby GeoHub | Whitby · Municipal | Open Data Portal | Town of Whitby open data portal — municipal facilities, parks, trails, and planning datasets searchable and downloadable via ArcGIS Hub. | https://geohub-whitby.hub.arcgis.com/ |
| Windsor Open Data | Windsor · Municipal | Open data portal | City of Windsor open data portal with civic, property, and infrastructure datasets. | https://opendata.citywindsor.ca/ |

### Quebec

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| CNESST — Lésions professionnelles Accepted Claims Dataset | Quebec · Provincial | Open data | Download annual CSV/XLSX files (2014-2023) of accepted Quebec work-injury claims by region, sector, and injury type; CKAN datastore API available. | https://www.donneesquebec.ca/recherche/dataset/0e3ba082-a963-4771-95a2-accc43ae244c |
| Données Québec | Quebec · Provincial | Open data portal | Strong open data portal with datasets, apps, and interactive map components | https://www.donneesquebec.ca/ |
| Données Québec — API | Quebec · Provincial | Catalogue API | Search and download datasets from Québec's open-data catalogue programmatically via its CKAN-based API — package_search and datastore actions, bilingual metadata. | https://www.donneesquebec.ca/recherche/api |
| MAMH — Répertoire des municipalités du Québec | Quebec · Provincial | Reference dataset | Daily-updated directory of every Quebec municipality and MRC: contacts, mayors and councillors, population decrees, regional affiliations and inactive organizations. Bulk XML downloads with related reference files. | https://www.donneesquebec.ca/recherche/dataset/repertoire-des-municipalites-du-quebec |
| Gatineau — Atlas de Gatineau | Gatineau · Municipal | Interactive GIS atlas | Explore Gatineau geospatial data — toggle map layers, view aerial photography, and overlay your own Shapefile, CSV or KML data on the city's interactive atlas. | https://www.gatineau.ca/portail/default.aspx?p=publications_cartes_statistiques_donnees_ouvertes%2Fcartes%2Fcarte_interactive_atlas_gatineau |
| Laval — Interactive Map | Laval · Municipal | Interactive city map | Browse Ville de Laval's Geoweb interactive maps to view municipal data layers — properties, services, infrastructure and territory information — by address. | https://www.laval.ca/en/interactive-map/ |
| Ville de Lévis — Données Québec | Lévis · Municipal | Open data catalogue | Lévis municipal datasets on Données Québec — zonage, adresses, infrastructures with CSV, SHP, GeoJSON, and FGDB download. | https://www.donneesquebec.ca/recherche/organization/ville-de-levis |
| Longueuil — GéoHub Données ouvertes | Longueuil · Municipal | Portail de données | Open data portal with 12 categories of datasets (environment, transport, infrastructure) downloadable in CSV, GeoJSON, SHP with API access. | https://geohub.longueuil.quebec/pages/donnees-ouvertes |
| Longueuil Open Data Portal (ArcGIS Hub) | Longueuil · Municipal | Open data hub | ArcGIS Hub open data portal for Longueuil with downloadable GIS datasets (CSV, GeoJSON, Shapefile) and REST/OGC API access — owner VilleLongueuil, ~890 datasets incl. 311 container tracking. Verified live via the OGC items API returning HTTP 200. | https://longueuil.opendata.arcgis.com/ |
| Données Montréal — CKAN API | Montreal · Municipal | Catalogue API | Search and download Ville de Montréal datasets programmatically via its CKAN Action API — city services, permits, transport and culture data in bilingual metadata, no key required. | https://donnees.montreal.ca/api/3/action/package_search |
| Montreal Open Data Portal | Montreal · Municipal | Open data portal | Ville de Montréal open data site with hundreds of datasets — buildings, transit, elections, and civic services in CSV and API. | https://donnees.montreal.ca/ |
| Quebec City — Carte interactive | Quebec City · Municipal | Interactive city map | Explore Quebec City's official interactive map with layers for roadwork and traffic obstructions, snow removal operations, zoning and municipal services. | https://www.ville.quebec.qc.ca/carteinteractive/ |
| Repentigny Open Data Portal (ArcGIS Hub) | Repentigny · Municipal | Open data hub | ArcGIS Hub open data portal for Repentigny with downloadable GIS datasets (CSV, GeoJSON, Shapefile) and REST/OGC API access — owner georepentigny, ~430 datasets. Verified live via the OGC items API returning HTTP 200. | https://repentigny.opendata.arcgis.com/ |
| Rimouski Open Data Portal (ArcGIS Hub) | Rimouski · Municipal | Open data hub | ArcGIS Hub open data portal for Rimouski with downloadable GIS datasets (CSV, GeoJSON, Shapefile) and REST/OGC API access — owner Geo_Rimouski, 129 datasets incl. the five-year development plan and boil-water notices. Verified live via the OGC items API returning HTTP 200. | https://rimouski.opendata.arcgis.com/ |
| Rouyn-Noranda Open Data Portal (ArcGIS Hub) | Rouyn-Noranda · Municipal | Open data portal | ArcGIS Hub with 19 Feature Service datasets (CC-BY-4.0) including the zoning plan (plan de zonage), property assessment units (unités d'évaluation), building footprints (empreintes de bâtiments), transit stops and bus routes, road network, bike network, hydrography, electoral districts, and water protection areas. Query datasets via the OGC API at /api/search/v1/collections/all/items or download as GeoJSON/CSV from each dataset's landing page. First open data entry for Rouyn-Noranda. | https://donnees-ouvertes-vrn.opendata.arcgis.com/ |
| Saguenay Bâtiments — Données Québec | Saguenay · Municipal | Buildings dataset | Municipal building footprints for Saguenay — download as CSV, GeoJSON, or shapefile from the provincial open data portal. | https://www.donneesquebec.ca/recherche/dataset/?organization=ville-de-saguenay&q=b%C3%A2timent |
| Ville de Saguenay — Données Québec | Saguenay · Municipal | Open data catalogue | Saguenay open data on Données Québec — zoning, buildings, roads, parks, addresses, and tree inventory with CSV/SHP/GeoJSON export. | https://www.donneesquebec.ca/recherche/dataset/?organization=ville-de-saguenay |
| Shawinigan Open Data Portal (ArcGIS Hub) | Shawinigan · Municipal | Open data hub | ArcGIS Hub open data portal for Shawinigan with downloadable GIS datasets (CSV, GeoJSON, Shapefile) and REST/OGC API access — French-language municipal layers incl. waste collection routes and overnight parking bans, 12 datasets. Verified live via the OGC items API returning HTTP 200. | https://shawinigan.opendata.arcgis.com/ |
| Sherbrooke — Buildings Open Dataset | Sherbrooke · Municipal | Dataset | GeoJSON/Shapefile download of buildings in Sherbrooke categorized by type (commercial, hospital, school, municipal building). Useful for urban planning, facility mapping, and accessibility analysis. | https://donneesouvertes-sherbrooke.opendata.arcgis.com/datasets/28f4f1b83ab243ddb48221f784378337_0/explore |
| Ville de Trois-Rivières — Données Québec | Trois-Rivières · Municipal | Open data catalogue | Trois-Rivières datasets on Données Québec — zoning, roads, buildings, and infrastructure in CSV, SHP, and GeoJSON with weekly updates. | https://www.donneesquebec.ca/recherche/dataset/?organization=ville-de-trois-rivieres |

### Atlantic Canada (NB, NS, PE, NL)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| GeoNB Data Catalogue | New Brunswick · Provincial | Open data catalogue | Download provincial spatial datasets — civic addresses, property maps, road network, wetlands, electoral districts, schools, lidar, orthoimagery — as SHP, FGDB, KML or ArcGIS REST services. | https://www.gnb.ca/en/campaign/geonb/data-catalogue.html |
| New Brunswick — GeoNB ArcGIS REST Services | New Brunswick · Provincial | GIS web services | Province-wide ArcGIS REST map and feature services from the GeoNB geospatial hub — query layers for geology, environment, boundaries and land use in JSON, GeoJSON and KML. | https://gis-erd-der.gnb.ca/server/rest/services |
| New Brunswick — GeoNB Map Viewer | New Brunswick · Provincial | Interactive map | Interactive provincial geospatial map viewer for New Brunswick. Explore layers from multiple departments including natural resources, environment, local government, and public safety. Useful for property research, land use planning, and environmental assessment. | https://geonb.snb.ca |
| Newfoundland and Labrador — Municipalities and Local Service Districts | Newfoundland and Labrador · Provincial | Dataset | Spatial dataset of all municipalities and local service districts in Newfoundland and Labrador. Downloadable as KMZ and compressed Shapefile for mapping municipal boundaries, service planning, and jurisdictional analysis. | https://opendata.gov.nl.ca/public/opendata/page/?page-id=datasetdetails&id=265 |
| Newfoundland and Labrador — Provincial Electoral Districts (2015) | Newfoundland and Labrador · Provincial | Dataset | Spatial dataset of Newfoundland and Labrador’s provincial electoral district boundaries (2015). Includes line and polygon shapefiles for electoral mapping, boundary analysis, and demographic research. | https://opendata.gov.nl.ca/public/opendata/page/?page-id=datasetdetails&id=361 |
| Newfoundland and Labrador Geospatial Open Data | Newfoundland and Labrador · Provincial | Provincial geospatial catalogue | NL provincial geospatial datasets — municipal boundaries, health regions, and spatial layers in KML, shapefile, and other formats. | https://opendata.gov.nl.ca/public/opendata/page/?page-id=datasets-spatial |
| Newfoundland and Labrador Open Data | Newfoundland and Labrador · Provincial | Open data portal | Provincial open data portal for Newfoundland and Labrador providing government datasets across multiple sectors | https://opendata.gov.nl.ca/ |
| Newfoundland and Labrador Statistics Agency | Newfoundland and Labrador · Provincial | Statistics portal | Official provincial statistics on population, economy, labour market, and social indicators for Newfoundland and Labrador | https://stats.gov.nl.ca/ |
| Department of Natural Resources — Abandoned Mine Openings Database | Nova Scotia · Provincial | Downloadable geodatabase | ~8,500 documented shafts, adits, open cuts and workings across ~700 mining areas, searchable by hazard degree, commodity, county. Downloads: SHP, GDB, KML/KMZ, XLS. | https://novascotia.ca/natr/meb/download/dp010.asp |
| GeoNova — Nova Scotia Geospatial Data | Nova Scotia · Provincial | Geospatial portal | Nova Scotia's provincial geospatial data clearinghouse: property-related fabric, topographic layers, imagery, and administrative boundaries with WMS/WFS services and downloads. | https://geonova.novascotia.ca/ |
| Nova Scotia Open Data | Nova Scotia · Provincial | Open data portal | Nova Scotia open data with storytelling feature and datasets | https://data.novascotia.ca/ |
| PEI Open Data | PEI · Provincial | Open data portal | Prince Edward Island government open data | https://www.princeedwardisland.ca/en/service/open-data |
| Prince Edward Island Open Data Portal | PEI · Provincial | Open data portal | PEI government open data catalogue with datasets on agriculture, environment, health, and transportation | https://data.princeedwardisland.ca/ |
| Bathurst Open Data Portal (ArcGIS Hub) | Bathurst · Municipal | Open data hub | ArcGIS Hub open data portal for Bathurst with downloadable GIS datasets (CSV, GeoJSON, Shapefile) and REST/OGC API access — bilingual municipal GIS layers incl. Daly Point trails, Nepisiguit trail, pothole reports, and surplus property maps, 155 datasets. Verified live via the OGC items API returning HTTP 200. | https://bathurst.opendata.arcgis.com/ |
| Cape Breton — The Data Zone | Cape Breton · Municipal | Regional data portal | Cape Breton Regional Municipality data portal with municipal GIS layers, maps, and downloadable datasets. | https://www.thedatazone.ca/ |
| CBRM GIS REST Services | Cape Breton · Municipal | ArcGIS REST services | Cape Breton Regional Municipality ArcGIS Server — planning, parcels, public works, transit, and utilities layers queryable via REST API. | https://gis2.cbrm.ns.ca/server/rest/services |
| East Hants Open Data | East Hants · Municipal | Open data hub | Municipality of East Hants ArcGIS open data with planning and civic spatial datasets. | https://data-easthants.opendata.arcgis.com/ |
| Fredericton Open Data Portal | Fredericton · Municipal | Open data hub | ArcGIS Hub for the City of Fredericton with downloadable datasets and interactive apps including zoning maps, trail networks, metered parking, IoT environmental sensors, and construction projects | https://data.fredericton.ca |
| Halifax Open Data | Halifax · Municipal | Open data portal | Useful municipal data and maps hub | https://data-hrm.hub.arcgis.com/pages/open-data-catalogue |
| Miramichi Open Data | Miramichi · Municipal | Open data hub | City of Miramichi ArcGIS open data portal for northeastern New Brunswick. | https://data-gis-sigmiramichi.opendata.arcgis.com/ |
| Moncton Open Data Catalogue (ArcGIS Hub) | Moncton · Municipal | Open Data Catalogue | City of Moncton GIS catalogue on ArcGIS Hub — zoning, transit, trails, parking, and environmental sensor datasets with export. | https://catalogue-moncton.hub.arcgis.com/ |
| Moncton Open Data Hub | Moncton · Municipal | Open data hub | Download transit routes, zoning maps, parking, trail networks, construction projects, and environmental sensor data as GeoJSON, shapefiles, or CSV | https://opendata-moncton.hub.arcgis.com/ |
| Mount Pearl — Interactive GIS Map | Mount Pearl · Municipal | Interactive map | Interactive GIS map for Mount Pearl with aerial photography, street information, civic addresses, and links to business parks, street directory, and parks and trails maps. | https://map.mountpearl.ca/ |
| Saint John Open Data Catalogue | Saint John · Municipal | Open data hub | ArcGIS open data catalogue for Saint John with civic, planning, and infrastructure datasets. | https://catalogue-saintjohn.opendata.arcgis.com/ |
| St. John's Open Data Portal (ArcGIS Hub) | St. John's · Municipal | Open data hub | ArcGIS Hub open data portal for St. John's with downloadable GIS datasets (CSV, GeoJSON, Shapefile) and REST/OGC API access — owners at stjohns.ca, ~200 datasets. Verified live via the OGC items API returning HTTP 200. | https://stjohns.opendata.arcgis.com/ |
| Summerside Open Data Portal (ArcGIS Hub) | Summerside · Municipal | Open data hub | ArcGIS Hub open data portal for Summerside with downloadable GIS datasets (CSV, GeoJSON, Shapefile) and REST/OGC API access — owner Cityofsside, 25 datasets incl. the City of Summerside Electrical Circuit Map. Verified live via the OGC items API returning HTTP 200. | https://summerside.opendata.arcgis.com/ |
| Interactive Truro — Open Data Hub | Truro · Municipal | Open Data Portal | Town of Truro ArcGIS Hub — maps, apps, and downloadable GIS datasets including building footprints and local layers. | https://interactive-truro-townoftruro.hub.arcgis.com/ |

### Northern Canada (YT, NT, NU)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Government of Northwest Territories — Spatial Data Warehouse Viewer | Northwest Territories · Provincial | Interactive GIS map & data downloads | NWT Centre for Geomatics browser viewer over GNWT's Spatial Data Warehouse: browse, query and extract public geospatial data — imagery, land tenure, permafrost, wildlife — no GIS software needed. | https://www.maps.geomatics.gov.nt.ca/Html5Viewer/index.html?viewer=SDW |
| Northwest Territories Open Data | Northwest Territories · Provincial | Territorial open data | GNWT open data catalogue with territorial datasets on infrastructure, environment, and community services. | https://opendata.gov.nt.ca/ |
| NWT Bureau of Statistics | Northwest Territories · Provincial | Statistics portal | Official GNWT statistics: population estimates by community, CPI, labour force surveys, GDP, health, education and justice indicators, plus time-series retrieval and quarterly publications. | https://www.statsnwt.ca/ |
| Government of Nunavut — Bureau of Statistics | Nunavut · Provincial | Statistics portal | Nunavummit Kiglisiniartiit publications: statistical fact sheets for every community plus population, labour force, income, health, education and housing-survey tables. | https://www.gov.nu.ca/en/nunavut-statistics |
| Nunavut Open Data Portal | Nunavut · Provincial | Territorial open data | Government of Nunavut open data portal for territorial datasets and spatial information. | https://www.gov.nu.ca/information/open-data |
| Government of Yukon — GeoYukon Map Viewer | Yukon · Provincial | Interactive GIS map & data downloads | Explore, measure, print and download the Yukon government's authoritative spatial layers — mining claims, land tenure, forestry, wildlife, air photos and more — free in a browser viewer. | https://mapservices.gov.yk.ca/GeoYukon/ |
| Yukon Open Data | Yukon · Provincial | Open data portal | Yukon government open data catalogue with datasets on environment, infrastructure, health, and demographics | https://open.yukon.ca/ |
| Whitehorse Open Data | Whitehorse · Municipal | Open data portal | Spatial datasets for Whitehorse including contours, parcels, roads, and aerial imagery in SHP, DWG, and KML formats. | https://data.whitehorse.ca/ |
| Yellowknife Open Data | Yellowknife · Municipal | Open data portal | City of Yellowknife spatial open data for GIS users — zoning, infrastructure, and base map layers. | https://opendata.yellowknife.ca/ |

## 🏗️ Planning, Zoning & Development

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Codes Canada — CODES-GUIDES Online Library | Canada · Federal | Reference library | Free electronic access to the National Building Code, Fire Code, Plumbing Code, Energy Code and user's guides published by the NRC. | https://nrc.canada.ca/en/certifications-evaluations-standards/codes-canada/codes-guides-online-library |

### British Columbia

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Abbotsford — WebMap | Abbotsford · Municipal | Interactive map | View properties with zoning, land use, lot area, air photos and utility layers; measure and draw graphics, print or export to PDF, and get property reports. | https://www.abbotsford.ca/city-services/mapping-data-analytics/webmap |
| Abbotsford Development Data — Development Application Tracker | Abbotsford · Municipal | Dataset | Live searchable reporting system tracking development activity in Abbotsford — covers development variance permits (in progress, issued current/previous year, with approval in principle), instream development applications, rezoning applications (at 3rd reading, in progress, final approval current/previous year), and subdivision applications (in progress, final approval, preliminary layout approvals). Each report lists application details, addresses, and status; export results to CSV, Excel, or PDF. Useful for monitoring construction, land use change, and development trends without filing a FOI request. | https://www.abbotsford.ca/developmentdata |
| Coquitlam Planning and Development Open Data | Coquitlam · Municipal | Planning datasets | Zoning, development permit areas, neighbourhood plans, and planning boundaries for Coquitlam — download via ArcGIS Hub. | https://data.coquitlam.ca/datasets/Coquitlam::planning-and-development-1 |
| Courtenay — Zoning | Courtenay · Municipal | Zoning dataset | Zoning — Feature Service on the Courtenay open data hub (CSV, GeoJSON, Shapefile export where available; queryable via REST API). Verified live via the hub OGC items API. | https://data-courtenay.opendata.arcgis.com/datasets/bd116205a44543848799b311f5740098/about |
| Kamloops — Property Information Portal | Kamloops · Municipal | Lookup tool | Look up civic address, planning and zoning, property tax levies/assessments, active permits and business licences, utility charges, and water/garbage/transit details for any Kamloops property. | https://www.kamloops.ca/city-services/maps-apps/property-information-portal |
| Kamloops Planning & Zoning Map | Kamloops · Municipal | Planning map | Zoning districts, development permit areas, and planning development layers for Kamloops via CityMap GIS services. | https://maps.kamloops.ca/arcgis/rest/services/CityMap/CityMap_PlanningDevelopment/MapServer |
| Kelowna Building Permits Open Data | Kelowna · Municipal | Building permits | Building permit issuance data for Kelowna on the municipal open data hub — filter by date, type, and neighbourhood. | https://opendata.kelowna.ca/ |
| Nanaimo — NanaimoMap | Nanaimo · Municipal | Interactive map | Search NanaimoMap for addressing, property information, active permits, current zoning, utilities, bike lanes, trails and historical aerial imagery across the city. | https://www.nanaimo.ca/your-government/maps-data/nanaimomap |
| Prince George — PGMap | Prince George · Municipal | Interactive map | PGMap lets you view zoning, land use, cadastre, Agricultural Land Reserve, community forests and 120+ layers, searching by address, PID, intersection or landmark. | https://www.princegeorge.ca/city-hall/maps-access-information |
| Saanich — SaanichMap | Saanich · Municipal | Interactive map | Explore 100+ interactive map layers including property information, zoning, trails, heritage sites, underground services, tax levies and aerial photography dating back to 1997. | https://www.saanich.ca/EN/main/community/about-saanich/saanichmap.html |
| Saanich Zoning GIS Data | Saanich · Municipal | Zoning dataset | Downloadable GIS zoning data for the District of Saanich in Shapefile, geodatabase, and DWG formats with metadata PDF — direct ZIP downloads from the municipal GIS server. | https://map.saanich.ca/gisdata/Zoning/ZoningSHP.zip |
| Surrey — Issued Building Permits | Surrey · Municipal | Dataset | Explore and download City of Surrey issued building permit data via ArcGIS Hub. Filter by date, type, and location; download as CSV, GeoJSON, or Shapefile to analyze construction trends and development activity. | https://opendata-surrey.hub.arcgis.com/datasets/issued-building-permits/explore |
| Vancouver — Shape Your City Rezoning Applications | Vancouver · Municipal | Rezoning application tracker | Browse active and archived Vancouver rezoning and development applications on a map, read application documents, and submit comments on proposals. | https://www.shapeyourcity.ca/rezoning |
| Vancouver Building Permits Issued | Vancouver · Municipal | Building permits dataset | Open data on issued building permits in Vancouver with project type, value, and address fields. | https://opendata.vancouver.ca/explore/dataset/issued-building-permits/ |
| Vancouver Zoning & Land Use Districts | Vancouver · Municipal | Zoning dataset | Download zoning district boundaries and schedules from the Vancouver Open Data Portal for GIS analysis and property lookups. | https://opendata.vancouver.ca/explore/?disjunctive.zoning&sort=modified |
| Victoria Building Permits Open Data | Victoria · Municipal | Building permits | Issued building and development permits on the City of Victoria open data catalogue with map and CSV export. | https://opendata.victoria.ca/browse?category=Planning |

### Alberta

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Calgary — Development Map (DMap) | Calgary · Municipal | Development application map | Search Calgary development permits and land-use redesignations by address, permit number or community, view proposals in 3D, and comment on applications. | https://dmap.calgary.ca/ |
| Calgary Building Permits | Calgary · Municipal | Building permits dataset | Search and download building permit records from Open Calgary — filter by date, community, and permit type with API access. | https://data.calgary.ca/browse?category=Building+Permits |
| Edmonton Development Permits Open Data | Edmonton · Municipal | Development permits | Development permit records on the Edmonton Open Data Portal — search by community, permit type, and status with Socrata API export. | https://data.edmonton.ca/browse?category=Planning+%26+Development |
| Edmonton Zoning Map — Development Permits | Edmonton · Municipal | Development permit map | Interactive zoning map layer showing development permit applications with applicant, location, and job description fields. | https://gis.edmonton.ca/site1/rest/services/VertiGIS/ZoningMap/MapServer |
| Lethbridge — Interactive WebMAPs | Lethbridge · Municipal | Portal | Seven interactive maps: property info with tax roll numbers, city amenities, fire & EMS calls, truck routes, social services, youth services, and census data. | https://www.lethbridge.ca/planning-development/maps/interactive-webmaps/ |
| Medicine Hat — Maps & GIS | Medicine Hat · Municipal | Portal | Hub for City iMap (parks, trails, garbage zones, schools), crime map, capital projects, construction closures, and story maps of historic and public art sites. | https://www.medicinehat.ca/business-development/maps-gis/ |
| Red Deer — Interactive City Map (Web Map) | Red Deer · Municipal | Interactive map | View property assessed values, zoning districts, waste collection zones, parking, neighbourhoods, and orthophotography across Red Deer. | https://www.reddeer.ca/online-tools/interactive-city-map-web-map/ |
| Red Deer Open Data — Building Permits | Red Deer · Municipal | Dataset | Downloadable dataset of building permits issued in Red Deer, including permit type, construction value, and status. Available as CSV, JSON, and via API. | https://data.reddeer.ca/buildingpermits |
| Red Deer Open Data — Zoning | Red Deer · Municipal | Dataset | Zoning boundary dataset for the City of Red Deer. Use for land-use research, development feasibility, and property analysis. Available as shapefile and KMZ. | https://data.reddeer.ca/zoning |
| St. Albert Open Data — Weekly Development Permit Decisions | St. Albert · Municipal | Dataset | Weekly-updated dataset of development permit decisions for the City of St. Albert, published as an ArcGIS Feature Service. Each record includes permit details, location, and decision status — download as CSV, GeoJSON, or shapefile, or query via REST API. Useful for tracking recent development approvals and construction activity in the Edmonton metro region without filing a FOIP request. | https://data.stalbert.ca/datasets/d2a5c5c7b7d94f7eb12b587509228eb6/about |

### Saskatchewan

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Prince Albert Zoning Map | Prince Albert · Municipal | Zoning map | Interactive ArcGIS Experience zoning map for Prince Albert — search by address to view zoning districts, land use designations, and development regulations. | https://experience.arcgis.com/experience/a0a3210237cc40dcb613bf2f4a2072b2/page/Page/ |
| Regina — Land Use and Zoning | Regina · Municipal | Dataset | Download Regina zoning and land use boundaries and code descriptions in multiple formats. Updated daily via the City of Regina open data portal. Useful for property analysis, development research, and GIS mapping. | https://openregina.ca/dataset/land-use-and-zoning |
| Weyburn Building Permit Reports | Weyburn · Municipal | Building permits | Monthly building permit reports for the City of Weyburn, 2021–2026, plus annual summary reports back to 2018. Each monthly report lists permits issued by type, value, and location — track construction activity and development trends in southeast Saskatchewan. | https://www.weyburn.ca/services/building-planning/building-permit-reports/ |

### Manitoba

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Brandon — COBRA Reference Atlas | Brandon · Municipal | Interactive map | Brandon's GIS reference atlas for exploring zoning, back lanes, greenspaces, property boundaries, and layers of spatial city data interactively. | https://opengov.brandon.ca/reference-atlas.php |
| Dauphin — Monthly Building Statistics | Dauphin · Municipal | Dataset | Monthly PDF downloads of Dauphin building permit statistics showing construction activity by type, value, and month. Updated regularly with current-year data. Useful for tracking local development trends, construction market analysis, and economic research. First planning-zoning depth entry for Dauphin beyond its financial plans page. | https://www.dauphin.ca/p/monthly-building-statistics |
| Steinbach — Property & Development Info Map (Zoning) | Steinbach · Municipal | Interactive map | ArcGIS Experience interactive map for property and zoning lookup in Steinbach. Search by address or parcel to view zoning classification, development regulations, and property information. Useful for real estate research, development planning, and community organizing. First planning-zoning depth entry for Steinbach beyond its council video archive. | https://www.steinbach.ca/zoning-map/ |
| Winnipeg Building Permits Open Data | Winnipeg · Municipal | Building permits | Building permit datasets on Winnipeg Open Data — issued permits with addresses, values, and permit categories for download. | https://data.winnipeg.ca/browse?category=Planning%2C+Property+%26+Development |

### Ontario

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Ministry of Natural Resources — Crown Land Use Policy Atlas | Ontario · Provincial | Interactive map | Map Crown land-use policy areas across 39 million hectares and search area-specific policy reports and amendments in the interactive atlas. | https://www.lioapplications.lrc.gov.on.ca/CLUPA/index.html?viewer=CLUPA.CLUPA&locale=en-CA |
| Ontario Land Tribunal — Decisions | Ontario · Provincial | Tribunal decisions | Full-text decisions of the OLT and predecessors (OMB, LPAT, ERT) on land-use planning appeals, zoning by-laws, official plan amendments, and heritage disputes; searchable by municipality and keyword. Case status portal covers active files. | https://olt.gov.on.ca/decisions/ |
| Barrie Planning & Development Map | Barrie · Municipal | Planning map | Map layers for active building permits, zoning, official plan land use, and planning applications in Barrie — now hosted on the municipal open data hub. | https://geohub-barrie.hub.arcgis.com/ |
| Belleville — B-Connect Public GIS Map | Belleville · Municipal | Interactive map | Single interactive city map uniting zoning, land-use, transit, flood mapping, wards, parks, community gardens and yard-waste zones in one layer-based viewer. | https://getinvolved.belleville.ca/b-connect-public |
| Belleville Parcels Open Data | Belleville · Municipal | Parcel dataset | City of Belleville property parcel layer with roll and addressing attributes — export CSV/GeoJSON or use ArcGIS Hub API. | https://opendata-bellevillegis.hub.arcgis.com/datasets/parcels-1 |
| Clarington — Public Map Gallery | Clarington · Municipal | Interactive map | Search properties by address, roll or PIN number; view assessment and zoning by-law information, aerial photos, with measuring, drawing and print tools. | https://public-map-gallery-clarington.hub.arcgis.com/ |
| Clarington Municipal Planning Data Reports | Clarington · Municipal | Planning application statistics | Quarterly PDF reports of planning applications received and decided, housing units proposed and approved — per Ontario Regulation 73/23. | https://www.clarington.net/planning-and-development/municipal-planning-data-report/ |
| Cornwall — Maps & Interactive Map Gallery | Cornwall · Municipal | Interactive map | Central hub of interactive and printable maps covering zoning, transit routes, parks, trails, heritage sites, child-care centres, traffic counts and the Official Plan. | https://www.cornwall.ca/en/build-invest/maps/ |
| Cornwall Official Plan Land Use Open Data | Cornwall · Municipal | Land use dataset | Official Plan Schedule 1 land-use polygons for Cornwall — download shapefile/GeoJSON or query via ArcGIS REST from the open data catalogue. | https://data-cornwallcity.opendata.arcgis.com/datasets/official-plan-schedule1-landuse |
| Greater Sudbury Open Data — Building Permits | Greater Sudbury · Municipal | Dataset | Listing of all building permits from the city's Pronto/Accela permit system of record. Download as CSV, GeoJSON, or Shapefile, or query via ArcGIS REST API. Use to track construction activity, permit types, and development trends across Greater Sudbury. CC-BY-SA licensed. First planning-zoning depth entry for Greater Sudbury beyond its open-data portal. | https://opendata.greatersudbury.ca/datasets/Sudbury::building-permits |
| Greater Sudbury Open Data — Zoning | Greater Sudbury · Municipal | Dataset | Zoning, community, township, and parcel boundary layer for the entire City of Greater Sudbury. Download as CSV, GeoJSON, or Shapefile, or query via ArcGIS REST API. Look up the zoning designation for any property to understand permitted land uses and development constraints. CC-BY-SA licensed. Complements the building permits dataset for comprehensive planning research. | https://opendata.greatersudbury.ca/datasets/Sudbury::zoning |
| Hamilton Building Permits Open Data | Hamilton · Municipal | Building permits dataset | Issued building permits and related planning datasets on Open Hamilton — filter, map, and download via ArcGIS Hub. | https://open.hamilton.ca/datasets?q=building%20permit |
| Hamilton Development Applications Open Data | Hamilton · Municipal | Development applications | Active development applications and planning status layers published on the City of Hamilton open data portal. | https://open.hamilton.ca/datasets?q=development%20application |
| Kingston Building Permits — ArcGIS Hub | Kingston · Municipal | Dataset | Geocoded building permit dataset for City of Kingston showing active permits (last 3 years) and closed permits (last 18 months) with addresses, permit values, project descriptions, and status. Download as GeoJSON or explore on interactive map — useful for tracking construction activity and development in specific neighbourhoods. | https://maps-cityofkingston.hub.arcgis.com/datasets/cityofkingston::building-permits/about |
| Kitchener — OnPoint Interactive Mapping | Kitchener · Municipal | Interactive map | One-stop GIS viewer: look up zoning, active building permits, traffic closures, city-owned water/storm/sewer infrastructure, trails, bikeways and parks with aerial imagery. | https://maps.kitchener.ca/OnPointExternal/RMap/Default.aspx |
| Markham — Interactive Zoning Map | Markham · Municipal | Interactive map | Search any Markham address to view zoning designations under the Comprehensive Zoning By-Law. Interactive ArcGIS Experience app showing permitted uses, development standards, and appeal status. | https://experience.arcgis.com/experience/c0f5d5fa61004716b88adbc0c804614a |
| Markham — MappiT Development Application Viewer | Markham · Municipal | Interactive map | Look up development applications and tree removal permits by address, status, ward or application type, with detail, map and results tally views. | https://markham.maps.arcgis.com/apps/dashboards/891da101b4a348859874886aeef70d79 |
| Mississauga — Active Development Applications Map | Mississauga · Municipal | Development application map | Track Mississauga development applications on a real-time map — view renderings of proposed buildings, submission documents and upcoming public meetings. | https://www.mississauga.ca/services-and-programs/planning-and-development/development-applications/active-development-applications/ |
| Mississauga Building Permits Open Data | Mississauga · Municipal | Building permits | Search and download Mississauga building permit data from the open data catalogue with API access. | https://data.mississauga.ca/browse?category=Building+Permits |
| Orillia Zone Mapping Feature Service | Orillia · Municipal | Zoning map service | Orillia zoning by-law zone polygons via County of Simcoe ArcGIS FeatureServer — query JSON/GeoJSON or export for GIS analysis. | https://maps.simcoe.ca/arcgis/rest/services/Orillia/Zone_Mapping/FeatureServer |
| Ottawa Development Applications Map | Ottawa · Municipal | Development applications map | Query development applications subject to public consultation on a map; links to posting plans. ArcGIS REST supports JSON and GeoJSON export. | https://maps.ottawa.ca/arcgis/rest/services/Development_Applications/MapServer |
| Ottawa Zoning Map Service | Ottawa · Municipal | Zoning map | Official City of Ottawa zoning layers including by-law zones, overlays, and village plans. Export and identify parcels via ArcGIS map service. | https://maps.ottawa.ca/arcgis/rest/services/Zoning/MapServer |
| Peterborough — e-Maps 3.0 Interactive Map | Peterborough · Municipal | Interactive map | Public web map with zoning, transit, trails, traffic, waste collection and recreation layers, plus aerial photography from 1956 to the present. | https://experience.arcgis.com/experience/18114d04929c43f1a302a35bc80be849 |
| Richmond Hill — Active Development Application Map | Richmond Hill · Municipal | Interactive map | View and search active development applications (OPA, zoning by-law, subdivision, condominium, site plan) by municipal address or application type. | https://experience.arcgis.com/experience/495f8d24507c42a2bcb182ad2710490e |
| Sarnia Residential Development Pipeline Dashboard | Sarnia · Municipal | Development pipeline dashboard | Interactive dashboard of Council-approved residential units via zoning amendments, OPA, and site plan — filter by project status and map location. | https://www.sarnia.ca/business-planning-and-development/residential-development-pipeline/ |
| St. Thomas CMAP Interactive City Maps | St. Thomas · Municipal | Interactive zoning map | CartoVista web map for St. Thomas — zoning, property, and city map layers for parcel and planning lookups. | https://cmap2.stthomas.ca/CartoVistaServer/maps/view |
| Thunder Bay — Property Information & Development Map | Thunder Bay · Municipal | Interactive map | Parcel lookup combining assessment, legal description, dwelling-unit count, zoning, Official Plan designation and garbage day cycle, plus a building-activity layer from 2014. | https://experience.arcgis.com/experience/ec7df78a1a7642f397655c84c4741e98 |
| Toronto Application Information Centre | Toronto · Municipal | Development application search | Map-based search for active and closed development applications, Committee of Adjustment minor variances, rezonings, and site plan control with downloadable supporting documents. | https://www.toronto.ca/city-government/planning-development/application-information-centre/ |
| Toronto Building Permits — Cleared Permits | Toronto · Municipal | Building permits dataset | Download cleared building permits since 2000 as CSV or JSON — permit type, dates, address, and construction value for completed permits. | https://open.toronto.ca/dataset/building-permits-cleared-permits/ |
| Toronto Development Applications (IBMS) | Toronto · Municipal | Development application tracker | Point layer of active planning applications with status, type, hearing dates, and links to application details. Queryable via ArcGIS FeatureServer. | https://gis.toronto.ca/arcgis/rest/services/cot_geospatial11/FeatureServer/60 |
| Toronto Zoning By-law Map | Toronto · Municipal | Zoning map | Zoning area polygons, overlays, and labels for Toronto properties. Use with City planning layers for land-use and height rules. | https://gis.toronto.ca/arcgis/rest/services/cot_geospatial11/FeatureServer/3 |
| Vaughan — PLANit Viewer (Development Applications) | Vaughan · Municipal | Interactive map | Search and view proposed developments across Vaughan by address, filter by status, and inspect planning application details, zoning and land-use layers. | https://experience.arcgis.com/experience/53492fb12cb84f17bb8385353cc4df56 |
| Waterloo — Interactive Zoning Map | Waterloo · Municipal | Interactive map | Enter an address to find the zoning category and zone name of any Waterloo property, plus ward, closures and aerial imagery layers. | https://maps.waterloo.ca/html5viewer/?viewer=waterlooviewer&layerTheme=Zoning&runWorkflow=ZoningSearch |
| Whitby Zoning By-law Interactive Map | Whitby · Municipal | Interactive map | Interactive web app to look up zoning by-law designations for any property in Whitby. Search by address or click on the map to see the applicable zone category, permitted uses, and by-law references. Useful for property owners, developers, real estate researchers, and urban planning analysis. Hosted on the Whitby GeoHub ArcGIS platform. First planning-zoning depth entry for Whitby beyond its GeoHub portal. | https://whitby.maps.arcgis.com/apps/instant/sidebar/index.html?appid=fe85cfc5d68a4661b4ececa3027e1541 |
| Oxford County Zoning Open Data (Woodstock) | Woodstock · Municipal | Zoning map service | Consolidated lower-tier municipal zoning for Oxford County including Woodstock — query MapServer layer or download via Oxford County Open Data Hub. | https://public.oxfordcounty.ca/gis/rest/services/OpenData/OXFORD_OpenData/MapServer/2 |

### Quebec

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Gatineau — Statistiques sur les permis de construction | Gatineau · Municipal | Building permit statistics | Annual and monthly building permit statistics published by Gatineau — counts and values for construction activity tracking. | https://www.gatineau.ca/portail/default.aspx?p=publications_cartes_statistiques_donnees_ouvertes%2Fstatistiques_permis_construction |
| Laval — Info-règlements (Grilles de zonage) | Laval · Municipal | Outil de consultation | Look up zoning type, permitted uses, and exception grids for any address or cadastral lot in Laval's urban planning code. | https://info-reglements.laval.ca/consultation/grilles/ |
| Lévis Zonage — Données Québec | Lévis · Municipal | Zoning dataset | Municipal zoning boundaries for Lévis — download GeoJSON, shapefile, or FGDB; updated on Données Québec with CC-BY licence. | https://www.donneesquebec.ca/recherche/fr/dataset/6cd041e3-902c-469e-a863-e54f4df966f2 |
| Longueuil — Industrial Zones | Longueuil · Municipal | Dataset | GeoJSON/Shapefile download mapping industrial zones across Longueuil. Useful for site selection, economic development research, and land-use planning. | https://geohub-longueuil.opendata.arcgis.com/datasets/zones-industrielles/explore |
| Montreal Building Permits Open Data | Montreal · Municipal | Building permits dataset | Construction, transformation, and demolition permits issued by Montreal boroughs — download CSV, GeoJSON, or SHP from Données Montréal. | https://donnees.montreal.ca/dataset/permis-construction |
| Quebec City Building Permits Open Data | Quebec City · Municipal | Building permits | Quebec City construction and renovation permits on the municipal open data portal. | https://www.donneesquebec.ca/recherche/dataset?organization=ville-de-quebec |
| Repentigny — Plan de zonage interactif | Repentigny · Municipal | Carte interactive | Interactive zoning map of Repentigny: search by address or zone number to view applicable regulations and usage grids. | https://repentigny.maps.arcgis.com/apps/instant/sidebar/index.html?appid=e387d026f0524052bf4ebc6ff87733b2 |
| Saguenay Zonage — Données Québec | Saguenay · Municipal | Zoning dataset | Saguenay municipal zoning polygons — weekly-updated CSV, GeoJSON, and shapefile downloads via Données Québec. | https://www.donneesquebec.ca/recherche/dataset/sag_zonage |
| Sherbrooke — Cartes interactives (hub) | Sherbrooke · Municipal | Portail cartographique | Central hub for 10+ interactive maps: zoning, cadastre, sports fields, bike paths, power outages, public safety, and river water quality. | https://www.sherbrooke.ca/fr/services-a-la-population/cartes-interactives |
| Trois-Rivières — Carte interactive municipale | Trois-Rivières · Municipal | Carte interactive | Interactive map of municipal buildings, sports facilities, parks, community spaces, cycling network, and live traffic disruptions. | https://www.v3r.net/carte-interactive/ |
| Trois-Rivières Zonage — Données Québec | Trois-Rivières · Municipal | Zoning dataset | Municipal zoning layer for Trois-Rivières — export CSV, GeoJSON, or shapefile from Données Québec; aligns with urban planning by-law. | https://www.donneesquebec.ca/recherche/fr/dataset/85fa8f51-28f6-4163-9d96-eab0b185ec10 |

### Atlantic Canada (NB, NS, PE, NL)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Municipal and Community Affairs — Land Use Planning Registry | Newfoundland and Labrador · Provincial | Planning registry | A–Z register of municipal plans and development regulations in legal effect, with PDF plans and KMZ zoning maps for every NL municipality. | https://www.gov.nl.ca/mca/registry/reglist/ |
| Newfoundland and Labrador — Provincial Land Use Atlas | Newfoundland and Labrador · Provincial | Interactive map | Interactive map of Crown land titles and applications, municipal plans, protected road zoning and land use restrictions across the province, with topographic base maps and aerial photography. | https://geohub-gnl.hub.arcgis.com/app/provincial-land-use-atlas-lua |
| CBRM Parcel Finder | Cape Breton · Municipal | Parcel map service | Cape Breton Regional Municipality parcel and property lookup via municipal GIS ParcelFinder map services. | https://gis2.cbrm.ns.ca/server/rest/services/ParcelFinder |
| CBRM Planning GIS Services | Cape Breton · Municipal | Planning map services | CBRM planning department GIS map services — zoning and land-use layers via ArcGIS REST for Cape Breton Regional Municipality. | https://gis2.cbrm.ns.ca/server/rest/services/Planning |
| Corner Brook — Construction Map | Corner Brook · Municipal | Interactive map | Interactive ArcGIS map of active construction and development projects across the City of Corner Brook, showing locations and project details. | https://www.cornerbrook.com/construction-map/ |
| Fredericton — Zoning & Land Use Interactive Map | Fredericton · Municipal | Interactive map | Look up the zoning of any Fredericton property by address: click or search an address to see which zone applies and get a detailed zone description. | https://www.fredericton.ca/business-development/planning-development/zoning-land-use |
| Gander Interactive GIS Map | Gander · Municipal | GIS | Interactive ArcGIS web map for the Town of Gander showing zoning, property parcels, municipal infrastructure, recreation facilities, and utilities. Explore property boundaries and land use plans. | https://experience.arcgis.com/experience/d5dedd13d8314050adfaf9f5c6477d87?id=15beb6756481449aad161fb752a99611 |
| Moncton Development Applications Map | Moncton · Municipal | Development applications map | Interactive ArcGIS web map of Moncton development applications and planning layers for public review. | https://moncton.maps.arcgis.com/apps/webappviewer/index.html?id=c402455fb01445c7aefd359d59f11b63 |
| New Glasgow Ward Map | New Glasgow · Municipal | Ward map | PDF ward boundary map for the Town of New Glasgow showing six municipal council districts as of September 2024. | https://www.newglasgow.ca/filelink/fileman-files/visitors/Ward%20Map/TNG_Ward_Map_September_2024.pdf |
| Corner Brook Land Use Planning Registry | Newfoundland and Labrador · Municipal | Planning registry | Corner Brook municipal plan, zoning maps (PDF/KMZ), and development regulations via the provincial land use planning registry. | https://www.gov.nl.ca/mca/registry/community/corner-brook/ |
| Saint John — Building Permits Dataset | Saint John · Municipal | Dataset | Downloadable dataset of building permits issued in Saint John, NB. Includes permit type, address, issue date, and construction value. Available as CSV and shapefile for analysis of development patterns in Atlantic Canada. | https://catalogue-saintjohn.opendata.arcgis.com/datasets/building-permits |
| Saint John — Zoning Dataset | Saint John · Municipal | Dataset | Polygon features representing zoning districts as per the Saint John Zoning By-law. Attributes include zoning codes and descriptions. Downloadable as GeoJSON, Shapefile, or KML via ArcGIS Hub. | https://catalogue-saintjohn.opendata.arcgis.com/datasets/SaintJohn::zoning/about |
| St. John's MapCentre | St. John's · Municipal | Interactive map | Interactive GIS mapping portal for St. John's — search addresses, view property parcels, zoning, heritage areas, floodplains, wetlands, electoral wards, and aerial photos dating back to 2003. Useful for real estate research, urban planning, and community organizing. | https://map.stjohns.ca/mapcentre/ |
| St. John's Permits Issued | St. John's · Municipal | Building permits | Weekly lists of building and repair permits issued by the City of St. John's, posted as part of the public record. Download PDFs by date to track development activity, new construction, and renovations. | https://www.stjohns.ca/en/building-development/permits-issued.aspx |
| Stratford — Interactive Zoning Map | Stratford · Municipal | Interactive map | Search any address on the colour-coded zoning map to see the applicable Town of Stratford zone: residential, commercial, mixed use, industrial, open space. | https://shape.townofstratford.ca/interactive-zoning-map/ |
| Yarmouth Interactive Zoning Map | Yarmouth · Municipal | Zoning map | Interactive ArcGIS zoning lookup for properties in the Town of Yarmouth — search by address or parcel to view zoning district, land use rules, and permitted uses. | https://experience.arcgis.com/experience/9aab24710afb426c81561c0af384ec5c |

### Northern Canada (YT, NT, NU)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Nunavut Planning Commission — Public Registry | Nunavut · Provincial | Land-use registry | Search Nunavut land-use project proposals on a map or by keyword and region — proposal notices, documents, schedules and comment periods, with new-document email alerts. | https://lupit.nunavut.ca/portal/registry/ |
| WhitehorseMap | Whitehorse · Municipal | GIS | Interactive web-based GIS mapping tool for the City of Whitehorse with layers for planning, engineering, transportation, parks, utilities, and administration. Explore property boundaries, zoning, infrastructure, and public facilities. | https://gisext.whitehorse.ca/gis.php |

## 🏛️ Council, Democracy & Transparency

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| House of Commons — Vote Records | Canada · Federal | Vote tracker | Every recorded vote in the House of Commons with each MP's position, browsable by parliament and session and downloadable as open XML data. | https://www.ourcommons.ca/members/en/votes |
| LEGISinfo — Federal Bill Tracker | Canada · Federal | Legislation tracker | Tracks every federal bill through Parliament: full text at each stage, sponsor, legislative summaries, votes, coming-into-force data, with JSON/XML/RSS exports back to the 35th Parliament (1994). | https://www.parl.ca/legisinfo/en/bills |
| Orders in Council Database | Canada · Federal | Search database | Privy Council Office's searchable database of all federal Orders in Council from 1990 to present, with full text from late 2002 onward, published three working days after approval. | https://orders-in-council.canada.ca/ |

### British Columbia

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Abbotsford Council — Agendas, Minutes & Video | Abbotsford · Municipal | Council meetings | City of Abbotsford council and committee meeting portal with downloadable PDF agendas and minutes via eScribe and CivicWeb document repositories, plus a live stream and recorded video of council meetings. Browse by meeting date to track motions, decisions, public hearings, and delegations; download the 2026 council meeting calendar as a PDF. | https://www.abbotsford.ca/city-hall/council-committee-meetings/agendas-minutes-and-videos |
| Burnaby Council — eScribe Agendas, Minutes & Video | Burnaby · Municipal | Council meetings | City of Burnaby council meetings hub with an eScribe searchable agenda and minutes portal, live-streamed and recorded council meetings via the city's video system, and historical minutes back to 2015 through the Heritage Burnaby archive. Download 2026 council and advisory body meeting calendars as PDFs; browse agendas, minutes, and reports by meeting date to track votes, public hearings, and decisions. | https://www.burnaby.ca/our-city/meetings-and-public-hearings |
| Chilliwack — Council Agendas & Minutes (eScribe) | Chilliwack · Municipal | Council portal | Searchable eScribe meeting portal for Chilliwack with downloadable PDF agendas, minutes, and supporting documents for regular, special, and committee meetings. Verified live. Discovered via the documented pub-[city].escribemeetings.com pattern and verified live. | https://pub-chilliwack.escribemeetings.com/ |
| Coquitlam — Council Agendas & Minutes (eScribe) | Coquitlam · Municipal | Council meetings portal | Searchable City of Coquitlam council agendas, minutes, and attachments on the public eScribe portal. Includes Regular Council and Special Council meetings with downloadable PDFs. | https://pub-coquitlam.escribemeetings.com/ |
| Courtenay — Council Agendas & Minutes (eScribe) | Courtenay · Municipal | Council meetings portal | Searchable eScribe portal for City of Courtenay council and committee agendas, minutes, and attachments. Calendar-based search with PDF and HTML agenda formats, plus links to meeting reports. First council depth entry for Courtenay. | https://www.courtenay.ca/city-hall/mayor-and-council/council-meetings |
| Delta Council Agendas & Minutes (eScribe) | Delta · Municipal | Meeting portal | eScribe public meeting portal for City of Delta council meetings. Searchable agendas, minutes, and attachments with PDF downloads. Browse upcoming and past regular and special council meetings. | https://pub-delta.escribemeetings.com/?FillWidth=1 |
| Kamloops — Council Agendas & Minutes (CivicWeb) | Kamloops · Municipal | Council meetings portal | Searchable CivicWeb document portal for City of Kamloops council and committee agendas, minutes, and reports. Browse by meeting date and document type to download PDF agendas, minutes, and attachments. Includes direct links to the Council Calendar and file repository. First council entry for this interior BC city. | https://kamloops.civicweb.net |
| Kelowna Council Meetings | Kelowna · Municipal | Council meetings | Kelowna City Council meeting schedules, agendas, minutes, and video recordings for council and standing committees. | https://www.kelowna.ca/city-hall/council/council-meetings-public-hearings |
| Maple Ridge — Council Agendas & Minutes (eScribe) | Maple Ridge · Municipal | Council meetings portal | Searchable eScribe portal for City of Maple Ridge council and committee agendas, minutes, and attachments. Includes Regular Council, Committee of the Whole, Audit and Finance Committee, Advisory Design Panel, Agricultural Advisory Committee, Bicycle Advisory Committee, Board of Variance, Climate and Environment Advisory Committee, Community Heritage Commission, Corporate Governance and HR Committee, and others. First council entry for this Metro Vancouver city. | https://pub-mapleridge.escribemeetings.com |
| Nanaimo — Council Meeting Video Archive (ISILive) | Nanaimo · Municipal | Video archive | ISILive video portal archiving City of Nanaimo Council, Committee, and Public Hearing meetings. Full-length recordings with searchable agendas and minutes linked alongside each video. Track council decisions, public delegations, and voting records without attending in person. First council depth entry for Nanaimo. | https://video.isilive.ca/nanaimo/VICC.html |
| Prince George — Council Agendas & Minutes (eScribe) | Prince George · Municipal | Council meetings portal | Searchable City of Prince George council agendas, minutes, and attachments on the public eScribe portal. Includes regular council, special council, budget council, and advisory committee meetings. | https://pub-princegeorge.escribemeetings.com/ |
| Saanich — Council Agendas & Minutes | Saanich · Municipal | Council meetings portal | Meeting schedule, agendas, and minutes for District of Saanich Council and committees. Includes archived agendas and minutes from 2017 onward, a council voting dashboard, downloadable PDF meeting calendars, and live video streams. | https://www.saanich.ca/EN/main/local-government/mayor-council/schedule-agendas-minutes.html |
| Vancouver Council Voting Records | Vancouver · Municipal | Vote dataset | Download individual council, committee, and public hearing votes as open data — filter by member, meeting date, and motion outcome. | https://opendata.vancouver.ca/explore/dataset/council-voting-records/ |
| Victoria Council Meetings and Agendas | Victoria · Municipal | Council meetings | City of Victoria council and committee meeting calendars, agendas, minutes, and webcasts for current and archived sessions. | https://www.victoria.ca/city-government/mayor-council/council-committee-meetings |

### Alberta

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Airdrie — Council Agendas & Minutes (eScribe) | Airdrie · Municipal | Council meetings portal | Searchable City of Airdrie council agendas, minutes, and attachments on the public eScribe portal. Includes Council Meeting, Council Budget Committee, and Special Council meetings with downloadable PDFs. | https://pub-airdrie.escribemeetings.com/ |
| Banff — Council Agendas & Minutes (eScribe) | Banff · Municipal | Meeting portal | eScribe portal for Banff Town Council, Annual Organizational Meeting, and Governance and Finance Committee meetings. Searchable agendas, minutes, and reports with downloadable PDFs. | https://pub-banff.escribemeetings.com/ |
| Calgary Council Agendas, Minutes and Video | Calgary · Municipal | Agendas and minutes | Browse council and committee agendas, HTML minutes with timestamped video links, and the Council Vote Dashboard after minutes are confirmed. | https://www.calgary.ca/council/meetings/agenda-minutes.html |
| Calgary Council and Committee Votes | Calgary · Municipal | Vote dataset | Open Calgary dataset of council and committee votes with motion text, outcomes, and member votes. API and CSV export available. | https://data.calgary.ca/Government/Council-and-Committee-Votes/ruq3-99hx |
| Canmore Council Agendas, Minutes & Video | Canmore · Municipal | Meeting portal | Town of Canmore council meeting agendas, minutes, and video webcasts. Access current and archived council sessions, Planning Commission, and committee meetings. Meeting videos posted on the Town's YouTube channel. | https://www.canmore.ca/your-government/council/your-council/councilmeetings |
| Edmonton Council Meetings (eScribe) | Edmonton · Municipal | Agendas and minutes | Published council and committee agendas, minutes, and attachments with calendar search on the City of Edmonton eScribe portal. | https://pub-edmonton.escribemeetings.com/ |
| Edmonton Council Voting Record (2021–2025) | Edmonton · Municipal | Vote dataset | Council and committee voting records with motion details from the Edmonton Open Data Portal — filter and export via Socrata API. | https://data.edmonton.ca/City-Administration/2021-2025-Council-And-Committee-Meetings-Voting-Re/ekzq-b4qg |
| Grande Prairie Council Meeting Video Archive | Grande Prairie · Municipal | Council video archive | YouTube archive of Grande Prairie City Council and standing committee meetings including Investment & Strategy, Public & Protective Services, Financial & Administrative Services, and Operational Services committees. | https://www.youtube.com/user/GrandePrairieCA/ |
| Lethbridge — Council Agendas & Minutes (eScribe) | Lethbridge · Municipal | Council meetings portal | Searchable City of Lethbridge council and committee agendas, minutes, and attachments on the public eScribe portal. Includes regular council, special council, and committee meetings with downloadable PDFs. First council entry for this southern Alberta city. | https://pub-lethbridge.escribemeetings.com/ |
| Medicine Hat City Council Meetings | Medicine Hat · Municipal | Council meetings | Medicine Hat City Council agendas, minutes, and meeting schedules. | https://www.medicinehat.ca/government-city-hall/mayor-city-council-administration/agendas-minutes/ |
| Okotoks — Council Agendas & Minutes (eScribe) | Okotoks · Municipal | Council portal | Searchable eScribe meeting portal for Okotoks with downloadable PDF agendas, minutes, and supporting documents for regular, special, and committee meetings. Verified live. Discovered via the documented pub-[city].escribemeetings.com pattern and verified live. | https://pub-okotoks.escribemeetings.com/ |
| Red Deer City Council Meetings | Red Deer · Municipal | Council meetings | Red Deer City Council agendas, minutes, and meeting video. | https://www.reddeer.ca/city-government/mayor-and-city-councillors/council-meetings-and-schedule/ |
| St. Albert — Council Agendas & Minutes (Legistar) | St. Albert · Municipal | Meeting portal | Granicus Legistar calendar and document portal for St. Albert Council, Special Council, and Standing Committee meetings. Searchable agendas, minutes, video recordings, and legislation from 2016 to present. | https://stalbert.ca.legistar.com/Calendar.aspx |
| Strathcona County — Council Agendas & Minutes (eScribe) | Strathcona County · Municipal | Meeting portal | eScribe portal for Strathcona County Council and Priorities Committee meetings. Searchable agendas, minutes, and meeting packages with downloadable PDFs and live webcast integration. | https://pub-strathcona.escribemeetings.com/ |

### Saskatchewan

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Ministry of Government Relations — Municipal Directory Search | Saskatchewan · Provincial | Lookup tool | Look up any Saskatchewan municipality's office address, phone number and list of elected officials — cities, towns, villages and rural municipalities. | https://www.saskatchewan.ca/government/municipal-administration/municipal-directory/search |
| Estevan — Council Agendas & Minutes | Estevan · Municipal | Council documents | Downloadable PDF agendas and minutes for Estevan City Council regular meetings. Current 2026 meetings available with archived records going back several years. First council democracy entry for this Saskatchewan energy-sector city. | https://estevan.ca/council-meetings-and-agendas-2-2/ |
| Humboldt — Council & Executive Committee Minutes and Agendas | Humboldt · Municipal | Council meetings portal | Direct PDF downloads of City of Humboldt council and executive committee agendas and minutes. Includes regular council, special council, and executive committee meetings. Updated monthly with current agenda packages. | https://humboldt.ca/council-and-executive-committee-minutes-and-agendas/ |
| Lloydminster — Council Agendas & Minutes (eScribe) | Lloydminster · Municipal | Council portal | Searchable eScribe meeting portal for Lloydminster with downloadable PDF agendas, minutes, and supporting documents for regular, special, and committee meetings. Verified live. Discovered via the documented pub-[city].escribemeetings.com pattern and verified live. | https://pub-lloydminster.escribemeetings.com/ |
| Moose Jaw — Council Agendas & Minutes (eScribe) | Moose Jaw · Municipal | Council meetings portal | Searchable City of Moose Jaw council and committee agendas, minutes, and attachments on the public eScribe portal. Includes regular council, special council, and executive committee meetings with downloadable PDFs. First council entry for this Saskatchewan city. | https://pub-moosejaw.escribemeetings.com/ |
| North Battleford — Council Agendas & Minutes (eScribe) | North Battleford · Municipal | Council meetings portal | Searchable City of North Battleford council agendas, minutes, and attachments on the public eScribe portal. Includes regular and special council meetings. | https://pub-northbattleford.escribemeetings.com/ |
| Prince Albert — Council Agendas & Minutes (eScribe) | Prince Albert · Municipal | Council meetings portal | Searchable eScribe portal for City of Prince Albert council and committee agendas, minutes, and attachments. Includes City Council Regular Meeting, Special Meeting, First Meeting, Budget Committee, Board of Revision, Community Services Advisory Committee, and Destination Marketing Levy Advisory Committee. Calendar-based search with PDF downloads. First council entry for this Saskatchewan city. | https://pub-citypa.escribemeetings.com |
| Regina Council Meetings | Regina · Municipal | Council meetings | Regina City Council meeting agendas, minutes, and video for council and board sessions. | https://www.regina.ca/city-government/city-council/council-meetings/ |
| Saskatoon Council Meetings | Saskatoon · Municipal | Council meetings | Saskatoon City Council and committee agendas, minutes, and meeting videos with calendar search. | https://www.saskatoon.ca/council |
| Weyburn — Council Meeting Video Archive | Weyburn · Municipal | Video archive | YouTube archive of Weyburn City Council regular and special meeting videos, with timestamps. Covers meetings from 2023–present. Useful for citizens, journalists, and researchers who want to review council deliberations, public hearings, and votes without attending in person. First council depth entry for Weyburn beyond its building permit reports. | https://www.youtube.com/channel/UCOEjIuL-2e_jCf2lJa2m02A |
| Yorkton — Council Agendas & Minutes (eScribe) | Yorkton · Municipal | Council meetings portal | Searchable City of Yorkton council agendas, minutes, and attachments on the public eScribe portal. Includes regular council meetings. | https://pub-yorkton.escribemeetings.com/ |

### Manitoba

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Brandon City Council Meetings | Brandon · Municipal | Council meetings | Brandon City Council agendas, minutes, and meeting video. | https://www.brandon.ca/city-hall/mayor-and-council/ |
| Brandon Council Agendas and Minutes | Brandon · Municipal | Council meetings | Downloadable PDF agendas and minutes for City of Brandon regular and special Council meetings, January 2026 to present (archive back to 2020). Browse by meeting date to track motions, decisions, and public delegations for Manitoba's second-largest city. | https://www.brandon.ca/city-hall/agendas-and-minutes |
| Portage la Prairie Council Agendas & Minutes | Portage la Prairie · Municipal | Dataset | PDF council agendas and minutes for all regular and special council meetings. Agendas include committee reports and staff presentations; minutes record resolutions and decisions. | https://www.city-plap.com/council-administration/council/agendas-and-minutes/ |
| Selkirk Council & Committee Minutes (CivicWeb) | Selkirk · Municipal | Council meetings | Searchable CivicWeb document portal for City of Selkirk council and committee agendas, minutes, and reports. Browse by meeting date and document type to download PDF agendas and track motions, decisions, and public hearings for this Manitoba city of ~10,000. First council data source for Selkirk. | https://selkirk.civicweb.net/Portal/ |
| Steinbach Council Minutes & Videos | Steinbach · Municipal | Dataset | PDF council minutes and video recordings of council meetings dating back to 2022. Minutes include voting records and council package documents. Updated after each regular council meeting (twice monthly). | https://www.steinbach.ca/city-hall/city-council/archive/ |
| Thompson — Council Agendas & Minutes (AllNetMeetings) | Thompson · Municipal | Council portal | Searchable AllNetMeetings portal with agendas, minutes, and attachments for Thompson council meetings, committees, and public hearings. Browse 1,200+ meetings by type and date, with downloadable PDF agendas and minutes. Also includes video preview links for recent meetings. First council depth entry for Thompson beyond its financial reports page. | https://thompson.allnetmeetings.com/pubs/agendaCategories.aspx |
| Winnipeg Council Meetings — eScribe | Winnipeg · Municipal | Council meetings portal | Winnipeg City Council and standing policy committee agendas, minutes, and video on eScribe. | https://legacy.winnipeg.ca/council/ |
| Winnipeg Council Voting Information System | Winnipeg · Municipal | Vote search | Search council and executive policy committee votes by meeting date, item number, or keyword instead of scrolling through PDF minutes. | https://winnipeg.ca/council/VIS/ |

### Ontario

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Region of Waterloo Council Meetings | Waterloo · Regional | Regional council meetings | Regional Municipality of Waterloo council and committee agendas, minutes, and webcasts. | https://www.regionofwaterloo.ca/government-and-council/council/ |
| Barrie Council Meeting Video Archive | Barrie · Municipal | Video archive | Official YouTube channel archiving City of Barrie Council, General Committee, Finance & Responsible Governance, Infrastructure, and Affordability Committee meeting recordings, posted regularly through 2026. Full-length videos searchable by date — complements the existing eScribe agendas portal for tracking votes and debates. | https://www.youtube.com/@cityofbarrie |
| Barrie Council Meetings — eScribe | Barrie · Municipal | Council meetings portal | Barrie City Council and committee agendas, minutes, and attachments on the public eScribe portal. | https://pub-barrie.escribemeetings.com/ |
| Belleville CivicWeb Council Portal | Belleville · Municipal | Council agendas and minutes | Searchable council and committee agendas, minutes, and attachments for City of Belleville — subscribe to meeting email alerts. | https://citybellevilleon.civicweb.net/Portal/MeetingTypeList.aspx |
| Brampton Council and Committees — eScribe | Brampton · Municipal | Council meetings portal | Search Brampton City Council and committee agendas, minutes, attachments, and video on the eScribe public meetings portal. | https://pub-brampton.escribemeetings.com/ |
| Brantford Council Agendas and Minutes | Brantford · Municipal | Council meetings | Downloadable PDF agenda packages and minutes for City of Brantford Council, Committee of the Whole, and Committee of Adjustment meetings. Browse by meeting date to track motions, decisions, and public delegations; a live meeting calendar is at calendar.brantford.ca/meetings. First council data source for Brantford, Ontario. | https://www.brantford.ca/your-government/city-council/agendas-and-minutes/ |
| Caledon — Council Agendas & Minutes (eScribe) | Caledon · Municipal | Council portal | Searchable eScribe meeting portal for Caledon with downloadable PDF agendas, minutes, and supporting documents for regular, special, and committee meetings. Verified live. Discovered via the documented pub-[city].escribemeetings.com pattern and verified live. | https://pub-caledon.escribemeetings.com/ |
| Cambridge Council Meeting Video Archive | Cambridge · Municipal | Video archive | Official YouTube channel archiving City of Cambridge Council, Special Council, and Planning & Statutory Public Meeting recordings, posted regularly through 2026. Full-length meeting videos searchable by date — track council decisions, public hearings, and development approvals without attending in person. | https://www.youtube.com/@CityofCambridgeOn |
| Clarington — Council Agendas & Minutes (eScribe) | Clarington · Municipal | Council portal | Searchable eScribe meeting portal for Clarington with downloadable PDF agendas, minutes, and supporting documents for regular, special, and committee meetings. Verified live. Discovered via the documented pub-[city].escribemeetings.com pattern and verified live. | https://pub-clarington.escribemeetings.com/ |
| Collingwood — Council & Committee Meetings (eScribe) | Collingwood · Municipal | Council meetings portal | Searchable eScribe portal for Town of Collingwood council and committee meetings. Browse by year to download PDF agendas, minutes, and reports. Complemented by council meeting calendar, attendance records, and voting record PDFs on the town website. | https://pub-collingwood.escribemeetings.com/ |
| Cornwall Council Minutes Open Data | Cornwall · Municipal | Council minutes archive | Council minute archives from 1970 to present on Cornwall open data — searchable metadata with document links for accountability research. | https://www.cornwall.ca/opendata |
| Greater Sudbury — Council Agendas & Minutes (eScribe) | Greater Sudbury · Municipal | Council portal | Searchable eScribe meeting portal for Greater Sudbury with downloadable PDF agendas, minutes, and supporting documents for regular, special, and committee meetings. Verified live. Discovered via the documented pub-[city].escribemeetings.com pattern and verified live. | https://pub-greatersudbury.escribemeetings.com/ |
| Guelph — Council Agendas & Minutes (eScribe) | Guelph · Municipal | Council portal | Searchable eScribe meeting portal for Guelph with downloadable PDF agendas, minutes, and supporting documents for regular, special, and committee meetings. Verified live. Discovered via the documented pub-[city].escribemeetings.com pattern and verified live. | https://pub-guelph.escribemeetings.com/ |
| Haldimand County — Council Agendas & Minutes (eScribe) | Haldimand County · Municipal | Council portal | Searchable eScribe meeting portal for Haldimand County with downloadable PDF agendas, minutes, and supporting documents for regular, special, and committee meetings. Verified live. Discovered via the documented pub-[city].escribemeetings.com pattern and verified live. | https://pub-haldimandcounty.escribemeetings.com/ |
| Hamilton Council Meetings and Agendas | Hamilton · Municipal | Agendas and minutes | Council and committee agendas, minutes, and live meeting streams for the City of Hamilton. | https://www.hamilton.ca/city-council/council-committee/council-committee-meetings |
| Kingston City Council — YouTube Video Archive | Kingston · Municipal | Video archive | Official YouTube channel archiving City of Kingston Council and Committee meetings from October 2014 to present. Includes full Council, Standing Committees, Committee of Adjustment, and Design Review Panel recordings. Searchable by date and keyword — essential for tracking municipal decisions, public delegations, and voting records. | https://www.youtube.com/c/KingstonCityCouncil |
| Kitchener — Council Minutes and Reports (Laserfiche) | Kitchener · Municipal | Document repository | City of Kitchener Laserfiche WebLink repository for council and committee meeting minutes, staff reports, and approved corporate policies. Searchable and downloadable. | https://lf.kitchener.ca/WebLinkExt/Browse.aspx?dbid=0 |
| London Council and Committee Meetings | London · Municipal | Agendas and minutes | Browse London City Council and standing committee agendas, minutes, and video recordings. | https://london.ca/government/council-civic-administration/city-council |
| Markham — Council Agendas & Minutes (eScribe) | Markham · Municipal | Council portal | Searchable eScribe meeting portal for Markham with downloadable PDF agendas, minutes, and supporting documents for regular, special, and committee meetings. Verified live. Discovered via the documented pub-[city].escribemeetings.com pattern and verified live. | https://pub-markham.escribemeetings.com/ |
| Milton — Council Agendas & Minutes (eScribe) | Milton · Municipal | Council portal | Searchable eScribe meeting portal for Milton with downloadable PDF agendas, minutes, and supporting documents for regular, special, and committee meetings. Verified live. Discovered via the documented pub-[city].escribemeetings.com pattern and verified live. | https://pub-milton.escribemeetings.com/ |
| Mississauga Council and Committees — eScribe | Mississauga · Municipal | Agendas and minutes | Search council and committee agendas, minutes, and video for City of Mississauga meetings. | https://pub-mississauga.escribemeetings.com/ |
| Newmarket — Council Agendas & Minutes (eScribe) | Newmarket · Municipal | Meeting portal | eScribe portal for Newmarket Council and Committee of the Whole meetings. Searchable agendas, minutes, and reports with downloadable PDFs and livestream links. | https://pub-newmarket.escribemeetings.com/ |
| Niagara Falls — Council Agendas, Minutes & Schedule | Niagara Falls · Municipal | Council meetings portal | Access council meeting agendas, minutes, and video recordings via the City Council schedule portal and CivicWeb document repository. Subscribe to upcoming meetings and search historical records back to 2017. | https://niagarafalls.ca/city-government/city-council-and-mayor/agendas-minutes-and-schedule/ |
| Norfolk County — Council Agendas & Minutes (eScribe) | Norfolk County · Municipal | Council portal | Searchable eScribe meeting portal for Norfolk County with downloadable PDF agendas, minutes, and supporting documents for regular, special, and committee meetings. Verified live. Discovered via the documented pub-[city].escribemeetings.com pattern and verified live. | https://pub-norfolkcounty.escribemeetings.com/ |
| North Bay — Council Agendas & Minutes (eScribe) | North Bay · Municipal | Council portal | Searchable eScribe meeting portal for North Bay with downloadable PDF agendas, minutes, and supporting documents for regular, special, and committee meetings. Verified live. Discovered via the documented pub-[city].escribemeetings.com pattern and verified live. | https://pub-northbay.escribemeetings.com/ |
| Oakville — Council Agendas & Minutes (eScribe) | Oakville · Municipal | Council portal | Searchable eScribe meeting portal for Oakville with downloadable PDF agendas, minutes, and supporting documents for regular, special, and committee meetings. Verified live. Discovered via the documented pub-[city].escribemeetings.com pattern and verified live. | https://pub-oakville.escribemeetings.com/ |
| Orillia — Council Agendas & Minutes (CivicWeb) | Orillia · Municipal | Council portal | CivicWeb document portal for Orillia council and committee meetings with a meeting calendar and downloadable PDF agendas and minutes. Verified live. Discovered via the documented [city].civicweb.net pattern and verified live. | https://orillia.civicweb.net/Portal/ |
| Oshawa — Council Meetings (eScribe + Video) | Oshawa · Municipal | Council meetings portal | eScribe portal with searchable agendas, minutes, and video recordings for Oshawa City Council and committee meetings including Corporate and Finance Services, Economic and Development Services, and Planning Act meetings. | https://www.oshawa.ca/council |
| Ottawa Council Agendas and Minutes (eScribe) | Ottawa · Municipal | Agendas and minutes | Searchable council and committee agendas, minutes, attachments, and meeting videos with calendar filtering on the eScribe portal. | https://pub-ottawa.escribemeetings.com/ |
| Peterborough — Council Agendas & Minutes (eScribe) | Peterborough · Municipal | Council meetings portal | Searchable City of Peterborough council agendas, minutes, and attachments on the public eScribe portal. Includes City Council Meeting, Council Compensation Committee, and Development Charges Complaint Hearing meetings with downloadable PDFs. | https://pub-peterborough.escribemeetings.com/ |
| Pickering Council Agendas & Minutes (eScribe) | Pickering · Municipal | Meeting portal | eScribe public meeting portal for City of Pickering council and committee meetings. Searchable agendas, minutes, and reports with PDF downloads. Covers regular council, executive committee, and special meetings. | https://pub-pickering.escribemeetings.com/?FillWidth=1 |
| Richmond Hill — Council Agendas & Minutes (eScribe) | Richmond Hill · Municipal | Council meetings portal | Searchable City of Richmond Hill council agendas, minutes, and attachments on the public eScribe portal. Includes council meetings, council public meetings, special council meetings, and inaugural council meetings. | https://pub-richmondhill.escribemeetings.com/ |
| Sarnia — Council Agendas & Minutes (CivicWeb) | Sarnia · Municipal | Council meetings portal | Searchable CivicWeb document portal for City of Sarnia council and committee agendas, minutes, and reports. Browse by meeting date and document type to download PDF agendas and track motions, decisions, and public hearings. First council entry for this southwestern Ontario city. | https://sarnia.civicweb.net/Portal/ |
| St. Catharines — Council Agendas & Minutes (eScribe) | St. Catharines · Municipal | Council meetings portal | Searchable City of St. Catharines council and committee agendas, minutes, and attachments on the public eScribe portal. Browse by meeting date to download PDF agendas, minutes, and reports. First council entry for this Niagara Region city. | https://pub-stcatharines.escribemeetings.com/ |
| St. Thomas — Council Agendas & Minutes (eScribe) | St. Thomas · Municipal | Council portal | Searchable eScribe meeting portal with downloadable PDF agendas, minutes and supporting documents for St. Thomas regular, special and committee meetings. | https://pub-stthomas.escribemeetings.com/ |
| Thunder Bay Council Meetings | Thunder Bay · Municipal | Council meetings | Thunder Bay City Council meeting agendas, minutes, and webcasts. | https://www.thunderbay.ca/en/city-hall/city-council-thunder-bay.aspx |
| Timmins CivicWeb Council Portal | Timmins · Municipal | Council agendas and minutes | City of Timmins council calendar, agendas, minutes, resolutions, and by-laws — email subscription for new meeting packages. | https://timmins.civicweb.net/Portal/ |
| Toronto Council Voting Records (TMMIS) | Toronto · Municipal | Vote records | Generate councillor attendance and voting records by meeting, committee, and date range; export results as CSV from TMMIS. | https://www.toronto.ca/legdocs/tmmis/votes-and-attendance.htm |
| Vaughan — Council Agendas & Minutes (eScribe) | Vaughan · Municipal | Council portal | Searchable eScribe meeting portal for Vaughan with downloadable PDF agendas, minutes, and supporting documents for regular, special, and committee meetings. Verified live. Discovered via the documented pub-[city].escribemeetings.com pattern and verified live. | https://pub-vaughan.escribemeetings.com/ |
| Whitby Find Your Ward | Whitby · Municipal | Interactive map | Address-based ward lookup tool for Whitby residents. Enter a civic address to identify your electoral ward and corresponding councillor. Useful for voter engagement, community organizing, campaigns, and understanding municipal representation boundaries. Hosted on the Whitby GeoHub ArcGIS platform. First council/democracy depth entry for Whitby beyond its GeoHub portal. | https://whitby.maps.arcgis.com/apps/instant/sidebar/index.html?appid=08adc676adc2432e85fc05fe43e18ebe |
| Windsor Council Meetings — eScribe | Windsor · Municipal | Council meetings portal | Windsor City Council and standing committee agendas, minutes, and attachments on the public eScribe portal. | https://windsor.ca/city-hall/council-meetings |
| Woodstock — Council Agendas & Minutes (eScribe) | Woodstock · Municipal | Council portal | Searchable eScribe portal for Woodstock, Ontario council and committee meetings, including the Woodstock Accessibility Advisory Committee and Woodstock Hydro Fund Advisory Committee, with downloadable PDF agendas and minutes. | https://pub-woodstock.escribemeetings.com/ |

### Quebec

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Beloeil — Séances du conseil | Beloeil · Municipal | Council documents | Calendrier 2026, ordres du jour et procès-verbaux (2023–2026) des séances du conseil de Beloeil; séances hybrides avec webdiffusion et période de questions. | https://beloeil.ca/interagir/conseil-municipal/seances-du-conseil/ |
| Drummondville — Séances du conseil | Drummondville · Municipal | Council meetings | Ordres du jour, procès-verbaux et vidéos des séances du conseil municipal de Drummondville depuis 2016, avec archives téléchargeables et webdiffusion en direct. | https://www.drummondville.ca/mairie-et-vie-municipale/seances-du-conseil/ |
| Gatineau — Ordres du jour | Gatineau · Municipal | Council agendas | Browse Gatineau municipal council and committee agendas by year and month — includes CCU and commission meetings. | https://www.gatineau.ca/portail/default.aspx?p=publications_cartes_statistiques_donnees_ouvertes%2Fordres_jour |
| Gatineau — Procès-verbaux | Gatineau · Municipal | Council minutes | Gatineau council and committee minutes archive searchable by meeting date and body. | https://www.gatineau.ca/portail/default.aspx?p=publications_cartes_statistiques_donnees_ouvertes%2Fproces_verbaux |
| Granby — Séances du conseil municipal | Granby · Municipal | Council meetings | Ordres du jour et procès-verbaux PDF des séances du conseil de Granby, webdiffusion en direct sur MAtv/YouTube et périodes de questions citoyennes. | https://www.granby.ca/fr/ville/ville/seances-du-conseil-municipal-2026 |
| Laval Council Meetings | Laval · Municipal | Council meetings | Ville de Laval council session agendas, minutes, and video for municipal council meetings. | https://www.laval.ca/conseil-municipal/seances |
| Lévis — Ordres du jour du conseil | Lévis · Municipal | Council agendas | PDF agendas for City of Lévis council meetings — subscribe to email alerts when new agendas are published. | https://www.ville.levis.qc.ca/la-ville/conseil-municipal/ordres-du-jour/ |
| Lévis — Procès-verbaux du conseil | Lévis · Municipal | Council minutes | Council minutes and decision summaries for Lévis — published the Wednesday after each council meeting with linked decision briefs. | https://www.ville.levis.qc.ca/la-ville/conseil-municipal/proces-verbaux/ |
| Longueuil Council Meetings | Longueuil · Municipal | Council meetings | Ville de Longueuil municipal council and committee meeting schedules, agendas, minutes, and video. | https://www.longueuil.quebec/fr/services/instances-decisionnelles |
| Mascouche — Séances du conseil | Mascouche · Municipal | Council documents | Prochaines séances, ordres du jour et procès-verbaux annuels (2022–2026) du conseil municipal de Mascouche, avec abonnement aux avis texto/courriel. | https://www.ville.mascouche.qc.ca/ville/vie-democratique/seances-du-conseil |
| Repentigny Council — Agendas & Minutes | Repentigny · Municipal | Council meetings | Downloadable PDF agendas (ordre du jour) and minutes (procès-verbal) for Repentigny city council meetings, including special sessions. Direct PDF links for each meeting from 2025–2026. Useful for tracking council decisions, by-law adoptions, and zoning approvals in this Lanaudière city. First council entry for Repentigny. | https://repentigny.ca/la-ville/vie-democratique/conseil-municipal |
| Rimouski — Council Agendas & Minutes | Rimouski · Municipal | Meeting documents | Ville de Rimouski council meeting agendas (ordres du jour), approved minutes (procès-verbaux), and live webcast archives. Downloadable PDFs. | https://rimouski.ca/ville/democratie/seances-du-conseil |
| Rouyn-Noranda Council Agendas & Minutes | Rouyn-Noranda · Municipal | Council meetings | Downloadable PDF agendas (ordre du jour) and minutes (procès-verbaux) for all regular Rouyn-Noranda city council meetings. Direct PDF links for each 2026 session with no login wall. Track motions, decisions, and debates in Quebec's Abitibi-Témiscamingue region. | https://www.rouyn-noranda.ca/ville/vie-democratique/seances-conseil |
| Saguenay — Documents des conseils | Saguenay · Municipal | Council documents | Saguenay municipal and borough council agendas, minutes, and livestream archives for Chicoutimi, Jonquière, and La Baie. | https://ville.saguenay.ca/la-ville-et-vie-democratique/publications/documents-des-conseils-et-avis-publics/documents-des-conseils |
| Saint-Jérôme — Conseil municipal et comité exécutif | Saint-Jérôme · Municipal | Council portal | Portail démocratique de Saint-Jérôme : ordres du jour, procès-verbaux, webdiffusion, membres du conseil et comité exécutif, éthique et déontologie. | https://www.vsj.ca/conseil-municipal-et-comite-executif/ |
| Shawinigan Council — Agendas & Minutes | Shawinigan · Municipal | Council meetings | Downloadable PDF agendas (ordre du jour) and minutes (procès-verbaux) for all regular and special Shawinigan city council meetings, plus the annual meeting calendar PDF. Updated with each meeting — includes 2026 sessions. Direct PDF links for each session with no login wall. First council entry for Shawinigan. | https://www.shawinigan.ca/ville/conseil-municipal/seances-du-conseil/ |
| Sherbrooke Council Meetings | Sherbrooke · Municipal | Council meetings | Ville de Sherbrooke council meeting agendas, minutes, and webcasts. | https://www.sherbrooke.ca/Pages/Fr/Citoyens/conseil-municipal/seances-du-conseil.aspx |
| Trois-Rivières — Ordres du jour et procès-verbaux | Trois-Rivières · Municipal | Council agendas and minutes | Archive of Trois-Rivières council and executive committee agendas, minutes, and adopted bylaws — posted by noon the day before regular meetings. | https://www.v3r.net/a-propos-de-la-ville/vie-democratique/ordres-du-jour-et-proces-verbaux |

### Atlantic Canada (NB, NS, PE, NL)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Bathurst Council Meetings & Agendas | Bathurst · Municipal | Council meetings | Bilingual council meeting portal with downloadable PDF agendas and minutes for regular City of Bathurst council meetings. Browse the annual meeting calendar and access individual session documents via secure direct links. Supports both English and French language access. | https://www.bathurst.ca/en/council-meetings |
| Cape Breton Regional Municipality Council | Cape Breton · Municipal | Council meetings | CBRM council meeting agendas, minutes, and video for the Cape Breton Regional Municipality. | https://cbrm.ns.ca/city-hall/committee-council-meetings/ |
| Charlottetown Council Resolutions and Approved Minutes | Charlottetown · Municipal | Council minutes | Document library with downloadable PDFs of council resolutions and approved minutes for the City of Charlottetown. Track council decisions, motions, and voting records over time. | https://www.charlottetown.ca/mayor___council/council_meetings/resolutions_of_council_and_approved_minutes |
| Corner Brook Council Meetings | Corner Brook · Municipal | Council meetings | City of Corner Brook council meeting agendas and minutes, organized by year and searchable. Follow council debates, decisions, and public participation on budgets, zoning, and infrastructure. | https://www.cornerbrook.com/meetings/ |
| Fredericton Council Meetings | Fredericton · Municipal | Council meetings | City of Fredericton council meeting agendas, minutes, and video. | https://www.fredericton.ca/en/your-government/mayor-council/council-meetings |
| Gander Council Meetings | Gander · Municipal | Council meetings | Town of Gander council meeting agendas and minutes (2024–2026). Download PDFs to track decisions on budgets, services, and local infrastructure. | https://www.gandercanada.com/municipal-government/council-meetings/ |
| Grand Falls-Windsor Council Minutes | Grand Falls-Windsor · Municipal | Council minutes | Town of Grand Falls-Windsor council minutes and agendas, archived by year with PDF downloads. Use to track local governance decisions, budget approvals, and public hearings. | https://grandfallswindsor.com/town-hall/council-minutes/ |
| Halifax Council Meeting Records | Halifax · Municipal | Agendas and minutes | Regional Council agendas, minutes, and webcasts for Halifax Regional Municipality with searchable meeting calendar. | https://www.halifax.ca/city-hall/regional-council |
| Halifax Regional Council Meetings | Halifax · Municipal | Council meetings | Halifax Regional Municipality council and committee agendas, minutes, and live meeting streams. | https://www.halifax.ca/city-hall/agendas-meetings-reports?category=127 |
| Kentville — Council Minutes, Agendas & Records | Kentville · Municipal | Council meetings portal | Searchable archive of Town of Kentville council and advisory committee agendas, minutes, and supporting documents. Filter by date and document category to download PDFs. Includes council expense accounts and public hearing minutes. | https://kentville.ca/town-hall/council-and-committees/minutes-agendas-and-records |
| Miramichi — Council Agendas & Minutes (eScribe) | Miramichi · Municipal | Council meetings portal | Searchable eScribe portal for City of Miramichi council and committee agendas, minutes, and attachments. Covers Regular Council Meeting, Special Council Meeting, Council in Committee, and Public Presentation sessions. Calendar-based search with PDF downloads. First council entry for this northeastern New Brunswick city. | https://pub-miramichi.escribemeetings.com |
| Moncton Council Meetings | Moncton · Municipal | Council meetings | City of Moncton council and committee meeting agendas and minutes. | https://www.moncton.ca/en/council |
| Mount Pearl — Council Agendas & Minutes (eScribe) | Mount Pearl · Municipal | Council meetings portal | Searchable City of Mount Pearl council and committee agendas, minutes, and attachments on the public eScribe portal. Includes regular council and special council meetings with downloadable PDFs. First council entry for this Newfoundland city. | https://pub-mountpearl.escribemeetings.com/ |
| New Glasgow Town Council Meeting Minutes | New Glasgow · Municipal | Council minutes | Archived town council meeting minutes for New Glasgow from 2019 to present — organized by year with PDF downloads. | https://newglasgow.ca/town-council-meeting-minutes.html |
| Paradise — Council Agendas and Minutes | Paradise · Municipal | Meeting documents | Town of Paradise council meeting agendas and approved minutes from 2019 onward, posted as downloadable PDFs once adopted. | https://www.paradise.ca/government-engage/council-meetings/council-minutes/ |
| Saint John — Council Agendas & Minutes (eScribe) | Saint John · Municipal | Council portal | Searchable eScribe meeting portal for Saint John with downloadable PDF agendas, minutes, and supporting documents for regular, special, and committee meetings. Discovered via the documented pub-[city].escribemeetings.com pattern and verified live. | https://pub-saintjohn.escribemeetings.com/ |
| St. John's — Council eScribe Portal | St. John's · Municipal | eScribe portal | Searchable council and committee agendas and minutes for St. John's. Access current and archived meeting records via the city's eScribe portal. | https://apps.stjohns.ca/escribe/Escribe.aspx |
| St. John's Council Meetings | St. John's · Municipal | Council meetings | St. John's City Council meeting agendas, minutes, and webcasts for council sessions. | https://www.stjohns.ca/en/city-hall/mayor-and-council.aspx |
| Stratford Council Agendas & Minutes | Stratford · Municipal | Council meetings | eScribe-linked meeting calendar with searchable regular council, committee, and advisory committee meetings for the Town of Stratford, PEI. Each meeting links to downloadable PDF agendas and minutes via the eScribe portal. Includes finance, heritage, energy, and licensing committees. | https://calendar.stratford.ca/meetings |
| Summerside — Archived Council Agendas & Minutes | Summerside · Municipal | Council meeting agendas and minutes | Archived City of Summerside council, planning board, and committee meeting agendas and minutes (2014–present), downloadable as PDFs. Track local government decisions, development approvals, and public hearings. | https://www.summerside.ca/city_governance/council_chambers/archived_meeting_agendas_minutes |
| Truro — Council Agendas & Minutes | Truro · Municipal | Council meeting agendas and minutes | Yearly archives of Town of Truro council meeting agendas and minutes (2020–2026), downloadable as PDFs. Track council decisions, public hearings, and committee reports. | https://truro.ca/government/council-agenda-and-minutes.html |

### Northern Canada (YT, NT, NU)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Iqaluit Motion Registry Results | Iqaluit · Municipal | Council motions | Searchable, downloadable list of City of Iqaluit council motions with meeting numbers, dates, and PDF downloads. Track how specific issues were voted on and follow the history of council decisions. | https://iqaluit.ca/city-hall/city-council/motions/results |
| Whitehorse — Council Agendas & Minutes (InfoCouncil) | Whitehorse · Municipal | Agendas and minutes | Search and download PDF agendas, minutes, and attachments for City of Whitehorse council meetings from 2017 to present. Filter by year and month to track council decisions, public hearings, and bylaw approvals. | https://whitehorse.infocouncil.biz/ |
| Yellowknife — Council Agendas & Minutes (eScribe) | Yellowknife · Municipal | Council meetings portal | Searchable City of Yellowknife council agendas, minutes, and attachments on the public eScribe portal. Includes Council Meeting and Special Council Meeting records with downloadable PDFs. | https://pub-yellowknife.escribemeetings.com/ |

## 💳 Budget, Finance & Procurement

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Department of Finance — Fiscal Reference Tables | Canada · Federal | Dataset | Annual Excel and PDF tables covering federal, provincial-territorial and local government finances — revenues, expenses, debt and G7 comparisons. | https://www.canada.ca/en/department-finance/services/publications/fiscal-reference-tables.html |
| GC InfoBase | Canada · Federal | Data visualization | Treasury Board's interactive explorer of federal finances, people and results — track spending from the government-wide view down to individual programs. | https://www.tbs-sct.canada.ca/ems-sgd/edb-bdd/index-eng.html |
| Office of the Auditor General of Canada | Canada · Federal | Legislative audit | Independent audits of federal government operations — performance reports, financial audits, and environment commissioner reports | https://www.oag-bvg.gc.ca/ |
| Open Government — Government Travel Expenses Search | Canada · Federal | Search tool | Search proactively disclosed travel expense reports of ministers, senior officials, and staff across federal institutions by name, department, and date. | https://search.open.canada.ca/travel/ |
| Parliamentary Budget Officer — Reports & Costings | Canada · Federal | Budget watchdog | Independent budget analysis for Parliament: election platform costings, fiscal projections, departmental spending analyses, and custom costing requests. Complements the absence of federal line-by-line budget data tools. | https://www.pbo-dpb.gc.ca/ |

### British Columbia

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Auditor General of British Columbia | British Columbia · Provincial | Legislative audit | Independent audits and reports on how well BC's government manages public resources | https://www.bcauditor.com/ |
| BC Bid — Contract Awards | British Columbia · Provincial | Procurement awards | Search awarded BC public sector contracts and standing offers on BC Bid — filter by ministry, vendor, and date. | https://bcbid.gov.bc.ca/page.aspx/en/buy/contract-award |
| Burnaby — Financial Plans & Annual Reports | Burnaby · Municipal | Financial reports | Download multi-year City of Burnaby financial plans (2022–2030) and annual municipal reports as PDFs. Track capital and operating budgets, reserve funds, and fiscal sustainability over time. | https://www.burnaby.ca/our-city/financial-and-annual-reports |
| Coquitlam — OpenBook Budget Explorer (Questica) | Coquitlam · Municipal | Budget transparency portal | Interactive Questica OpenBook budget transparency portal for Coquitlam — explore operating and capital budgets by department, project, and year, with drill-down visuals and CSV export. Verified live (direct 200, city-named tenant; wildcard placeholders redirect and were rejected). | https://coquitlam.openbook.questica.com/ |
| Langley — Budget and Financial Plan | Langley · Municipal | Financial plan | Township of Langley five-year financial plan with direct PDF downloads of operating and capital budget slides, approved changes, and capital investment plans. | https://www.tol.ca/en/the-township/budget-and-financial-plan-2025.aspx |
| Maple Ridge Statement of Financial Information & Budget | Maple Ridge · Municipal | Financial documents | Direct PDF downloads of Maple Ridge's Statement of Financial Information (SOFI), combined financial plan bylaws, capital works program, and pay transparency reports. | https://www.mapleridge.ca/your-government/plans-strategies/financial-planning-reporting |
| Nanaimo — Annual Financial Reports | Nanaimo · Municipal | Financial statements | Downloadable PDF annual financial statements and annual reports for the City of Nanaimo from 2019 to present. Review consolidated financial position, revenue, expenses, and capital investments year-over-year. First budget depth entry for Nanaimo. | https://www.nanaimo.ca/your-government/budget-finance/annual-financial-reports |
| Prince George Annual Reports & Corporate Plan | Prince George · Municipal | Annual reports | Direct PDF downloads of the City of Prince George audited annual reports and strategic corporate plans from 2022 through 2025. Track municipal financial performance, capital projects, and long-term planning priorities for northern British Columbia's largest city. | https://www.princegeorge.ca/city-hall/annual-report-strategic-plan-corporate-plan |
| Vancouver Financial Transparency | Vancouver · Municipal | Financial reports | City of Vancouver financial transparency hub with annual reports, statements, and open financial datasets. | https://vancouver.ca/your-government/financial-reports-and-information.aspx |

### Alberta

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Auditor General of Alberta | Alberta · Provincial | Legislative audit | Independent assurance on Alberta government financial reporting and program performance | https://www.oag.ab.ca/ |
| Treasury Board & Finance — Budget 2026 Documents | Alberta · Provincial | Government publications | Download detailed Budget 2026 fiscal plan documents covering revenue, expense, capital plan ($28.3B over 3 years), economic outlook and ministry business plans. | https://www.alberta.ca/budget |
| Treasury Board & Finance — Grant Payments Disclosure | Alberta · Provincial | Dataset | Download CSVs of every Alberta grant by ministry, recipient, amount and program (2014–present); current-year CSV/XML export also available. | https://open.alberta.ca/opendata/grant-disclosure |
| Banff — Consolidated Financial Statements | Banff · Municipal | Financial report | Town of Banff audited consolidated financial statements for 2021–2025, including the Banff Housing Corporation and Banff Public Library. Downloadable PDFs. | https://banff.ca/350/Financial-Reporting |
| Calgary Open Budget | Calgary · Municipal | Budget open data | Approved operating and capital budget lines for the City of Calgary — filter by department, fund, and year with CSV/API export from Open Calgary. | https://data.calgary.ca/Government/Calgary-Open-Budget/fqax-i3nz |
| Edmonton Approved Operating Budget — Expenses | Edmonton · Municipal | Budget dataset | Machine-readable approved operating budget expense lines by branch and service — download CSV or query Socrata API. | https://data.edmonton.ca/Financial/Approved-Operating-Budget-Expenses/da9s-v9j8 |
| Edmonton Open Budget | Edmonton · Municipal | Budget dashboard | Interactive operating and capital budget explorer for City of Edmonton with revenues, expenditures, and year-over-year comparisons. | https://budget.edmonton.ca/ |
| Grande Prairie — Open Budget | Grande Prairie · Municipal | Budget open data | Interactive ArcGIS Hub portal for City of Grande Prairie budget and financial data. Explore revenue and expenditures by service area and department with CSV download, dashboards, and archive of multi-year budget highlights. | https://openbudget-cityofgp.hub.arcgis.com/ |
| Medicine Hat — Budget & Financial Plans | Medicine Hat · Municipal | Budget documents | Direct PDF downloads of Medicine Hat budget briefings, highlights, business plans, and financial updates (2023–2026). Useful for analyzing municipal spending priorities, service levels, and fiscal health in this Alberta mid-size city. | https://www.medicinehat.ca/government-city-hall/budgets-finance/budget-information/ |
| Okotoks — Financial Statements | Okotoks · Municipal | Financial statements | Direct PDF downloads of Town of Okotoks audited consolidated financial statements from 2021 to 2025. Includes statement of financial position, operations, remeasurement gains and losses, and cash flows in accordance with Canadian public sector accounting standards. | https://www.okotoks.ca/your-government/budget/financial-statements |

### Saskatchewan

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Provincial Auditor of Saskatchewan | Saskatchewan · Provincial | Legislative audit | Independent audits of Saskatchewan government ministries, Crown corporations, and agencies | https://auditor.sk.ca/ |
| Saskatchewan Budget Portal | Saskatchewan · Provincial | Budget portal | Official provincial budget site with spending breakdowns by sector (health, education, communities, infrastructure) and region, plus downloadable budget materials and estimates documents. | https://budget.saskatchewan.ca/ |
| Estevan — Annual Budget | Estevan · Municipal | Budget documents | Direct PDF downloads of annual budget documents for the City of Estevan, including proposed and final budgets from 2021 to 2026. Useful for tracking municipal spending priorities, tax changes, and capital investments in this Saskatchewan energy-sector city. | https://estevan.ca/annual-budget/ |
| Lloydminster — Accounts Payable Reports | Lloydminster · Municipal | Vendor payment ledger | Monthly PDF accounts payable reports listing all vendor payments made by the City of Lloydminster. Updated monthly by the Finance department. Useful for tracking municipal spending, vendor relationships, and fiscal accountability. | https://www.lloydminster.ca/council-administration/finance/accounts-payable-reports/ |
| Lloydminster — Budget & Capital Plans | Lloydminster · Municipal | Budget documents | Direct PDF downloads of approved operating budgets, capital budgets, and 10-year capital plans for the City of Lloydminster (2023–2026). Complements the existing accounts payable entry with forward-looking fiscal planning documents for this Saskatchewan–Alberta border city. | https://www.lloydminster.ca/council-administration/finance/budget/ |
| Moose Jaw — Financial & Budget Reports | Moose Jaw · Municipal | Budget documents | Direct PDF downloads of Moose Jaw annual operating and capital budgets (2023–2025) plus quarterly financial reports (Q1–Q3 2025). Complements the existing Questica OpenBook interactive budget explorer with static document downloads for archival research and offline analysis. | https://moosejaw.ca/financial-budget-reports/ |
| Moose Jaw Open Budget | Moose Jaw · Municipal | Budget explorer | Interactive budget explorer for the City of Moose Jaw showing operating and capital budgets for 2026-2030. Drill down into departments, revenues, and expenses, and export data. | https://moosejaw.openbook.questica.com |
| North Battleford — Audited Financial Statements & Annual Reports | North Battleford · Municipal | Financial statements | Downloadable PDF audited financial statements and annual reports for the City of North Battleford from 2018 to present. Track municipal spending, revenue, debt, and capital investments over time. First budget depth entry beyond the existing budget documents page. | https://www.cityofnb.ca/our-city-government/budgets-and-finances/financial-statements-and-reports/ |
| North Battleford — Budget Documents | North Battleford · Municipal | Budget documents | Direct PDF downloads of City of North Battleford approved budgets from 2018–2026, including operating and capital plans plus the 2025–2029 strategic plan. First budget transparency entry for this Saskatchewan mid-size city. | https://www.cityofnb.ca/our-city-government/budgets-and-finances/ |
| Prince Albert Budget and Financial Documents | Prince Albert · Municipal | Budget documents | Access City of Prince Albert current and past budget books, annual reports, and public accounts. Includes detailed breakdowns for general, water, sanitation, airport, and land funds via Questica OpenBooks. | https://www.citypa.ca/city-hall/finances/ |
| Saskatoon — Non-Standard Procurement (Sole Source) | Saskatoon · Municipal | Dataset | Dataset of non-standard procurements (sole-source contracts) over 5,000 for goods, services, and construction purchased by City of Saskatoon departments. Updated regularly. Available for CSV download and API access. | https://data-citysaskatoon.opendata.arcgis.com/datasets/9470d912e6204cb8964ff19e16cb8521_0/explore |
| Yorkton Budgets and Financial Reports | Yorkton · Municipal | Budget documents | Download annual City of Yorkton operating and capital budgets, audited financial statements, and public accounts reporting payments over $50,000 from 2019–2026. | https://www.yorkton.ca/our-government/budgets-and-financial-reports/ |

### Manitoba

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Auditor General of Manitoba | Manitoba · Provincial | Legislative audit | Independent audit reports on Manitoba government operations and public accounts | https://www.oag.mb.ca/ |
| Manitoba Finance — Budget 2026 | Manitoba · Provincial | Budget documents | Download Manitoba Budget 2026 documents — full budget book, budget speech, Estimates of Expenditure and Budget in Brief (PDF) — with archives of prior provincial budgets. | https://www.gov.mb.ca/budget2026/index.html |
| Brandon — Compensation Disclosure | Brandon · Municipal | Compensation disclosure | Annual PDF reports disclosing compensation paid to City of Brandon council members and employees earning over $75,000 (now $85,000). Useful for salary research, transparency analysis, and tracking municipal compensation trends. | https://www.brandon.ca/city-hall/compensation-disclosure/ |
| Brandon Budget and Finance | Brandon · Municipal | Budget documents | Download City of Brandon annual approved budgets (incl. 2026), audited financial statements, and multi-year financial plans. Includes operating and capital breakdowns by department — useful for fiscal accountability in Manitoba's second-largest municipality. | https://www.brandon.ca/city-hall/budget-and-finance |
| Dauphin Financial Plans and Audited Statements | Dauphin · Municipal | Financial documents | Download City of Dauphin financial plans (2015–2026) and audited consolidated financial statements (2010–2024). Also includes fees, charges, and tax levy bylaws. | https://www.dauphin.ca/p/finance |
| Portage la Prairie Finance Reports & Plans | Portage la Prairie · Municipal | Dataset | Annual budget speeches, multi-year financial plans, audited financial statements, and public sector compensation disclosures as PDFs. Covers 2020-2026 budget cycles. | https://www.city-plap.com/council-administration/plans-reports-and-studies/finance-reports-plans/ |
| Selkirk Financial Plan & Audited Statements | Selkirk · Municipal | Budget documents | Download City of Selkirk annual financial plans (2024–2026) and audited consolidated financial statements (2020–2024) as direct PDFs, plus financial plan presentations. Covers operating and capital budgets — useful for fiscal accountability and tracking spending in this Manitoba city. First budget/finance data source for Selkirk. | https://www.myselkirk.ca/city-government/city-administration/financialplan/ |
| Steinbach — Annual Financial Plans & Statements | Steinbach · Municipal | Financial documents | Direct PDF downloads of Steinbach financial plans and audited financial statements, 2018–2026. Includes signed annual financial plans and consolidated financial statements. Useful for fiscal accountability research, budget analysis, and understanding municipal spending trends. First budget depth entry for Steinbach. | https://www.steinbach.ca/departments-and-services/admin-and-human-resources/financial-documents/ |
| Thompson Financial Reports and Plans | Thompson · Municipal | Financial transparency | Downloadable PDFs of Thompson's annual financial plans, financial plan presentations, and Bill 57 public sector compensation disclosures. Track municipal spending, tax rates, and senior staff compensation. | https://www.thompson.ca/p/financial-reports-and-plans |
| Winnipeg — Council Member Expenses | Winnipeg · Municipal | Dataset | Itemized expenses of Winnipeg City Council members from 2014 to present, including travel, conferences, and discretionary spending. Searchable and downloadable as CSV for transparency and accountability research. | https://data.winnipeg.ca/dataset/mgde-4fua |
| Winnipeg Capital Projects Explorer | Winnipeg · Municipal | Capital projects dashboard | Interactive map and dashboard tracking active City of Winnipeg capital projects over $5 million, with budget variance, schedule status, timeline, and project documents. | https://projectexplorer.winnipeg.ca/ |
| Winnipeg Open Budget | Winnipeg · Municipal | Budget explorer | Interactive operating and capital budget explorer for the City of Winnipeg. Filter by department, fund, and year to compare budgeted vs actual spending and revenues. | https://openbudget.winnipeg.ca/ |

### Ontario

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Auditor General of Ontario | Ontario · Provincial | Legislative audit | Value-for-money and financial audits of Ontario ministries, agencies, and the broader public sector | https://www.auditor.on.ca/ |
| Ministry of Municipal Affairs and Housing — Financial Information Return | Ontario · Provincial | Open data portal | Download yearly CSV ZIPs of every Ontario municipality's revenues, expenses, reserves and stats (2000–2025), plus dashboards and per-municipality reports. | https://efis.fma.csc.gov.on.ca/fir/ |
| Ontario Budget Publications | Ontario · Provincial | Budget publications | Current and archived Ontario Budgets in HTML chapters and PDF: economic and fiscal outlook, revenue/expense tables, capital plan, borrowing and debt management strategy. | https://budget.ontario.ca/ |
| Ontario Public Accounts — Schedule of Payments | Ontario · Provincial | Vendor payments | Detailed schedule of provincial payments to vendors and transfer recipients by ministry — annual CSV downloads in English and French. | https://data.ontario.ca/dataset/public-accounts-detailed-schedule-of-payments |
| Ontario Public Sector Salary Disclosure | Ontario · Provincial | Salary disclosure | Searchable and downloadable public sector salary disclosure (Sunshine List) for Ontario employees earning over $100,000 — filter by organization, position, and year | https://www.ontario.ca/page/public-sector-salary-disclosure |
| Brantford Budget and Finance | Brantford · Municipal | Budget documents | Download City of Brantford annual operating and capital budgets (2024-2026), multi-year budget plans, budget summaries, and the mayor's budget messages as direct PDFs. Includes capital budget summary and net operating budget breakdowns — useful for fiscal accountability and tracking spending priorities in Brantford, Ontario. | https://www.brantford.ca/your-government/city-budget/ |
| Burlington — OpenBook Budget Explorer (Questica) | Burlington · Municipal | Budget transparency portal | Interactive Questica OpenBook budget transparency portal for Burlington — explore operating and capital budgets by department, project, and year, with drill-down visuals and CSV export. Verified live (direct 200, city-named tenant; wildcard placeholders redirect and were rejected). | https://burlington.openbook.questica.com/ |
| Cambridge — OpenBook Budget Explorer (Questica) | Cambridge · Municipal | Budget transparency portal | Interactive Questica OpenBook budget transparency portal for Cambridge — explore operating and capital budgets by department, project, and year, with drill-down visuals and CSV export. Verified live (direct 200, city-named tenant; wildcard placeholders redirect and were rejected). | https://cambridge.openbook.questica.com/ |
| Grey County — OpenBook Budget Explorer (Questica) | Grey County · Municipal | Budget transparency portal | Interactive Questica OpenBook budget transparency portal for Grey County — explore operating and capital budgets by department, project, and year, with drill-down visuals and CSV export. Verified live (direct 200, city-named tenant; wildcard placeholders redirect and were rejected). | https://greycounty.openbook.questica.com/ |
| Haldimand County — OpenBook Budget Explorer (Questica) | Haldimand County · Municipal | Budget transparency portal | Interactive Questica OpenBook budget transparency portal for Haldimand County — explore operating and capital budgets by department, project, and year, with drill-down visuals and CSV export. Verified live (direct 200, city-named tenant; wildcard placeholders redirect and were rejected). | https://haldimandcounty.openbook.questica.com/ |
| Hamilton — OpenBook Budget Explorer (Questica) | Hamilton · Municipal | Budget transparency portal | Interactive Questica OpenBook budget transparency portal for Hamilton — explore operating and capital budgets by department, project, and year, with drill-down visuals and CSV export. Verified live (direct 200, city-named tenant; wildcard placeholders redirect and were rejected). | https://hamilton.openbook.questica.com/ |
| Kitchener — OpenBook Budget Explorer (Questica) | Kitchener · Municipal | Budget transparency portal | Interactive Questica OpenBook budget transparency portal for Kitchener — explore operating and capital budgets by department, project, and year, with drill-down visuals and CSV export. Verified live (direct 200, city-named tenant; wildcard placeholders redirect and were rejected). | https://kitchener.openbook.questica.com/ |
| Milton — Financial Reports | Milton · Municipal | Budget documents | Direct PDF downloads of Town of Milton annual financial reports (audited statements) from 2019 to 2024, including assets, liabilities, net worth, revenue, and expenses. Useful for fiscal accountability and trend analysis. | https://www.milton.ca/en/town-hall/financial-reports-plans-and-studies.aspx |
| Mississauga Procurement Awards Open Data | Mississauga · Municipal | Procurement awards | Awarded contracts and procurement results published on the Mississauga open data catalogue for vendor transparency. | https://data.mississauga.ca/browse?category=Finance |
| Newmarket — Consolidated Financial Statements | Newmarket · Municipal | Financial report | Town of Newmarket consolidated financial statements, management discussion and analysis, and BIA financial reports for 2024–2025. Downloadable PDFs. | https://www.newmarket.ca/local-government/budgets-finances/financial-statements |
| Niagara Falls Budget & Financial Reports | Niagara Falls · Municipal | Budget documents | Direct PDF downloads of Niagara Falls operating, capital, water, wastewater, and parking budgets from 2024 to 2026, including mayor's proposed and adopted versions. | https://niagarafalls.ca/city-government/budget-and-finances/budgets/ |
| Oakville — Budget Documents | Oakville · Municipal | Budget documents | Direct PDF downloads of Town of Oakville operating and capital budgets, capital detail sheets, and forecast documents from 2018 to 2026. Track municipal spending priorities, service allocations, infrastructure investments, and multi-year fiscal planning. | https://www.oakville.ca/town-hall/budget-finances/annual-budget/budget-documents/ |
| Orillia — OpenBook Budget Explorer (Questica) | Orillia · Municipal | Budget transparency portal | Interactive Questica OpenBook budget transparency portal for Orillia — explore operating and capital budgets by department, project, and year, with drill-down visuals and CSV export. Verified live (direct 200, city-named tenant; wildcard placeholders redirect and were rejected). | https://orillia.openbook.questica.com/ |
| Oshawa — OpenBook Budget Explorer (Questica) | Oshawa · Municipal | Budget transparency portal | Interactive Questica OpenBook budget transparency portal for Oshawa — explore operating and capital budgets by department, project, and year, with drill-down visuals and CSV export. Verified live (direct 200, city-named tenant; wildcard placeholders redirect and were rejected). | https://oshawa.openbook.questica.com/ |
| Ottawa Spending and Budget Open Data | Ottawa · Municipal | Budget open data | City of Ottawa budget, spending, and financial datasets on the open data portal — operating and capital budget tables with API access. | https://open.ottawa.ca/browse?category=Budget+%26+Finance |
| Peterborough Budget & Financial Reports | Peterborough · Municipal | Budget documents | Downloadable PDF budget books and financial reports for the City of Peterborough, including annual operating and capital budgets, financial statements, and interactive ConnectPtbo budget portals. | https://www.peterborough.ca/council-city-hall/city-budget/budget-documents-and-financial-reports/ |
| Richmond Hill — Budget | Richmond Hill · Municipal | Budget documents | Direct PDF downloads of Richmond Hill’s annual budget documents, including the adopted operating budget, capital budget, budget book, and presentation slides. Covers the full budget cycle from draft to adoption. | https://www.richmondhill.ca/en/learn-more/Budget.aspx |
| Sault Ste. Marie — Budget & Financial Statements | Sault Ste. Marie · Municipal | Budget documents | Direct PDF downloads of annual budgets, capital budgets, operating budget summaries, departmental budgets, and quarterly financial appendices for 2024–2026. Includes tax levy summaries and statements of financial information with council remuneration and expenses. | https://saultstemarie.ca/government/budget-and-financial-statements/ |
| St. Catharines — Budgets & Financial Statements | St. Catharines · Municipal | Budget documents | Direct PDF downloads of St. Catharines capital and operating budgets, multi-year budgets, and water/wastewater financial plans from 2017 to present. Track municipal spending, infrastructure investments, and fiscal forecasts year-over-year. | https://www.stcatharines.ca/council-and-administration/budget-and-finances/budgets-and-financial-statements/ |
| Timmins — Budget Documents | Timmins · Municipal | Budget package | City of Timmins direct PDF downloads of Council Budget Packages, Water & Wastewater Budget Packages, and Other Funds budgets for 2024–2026. | https://www.timmins.ca/our_services/finance/budget_documents |
| City of Toronto Vendor Payments (Open Data) | Toronto · Municipal | Vendor payments | Quarterly open data releases of City of Toronto payments to vendors over reporting thresholds. | https://open.toronto.ca/dataset/payments-to-vendors/ |

### Quebec

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| MAMH — Profil financier des municipalités | Quebec · Provincial | Financial reports | Ministry of Municipal Affairs annual financial profile of each Quebec municipality: fiscal data, debt/taxation ratios, peer-group comparisons and indices; PDFs per municipality plus CSV/XLSX open data. | https://www.quebec.ca/gouvernement/gestion-municipale/finances-fiscalite-municipales/information-financiere/publications-financieres/profil-financier |
| Quebec — Tableau de bord des projets en ressources informationnelles | Quebec · Provincial | Public dashboard | Track the health, cost, and schedule of every Quebec government IT project over $500,000 in a dashboard updated daily, filterable by department and portfolio. | https://www.tableaudebordprojetsri.gouv.qc.ca/tableau-de-bord |
| Quebec SEAO — Open Contracting Data | Quebec · Provincial | Procurement open data | Weekly JSON/XML open data on Quebec public tenders and awarded contracts including municipalities — OCDS-inspired format since 2021. | https://www.donneesquebec.ca/recherche/fr/dataset/d23b2e02-085d-43e5-9e6e-e1d558ebfdd5 |
| Vérificateur général du Québec | Quebec · Provincial | Legislative audit | Independent audits of Québec government departments, agencies, and Crown enterprises | https://www.vgq.qc.ca/ |
| Gatineau — Liste de contrats | Gatineau · Municipal | Contracts list | Published list of municipal contracts awarded by Ville de Gatineau — procurement transparency for vendors and researchers. | https://www.gatineau.ca/portail/default.aspx?p=publications_cartes_statistiques_donnees_ouvertes%2Fliste_contrats |
| Gatineau — Rémunération des élus | Gatineau · Municipal | Elected officials remuneration | Councillor and mayor salary and expense disclosure for Gatineau elected officials — published remuneration reports. | https://www.gatineau.ca/portail/default.aspx?p=publications_cartes_statistiques_donnees_ouvertes%2Fremuneration_elus |
| Laval Budget & Financial Reports | Laval · Municipal | Budget documents | Direct PDF downloads of Laval's annual operating budgets (2020–2026), three-year capital investment programs (PTI), consolidated financial reports (2019–2024), councillor remuneration disclosures (rémunération élus, 2019–2024), credit rating reports, and public accountability reports (reddition de comptes). Quebec's third-largest city (~440k population). First budget entry for Laval, covering both fiscal planning and salary transparency. | https://www.laval.ca/organisation-municipale/budgets-rapports-financiers/ |
| Longueuil — Budget & Financial Reports | Longueuil · Municipal | Consolidated budget and financial reports | Ville de Longueuil consolidated budget page with links to agglomeration budget PDFs (2013–present), expense and revenue breakdowns, and the three-year capital investment plan. Analyze municipal spending priorities and tax allocation in this Quebec urban center. | https://www.longueuil.quebec/fr/budget |
| Montréal — Vue sur les contrats | Montreal · Municipal | Contract visualization tool | Search and visualize every contract and subsidy granted by the City of Montreal since 2012 — filter by supplier, department, amount and year, with an API. | https://ville.montreal.qc.ca/vuesurlescontrats/ |
| Repentigny Budget & Finance | Repentigny · Municipal | Budget documents | Direct PDF downloads of Repentigny's annual municipal budgets from 2015 to 2026, including budget summaries and the mayor's budget speech. Useful for tracking spending priorities, tax rate changes, and capital project allocations over a decade. First budget entry for Repentigny. | https://repentigny.ca/la-ville/a-propos/finances |
| Rimouski Budget & Financial Reports | Rimouski · Municipal | Budget documents | Direct PDF downloads of Rimouski's annual budgets (2022–2026), audited financial reports, mayor's financial situation report, salary and expense disclosure (rémunération et allocation de dépenses), public contracts list (liste des contrats), and three-year capital investment plan (PQI). Key proactive disclosure resource covering both budget and vendor payment transparency. First budget entry for Rimouski. | https://rimouski.ca/ville/administration/budget-et-rapports-financiers |
| Rouyn-Noranda Budget & Financial Reports | Rouyn-Noranda · Municipal | Financial documents | Direct PDF downloads of Rouyn-Noranda's 2026 municipal budget, three-year capital investment plan (PTI 2026-2028), the mayor's financial situation report for 2025, and the consolidated financial report for 2025. Includes operating and capital budget breakdowns for Quebec's largest city in Abitibi-Témiscamingue. | https://www.rouyn-noranda.ca/ville/vie-democratique/budget-et-rapports-financiers |
| Shawinigan — Budget & Financial Reports | Shawinigan · Municipal | Budget documents | Downloadable PDF budget documents, capital plans (PQI), and audited financial statements for the City of Shawinigan. Includes annual budgets 2020–2025, mayor's budget speeches, and performance audits. | https://www.shawinigan.ca/ville/budget-et-etats-financiers/ |
| Sherbrooke — Budget & Financial Reports | Sherbrooke · Municipal | Budget documents | Direct PDF downloads of Sherbrooke’s annual operating and capital budgets, budget presentations, and multi-year capital investment programs (2020–2026). Includes revenue breakdowns and spending projections. | https://www.sherbrooke.ca/fr/vie-municipale/publications/budget |

### Atlantic Canada (NB, NS, PE, NL)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Auditor General of New Brunswick | New Brunswick · Provincial | Legislative audit | Independent audits and special reports on New Brunswick government programs and spending | https://www.agnb-vgnb.ca/ |
| New Brunswick Budget Hub | New Brunswick · Provincial | Budget & estimates | Finance and Treasury Board budget hub: current and historical budgets, budget speech, main estimates, economic outlook, capital budget site and pre-budget consultation results. | https://www.gnb.ca/en/gov/budget.html |
| Newfoundland and Labrador Budget 2026 | Newfoundland and Labrador · Provincial | Budget documents | Full provincial budget package: highlights, budget speech, The Economy, consolidated Estimates and Statements & Schedules with revenue and department-by-department spending. | https://www.gov.nl.ca/budget/2026/ |
| Auditor General of Nova Scotia | Nova Scotia · Provincial | Legislative audit | Performance and financial audits of Nova Scotia government departments and agencies | https://oag-ns.ca/ |
| Department of Finance and Treasury Board — Budget Documents | Nova Scotia · Provincial | Budget portal + document library | Current Budget 2026-27 hub plus archives: downloadable estimates and supplementary detail, four-year fiscal plans, business plans and capital plan PDFs for every department. | https://novascotia.ca/budget/ |
| Nova Scotia Awarded Public Tenders | Nova Scotia · Provincial | Procurement awards | CSV of awarded vendors and amounts for government tenders by entity, category, and date from the Nova Scotia open data portal. | https://data.novascotia.ca/datasets/m6ps-8j6u |
| PEI Provincial Budget — Operating Budget Documents | PEI · Provincial | Budget documents | Finance hub for the operating budget: Budget Address, Estimates of Revenue and Expenditures, Budget Paper on the Economy, highlights, pre-budget consultations and archives from 1998. | https://www.princeedwardisland.ca/en/information/finance-and-affordability/provincial-budget-operating-budget |
| Prince Edward Island — Estimates of Expenditure | Prince Edward Island · Provincial | Dataset | Annual provincial budget dataset showing planned spending by department for the upcoming fiscal year. Downloadable in CSV and PDF for fiscal accountability and budget analysis. | https://data.princeedwardisland.ca/datasets/e3c59ea5c9154796bf3a57f9816618bb_0/explore?showTable=true |
| Bathurst Budget and Financial Statements | Bathurst · Municipal | Financial documents | Annual budgets and audited financial statements for the City of Bathurst from 2016 to 2026 — download PDFs for operating and capital budget breakdowns. | https://www.bathurst.ca/en/services/city-hall/161/budget-documents |
| CBRM — Budget and Financial Documents | Cape Breton · Municipal | Budget documents | Direct PDF downloads of CBRM operating budgets, annual reports, and consolidated financial statements. Covers fiscal years from 2022–2026. Useful for tracking municipal spending, capital allocations, and fiscal health in Nova Scotia's second-largest municipality. | https://cbrm.ns.ca/city-hall/budget-documents/ |
| Charlottetown Audited Financial Statements | Charlottetown · Municipal | Financial statements | Downloadable PDFs of audited consolidated financial statements for the City of Charlottetown, Charlottetown Water and Sewer Corporation, and city superannuation plans. Includes statements from 2024 and 2025. | https://www.charlottetown.ca/mayor___council/finance/audited_financial_statements |
| Charlottetown Council Member Disclosure Statements | Charlottetown · Municipal | Disclosure statements | Downloadable PDF disclosure statements for each Charlottetown council member from 2018 to 2025. Review councillor assets, liabilities, and interests as required by the Municipal Government Act. | https://www.charlottetown.ca/mayor___council/city_council/council_member_disclosure_statements |
| Corner Brook — Budgets and Financial Statements | Corner Brook · Municipal | Budget documents | Downloadable PDF annual budget speeches and audited financial statements for the City of Corner Brook from 2017 to present. Track municipal spending, capital investments, and financial performance over time. | https://www.cornerbrook.com/by-laws-policies-and-reports/budgets-financial-statements/ |
| Fredericton — Previous Budgets and Annual Reports | Fredericton · Municipal | Budget documents | Downloadable PDF budget books, annual report infographics, and financial statements for the City of Fredericton from 2018 to present. Review operating and capital budgets, tax rates, and financial performance. | https://www.fredericton.ca/previous-budgets-annual-reports |
| Gander — Budget & Finance | Gander · Municipal | Budget documents | Town of Gander direct PDF downloads of municipal budgets, tax rates and fees, and schedule of rates for 2022–2026. | https://www.gandercanada.com/municipal-government/budget-finance/ |
| Gander — Project Portal Dashboard | Gander · Municipal | Dashboard | Interactive dashboard tracking the status, timelines, and budgets of Town of Gander projects across fleet, infrastructure and strategic development, updated monthly. | https://www.gandercanada.com/citizen-engagement/gander-project-portal/ |
| Grand Falls-Windsor — Budget Documents and Financial Statements | Grand Falls-Windsor · Municipal | Budget documents | Downloadable PDF budget documents and audited financial statements for the Town of Grand Falls-Windsor from 2013 to 2026. Track municipal spending, tax rates, and financial health over time. | https://grandfallswindsor.com/town-hall/publications/ |
| Halifax Budget and Financial Plans | Halifax · Municipal | Municipal budget | Halifax Regional Municipality budget documents, business plans, and financial performance reporting. | https://www.halifax.ca/budget |
| Kentville — Budget & Financial Statements | Kentville · Municipal | Financial report | Town of Kentville direct PDF downloads of approved operating budgets, five-year capital investment plans, and audited consolidated financial statements. | https://kentville.ca/town-files/rates-and-finances |
| Mount Pearl — Budget and Financial Statements | Mount Pearl · Municipal | Budget documents | Downloadable PDF budget brochures, rates and fees schedules, and audited financial statements for the City of Mount Pearl from 2010 to present. Track municipal spending and tax rate changes. | https://www.mountpearl.ca/government/budget/ |
| New Glasgow Audited Consolidated Financial Statements | New Glasgow · Municipal | Financial statements | Downloadable audited consolidated financial statements for the Town of New Glasgow from fiscal 2018 through 2025. | https://newglasgow.ca/audited-consolidated-financial-statements.html |
| Paradise — Cheque Register | Paradise · Municipal | Vendor payment ledger | Monthly PDF downloads of all vendor and supplier payments made by the Town of Paradise. Track municipal spending, identify top vendors, and analyze procurement patterns from January 2020 onward. | https://www.paradise.ca/government-engage/cheque-register/ |
| St. John's — Weekly Payment Vouchers | St. John's · Municipal | Vendor payment ledger | Weekly PDF payment vouchers listing all vendor payments made by the City of St. John's from 2021 to present. Download by year to track municipal spending, identify top vendors, and analyze procurement patterns. | https://www.stjohns.ca/your-government/access-to-information-and-protection-of-privacy/proactive-disclosures |
| Stratford — Town Council Expenses | Stratford · Municipal | Expense reports | Annual PDF downloads of Stratford Town Council expense claims and travel expenses, 2016–2025. Itemized spending reports for mayor and councillors. First budget transparency entry for this PEI municipality. | https://townofstratford.ca/government-services/town-governance/town-council-expenses/ |
| Summerside — Annual Budgets | Summerside · Municipal | Annual budget documents | City of Summerside annual budget PDFs (2021–2027). Download to track municipal spending priorities, service allocations, and fiscal planning in Prince Edward Island's second-largest city. | https://www.summerside.ca/city_governance/bylaws_policies_reports/annual_budgets |
| Truro — Financial Statements & Budget | Truro · Municipal | Audited financial statements and budget | Town of Truro audited financial statements and budget presentations, including 2024–2025 consolidated financial statements. Download PDFs to analyze municipal fiscal health, revenue sources, and capital spending. | https://truro.ca/town-services/financial-statements-budget.html |
| Yarmouth — Audited Financial Statements | Yarmouth · Municipal | Financial statements | Downloadable PDF audited consolidated and non-consolidated financial statements for the Town of Yarmouth. Review municipal fiscal health, revenue, expenses, and asset management. First budget depth entry for Yarmouth. | https://townofyarmouth.ca/departments/finance/audited-statements |

### Northern Canada (YT, NT, NU)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Nunavut Budget Archive (Department of Finance) | Nunavut · Provincial | Budget archive | GN Department of Finance budget library: consolidated budgets, highlights, budget addresses, main and capital estimates, fiscal indicators, supplementary appropriations and public accounts by year. | https://www.gov.nu.ca/en/department-finance/budgets-year |
| Government of Yukon Budget | Yukon · Provincial | Budget documents | Yukon Finance budgets: operation & maintenance and capital estimates, budget highlights, fiscal and economic outlooks, supplementary estimates, public accounts and historical budgets back to 2001. | https://yukon.ca/en/budget |
| Iqaluit — Budget and Financial Statements | Iqaluit · Municipal | Financial report | City of Iqaluit capital and operating budget amendments, consolidated financial statements, and councillor attendance reports. Downloadable PDFs. | https://iqaluit.ca/reports-and-publications |
| Yellowknife Past and Present Budgets | Yellowknife · Municipal | Budget documents | Downloadable PDF budget documents for the City of Yellowknife including the consolidated 2026 budget, governance committee budget presentations, and draft budget proposals. Review operating and capital budgets. | https://www.yellowknife.ca/budget-and-initiatives/past-and-present-budgets |

## 🪪 Government Services & ID

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Code for Canada | Canada · Federal | Civic tech organization | Canadian nonprofit that helps government and communities design and build better digital services through technology and design partnerships | https://codefor.ca/ |
| eServiceCanada Appointment Booking | Canada · Federal | Appointment booking | Official Service Canada appointment booking tool for in-person services, including passport applications, biometrics collection, and SIN-related visits, with online passport renewal options. | https://eservices.canada.ca/reservation/ |
| GC Design System | Canada · Federal | Design system | Official production-ready design system for Government of Canada websites and digital products — components, patterns, and guidance | https://design-system.canada.ca/en/ |
| GC Forms | Canada · Federal | Form builder | Secure, accessible, bilingual form-building platform for Government of Canada services — no coding required | https://articles.alpha.canada.ca/forms-formulaires/ |
| GC Notify | Canada · Federal | Notification service | Government of Canada notification service for sending emails and text messages to users — built by Canadian Digital Service | https://notification.canada.ca/ |
| GCcollab | Canada · Federal | Collaboration platform | Government of Canada's professional networking and collaboration platform for public servants and external partners to share knowledge and work together | https://gccollab.ca/ |
| GCKey — Federal Sign-In Service | Canada · Federal | Authentication | Unified credential used to access many Government of Canada online services | https://clegc-gckey.gc.ca/ |
| Government of Canada Employee Directory (GEDS) | Canada · Federal | Directory | Government of Canada Employee Directory (GEDS) — search for federal public servant contact information and organizational structure. | https://geds-sage.gc.ca/en/GEDS?pgid=002 |
| My Service Canada Account (MSCA) | Canada · Federal | Secure portal | Sign in to view EI, CPP, OAS, ROE, and access most federal individual services in one place | https://www.canada.ca/en/employment-social-development/services/my-account.html |
| NEXUS — Trusted Traveller Program | Canada · Federal | Service | Apply for expedited border crossing between Canada and the US at land, air, and marine entries | https://www.cbsa-asfc.gc.ca/prog/nexus/menu-eng.html |
| Passport Canada — Apply or Renew | Canada · Federal | Service | Apply for, renew, or replace a Canadian passport; track application status online | https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports.html |
| Travel Advice and Advisories | Canada · Federal | Advisory finder | Country-by-country official travel advisories | https://travel.gc.ca/travelling/advisories |
| Travel.gc.ca — Consent Letter for Children Travelling Abroad | Canada · Federal | Service | Template and guidance for consent letters when children travel abroad without both parents | https://travel.gc.ca/travelling/children/consent-letter |
| Canada Council for the Arts — Discover | Canada · Crown Corp | Arts | Funding programs, arts research, and Canadian arts discovery | https://canadacouncil.ca/ |
| Canada Foundation for Innovation — Research Infrastructure | Canada · Crown Corp | Research | Funding for research infrastructure across Canadian institutions | https://www.innovation.ca/ |
| Canada Post — Find a Postal Code | Canada · Crown Corp | Lookup tool | Official postal code lookup by civic, rural route or post office box address, with address autocomplete. | https://www.canadapost-postescanada.ca/cpc/en/tools/find-a-postal-code.page |
| Canada Post — Send, Ship, Track | Canada · Crown Corp | Shipping tool | Send mail, ship packages, calculate postage, and track shipments | https://www.canadapost.ca/ |
| Canada Science and Technology Exhibition Centre | Canada · Crown Corp | Science outreach | Science and innovation exhibits and public programs | https://www.sciencetech.ca/ |
| CBC — Gem Streaming | Canada · Crown Corp | Streaming | Free Canadian streaming of news, documentaries, and shows on CBC Gem | https://gem.cbc.ca/ |

### British Columbia

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| B.C. Government DevHub | British Columbia · Provincial | Developer portal | British Columbia government developer hub with technical documentation, code samples, APIs, and community knowledge bases | https://developer.gov.bc.ca/ |
| BC Services Card | British Columbia · Provincial | Digital ID | BC's combined health card and digital ID used to access online government services securely | https://www2.gov.bc.ca/gov/content/governments/government-id/bc-services-card |
| BC Vital Statistics Online Ordering System (eCOS) | British Columbia · Provincial | Document ordering | B.C. Vital Statistics online portal to order birth, marriage, and death certificates or certified registration copies, and register wills notices, with fully electronic applications and rush processing. | https://www2.gov.bc.ca/gov/content/life-events/order-certificates-copies |
| Connected Services BC | British Columbia · Provincial | Digital service | British Columbia's initiative to build connected, people-centred digital government services and improve cross-government service delivery. | https://www2.gov.bc.ca/gov/content/governments/organizational-structure/ministries-organizations/central-government-agencies/csbc |
| Service BC — Online Services | British Columbia · Provincial | Service | BC government service finder — IDs, permits, licences, vital stats, health card, payments | https://www2.gov.bc.ca/gov/content/governments/services-for-government |

### Alberta

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Alberta Find a Registry Agent | Alberta · Provincial | Lookup tool | Searchable directory of Alberta registry agents offering government services: vehicle registration, driver licensing, vital statistics searches, land titles, health care registration, and personal property searches by city. | http://www.servicealberta.gov.ab.ca/find-a-registry-agent.cfm?faction=search |
| Alberta.ca Account | Alberta · Provincial | Authentication | Single sign-in used to access Alberta government online services like MyAlberta Digital ID | https://account.alberta.ca/ |
| MyAlberta Digital ID | Alberta · Provincial | Digital ID | Verified digital identity used to access Alberta government services remotely | https://account.alberta.ca/signin |
| Calgary — Impounded and Lost Pets | Calgary · Municipal | Lookup tool | Photos and descriptions of stray cats and dogs at Calgary Animal Services, updated every 15 minutes, so owners can spot their lost pet online. | https://www.calgary.ca/pets/lost-animals.html |

### Manitoba

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Manitoba Education and Early Childhood Learning — Manitoba Child Care Search | Manitoba · Provincial | Lookup tool | Map-based search of all licensed child care facilities in Manitoba; filter by age group, vacancies, hours, language and non-profit status, then view facility profiles. | https://childcaresearch.gov.mb.ca/ |
| Manitoba Geological Survey | Manitoba · Provincial | Geology maps | Geological maps, mineral resources, and geoscience data for Manitoba | https://www.manitoba.ca/mit/geo/ |
| Manitoba Vital Statistics Branch | Manitoba · Provincial | Service | Order Manitoba birth, marriage, and death certificates online | https://vitalstats.gov.mb.ca/ |

### Ontario

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Ontario — Find Licensed Child Care | Ontario · Provincial | Search tool | Ministry of Education registry: search licensed child care centres and home child care agencies by location, age group, language or name; see licence details, inspection reports and violations. | https://www.earlyyears.edu.gov.on.ca/LCCWWeb/childcare/search.xhtml?lang=en |
| Ontario Online Certificate Application | Ontario · Provincial | Document ordering | Office of the Registrar General's online application to order Ontario birth, marriage, and death certificates, certified registration copies, and birth search letters, including replacement and sex-designation options. | https://services.ontario.ca/oca-web/main |
| Ontario.ca Developer Hub | Ontario · Provincial | Developer portal | Ontario government developer hub with APIs, technical documentation, and code samples for building digital services | https://developer.ontario.ca/ |
| ServiceOntario | Ontario · Provincial | Service portal | Ontario government's one-stop portal for driver’s licences, health cards, birth certificates, business registrations, and other provincial services | https://www.ontario.ca/page/serviceontario |
| Brampton budget / Open Book resources | Brampton · Municipal | Transparency / budget | Budget transparency resources and project-oriented views | https://www.brampton.ca/EN/City-Hall/budget/ |
| Guelph — Report a Problem Map | Guelph · Municipal | Service request map | Submit 311-style service requests (potholes, garbage, bylaw issues) on an interactive map with photos and get updates on the City's response. | https://experience.arcgis.com/experience/aa79df9526ab4c99914adc950eca9141 |
| Toronto — Waste Wizard | Toronto · Municipal | Lookup tool | Type any of 2,500+ items to find out which bin it goes in and where to drop off hazardous waste — also in the TOwaste app with collection schedules. | https://www.toronto.ca/services-payments/recycling-organics-garbage/waste-wizard/ |
| Toronto 311 — Service Requests | Toronto · Municipal | Service | Report issues, request services, and track cases in Toronto via web, app, or phone | https://www.toronto.ca/home/311-toronto-at-your-service/ |

### Quebec

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Directeur de l'état civil du Québec | Quebec · Provincial | Vital statistics | Order Quebec certificates of birth, marriage, civil union, and death online | https://www.etatcivil.gouv.qc.ca/ |
| Montréal — 311 Service Requests Dataset | Montreal · Municipal | 311 open dataset | Download geolocated 311 service requests, complaints and comments submitted to the City of Montreal from 2014 to present, in CSV format. | https://donnees.montreal.ca/dataset/requete-311 |

### Atlantic Canada (NB, NS, PE, NL)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| New Brunswick Geological Survey | New Brunswick · Provincial | Geology maps | Interactive geological maps, mineral deposits, and geoscience data for NB | https://www2.gnb.ca/content/gnb/en/departments/10.html |
| Post-Secondary Education, Training and Labour (PETL) — Employment Standards Online Complaint Form | New Brunswick · Provincial | Self-service portal | File an Employment Standards Act complaint online without paper: unpaid wages, overtime, vacation pay, termination pay and more, routed directly to PETL investigators. | https://www.gnb.ca/en/topic/jobs-workplaces/labour-market-workforce/employment-standards/employment-standards-complaint.html |
| Nova Scotia Vital Statistics Online Services | Nova Scotia · Provincial | Document ordering | Apply online to Nova Scotia Vital Statistics for short- or long-form birth certificates, with X gender option and no sex display, credit card payment, and alternative mail/fax/in-person options. | https://www.novascotia.ca/apply-birth-certificate |

### Northern Canada (YT, NT, NU)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Northwest Territories Geological Survey | Northwest Territories · Provincial | Geology maps | Geological maps, mining data, and geoscience publications for NWT | https://www.nwtgeoscience.ca/ |

## 💰 Taxes & Revenue

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Canada Revenue Agency — My Business Account | Canada · Federal | Tax portal | Online business tax portal for GST/HST filing, payroll, and corporate returns | https://www.canada.ca/en/revenue-agency/services/e-services.html |
| CBSA Duty and Taxes Estimator | Canada · Federal | Calculator | Estimate duties, GST and excise taxes owing on goods brought back to Canada for personal use before you reach the border. | https://www.cbsa-asfc.gc.ca/travel-voyage/dte-acl/est-cal-eng.html |
| CRA — Express Notice of Assessment (NOA) | Canada · Federal | Service | Fast online delivery of your Notice of Assessment after filing your tax return | https://www.canada.ca/en/revenue-agency/services/e-services/about-express-noa.html |
| CRA — Federal and Provincial Tax Brackets | Canada · Federal | Reference | Current and historical federal and provincial/territorial personal income tax rates | https://www.canada.ca/en/revenue-agency/services/tax/individuals/frequently-asked-questions-individuals/canadian-income-tax-rates-individuals-current-previous-years.html |
| CRA — GST/HST Calculator and Rates | Canada · Federal | Calculator | Look up the GST/HST rate that applies by province and calculate taxes on sales | https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/charge-collect-which-rate.html |
| CRA — GST/HST Registry Search | Canada · Federal | Lookup tool | Confirm a supplier's GST/HST number was registered on the invoice date by entering the 9-digit BN, legal name, and transaction date. | https://www.businessregistration-inscriptionentreprise.gc.ca/ebci/brom/registry/pub/reg_01_Ld.action |
| CRA — List of Charities and Giving | Canada · Federal | Search | Search registered Canadian charities, view revocation notices, and browse T3010 filings | https://apps.cra-arc.gc.ca/ebci/hacc/srch/pub/dsplyBscSrch |
| CRA — My Account for Individuals | Canada · Federal | Secure portal | View tax returns, refunds, RRSP/TFSA room, CCB payments, and direct-deposit settings | https://www.canada.ca/en/revenue-agency/services/e-services/e-services-individuals/account-individuals.html |
| CRA — NETFILE Certified Software List | Canada · Federal | Finder | Annual list of CRA-certified software (including free options) for filing personal taxes online | https://www.canada.ca/en/revenue-agency/services/e-services/digital-services-individuals/netfile-overview/certified-software-netfile-program.html |
| CRA — Payroll Deductions Online Calculator (PDOC) | Canada · Federal | Calculator | Official calculator for payroll CPP, EI, and federal/provincial income tax deductions | https://www.canada.ca/en/revenue-agency/services/e-services/digital-services-businesses/payroll-deductions-online-calculator.html |
| Report on Federal Tax Expenditures — Data Tables | Canada · Federal | Dataset | Fiscal-cost estimates and projections across ~400 federal tax measures (personal, corporate, GST), downloadable as CSV and XLSX data tables. | https://open.canada.ca/data/en/dataset/0849a2c8-e65f-4874-a978-952029f39c11 |
| Taxpayers' Ombudsperson | Canada · Agency | Ombudsman | Independent review of complaints about CRA service and taxpayer rights | https://www.canada.ca/en/taxpayers-ombudsperson.html |

### British Columbia

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| BC Property Transfer Tax Calculator | British Columbia · Provincial | Calculator | Calculate the provincial property transfer tax due when buying property or acquiring land in British Columbia | https://www2.gov.bc.ca/gov/content/taxes/property-taxes/property-transfer-tax |
| British Columbia — Speculation and Vacancy Tax | British Columbia · Provincial | Tax portal | Annual speculation and vacancy tax for residential property owners in designated BC taxable areas: declare online, check taxable areas with an interactive map, exemptions and tax credits. | https://www2.gov.bc.ca/gov/content/taxes/speculation-vacancy-tax |
| Vancouver Property Tax Calculator | Vancouver · Municipal | Calculator | Estimate your annual property tax in Vancouver based on assessed value and property classification | https://vancouver.ca/home-property-development/property-taxes-and-assessments.aspx |

### Alberta

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Calgary — Assessment Search (myTax) | Calgary · Municipal | Property assessment search | Look up City of Calgary property assessments by address or roll number, review value history, and access detailed assessment and tax tools via secure login. | https://assessmentsearch.calgary.ca/ |
| Calgary — Property Tax Calculator | Calgary · Municipal | Calculator | Estimate and breakdown of Calgary property taxes from assessed value, split between municipal and education shares. | https://www.calgary.ca/property-owners/taxes/calculator.html |
| Edmonton — MyProperty | Edmonton · Municipal | Property assessment and tax portal | See what makes up your Edmonton property's assessed value, compare it with similar properties in your neighbourhood, and view your tax account details. | https://myproperty.edmonton.ca/ |

### Manitoba

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Manitoba TAXcess | Manitoba · Provincial | Tax portal | File and pay Manitoba retail sales tax, payroll tax, and other provincial taxes online | https://taxcess.gov.mb.ca/ |
| Winnipeg — Property Assessment Search | Winnipeg · Municipal | Property assessment search | Search assessed values and property details for any address in Winnipeg through the Assessment and Taxation Department's public online search. | https://www.winnipeg.ca/city-governance/taxes/property-assessment/property-assessment-search |

### Ontario

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Cambridge — Property Tax & Assessment Lookup | Cambridge · Municipal | Lookup tool | Look up a property's five-year tax and assessment history, current installment amounts, request a tax certificate or check account status online. | https://online.cambridge.ca/taxservice/TaxInfo.aspx |
| Mississauga Property Tax Calculator | Mississauga · Municipal | Calculator | Calculate your annual property tax bill in Mississauga based on your property's assessed value | https://www.mississauga.ca/portal/residents/propertytax |
| Ottawa — Property Tax Estimator | Ottawa · Municipal | Calculator | City of Ottawa online estimator that projects total annual property taxes from assessment value based on selected area and municipal services. | https://propertytaxes-taxesfoncieres.ottawa.ca/en?t=taxestimator |
| Toronto — Property Tax Calculator | Toronto · Municipal | Calculator | Instant estimate of Toronto residential property taxes from purchase price or MPAC assessed value. | https://www.toronto.ca/services-payments/property-taxes-utilities/property-tax/property-tax-calculator/ |
| Toronto — Property Tax Lookup | Toronto · Municipal | Property tax account tool | Check your Toronto property tax balance, payment history, instalment due dates and PDF bills online using the roll number and customer number from your bill. | https://www.toronto.ca/services-payments/property-taxes-utilities/property-tax/property-tax-lookup/ |
| Toronto — Vacant Home Tax declaration | Toronto · Municipal | Tax portal | Declare your Toronto residential property's annual occupancy status for the Vacant Home Tax, review exemptions, dispute bills, and pay the 3% tax online. | https://www.toronto.ca/services-payments/property-taxes-utilities/vacant-home-tax/ |

### Quebec

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Revenu Québec — Mon dossier | Quebec · Provincial | Secure portal | Quebec's tax portal for personal and business returns, refunds, and notices | https://www.revenuquebec.ca/en/online-services/online-services |
| Montréal — Evalweb property assessment rolls | Montreal · Municipal | Property assessment search | Look up any property's assessment roll in the Montreal agglomeration by address, lot number or registration number: owner, lot surface, and assessed value of building, lot and property. | https://montreal.ca/en/how-to/check-property-assessment-rolls |
| Montréal — Municipal tax account (Compte de taxes) | Montreal · Municipal | Property tax account tool | View copies of your Montreal municipal tax account statements (current and past 2 years) by tax account number or address, and check your tax account balance online. | https://montreal.ca/en/how-to/view-copy-your-tax-account |

## 🏦 Finance, Banking & Economy

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Bank of Canada — Currency Converter | Canada · Federal | Calculator | Convert to and from Canadian dollars using the Bank of Canada's official daily exchange rates, with historical rates back to 2017. | https://www.bankofcanada.ca/rates/exchange/currency-converter/ |
| Bank of Canada — Inflation Calculator | Canada · Federal | Calculator | Calculate the buying power of the Canadian dollar in any year from 1914 to today | https://www.bankofcanada.ca/rates/related/inflation-calculator/ |
| Bank of Canada — Monetary Policy Report | Canada · Federal | Report | Quarterly report on inflation, growth, and interest-rate outlook with supporting data | https://www.bankofcanada.ca/publications/mpr/ |
| Bank of Canada — Research and Publications | Canada · Federal | Research | Economic research, working papers, staff discussion papers, and data | https://www.bankofcanada.ca/publications/ |
| Bank of Canada — Unclaimed Balances Search | Canada · Federal | Search database | Search $1.6 billion in dormant bank accounts, matured GICs, bank drafts and money orders turned over after 10 years of inactivity — small balances held 30 years, larger ones 100. | https://www.bankofcanada.ca/unclaimed-balances/ |
| Bank of Canada — Valet API | Canada · Federal | API | Free REST API for Bank of Canada datasets: policy interest rate, exchange rates, CPI, money markets, and macro indicators with JSON/CSV output and interactive series builder. | https://www.bankofcanada.ca/valet/ |
| CDIC — List of Member Institutions | Canada · Federal | Lookup tool | Search whether a bank, federal credit union, or trust and loan company is a CDIC member and view its insured trade names. | https://www.cdic.ca/depositors/list-of-members/ |
| CPP/QPP Statement of Contributions | Canada · Federal | Statement | View your CPP/QPP contribution history and estimated retirement benefit | https://www.canada.ca/en/services/benefits/publicpensions/cpp/statement-contributions.html |
| FCAC — Account Comparison Tool | Canada · Federal | Comparator | Compare fees, interest rates and features across 250+ chequing and savings accounts from Canadian banks and credit unions. | https://itools-ioutils.fcac-acfc.gc.ca/ACT-OCC/SearchFilter-eng.aspx |
| FCAC — Budget Planner | Canada · Federal | Budget tool | Interactive Financial Consumer Agency of Canada tool that builds a personalized budget with charts, comparisons to similar households, and a downloadable spreadsheet. | https://itools-ioutils.fcac-acfc.gc.ca/BP-PB/budget-planner |
| FCAC — Credit Card Comparison Tool | Canada · Federal | Comparator | Compare fees, rewards, and interest rates across all federally regulated credit cards | https://itools-ioutils.fcac-acfc.gc.ca/CCCT-OCCC/SearchFilter-eng.aspx |
| FCAC — Mortgage Calculator | Canada · Federal | Calculator | Official mortgage qualifier and payment calculator including stress-test scenarios | https://itools-ioutils.fcac-acfc.gc.ca/MC-CH/MCCalc-CHCalc-eng.aspx |
| Financial Consumer Agency — Consumer Tools | Canada · Federal | Financial tools | Budget planner, credit card selector, bank account comparison, and financial literacy tools | https://www.canada.ca/en/financial-consumer-agency.html |
| FINTRAC — API Report Submission | Canada · Federal | Reporting API | Implement secure system-to-system submissions for financial reports using API documentation and JSON schemas. | https://fintrac-canafe.canada.ca/reporting-declaration/info/api/api-eng |
| FINTRAC — Money Services Business Registry | Canada · Federal | Registry | Search registration status, services and dates for every registered money services business, or download the full monthly registry as CSV/XLSX for due-diligence screening. | https://fintrac-canafe.canada.ca/msb-esm/reg-eng |
| FINTRAC — Transaction Report Volume Data | Canada · Federal | Dataset | Download STR, large-cash, EFT and casino-disbursement report counts by FSA postal code and sector as CSV/XLSX (2011–2023). | https://open.canada.ca/data/en/dataset/81cc47ac-e88d-4b7f-9318-8774a2d919e6 |
| ISED — Trade Data Online | Canada · Federal | Data Tool | Generate customized Canada and U.S. international trade-in-goods reports by product (HS) or industry (NAICS) with over 200 countries, updated monthly with data from Statistics Canada and the U.S. Census Bureau. | https://ised-isde.canada.ca/site/trade-data-online/en |
| OSFI — Bank Financial Data (FINDAT) | Canada · Federal | Dataset | Download monthly/quarterly bank filings as CSV—balance sheets, BASEL III capital, income—plus Open Government API access. | https://open.canada.ca/data/en/dataset/91ed76b4-a1a2-4f87-9c4c-59cd64f7a9de |
| OSFI — Who We Regulate (FRFI & Pension Plan Lists) | Canada · Federal | Registry data | CSV lists of every federally regulated financial institution (banks, insurers, trust and loan companies) and federal private pension plans; updated monthly by OSFI. | https://open.canada.ca/data/en/dataset/b27ec3ef-7338-4e76-a6fd-128339a92df5 |
| Statistics Canada — Personal Inflation Calculator | Canada · Federal | Calculator | Enter your own spending by category to compute your personal inflation rate and chart it against the official CPI, updated monthly with each CPI release. | https://www150.statcan.gc.ca/n1/pub/71-607-x/71-607-x2020015-eng.htm |
| Business Development Bank of Canada (BDC) | Canada · Crown Corp | Business financing | Federal crown corporation providing financing, advisory services, and venture capital to Canadian businesses | https://www.bdc.ca/ |
| CDIC — Deposit Insurance Calculator | Canada · Crown Corp | Calculator | Calculate how much of your bank deposits are protected by CDIC coverage | https://www.cdic.ca/your-coverage/deposit-insurance-calculator/ |
| Export Development Canada — Trade Intelligence | Canada · Crown Corp | Trade data | International trade data, market intelligence, and export tools | https://edc.ca/ |
| Canadian Investor Protection Fund | Canada · Agency | Coverage tool | Check coverage of investment dealer member firms and eligible assets | https://www.cipf.ca/ |
| FINTRAC — Strategic Intelligence Publications | Canada · Agency | Report library | Read FINTRAC operational alerts, briefs, and assessments listing concrete indicators of money laundering, terrorist financing, and sanctions evasion. | https://fintrac-canafe.canada.ca/intel/sintel-eng |
| SEDAR+ — Canadian Securities Filings | Canada · Agency | Filings search | Official filings portal for Canadian public companies — prospectuses, annual reports, continuous disclosure | https://sedarplus.ca/ |

### British Columbia

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| British Columbia — BC Unclaimed Money Search | British Columbia · Agency | Unclaimed property search | Search over $210 million in unclaimed BC funds from banks, courts and government by name, then file a claim online to recover money owed to you. | https://www.bcunclaimed.ca/search |
| BC Securities Commission — InvestRight | British Columbia · Provincial | Investor tools | Check registration, investor alerts, and scam reporting for BC securities investors | https://www.investright.org/ |

### Alberta

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Alberta Securities Commission — Office of the Whistleblower | Alberta · Agency | Complaint / Reporting Tool | ASC program and confidential online/phone channel for reporting securities law breaches (insider trading, fraud, unregistered trading); explains whistleblower who/what/why plus legal protections and tip submission. | https://www.asc.ca/enforcement/office-of-the-whistleblower |
| Ministry of Jobs, Economy & Trade — Alberta Economic Dashboard | Alberta · Provincial | Dashboard | Build custom live dashboards of Alberta GDP, jobs, investment, tourism and trade indicators; search datasets, embed charts, plus regional and major-projects tools. | https://economicdashboard.alberta.ca/ |

### Saskatchewan

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Saskatchewan's Dashboard — Economic Indicators | Saskatchewan · Provincial | Data dashboard | Ministry of Finance indicator dashboard tracking GDP, CPI, employment, earnings, trade, crop production and housing starts, with downloadable CSV, XLS, JSON and XML exports. | https://dashboard.saskatchewan.ca/ |

### Manitoba

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Manitoba — Economic Dashboard | Manitoba · Provincial | Dashboard | Provincial dashboard of timely economic indicators (key indicators, industry, employment/earnings, housing, other) feeding the quarterly fiscal and economic updates, including the Manitoba Economic Activity Index (MEAX). | https://www.gov.mb.ca/finance/economicdashboard/index.html |

### Ontario

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| FSRA Ontario — Credit Unions & Deposit Insurance | Ontario · Agency | Lookup Tool | Ontario credit union/caisse populaire deposit insurance coverage details (up to $250k non-registered, unlimited registered via DIRF) plus find-a-credit-union, supervision list, and complaint channel. | https://www.fsrao.ca/consumers/credit-unions-and-deposit-insurance |
| Ontario Securities Commission — Investor Portal | Ontario · Provincial | Investor tools | Investor education, registration checks, and complaint filing for Ontario securities regulation | https://www.osc.ca/en/investors |

### Quebec

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Autorité des marchés financiers — Registre | Quebec · Provincial | Registry | Quebec's securities and insurance regulator — registrant search, consumer tools, and alerts | https://lautorite.qc.ca/ |
| Quebec — Register of Unclaimed Property (Revenu Québec) | Quebec · Provincial | Unclaimed property search | Search Revenu Québec's register free of charge for unclaimed successions, inactive financial assets and other property, then start a claim online. | https://www.revenuquebec.ca/en/unclaimed-property/searches/register-of-unclaimed-property/ |

### Atlantic Canada (NB, NS, PE, NL)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Nova Scotia Municipal Finance and Statistics | Nova Scotia · Provincial | Reports collection | Hub for per-municipality financial condition indicator reports, municipal statistics annual reports and the FRAM accounting manual (PDF). | https://www.novascotia.ca/programs-and-services/municipal-finance-and-statistics |
| Nova Scotia Public Sector Compensation Disclosure Reports | Nova Scotia · Provincial | Disclosure database | Finance and Treasury Board collection of sunshine-list reports naming public sector employees paid over $100,000; searchable by body, PDF statements. | https://www.novascotia.ca/public-sector-compensation-disclosure-reports |

## 🏢 Business & Procurement

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| BizPaL — Permits and Licences Finder | Canada · Federal | Finder | Generate a personalized list of federal, provincial, and municipal permits you need to operate a business | https://www.bizpal.ca/ |
| Canada Business — Starting a Business | Canada · Federal | Guide | Official guide for starting a business in Canada — permits, taxes, licensing, and supports by province | https://www.canada.ca/en/services/business/start.html |
| Canada Tariff Finder | Canada · Federal | Tariff lookup tool | Find the customs tariff for a specific product in any country Canada has a free trade agreement with, and compare rates across up to three products or markets. | https://www.tariffinder.ca/en/ |
| Canada's Business Registries — Multi-Jurisdiction Search | Canada · Federal | Registry search | Free basic search across the federal registry and eight provincial/territorial business registries from one page (not yet all 14 jurisdictions). | https://ised-isde.canada.ca/cbr-rec/en/search |
| Canada's Business Registries (ISED) | Canada · Federal | Business registry search | Free cross-provincial business lookup aggregating the official registries of AB, BC, MB, NS, ON, QC, SK, and Corporations Canada — one search across jurisdictions. | https://ised-isde.canada.ca/cbr-rec/ |
| CanadaBuys — Federal Tenders | Canada · Federal | Procurement | Modern federal procurement portal replacing buyandsell.gc.ca — browse and bid on tenders | https://canadabuys.canada.ca/en |
| Canadian Importers Database | Canada · Federal | Search database | Find the major companies importing any product into Canada — searchable by product, city, or country of origin, built from CBSA customs data, with the firms behind 80% of imports of each product. | https://ised-isde.canada.ca/site/ised/en/research-and-business-intelligence/canadian-importers-database |
| Canadian Intellectual Property Office (CIPO) | Canada · Federal | Service | Search and apply for patents, trademarks, copyrights, and industrial designs in Canada | https://ised-isde.canada.ca/site/canadian-intellectual-property-office/en |
| Canadian Patents Database | Canada · Federal | Search tool | Search over 2.6 million Canadian patent documents from 1869 to the present, with full-text and images, maintained by CIPO. | https://brevets-patents.ic.gc.ca/opic-cipo/cpd/eng/search/basic.html |
| Canadian Trademarks Database | Canada · Federal | Search tool | CIPO's searchable database of more than 1.4 million Canadian trademarks registered from 1865 to the present, updated weekly. | https://ised-isde.canada.ca/cipo/trademark-search/srch |
| CFIA — Automated Import Reference System (AIRS) | Canada · Federal | Import tool | Question-and-answer tool that walks importers through the exact CFIA requirements, documents and HS codes for bringing food, plants and animals into Canada. | https://inspection.canada.ca/en/importing-food-plants-animals/airs |
| CIPO — Canadian Copyrights Database | Canada · Federal | Searchable database | Search Canadian copyright registrations from 1991 onward by title, owner name, or registration number and view registration details. | https://www.ic.gc.ca/app/opic-cipo/cpyrghts/dsplySrch.do?lang=eng |
| CIPO — Canadian Industrial Designs Database | Canada · Federal | Searchable IP database | Search all registered Canadian industrial designs by title, owner, classification, or registration date, with drawings and status for each design. | https://www.ic.gc.ca/app/opic-cipo/id/bscSrch.do?lang=eng |
| CIPO — Goods and Services Manual | Canada · Federal | Trademark filing tool | Search CIPO's pre-approved goods and services terms and use the Classify List feature to assign Nice classes before filing a Canadian trademark application. | https://www.ic.gc.ca/app/scr/ic/cgs/ext/home.html |
| Corporations Canada — Federal Corporation Search | Canada · Federal | Registry search | Confirm the existence and status of any federally incorporated business, not-for-profit, cooperative or board of trade by name, corporation number or business number. | https://ised-isde.canada.ca/cc/lgcy/fdrlCrpSrch.html |
| Corporations Canada — Nuans Name Search | Canada · Federal | Name search service | Run pre-searches and order official Nuans reports comparing a proposed corporate name against Canada's database of existing corporate names and trademarks. | https://ised-isde.canada.ca/site/nuans-corporate-name-trademark-reports/en/nuansr-corporate-name-and-trademark-reports |
| FedDev Ontario | Canada · Federal | Economic development | Federal economic development agency supporting business growth, innovation, and community economic development in southern Ontario | https://feddev-ontario.canada.ca/ |
| Innovation Canada — Business Benefits Finder | Canada · Federal | Finder | Personalized search of federal, provincial, and regional business funding and support programs | https://ised-isde.canada.ca/ |
| ISED — Beneficial Ownership Discrepancy Reporting | Canada · Federal | Online reporting form | Report material discrepancies between beneficial-ownership records and federal ISC data for high-risk corporations through My ISED. | https://ised-isde.canada.ca/site/corporations-canada/en/beneficial-ownership-discrepancy-reporting |
| ISED — Canadian Importers Database | Canada · Federal | Searchable database | Look up which companies import specific goods into Canada — search by product, city, or country to get lists of major importers based on CBSA customs data. | https://ised-isde.canada.ca/app/ixb/cid-bdic/searchProduct.html |
| ISED — Canadian Industry Statistics | Canada · Federal | Statistics tool | Generate industry snapshots by NAICS code or keyword — GDP, employment, number of businesses, trade, and financial performance trends for any Canadian industry. | https://ised-isde.canada.ca/app/ixb/cis/search-recherche |
| ISED — Canadian Sovereign AI Compute Strategy | Canada · Federal | Strategy and funding portal | Review Canada’s AI compute investments and follow links to the AI Compute Challenge, sovereign infrastructure program, and Compute Access Fund. | https://ised-isde.canada.ca/site/ised/en/canadian-sovereign-ai-compute-strategy |
| ISED — CSBFP Lender Finance Map | Canada · Federal | Interactive map | Find 3,180+ Canada Small Business Financing Program lender branches on an interactive map, or download the full point list as CSV. | https://www.ised-isde.canada.ca/site/maps/en/finance-map |
| ISED — ExploreIP: Canada's IP Marketplace | Canada · Federal | Searchable marketplace | Search thousands of patents held by Canadian governments, universities, and hospitals that are available to license or commercialize, and contact the IP holders directly. | https://ised-isde.canada.ca/ipm-mcpi/ |
| ISED — Financial Performance Data (SME Benchmarking) | Canada · Federal | Benchmarking tool | Build financial benchmark reports for 1,000+ industries — revenues, expenses, profit margins, and balance-sheet ratios — and compare your small business against industry averages. | https://ised-isde.canada.ca/site/financial-performance-data/en |
| MERX — Canadian Procurement Platform | Canada · Federal | Procurement | Canada's largest electronic procurement platform — access federal, provincial, and municipal tender notices across all industries | https://www.merx.com/ |
| OSB — Bankruptcy and Insolvency Records Search | Canada · Federal | Searchable records database | Search every bankruptcy and proposal filed in Canada since 1978, receiverships since 1993, and CCAA records (free); other searches cost $8 per name. | https://www.ic.gc.ca/app/scr/bsf-osb/ins/login.html |
| OSB — Licensed Insolvency Trustee Registry | Canada · Federal | Licence registry | Look up every Licensed Insolvency Trustee in Canada — active, semi-active, and inactive — to verify a trustee's licence before engaging them. | https://www.ic.gc.ca/app/scr/tds/web/complete |
| Statistics Canada — Canadian International Merchandise Trade Web App | Canada · Federal | Interactive data application | Explore monthly Canadian import and export data by HS commodity code, trading partner, and province, with charts, time series, and top-25 commodity rankings. | https://www150.statcan.gc.ca/n1/pub/71-607-x/71-607-x2021004-eng.htm |
| Trade Data Online | Canada · Federal | Data tool | Generate custom reports on Canadian and US trade in goods with 200+ countries by HS product code or industry, with CSV and Excel export, from ISED. | https://ised-isde.canada.ca/site/trade-data-online/en/overview |
| Canadian Commercial Corporation — Government Procurement | Canada · Crown Corp | Procurement | Procurement tools for businesses selling to governments domestically and internationally | https://www.ccc.ca/ |
| Defence Construction Canada | Canada · Crown Corp | Procurement | Defence construction contracting and project management | https://www.dcc-cdc.gc.ca/ |
| Competition Bureau — Report of Merger Reviews | Canada · Agency | Enforcement register | Browse the weekly-updated register of ongoing and concluded merger reviews under the Competition Act, including pre-merger notifications and advance ruling requests. | https://competition-bureau.canada.ca/en/mergers-and-acquisitions/report-concluded-merger-reviews |
| CPATA — Public Register of Patent and Trademark Agents | Canada · Agency | Professional register | Look up any licensed Canadian patent or trademark agent by name, city, or employer and verify their current licence status with the College's regulator register. | https://registre-public-register.cpata-cabamc.ca/ |

### British Columbia

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| BC Bid — Provincial Procurement | British Columbia · Provincial | Procurement | BC's electronic tendering portal for public-sector opportunities across the province | https://www.bcbid.gov.bc.ca/ |
| BC Business Registry — Corporate Online | British Columbia · Provincial | Business registry | Search BC corporate records, register a new business, and file annual reports through BC Corporate Online | https://www.corporateonline.gov.bc.ca/ |
| OrgBook BC | British Columbia · Provincial | Registry search | Public verifiable-credential directory from BC Registries to confirm a business is legally incorporated and in good standing, with API access. | https://orgbook.gov.bc.ca/ |

### Alberta

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Alberta Purchasing Connection | Alberta · Provincial | Procurement | Alberta's public-sector tender site — bid opportunities, awards, and vendor accounts | https://purchasing.alberta.ca/ |
| Treasury Board & Finance — Non-profit Listing Dashboard | Alberta · Provincial | Dashboard | Search Alberta Corporate Registry non-profits by name, type, status and location; export the monthly listing and explore Power BI charts. | https://www.alberta.ca/alberta-non-profit-listing-dashboard |

### Saskatchewan

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| SaskTenders | Saskatchewan · Provincial | Procurement | Saskatchewan government and public-sector tenders and bid opportunities | https://sasktenders.ca/ |

### Manitoba

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Manitoba Tenders | Manitoba · Provincial | Procurement | Provincial tender notices for Manitoba government and public-sector opportunities | https://www.gov.mb.ca/tenders/ |

### Ontario

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Ontario Business Registry | Ontario · Provincial | Business registry | Register, search, and manage Ontario business names, corporations, and partnerships online | https://www.ontario.ca/page/ontario-business-registry |

### Quebec

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Québec — Registre des entreprises | Quebec · Provincial | Business registry | Quebec's official enterprise registry: search corporations, sole proprietorships, and nonprofits by name or NEQ number for status, directors, and filings. Note: site blocks automated requests; browse manually. | https://www.registreentreprises.gouv.qc.ca/ |
| SEAO — Système électronique d'appels d'offres du Québec | Quebec · Provincial | Procurement | Quebec's electronic tender system for public contracts with full search and alerts — currently offline as of May 2026 | https://seao.ca/ |

### Atlantic Canada (NB, NS, PE, NL)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Service New Brunswick — Corporate Registry Search | New Brunswick · Provincial | Public registry lookup | Keyword-search the provincial registry of business corporations, non-profits, partnerships, business names and condominium corporations; buy certificates and filings online. | https://www2.snb.ca/content/snb/en/sites/corporate-registry.html |
| Newfoundland and Labrador — Companies and Deeds Online (CADO) | Newfoundland and Labrador · Provincial | Registry search | Search NL's registry of companies, co-operatives, condos, deeds and mechanics liens electronically, with records from 1982 to present. | https://cado.eservices.gov.nl.ca/ |
| Nova Scotia — RJSC Connect Business Search | Nova Scotia · Provincial | Business registry search | Search Nova Scotia's Registry of Joint Stock Companies by name or Registry ID to see any business, society or non-profit's status, addresses and filing dates. | https://rjsc.novascotia.ca/search |
| PEI — Business / Corporate Registry Search | PEI · Provincial | Business registry search | Search PEI's corporate and business names registry free of charge for corporations, non-profits, co-ops and trade names, and order full profile reports. | https://www.princeedwardisland.ca/en/feature/pei-business-corporate-registry |

### Northern Canada (YT, NT, NU)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Northwest Territories — Corporate Registries Online (CROS) | Northwest Territories · Provincial | Business registry search | Search NWT-registered corporations, business names, partnerships, societies and co-ops — legal name, status and type are free; full profiles cost $4. | https://www.justice.gov.nt.ca/app/cros-rsel/search |
| Nunavut — NNI Registered Business Search | Nunavut · Provincial | Business directory search | Search the Government of Nunavut's database of NNI-registered Nunavut and Inuit-owned businesses eligible for procurement preferences, by name, community or type. | https://nni.gov.nu.ca/business/search |
| Yukon — Corporate Online Registry (YCOR) | Yukon · Provincial | Business registry search | Search Yukon's corporate registry for any business or non-profit and view summary information free, with fee-based entity profiles, certificates and filings. | https://ycor-reey.gov.yk.ca/ |

## 💼 Employment & Labour

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Canada Industrial Relations Board — Decisions Database | Canada · Federal | Decisions database | Search CIRB reasons for decision, certification orders and OHS Tribunal records under the Canada Labour Code and Status of the Artist Act; advanced filters, RSS and email alerts. | https://decisia.lexum.com/cirb-ccri/en/nav.do |
| Canadian Occupational Projection System (COPS) | Canada · Federal | Labour data | Ten-year occupational projections for job openings and job seekers across Canadian occupations | https://occupations.esdc.gc.ca/sppc-cops/ |
| Employment and Social Development Canada — Labour Program | Canada · Federal | Regulator | Federal labour standards, occupational health and safety, workplace equity, and unjust-dismissal info | https://www.canada.ca/en/employment-social-development/corporate/portfolio/labour.html |
| Employment Insurance (EI) — Apply Online | Canada · Federal | Service | Apply for Employment Insurance regular, sickness, maternity, parental, and caregiver benefits | https://www.canada.ca/en/services/benefits/ei.html |
| Employment Insurance Benefits Estimator | Canada · Federal | Calculator | Anonymous Service Canada tool that estimates weekly EI benefit amounts and duration from salary and hours worked — no sign-in or personal information required. | https://estimateurae-eiestimator.service.canada.ca/en |
| ESDC Labour Program — Equi'Vision Employment Equity Dashboard | Canada · Federal | Dashboard | Search and compare workforce representation rates and hourly/bonus/overtime pay gaps by employer, sector, or location for 530+ federally regulated private-sector employers; interactive Power BI. | https://equivision.services.gc.ca/ |
| ESDC Labour Program — Minimum Wage Database | Canada · Federal | Lookup tool | Look up current and forthcoming general minimum wage rates for every province and territory, special rates for students and specific occupations, plus historical rates back to 1965 via custom search. | https://minwage-salairemin.service.canada.ca/en/index.html |
| ESDC Labour Program — Negotech Collective Agreements Library | Canada · Federal | Lookup tool | Full-text search of federal and provincial collective agreements by employer, union, NAICS industry, NOC occupation, dates, employee count and jurisdiction; multiple renewals, PDF downloads. | https://negotech.service.canada.ca/search/index.html |
| GC Jobs — Government of Canada Jobs | Canada · Federal | Job search | Search and apply for federal public service positions across all departments and agencies through the Public Service Commission's hiring portal. | https://www.canada.ca/en/services/jobs/opportunities/government.html |
| Job Bank Canada — Job Search | Canada · Federal | Job search | Official job search tool with 56,000+ postings, filters by location, salary, hours, education | https://www.jobbank.gc.ca/findajob |
| Job Bank Canada — Labour Market Information | Canada · Federal | Labour data | Employment trends, occupation outlook, and market data explorer | https://www.jobbank.gc.ca/trend-analysis |
| Job Bank Canada — Wage Search | Canada · Federal | Wage comparison | Compare wages by occupation and location across Canada | https://www.jobbank.gc.ca/trend-analysis/search-wages |
| Red Seal Program — Skilled Trades | Canada · Federal | Certification | National Red Seal standard for skilled trades — occupation list, exams, and recognized trades | https://red-seal.ca/ |
| Service Canada — Wage Earner Protection Program Application | Canada · Federal | Apply online | Apply online within 56 days for up to $9,275 (2026) in unpaid wages, vacation pay and severance owed when an employer goes bankrupt or into receivership; eligibility and payment details. | https://www.canada.ca/en/employment-social-development/services/wage-earner-protection/employee.html |

### British Columbia

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| WorkBC Job Board — Search Jobs | British Columbia · Provincial | Job search board | Provincial government job board with thousands of postings searchable by keyword, region, industry, occupation and wage, plus high-opportunity occupations and 10-year Labour Market Outlook data. | https://www.workbc.ca/find-job/search-jobs |
| WorkSafeBC | British Columbia · Provincial | Regulator | BC's workers' compensation and occupational health and safety regulator | https://www.worksafebc.com/ |
| WorkSafeBC — Industry Health & Safety Data Dashboards | British Columbia · Provincial | Dashboard | Interactive dashboards of BC injury rates, claim costs, inspections, orders and penalties by industry over 10 years; filter serious injuries and deaths by region, occupation and age. | https://www.worksafebc.com/en/about-us/data-insights/industry-health-safety-data |

### Alberta

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Alberta Labour Statistics | Alberta · Provincial | Statistics portal | Office of Statistics and Information labour data: monthly labour market notes, 10-year occupational outlook, wage and salary survey, job vacancies and economic dashboard indicators. | https://www.alberta.ca/labour-statistics |
| WCB Alberta | Alberta · Provincial | Regulator | Alberta's workers' compensation board — claims, employer accounts, and prevention resources | https://www.wcb.ab.ca/ |
| WCB-Alberta — Premium Rate Manual Search | Alberta · Provincial | Lookup tool | Search or browse all WCB-Alberta industry classification codes and current premium rates per $100 of assessable earnings by sector, rate group and industry; keyword or code search. | https://rm.wcb.ab.ca/WCB.RateManual.WebServer/ |

### Saskatchewan

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Saskatchewan — OH&S Prosecution Outcomes and Statistics | Saskatchewan · Provincial | Enforcement database | Searchable tables of occupational health and safety convictions, fines and acquittals under The Saskatchewan Employment Act, fiscal years 2007-08 to present, plus penalty statistics. | https://www.saskatchewan.ca/business/safety-in-the-workplace/enforcements-prosecutions-and-investigations/prosecution-outcomes-and-statistics |
| Saskatchewan WCB — Classification Index & Premium Rates | Saskatchewan · Provincial | Lookup tool | Filterable online index of every Saskatchewan WCB industry class code (10 schedules, 50 groups) with current-year premium rates, plus downloadable 2026 premium rate summary sheet PDF. | https://www.wcbsask.com/classification |
| Saskatchewan Workers' Compensation Board | Saskatchewan · Provincial | Regulator | File and track workplace injury claims and employer accounts with Saskatchewan's WCB | https://www.wcbsask.com/ |
| SaskJobs — Provincial Job Search Board | Saskatchewan · Provincial | Job search board | Government-run Saskatchewan job board with ~9,600 live postings searchable by occupation, region and community via interactive map; covers health, trades, sales, oil/gas and more. | https://www.saskjobs.ca/ |

### Manitoba

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Manitoba Workplace Safety and Health — Stop Work Orders, Penalties & Convictions | Manitoba · Provincial | Enforcement database | Published lists of Manitoba WSH stop work orders, administrative penalties and court convictions under the Workplace Safety and Health Act, browsable to check any employer's enforcement history. | https://www.gov.mb.ca/labour/safety/compliance.html |
| WCB Manitoba | Manitoba · Provincial | Regulator | Manitoba's workplace injury insurance — online claims, clearances, and employer services | https://www.wcb.mb.ca/ |

### Ontario

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Employment Standards Act Ontario — Tools | Ontario · Federal | Calculators | Calculate overtime, vacation pay, termination pay, and other ESA obligations | https://www.ontario.ca/document/your-guide-employment-standards-act-0 |
| Ontario — WSIB eClearance | Ontario · Agency | Clearance certificate lookup | Verify a contractor's WSIB clearance certificate online — search by business name, account or clearance number (up to 200 at once) before hiring. | https://clearances.wsib.ca/Clearances/eclearance/start?lang=en |
| Ontario Minimum Wage | Ontario · Provincial | Reference | Current and scheduled Ontario minimum wage rates by worker category | https://www.ontario.ca/document/your-guide-employment-standards-act-0/minimum-wage |
| WSIB Ontario | Ontario · Provincial | Regulator | Ontario's workplace injury insurer — file claims, view claim status, and access return-to-work services online | https://www.wsib.ca/ |

### Quebec

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| CNESST — Online Complaint Filing (Dépôt d'une plainte) | Quebec · Provincial | Self-service portal | Start an official CNESST complaint online: guided eligibility questionnaire routes unpaid wages, harassment, reprisal and other labour standards recours. | https://www.cnesst.gouv.qc.ca/fr/service-clientele/plaintes-recours/depot-plainte |
| CNESST — Premium Rate Lookup (Taux de prime) | Quebec · Provincial | Lookup tool | Look up Quebec workplace-safety insurance premium rates per $100 payroll by classification unit; official annual Table des taux PDF and rate components. | https://www.cnesst.gouv.qc.ca/fr/demarches-formulaires/employeurs/assurance-sante-securite-travail/tarification/taux-prime |
| CNESST — Quebec Labour Standards | Quebec · Provincial | Regulator | Quebec commission on labour standards, pay equity, occupational health, and work accidents — open data portal with downloadable datasets on workplace injuries, active establishments, and accepted deaths | https://www.donneesquebec.ca/recherche/dataset?organization=cnesst |

### Atlantic Canada (NB, NS, PE, NL)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Post-Secondary Education, Training and Labour (PETL) — NBjobs Hiring Demand Bulletins & LMI | New Brunswick · Provincial | Dashboard | PETL-run labour market hub: regional online job-ad hiring demand dashboards, labour force statistics, sector profiles and outlook reports based on live job-postings data. | https://www.nbjobs.ca/stats/hiringdemand |
| WorkSafeNB | New Brunswick · Provincial | Regulator | New Brunswick's workplace health, safety, and compensation services — claims and employer accounts online | https://www.worksafenb.ca/ |
| Department of Labour, Skills and Immigration — Licensed Foreign Worker Recruiter Registry | Nova Scotia · Provincial | Registry | Public registry of every Foreign Worker Recruiter Licence issued by the Labour Standards Division: licensee, business, expiry date, conditions, with each licence as a downloadable PDF. | https://novascotia.ca/lae/employmentrights/fw/licensedrecruiters.asp |
| WCB Nova Scotia | Nova Scotia · Provincial | Regulator | Workplace injury insurance for Nova Scotia — online claim services for workers and employers | https://www.wcb.ns.ca/ |
| WCB Prince Edward Island | PEI · Provincial | Regulator | Workers compensation services for PEI — claims, clearances, and workplace safety resources | https://www.wcb.pe.ca/ |
| WorkPEI | PEI · Provincial | Job board | Government-run one-stop employment site: searchable job board, job seeker profiles and alerts, employer directory, labour market info dashboard, occupation profiles and economic indicators. | https://workpei.ca/ |

## 🎓 Education & Student Aid

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Canada Student Loans and Grants | Canada · Federal | Financial aid | Apply for federal student loans and grants, manage your loan, and explore repayment assistance options | https://www.canada.ca/en/services/benefits/education/student-aid.html |

### British Columbia

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| B.C. Education System Performance (Student Success) | British Columbia · Provincial | Data dashboard | Ministry of Education and Child Care tool to look up K-12 data by school district or city: enrolment, completion rates, FSA and graduation assessments, Indigenous student outcomes, child care. | https://studentsuccess.gov.bc.ca/ |
| StudentAid BC | British Columbia · Provincial | Student aid | Apply for BC loans, grants, and scholarships; calculate eligibility; repay student debt | https://studentaidbc.ca/ |

### Alberta

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Alberta Student Aid | Alberta · Provincial | Student aid | Apply for Alberta loans, grants, and scholarships with an account dashboard | https://studentaid.alberta.ca/ |
| ApplyAlberta | Alberta · Provincial | Service | Central application service for Alberta post-secondary institutions | https://www.applyalberta.ca/ |
| Education & Childcare — Childcare Search | Alberta · Provincial | Lookup tool | Search licensed daycares, preschools and family day-home agencies by city, postal code, age and type; map view plus 18 months of non-compliance history. | https://childcare.alberta.ca/childcaresearch |

### Saskatchewan

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Ministry of Education — Regulated Child Care Finder | Saskatchewan · Provincial | Lookup tool | Search 1,380 regulated child-care centres and homes on an interactive map; filter by infants, extended/24-hour hours, francophone and teen-parent programs. | https://www.saskatchewan.ca/residents/family-and-social-support/child-care/find-a-child-care-provider-in-my-community |
| Saskatchewan Apprenticeship & Trade Certification Commission — Trade Certification Verification | Saskatchewan · Provincial | Credential lookup | Online registry to verify whether someone is a registered Saskatchewan apprentice or holds a journeyperson/Red Seal certificate, searchable by name and certification number. | https://saskapprenticeship.ca/check-credentials/ |

### Manitoba

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Manitoba Student Aid | Manitoba · Provincial | Student assistance | Manitoba's provincial student financial assistance program: apply for loans and grants, estimate awards, and manage repayment. | https://www.edu.gov.mb.ca/msa/ |

### Ontario

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| OCAS — Ontario College Application | Ontario · Agency | Service | Central application portal for Ontario's public colleges | https://www.ontariocolleges.ca/ |
| Ontario — OCT Find a Teacher Register | Ontario · Agency | Licence registry search | Search the public register of every certified Ontario teacher by name or OCT number to see qualifications, certification status and any disciplinary findings. | https://apps.oct.ca/findateacher/members |
| OUAC — Ontario Universities' Application Centre | Ontario · Agency | Service | Apply online to Ontario universities using a single OUAC application | https://www.ouac.on.ca/ |
| EQAO — Standardized Assessment Results | Ontario · Provincial | Test results | Education Quality and Accountability Office: provincial test results for Grades 3, 6, 9, and OSSLT literacy, with school- and board-level reports downloadable as datasets. | https://www.eqao.com/ |
| OSAP — Ontario Student Assistance Program | Ontario · Provincial | Student aid | Apply for Ontario student loans and grants, estimate aid, and track your application status | https://www.ontario.ca/page/osap-ontario-student-assistance-program |
| Skilled Trades Ontario — Apprenticeship Registry | Ontario · Provincial | Trades certification | Official body for Ontario apprenticeship and trade certification: apprentice registration, trade exam schedules, certified rosters, and apprenticeship completion data. | https://www.skilledtradesontario.ca/ |

### Quebec

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Aide financière aux études (Quebec) | Quebec · Provincial | Student aid | Quebec's loans and bursaries program for full- and part-time post-secondary students | https://www.quebec.ca/education/aide-financiere-aux-etudes |
| Québec — Student Financial Assistance (AFE) | Quebec · Provincial | Student aid | Québec's loans and bursaries program — eligibility simulators and online application | https://www.quebec.ca/en/education/student-financial-assistance |
| Tableau de bord de l'éducation (MEQ) | Quebec · Provincial | Statistics dashboard | MEQ indicators for preschool-to-secondary education: enrolment, graduation/qualification rates, ministerial exam results, dropouts, teacher vacancies; charts by region and school organization. | https://www.quebec.ca/education/indicateurs-statistiques/prescolaire-primaire-secondaire/tableau-de-bord |

### Atlantic Canada (NB, NS, PE, NL)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Department of Education and Early Childhood Development — Child Care Finder | New Brunswick · Provincial | Lookup tool | Map-search licensed early-learning and childcare sites by community or name; filter by age, open spaces, designation, language and district. | https://www.nbed.nb.ca/parentportal/en/Search/Elc/ |
| New Brunswick Student Financial Services | New Brunswick · Provincial | Student assistance | NB student loans and grants portal: eligibility, application, and repayment for provincial and Canada-New Brunswick integrated loans. | https://www2.gnb.ca/content/gnb/en/services/services_renderer.201437.html |
| Ministry of Education and Early Childhood Development — Early Learning and Child Care Directory | Newfoundland and Labrador · Provincial | Search Directory | Map-based database of all regulated child care in NL — centres, family providers and agencies — searchable by community, route or child's age, with recent violation orders. | https://www.childcare.gov.nl.ca/public/ccr/search |
| Department of Education and Early Childhood Development — Child Care Directory | Nova Scotia · Provincial | Dataset + lookup | Search all ~338 active licensed daycares by county, city or program type; filter licence details, capacity, inspections and age ranges. CSV/GeoJSON/Socrata API downloads. | https://data.novascotia.ca/Education-Early-Childhood/Child-Care-Directory/3j9v-yimg |
| Nova Scotia Student Assistance | Nova Scotia · Provincial | Student aid | Student loans, grants, and repayment assistance for Nova Scotia post-secondary students | https://novascotia.ca/studentassistance/ |

### Northern Canada (YT, NT, NU)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Northwest Territories — Apprenticeship, Trade and Occupation Certification (ATOC) | Northwest Territories · Provincial | Trades certification | Territorial apprenticeship and trade certification program covering 43 designated trades and 17 occupations, with apprentice registration through regional ECE Service Centres and an online ATOC portal. | https://www.ece.gov.nt.ca/en/services/apprenticeship-trade-and-occupation-certification |
| Nunavut — Financial Assistance for Nunavut Students (FANS) | Nunavut · Provincial | Student aid | Territorial funding program for eligible Nunavut post-secondary students covering tuition, travel and living costs, administered by the Department of Education. Confirm eligibility before applying. | https://www.gov.nu.ca/en/education-and-schools/financial-assistance-nunavut-students-fans |
| Yukon Student Financial Assistance | Yukon · Provincial | Student aid | Territorial financial support for Yukon students — Yukon Grant, Student Training Allowance, bursaries and Canada Student Financial Assistance loans/grants — all applied for through one online portal. | https://yukon.ca/en/education-and-schools/financial-support-for-students |

## 🎒 Schools, Education & Boards

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Open Database of Educational Facilities (ODEF) | Canada · Federal | National school dataset | Harmonized open data on ~19,000 Canadian educational facilities with addresses and coordinates — CSV under Open Government Licence. | https://www150.statcan.gc.ca/n1/en/type/data/lode/odef |

### British Columbia

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| BC Public Schools — Location Data | British Columbia · Provincial | School locations | Point locations of BC public schools from provincial open data — download for mapping catchments and facility analysis. | https://catalogue.data.gov.bc.ca/dataset/bc-schools |
| BC School Districts (Spatial) | British Columbia · Provincial | Boundary dataset | Polygon boundaries of BC school districts under the School Act — download shapefile, KML, or access WMS/WFS services. | https://catalogue.data.gov.bc.ca/dataset/school-districts-of-bc |
| BC Teacher Regulation — Find a Teacher (Online Registry) | British Columbia · Provincial | Teacher certification search | Public online registry to search BC teaching certificate holders and letter-of-permission holders by name, with certificate type, validity status, and any disciplinary action on record. | https://teacherregulation.gov.bc.ca/CertificateServices/FindATeacher.aspx |
| Vancouver School Board — School Information | Vancouver · Municipal | School directory | Vancouver School District school finder with programs, catchments, and facility information for public schools. | https://www.vsb.bc.ca/schools |

### Alberta

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Alberta Education — School Directory and Maps | Alberta · Provincial | School directory | Alberta school authority listings, school locations, and jurisdictional boundary information for public schools. | https://education.alberta.ca/ |
| Alberta PAT Results by School and Authority | Alberta · Provincial | Results database | Alberta Education grade 6 and 9 achievement test reporting: searchable 5-year results and participation rates per school and school authority, plus provincial multiyear tables and graphs. | https://www.alberta.ca/provincial-achievement-tests |
| Alberta Teacher & Teacher Leader Registry | Alberta · Provincial | Teacher certification search | Public registry to verify the professional standing of Alberta-certificated teachers, principals and superintendents since 1954, including certificate type, issue date, current status and disciplinary history. | https://educationregistry.alberta.ca/teacher-search |
| Calgary Board of Education — Find a School | Calgary · Municipal | School boundary lookup | Interactive address-based map to find your designated Calgary Board of Education school. Displays walk zones, program locations, attendance areas, and trustee ward boundaries. | https://cbe.ab.ca/schools/find-a-school/Pages/default.aspx |
| Calgary Board of Education — School Directory | Calgary · Municipal | School directory | Search Calgary Board of Education schools by program, grade, and community with contact and boundary information. | https://www.cbe.ab.ca/schools/Pages/default.aspx |
| Edmonton Catholic School District — School Finder | Edmonton · Municipal | Boundary map | Interactive school finder map for Edmonton Catholic Schools. Enter an address to find the designated Catholic school by grade level and program type. Includes ward boundaries and trustee information. | https://schoolmap.ecsd.net/ |

### Saskatchewan

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| SPTRB — Educator Registry (Saskatchewan Teacher Lookup) | Saskatchewan · Agency | Teacher registration lookup | Public registry of everyone certified to teach in Saskatchewan or who held a temporary teaching permit, listing certificate type, status, registration and discipline history. | https://www.sptrb.ca/SPTRB/SPTRB/Annual_Registration/Educator_Registry.aspx |
| Ministry of Education — Directory of Saskatchewan School Divisions | Saskatchewan · Provincial | Dataset / directory | Official downloadable directory (PDF) of all 27 school divisions: addresses, phones, websites, board chairs, directors and CFOs; kept current via Publications Centre API. | https://publications.saskatchewan.ca/api/v1/products/48334/formats/118525/download |
| Regina Catholic Schools — School Finder | Regina · Municipal | Boundary map | Interactive school finder map for Regina Catholic Schools. Click map pins or use the boundary search to find designated Catholic schools by grade level, program, and address location. | https://www.rcsd.ca/school-finder |
| Regina Public Schools — School Finder | Regina · Municipal | School boundary lookup | Enter a Regina address or housing development name to find designated elementary, high school, and French immersion schools within Regina Public Schools boundaries. Interactive reference for attendance zones. | https://www.reginapublicschools.ca/node/28 |

### Manitoba

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Manitoba Education — K-12 Education Data Dashboard | Manitoba · Provincial | Dashboard | View provincial and divisional dashboards for enrolment, EDI, Grade 3–12 assessments, credit attainment and high school graduation rates. | https://www.edu.gov.mb.ca/k12/grad_rates/index.html |
| Manitoba K-12 School Enrolment Reports | Manitoba · Provincial | Enrolment statistics | Download annual October 1 headcount enrolment reports (2000–2025) by school, division, grade, and province in PDF and Excel formats, compiled from public, independent, and home schools. | https://www.edu.gov.mb.ca/k12/finance/sch_enrol/index.html |
| Manitoba School Divisions — Interactive Map | Manitoba · Provincial | School division boundary map | Manitoba Education and Early Childhood Learning's map of school division and district boundaries; search by division, home address or roll number, with direct links to each division website. | https://experience.arcgis.com/experience/76cc45fadad348f9a4a7c225d40a9029 |
| Hanover School Division — Catchment Maps | Manitoba · Regional | Dataset | Downloadable PDF maps showing school catchment boundaries for the Hanover School Division in southeastern Manitoba. Includes division-wide catchment map and individual maps for Steinbach Early Years (K–4), Grades 5–8, and rural areas. Useful for parents, real estate research, and enrollment planning. | https://hsd.ca/schools/catchment-areas/ |
| Louis Riel School Division — School Finder | Winnipeg · Municipal | School boundary lookup | Address-based lookup to find designated English and French Immersion elementary and high schools within the Louis Riel School Division catchment area. | https://www.lrsd.net/locate-a-school |
| Pembina Trails School Division — School Locator | Winnipeg · Municipal | School boundary lookup | Interactive tool to find catchment schools by street name or address within Pembina Trails School Division. Covers English and French Immersion programming with grade-by-grade visual maps. | https://www.pembinatrails.ca/school-locator |

### Ontario

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Ontario Public School Contact Information | Ontario · Provincial | School directory | Contact information for publicly funded Ontario schools including board, school number, level, and language. CSV export. | https://data.ontario.ca/dataset/ontario-public-school-contact-information |
| Ontario School Board Boundaries — Scholars GeoPortal | Ontario · Provincial | Boundary shapefiles | English and French public and separate school board boundary shapefiles for Ontario — download via Scholars GeoPortal. | https://geo2.scholarsportal.info/#r/details/_uri@=1011603538 |
| Ontario School Enrolment by Grade | Ontario · Provincial | Enrolment dataset | Annual school-level enrolment by grade from OnSIS October submission — filter by board, school type, and language. CSV download. | https://data.ontario.ca/dataset/school-enrolment-by-grade |
| Ontario School Information and Demographics | Ontario · Provincial | School profiles dataset | Board and school contact data plus EQAO achievement indicators by school — download consolidated CSV for analysis. | https://data.ontario.ca/dataset/school-information-and-student-demographics |
| Halton Catholic District School Board — School Finder | Halton · Regional | Boundary map | Interactive map to find Catholic school catchment boundaries, school locations, and program offerings across Halton Region (Burlington, Oakville, Milton, Halton Hills). | https://schoolplanning.hcdsb.org/find-your-school/ |
| Peel District School Board School Finder | Peel · Regional | School boundary lookup | Search Peel Region addresses to find assigned PDSB schools — links to Directions boundary maps for elementary and secondary catchments. | https://www.peelschools.org/school-finder |
| YRDSB School Locator | York Region · Regional | School boundary lookup | Enter a York Region street address to find designated elementary and secondary schools with links to boundary map PDFs. | https://schoollocator.yrdsb.ca/ |
| Ottawa-Carleton District School Board School Locator | Ottawa · Municipal | School boundary lookup | OCDSB interactive school locator — find elementary and secondary schools by home address within Ottawa. | https://www.ocdsb.ca/our-schools/school-locator |
| TDSB Open Data | Toronto · Municipal | School board open data | Toronto District School Board open data policy portal — research datasets, census results, and public reports where publishable. | https://www.tdsb.on.ca/Open-Data |
| Toronto District School Board Find Your School | Toronto · Municipal | School boundary lookup | TDSB address-based school finder for elementary and secondary designated schools within Toronto. | https://www.tdsb.on.ca/Find-your/School |

### Quebec

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Québec — Carte interactive des réseaux d'enseignement | Quebec · Provincial | School territory interactive map | Official interactive map of Quebec's education networks: view centre de services scolaire / commission scolaire territories and the schools, private, collégial and university networks within them. | https://infogeo.education.gouv.qc.ca/public/Carte_Interactive/ |
| Québec — School Board and Service Centre Territories | Quebec · Provincial | Dataset | Downloadable GeoJSON, Shapefile, KML, and CSV datasets of all Quebec school board and service centre territories, including francophone centres de services scolaires, anglophone commissions scolaires, and special-status commissions. Includes interactive map viewer. | https://www.donneesquebec.ca/recherche/dataset/territoires-des-commissions-scolaires-du-quebec |
| Quebec School Network Locations | Quebec · Provincial | School locations dataset | Geolocated elementary and secondary schools on the Quebec open data portal — filter by network, level, and region. CSV and API. | https://www.donneesquebec.ca/recherche/fr/dataset/localisation-des-etablissements-d-enseignement-du-reseau-scolaire-au-quebec |

### Atlantic Canada (NB, NS, PE, NL)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| New Brunswick Anglophone School District Boundaries | New Brunswick · Provincial | School district maps | Official PDF maps showing the boundaries for New Brunswick's four anglophone school districts (North, South, East, West) and their sub-districts. Download to determine which school district a property falls into. | https://www.gnb.ca/en/topic/education-training/k-12/district/anglophone.html |
| New Brunswick School Directory | New Brunswick · Provincial | School directory | Searchable directory of all New Brunswick public schools, district offices, and administrators. Search by school name, district, or language; includes print and download options. | https://www.nbed.nb.ca/SchoolDirectory |
| NL Schools — BusPlanner School & Bus Eligibility Lookup | Newfoundland and Labrador · Provincial | Lookup tool | Address-based lookup for every NL community: find which school your address attends and whether it qualifies for busing, with bus stop info for 2026-27. Covers all Anglophone districts. | https://nlschools.mybusplanner.ca/Eligibility |
| Nova Scotia — School Board Zones (English) | Nova Scotia · Provincial | Dataset | Provincial geospatial dataset of English-language Regional Centres for Education (RCE) and school board zones in Nova Scotia. Downloadable as GeoJSON, Shapefile, and KML for mapping student catchment areas, trustee representation, and education planning. | https://data.novascotia.ca/dataset/v69y-jn74 |
| Nova Scotia — School Board Zones (French) | Nova Scotia · Provincial | Dataset | Provincial geospatial dataset of French-language school board zones (Conseil scolaire acadien provincial) in Nova Scotia. Downloadable as GeoJSON, Shapefile, and KML for mapping minority-language education catchment areas and Acadian school boundaries. | https://data.novascotia.ca/dataset/76iu-75v2 |
| NS Education — Directory of Public Schools | Nova Scotia · Provincial | Lookup tool | Interactive map of every NS public school with grades, contacts and RCE/CSAP; download the 2025–2026 directory as Excel plus historical editions. | https://stats-summary.ednet.ns.ca/directory-public-schools |
| Prince Edward Island — School Zoning and Transportation Portal | Prince Edward Island · Provincial | School boundary lookup | Interactive address-based portal to find designated schools, view school boundary maps, and verify school bus transportation eligibility for the PEI Public Schools Branch. Covers all English-language schools in the province. | https://psbbusing.princeedwardisland.ca/Default.aspx |
| Anglophone East School District — Which School Do I Attend? | New Brunswick · Regional | School boundary lookup | Interactive address-based lookup for Anglophone East School District (New Brunswick). Enter a street address, municipality, and grade to find designated schools and verify bus transportation eligibility. | https://asdebp.nbed.nb.ca/Eligibility |
| Anglophone North School District — Which School Do I Attend? | New Brunswick · Regional | School boundary lookup | Interactive address-based lookup for Anglophone North School District (New Brunswick). Enter a street address, municipality, and grade to find designated schools and verify bus transportation eligibility. | https://asdnbp.nbed.nb.ca/Eligibility |
| Anglophone South School District — Which School Do I Attend? | New Brunswick · Regional | School boundary lookup | Interactive address-based lookup for Anglophone South School District (New Brunswick). Enter a street address, municipality, and grade to find designated schools and verify bus transportation eligibility. | https://asdsbp.nbed.nb.ca/Eligibility |
| Anglophone West School District — Which School Do I Attend? | New Brunswick · Regional | School boundary lookup | Interactive address-based lookup for Anglophone West School District (New Brunswick). Enter a street address, municipality, and grade to find designated schools and verify bus transportation eligibility. | https://asdwbp.nbed.nb.ca/Eligibility |
| Francophone Sud School District — Which School Do I Attend? | New Brunswick · Regional | School boundary lookup | Interactive address-based lookup for Francophone Sud School District (New Brunswick). Enter a street address, municipality, and grade to find designated French-language schools and verify bus transportation eligibility. | https://dsfsbp.nbed.nb.ca/Eligibility |
| Halifax Regional Centre for Education — School Finder | Halifax · Municipal | School boundary lookup | Address-based lookup tool to find designated schools in the Halifax Regional Centre for Education. Search by home address to see assigned elementary, middle, and high schools, as well as program options and community boundaries. | https://www.hrce.ca/families/school-finder |

## 🛂 Immigration & Citizenship

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Express Entry — Create an Express Entry Profile | Canada · Federal | Service | Submit your Express Entry profile online to be entered into the pool of candidates for Canada's primary economic immigration programs | https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/submit-profile.html |
| Express Entry — Eligibility Checker | Canada · Federal | Eligibility tool | Find out if you're eligible for Express Entry under the Federal Skilled Worker, Federal Skilled Trades, or Canadian Experience Class programs | https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/eligibility.html |
| Immigration, Refugees and Citizenship Canada — Come to Canada Tool | Canada · Federal | Eligibility tool | Answer two questions to get a personalized list of immigration programs you may be eligible for, with a personal reference code | https://www.canada.ca/en/immigration-refugees-citizenship/services/come-canada-tool.html |
| IRCC — Application Processing Times | Canada · Federal | Reference | Official processing times for PR, citizenship, visas, work/study permits updated weekly | https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html |
| IRCC — Asylum Claimants Monthly Open Data | Canada · Federal | Open data | Monthly IRCC open data on asylum claimants by claim office type, province/territory of claim, age, gender and top countries of citizenship — updated monthly in CSV/XLSX tables. | https://open.canada.ca/data/en/dataset/b6cbcf4d-f763-4924-a2fb-8cc4a06e3de4 |
| IRCC — Check Application Status | Canada · Federal | Status tracker | Check the status of citizenship, permanent residence, and temporary visa applications online | https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-status.html |
| IRCC — Express Entry Rounds of Invitations | Canada · Federal | Reference | Historical CRS cut-off scores and candidate counts for every Express Entry draw | https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-rounds.html |
| IRCC — Find Free Newcomer Services Near You | Canada · Federal | Service finder | Official settlement service search: enter a postal code or city to find free federally funded newcomer services, filterable by language, online/in-person format, and service type (employment help, language training, settlement plans). | https://ircc.canada.ca/english/newcomers/services/index.asp |
| IRCC — Medical Requirements and Panel Physicians | Canada · Federal | Finder | Find IRCC panel physicians and review medical exam requirements by country | https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/medical-exams.html |
| IRCC — Permanent Residents Monthly Open Data | Canada · Federal | Open data | Download monthly PR admissions by province, CMA, citizenship, category, age and gender as CSV or XLSX; updated monthly through June 2026. | https://open.canada.ca/data/en/dataset/f7e5498e-0ad8-4417-85c9-9b8aff9b9eda |
| IRCC — Post-Graduation Work Permit | Canada · Federal | Service | Apply for a PGWP after graduating from a designated Canadian learning institution | https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation.html |
| IRCC — Provincial Nominee Program (PNP) Directory | Canada · Federal | Finder | Links to every provincial and territorial nominee program and its streams | https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees.html |
| IRCC — Study Permit Application | Canada · Federal | Service | Apply for a Canadian study permit and access designated-learning institution list | https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html |
| IRCC — TFWP & IMP Work Permit Holders Monthly Open Data | Canada · Federal | Open data | Monthly IRCC open data on Temporary Foreign Worker Program and International Mobility Program work permit holders by province/territory, occupation, gender, and country of citizenship — updated monthly. | https://open.canada.ca/data/en/dataset/360024f2-17e9-4558-bfc1-3616485d65b9 |
| Pier 21 — Passenger List Database | Canada · Federal | Lookup tool | Searchable, sortable index of 100,000+ passenger arrivals at Pier 21 (1928–1971 gateway era): name, honourific, departure date and ship, for genealogy and immigration-history research. | https://pier21.ca/immigration-records/passenger-list-database |

### British Columbia

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| BC PNP — Invitations to Apply | British Columbia · Provincial | Draw results | BC Provincial Nominee Program draw results by round with minimum scores and invitations issued (Skills and Entrepreneur Immigration), plus the live Skills Immigration registration pool by score band. | https://www.welcomebc.ca/immigrate-to-b-c/about-the-bc-provincial-nominee-program/invitations-to-apply |
| BC Provincial Nominee Program | British Columbia · Provincial | Nominee program | BC PNP streams for skilled workers, tech, entrepreneurs, and graduates | https://www.welcomebc.ca/Immigrate-to-B-C/B-C-Provincial-Nominee-Program |

### Alberta

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Alberta Advantage Immigration Program | Alberta · Provincial | Nominee program | Alberta's PNP streams for skilled workers, entrepreneurs, rural renewal, and tourism | https://www.alberta.ca/alberta-advantage-immigration-program |

### Saskatchewan

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| SINP Processing Statistics — Saskatchewan Immigrant Nominee Program | Saskatchewan · Provincial | Draw results & processing times | Official SINP dashboard: quarterly processing times by category, EOI intake windows and caps for capped sectors, and nominations-issued totals for 2026. | https://www.saskatchewan.ca/residents/moving-to-saskatchewan/live-in-saskatchewan/by-immigrating/saskatchewan-immigrant-nominee-program/sinp-processing-statistics |

### Manitoba

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Manitoba Provincial Nominee Program | Manitoba · Provincial | Nominee program | Manitoba's streams including Skilled Worker in Manitoba, International Education, and Business | https://immigratemanitoba.com/ |

### Ontario

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| OINP — Invitations to Apply | Ontario · Provincial | Draw results | Official record of Ontario Immigrant Nominee Program expression-of-interest invitations to apply, by stream, issue date, profile creation window and score cut-off, back to 2021. | https://www.ontario.ca/page/ontario-immigrant-nominee-program-oinp-invitations-apply |
| Ontario Immigrant Nominee Program (OINP) | Ontario · Provincial | Nominee program | Ontario's PNP streams for skilled workers, international students, and investors | https://www.ontario.ca/page/ontario-immigrant-nominee-program-oinp |

### Quebec

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Quebec Immigration — Mon projet Québec | Quebec · Provincial | Service | Quebec-specific immigration programs including selection criteria for skilled workers | https://www.quebec.ca/en/immigration |

### Atlantic Canada (NB, NS, PE, NL)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| New Brunswick Provincial Nominee Program | New Brunswick · Provincial | Program portal | Immigration NB's NBPNP page: streams, EOI via INB portal, scheduled invitation-draw rounds listing, nomination application steps and post-nomination guidance. | https://www.gnb.ca/en/topic/family-home-community/immigration/provincial-nominee-program.html |
| Office of Immigration and Multiculturalism — AIP Designated Employers List | Newfoundland and Labrador · Provincial | Public Register | Official register of employers designated for the Atlantic Immigration Program, listing each employer's communities, designation date and eligible NOC occupation codes. | https://www.gov.nl.ca/immigration/immigrating-to-newfoundland-and-labrador/atlantic-immigration-program/designated-employers/ |
| Nova Scotia Nominee Program — Live in NS | Nova Scotia · Provincial | Program portal | Official NS government NSNP hub: stream eligibility (Skilled Worker, Graduate, Entrepreneur, Express Entry), EOI submission, draw selection rules, and fee updates. | https://liveinnovascotia.com/nova-scotia-nominee-program |
| PEI PNP Expression of Interest Draws | PEI · Provincial | Draw results publication | PEI Office of Immigration's official publication of EOI invitation-to-apply draw dates, sectors prioritized, and selection criteria for the PEI PNP. | https://www.princeedwardisland.ca/en/information/office-of-immigration/expression-of-interest-draws |

### Northern Canada (YT, NT, NU)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Northwest Territories Nominee Program | Northwest Territories · Provincial | Immigration program portal | NTNP streams (Employer-Driven, Francophone, Business) with an online Expression-of-Interest portal — points grid, draw schedule and employer application accounts. | https://www.immigratenwt.ca/ |
| Yukon Nominee Program | Yukon · Provincial | Program portal | Official yukon.ca YNP page: employer-driven streams, Expression of Interest intakes and scoring priorities, application forms, and eligibility requirements. | https://yukon.ca/en/yukon-nominee-program |

## 🩺 Health & Wellness

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Canada Health Infoway | Canada · Federal | Digital health | Digital health projects, pan-Canadian health data standards, and connected care resources | https://www.infoway-inforoute.ca/ |
| Canada.ca — Drug Shortages Canada | Canada · Federal | Database | Search the official database of reported and resolved drug shortages and discontinuations | https://www.drugshortagescanada.ca/ |
| Canada's Food Guide | Canada · Federal | Reference | Evidence-based food guidance, recipes, and meal planning from Health Canada | https://food-guide.canada.ca/en/ |
| Canadian Institute for Health Information (CIHI) | Canada · Federal | Health data | Independent, not-for-profit organization providing essential health data and information to inform policy, research, and system improvement across Canada | https://www.cihi.ca/en |
| Drug Product Database | Canada · Federal | Search database | Search approved drug products in Canada | https://health-products.canada.ca/dpd-bdpp/ |
| FluWatch — National Influenza Surveillance | Canada · Federal | Surveillance | National influenza surveillance program tracking flu activity across Canada | https://www.canada.ca/en/public-health/services/diseases/flu-influenza.html |
| Health Canada — Canada Vigilance Adverse Reaction Database | Canada · Federal | Searchable safety database | Search suspected adverse reaction (side effect) reports for drugs and health products submitted to Health Canada, with an interactive dashboard and data downloads. | https://cvp-pcv.hc-sc.gc.ca/ |
| Health Canada — Drug and Health Product Inspections Database | Canada · Federal | Inspection results database | Search results and compliance ratings of Health Canada inspections of drug, medical device, and clinical trial establishments in Canada and abroad since 2012. | https://www.drug-inspections.canada.ca/gmp/index-en.html |
| Health Canada — Drug and Health Products Portal | Canada · Federal | Regulatory decisions database | Search Health Canada's regulatory decision summaries, safety reviews, and clinical information for authorized drugs, biologics, and medical devices. | https://dhpp.hpfb-dgpsa.ca/ |
| Health Canada — Drug Product Database (DPD) API | Canada · Federal | Data API | Look up Health Canada drug products by Drug Identification Number, brand name or status — JSON/XML responses for DINs, active ingredients, dosage forms and routes of administration. | https://health-products.canada.ca/api/drug/ |
| Health Canada — Licensed Natural Health Products (LNHPD) API | Canada · Federal | Data API | Look up Health Canada-licensed natural health products by Natural Product Number (NPN), DIN-HM or licence — medicinal and non-medicinal ingredients, doses, routes and risk info in JSON/XML, updated daily. | https://health-products.canada.ca/api/documentation/lnhpd-documentation-en.html |
| Health Canada — Licensed Natural Health Products Database | Canada · Federal | Licence registry search | Search authorized natural health products by NPN/DIN-HM, brand, ingredient or licence holder; check licence status and whether the product is marketed. | https://health-products.canada.ca/lnhpd-bdpsnh/ |
| Health Canada — Notice of Compliance (NOC) API | Canada · Federal | Data API | Query the Notice of Compliance database for drugs authorized for sale in Canada — NOC numbers, dates, manufacturers and product details in JSON or XML, updated nightly. | https://health-products.canada.ca/api/notice-of-compliance/ |
| Health Canada — Pesticide Product and Label Search | Canada · Federal | Searchable product registry | Search all pesticide products registered in Canada by name, registrant, or active ingredient, including full label text and reported incident data. | https://pest-control.canada.ca/pesticide-registry/en/product-search.html |
| Licensed Natural Health Products Database (LNHPD) | Canada · Federal | Product database | Search licensed Canadian natural health products — vitamins, herbals, homeopathics — by product name, licence holder, or NPN number. | https://health-products.canada.ca/lnhpd-bdpsnh/?lang=eng |
| MedEffect Canada — Adverse Reaction Reporting | Canada · Federal | Reporting | Report and search adverse reactions to health products overseen by Health Canada | https://www.canada.ca/en/health-canada/services/drugs-health-products/medeffect-canada.html |
| Medical Devices Active Licence Listing (MDALL) | Canada · Federal | Licence search | Health Canada's public register of all medical devices licensed for sale in Canada, searchable by company, device name, licence number or device identifier. | https://health-products.canada.ca/mdall-limh/ |
| PHAC — Canadian Chronic Disease Surveillance System | Canada · Federal | Data tool | Chart incidence and prevalence for 20+ chronic conditions by province, age and sex from 2000 onward; download custom tables from the data tool. | https://health-infobase.canada.ca/ccdss/data-tool/ |
| PHAC — Health of People in Canada Dashboard | Canada · Federal | Dashboard | Explore 50+ population-health indicators (life expectancy, chronic disease, substance use, social factors) with maps and trends; download the dashboard CSV. | https://health-infobase.canada.ca/health-of-people-in-canada-dashboard/ |
| PHAC — Notifiable Diseases On-Line | Canada · Federal | Surveillance database | Explore annual counts and rates of nationally notifiable infectious diseases back to 1924; build custom charts and export results as CSV or Excel. | https://diseases.canada.ca/notifiable/ |
| PHAC — Opioid- and Stimulant-related Harms Dashboard | Canada · Federal | Dashboard | Explore maps and charts of opioid/stimulant deaths, hospitalizations, ED visits and EMS responses by province since 2016; download the full series as ZIP/CSV. | https://health-infobase.canada.ca/substance-related-harms/opioids-stimulants/ |
| Public Health Agency of Canada — Respiratory Virus Dashboard | Canada · Federal | Dashboard | Weekly surveillance of COVID-19, influenza, and RSV activity across Canada | https://health-infobase.canada.ca/respiratory-virus-detections/ |
| Public Health Agency of Canada — Wastewater Surveillance Dashboard | Canada · Federal | Surveillance dashboard | Track COVID-19, flu A/B, RSV and mpox virus levels in wastewater by site, city and province; download aggregate viral load data as CSV. | https://health-infobase.canada.ca/covid-19/wastewater/ |
| Canadian Blood Services — Donate | Canada · Agency | Service | Book a blood donation, register as a stem-cell donor, and track My Donor account | https://blood.ca/ |

### British Columbia

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| British Columbia — Surgery Wait Times | British Columbia · Provincial | Wait-time lookup | Compare scheduled-surgery wait times in BC by procedure, hospital and surgeon — see the wait to consult a surgeon and the wait for surgery, updated bi-monthly. | https://swt.hlth.gov.bc.ca/ |
| HealthLink BC — 8-1-1 | British Columbia · Provincial | Health service | 24/7 non-emergency health advice, dietitian, and pharmacist services by phone and web in BC | https://www.healthlinkbc.ca/ |
| Vaccinate BC | British Columbia · Provincial | Service | Book BC immunizations, view records, and find vaccine availability | https://www.getvaccinated.gov.bc.ca/ |

### Alberta

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Alberta — AHS Emergency Department Wait Times | Alberta · Agency | Live wait-time dashboard | Check live estimated emergency department and urgent care wait times at hospitals in Calgary, Edmonton and other Alberta cities before you go. | https://www.albertahealthservices.ca/waittimes/waittimes.aspx |
| Alberta Health Analytics Interactive Data | Alberta · Provincial | Dashboards | Alberta Health dashboard suite: childhood immunization coverage, substance use surveillance, PCN community profiles, surgical initiative performance and national health expenditure comparisons. | https://healthanalytics.alberta.ca/health-analytics.html |
| Health Link Alberta — 8-1-1 | Alberta · Provincial | Health service | Alberta's 24/7 telehealth service for health advice and service navigation | https://www.albertahealthservices.ca/healthlink/ |
| MyHealth Alberta | Alberta · Provincial | Health portal | Alberta's health information portal — symptom checker, care guides, and access to personal health records | https://myhealth.alberta.ca/ |

### Saskatchewan

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| eHealth Saskatchewan — Open Data & Public Reporting | Saskatchewan · Provincial | Health data portal | Self-serve de-identified aggregate health datasets: covered population counts and vital statistics (births, deaths, baby names), filterable by year, sex and regional health authority. | https://www.ehealthsask.ca/health-data/analytics/Pages/Open-Data-and-Public-Reporting.aspx |
| eHealth Saskatchewan — Specialist Directory | Saskatchewan · Provincial | Lookup tool | Look up ~200 Saskatchewan surgeons and 2,600 procedures with weekly-updated surgical wait times so patients can compare specialists and travel for faster surgery. | https://specialists.ehealthsask.ca/ |
| Saskatchewan — Drug Plan Formulary Search | Saskatchewan · Provincial | Drug coverage search | Search which medications the Saskatchewan Drug Plan covers, with coverage status, exception drug criteria and formulary bulletins. | https://formulary.drugplan.ehealthsask.ca/ |
| Saskatchewan eHealth | Saskatchewan · Provincial | Health records | Electronic health records, patient portals, and provincial health information services for Saskatchewan residents | https://www.ehealthsask.ca/ |

### Manitoba

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Manitoba — Health Wait Time Information | Manitoba · Provincial | Wait-time dashboard | Look up Manitoba wait times for emergency departments, MRI, CT, ultrasound and surgical and cancer services by facility and region. | https://www.gov.mb.ca/health/waittime/index.html |
| Manitoba — Provincial Health System Performance Dashboard | Manitoba · Provincial | Monthly dashboard reports (PDF) | Monthly PDF scorecards tracking ED/urgent care wait times at sites in all five RHAs, patient experience and expenditure sustainability, with targets and trend context since 2020. | https://www.gov.mb.ca/openmb/infomb/departments/dashboard/index.html |
| Manitoba Health Annual Statistics | Manitoba · Provincial | Statistical report | Download Manitoba Health's 13-section Annual Statistics reports (2013–2021): population, mortality, disease, mental illness, hospital/physician services, home care, and drug use, broken down by RHA. | https://www.gov.mb.ca/health/annstats/ |

### Ontario

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Cancer Care Ontario — Ontario Cancer System | Ontario · Federal | Cancer data | Wait times, screening program results, cancer statistics for Ontario | https://www.cancercareontario.ca/en |
| Ontario — CPSO Physician Register | Ontario · Agency | Licence registry search | Search Ontario's official physician register by name or CPSO number to verify a doctor's licence status, specialty, hospital privileges and disciplinary history. | https://register.cpso.on.ca/ |
| Ontario — Ontario Health Wait Times | Ontario · Agency | Wait-time lookup | Search wait times for surgeries, MRI/CT scans and breast screening by procedure and postal code, with a map of nearby hospitals and their current waits. | https://www.ontariohealth.ca/public-reporting/wait-times |
| Health811 Ontario | Ontario · Provincial | Health service | Ontario's 811 service — chat or call a registered nurse day or night, and find health services near you | https://health811.ontario.ca/ |
| Ministry of Long-Term Care — LTC Home Inspection Reports | Ontario · Provincial | Lookup tool | Search any licensed Ontario long-term care home by name or city to view ministry inspection reports, compliance orders, director actions and home profiles. | https://publicreports.mltc.gov.on.ca/ |
| Ontario — Drug Benefit Formulary Search | Ontario · Provincial | Drug coverage search | Search any drug to see if it is covered by the Ontario Drug Benefit program, with interchangeable products, prices and limited-use criteria. | https://www.formulary.health.gov.on.ca/formulary/ |
| Ontario — Find a Doctor | Ontario · Provincial | Finder | Health Care Connect — register to be matched with a family doctor or nurse practitioner | https://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner |
| Public Health Ontario — Infectious Disease Trends Tool | Ontario · Provincial | Data dashboard | Explore 10+ years of reportable disease cases in Ontario by public health unit, age, sex, hospitalizations and deaths; annual detail plus monthly preliminary snapshots, with exportable tables. | https://www.publichealthontario.ca/en/Data-and-Analysis/Infectious-Disease/Reportable-Disease-Trends-Annually |
| Public Health Ontario — Ontario Respiratory Virus Tool | Ontario · Provincial | Interactive dashboard | Explore weekly COVID-19, influenza and RSV activity by public health unit, age group and setting; filter trends and export graph data to CSV. Updated Fridays. | https://www.publichealthontario.ca/en/Data-and-Analysis/Commonly-Used-Products/Respiratory-Virus-Tool |
| Trillium Gift of Life Network — Organ Donation | Ontario · Provincial | Service | Register as an organ and tissue donor in Ontario | https://www.giftoflife.on.ca/en/ |
| Toronto — SwimSafe Beach Water Quality | Toronto · Municipal | Beach water quality tracker | Check daily E. coli test results and swimming advisories for Toronto's supervised beaches, plus inspection results for public pools, wading pools and splash pads. | https://www.toronto.ca/community-people/health-wellness-care/health-inspections-monitoring/swimsafe/ |

### Quebec

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Info-Santé 811 (Québec) | Quebec · Provincial | Health service | Québec's free 811 telephone consultation service for non-urgent health questions, staffed by nurses | https://www.quebec.ca/en/health/finding-a-resource/info-sante-811 |
| INSPQ — Indicateurs de santé publique | Quebec · Provincial | Data portal | INSPQ surveillance portal of population-health indicators: mortality, chronic and infectious disease, mental health, life habits, social inequalities; dynamic charts filterable by age, sex and region. | https://www.inspq.qc.ca/indicateur |
| MSSS — Emergency Room Hourly Occupancy Data | Quebec · Provincial | Open data feed | Hourly CSV from the provincial ER console: stretcher patients per facility, plus counts waiting 24h/48h+ across every Quebec hospital; refreshed continuously as part of open government. | https://msss.gouv.qc.ca/professionnels/statistiques-donnees-services-sante-services-sociaux/donnees-urgences/ |
| Québec — Performance du réseau de la santé et des services sociaux | Quebec · Provincial | Power BI dashboard | Weekly Power BI dashboard of first-line access, ER, surgery, mental health and HR indicators, filterable by region and CISSS/CIUSSS service territory (RTS); methodology notes included. | https://www.quebec.ca/sante/systeme-et-services-de-sante/organisation-des-services/donnees-systeme-sante-quebecois-services/performance-reseau-sante-services-sociaux |

### Atlantic Canada (NB, NS, PE, NL)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Department of Health — NB Health Link Patient Registry | New Brunswick · Provincial | Patient registry and booking tool | Register online if you lack a family doctor or nurse practitioner; book in-person, phone or virtual appointments and find clinic locations across the province. | https://nbhealthlink.ca/ |
| Department of Health — Surgical Wait Times | New Brunswick · Provincial | Dashboard | Look up typical wait times by surgical procedure (hip/knee, cataract, CABG and more) plus trending, target and surgeon-level reports. | https://www1.gnb.ca/0217/SurgicalWaitTimes/Index-e.aspx |
| NL Centre for Health Information — Health Reports | Newfoundland and Labrador · Provincial | Health analytics reports | Provincial health system analytics: published health reports and indicator data used by government and regional health authorities for performance monitoring and policy. | https://nlchi.nl.ca/index.php/quality-information/health-analytics/health-reports |
| Nova Scotia — Wait Time Information | Nova Scotia · Provincial | Wait-time lookup | Compare wait times for 150+ surgical procedures, MRI/CT scans, cancer care and mental health services across Nova Scotia to find the shortest-wait locations. | https://waittimes.novascotia.ca/ |
| Nova Scotia 811 | Nova Scotia · Provincial | Health service | Non-emergency health information and advice from registered nurses, by phone or online in Nova Scotia | https://811.novascotia.ca/ |
| Health PEI — Emergency Department Wait Times | PEI · Provincial | Live dashboard | Live estimated ER wait times for all four PEI hospital emergency departments (QEH, PCH, KCMH, Western), refreshed every five minutes. | https://www.princeedwardisland.ca/en/information/health-pei/emergency-department-wait-times |

### Northern Canada (YT, NT, NU)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| NWT Open Data — Hospital, Health Centre & Health Station List | Northwest Territories · Provincial | Dataset | Download the list of NWT hospitals, health centres and health stations by facility name, community, level of care and contact information — XLSX on the territorial open data portal. | https://opendata.gov.nt.ca/dataset/hospital-health-centre-and-health-station-list/resource/f0160ad7-b4c0-4bf9-9378-586cf59e0783 |
| Yukon HSS — Public Health Inspections Lookup | Yukon · Provincial | Lookup tool | Search inspection reports for Yukon food premises and personal services establishments by facility or community; Environmental Health Officer reports updated weekly since 2014. | https://www.healthinspections.gov.yk.ca/ |

## 🏥 Health Regions & Local Health

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| CIHI — Indicator Library | Canada · Federal | Indicator library | Search health-system performance indicators with definitions and methods; view results by province, health region or facility and bulk-download all data as Excel. | https://www.cihi.ca/en/access-data-and-reports/indicator-library |

### British Columbia

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Fraser Health — Restaurant Inspection Reports | British Columbia · Provincial | Food inspection search | Search restaurant and food premises inspection reports across Fraser Health communities in Metro Vancouver and the Fraser Valley. | https://www.fraserhealth.ca/health-topics-a-to-z/food-safety/restaurant-inspection-reports |
| Interior Health — Community Health Data | British Columbia · Provincial | Health data | Interior Health population health and community health data reports for BC Interior health authority communities. | https://www.interiorhealth.ca/ |
| Interior Health — Food Facility Inspections | British Columbia · Provincial | Food inspection search | Food facility inspection disclosure for Interior Health region — search by establishment name and community. | https://www.interiorhealth.ca/health-and-wellness/environmental-health-and-hazards/inspection-reports |
| Island Health — Food Facility Inspections | British Columbia · Provincial | Lookup tool | Search Island Health restaurant and food-facility inspections by city; view hazard ratings, violations and closure orders for Vancouver Island premises. | https://inspections.myhealthdepartment.com/island-health/program-food |
| Vancouver Coastal Health — Restaurant Inspections | British Columbia · Provincial | Inspection reports | VCH restaurant and food service inspection reports for Vancouver Coastal region facilities. | https://inspections.vch.ca/ |
| Surrey Fraser Health Restaurant Inspections | Surrey · Municipal | Food inspection dataset | Restaurant inspection reports for Surrey from Fraser Health via the City open data catalogue on ArcGIS Hub — search by establishment and date. | https://opendata-surrey.hub.arcgis.com/ |

### Alberta

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Alberta Health — Interactive Health Data Application (IHDA) | Alberta · Provincial | Health indicator database | Alberta Health's IHDA lets users filter health-status indicators (demographics, mortality, chronic and infectious disease) into exportable data tables, dashboards and interactive maps. | https://www.alberta.ca/interactive-health-data |
| Alberta Health Services — Restaurant Inspections | Alberta · Provincial | Inspection search | Search food, pool, and facility health inspection results across Alberta Health Services zones by establishment name or location. | https://www.albertahealthservices.ca/health-inspections/SearchServlet |
| Alberta Health Services — Zone Maps and Data | Alberta · Provincial | Health authority data | Alberta Health Services zone boundaries, facility locations, and public health data resources. | https://www.albertahealthservices.ca/about/Page13218.aspx |

### Saskatchewan

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Saskatchewan — Inspection InSite (Public Health Inspections) | Saskatchewan · Provincial | Inspection search | Search public health inspection reports for over 5,000 restaurant-type facilities and slaughter plants across Saskatchewan. Find inspection dates, violations, and compliance status by facility name or location. | https://healthinspections.saskatchewan.ca/ |
| Saskatchewan Health — Public Health Monitoring and Surveillance | Saskatchewan · Provincial | Health reports index | Home of the Saskatchewan Health Status Report, population health assessment and surveillance reports (chronic disease, immunization, communicable disease) and the annual covered-population report. | https://www.saskatchewan.ca/government/government-structure/ministries/health/other-reports/public-health-monitoring-and-surveillance |

### Manitoba

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Winnipeg Food Establishment Inspections | Winnipeg · Municipal | Food inspection data | Food establishment inspection records on Winnipeg open data — search results and facility compliance history. | https://data.winnipeg.ca/browse?category=Health |

### Ontario

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Ontario Data Catalogue — Public Health Unit Boundaries | Ontario · Provincial | Geospatial open-data dataset | Download digital boundary files (GeoJSON/shape via GeoHub) for all 34 Ontario public health units under the Open Government Licence – Ontario, for mapping and joins to PHU-level data. | https://data.ontario.ca/en/dataset/public-health-unit-boundaries |
| Hastings Prince Edward Public Health Inspection Search | Belleville · Regional | Food safety inspection search | Search food premises inspection results and compliance history for Belleville, Quinte West, and Hastings-Prince Edward region. | https://www.hpepublichealth.ca/ |
| Middlesex-London Health Unit — Inspection Reports | London · Regional | Food inspection search | Food premise inspection reports for London and Middlesex County from the Middlesex-London Health Unit. | https://www.healthunit.com/food-safety/inspection-reports |
| North Bay Parry Sound District Health Unit Data | North Bay · Regional | Public health data | North Bay Parry Sound District Health Unit reports and local health data — outbreaks, immunization, and community health indicators. | https://www.myhealthunit.ca/en/index.aspx |
| Peel Region Food Check | Peel · Regional | Food inspection data | Food premises inspection records for Peel Region with facility name, inspection date, infractions, and location — updated weekly. | https://data.peelregion.ca/dataset/food-check |
| York Region Public Health — Food Safety Inspections | York Region · Regional | Food inspection data | York Region YorkSafe inspection disclosure program for food premises, recreational water facilities, and personal services settings. | https://www.york.ca/health/inspections-investigations-and-monitoring/yorksafe-inspection-program |
| Hamilton Public Health — Food Safety Inspections | Hamilton · Municipal | Food inspection search | Search food premises inspection results for Hamilton under Hamilton Public Health Services. | https://www.hamilton.ca/people-programs/public-health/health-inspection-results/ |
| Ottawa Public Health — Inspection Connection | Ottawa · Municipal | Food inspection search | Search food establishment inspection results and compliance history from Ottawa Public Health. | https://www.ottawapublichealth.ca/en/public-health-services/public-health-inspections.aspx |
| Ottawa Public Health Inspection Data | Ottawa · Municipal | Food inspection dataset | Download Ottawa food premises inspection data including establishment type, inspection results, and risk categories. | https://open.ottawa.ca/dataset/food-premises-inspections |
| Toronto DineSafe — Food Premises Inspections | Toronto · Municipal | Food inspection dataset | Restaurant and food premises inspection results with pass, conditional pass, or closed status. Download as CSV from the Open Data Portal. | https://open.toronto.ca/dataset/dinesafe/ |
| Toronto Public Health — Open Data Catalogue | Toronto · Municipal | Public health open data | Toronto Public Health datasets on the City open data portal — DineSafe, respiratory outbreaks, and other health indicators. | https://open.toronto.ca/catalogue/?organization=toronto-public-health |

### Quebec

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Québec — Découpage territorial du réseau de la santé (MSSS) | Quebec · Provincial | Territory lookup tool + code tables | Look up CLSC territories from postal/municipal codes via the M34 tool, and get official annual code/name lists for the 18 sociosanitary regions, 22 RTS, 93 RLS and 166 CLSC territories. | https://www.quebec.ca/sante/systeme-et-services-de-sante/organisation-des-services/donnees-systeme-sante-quebecois-services/decoupage-territorial-sante-services-sociaux |
| Montreal Food Inspection Report | Montreal · Municipal | Food inspection dataset | CSV download of municipal food inspection activity reports for restaurants and food establishments on Montreal territory. | https://donnees.montreal.ca/dataset/fa01965a-6db5-42f9-b889-d39769b046eb |

### Atlantic Canada (NB, NS, PE, NL)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| New Brunswick — Food Premises Inspections | New Brunswick · Provincial | Inspection search | Search food premises inspection results for licensed establishments across New Brunswick under the Public Health Act. Find compliance status, inspection frequency, and posted results by establishment type and location. | https://www.gnb.ca/en/topic/laws-safety/health-environment-advisories/food-premises-inspections.html |
| New Brunswick Health Council — Data Tables | New Brunswick · Provincial | Open data portal | Compare health indicators by zone, community, hospital or school district and export any table as CSV or PDF — acute care, surveys and wait times. | https://nbhc.ca/data/browse/data-tables |
| Newfoundland and Labrador — Food Premises Inspection Reports | Newfoundland and Labrador · Provincial | Inspection search | Search food premises health inspection reports for restaurants and food establishments across Newfoundland and Labrador. Find inspection dates, violations, and compliance status by facility name or location. Reports cover the previous two years. | https://www.gov.nl.ca/gs/inspections/ |
| Newfoundland and Labrador — Health Regions | Newfoundland and Labrador · Provincial | Dataset | Spatial delineation of health board coverage regions in Newfoundland and Labrador. Downloadable as KMZ and Shapefile for health service planning, epidemiological mapping, and demographic analysis. | https://opendata.gov.nl.ca/public/opendata/page/?page-id=datasetdetails&id=266 |
| NL Health Services — Health Dashboards Hub | Newfoundland and Labrador · Provincial | Dashboard | Interactive GIS maps to find naloxone kits, flu/COVID vaccine clinics and Family Care Team locations across the province; updated regularly. | https://nlhealthservices.ca/find-health-care/dashboards/ |
| Nova Scotia — Food Establishment Inspection Reports | Nova Scotia · Provincial | Inspection search | Searchable database of food establishment inspection reports across Nova Scotia. Find inspection results for restaurants, grocery stores, and food-service facilities by name, location, or date. Reports cover compliance with food safety regulations and required corrective actions. | https://novascotia.ca/nse/food-protection/food-inspection-reports.asp |
| Nova Scotia Health — Emergency Department Wait Times | Nova Scotia · Provincial | Wait-time portal | Hourly predicted emergency-department wait times for select Nova Scotia hospitals, with emergency-care finder and triage guidance based on the Canadian Triage and Acuity Scale. | https://www.nshealth.ca/emergency-care/emergency-department-wait-times |

### Northern Canada (YT, NT, NU)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| NTHSSA — Performance Indicators Dashboard | Northwest Territories · Provincial | Dashboard | Interactive dashboard of NWT health-system indicators: emergency department physician wait times, Stanton CT/ultrasound waits, air-ambulance flights, medical travel volumes and lab workloads. | https://www.nthssa.ca/en/nthssa-performance-indicator-data |

## 🤝 Benefits & Social Services

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Benefits Finder | Canada · Federal | Service finder | Finds benefits across federal, provincial, and territorial programs | https://www.canada.ca/en/services/benefits/finder.html |
| Canada Child Benefit — Overview and Apply | Canada · Federal | Benefit | Eligibility, payment schedule, and application for the tax-free monthly CCB | https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-child-benefit-overview.html |
| Canada Dental Benefit | Canada · Federal | Benefit | Coverage details and application for the Canadian Dental Care Plan | https://www.canada.ca/en/services/benefits/dental.html |
| Canada Dental Care Plan | Canada · Federal | Health benefit | Apply for the national dental care plan providing coverage for uninsured Canadians with household incomes under $90,000 | https://www.canada.ca/en/services/benefits/dental/dental-care-plan.html |
| Canada Pension Plan (CPP) — Overview and Apply | Canada · Federal | Benefit | Eligibility, amounts, and application for CPP retirement, disability, and survivor benefits | https://www.canada.ca/en/services/benefits/publicpensions/cpp.html |
| Canada Workers Benefit | Canada · Federal | Tax benefit | Refundable tax credit for low-income workers and families to help offset employment costs | https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-workers-benefit.html |
| Canada.ca — Benefits Payment Calendar | Canada · Federal | Calendar | Official payment dates for CPP, OAS, EI, and other Government of Canada benefits | https://www.canada.ca/en/services/benefits/calendar.html |
| Canadian Retirement Income Calculator | Canada · Federal | Calculator | Estimates retirement income from public pensions, workplace pensions, and savings | https://www.canada.ca/en/services/benefits/publicpensions/cpp/retirement-income-calculator.html |
| Child and Family Benefits Calculator | Canada · Federal | Calculator | Estimates child and family benefit amounts | https://www.canada.ca/en/revenue-agency/services/child-family-benefits/child-family-benefits-calculator.html |
| Disability Tax Credit Certificate — Form T2201 | Canada · Federal | Form | Apply for the Disability Tax Credit, which unlocks RDSP, CCB disability supplement, and more | https://www.canada.ca/en/revenue-agency/services/forms-publications/forms/t2201.html |
| Old Age Security (OAS) — Overview and Apply | Canada · Federal | Benefit | Eligibility, amounts, and application for Old Age Security and Guaranteed Income Supplement | https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security.html |
| Old Age Security Benefits Estimator | Canada · Federal | Calculator | Anonymous Service Canada estimator for OAS pension, Guaranteed Income Supplement, Allowance and Allowance for the Survivor amounts based on age, residency and income. | https://estimateursv-oasestimator.service.canada.ca/en/ |
| Registered Disability Savings Plan (RDSP) | Canada · Federal | Savings plan | Overview, grants, and bonds available in the RDSP for eligible Canadians with disabilities | https://www.canada.ca/en/employment-social-development/programs/disability/savings.html |

### British Columbia

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| BC Housing — Shelter Aid for Elderly Renters (SAFER) | British Columbia · Agency | Program portal + estimator | Monthly rent subsidy for low-income BC seniors 60+ renting in the private market, with eligibility info and a rental assistance estimator. | https://www.bchousing.org/housing-assistance/rental-assistance-programs/SAFER |
| BC Child Care Fee Reduction (CCFRI) Estimator | British Columbia · Provincial | Calculator | Estimate monthly child care fee savings from the Child Care Fee Reduction Initiative at participating licensed providers, by care type and age. | https://mychildcareservices.gov.bc.ca/ccfri-estimator |
| BC Fair PharmaCare — Financial Calculator | British Columbia · Provincial | Calculator | Estimate your Fair PharmaCare deductible and family maximum based on income, to gauge provincial help with eligible prescription drug costs. | https://my.gov.bc.ca/fpcare/financial-calculator |
| BC Income Assistance | British Columbia · Provincial | Social assistance | Apply for BC Employment and Assistance or disability assistance | https://www2.gov.bc.ca/gov/content/family-social-supports/income-assistance |

### Alberta

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Alberta Income Support | Alberta · Provincial | Social assistance | Apply for Alberta income support or AISH (Assured Income for the Severely Handicapped) | https://www.alberta.ca/income-support |
| Calgary Equity Index | Calgary · Municipal | Equity map / dashboard | Sophisticated GIS tool mapping equity indicators across the city | https://calgary.ca/research/calgary-equity-index.html |

### Saskatchewan

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Saskatchewan — SAID Income Support for People with Disabilities | Saskatchewan · Provincial | Program portal & rates | Saskatchewan Assured Income for Disability hub: monthly rate tables by community tier, income exemptions, and online application through a Saskatchewan Account with document upload. | https://www.saskatchewan.ca/residents/family-and-social-support/people-with-disabilities/income-support-for-people-with-disabilities |

### Manitoba

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Manitoba — Rent Assist Estimator | Manitoba · Provincial | Calculator | Estimate monthly Rent Assist shelter benefits for low-income private renters — compares 80% of median market rent against 30% of net household income by household size. | https://gov.mb.ca/fs/eia/estimator.html |

### Ontario

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Ontario Electricity Support Program (OESP) | Ontario · Agency | Program portal + application | Monthly on-bill electricity credit for low-income Ontario households, with eligibility thresholds, credit amounts and online application. | https://www.oeb.ca/consumer-information-and-protection/bill-assistance-programs/ontario-electricity-support-program |
| Ontario Disability Support Program (ODSP) | Ontario · Provincial | Social assistance | Apply for ODSP income and employment supports for people with disabilities in Ontario | https://www.ontario.ca/page/ontario-disability-support-program |
| Ontario GeoHub | Ontario · Provincial | GIS / map portal | Ontario's geographic data and interactive map hub | https://geohub.lio.gov.on.ca/ |
| Ontario Works (OW) | Ontario · Provincial | Social assistance | Apply for financial and employment assistance under Ontario Works | https://www.ontario.ca/page/ontario-works |
| London Maps | London · Municipal | GIS | London's interactive GIS mapping tool — property, zoning, infrastructure, and planning data | https://london.ca/living-london/maps |
| Oakville Maps — GeoHub | Ontario · Municipal | GIS | Oakville's interactive mapping portal — property, zoning, parks, and municipal infrastructure | https://maps.oakville.ca/ |
| GeoOttawa | Ottawa · Municipal | Interactive map | Property, zoning, planning, aerials, and city geography layers | https://maps.ottawa.ca/geoottawa/ |

### Quebec

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Québec — Childcare Cost Calculator (subsidized vs non-subsidized) | Quebec · Provincial | Calculator | Compare the net daily cost of subsidized vs non-subsidized childcare for 2026, factoring in Quebec and federal childcare tax assistance. | https://www.finances.gouv.qc.ca/department/tools_services/calculators/daily_childcare_cost/tool_childcare.asp |
| Québec — Services en ligne, aide financière de dernier recours | Quebec · Provincial | Client portal | Mon dossier portal for Québec social assistance: verify payment amounts and dates, submit documents online, track appointments and deadlines, apply and make repayments. | https://www.quebec.ca/famille-et-soutien-aux-personnes/aide-sociale-et-solidarite-sociale/services-en-ligne |

## 🏠 Housing & Real Estate

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| CMHC — Household Characteristics and Core Housing Need Tables | Canada · Federal | Data tables | Download Excel tables on core housing need, tenure, income and household type for Canada, provinces, territories and CMAs. | https://www.cmhc-schl.gc.ca/professionals/housing-markets-data-and-research/housing-data/data-tables/household-characteristics |
| CMHC — Housing Accelerator Fund Progress Report | Canada · Federal | Dashboard | See HAF funding, permit targets and incented units by province and community in an interactive progress report (through March 2026). | https://www.cmhc-schl.gc.ca/professionals/project-funding-and-mortgage-financing/funding-programs/all-funding-programs/housing-accelerator-fund/housing-accelerator-fund-rounds-data |
| CMHC — Housing Market Information Portal | Canada · Federal | Data portal | Free CMHC housing data for any geography from national to neighbourhood: starts, completions, under construction, vacancy rates and rents as tables, maps and comparisons. | https://www.cmhc-schl.gc.ca/hmiportal |
| CMHC — Residential Mortgage Industry Data Dashboard | Canada · Federal | Dashboard | Filter quarterly Canadian mortgage stock, originations, arrears and LTV by lender type; download 2015–2026 tables as XLSX. | https://www.cmhc-schl.gc.ca/professionals/housing-markets-data-and-research/housing-data/residential-mortgage-industry-data-dashboard |
| First Home Savings Account (FHSA) | Canada · Federal | Account | Tax-free registered savings account for first-time home buyers, up to $40,000 lifetime | https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/first-home-savings-account.html |
| Government of Canada Financial Tools and Calculators | Canada · Federal | Calculator hub | Big collection of practical calculators for budgeting, mortgages, loans, credit cards, and retirement | https://www.canada.ca/en/services/finance/tools.html |
| Home Buyers' Plan (HBP) — RRSP Withdrawal | Canada · Federal | Program | Withdraw up to $60,000 tax-free from RRSPs toward a first home — rules and repayment | https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/what-home-buyers-plan.html |
| Canada Lands Company — Property Portfolio | Canada · Crown Corp | Real estate | Surplus federal properties and lands available for redevelopment | https://www.clc.ca/ |
| CMHC — Mortgage Calculator | Canada · Crown Corp | Calculator | Official mortgage payment, amortization, and affordability calculator from CMHC | https://www.cmhc-schl.gc.ca/consumers/home-buying/calculators |
| CMHC Housing Affordability Tracker | Canada · Crown Corp | Housing tool | Monitor housing affordability across Canadian markets | https://www.cmhc-schl.gc.ca/ |
| Canadian Real Estate Association — Stats | Canada · Agency | Market data | Monthly national home sales, prices, and MLS benchmarks by market | https://www.crea.ca/housing-market-stats/ |

### British Columbia

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| BC Housing — Housing Listings | British Columbia · Agency | Housing unit finder | Searchable tool listing 1200+ subsidized, affordable and market rental buildings across BC, filterable by location, housing type and unit size, showing how to apply to each. | https://housingsearch.bchousing.org/ |
| British Columbia — ParcelMap BC Search (LTSA) | British Columbia · Agency | Parcel map search | Search LTSA's authoritative map of all titled and surveyed Crown parcels in BC by address, PID or map click to view parcel boundaries and legal descriptions. | https://maps.ltsa.ca/ |
| BC Assessment — Property Search | British Columbia · Provincial | Property | Look up assessed property values, property class, sales data, and ownership information for any property in BC | https://www.bcassessment.ca/ |
| BC Housing — New Homes Registry Data | British Columbia · Provincial | Data reports register | Monthly New Homes Registry reports on registered new homes by building type, size and location, plus builder/homeowner survey summaries and residential construction statistics for B.C. (PDF archive since 2020). | https://www.bchousing.org/research-centre/housing-data/new-homes-data |
| BC Residential Tenancy Branch | British Columbia · Provincial | Tribunal | Resolve BC tenancy disputes, find tenancy forms, and read the Residential Tenancy Act | https://www2.gov.bc.ca/gov/content/housing-tenancy/residential-tenancies |
| Vancouver Active Condo Listings — City Data | Vancouver · Municipal | Housing | Active Strata and condo listings data published as open data by the City of Vancouver | https://opendata.vancouver.ca/pages/home/ |

### Alberta

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Alberta — Find Housing Digital Service | Alberta · Provincial | Housing finder | Anonymous questionnaire matching users to provincially-subsidized affordable housing options across Alberta (community housing, seniors apartments/lodges), with eligibility screening and application guidance. | https://findhousing.alberta.ca/ |
| Alberta Property Rights — Land Titles | Alberta · Provincial | Land registry | Alberta land titles search — property ownership records, title documents, and land ownership history | https://alta.registries.gov.ab.ca/ |
| Alberta Residential Tenancy Dispute Resolution Service | Alberta · Provincial | Tribunal | Alberta alternative to court for tenancy disputes — applications, forms, and rules | https://www.alberta.ca/residential-tenancy-dispute-resolution-service |

### Saskatchewan

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Saskatchewan — Local Housing Authorities (SHC) | Saskatchewan · Crown Corp | Social housing lookup | Directory of 230+ local housing authorities managing affordable rental housing in 260+ communities, with a 'Search Communities with Housing' tool for contact info and applying for social housing. | https://www.saskatchewan.ca/government/government-structure/crown-corporations/treasury-board-crowns/saskatchewan-housing-corporation/local-housing-authorities |
| Saskatchewan — ISC Land Titles Search | Saskatchewan · Agency | Land registry search | Find any Saskatchewan land title by parcel number, title number, land description or owner name, with a free map search tool and historical title lookups. | https://www.saskregistries.ca/landtitles/findtitle |
| SAMAView — Saskatchewan Assessments Online | Saskatchewan · Provincial | Property | Free search, view and comparison of individual property assessments across all SAMA client municipalities in Saskatchewan. | https://www.sama.sk.ca/property-owner-services/assessments-online-samaview |

### Manitoba

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Manitoba — Title Check (Teranet Manitoba Land Titles) | Manitoba · Provincial | Land title search | Online public search of Manitoba's Land Titles Registry for titles, instruments and survey plans by number, payable by credit card. Completes western-province land-title coverage. | https://teranetmanitoba.ca/land-titles/check-your-title/ |
| Manitoba Assessment Online | Manitoba · Provincial | Property | Search property assessment values and details for all Manitoba properties outside Winnipeg. | https://www.gov.mb.ca/mao/public/default.aspx |
| Manitoba Residential Tenancies Branch | Manitoba · Provincial | Tribunal | Manitoba's branch for residential tenancy disputes, rent regulation, and guidance | https://www.gov.mb.ca/cca/rtb/ |

### Ontario

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Toronto Community Housing — Directory | Toronto · Agency | Housing | Directory of Toronto Community Housing units and application info | https://www.toronto.ca/city-government/data-research-maps/open-data |
| Landlord and Tenant Board (LTB) Ontario | Ontario · Provincial | Tribunal | File applications, download forms, and read LTB rules for Ontario residential tenancy disputes | https://tribunalsontario.ca/ltb/ |
| Ontario — OnLand Property Records | Ontario · Provincial | Land registry | Ontario's official electronic land registration system: title searches, parcel registers, and property imagery for land titles and registry act properties across the province. | https://www.onland.ca/ |
| Ontario Property Assessment — MPAC | Ontario · Provincial | Property | Municipal Property Assessment Corporation — look up your property's assessed value, class, and assessment details | https://www.mpac.ca/ |
| Windsor Property Tax Calculator | Windsor · Municipal | Calculator | Estimate your annual property tax bill in Windsor based on assessed value and property class | https://www.citywindsor.ca/taxes/property-taxes/property-tax-calculator |

### Quebec

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Quebec — Registre foncier du Québec en ligne | Quebec · Provincial | Land registry search | Consult Quebec's land register online by cadastral lot number to trace a property's full transaction history, registered rights and legal documents. | https://www.registrefoncier.gouv.qc.ca/ |
| Tribunal administratif du logement (TAL) Quebec | Quebec · Provincial | Tribunal | Quebec housing tribunal — tenancy dispute filings, forms, and rent increase calculator | https://www.tal.gouv.qc.ca/en |

### Atlantic Canada (NB, NS, PE, NL)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| New Brunswick — Property Assessment Online (PAOL) | New Brunswick · Provincial | Property | Search NB property assessments by address, PAN or PID, with four years of assessment history, recent sale prices and tax levy information on a provincial map. | https://paol-efel.snb.ca/ |
| Nova Scotia — Public Housing Units (Open Data) | Nova Scotia · Provincial | Open dataset | Searchable open-data dataset of Nova Scotia public housing units: civic address, community, county, municipality, housing authority and unit count for locating provincial public housing. | https://data.novascotia.ca/Community-Services/Public-Housing-Units-Nova-Scotia-Families/nxzm-xxps |
| PVSC — Nova Scotia Assessment Search | Nova Scotia · Provincial | Property | Find any of Nova Scotia's 650,000+ property assessments by civic address, assessment account number, community or sale date. | https://www.pvsc.ca/find-assessment |
| PEI Property Tax Calculator | PEI · Provincial | Calculator | Estimate annual property taxes for residential and commercial properties on Prince Edward Island | https://www.princeedwardisland.ca/en/service/property-tax |

## 🛣️ Transportation & Roads

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| CBSA Border Wait Times | Canada · Federal | Live wait times | Live estimated wait times at the 30 busiest US-to-Canada land border crossings, updated at least hourly. | https://www.cbsa-asfc.gc.ca/bwt-taf/menu-eng.html |
| NRCan — Fuel Consumption Ratings Search Tool | Canada · Federal | Search tool | Compare fuel consumption and CO2 emissions of new light-duty vehicles sold in Canada, including hybrids and electric vehicles, with data back to 1995. | https://natural-resources.canada.ca/energy-efficiency/transportation-energy-efficiency/fuel-consumption-guide |
| Transport Canada — Key Transportation Indicators | Canada · Federal | Dashboard | Interactive dashboard of air, marine, road and trade stats (passengers, crossings, commodities) with downloadable ZIP tables by mode. | https://tdih-cdit.tc.canada.ca/en/dashboard/key-transportation-indicators |
| Transport Canada — National Collision Database Online | Canada · Federal | Query tool | Build custom cross-tabulations of police-reported motor vehicle collisions on Canadian public roads from 1999 onward; download resulting tables as CSV, XLS or PDF. | https://wwwapps2.tc.gc.ca/Saf-Sec-Sur/7/NCDB-BNDC/p.aspx?l=en |

### British Columbia

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| DriveBC | British Columbia · Provincial | Road conditions map | Cameras, closures, incidents, and route conditions | https://www.drivebc.ca/ |
| ICBC — Crash Statistics and Open Data | British Columbia · Provincial | Open data portal | Download ICBC crash, casualty, intersection and vehicle-population open datasets (CSV) and explore interactive Tableau dashboards of reported crashes across B.C. | https://www.icbc.com/about-icbc/newsroom/Statistics |
| ICBC — Driver Licensing | British Columbia · Provincial | Service | Book knowledge tests, road tests, renew BC driver's licences, and manage BC ID | https://www.icbc.com/driver-licensing |

### Alberta

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| 511 Alberta | Alberta · Provincial | Road conditions map | Official highway events, road conditions, and cameras | https://511.alberta.ca/ |
| Calgary — Traffic Information Map | Calgary · Municipal | Live traffic map | See real-time Calgary traffic incidents, road closures, construction detours and live camera images on one interactive map before you drive. | https://maps.calgary.ca/TrafficInformation/ |
| Calgary 311 — Service Requests | Calgary · Municipal | Service | Submit and track 311 service requests in Calgary — bylaw violations, road maintenance, parks, and more | https://www.calgary.ca/311.html |
| CalTRACS | Calgary · Municipal | Transportation data tool | Searchable traffic count system with decades of pedestrian, bike, and vehicle data | https://calgary.ca/planning/transportation/traffic-counts.html |
| Edmonton — Current Traffic Disruptions Map | Edmonton · Municipal | Road disruption map | Plan routes around Edmonton road construction, closures, detours and event-related delays with the city's continuously updated traffic disruptions map. | https://www.edmonton.ca/transportation/current-traffic-disruptions |

### Saskatchewan

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Saskatchewan 511 | Saskatchewan · Provincial | Road conditions map | Highway conditions, construction, and road cameras across SK | https://hotline.gov.sk.ca/ |
| SGI — Saskatchewan Driver and Vehicle Services | Saskatchewan · Provincial | Service | Saskatchewan Government Insurance — driver's licence, vehicle registration, and road tests | https://www.sgi.sk.ca/ |

### Manitoba

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Manitoba 511 — Highway Conditions | Manitoba · Provincial | Road conditions map | View live provincial highway conditions on an interactive map: road status, traffic speeds, closures, construction, winter roads, CCTV cameras, and route-planning with email/SMS alerts. | https://www.manitoba511.ca/ |
| Manitoba Public Insurance — Driver Services | Manitoba · Provincial | Service | MPI account for driver's licence, insurance, and vehicle registration in Manitoba | https://www.mpi.mb.ca/ |
| Manitoba Transportation and Infrastructure — Spring Road Restrictions Maps | Manitoba · Provincial | Map collection | Print current-year spring weight-restriction maps for provincial highways by region (11 zone PDFs plus Winnipeg enlargement) alongside the legal Spring Road Restrictions Order. | https://www.gov.mb.ca/mti/srr/srrmap.html |
| Winnipeg — Know Your Zone | Winnipeg · Municipal | Snow zone lookup | Look up your street's snow-clearing zone and get alerts on residential parking bans during Winnipeg plowing operations via address search or the mobile app. | https://www.winnipeg.ca/services-programs/transportation-roads-parking/road-boulevard-maintenance/know-your-zone-app |

### Ontario

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| 511 Ontario | Ontario · Provincial | Road conditions map | Real-time highway conditions, incidents, closures, and cameras | https://511on.ca/ |
| Ontario — Driver's Licence | Ontario · Provincial | Service | Apply for, renew, or replace an Ontario driver's licence and access related services | https://www.ontario.ca/page/drivers-licence |
| Ontario — Licence Plate Sticker Renewal | Ontario · Provincial | Service | Renew your Ontario licence plate sticker online and check renewal status | https://www.ontario.ca/page/renew-licence-plate-sticker |
| Ontario Photo Card | Ontario · Provincial | ID service | Apply for an Ontario Photo Card — government-issued photo ID for residents who don't have a driver's licence | https://www.ontario.ca/page/ontario-photo-card |
| ServiceOntario — Vehicle Registration Renewal | Ontario · Provincial | Service | Renew Ontario vehicle registration, transfer ownership, and order licence plate stickers online | https://www.ontario.ca/page/renew-drivers-licence |
| Ottawa Traffic, Parking and Road Bans | Ottawa · Municipal | Service | View real-time traffic conditions, road closures, parking restrictions, and seasonal road bans in Ottawa | https://traffic.ottawa.ca/ |
| PlowTO — Snow Plow Tracker | Toronto · Municipal | Live map | Near-real-time GPS map of Toronto's salters, road plows, sidewalk plows and cycling-network plows, with colour-coded streets showing how recently each was serviced. | https://www.toronto.ca/services-payments/streets-parking-transportation/road-maintenance/winter-maintenance/plowto/ |
| Toronto — T.O. INview Infrastructure Map | Toronto · Municipal | Construction projects map | Map planned and current construction in Toronto's right of way — road, sewer, water, utility, TTC and Metrolinx projects — searchable by year, location and type. | https://map.toronto.ca/toinview/ |

### Quebec

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| MTMD — Débit de circulation (Traffic Flow Dataset) | Quebec · Provincial | Dataset | Estimated traffic volumes (annual, summer and winter average daily flow) for every provincial road segment from 4,500+ count sites. Downloads in CSV, GeoJSON, SHP, GPKG plus WMS/WFS services. | https://www.donneesquebec.ca/recherche/dataset/debit-de-circulation |
| Quebec 511 | Quebec · Provincial | Road conditions map | Provincial road conditions, incidents, and closures | https://www.quebec511.info/en/ |
| SAAQClic — Quebec Driver Services | Quebec · Provincial | Service | Quebec's online SAAQ portal for driver's licence, vehicle registration, and fines | https://saaq.gouv.qc.ca/en/online-services |
| Allo-MTL — Montréal en temps réel | Montreal · Municipal | Real-time city map | Aggregates 20+ datasets: snow removal, parking signs, bike routes, trees, air quality, and more | https://donnees.montreal.ca/en/showcase/allo-mtl-montreal-temps-reel |
| Montréal — Find a Towed Car | Montreal · Municipal | Lookup tool | Enter your licence plate or the spot where you parked to find out where the city towed your car during snow removal or roadwork. | https://montreal.ca/en/find-towed-car |
| Montréal — Snow Removal Operations Map | Montreal · Municipal | Live map | See when your street is scheduled for snow clearing and loading, plus free incentive parking lots during operations — the map behind the INFO-Neige app. | https://montreal.ca/en/services/snow-removal-operations-map |
| Saguenay Réseau routier — Données Québec | Saguenay · Municipal | Road network dataset | Saguenay municipal road centreline network — CSV, GeoJSON, and shapefile download from Données Québec. | https://www.donneesquebec.ca/recherche/dataset/?organization=ville-de-saguenay&q=r%C3%A9seau+routier |

### Atlantic Canada (NB, NS, PE, NL)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| New Brunswick 511 | New Brunswick · Provincial | Road conditions map | Road conditions, construction, cameras, and travel advisories for NB | https://511.gnb.ca/ |
| Service New Brunswick — Driver and Vehicle Services | New Brunswick · Provincial | Service | Apply and renew NB driver's licences, registrations, and check driver records | https://www2.snb.ca/content/snb/en/services/services_renderer.9955.Driver%E2%80%99s_Licence.html |
| 511 Newfoundland and Labrador Road Conditions | Newfoundland and Labrador · Provincial | Road conditions map | Live provincial highway conditions, closures, incidents, highway cameras, ferry status, Wreckhouse wind warnings and plow tracker; includes a public API for developers. | https://511nl.ca/ |
| 511 Nova Scotia — Road Conditions & Traffic | Nova Scotia · Provincial | Road conditions map | Live road conditions, traffic incidents, construction, highway cameras, ferry status and snow-plow tracking on an interactive map with text reports and route alerts. | https://511.novascotia.ca/ |
| Nova Scotia Registry of Motor Vehicles | Nova Scotia · Provincial | Service | Renew or replace NS driver's licence, vehicle registration, and plates | https://novascotia.ca/sns/access/drivers.asp |
| Access PEI — Driver and Vehicle Services | PEI · Provincial | Service | PEI government services for driver's licences, vehicle registrations, and plates | https://www.princeedwardisland.ca/en/service/driver-licences-vehicle-registration |
| PEI 511 — Road Conditions | PEI · Provincial | Road conditions map | Official provincial traveller service: interactive map and text report of highway conditions, closures, incidents, construction, road cameras, ferries and parks, plus saved routes with email/SMS alerts. | https://511.gov.pe.ca/ |

### Northern Canada (YT, NT, NU)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| 511 Northwest Territories | Northwest Territories · Provincial | Road conditions | NWT highway conditions, closures, and cameras | https://www.dot.gov.nt.ca/Highways/Highway-Conditions |
| NT Drive Yukon — 511 Yukon | Yukon · Provincial | Road conditions | Yukon highway conditions, closures, and cameras | https://511yukon.ca/ |
| Yukon — Driver Licensing | Yukon · Provincial | Service | Yukon driver's licensing, ID cards, and road tests | https://yukon.ca/en/driving-and-transportation/driver-licensing |

## 🚌 Transit & Mobility

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Canadian Public Transit Network Database | Canada · Federal | National GTFS archive | Statistics Canada consolidated national GTFS collection with validation reports and geospatial exports for cross-agency transit analysis. | https://www150.statcan.gc.ca/n1/pub/23-26-0003/232600032025001-eng.htm |

### British Columbia

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| BC Transit Open Data (GTFS) | British Columbia · Provincial | GTFS feeds | GTFS schedule files for BC Transit systems outside Metro Vancouver — download by community or region for provincial transit apps. | https://www.bctransit.com/open-data |
| BC Transit — Trip Planner | British Columbia · Regional | Trip planner | Provincial and municipal transit connections across British Columbia | https://www.bctransit.com/ |
| TransLink GTFS Data | Metro Vancouver · Regional | GTFS feed | GTFS schedule and real-time transit feed downloads for Metro Vancouver bus, SkyTrain, SeaBus, and West Coast Express. | https://www.translink.ca/about-us/doing-business-with-translink/app-developer-resources |
| TransLink Trip Planner | Metro Vancouver · Regional | Trip planner | Great regional transit planning tool | https://www.translink.ca/ |

### Alberta

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Edmonton Transit Service (ETS) | Edmonton · Regional | Transit | ETS bus and LRT trip planning for Edmonton | https://www.edmonton.ca/ets |
| Calgary Transit GTFS | Calgary · Municipal | GTFS feed | Download Calgary Transit GTFS.zip with routes, stops, and schedules from the City developer resources page. | https://data.calgary.ca/browse?category=Transit |
| Edmonton ETS GTFS | Edmonton · Municipal | GTFS feed | ETS GTFS static feed and developer documentation for Edmonton transit routes, stops, and schedules. | https://data.edmonton.ca/Transit/ETS-Bus-Schedule-GTFS-Data-Feed-Stops/4vt2-8zrq |
| Lethbridge Transit GTFS | Lethbridge · Municipal | GTFS feed | Direct GTFS.zip download of Lethbridge Transit bus schedules, routes, stops, and shapes. Hosted on the City's GIS server and not indexed by Transitland — a hard-to-find feed. Updated with each service change; useful for trip planners, mobility apps, and transit analysis in southern Alberta. | https://gis.lethbridge.ca/OpenData/DataSets/GTFS_Transit_Data.zip |

### Saskatchewan

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Saskatoon Transit | Saskatoon · Municipal | Transit | Saskatoon Transit trip planning, schedules, and real-time info | https://saskatoontransit.ca/ |
| Saskatoon Transit Open Data | Saskatoon · Municipal | GTFS and real-time | GTFS static downloads plus real-time trip updates and vehicle positions for Saskatoon Transit developer applications. | https://www.saskatoon.ca/moving-around/transit/open-data-saskatoon-transit |

### Manitoba

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Winnipeg Transit — Trip Planner | Winnipeg · Municipal | Trip planner | Winnipeg Transit trip planning, schedules, and real-time vehicle info | https://www.winnipegtransit.com/ |
| Winnipeg Transit GTFS | Winnipeg · Municipal | GTFS feed | Winnipeg Transit GTFS static feed and developer documentation on the open data portal. | https://data.winnipeg.ca/browse?category=Transit |

### Ontario

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Metrolinx — GO Transit and UP Express GTFS | Ontario · Provincial | GTFS feed | Download current GO Transit and UP Express GTFS.zip schedule feeds (updated Aug 2026) for regional rail and bus apps. | https://www.gotransit.com/en/partner-with-us/software-developers |
| Brampton Transit | Brampton · Regional | Transit | Brampton transit routes, schedules, and Züm BRT info | https://www.brampton.ca/en/residents/transit |
| Burlington Transit | Burlington · Regional | Transit | Burlington bus routes and schedules | https://www.burlington.ca/en/transit |
| Guelph Transit | Guelph · Regional | Transit | Guelph bus routes and trip planning | https://guelph.ca/living/getting-around/bus/ |
| Hamilton Street Railway (HSR) | Hamilton · Regional | Transit | Hamilton bus routes and BLine rapid transit info | https://www.hamilton.ca/hsr |
| London Transit | London · Regional | Transit | London, Ontario bus routes and schedules | https://www.londontransit.ca/ |
| Metrolinx Triplinx | Ontario · Regional | Trip planner | Region-wide transit trip planner across many systems | https://www.triplinx.ca/ |
| Durham Region Transit | Ontario/GTA · Regional | Transit | Durham Region's transit service — routes, schedules, and fares | https://www.durhamregiontransit.com/ |
| Durham Region Transit — GTFS | Ontario/GTA · Regional | GTFS feed | DRT static GTFS schedule package for Durham Region bus routes — direct ZIP download from regional open data. | https://maps.durham.ca/OpenDataGTFS/GTFS_Durham_TXT.zip |
| GO Transit — Trip Planner | Ontario/GTA · Regional | Trip planner | GO Transit schedules, trip planning, and fare information for Greater Toronto Area | https://www.gotransit.com/en/ |
| PRESTO Fare Calculator | Ontario/GTA · Regional | Fare calculator | Transit fare estimator across participating systems | https://www.prestocard.ca/en/about/fare-types-and-discounts |
| York Region Transit (YRT/Viva) | Ontario/GTA · Regional | Transit | York Region Transit and Viva BRT trip planning across York Region | https://www.yrt.ca/ |
| OC Transpo — Trip Planner | Ottawa · Regional | Trip planner | OC Transpo bus and O-Train trip planning for Ottawa | https://www.octranspo.com/ |
| OC Transpo GTFS Feed | Ottawa · Regional | GTFS feed | Official OC Transpo GTFS static feed download and real-time API documentation for Ottawa transit | https://www.octranspo.com/en/plan-your-trip/travel-tools#GTFS |
| Grand River Transit — GTFS Open Data | Waterloo · Regional | GTFS feed | GRT static GTFS plus real-time vehicle positions, trip updates, and service alerts from the Region of Waterloo open data portal. | https://www.grt.ca/about-grt/open-data/ |
| Grand River Transit (Waterloo Region) | Waterloo · Regional | Transit | Waterloo Region bus and ION LRT trip planning and schedules | https://www.grt.ca/ |
| Windsor Transit | Windsor · Regional | Transit | Windsor transit routes and schedules | https://www.citywindsor.ca |
| York Region Transit — GTFS Open Data | York Region · Regional | GTFS feed | YRT/Viva GTFS and real-time GTFS packages for developers — request download after accepting the open data licence. | https://www.yrt.ca/en/about-us/open-data.aspx |
| Barrie Transit GTFS | Barrie · Municipal | GTFS feed | Direct download of Barrie Transit GTFS.zip from the City website for routes, stops, and schedule data. | https://www.barrie.ca/transit |
| Brampton Transit — GTFS (GeoHub) | Brampton · Municipal | GTFS feed | Brampton Transit schedule GTFS ZIP on the City GeoHub — routes, stops, stop times, and shapes for Züm and local service. | https://geohub.brampton.ca/datasets/a355aabd5a8c490186bdce559c9c75fb |
| Burlington Transit — GTFS | Burlington · Municipal | GTFS feed | Burlington Transit GTFS feed for routes, stops, and schedules from the municipal open data program. | https://navburl-burlington.opendata.arcgis.com/pages/data |
| Guelph Transit — GTFS Open Data | Guelph · Municipal | GTFS feed | Guelph Transit GTFS schedule data published on the City open data catalogue for app developers. | https://opendata-guelph.hub.arcgis.com/datasets/guelph-transit-gtfs |
| Guelph Transit GTFS | Guelph · Municipal | GTFS feed | Direct GTFS.zip download of Guelph Transit bus schedules, routes, and stops. Updated when routing or scheduling changes occur; historical versions available via Transitland. | https://gismaps.guelph.ca/Pages/GTFS/google_transit.zip |
| Hamilton Street Railway GTFS | Hamilton · Municipal | GTFS feed | HSR GTFS static schedule data for Hamilton transit routes and stops. | https://open.hamilton.ca/documents/6eeccf172c824c2db0484aea54ed7fe4/explore |
| Kingston Transit GTFS | Kingston · Municipal | GTFS feed | Direct GTFS.zip download of Kingston Transit bus schedules, routes, and stops. Updated regularly; archive versions with historical data available via Transitland. | https://api.cityofkingston.ca/gtfs/gtfs.zip |
| London Transit Commission GTFS | London · Municipal | GTFS feed | LTC GTFS feed download for London, Ontario bus routes, stops, and schedules. | https://www.londontransit.ca/open-data/ |
| Milton — GTFS Feed | Milton · Municipal | Dataset | Direct GTFS.zip download for Milton Transit bus routes and stops. Includes 9 local bus routes (e.g., Trudeau, Thompson/Clark, Yates, Willmott) with schedules, stop locations, and route shapes. Use for transit app development, accessibility planning, or service frequency analysis. Updated periodically by Metrolinx on behalf of Milton Transit. | https://discover-milton.hub.arcgis.com/datasets/6d91cda9496043a395710d0a73a7699f/about |
| MiWay — GTFS Developer Download | Mississauga · Municipal | GTFS feed | MiWay scheduled GTFS and GTFS-Realtime feeds (vehicle positions, trip updates, alerts) for third-party transit apps. | https://www.mississauga.ca/miway-transit/developer-download/ |
| MiWay — Mississauga Transit | Mississauga · Municipal | Transit | MiWay bus routes, schedules, and real-time info for Mississauga | https://www.mississauga.ca/miway |
| North Bay Transit GTFS | North Bay · Municipal | GTFS feed | Direct GTFS.zip download of North Bay Transit bus schedules, routes, and stops. Updated regularly; archive versions with historical data available via Transitland. | https://northbay.tmix.se/gtfs/gtfs.zip |
| Oakville Transit GTFS | Oakville · Municipal | GTFS feed | Direct GTFS.zip download of Oakville Transit bus schedules, routes, and stops. Updated as needed when service changes occur; archive versions available via Transitland. | https://www.arcgis.com/sharing/rest/content/items/d78a1c1ad6a940009de8b68839a8f606/data |
| Thunder Bay Transit | Ontario · Municipal | Transit | Thunder Bay Transit routes, schedules, real-time bus tracking, and fare information | https://www.thunderbay.ca/transit |
| Toronto Bike Share station map | Toronto · Municipal | Mobility map | Station finder and system map for bike share | https://bikesharetoronto.com/system-map/ |
| Toronto TTC GTFS Feed | Toronto · Municipal | GTFS feed | Official TTC GTFS static schedule feed for routes, stops, and trips — download zip from the Open Data Portal for app development. | https://open.toronto.ca/dataset/ttc-routes-and-schedules/ |
| TTC Service Advisories / maps | Toronto · Municipal | Transit tool | Route, service, and map resources for transit users | https://www.ttc.ca/ |
| Transit Windsor — GTFS | Windsor · Municipal | GTFS feed | Static GTFS feed for Windsor Transit routes, stops, and schedules from the City of Windsor open data portal. | https://opendata.citywindsor.ca/Uploads/google_transit.zip |

### Quebec

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| exo — Greater Montreal Commuter Rail and Bus | Montreal · Regional | Trip planner | Trip planning and schedules for Greater Montreal commuter rail and suburban bus network | https://exo.quebec/en |
| Exo GTFS (Montreal Region) | Montreal · Regional | GTFS feed | Exo commuter rail and bus GTFS feeds for Greater Montreal suburbs on Données Québec. | https://exo.quebec/en/about/open-data |
| STM Info outils / network maps | Montreal · Municipal | Transit map/tools | Metro and bus map resources and rider tools | https://www.stm.info/en |
| STM Montreal GTFS | Montreal · Municipal | GTFS feed | Société de transport de Montréal GTFS feed and API documentation for developers building trip planners and analysis tools. | https://www.stm.info/en/about/developers |
| STO — GTFS Open Data (Gatineau) | Quebec · Municipal | GTFS feed | Société de transport de l’Outaouais planned GTFS download plus GTFS-Realtime API key registration for alerts and vehicle positions. | https://www.sto.ca/en/business/developer-space-open-data/ |
| STO — Outaouais Transit (Gatineau) | Quebec · Municipal | Transit | Société de transport de l'Outaouais trip planning and schedules for Gatineau | https://www.sto.ca/en/ |
| RTC — Réseau de transport de la Capitale (Quebec City) | Quebec City · Municipal | Transit | Quebec City bus trip planning, schedules, and real-time arrivals | https://www.rtcquebec.ca/ |
| RTC Québec — GTFS Open Data | Quebec City · Municipal | GTFS feed | Réseau de transport de la Capitale GTFS schedules and route shapes for Quebec City transit — direct download from RTC open data. | https://www.rtcquebec.ca/en/open-data |
| Rimouski — GTFS Transit Data | Rimouski · Municipal | GTFS dataset | Downloadable GTFS dataset for Citébus and Taxibus transit networks in Rimouski, including stop locations, routes, and schedules. Available in GTFS, CSV, GeoJSON, KML, and SHP formats via Données Québec. | https://www.donneesquebec.ca/recherche/dataset/transport-collectif |

### Atlantic Canada (NB, NS, PE, NL)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Halifax Transit GTFS | Halifax · Regional | GTFS feed | Halifax Transit GTFS schedule data available from the HRM open data catalogue. | https://www.halifax.ca/transportation/halifax-transit |

## ✈️ Aviation, Marine & Rail

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| CADORS — Civil Aviation Occurrence Reports | Canada · Federal | Incident database | Transport Canada's Civil Aviation Daily Occurrence Reporting System — query aviation incident and accident reports by date, aerodrome, aircraft, or event type, with TXT export. | https://wwwapps.tc.gc.ca/Saf-Sec-Sur/2/CADORS-SCREAQ/q.aspx?lang=eng |
| Canadian Coast Guard — e-Navigation Data Catalogue | Canada · Federal | Open data portal | Search 41 official marine datasets—AIS aids to navigation, List of Lights, ice, weather XML and notices—and download by coast or Great Lakes region. | https://e-navigation.canada.ca/gn/index-en |
| Canadian Coast Guard — Marine Communications | Canada · Federal | Marine safety | Search and rescue info, nautical charts, and marine safety | https://www.canada.ca/coast-guard |
| Canadian Coast Guard — Notices to Mariners | Canada · Federal | Marine safety | Official Notices to Mariners with corrections to nautical charts and publications | https://www.notmar.gc.ca/ |
| Drone Site Selection Tool | Canada · Federal | Interactive map | Find where drone flight is prohibited, restricted or requires permission: interactive airspace/aerodrome map with basic-to-BVLOS operation layers, refreshed on the 56-day aeronautical cycle. | https://nrc.canada.ca/en/drone-tool/ |
| Marine Atlantic — Ferry Booking and Schedules | Canada · Federal | Ferry booking | Book and plan crossings between Nova Scotia and Newfoundland | https://www.marineatlantic.ca/ |
| NAV CANADA — Aeronautical Publications | Canada · Federal | Aviation maps | Airspace maps, aeronautical information, and flight planning tools | https://www.navcanada.ca/en/aeronautical-information/ |
| NAV CANADA — Flight Planning | Canada · Federal | Flight tools | NOTAM search, Canadian Aviation Weather, and flight planning resources | https://www.navcanada.ca/en/flight-planning/ |
| NAV CANADA — Live NOTAM Map | Canada · Federal | Aviation tool | Live Canadian airspace NOTAM visualization and search | https://plan.navcanada.ca/wxrecall/ |
| Transport Canada — Airworthiness Directives Search (CAWIS) | Canada · Federal | Searchable regulatory database | Search airworthiness directives and service difficulty reports applicable to Canadian aircraft, engines, and propellers in the Continuing Airworthiness Web Information System. | https://wwwapps.tc.gc.ca/saf-sec-sur/2/cawis-swimn/ |
| Transport Canada — CADORS Aviation Occurrence Search | Canada · Federal | Searchable incident database | Search 300,000+ daily aviation occurrence reports (incidents, laser strikes, near misses) by date, aerodrome, aircraft, or occurrence type since 1985. | https://wwwapps.tc.gc.ca/saf-sec-sur/2/cadors-screaq/qs.aspx?lang=eng |
| Transport Canada — Canadian Civil Aircraft Register Search | Canada · Federal | Searchable registry | Look up any Canadian-registered aircraft by mark, owner, manufacturer, or model, and download the full civil aircraft register as a data file. | https://wwwapps.tc.gc.ca/saf-sec-sur/2/ccarcs-riacc/RchSimp.aspx |
| Transport Canada — Drone Registration | Canada · Federal | Service | Register your drone, take the pilot certificate exam, and review Canadian drone rules | https://tc.canada.ca/en/aviation/drone-safety/drone-pilot-licensing |
| Transport Canada — Grade Crossings Inventory | Canada · Federal | Open dataset | Download the location and safety characteristics of every railway grade crossing in Canada, the dataset used by the Railway Safety Oversight Program, updated annually. | https://open.canada.ca/data/en/dataset/d0f54727-6c0b-4e5a-aa04-ea1463cf9f4c |
| Transport Canada — Navigation Protection Program Registry | Canada · Federal | Lookup tool | Search proposed and approved works on Canadian navigable waters by map or waterway; view project records and public comment notices. | https://nwar-rlen.tc.canada.ca/about-apropos |
| Transport Canada — Vessel Registration Query System | Canada · Federal | Searchable registry | Look up any vessel on the Canadian Register of Vessels by name, official number, or owner, including tonnage, dimensions, and registration status. | https://wwwapps.tc.gc.ca/Saf-Sec-Sur/4/vrqs-srib/eng/vessel-registrations |
| VIA Rail — Trip Planner and Booking | Canada · Federal | Trip planner | Train schedules, booking, and trip planning across Canada | https://www.viarail.ca/en/plan |
| Great Lakes St. Lawrence Seaway — Voyage Information System (VIS) | Canada · Crown Corp | Vessel tracker | Track vessels in real time throughout the Great Lakes and St. Lawrence River, view lock/bridge status, buoys, live camera feeds and distance/travel-time tools. | https://vis.greatlakes-seaway.com/ |
| Halifax Port Authority | Canada · Crown Corp | Port portal | Port of Halifax — the Port Operations Centre for tracking containers and transit times, monitoring vessel arrivals and departures, tides and port security. | https://www.porthalifax.ca/ |
| Montreal Port Authority | Canada · Crown Corp | Port portal | Port of Montreal, Eastern Canada's largest container port — vessel arrivals, cargo statistics, and St. Lawrence hydrological data for operations planning. | https://www.port-montreal.com/ |
| Vancouver Fraser Port Authority | Canada · Crown Corp | Port portal | Port of Vancouver, Canada's largest port — terminal information, vessel schedules, marine operations, and cruise/community data. | https://www.portvancouver.com/ |
| Transportation Safety Board — Aviation Investigation Reports | Canada · Agency | Investigation report database | Browse and search TSB air transportation safety investigation reports, active investigations, and safety recommendations dating back to 1991. | https://www.tsb.gc.ca/eng/rapports-reports/aviation/index.html |
| Transportation Safety Board — Aviation Occurrence Data | Canada · Agency | Monthly dataset (CSV) | Download the TSB's full aviation occurrence database as CSV tables covering accidents and incidents since 1995, refreshed monthly, plus annual safety statistics. | https://www.tsb.gc.ca/eng/stats/aviation/index.html |
| Transportation Safety Board — Investigation Reports | Canada · Agency | Investigation reports | Search TSB rail, pipeline, marine and air investigation reports; browse occurrences by mode, year, or investigation class with full PDF reports. | https://www.tsb.gc.ca/eng |
| Transportation Safety Board — Marine Occurrence Data | Canada · Agency | Monthly dataset (CSV) | Download the TSB's marine occurrence database as CSV tables covering shipping accidents and incidents since 1995, refreshed monthly, plus marine safety statistics. | https://www.tsb.gc.ca/eng/stats/marine/index.html |
| Transportation Safety Board — Rail Occurrence Data | Canada · Agency | Monthly dataset (CSV) | Download the TSB's rail occurrence database as CSV tables covering derailments, collisions, and crossing accidents since 1983, refreshed monthly. | https://www.tsb.gc.ca/eng/stats/rail/index.html |

### British Columbia

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Port of Prince Rupert | British Columbia · Crown Corp | Port authority | Canada's second-largest port and a key trade gateway connecting Asia and North America, with real-time vessel tracking and trade data | https://www.rupertport.com/ |
| Vancouver Airport Authority (YVR) | Vancouver · Agency | Airport | YVR flight tracker, parking, terminal maps, and airport services | https://www.yvr.ca/ |
| BC Ferries — Trip Planning and Booking | British Columbia · Regional | Ferry | BC Ferries routes, schedules, reservation booking, and fare information for coastal ferry routes across British Columbia | https://www.bcferries.com/ |

### Alberta

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Calgary International Airport (YYC) | Alberta · Crown Corp | Airport portal | YYC Calgary International Airport — live flight arrivals and departures, airline and terminal information. | https://www.yyc.com/ |

### Manitoba

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Winnipeg Richardson International Airport (YWG) | Manitoba · Crown Corp | Airport portal | Winnipeg Richardson International Airport — live flight information, airlines and terminal services. | https://www.ywgairport.ca/ |

### Ontario

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Hamilton-Oshawa Port Authority | Ontario · Crown Corp | Port portal | Ports of Hamilton and Oshawa on the Great Lakes — vessel schedules, cargo statistics, and port services on the St. Lawrence Seaway system. | https://www.hopaports.ca/ |
| Ottawa International Airport (YOW) | Ontario · Crown Corp | Airport portal | Ottawa International Airport — live flight information, airlines, and terminal services. | https://www.yow.ca/ |
| Greater Toronto Airports Authority (YYZ) | Toronto · Agency | Airport | Pearson International arrivals/departures, parking, and airport info | https://www.torontopearson.com/ |
| Metrolinx GO Transit — Service Updates | Ontario/GTA · Regional | Real-time | Live GO Train and GO Bus service status and advisories for the GTHA | https://www.gotransit.com/en/service-updates |

### Quebec

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Quebec Port Authority | Quebec · Crown Corp | Port portal | Port of Québec — vessel schedule, port statistics, cruise information and marine operations along the St. Lawrence River. | https://www.portquebec.ca/ |
| Aéroports de Montréal (YUL) | Montreal · Agency | Airport | Montréal-Trudeau airport flights, services, and real-time info | https://www.admtl.com/en |
| Quebec ferry — Traverse Québec–Lévis | Quebec · Provincial | Ferry | Quebec City to Lévis ferry service — schedules, fares, and real-time crossing information | https://www.traversiers.com/en/ |

### Atlantic Canada (NB, NS, PE, NL)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Saint John Port Authority | New Brunswick · Crown Corp | Port portal | Port of Saint John, New Brunswick's largest port — vessel schedules, cargo and cruise information, and port facilities. | https://www.sjport.com/ |
| Halifax Stanfield International Airport (YHZ) | Nova Scotia · Crown Corp | Airport portal | Halifax Stanfield International Airport — live arrivals and departures, flight status and airport services. | https://halifaxstanfield.ca/ |
| Ministry of Transportation and Infrastructure — Provincial Ferry Schedules and Rates | Newfoundland and Labrador · Provincial | Schedule Lookup | Summary of all 15 intra-provincial ferry routes with links to seasonal schedules, vessels, crossing times and fare rates, from Bell Island to Labrador coastal ports. | https://www.gov.nl.ca/ti/ferryservices/schedules/ |
| Halifax Transit | Halifax · Regional | Transit | Halifax bus, ferry, and Moving Forward transit plan info | https://www.halifax.ca/transit |

## 🌲 Parks, Trails & Outdoors

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Aulavik National Park | Parks Canada · Federal | National park | Northwest Territories, Banks Island, Muskoxen, world's lowest elevation point in Arctic | https://parks.canada.ca/aulavik |
| Auyuittuq National Park | Parks Canada · Federal | National park | Baffin Island granite spires and glaciers — Arctic Circle wilderness | https://parks.canada.ca/auyuittuq |
| Banff National Park | Parks Canada · Federal | National park | Canada's first national park, Rocky Mountain gateway with maps, trails, wildlife info | https://parks.canada.ca/banff |
| Bruce Peninsula National Park | Parks Canada · Federal | National park | Georgian Bay coastline, Fathom Five marine park, crystal-clear Grotto | https://parks.canada.ca/brucepeninsula |
| Cape Breton Highlands National Park | Parks Canada · Federal | National park | Nova Scotia's highland plateau, Cabot Trail scenery, coastal hiking | https://parks.canada.ca/capebreton |
| Elk Island National Park | Parks Canada · Federal | National park | Alberta plains bison sanctuary and dark-sky preserve east of Edmonton | https://parks.canada.ca/elkisland |
| Fathom Five National Marine Reserve | Parks Canada · Federal | Marine reserve | Lake Huron/Georgian Bay, shipwrecks, underwater preserves | https://parks.canada.ca/fathomfive |
| Georgian Bay Islands National Park | Parks Canada · Federal | National park | Archipelago in eastern Georgian Bay, accessible by boat | https://parks.canada.ca/gbi |
| Glacier National Park | Parks Canada · Federal | National park | BC park in the Selkirk Mountains — glaciers, alpine meadows, and Rogers Pass | https://parks.canada.ca/glacier |
| Grasslands National Park | Parks Canada · Federal | National park | Saskatchewan's mixed-grass prairie park — bison, black-tailed prairie dogs, dark skies | https://parks.canada.ca/grasslands |
| Gulf Islands National Park Reserve | Parks Canada · Federal | National park reserve | Island-hopping, kayaking, and beaches in the Salish Sea (BC) | https://parks.canada.ca/gulfislands |
| Gwaii Haanas National Marine Conservation Area | Parks Canada · Federal | Marine conservation | Remote Haida Gwaii archipelago, kayaking, ancient rainforest | https://parks.canada.ca/gwaiihaanas |
| Ivvavik National Park | Parks Canada · Federal | National park | Northwest Territories, Yukon's Richardson Mountains, wildlife migration | https://parks.canada.ca/ivvavik |
| Jasper National Park | Parks Canada · Federal | National park | Largest national park in the Canadian Rockies, dark sky preserve | https://parks.canada.ca/jasper |
| Kejimkujik National Park | Parks Canada · Federal | National park | Nova Scotia inland and seaside park — canoeing, Mi'kmaq cultural landscape, dark skies | https://parks.canada.ca/kejimkujik |
| Kootenay National Park | Parks Canada · Federal | National park | BC Rockies park with hot springs, painted canyons, and scenic drives | https://parks.canada.ca/kootenay |
| Kouchibouguac National Park | Parks Canada · Federal | National park | New Brunswick's warm-water beaches, salt marshes, and Acadian forest | https://parks.canada.ca/kouchibouguac |
| La Mauricie National Park | Parks Canada · Federal | National park | Quebec's Laurentian wilderness, canoe routes, fall colours | https://parks.canada.ca/mauricie |
| Mingan Archipelago National Park Reserve | Parks Canada · Federal | National park reserve | Quebec's North Shore limestone monoliths, sea caves, and boreal wildlife | https://parks.canada.ca/mingan |
| Mount Revelstoke National Park | Parks Canada · Federal | National park | Inland temperate rainforest, wildflower meadows, and summit vistas in BC | https://parks.canada.ca/revelstoke |
| Pacific Rim National Park Reserve | Parks Canada · Federal | National park reserve | Vancouver Island's rugged Pacific coast, Long Beach, rainforests, and West Coast Trail | https://parks.canada.ca/pacificrim |
| Parks Canada — National Parks System Map | Parks Canada · Federal | Interactive map | Map of all 39 national park and national marine conservation area regions across Canada | https://parks.canada.ca/pn-np/cnpn-cnnp/carte-map |
| Parks Canada — Reservations | Parks Canada · Federal | Booking portal | Book camping, roofed accommodations, and permits across all national parks | https://parks.canada.ca/voyage-travel/reserve |
| Parks Canada Reservation Service | Parks Canada · Federal | Booking service | Official reservations for campsites, backcountry zones, oTENTik tents, the West Coast Trail, Chilkoot Trail and shuttle services across national parks. | https://reservation.pc.gc.ca/ |
| Point Pelee National Park | Parks Canada · Federal | National park | Southernmost mainland Canada — birding hotspot and monarch butterfly migration | https://parks.canada.ca/pelee |
| Prince Albert National Park | Parks Canada · Federal | National park | Saskatchewan boreal forest park — lakes, wildlife, canoeing, and Grey Owl's cabin | https://parks.canada.ca/princealbert |
| Pukaskwa National Park | Parks Canada · Federal | National park | Rugged Lake Superior wilderness, coastal hiking, and Indigenous heritage in Ontario | https://parks.canada.ca/pukaskwa |
| Qausuittuq National Park | Parks Canada · Federal | National park | Nunavut's Bathurst Island, polar bear migration route, Arctic landscapes | https://parks.canada.ca/qausuittuq |
| Quttinirpaaq National Park | Parks Canada · Federal | National park | Nunavut's Ellesmere Island, polar desert, extreme Arctic landscape | https://parks.canada.ca/quttinirpaaq |
| Riding Mountain National Park | Parks Canada · Federal | National park | Prairies, aspen parkland, and boreal forest — bison and dark sky preserve | https://parks.canada.ca/riding |
| Rouge National Urban Park | Parks Canada · Federal | National urban park | Canada's first national urban park, connecting Toronto to nature | https://parks.canada.ca/rouge |
| Sirmilik National Park | Parks Canada · Federal | National park | Nunavut's Place of the Glacier, bowhead whales, narwhals, Inuit homeland | https://parks.canada.ca/sirmilik |
| Terra Nova National Park | Parks Canada · Federal | National park | Newfoundland's Atlantic fjords, boreal forest, and iceberg viewing | https://parks.canada.ca/terranova |
| Thousand Islands National Park | Parks Canada · Federal | National park | St. Lawrence River islands, kayak-accessible camping, near Kingston | https://parks.canada.ca/thousandislands |
| Tuktut Nogait National Park | Parks Canada · Federal | National park | Western Arctic Bluenose-West caribou calving grounds — Inuvialuit homeland | https://parks.canada.ca/tuktutnogait |
| Ukkusiksalik National Park | Parks Canada · Federal | National park | Nunavut's Hudson Bay coast, Inuit cultural landscape, polar bears | https://parks.canada.ca/ukkusiksalik |
| Vuntut National Park | Parks Canada · Federal | National park | Yukon's northernmost park, Yukon's first national park, Inuit homeland | https://parks.canada.ca/vuntut |
| Waterton Lakes National Park | Parks Canada · Federal | National park | Canada's portion of the Waterton-Glacier International Peace Park | https://parks.canada.ca/waterton |
| Wood Buffalo National Park | Parks Canada · Federal | National park | Largest national park in Canada, UNESCO Dark Sky Preserve, world's largest beaver dam | https://parks.canada.ca/woodbuffalo |
| Yoho National Park | Parks Canada · Federal | National park | BC Rockies park of waterfalls, Burgess Shale fossils, and Emerald Lake | https://parks.canada.ca/yoho |

### British Columbia

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| BC Parks | British Columbia · Provincial | Park finder | Clean park search experience with advisories and planning info | https://bcparks.ca/ |
| BC Parks — Camping Reservations | British Columbia · Provincial | Reservation system | Reserve frontcountry campsites, backcountry permits, and group sites in BC's provincial parks | https://camping.bcparks.ca/ |
| BC Parks Find a Park | British Columbia · Provincial | Finder | Filterable park explorer by activity, facilities, and area | https://bcparks.ca/find-a-park/ |
| BC Parks Maps | British Columbia · Provincial | Interactive maps | Rich park map with overlays like closures, weather, cell coverage, and earthquakes | https://bcparks.ca/plan-your-trip/maps |
| Recreation Sites and Trails B.C. | British Columbia · Provincial | Outdoor map / finder | Great search and filterable map for trails, recreation sites, alerts, and closures | https://www.sitesandtrailsbc.ca/ |

### Alberta

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Alberta Interactive Recreation Map | Alberta · Provincial | Interactive map | Government of Alberta map showing Crown land recreation sites, public land areas, trails, Public Land Use Zones and recreation pass boundaries. | https://esrd.maps.arcgis.com/apps/webappviewer/index.html?id=e5651574de1342d7ae8277ef415864be |
| Alberta Parks | Alberta · Provincial | Park finder | Park discovery, activities, reservations, and maps | https://www.albertaparks.ca/ |
| Alberta Parks — Reservations | Alberta · Provincial | Reservation system | Book campsites and comfort camping across Alberta's provincial parks and recreation areas | https://reserve.albertaparks.ca/ |
| Public Land Recreation Maps | Alberta · Provincial | Recreation map hub | Downloadable and georeferenced recreation maps for public land | https://www.alberta.ca/public-land-recreation-maps |
| Public Land Use | Alberta · Provincial | Outdoor info hub | Closures, advisories, PLUZ info, maps, and camping pass links | https://www.alberta.ca/public-land-use-zones |

### Saskatchewan

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Sask Parks — Provincial Parks Portal | Saskatchewan · Provincial | Park finder & reservations | Official portal for Saskatchewan's provincial parks and recreation sites: campsite and yurt reservations, park entry permits, park guides, maps and seasonal reservation schedules. | https://www.saskparks.com/ |

### Manitoba

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Manitoba Parks — Parks Reservation Service | Manitoba · Provincial | Reservation tool | Reserve campsites, cabins, yurts and group-use areas at 46 provincial-park locations online via manitoba.goingtocamp.com, or by phone. | https://www.manitoba.ca/sd/parks/prs/index.html |
| Manitoba Wildlife Lands Map | Manitoba · Provincial | Interactive map | Manitoba map of wildlife management areas, refuges, special conservation areas, managed hunting areas, trails, points of interest and hunting restrictions. | https://geoportal.gov.mb.ca/maps/0d40d443865945e88873bba842a15e92 |

### Ontario

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Ontario Trails Council | Ontario · Agency | Trails finder | Searchable directory of 2,300+ Ontario trails across hiking, biking, paddling, and skiing | https://ontariotrails.on.ca/ |
| Fish ON-Line | Ontario · Provincial | Interactive map | Ontario's angler map of 20,000+ waterbodies: fish species observed, stocking records, regulations and sanctuaries, access points and lake depth contours. | https://www.ontario.ca/page/how-use-fish-line |
| Ontario Parks | Ontario · Provincial | Park finder / booking | Park discovery, camping, maps, and trip planning | https://www.ontarioparks.ca/ |
| Ontario Parks — Reservations | Ontario · Provincial | Reservation system | Book campsites, roofed accommodations, and backcountry permits across Ontario's provincial parks | https://reservations.ontarioparks.ca/ |
| Caledon Trails Open Data | Caledon · Municipal | Trails GIS dataset | Caledon trail network GIS layers on the municipal open data hub — download paths and recreation routes or explore via the geohub. | https://geohub-caledon.hub.arcgis.com/ |

### Quebec

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Sépaq | Quebec · Provincial | Outdoor network portal | Huge outdoor destination network with parks, lodging, and activity discovery | https://www.sepaq.com/ |
| Sépaq — Quebec Parks Online Reservations | Quebec · Provincial | Booking | Reserve camping, lodging, and activities across Quebec's Sépaq parks and wildlife reserves | https://www.sepaq.com/reservation/index.dot?language_id=1 |

### Atlantic Canada (NB, NS, PE, NL)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| NB Natural Resources — Fishing Regulation Web App | New Brunswick · Provincial | Lookup tool | Look up recreational angling seasons, bag/size limits and gear rules by water body, fishing area, town or coordinates on an interactive map. | https://dnr-mrn.gnb.ca/FishRegulation/?lang=en |
| Parks New Brunswick | New Brunswick · Provincial | Park finder & reservations | Explore NB provincial parks — Mactaquac, Hopewell Rocks, Fundy Trail, Parlee Beach — check activities and events, and book campsites, cabins and rustic shelters online. | https://www.nbparks.ca/en/parks |
| NL Parks — Provincial Parks Directory | Newfoundland and Labrador · Provincial | Park finder | Search Newfoundland and Labrador provincial parks and outdoor destinations | https://www.gov.nl.ca/ecc/ |
| ParksNL — Campsite Reservation Service | Newfoundland and Labrador · Provincial | Reservation tool | Book serviced and unserviced sites at 13 NL provincial parks online or by phone; lists 2026 fees, seasons and vehicle-pass rates, with a link to ParksNL booking. | https://www.parksnl.ca/reservations/ |
| Department of Natural Resources and Renewables — Find a Provincial Park | Nova Scotia · Provincial | Lookup/filterable directory | Browse every provincial park filtered by region, activity (camping, beaches, hiking trails) and amenities (showers, electrical hookups, accessibility), with descriptions and maps. | https://parks.novascotia.ca/parks/all/all |
| Nova Scotia Parks and Protected Areas Interactive Map | Nova Scotia · Provincial | Interactive map | Nova Scotia map showing existing, proposed and pending protected areas, provincial Crown land, bicycle trails, OHV routes and aerial photography. | https://novascotia.ca/parksandprotectedareas/plan/interactive-map/ |
| Nova Scotia Provincial Parks | Nova Scotia · Provincial | Parks portal | Find and book Nova Scotia's provincial parks, campgrounds, and beaches | https://parks.novascotia.ca/ |
| PEI Parks | PEI · Provincial | Park finder | PEI provincial parks and beaches, camping and booking info | https://www.princeedwardisland.ca/en/topics/parks-and-environment |

### Northern Canada (YT, NT, NU)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| NWT Parks — Find a Park | Northwest Territories · Provincial | Park finder | Filter 34 NWT territorial parks by activity, facility and open/closed status; book campsites via the linked reservation portal. | https://www.nwtparks.ca/find-a-park |
| Nunavut Parks and Special Places | Nunavut · Provincial | Park finder | Government of Nunavut directory of the territory's 15 territorial parks and special places, from Sylvia Grinnell to Katannilik. | https://www.gov.nu.ca/en/department-environment/parks-and-special-places |
| Yukon Parks — Camping Reservations | Yukon · Provincial | Reservation tool | Book frontcountry, backcountry and group campsites at Yukon territorial campgrounds; search availability by park, dates and equipment. | https://yukon.goingtocamp.com/ |

## 🌍 Environment, Climate & Monitoring

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Canadian Climate Data Online | Canada · Federal | Climate data | Daily, monthly, and hourly historical climate observations from ECCC stations | https://climate.weather.gc.ca/ |
| Canadian Hydrographic Service — Tides & Water Levels Archive | Canada · Federal | Monitoring data | Historical, downloadable observed water-level data from 968 CHS gauges across Canada, plus real-time observations and predictions via the IWLS API, benchmarks, and Great Lakes monthly means since 1918. | https://www.tides.gc.ca/en/tides-and-water-levels-data-archive |
| Canadian Ice Service | Canada · Federal | Marine/ice map | Super niche and very cool ice charts and marine ice information | https://ice-glaces.ec.gc.ca/ |
| Canadian Protected and Conserved Areas Database | Canada · Federal | Geospatial database | National repository of spatial and descriptive data for terrestrial and marine protected areas and other effective area-based conservation measures. | https://www.canada.ca/en/environment-climate-change/services/national-wildlife-areas/protected-conserved-areas-database.html |
| CHS — Tides, Currents and Water Levels | Canada · Federal | Prediction tool | Canadian Hydrographic Service predictions, observations and forecasts of tides and water levels for over 700 stations across Canada. | https://www.tides.gc.ca/en/tides-currents-and-water-levels |
| ClimateData.ca | Canada · Federal | Climate tools | Downscaled climate projections, analysis tools, and scenario maps for Canada | https://climatedata.ca/ |
| DFO — Seafisheries Landings Dashboard | Canada · Federal | Dashboard | Filter 1990–2024 commercial seafisheries landings by province, species and year on an interactive dashboard; download volume and value as CSV. | https://www.dfo-mpo.gc.ca/stats/commercial/sea-maritimes-eng.htm |
| DFO — Shellfish Harvesting Map (SHELLI) | Canada · Federal | Interactive map | Daily-updated coastwide map of bivalve harvesting openings and contamination closures; check prohibition orders before digging clams, oysters, mussels or scallops. | https://www.dfo-mpo.gc.ca/shellfish-mollusques/cssp-map-eng.htm |
| DFO — Sustainability Survey for Fisheries | Canada · Federal | Stock status dashboard | Browse status zones (Healthy, Cautious, Critical, Uncertain) for key Canadian fish stocks by DFO region, with annual summaries and downloadable survey data. | https://www.dfo-mpo.gc.ca/reports-rapports/regs/sff-cpd/survey-sondage/index-en.html |
| ECCC — Air Pollutant Emissions Inventory Search | Canada · Federal | Lookup tool | Query national and provincial air pollutant and black carbon emissions since 1990 by substance, sector and region; download CSV or Excel. | https://pollution-waste.canada.ca/air-emission-inventory/ |
| ECCC — Canadian Environmental Sustainability Indicators | Canada · Federal | Dashboard | Browse CESI air, water, climate, biodiversity and waste indicators with interactive maps and download national and provincial trend tables as CSV. | https://www.canada.ca/en/environment-climate-change/services/environmental-indicators.html |
| ECCC — National Air Pollution Surveillance (NAPS) | Canada · Federal | Dataset | Query hourly PM2.5, O3, NO2, SO2 and CO from ~280 stations; custom CSV via the query tool plus pre-built annual files in the ECCC catalogue. | https://open.canada.ca/data/en/dataset/1b36a356-defd-4813-acea-47bc3abd859b |
| Environment and Climate Change Canada — MSC Datamart | Canada · Federal | Open data | Raw feeds of weather, water, climate, and air-quality data for developers and researchers | https://dd.weather.gc.ca/ |
| Environment and Climate Change Canada — National Wildlife Areas Map | Canada · Federal | Interactive map | Map of Canada's National Wildlife Areas showing approximate locations, boundaries, public access status and recreation opportunities. | https://www.canada.ca/en/environment-climate-change/services/national-wildlife-areas/locations.html |
| Environment Canada — Marine Weather Forecast | Canada · Federal | Forecast | Marine forecasts for Canadian coastal waters, Great Lakes, and major lakes | https://weather.gc.ca/marine/index_e.html |
| Environment Canada — Naturalized Flow Data | Canada · Federal | Hydrology | Canadian historical and naturalized streamflow records for rivers and basins | https://www.canada.ca/en/environment-climate-change/services/water-overview.html |
| Federal Contaminated Sites Inventory — Map Navigator | Canada · Federal | Interactive map | Map and search federal contaminated sites by location, organization, contaminants, classification and status; view records in tables or download results. | https://map-carte.tbs-sct.gc.ca/map-carte/fcsi-rscf/map-carte.aspx?Language=EN |
| Freshwater Research | Canada · Federal | Research hub | DFO research on freshwater fish, habitat, and aquatic ecosystems | https://waves-vagues.dfo-mpo.gc.ca/ |
| GeoGratis | Canada · Federal | Geospatial data portal | Topographic, elevation, and imagery datasets from NRCan | https://geogratis.gc.ca/ |
| Greenhouse Gas Reporting Program — Facility Data Search | Canada · Federal | Database search | Query facility-level greenhouse gas emissions by gas, NAICS sector, city or province and download results as CSV; links NPRI records for dual reporters. | https://climate-change.canada.ca/facility-emissions |
| Hinterland Who's Who | Canada · Federal | Species fact sheets | Species fact sheets, identification guides, and conservation stories for Canadian wildlife | https://www.hww.ca/ |
| Impact Assessment Agency — Canadian Impact Assessment Registry | Canada · Federal | Project registry | Official registry of federally designated projects under the Impact Assessment Act: proposals, assessments in progress, conditions, and decisions, searchable by region, type, and status. | https://iaac-aeic.gc.ca/050/evaluations |
| National Pollutant Release Inventory — Data Search | Canada · Federal | Database search | Search pollutant releases, disposals and transfers reported by 7,000+ facilities back to 1993 by substance, sector, province or watershed; predefined queries plus CSV bulk downloads. | https://pollution-waste.canada.ca/national-release-inventory/ |
| Species at Risk Public Registry | Canada · Federal | Registry search | Search Canada's legal list of aquatic and terrestrial species at risk by name, range or taxon; access profiles, recovery strategies, management plans and permits. | https://species-registry.canada.ca/index-en.html |
| Species at Risk Public Registry | Canada · Federal | Registry | Search Canada’s official list of species at risk: status documents, recovery strategies, management plans and permits, downloadable per species. | https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry.html |
| Weather.gc.ca | Canada · Federal | Weather dashboard | Forecasts, alerts, radar, air quality, marine weather, and more | https://weather.gc.ca/ |

### British Columbia

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| BC Wildfire Service — Active Wildfires Map | British Columbia · Provincial | Wildfire map | Live BC wildfire locations, sizes, statuses, and evacuation orders | https://www2.gov.bc.ca/gov/content/safety/wildfire-status |
| British Columbia — GWELLS Groundwater Wells and Aquifers | British Columbia · Provincial | Searchable well database | Search BC water well records by owner, address, well tag or map, view aquifer details, and pull public well data through a REST API. | https://apps.nrs.gov.bc.ca/gwells/ |
| British Columbia — Mineral Titles Online | British Columbia · Provincial | Tenure registry and map viewer | Map viewers and search tools for every mineral, placer and coal claim or lease in BC — locate tenures, check holders and status, and view reserve boundaries. | https://www.mtonline.gov.bc.ca/ |
| Environmental Reporting BC | British Columbia · Provincial | Indicator library | Ministry of Environment indicator library across air, climate change, water, land, forests and species: graphs, maps, downloadable datasets and trend reports on groundwater, timber harvest and air quality. | https://www2.gov.bc.ca/gov/content/environment/research-monitoring-reporting/reporting/environmental-reporting-bc |
| Ministry of Environment — Air Quality Health Index Map | British Columbia · Provincial | Interactive map | View hourly AQHI, PM2.5, ozone, NO2 and SO2 at BC monitoring stations on an interactive map; click stations for readings. Refreshes every 60 minutes. | https://www.gov.bc.ca/airqualitymap |
| Ministry of Environment — BC Species & Ecosystems Explorer | British Columbia · Provincial | Lookup tool | Search BC's Conservation Data Centre by name, taxon group, Red/Blue/SARA status, biogeoclimatic unit or drawn/uploaded area to list species and ecosystems at risk. | https://a100.gov.bc.ca/pub/eswp/ |
| Ministry of Water, Land and Resource Stewardship — Water Licence Search | British Columbia · Provincial | Lookup tool | Search BC surface-water and groundwater licences by client, source, PID, watershed or region; download matching licence data as Excel and retrieve scanned documents. | https://j200.gov.bc.ca/pub/ams/Default.aspx?PossePresentation=AMSPublic&PosseObjectDef=o_ATIS_DocumentSearch&PosseMenuName=WS_Main |

### Alberta

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Alberta — Water Well Information Database | Alberta · Provincial | Searchable well database | Search roughly 500,000 Alberta water well drilling reports, chemistry analyses and pump tests by owner name, well ID, legal land location or map selection. | https://groundwater.alberta.ca/waterwells/d/ |
| Alberta Flood Awareness Map (FAMA) | Alberta · Provincial | Interactive map | Environment & Protected Areas viewer of provincial flood studies: switch between flood hazard, inundation, likelihood and forecast maps, click for flow/depth details, search by address and print summaries. | https://floods.alberta.ca/ |
| Alberta Wildfire Status | Alberta · Provincial | Wildfire map | Live Alberta wildfire locations, sizes, causes, and fire bans | https://wildfire.alberta.ca/ |
| Environment & Protected Areas — Air Data Warehouse | Alberta · Provincial | Dataset | Filter industrial and airshed ambient stations and download Alberta air-quality extracts (PM2.5, NO2, SO2, O3+) as CSV. | https://datamanagementplatform.alberta.ca/ambient |
| Environment & Protected Areas — Environmental Records Viewer | Alberta · Provincial | Lookup tool | Map-search and download contaminated-site files, reclamation certificates, waste/industrial/pesticide authorizations and Water Act licences. | https://geospatial.alberta.ca/erv/ |
| Edmonton — Trees Map | Edmonton · Municipal | Interactive map | Map of 260,000+ city-maintained trees with species and location — the open-data inventory behind Edmonton's urban forest program. | https://data.edmonton.ca/Environmental-Services/Trees-Map/udbt-eiax |

### Saskatchewan

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Saskatchewan Air Quality Monitoring Network | Saskatchewan · Provincial | Environmental monitoring | Province-wide network of continuous ambient air monitoring stations operated by the Ministry of Environment. Interactive map shows station locations across SK; download validated hourly air quality data as CSV. Covers Swift Current, Estevan, Prince Albert, Buffalo Narrows, and other stations with pollutant readings (PM2.5, O3, NO2, SO2, CO). | https://geohub.saskatchewan.ca/datasets/b946b3f030b24d0095f7456463ee38ba |
| Saskatchewan Wildfire Status | Saskatchewan · Provincial | Wildfire map | Saskatchewan Public Safety Agency wildfire dashboard and active fire map | https://www.saskatchewan.ca/residents/environment-public-health-and-safety/wildfire-in-saskatchewan |
| Water Security Agency — Drinking Water Quality Search | Saskatchewan · Provincial | Lookup tool | Search any Saskatchewan waterworks for lab sample results, inspections and quarterly bacti reports; download historical tests against provincial drinking-water standards. | https://waterquality.saskatchewan.ca/DrinkingWater |
| Water Security Agency — Stream Flows & Lake Levels | Saskatchewan · Provincial | Dashboard | Check near real-time provisional stream flow and lake levels from hydrometric gauges across 13 watersheds via an interactive web map and per-station hydrographs. | https://wsask.ca/recreation-environment/lakes-and-rivers-overview/stream-flows-and-lake-levels/ |

### Manitoba

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Manitoba Contaminated Sites Registry Map | Manitoba · Provincial | Contaminated sites map | Manitoba government map of registered contaminated sites, providing geographic access to site records and remediation information. | https://manitoba.maps.arcgis.com/apps/mapviewer/index.html?webmap=a90548cd023649eba0ca2863d7fede13 |
| Manitoba Environment — Environmental Assessment Public Registry | Manitoba · Provincial | Public registry | Browse Environment Act proposals by status (open for comment, in process, licensed); download licences, summaries and compliance reports as PDF. | https://www.gov.mb.ca/sd/eal/registries/index.html |
| Manitoba Wildfire Service — FireView Map | Manitoba · Provincial | Wildfire status map | Track active wildfires on an interactive map and sortable table updated hourly: fire location, size, cause, and status (out of control/being held), plus fire danger and travel restriction links. | https://www.gov.mb.ca/conservation_fire/Fire-Maps/fireview/fireview.html |

### Ontario

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Credit Valley Conservation | Credit Valley · Agency | Conservation authority | Watershed management and conservation areas in the Credit River watershed | https://cvc.ca/ |
| Grand River Conservation Authority — Watershed Navigator | Grand River Watershed · Agency | Watershed map | Interactive watershed navigator with flood risk, conservation areas, and environmental data | https://www.grandriver.ca/ |
| Halton Conservation Authority | Halton · Agency | Conservation authority | Conservation areas, trails, and environmental services in Halton region | https://www.conservationontario.ca/halton |
| Hamilton Conservation Authority | Hamilton · Agency | Conservation authority | Conservation areas, trails, and watershed management in Hamilton | https://www.conservationontario.ca/hamilton |
| Lake Simcoe Region Conservation Authority | Lake Simcoe · Agency | Conservation authority | Lake Simcoe watershed health, flood risk maps, and conservation lands | https://lsrca.on.ca/ |
| Niagara Peninsula Conservation Authority | Niagara · Agency | Conservation authority | Watershed management, conservation areas, and flood risk in Niagara | https://www.conservationontario.ca/niagara |
| Conservation Ontario — Find Your Conservation Authority | Ontario · Agency | Finder | Find which conservation authority covers your watershed or municipality in Ontario | https://conservationontario.ca/ |
| Toronto and Region Conservation Authority — Living Room | Toronto Region · Agency | Conservation authority | Rouge National Urban Park, conservation areas, maps, and environmental programs for the Toronto region | https://trca.ca/ |
| Air Quality Ontario — AQHI and Real-Time Pollutant Data | Ontario · Provincial | Monitoring dashboard | Hourly Air Quality Health Index observations and forecasts across ~38 provincial stations, real-time O3, PM2.5, NO2 concentrations, alerts, and historical AQHI data search. | https://www.airqualityontario.com/ |
| Ministry of Natural Resources — Hunting Regulations Summary | Ontario · Provincial | Regulations guide | Annual hunt-and-trap guide: licences and fees, season dates and rules per game species (moose, deer, bear, turkey), WMU maps and mandatory reporting; full PDF download. | https://www.ontario.ca/document/ontario-hunting-regulations-summary |
| Ministry of the Environment — Source Protection Information Atlas | Ontario · Provincial | Interactive map | Look up any address to see wellhead protection areas, intake zones, vulnerable aquifers and water-taking permits on the provincial source-water atlas. | https://www.lioapplications.lrc.gov.on.ca/SourceWaterProtection/index.html?viewer=SourceWaterProtection.SWPViewer&locale=en-CA |
| Ontario — Environmental Registry (ERO) | Ontario · Provincial | Decision registry | Official public notice and comment registry for Ontario environmentally significant proposals: policies, permits (incl. water takings), and regulations open for comment, with ministry decisions posted. | https://ero.ontario.ca/ |
| Ontario — Forest Fires Information | Ontario · Provincial | Wildfire map | Active Ontario forest fires, fire bans, and fire-weather conditions | https://www.ontario.ca/page/forest-fires |
| Ontario — Well Records Search | Ontario · Provincial | Search database | Interactive map of every reported water well in Ontario from the Water Well Information System — click a well for its record, plus a companion map of active water-taking permits. | https://www.ontario.ca/page/well-records |
| Ontario Provincial Stream Water Quality Monitoring Network (PWQMN) | Ontario · Provincial | Water quality dataset | Stream water quality monitoring data across Ontario rivers and streams. Parameters include nutrients (total and dissolved), metals, and chloride. CSV downloads available by year (2023, 2024). Spatial coordinates for all monitoring stations included. | https://data.ontario.ca/dataset/provincial-stream-water-quality-monitoring-network |
| North Bay Drinking Water Quality Reports | North Bay · Municipal | Water quality reports | Annual and summary drinking water quality test results for City of North Bay municipal water system — PDF reports by year. | https://northbay.ca/services-payments/water-wastewater/drinking-water/ |

### Quebec

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Forêt ouverte | Quebec · Provincial | Interactive map | MRNF interactive map of Quebec's forest territory: ecoforestry maps, aerial/satellite imagery, lidar products, wildfire disturbances, protected areas; view, query, download, WMS into GIS. | https://www.foretouverte.gouv.qc.ca/ |
| MELCCFP — Indice de la qualité de l'air (IQA) | Quebec · Provincial | Dashboard | Live hourly air quality index for ~60 monitoring stations on an interactive ArcGIS map (PM2.5, ozone, NO2, SO2, CO), plus a Power BI dashboard of good/acceptable/bad statistics since 2015. | https://www.iqa.environnement.gouv.qc.ca/contenu/index.asp |
| MELCCFP — Répertoire des terrains contaminés | Quebec · Provincial | Lookup tool | Search Quebec contaminated and rehabilitated sites by region, municipality or contaminant; map them in Repère GTC and export to Excel. | https://www.environnement.gouv.qc.ca/sol/terrains/terrains-contamines/recherche.asp |
| Québec — Flood Zone Maps (Zones Inondables) | Quebec · Provincial | Flood maps | Official interactive cartography of flood zones and watercourse mobility zones in force across Quebec, with new-generation maps rolling out from 2026. | https://www.quebec.ca/agriculture-environnement-et-ressources-naturelles/eau/zones-inondables-mobilite-rives-littoral/cartographies/en-vigueur |

### Atlantic Canada (NB, NS, PE, NL)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Department of Environment and Local Government — Air Quality Data Portal | New Brunswick · Provincial | Real-time data portal | Query current and historic air quality readings from all provincial and industry-run monitoring stations; hourly updates, charts, Excel export, 3 years of data. | https://www.elgegl.gnb.ca/AirNB/ |
| Department of Environment and Local Government — Contaminated Sites Viewer | New Brunswick · Provincial | Interactive map | Map every open and closed contaminated-site file in NB; search by address, click a site for details. Weekday-updated GeoNB interactive map. | https://geonb.snb.ca/contaminated_sites__lieux_contamines/index.html |
| Ministry of Environment and Climate Change — Environmental Assessment Projects Register | Newfoundland and Labrador · Provincial | Public Register | Filterable register of provincial environmental assessments since March 2000: browse projects by year with proponents, registration dates, status and release decisions. | https://www.gov.nl.ca/eccc/env-assessment/projects-list/ |
| MMSB — Green Depot Locator | Newfoundland and Labrador · Provincial | Lookup tool | Interactive Leaflet map plus searchable listing of all ~55 licensed beverage-container recycling depots across NL, with addresses, hours, contacts and paint/electronics acceptance notes. | https://mmsb.nl.ca/green-depot/ |
| NL Water Resources Management Division Portal | Newfoundland and Labrador · Provincial | Water data portal | Real-time streamflow and water level monitoring, drinking water quality, boil water advisories, floodplain maps, water rights registry and an interactive water resources map. | https://www.gov.nl.ca/eccc/waterres/ |
| Department of Environment and Climate Change — Water Resources Data Portal | Nova Scotia · Provincial | Dashboard | Interactive maps and charts of provincial groundwater levels, river flows, lake/river water quality, and weather used to track water conditions over time. | https://novascotia.ca/water-resources-data-portal/ |
| Nova Scotia Coastal Hazard Map (NSGI) | Nova Scotia · Provincial | Interactive map | Province of Nova GeoNova viewer for coastal hazard layers including flooding and erosion risk, complementing legacy provincial flood-risk mapping data. | https://nsgi.novascotia.ca/chm |
| Nova Scotia Provincial Landscape Viewer | Nova Scotia · Provincial | Interactive map | Nova Scotia map-based viewer combining forests, wildlife, wetlands, Crown lands and protected areas for land-use planning and natural-resource management. | https://nsgi.novascotia.ca/plv/ |
| Wildfire Nova Scotia Viewer (DNRR) | Nova Scotia · Provincial | Map viewer | Interactive map of current-year wildfires showing location, size and control status, published by Natural Resources and Renewables Forest Protection. | https://experience.arcgis.com/experience/0ee935539ce5495d86ce607d11a57a30/ |
| Department of Land and Environment — PEI Air Monitoring | PEI · Provincial | Dashboard | Explore PEI ambient air-quality dashboards (AQHI, CAAQS) and download provincial air-quality reports from the monitoring network. | https://air.princeedwardisland.ca/ |
| Department of Land and Environment — PEI Water Registry | PEI · Provincial | Registry | Search official Water Act dashboards and maps for groundwater levels, stream flow, water-use permits, well records, watershed report cards and water quality. | https://water.princeedwardisland.ca/ |
| PEI Climate Hazard & Risk Information System (CHRIS) | PEI · Provincial | Map viewer | Official PEI government/UPEI map portal for coastal erosion, coastal flooding scenarios (2020–2100), inland flooding projections and historical storm events like Fiona and Dorian. | https://chris.peiclimate.ca/ |

### Northern Canada (YT, NT, NU)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| GNWT ECC — NWT Air Quality Monitoring Network | Northwest Territories · Provincial | Dashboard | Near real-time readings (PM2.5, ozone, NO2, SO2, CO) from five community stations (Yellowknife, Inuvik, Fort Smith, Fort Simpson, Norman Wells) with archived-data query tools; NAPS network. | https://aqm.enr.gov.nt.ca/ |
| Government of Northwest Territories — Water Management & Monitoring Data | Northwest Territories · Provincial | Monitoring data downloads | ECC water data hub: download water quality and water level monitoring data (CSV/Excel) for NWT community and transboundary stations, with links to Mackenzie DataStream and real-time feeds. | https://www.gov.nt.ca/ecc/en/services/water-management-and-monitoring/data |
| Mackenzie Valley Land and Water Board — Public Registry | Northwest Territories · Provincial | Public registry | Search Mackenzie Valley land-use permits and water licences; download inspection reports, applications and issuances as PDFs. | https://mvlwb.com/registry |
| Nunavut Impact Review Board — Public Registry | Nunavut · Provincial | Public registry | Browse Nunavut impact assessments; download screening decisions, comment submissions and annual reports as PDFs. | https://www.nirb.ca/ |
| Government of Yukon — Waterline Public Registry | Yukon · Provincial | Public registry search | Yukon Water Board's online registry: search water use licences and applications by number, name or community and view licence documents, status and conditions of issuance. | https://apps.gov.yk.ca/waterline/ |
| Yukon — YESAB Online Registry | Yukon · Provincial | Registry | Official public record of all Yukon environmental socio-economic assessments: search 200+ projects by map, read proposals and recommendations, track comment periods and decisions. | https://yesabregistry.ca/ |

## 🌦️ Weather & Climate

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Air Quality Health Index (AQHI) — Observations Map | Canada · Federal | Air quality observations | Current AQHI readings and health risk levels at monitoring stations across Canada — map and station-level observations. | https://weather.gc.ca/airquality/pages/index_e.html |
| Canadian Centre for Climate Services — Advanced Data Tools | Canada · Federal | OGC API | Query ECCC climate datasets programmatically via OGC API Features and WCS — daily climate data by station or year in CSV/GeoJSON, plus bulk access through the Datamart. | https://www.canada.ca/en/environment-climate-change/services/climate-change/canadian-centre-climate-services/display-download/advanced-tools.html |
| Canadian Hurricane Centre | Canada · Federal | Forecast tool | Track maps, information statements and technical discussions for tropical and post-tropical cyclones threatening Canada, active June through November. | https://weather.gc.ca/hurricane/index_e.html |
| Canadian Weather Radar — Interactive Map | Canada · Federal | Interactive map | Environment Canada's national radar mosaic — animated precipitation radar for the whole country on one interactive map, with rain/snow layers and station-level detail. | https://weather.gc.ca/index_e.html?layers=%2Cradar |
| MSC GeoMet — Weather and Climate API | Canada · Federal | Weather API | OGC API for Environment Canada weather, climate, and hydrometric layers — query forecasts, alerts, and station data programmatically. | https://api.weather.gc.ca/ |
| Space Weather Canada | Canada · Federal | Forecast tool | Current conditions and short- and long-term forecasts of geomagnetic activity, aurora visibility, and solar and ionospheric data for Canadian regions. | https://www.spaceweather.gc.ca/index-en.php |
| ClimateWest — Prairie Climate Data Hub | Canada · Agency | Climate services hub | Regional climate services hub for the three Prairie provinces: help desk for finding/using climate data, directory of Canadian climate data portals, sector guidance (agriculture, water, infrastructure, municipalities) and adaptation publications, case studies and training. | https://climatewest.ca/ |

### British Columbia

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| BC Meteorological Station Data Portal (PCIC) | British Columbia · Provincial | Weather data portal | Interactive map interface to explore 100+ weather stations across British Columbia from the Provincial Climate Data Set. Filter by date range, variable type, observing agency, and region. Download station metadata and observational data in CSV, NetCDF, or MS Excel format. Covers temperature, precipitation, wind, humidity, and other climate variables. | https://www.uvic.ca/pcic/data-analysis-tools/data-portal/station-data/index.php |
| BC River Forecast Centre — Open Data | British Columbia · Provincial | Hydrometric data | Snowpack, streamflow, and flood forecasting data for British Columbia watersheds — maps and downloadable hydrometric datasets. | https://www2.gov.bc.ca/gov/content/environment/air-land-water/water/drought-flooding-dikes-dams/river-forecast-centre |
| PCIC Plan2Adapt — BC Climate Projections | British Columbia · Provincial | Climate projections tool | Explore projected climate change across BC under a high-emissions scenario (SSP5-8.5) with user-friendly maps, trend graphs and summary tables, sliced by regional district, health authority or ecoprovince; based on PCIC statistically downscaled CMIP6 scenarios. | https://services.pacificclimate.org/plan2adapt/app/ |

### Alberta

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Alberta Climate Information Service (ACIS) — Weather Station Data Viewer | Alberta · Provincial | Weather data portal | Interactive map viewer and download tool for over 535 Alberta weather stations. View near-real-time and historical data including precipitation, temperature, wind, heat units, and climate normals. Both hourly and daily data available for download in CSV format. | https://acis.alberta.ca/weather-data-viewer.jsp |
| Alberta River Basins — Flow and Forecast | Alberta · Provincial | Hydrometric monitoring | Real-time river flows, basin conditions, and flood advisories for Alberta river systems. | https://rivers.alberta.ca/ |

### Saskatchewan

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Water Security Agency — Provincial Flood Forecast & Spring Runoff Reports | Saskatchewan · Provincial | Reports & forecasts | Download current Spring Runoff Outlook reports, ten-day flow forecasts for the Saskatchewan River System, plus Lake Diefenbaker and Qu'Appelle watershed updates (PDF). | https://wsask.ca/recreation-environment/provincial-forecast/ |

### Manitoba

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Manitoba Ag Weather Station Network — Data MB Download | Manitoba · Provincial | Dataset | KML download of Manitoba Agriculture weather station network locations (120+ stations across agro-Manitoba). Each station records air temperature, humidity, precipitation, wind, solar radiation, and soil data at 15-minute intervals. | https://geoportal.gov.mb.ca/api/download/v1/items/619eac487cd84953adfd1e72b78f1990/kml?layers=0 |
| Manitoba Flood Information | Manitoba · Provincial | Flood monitoring | Provincial flood outlooks, river levels, and emergency flood updates for Manitoba watersheds. | https://www.gov.mb.ca/flooding/ |

### Ontario

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Ontario Flood Forecasting and Warning | Ontario · Provincial | Flood monitoring | Provincial flood outlooks, watershed condition reports, and real-time flood messages for Ontario conservation authorities. | https://www.ontario.ca/floodforecast/ |
| Ontario Low Water Response | Ontario · Provincial | Drought monitoring | Provincial low water level advisories and drought status by conservation authority watershed in Ontario. | https://www.ontario.ca/page/low-water-response-program |

### Quebec

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Ouranos — Climate Portraits (Portraits climatiques) | Quebec · Agency | Climate projections portal | Interactive maps, trend graphs and summary tables of past, current and projected climate across Quebec by administrative region/MRC — temperature, precipitation, snow cover, frost-free and degree-day indicators under SSP2-4.5, SSP3-7.0 and SSP5-8.5; download data and figures (GeoTIFF/NetCDF/JSON). | https://portraits.ouranos.ca/en/ |
| Centre d'expertise hydrique Québec (CEHQ) — Water Levels & Flows | Quebec · Provincial | Hydrometric monitoring | ~280-station hydrometric network with real-time levels and flows, open-water hydrological forecasts, full historical records, flood/low-flow analyses and Hydroclimatic Atlas. | https://www.cehq.gouv.qc.ca/hydrometrie/index.htm |
| Vigilance — Flood Water Monitoring Map (Sécurité publique Québec) | Quebec · Provincial | Interactive map | Web app showing the spring-freshet flood situation across Québec in real time, informing residents and mobilizing municipal and government responders during flood events. | https://vigilance.geo.msp.gouv.qc.ca/carte |

### Atlantic Canada (NB, NS, PE, NL)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| NB River Watch Flood Tracker | New Brunswick · Provincial | Flood monitoring | NBEMO interactive map tracking current and forecast water levels on the Saint John River during freshet, with normal/advisory/watch/warning/flood alert levels per location. | https://geonb.snb.ca/rwm/ |
| Forestry, Agriculture and Lands — Near-Real-Time Weather Stations | Newfoundland and Labrador · Provincial | Weather station dashboard | Hourly graphs from 22 provincial forestry RAWS stations across Newfoundland and Labrador; fire-weather data plus a downloadable KMZ station map. | https://www.mae.gov.nl.ca/wrmd/ADRS/v6/RAWS_Graphs_List.asp |
| NL Statistics Agency — Community Accounts Climate Data | Newfoundland and Labrador · Provincial | Climate data portal | Query 70+ NL weather stations for daily/monthly/annual temperature, rain and snow from 1874–2026; nearest-station search plus charts. | https://nl.communityaccounts.ca/climate/ |
| Department of Public Works — NS Weather Station Data | Nova Scotia · Provincial | Dataset | Download 31M+ readings (2011–2024) from 56 provincial road-weather stations: temp, wind, humidity, precip, pavement status. CSV/JSON/Socrata API. | https://data.novascotia.ca/Environment-and-Energy/NS-Weather-Station-Data/kafq-j9u4 |
| PEI Weather & Climate App | PEI · Provincial | Dashboard | View and download real-time observations from 100+ PEI weather stations plus historical climate (temperature, precipitation, wind, humidity) on an interactive map. | https://weather.peiclimate.ca/ |

## ⚡ Energy & Utilities

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Canada Energy Regulator — Commodity Tracking System | Canada · Federal | Lookup tool | Query monthly CER-regulated trade in electricity, crude oil, natural gas, LNG and NGLs by port, region and year; export reports as Excel, PDF or HTML. | https://apps.cer-rec.gc.ca/CommodityStatistics/Statistics.aspx?language=english |
| Canada Energy Regulator — Energy Futures | Canada · Federal | Scenarios | Annual scenarios and interactive dashboards for Canada's energy supply and demand | https://www.cer-rec.gc.ca/en/data-analysis/canada-energy-future/ |
| Canada Energy Regulator — International Power Lines Dashboard | Canada · Federal | Dashboard | Map and filter Canada's international power lines by status, origin and destination; view voltage, capacity and length, with CSV download from Open Government. | https://www.cer-rec.gc.ca/en/data-analysis/facilities-we-regulate/international-power-lines-dashboard/index.html |
| Canada Energy Regulator — Pipeline Incidents Dashboard | Canada · Federal | Interactive dashboard | Explore incidents at CER-regulated pipelines and facilities since 2008 by company, region, cause and substance released; underlying data downloadable as CSV. | https://apps2.cer-rec.gc.ca/pipeline-incidents |
| Canada Energy Regulator — Pipeline Profiles | Canada · Federal | Data | Capacity, throughput, and tolls for major federally regulated pipelines | https://www.cer-rec.gc.ca/en/data-analysis/facilities-we-regulate/pipeline-profiles/ |
| Canadian Centre for Energy Information | Canada · Federal | Data portal | One-stop federal energy data hub: search datasets, publications and use the Stat Data Explorer plus near-real-time provincial electricity data with API access. | https://energy-information.canada.ca/en |
| CNSC — Map of Nuclear Facilities | Canada · Federal | Interactive map | Interactive map of every CNSC-licensed nuclear facility — power plants, uranium mines and mills, research and waste sites — filterable by province and facility type. | https://www.cnsc-ccsn.gc.ca/eng/resources/maps-of-nuclear-facilities/ |
| NRCan — Fuel Prices by City | Canada · Federal | Lookup tool | Compare daily, weekly or monthly retail gasoline, diesel, propane and furnace-oil prices for 70+ Canadian cities; export tables as XLS with tax and margin breakdowns. | https://www2.nrcan-rncan.gc.ca/eneene/sources/pripri/prices_bycity_e.cfm |
| RETScreen — Clean Energy Management Software | Canada · Federal | Software | Free government software for energy project feasibility analysis: clean energy, efficiency and cogeneration modelling with global climate and product data. | https://natural-resources.canada.ca/maps-tools-publications/tools-applications/retscreen |
| Water Office | Canada · Federal | Hydrology tool | Water level and flow monitoring data | https://wateroffice.ec.gc.ca/ |
| Canada Energy Regulator — Interactive Pipeline Map | Canada · Agency | Interactive map | Explore the location of federally regulated pipelines on an interactive map alongside every reported incident since 2008, filterable by substance and severity. | https://www.cer-rec.gc.ca/en/safety-environment/industry-performance/interactive-pipeline/ |
| Canadian Nuclear Safety Commission — Nuclear Event Reports | Canada · Agency | Event report listing | Browse reportable safety events and incidents at Canadian nuclear power plants, research reactors, and other major nuclear facilities, with dates and descriptions. | https://www.cnsc-ccsn.gc.ca/eng/acts-and-regulations/event-reports-for-major-nuclear-facilities/ |

### British Columbia

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| BC Energy Regulator — Dormant Sites Map | British Columbia · Agency | Interactive map | Interactive map of dormant and orphan oil & gas sites in B.C.: filter by operator, closure stage-gate and priority status, search by well authorization number, and view annual work-plan restoration data. | https://www.bc-er.ca/data-reports/data-narratives/dormant-sites-map/ |
| BC Hydro — Planned Outages and Outage List | British Columbia · Provincial | Outage info | Browse list of current, planned, and recently restored power outages across BC Hydro's service territory | https://www.bchydro.com/power-outages |
| BC Hydro — Power Outage Map | British Columbia · Provincial | Outage map | Interactive map showing current and recent power outages across BC — view affected areas, estimated restoration times, and outage cause | https://app.bchydro.com/power-outages/app/outage-map.html |
| BC Hydro — Report an Outage | British Columbia · Provincial | Service | Report a power outage to BC Hydro online or check the outage map for your area | https://www.bchydro.com/outages/orsmapview.jsp |
| FortisBC — Gas Outage Map | British Columbia · Provincial | Outage map | Map of current gas service interruptions in FortisBC's service territory across British Columbia | https://www.fortisbc.com/outages |
| Vancouver VanMap | Vancouver · Municipal | Interactive map | Parcel, zoning, parks, utilities, and city layers | https://maps.vancouver.ca/vanmap-viewer/ |

### Alberta

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| AESO — Market and System Reporting | Alberta · Agency | Live grid data | Near-real-time Alberta electricity data: pool price, supply and demand, generation mix by fuel, and transmission outages from the provincial grid operator. | https://www.aeso.ca/market/market-and-system-reporting/ |
| Alberta Energy Regulator | Alberta · Provincial | Regulator | Regulates the upstream oil, gas, and coal development in Alberta, including licensing, compliance, and environmental monitoring | https://aer.ca/ |
| Alberta Utilities Commission — Consumer Services | Alberta · Provincial | Consumer protection | Alberta Utilities Commission consumer services — complaints, dispute resolution, and utility rate information for Alberta energy consumers | https://www.auc.ab.ca/ |
| ATCO — Gas Outage Map and Emergency | Alberta · Provincial | Outage map | ATCO's gas and electric outage information — view current outages and report gas emergencies in Alberta | https://electric.atco.com/en-ca/power-outages.html |
| Utilities Consumer Advocate Alberta | Alberta · Provincial | Advocacy | Free advocacy for Alberta energy consumers — compare electricity and gas rates, understand your options, and get help with disputes | https://ucahelps.alberta.ca/ |
| Calgary Electric Utility — ENMAX Outages | Calgary · Municipal | Outage map | ENMAX's power outage information and map for Calgary — view current outages and report service issues | https://www.enmax.com/outages |
| Edmonton Electric Utility — EPCOR Outages | Edmonton · Municipal | Outage map | EPCOR's electric outage map for Edmonton — current power outages, outage causes, and restoration times | https://www.epcor.com/outages-safety/outages/current/Pages/default.aspx |
| Edmonton Maps | Edmonton · Municipal | City map portal | Property, planning, utilities, and municipal geography tools | https://maps.edmonton.ca/ |

### Saskatchewan

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Saskatchewan Rate Review Panel | Saskatchewan · Provincial | Rate review library | Public rate-review hub for SaskPower, SaskEnergy and SGI Auto Fund: in-progress and archived applications, information requests, submissions, public-meeting documents and Panel recommendation reports. | https://saskratereview.ca/ |
| SaskPower — Outage Map and Updates | Saskatchewan · Provincial | Dashboard | Live map and table of unplanned and planned power outages across Saskatchewan with locations, restoration details and update times; set up outage-area notifications. | https://www.saskpower.com/outages/power-outages/outage-updates |
| Water Security Agency — Water Wells Map | Saskatchewan · Provincial | Interactive map | Interactive map of ~125,000 water-well drilling records (lithology, depth, completion) submitted by Saskatchewan drillers; locate wells by area. | https://gis.wsask.ca/Html5Viewer/index.html?viewer=WaterWells.WellsViewer/ |

### Manitoba

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Manitoba Hydro — Outage Map | Manitoba · Crown Corp | Outage map | Manitoba Hydro outage map and reporting | https://www.hydro.mb.ca/outages/ |
| Manitoba Office of Drinking Water — Advisories Map | Manitoba · Provincial | Advisory map | See current boil-water, water-quality and avoidance advisories for public and semi-public systems on a map, with short/medium/long-term status. | https://www.gov.mb.ca/sd/water/drinking-water/advisory/map.html |

### Ontario

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| IESO — Power Data | Ontario · Agency | Live grid data | Ontario's grid operator publishes real-time electricity demand, supply mix, and market prices in 5-minute intervals, with a full historical data directory. | https://www.ieso.ca/power-data |
| Hydro One — Outage Map | Ontario · Provincial | Outage map | Live outage map for Hydro One's rural and regional Ontario distribution network | https://www.hydroone.com/power-outages |
| Ontario Energy Board | Ontario · Provincial | Regulator | Independent regulator of the electricity and natural gas sectors in Ontario, including utility rate decisions, consumer protection, and energy policy | https://www.oeb.ca/ |
| Ontario Power Generation — Dam Safety and Water Management | Ontario · Provincial | Water management | OPG's dam safety monitoring, water level data, and water management information for Ontario's hydroelectric facilities | https://www.opg.com/power-safety/dams/ |
| Ontario Power Generation — Nuclear Monitoring Dashboard | Ontario · Provincial | Dashboard | Nuclear generation data, environmental monitoring results, and safety performance information from OPG's Pickering and Darlington stations | https://www.opg.com/power-generation/nuclear/ |
| Alectra — Outage Map | Ontario/GTA · Regional | Outage map | Live power outage map across Alectra Utilities' Ontario service territory | https://www.alectrautilities.com/outage-map |
| Hydro Ottawa — Outage Map | Ottawa · Municipal | Outage map | Live power outage map and reporting for Ottawa and surrounding areas | https://hydroottawa.com/outage |
| Toronto Hydro — Outage Map | Toronto · Municipal | Outage map | Toronto Hydro's power outage map — view current outages in Toronto's electricity distribution area | https://www.torontohydro.com/outages |

### Quebec

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Hydro-Québec — Estimate a Home's Electricity Costs | Quebec · Crown Corp | Bill estimator | Address-based estimator (building number + postal code) that instantly produces an approximate annual electricity cost for a home, useful when moving or comparing residences in Quebec. | https://www.hydroquebec.com/residential/customer-space/moving/estimate-electricity-costs.html |
| Hydro-Québec — Report an Outage and Mobile App | Quebec · Provincial | Service | Report a power outage to Hydro-Québec, check real-time status by address, and access the Hydro-Québec mobile app for notifications | https://www.hydroquebec.com/mobile-app.html |

### Atlantic Canada (NB, NS, PE, NL)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| NB Power — Current Outages | New Brunswick · Crown Corp | Outage dashboard | Live outage map and per-region outage lists for NB Power — unplanned and planned interruptions with customers affected, refreshed every 10 minutes; lookup by phone or account number. | https://www.nbpower.com/open/outages.aspx?lang=en |
| Nova Scotia Power — Outage Map | Nova Scotia · Provincial | Outage map | Live power outage map across Nova Scotia | https://outagemap.nspower.ca/ |
| Maritime Electric — Outage Map | PEI · Provincial | Outage map | Maritime Electric's Prince Edward Island outage map | https://maritimeelectric.com/outages/ |

### Northern Canada (YT, NT, NU)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Yukon Energy Map | Yukon · Provincial | Energy map | Yukon renewable energy infrastructure, electricity generation, and transmission maps. | https://yukon.ca/en/renewable-energy-map |

## 🌾 Agriculture, Food & Drink

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| AAFC — Livestock Traceability | Canada · Federal | Traceability reference | Federal hub on Canada's livestock and poultry traceability system: mandatory animal identification, premises identification and movement reporting for cattle, bison, pigs and sheep, plus CFIA regulatory links and funding info. | https://agriculture.canada.ca/en/sector/animal-industry/livestock-traceability |
| Agri-Food Data Canada | Canada · Federal | Research data | Agricultural research and producer data platform supporting Canadian farms and AI projects | https://agrifooddatacanada.ca/ |
| Agriculture and Agri-Food Canada | Canada · Federal | Government department | Federal department supporting Canadian agriculture through research, policies, market development, and producer programs | https://agriculture.canada.ca/en |
| Canada's Plant Hardiness Site | Canada · Federal | Interactive map | NRCan's interactive plant hardiness zone maps showing what can grow where, built from seven climate variables using 1991-2020 averages — essential for gardeners and growers. | https://planthardiness.gc.ca/ |
| Canadian Drought Monitor | Canada · Federal | Monitoring map | Canada's official monthly drought maps from Agriculture and Agri-Food Canada, classifying conditions from abnormally dry to exceptional drought using vegetation, streamflow and climate indicators. | https://agriculture.canada.ca/en/agricultural-production/weather/canadian-drought-monitor |
| Canadian Food Inspection Agency (CFIA) | Canada · Federal | Regulator | Federal food safety, plant and animal health regulator — recalls, inspections, and standards | https://inspection.canada.ca/ |
| Canadian Grain Commission | Canada · Federal | Regulator | Canada's grain quality regulator — grading, testing, and producer protection services | https://www.grainscanada.gc.ca/ |
| Canadian Wine Authority — VQA Wine Info | Canada · Federal | Wine info | Ontario's Vintners Quality Alliance wine standards, producer listings, and wine info | https://vqaontario.ca/ |
| Foodland Ontario — Seasonal Availability | Canada · Federal | Seasonal guide | What's in season across Ontario farms and markets | https://www.ontario.ca/foodland/ |
| Health Canada — Pesticide Maximum Residue Limits Search | Canada · Federal | Regulatory search tool | Look up legal pesticide residue limits by chemical and food commodity; full result sets downloadable as CSV, plus an open REST API. | https://pest-control.canada.ca/pesticide-registry/en/mrl-search.html |
| Pesticide Label Search | Canada · Federal | Product database | Search Health Canada’s pesticide product registry by registration number, active ingredient, or company; view and download current registered labels (PDF). | https://pest-control.canada.ca/pesticide-registry/en/label-search.html |
| Farm Credit Canada | Canada · Crown Corp | Agricultural financing | Federal crown corporation providing financing, insurance, and software to Canadian farmers and agribusinesses | https://www.fcc-fac.ca/ |

### British Columbia

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| BC Liquor Stores | British Columbia · Crown Corp | Retail | BCLS product catalogue, inventory by store, and special releases | https://www.bcliquorstores.com/ |
| Agricultural Land Commission — ALR Property and Map Finder | British Columbia · Provincial | Interactive map | Check if any BC parcel is inside the Agricultural Land Reserve by PID or address; view ALC applications, print 1:20k mapsheets, download quarterly ALR shapefiles and KMZ. | https://www.alc.gov.bc.ca/alr-maps/ |

### Alberta

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| AFSC — Alberta Crop Insurance | Alberta · Crown Corp | Crop insurance programs | Agriculture Financial Services Corporation: Alberta crop insurance for annual/perennial crops, apiary, straight hail and wildlife damage; current pricing, 2026 insuring agreements and terms, plus 'Yield Alberta' indemnity and claims statistics. | https://afsc.ca/crop-insurance/ |
| Agriculture & Irrigation — Alberta Soil Information Viewer | Alberta · Provincial | Interactive map | Query AGRASID soil types, land suitability ratings and elevation profiles per quarter section across Alberta's 26-million-hectare farm region; GIS spatial data available. | https://soil.agric.gov.ab.ca/agrasidviewer/ |
| Alberta Agriculture Statistics Publications | Alberta · Provincial | Statistics hub | Official Alberta agri-food statistics: Agriculture Statistics Yearbook (150+ tables on crops, livestock, farm income, agri-food exports), fact sheets, crop production estimates, weekly crop market review and livestock inventory statistics with downloads. | https://www.alberta.ca/agriculture-statistics-publications |

### Saskatchewan

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| SCIC — Crop Insurance Prices and Programs | Saskatchewan · Crown Corp | Crop insurance rates & data | Saskatchewan Crop Insurance Corporation: current base/low crop prices per tonne, premium rates and coverage options (multi-peril, forage, weather-based, vegetable, bee), premium calculators, pricing resources and annual statistics. | https://www.scic.ca/crop-insurance/prices |
| Saskatchewan Land | Saskatchewan · Provincial | Land maps | Crown land information, agricultural land, and land use data | https://www.saskatchewan.ca/business/agriculture-natural-resources-and-industry |
| Saskatchewan Ministry of Agriculture — Crop Report | Saskatchewan · Provincial | Weekly report | Weekly growing-season crop reports: moisture, crop development, disease, and harvest progress by region, plus year-end statistics archives. | https://www.saskatchewan.ca/crop-report |

### Manitoba

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Manitoba Liquor and Lotteries | Manitoba · Crown Corp | Retail | Manitoba's crown retailer with liquor product and lottery services | https://www.mbll.ca/ |
| Manitoba Agriculture — Crop Markets and Statistics | Manitoba · Provincial | Statistical datasets | Download Manitoba crop statistics as XLSX: acreage/yield/production 1965–2025, costs of production 1981–2026, grain stocks, deliveries, elevator capacity, plus sector profiles (PDF). | https://www.gov.mb.ca/agriculture/markets-and-statistics/crop-statistics/index.html |
| MASC — Management Plus Municipal Yield Data | Manitoba · Provincial | Yield statistics | Manitoba Agricultural Services Corporation's Management Plus: actual insured crop yields by municipality, crop type, and year — granular farm production data unavailable anywhere else. | https://www.masc.mb.ca/masc.nsf/mmpp_index.html |

### Ontario

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Agricorp — Ontario Production Insurance | Ontario · Crown Corp | Production insurance programs | Ontario's delivery agent for Production Insurance: 100+ commodities with per-crop plan overviews, 2026 premium rates and deadlines, online yield reporting, and county-level insured-acreage/yield statistics and maps (PDF). | https://www.agricorp.com/en-ca/Programs/ProductionInsurance/Pages/Default.aspx |
| LCBO — Ontario Liquor Retailer | Ontario · Crown Corp | Retail | Search LCBO product catalogue, store availability, and specialty releases | https://www.lcbo.com/ |
| Ministry of Agriculture, Food and Agribusiness — AgMaps | Ontario · Provincial | Interactive map | Build custom farm maps: assessment-parcel search, aerial imagery, soils, drainage, erosion-potential and CLI layers; annotate and export maps for farm programs. | https://www.lioapplications.lrc.gov.on.ca/AgMaps/Index.html?viewer=AgMaps.AgMaps&locale=en-CA |
| OMAFA — Field Crops Statistics | Ontario · Provincial | Statistics | Ontario Ministry of Agriculture field crop area, yield, and production estimates by county and crop, with multi-year statistical archives. | https://www.omafra.gov.on.ca/english/stats/crops/index.html |

### Quebec

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| SAQ — Société des alcools du Québec | Quebec · Crown Corp | Retail | Browse SAQ spirits and wines with inventory, food pairings, and specialty imports | https://www.saq.com/en |
| CPTAQ — Rechercher un dossier | Quebec · Provincial | Lookup tool | Search 370,000+ CPTAQ agricultural-zone decisions, rights declarations and orders since 1978 by file number, lot or municipality. | https://www.cptaq.gouv.qc.ca/rechercher-un-dossier |
| La Financière agricole du Québec (FADQ) | Quebec · Provincial | Agri-food insurance & data | Quebec's agricultural finance agency: crop insurance program data, farm financing programs, and statistical publications on Quebec farm production and compensation. | https://www.fadq.qc.ca/ |
| MAPAQ — Liste des établissements sous permis | Quebec · Provincial | Lookup tool | Search MAPAQ food permits (restaurants, retailers, abattoirs) by name, type or region and download the list as CSV or PDF. | https://web.mapaq.gouv.qc.ca/bh/etablissements-sous-permis |

### Atlantic Canada (NB, NS, PE, NL)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| NSLC — Nova Scotia Liquor Corporation | Nova Scotia · Crown Corp | Retail | Nova Scotia's crown liquor retailer with product search and store inventory | https://www.mynslc.com/ |
| Department of Agriculture, Aquaculture and Fisheries — GIS Open Data Download | New Brunswick · Provincial | Dataset downloads (SHP/KML) | Daily-updated shapefile/KML downloads: farm locations (ARMS), maple sugary potential, marine aquaculture lease sites for finfish, shellfish and lobster, and rockweed sectors. | https://www2.gnb.ca/content/gnb/en/departments/10/open-data/data_download.html |
| Department of Fisheries and Aquaculture — Aquaculture Site Licences | Nova Scotia · Provincial | Lookup tool | Sortable table of every issued aquaculture licence/lease by operator, county, size and cultivation type, with downloadable licence and lease PDFs. | https://novascotia.ca/fish/aquaculture/public-information/ |
| IRAC — Lands Protection Act Applications Databank | PEI · Provincial | Land holdings registry | Searchable IRAC databank of Lands Protection Act applications since 1993: corporate and non-resident land holding approvals, parcel numbers, purchasers, current owners, and amendment/cancellation records. | https://irac.pe.ca/lands/land/lpa-applications-databank/ |

## 🔬 Science, Research & Space

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Canada Research Chairs — Chairholders Database | Canada · Federal | Expert directory | Find any of roughly 2,000 Canada Research Chairs by name, institution, discipline or province and read their research profiles to locate an expert. | https://www.chairs-chaires.gc.ca/chairholders-titulaires/index-eng.aspx |
| Canada’s National Artificial Intelligence Strategy: AI for All | Canada · Federal | Strategy report | Read Canada’s six-pillar AI strategy covering safety, skills, adoption, sovereign infrastructure, companies, and partnerships; download the PDF report. | https://ised-isde.canada.ca/site/ised/en/canadas-national-artificial-intelligence-strategy-ai-all |
| Canadian Astronomy Data Centre | Canada · Federal | Research data portal | NRC's open archive and science platform for astronomy data from Hubble, Gemini, CFHT, JCMT and other telescopes — petabytes of data served to astronomers worldwide. | https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/en/ |
| Canadian Space Agency | Canada · Federal | Science portal | Missions, astronauts, educational material, media, and space updates | https://www.asc-csa.gc.ca/eng/ |
| Canadian Space Agency — Mission Tracker | Canada · Federal | Tracker | Current and upcoming CSA-supported satellite missions, astronauts, and science payloads | https://www.asc-csa.gc.ca/eng/missions/ |
| Canadian Space Agency — Open Data Portal | Canada · Federal | Open data catalogue | Download RADARSAT-1/RCM Earth-observation imagery (TIFF), Antarctica/Africa mosaics and NEOSSat astronomy datasets; CKAN API access. | https://donnees-data.asc-csa.gc.ca/en/dataset/ |
| Canadian Space Agency — RADARSAT Constellation Data | Canada · Federal | Data | Earth-observation data from the RADARSAT Constellation Mission (RCM) | https://www.asc-csa.gc.ca/eng/satellites/radarsat/ |
| CIFAR — Canadian AI Safety Institute Research Program | Canada · Federal | Research program | Browse Canadian AI safety research projects, grants, news, researchers, and evaluation work through CIFAR’s CAISI program. | https://cifar.ca/ai/ai-and-society/ai-safety-program/ |
| CIHR — Funding Decisions Database | Canada · Federal | Research grants database | Search funded health-research grants and awards by researcher, institution, competition or keyword, with dollar amounts committed over the life of each grant. | https://webapps.cihr-irsc.gc.ca/decisions/p/main.html?lang=en |
| CSRS-PPP — Precise Point Positioning | Canada · Federal | Processing tool | Submit GNSS observation files (RINEX) for free online post-processing to cm-level positions in NAD83/ITRF; results by email or download. | https://webapp.csrs-scrs.nrcan-rncan.gc.ca/geod/tools-outils/ppp.php |
| DFO — BioChem Marine Biological and Chemical Data | Canada · Federal | Data query tool | Query BioChem, Fisheries and Oceans Canada's archive of marine biological and chemical data collected across Canadian waters — plankton, nutrients, contaminants and oceanographic profiles. | https://inter-j02.dfo-mpo.gc.ca/bcq-bcr/home-accueil?lang=eng |
| DFO — Canada Marine Planning Atlas | Canada · Federal | Interactive map | Interactive marine spatial planning atlas of ecological processes, bioregion features and human activities; discover, view and download DFO geospatial data. | https://www.dfo-mpo.gc.ca/oceans/planning-planification/atlas/index-eng.html |
| Earthquakes Canada — Seismic Data API & FDSN Web Services | Canada · Federal | Data API | Query real-time and archived earthquake information for Canada as JSON/GeoRSS, plus FDSN station and dataselect web services for seismic waveform data from the Canadian National Seismograph Network. | https://www.earthquakescanada.nrcan.gc.ca/index-en.php |
| Federal Open Science Repository of Canada | Canada · Federal | Research archive | Search and download federally authored scientific articles and publications from participating science-based departments and agencies, in one public web repository. | https://open-science.canada.ca/home |
| Health Canada — Clinical Trials Database | Canada · Federal | Database | Search authorized Canadian clinical trials for human pharmaceutical and biological drugs by protocol, medical condition or sponsor; JSON/XML API and downloadable datasets. | https://clinical-trials-search.canada.ca/en/home |
| Ingenium — Collection API | Canada · Federal | Collection API | REST API over Ingenium's 150,000+ science-and-tech artifacts (agriculture, aviation, science museums): search, record lookup, more-like-this. Free API key; OpenAPI docs; bulk CSV/XML export. | https://api.ingeniumcanada.org/en/api_docs/ |
| Library and Archives Canada — Theses Canada | Canada · Federal | Theses portal | Search 425,000+ Canadian university theses and dissertations back to 1965 and read 200,000+ of them free in full text. | https://library-archives.canada.ca/eng/services/services-libraries/theses/Pages/search-theses-canada.aspx |
| National Research Council — IR Aerospace Research Centre | Canada · Federal | Research | NRC aerospace research facilities, services, and partnership programs | https://nrc.canada.ca/en/research-development/research-collaboration/research-centres/aerospace-research-centre |
| NRC — AI Safety and Responsible AI | Canada · Federal | Research and advisory resource | Explore NRC AI safety research, responsible-AI advisory services, evaluation projects, and linked research publications and tools. | https://nrc.canada.ca/en/research-development/products-services/technical-advisory-services/ai-safety-responsible-ai |
| NRC — Certified Reference Materials Catalogue | Canada · Federal | Catalogue and store | Browse and order NRC's SI-traceable certified reference materials for food, environment, health, and critical-minerals lab work, with certificates for each material. | https://nrc.canada.ca/en/certifications-evaluations-standards/certified-reference-materials/list |
| NRC — Sunrise/Sunset Calculator | Canada · Federal | Calculator | National Research Council calculator for sunrise, sunset and sun angles for any Canadian location and date, accurate to ±2 minutes and certifiable for legal purposes. | https://nrc.canada.ca/en/research-development/products-services/software-applications/sun-calculator/ |
| NRC — Web Clock (Canada's Official Time) | Canada · Federal | Time tool | Official time across Canada's time zones, served live from the National Research Council's atomic clocks. | https://nrc.canada.ca/en/research-development/products-services/software-applications/web-clock-official-times-across-canada |
| NRC Publications Archive | Canada · Federal | Research archive | Free full-text archive of National Research Council technical reports, conference papers and journal articles, including the free electronic editions of Codes Canada publications. | https://nrc-publications.canada.ca/eng/home/ |
| NRCan — Canada's Critical Minerals Map | Canada · Federal | Interactive map | Interactive map of Canada's 34 critical-mineral mines, advanced projects and processing plants; filter by commodity and download shapefile, FGDB or WMS. | https://atlas.gc.ca/critical-minerals/en/index.html |
| NRCan — Geoscience Data Repository (Geophysical) | Canada · Federal | Data download portal | Search and download Geological Survey of Canada aeromagnetic, gravity, radiometric and electromagnetic survey data by NTS map sheet, region or custom area. | https://geophysical-data.canada.ca/Portal/Search |
| NRCan Geomagnetism — Magnetic Field Calculator & Observatory Data | Canada · Federal | Data API | Calculate magnetic declination and field components anywhere in Canada, download observatory magnetometer data (FDSN), and view 24-hour magnetic summary plots from the national observatory network. | https://geomag.nrcan.gc.ca/index-en.php |
| NSERC — Awards Database | Canada · Federal | Research grants database | Search every NSERC grant and scholarship awarded since 1991 by researcher, institution, program, year or keyword. | https://www.nserc-crsng.gc.ca/ase-oro/index_eng.asp |
| NSERC — Natural Sciences and Engineering Research Council | Canada · Federal | Research funding | Federal agency that funds natural sciences and engineering research at Canadian universities and colleges | https://www.nserc-crsng.gc.ca/ |
| Open Science and Data Platform (OSDP) | Canada · Federal | Data platform | Single-window search across federal, provincial and territorial science publications, geospatial data and regulatory records for cumulative-effects and impact-assessment work; layer datasets in an interactive map viewer. | https://osdp-psdo.canada.ca/en/about-osdp |
| POLAR — Conducting Research in Canada's North | Canada · Federal | Research portal | Polar Knowledge Canada's guide to conducting research in the North: regional and federal permitting authorities, logistics, facilities and guidance on Indigenous research relationships. | https://www.canada.ca/en/polar-knowledge/online-portal-for-researchers.html |
| Polar Knowledge Canada — CHARS | Canada · Federal | Research | Canadian High Arctic Research Station — northern science, Indigenous research, and community data | https://www.canada.ca/en/polar-knowledge.html |
| SSHRC — Awards Search Engine | Canada · Federal | Research grants database | Look up SSHRC grant and fellowship payments back to 1998 by applicant, institution, program or discipline. | https://www.sshrc-crsh.gc.ca/results-resultats/award_search-recherche_attributions/index-eng.aspx |
| NRC — Programs and Services | Canada · Crown Corp | Research | NRC research programs, technology platforms, and business innovation support | https://nrc.canada.ca/en |
| Borealis — Canadian Dataverse Repository | Canada · Agency | Research data repository | Discover, explore and download DOI-issued research datasets from 65+ Canadian universities and research organizations — no login needed to search. | https://borealisdata.ca/ |
| Canada Explore — OpenAIRE Research Portal | Canada · Agency | Research discovery portal | Search 5M+ Canadian publications, research datasets and software linked to NSERC, CIHR and SSHRC funding, aggregated from 866+ institutional repositories. | https://canada.explore.openaire.eu/ |
| CFI — Research Facilities Navigator | Canada · Agency | Facilities directory | Search 850+ university, college, hospital and government research labs open to collaboration, filtered by capability, equipment and location. | https://navigator.innovation.ca/en |
| FRDR — Federated Research Data Repository | Canada · Agency | Research data repository | Search and download large Canadian research datasets, or deposit your own for DOI-backed publication, in the Digital Research Alliance of Canada's curated national repository. | https://www.frdr-dfdr.ca/repo/ |
| Genome Canada | Canada · Agency | Research | National genomics organization funding research, platforms, and innovation | https://www.genomecanada.ca/ |
| Lunaris — Canadian Research Data Discovery | Canada · Agency | Data discovery service | Search 80,000+ Canadian research datasets held in 100+ academic and government repositories from one bilingual keyword and map interface. | https://www.lunaris.ca/ |
| Ocean Networks Canada | Canada · Agency | Observatory | Live ocean observatory data from UVIC-operated cabled instruments off the Pacific and Arctic coasts | https://www.oceannetworks.ca/ |
| Ocean Networks Canada — Oceans 2.0 Data API | Canada · Agency | Data API | Query live and archived oceanographic data from ONC's cabled observatories, coastal and mobile platforms — sensor time series, seafloor imagery and derived products via the Oceans 2.0 API. | https://data.oceannetworks.ca/ |
| Perimeter Institute — Public Science | Canada · Agency | Education | Perimeter's free public lectures, educator resources, and theoretical physics content | https://perimeterinstitute.ca/ |
| Polar Data Catalogue | Canada · Agency | Research data repository | CoreTrustSeal-certified repository of Arctic and Antarctic research metadata and data, searchable by region, community or program, with a metadata API and interactive explorer. | https://polardatacatalogue.ca/ |
| SNOLAB — Underground Physics | Canada · Agency | Research | SNOLAB Sudbury underground lab — dark-matter and neutrino physics research | https://www.snolab.ca/ |
| TRIUMF — Canada's Particle Accelerator | Canada · Agency | Research | TRIUMF UBC-based subatomic and nuclear research lab — public science content and tours | https://www.triumf.ca/ |

### British Columbia

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| BC Geological Survey | British Columbia · Provincial | Research database | Provincial geoscience publications, mineral occurrence database (MINFILE), assessment reports, and interactive MapPlace mapping for British Columbia's rocks and resources. | https://www2.gov.bc.ca/gov/content/industry/mineral-exploration-mining/british-columbia-geological-survey |

### Alberta

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Alberta Geological Survey — AGS Data & Maps | Alberta · Provincial | Research database | Geological mapping, groundwater, landslide, and energy-resource geology datasets for Alberta, including interactive maps and open-file reports. | https://ags.aer.ca/ |

### Saskatchewan

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Ministry of Energy and Resources — MARS Mineral Disposition Map | Saskatchewan · Provincial | Lookup tool | Public map of Saskatchewan mineral permits and claims: search by disposition number or cadastral/grid, see free-and-clear vs restricted land, updated daily. | https://mars.isc.ca/MARSWeb/publicmap/FeatureAvailabilitySearch.aspx |
| Saskatchewan Mining and Petroleum GeoAtlas | Saskatchewan · Provincial | Interactive map | Map 100+ mineral-tenure, geoscience and oil-and-gas layers for Saskatchewan; query and filter datasets, upload your own data and download shapefiles or geodatabases. | https://gisappl.saskatchewan.ca/GeoAtlas |

### Manitoba

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Manitoba Geological Survey — GIS Map Gallery | Manitoba · Provincial | Data download portal | Download Manitoba geology, geophysics, geochronology and mineral-occurrence maps and datasets, including digital data sources and the province-wide 1:1M geology compilation. | https://www.manitoba.ca/iem/geo/gis/index.html |

### Ontario

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| GeologyOntario — Ontario Geological Survey Database | Ontario · Provincial | Research database | Massive geoscience archive: bedrock and surficial mapping, drill core logs, assessment report files, and mineral occurrence databases for Ontario — free downloads spanning a century of survey work. | https://www.geologyontario.mndm.gov.on.ca/ |
| Ministry of Energy and Mines — MLAS Mining Claims Map | Ontario · Provincial | Interactive map | Look up active unpatented mining claims, mineral titles and lands open for staking on the public MLAS Map Viewer. | https://www.lioapplications.lrc.gov.on.ca/MLAS/Index.html?viewer=MLAS.MLAS&locale=en-CA |

### Quebec

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| MRNF — GESTIM mining titles registry | Quebec · Provincial | Lookup tool | Query Quebec's public mining-rights register by map or criteria, download title data and generate custom claim maps (PDF). | https://gestim.mines.gouv.qc.ca/ |
| SIGEOM — Québec Geoscientific Data | Quebec · Provincial | Research database | Québec's mineral deposit, drilling, geochemistry, and geological map database — full government assessment files downloadable since the 1800s; the backbone of northern mining exploration research. | https://sigeom.mines.gouv.qc.ca/ |

### Atlantic Canada (NB, NS, PE, NL)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| New Brunswick Geological Survey — Bedrock Geology Open Data | New Brunswick · Provincial | GIS open data | Download NBGS bedrock-geology polygons, faults and structural data as ArcGIS, WMS and WFS services — the result of nearly 50 years of mapping, with geochronology records. | https://www2.gnb.ca/content/gnb/en/departments/erd/open-data/bedrock-geology.html |
| Ministry of Industry, Energy and Technology — GeoScience Atlas | Newfoundland and Labrador · Provincial | Interactive Map | Geological Survey map viewer for bedrock geology, mineral occurrences, mining claims, geophysics and geochemistry, with spatial queries plus data and map downloads. | https://geoatlas.gov.nl.ca/ |
| NovaScan — Nova Scotia Geoscience Maps & Publications | Nova Scotia · Provincial | Research database | Geologically indexed database of all Nova Scotia geoscience documents — maps, publications, open files, university theses and mineral-exploration assessment reports. | https://novascotia.ca/natr/meb/geoscience-online/about-novascan.asp |

### Northern Canada (YT, NT, NU)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| NWT Discovery Portal | Northwest Territories · Provincial | Environmental data portal | Search the most comprehensive online source of NWT environmental monitoring knowledge — data, metadata and reports — administered by the NWT Cumulative Impact Monitoring Program. | https://nwtdiscoveryportal.enr.gov.nt.ca/geoportal/catalog/main/home.page |
| Isirvik — Nunavut Research Portal | Nunavut · Provincial | Research directory | Map-based, searchable portal to every research project licensed by the Nunavut Research Institute since 2004 — project summaries, locations, topics and team members. | https://www.nri.nu.ca/isirvik-research-portal |
| Yukon — Permafrost Database | Yukon · Provincial | Database | Geotechnical boreholes, ground-temperature sensors and permafrost reports for Yukon, viewable on maps and downloadable as datasets with submission templates. | https://service.yukon.ca/permafrost/ |
| Yukon Geological Survey — Data, Maps & Publications | Yukon · Provincial | Research database | Search and download Yukon Geological Survey publications, geoscience maps, minfiles, assessment reports and drill-core data, plus territory-wide bedrock and surficial compilations. | https://data.geology.gov.yk.ca/ |

## 🎭 Heritage, Culture & Arts

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Bank of Canada — Exchange Rates | Canada · Federal | Currency data | Daily exchange rates, historical data, and currency converter | https://www.bankofcanada.ca/rates/exchange/ |
| Bank of Canada — Interest Rates | Canada · Federal | Rates data | Current and historical interest rates, monetary policy summaries, and research | https://www.bankofcanada.ca/rates/ |
| Canada Council Art Bank — Collection Search & Open Data | Canada · Federal | Collection search | Search the world's largest contemporary Canadian art collection — 17,000+ works by 3,000+ artists; full collection dataset downloadable as CSV or Excel via Canada Council data tables. | https://artbank.ca/ |
| Canada Council for the Arts — Grant Recipients Data Tables | Canada · Federal | Open data tables | Download complete lists of Canada Council grant recipients from 2013–present by program, field, community and riding; Excel and CSV plus methodology PDFs. | https://canadacouncil.ca/research/data-tables |
| Canadian Conservation Institute — CCI Notes | Canada · Federal | Publication series | 100+ free illustrated guides on care, handling and storage of cultural objects — metals, paintings, paper, textiles, photographs, emergency planning. HTML/PDF. | https://www.canada.ca/en/conservation-institute/services/conservation-preservation-publications/canadian-conservation-institute-notes.html |
| Canadian Museum for Human Rights | Canada · Federal | Museum | National museum in Winnipeg dedicated to the evolution, celebration, and future of human rights in Canada | https://humanrights.ca/ |
| Canadian Museum of History — Collection | Canada · Federal | Museum | Online collection and virtual exhibitions from Canada's national museum of human history | https://www.historymuseum.ca/ |
| Canadian Museum of Immigration at Pier 21 | Canada · Federal | Museum | National museum in Halifax exploring the immigrant experience and contributions to Canada's cultural mosaic | https://pier21.ca/ |
| Canadian Museum of Nature — Online Collection | Canada · Federal | Digital collection | Digital access to the museum's natural history specimens and research | https://nature.ca/collection |
| Canadian War Museum | Canada · Federal | Museum | Canada's national museum of military history, covering conflicts from earliest times to the present | https://www.warmuseum.ca/ |
| Celebrate Being Canadian | Canada · Federal | Civic engagement | Resources and events to celebrate Canadian citizenship, culture, and national identity | https://www.canada.ca/en/immigration-refugees-citizenship/services/canadians/celebrate-being-canadian.html |
| Historic Sites and Monuments Board of Canada | Canada · Federal | Historic sites register | Register of historic sites, searchable by province, theme, and date | https://historicplaces.ca/ |
| Historica Canada — Heritage Minutes | Canada · Federal | Educational videos | Educational video shorts on Canadian history moments and figures | https://www.historicacanada.ca/ |
| National Film Board — Collection Catalogue | Canada · Federal | Film catalogue | Search every NFB production since 1939—13,000+ documentaries, animations and films—by title, genre, format and duration; thousands stream free on NFB.ca. | https://collection.nfb.ca/home |
| National Film Board — Online Screening Room | Canada · Federal | Streaming | Free streaming of Canadian documentaries, animations, and interactive works | https://www.nfb.ca/ |
| National Gallery of Canada — Collection Search | Canada · Federal | Art collection | Explore the national art collection online with high-resolution images | https://www.gallery.ca/ |
| Telefilm Canada — Funded Projects Directory | Canada · Federal | Funding registry | Searchable directory of every Canadian feature film financed by Telefilm since FY2013-14 across development, production, marketing and Talent to Watch programs, filterable by fiscal year. | https://telefilm.ca/en/who-we-are/directories/funded-projects-directory |
| TERMIUM Plus | Canada · Federal | Language database | The Government of Canada's terminology bank — millions of terms in English, French, Spanish and Portuguese from the Translation Bureau, one of the largest in the world. | https://www.btb.termiumplus.gc.ca/tpv2alpha/alpha-eng.html?lang=eng |
| Forillon National Park | Parks Canada · Federal | National park | Gaspé Peninsula tip, marine life, historic buildings, hiking | https://parks.canada.ca/forillon |
| Fundy National Park | Parks Canada · Federal | National park | World's highest tides, bay of Fundy coastline, historic covered bridges | https://parks.canada.ca/fundy |
| Gros Morne National Park | Parks Canada · Federal | National park | UNESCO World Heritage Site, dramatic fjords and tablelands, Newfoundland geology | https://parks.canada.ca/grosmorne |
| Kluane National Park | Parks Canada · Federal | National park | UNESCO World Heritage Site, Canada's highest peaks, glaciers, home of the Kluane National Park Reserve | https://parks.canada.ca/kluane |
| Lachine Canal National Historic Site | Parks Canada · Federal | Historic site | Montreal's historic canal, cycling path, urban heritage | https://parks.canada.ca/lachine |
| Nahanni National Park Reserve | Parks Canada · Federal | National park reserve | Spectacular river canyons, waterfalls, UNESCO World Heritage Site, remote wilderness | https://parks.canada.ca/nahanni |
| Old Port of Montreal | Parks Canada · Federal | Historic/cultural | Montreal's waterfront heritage zone with science centre and events | https://www.oldportofmontreal.com/ |
| Rideau Canal National Historic Site | Parks Canada · Federal | Historic site | UNESCO World Heritage Site, Ottawa's Rideau Canal — winter skating, summer boating | https://parks.canada.ca/rideau |
| Writing-on-Stone National Historic Site | Parks Canada · Federal | Historic site | Sacred Blackfoot landscape, Alberta, petroglyphs and pictographs | https://parks.canada.ca/culture/spm-whs/sites-canada/sec02t |
| CBC Radio-Canada — Archives | Canada · Crown Corp | Archive | Digitized Canadian news, radio, and TV archives from CBC/Radio-Canada | https://www.cbc.ca/archives |
| Ingenium — Collection Online | Canada · Crown Corp | Museum collections database | Search digital records and images from Canada's national science and technology collection — 150,000+ artifacts across the science, aviation and agriculture museums. | https://collection.ingenium.ca/en/ |
| Royal Canadian Mint — Coin Shop and History | Canada · Crown Corp | Cultural | Explore Canadian coinage, commemorative releases, and numismatic history | https://www.mint.ca/ |
| Canada's Sports Hall of Fame | Canada · Agency | Museum | Canadian athlete biographies, sport history, and educational content | https://sportshall.ca/ |
| Canadiana.ca — Heritage Digital Collection | Canada · Agency | Archive | Digitized historical Canadian publications, directories, and government documents | https://www.canadiana.ca/ |
| Dictionary of Canadian Biography | Canada · Agency | Reference database | 9,000+ expert-written, fact-checked biographies spanning the years 1000 to 2000, free and bilingual, from the University of Toronto and Université Laval with federal support. | http://www.biographi.ca/en/ |
| Hockey Hall of Fame | Canada · Agency | Museum | Inductee biographies, hockey history, and digital exhibits from the Hockey Hall of Fame | https://www.hhof.com/ |
| National Centre for Truth and Reconciliation — Archives | Canada · Agency | Archive | Residential school records, survivor statements, and research for reconciliation | https://nctr.ca/records/ |
| The Canadian Encyclopedia | Canada · Agency | Reference database | 26,000+ authored and fact-checked articles on Canada — the country's national encyclopedia, free and bilingual from Historica Canada. | https://www.thecanadianencyclopedia.ca/en |

### British Columbia

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Royal BC Museum — Collections | British Columbia · Agency | Museum | Natural and human history collections and learning portal for BC | https://royalbcmuseum.bc.ca/ |
| Vancouver Heritage Register — Vancouver Heritage Database | Vancouver · Municipal | Heritage register | Search Vancouver's heritage database — designated A, B, C heritage resources and potential heritage sites | https://vancouver.ca/home-property-development/heritage-register.aspx |

### Alberta

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Glenbow Museum — Collections Online | Alberta · Agency | Museum | Western Canadian art, Indigenous collections, and historical photos from Glenbow | https://www.glenbow.org/collections/ |
| Royal Alberta Museum | Alberta · Provincial | Museum | Western Canada's largest museum — natural and human history of Alberta, with online collections | https://royalalbertamuseum.ca/ |

### Saskatchewan

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Royal Saskatchewan Museum | Saskatchewan · Provincial | Museum | Saskatchewan's natural history museum — galleries, research, and the T. rex Discovery Centre | https://royalsaskmuseum.ca/ |

### Ontario

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Royal Ontario Museum — Collections | Ontario · Agency | Museum | Search the ROM's online collections of natural history, art, and world cultures | https://www.rom.on.ca/ |
| Teranet — Ontario Land Registry | Ontario · Agency | Land data | Property search and historical title data for Ontario | https://www.teranet.ca/ |
| Mississauga Heritage — Heritage Register | Mississauga · Municipal | Heritage register | Mississauga's heritage register of designated built heritage properties and cultural heritage landscapes | https://www.mississauga.ca/heritage/ |
| Toronto Heritage Register — Built Heritage | Toronto · Municipal | Heritage register | Searchable list of Toronto's designated and listed heritage properties — built heritage, cultural landscapes, and archaeological sites | https://www.toronto.ca/city-government/data-research-maps/toronto-parks-trees-green-space/heritage-register/ |
| Toronto Open Data landing page | Toronto · Municipal | Open data hub | Portal page with datasets, gallery, and city data access | https://www.toronto.ca/city-government/data-research-maps/open-data/open-data-portal/ |
| Toronto Public Library — Digital Archive | Toronto · Municipal | Archive | Toronto's digital heritage archive with photos, maps, and historical records | https://digitalarchive.tpl.ca/ |

### Quebec

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| BAnQ — Bibliothèque et Archives nationales du Québec | Quebec · Provincial | Archive | Quebec's national library and archives with digitized newspapers, records, and genealogy | https://www.banq.qc.ca/ |
| BAnQ numérique | Quebec · Provincial | Digital heritage portal | Browse and download Quebec's digitized heritage — newspapers, maps, photos, civil registers and notarial archives — including 100,000+ freely reusable public-domain documents. | https://numerique.banq.qc.ca/ |
| Montreal Open Data showcase | Montreal · Municipal | App gallery | Gallery of applications built from Montreal open data | https://donnees.montreal.ca/en/showcase |

### Atlantic Canada (NB, NS, PE, NL)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| New Brunswick Museum | New Brunswick · Provincial | Museum | New Brunswick's provincial museum — natural science and human history collections and online resources | https://www.nbm-mnb.ca/ |
| The Rooms (Newfoundland and Labrador) | Newfoundland and Labrador · Provincial | Museum | Newfoundland and Labrador's provincial museum, art gallery, and archives — collections and online exhibits | https://www.therooms.ca/ |

## 🖼️ Heritage Registers & Public Art

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Artefacts Canada | Canada · Federal | Collections database | Search 4 million object records and 1 million images contributed by museums across Canada, maintained by the Canadian Heritage Information Network. | https://app.pch.gc.ca/application/artefacts_hum/indice_index.app?lang=en |
| Canadian Conservation Institute — Agents of Deterioration | Canada · Federal | Reference | Comprehensive illustrated reference on the 10 primary agents of deterioration (light, pests, water, theft, fire...) threatening heritage collections, with risk-assessment and prevention guidance. | https://www.canada.ca/en/conservation-institute/services/agents-deterioration.html |
| Canadian Conservation Institute — Light Damage Calculator | Canada · Federal | Interactive tool | Estimate how colourants and museum collections fade under any lighting scenario: pick a colourant or collection type, set lux/hours, view predicted colour swatches. Three interactive variants. | https://app.pch.gc.ca/application/cdl-ldc/description-about.app?lang=en |
| Canadian Heraldic Authority — Public Register of Arms, Flags and Badges | Canada · Federal | Searchable register | Search 6,700+ officially granted Canadian coats of arms, flags, and military badges, with images and blazons, from the Canadian Heraldic Authority. | https://pubreg.gg.ca/ |
| Canadian Register of Historic Places | Canada · Federal | Heritage register | Pan-Canadian register (federal-provincial partnership) documenting 12,000+ recognized historic places: federal heritage designations, provincial registers, and municipal landmarks with statements of significance. | https://www.historicplaces.ca/en/pages/1_home.aspx |
| Canadian War Museum — Online Exhibitions | Canada · Federal | Virtual exhibits | Two dozen free online exhibitions from Canada's national military museum: veterans' oral histories, D-Day, First World War, war art, naval history, medals and propaganda poster archives. | https://www.warmuseum.ca/dod/online-exhibitions |
| CHIN — Nomenclature for Museum Cataloging | Canada · Federal | Controlled vocabulary | Search and browse North America's standard object-name thesaurus for museum cataloguing; bilingual terms plus SPARQL/LOD endpoint and reconciliation API. | https://www.nomenclature.info/apropos-about.app?lang=en |
| Library and Archives Canada — Aurora Catalogue | Canada · Federal | Library catalogue | Search LAC's published holdings—books, newspapers, magazines, official publications, maps, music and theses—via the national bibliography (WorldCat Discovery). | https://bac-lac.on.worldcat.org/discovery?lang=en |
| Library and Archives Canada — Canadian Directories Collection (1790–1906) | Canada · Federal | Full-text archive | Full-text keyword search across ~95 digitized pre-1901 Canadian city, county and provincial directories (incl. Ottawa and Halifax runs); hits link directly to scanned directory pages. | https://www.bac-lac.gc.ca/eng/discover/directories-collection/pages/directories-collection.aspx |
| Library and Archives Canada — Census Records | Canada · Federal | Genealogy database | Free searchable Canadian census records from 1825 to 1931, searchable by name, province and district — the backbone of Canadian genealogy research. | https://library-archives.canada.ca/eng/collection/research-help/genealogy-family-history/censuses/Pages/censuses.aspx |
| Library and Archives Canada — Co-Lab | Canada · Federal | Crowdsourcing platform | Transcribe, tag, translate and describe digitized LAC archival records — WWI personnel files, Treaty 9 photographs, Expo 67 — opening Canada's digital collection to search. | https://colab.bac-lac.gc.ca/eng |
| Library and Archives Canada — Collection Search | Canada · Federal | Archive search | Single search across 26+ LAC databases: archival documents, genealogy sources, military service records, published books, maps, images and sound recordings. | https://recherche-collection-search.bac-lac.gc.ca/eng/Home/Search |
| Library and Archives Canada — Government of Canada Web Archive | Canada · Federal | Web archive | Search and browse 35+ TB of preserved Canadian websites since 2005: federal sites, COVID-19, TRC, royal commissions, and historical .ca domain crawls. | https://webarchiveweb.bac-lac.canada.ca/en/ |
| Library and Archives Canada — Home Children Database (1869–1932) | Canada · Federal | Genealogy database | Search 245,000+ indexed names of British Home Children by surname, given name, ship and year of arrival; entries link to passenger lists, inspection reports and Immigration Branch files. | https://www.bac-lac.gc.ca/eng/discover/immigration/immigration-records/home-children-1869-1930/immigration-records/pages/immigration-records.aspx |
| Library and Archives Canada — Land Grants of Western Canada | Canada · Federal | Genealogy database | Search 670,000+ letters patent for homestead land grants in Manitoba, Saskatchewan, Alberta and the BC railway belt (1870–1930) by name, location or keyword. | https://www.bac-lac.gc.ca/eng/discover/land/land-grants-western-canada-1870-1930/Pages/land-grants-western-canada.aspx |
| Library and Archives Canada — Naturalization Records (1915–1951) | Canada · Federal | Genealogy database | Search 200,000+ people who became naturalized Canadians between 1915 and 1951 by name or country of origin, with digitized Canada Gazette pages and file references. | https://bac-lac.gc.ca/eng/discover/immigration/citizenship-naturalization-records/naturalized-records-1915-1951/Pages/introduction.aspx |
| Library and Archives Canada — Passenger Lists (1865–1935) | Canada · Federal | Genealogy database | Search 4.8 million names from ship passenger lists arriving at Quebec, Halifax, Saint John, Vancouver and Victoria, 1865–1935 — core records of immigrant arrivals. | https://www.canada.ca/en/library-archives/collection/research-help/genealogy-family-history/immigration/passenger-lists-1865-1935.html |
| Parks Canada — Directory of Federal Heritage Designations | Canada · Federal | Heritage designations database | Search 3,600+ federal designations — national historic sites, persons, events, heritage railway stations, lighthouses and federal heritage buildings — with plaque texts and photos. | https://www.pc.gc.ca/apps/dfhd/search-recherche_eng.aspx |

### British Columbia

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| BC Archives — Genealogy Search | British Columbia · Provincial | Genealogy database | Royal BC Museum's searchable indexes of BC births (1854-1904), marriages (1871-1950) and deaths (1872-2005), with digitized registration images attached. | https://search-collections.royalbcmuseum.bc.ca/Genealogy |
| Heritage Branch — BC Register of Historic Places | British Columbia · Provincial | Registry | Search 5,000+ provincially, municipally and federally recognized historic places by name, address or map; download filtered records as CSV or shapefile. | https://apps.nrs.gov.bc.ca/bcrhp/ |
| Vancouver Heritage Sites | Vancouver · Municipal | Heritage register | Open data listing of Vancouver Heritage Register buildings, streetscapes, and landscape resources with evaluation categories. | https://opendata.vancouver.ca/explore/dataset/heritage-sites/ |

### Alberta

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Alberta Register of Historic Places (HeRMIS) | Alberta · Provincial | Heritage register | Search or map-browse every Provincial and Municipal Historic Resource in Alberta, with statements of significance, locations and photos. | https://hermis.alberta.ca/ARHP/ |
| Provincial Archives of Alberta | Alberta · Provincial | Archives | Alberta's provincial archives — search millions of photographs, films, and government and private records | https://provincialarchives.alberta.ca/ |
| Calgary Heritage Inventory | Calgary · Municipal | Heritage inventory | Inventory of evaluated heritage resources in Calgary — search historic buildings and sites on Open Calgary. | https://data.calgary.ca/browse?category=Heritage |
| Edmonton Register of Historic Resources | Edmonton · Municipal | Heritage register | Search Edmonton's Register of Historic Resources for municipally designated and inventoried heritage properties. | https://www.edmonton.ca/heritage |

### Saskatchewan

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Ministry of Parks, Culture and Sport — Searching Saskatchewan Places | Saskatchewan · Provincial | Lookup tool | Search 13,000+ geographic names and historic places designated under The Heritage Property Act by name, type, designation or municipality, with interactive GIS maps. | https://www.saskatchewan.ca/residents/parks-culture-heritage-and-sport/heritage-conservation-and-commemoration/search-for-a-heritage-property |
| Saskatchewan — Provincial Archives Collection Search | Saskatchewan · Provincial | Archives database search | Search hundreds of thousands of descriptions in Saskatchewan's Permanent Collection — photos, maps, local histories, film and government records back to the Territorial era. | https://search.saskarchives.com/ |

### Manitoba

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Archives of Manitoba | Manitoba · Provincial | Archives | Manitoba government records and the Hudson's Bay Company Archives — keyword search and online finding aids | https://www.gov.mb.ca/chc/archives/ |
| Winnipeg — Cemetery Burial Search | Winnipeg · Municipal | Search database | Search 124,000+ interment records from Winnipeg's three municipal cemeteries (Brookside, St. Vital, Transcona) with dates and exact section-lot-grave locations. | https://www.winnipeg.ca/services-programs/cemeteries/burial-search |

### Ontario

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Ontario — Archives of Ontario Collection Search | Ontario · Provincial | Archives database search | Search descriptions of Ontario's archival, library and art collections — records, photographs and maps — then request items or order reproductions. | https://aims.archives.gov.on.ca/ |
| Burlington Heritage Register | Burlington · Municipal | Heritage register | Burlington municipal heritage register of designated and listed properties with conservation district information. | https://www.burlington.ca/en/planning-and-development/municipal-cultural-heritage-register.aspx |
| Cornwall Heritage Designated Sites Open Data | Cornwall · Municipal | Heritage register dataset | GIS layer of Heritage Cornwall designated properties — map, filter, and download designated sites with by-law references via open data portal. | https://data-cornwallcity.opendata.arcgis.com/datasets/7e4d2ad84e584cceb938711fec2f9f2c_0 |
| Hamilton Heritage Properties — Open Data | Hamilton · Municipal | Heritage register dataset | Designated and listed heritage properties in Hamilton as a downloadable GIS dataset on Open Hamilton. | https://open.hamilton.ca/datasets/heritage-properties |
| Kingston Heritage Register | Kingston · Municipal | Heritage register | City of Kingston heritage property register under the Ontario Heritage Act — designated, listed, and conservation district properties. | https://www.cityofkingston.ca/building-and-renovating/heritage-property-conservation/heritage-register/ |
| London Register of Cultural Heritage Resources — CityMap | London · Municipal | Heritage register map | Interactive map of London’s Register of Cultural Heritage Resources — designated properties, listed properties, and heritage conservation districts. | https://maps.london.ca/WebDocuments/MapGallery/MapGallery/Index |
| Ottawa Heritage Register (Not Designated) | Ottawa · Municipal | Heritage register layer | Query heritage register properties not yet designated — includes heritage statements, recognition status, and legal descriptions via Planning GIS. | https://maps.ottawa.ca/ArcGIS/rest/services/Planning/MapServer/60 |
| SooMaps Heritage Sites Data | Sault Ste. Marie · Municipal | Heritage sites dataset | Weekly-refreshed CSV/JSON extracts of Sault Ste. Marie heritage sites from official GIS — sourced from city SooMaps open data program. | https://cityssm.github.io/soomaps-data/ |
| St. Thomas Heritage Properties | St. Thomas · Municipal | Heritage property listing | Searchable listing of designated and listed heritage properties in St. Thomas with location and designation details. | https://www.stthomas.ca/visiting_us/heritage_properties |
| Thunder Bay — Heritage Register CSV | Thunder Bay · Municipal | Dataset | CSV download of heritage-registered properties in Thunder Bay, including addresses, designation status, and heritage attributes. Useful for preservation research, development planning, and property due diligence. | https://opendata-thunderbay.hub.arcgis.com/datasets/bd50ba0dc1534a13b4cb6f057646b049 |
| Toronto Heritage Register (Map) | Toronto · Municipal | Heritage map | Interactive map of properties on the City of Toronto Heritage Register — search by address for listed and designated sites. | https://www.toronto.ca/city-government/planning-development/heritage-preservation/heritage-register/ |

### Quebec

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Répertoire du patrimoine culturel du Québec | Quebec · Provincial | Heritage register | Official register of Quebec's cultural heritage: classified and recognized buildings, archaeological sites, heritage districts, and intangible heritage, with legal status maps per municipality. | https://www.patrimoine-culturel.gouv.qc.ca/rpcq/ |
| Montreal Protected Heritage Sites | Montreal · Municipal | Heritage dataset | Geographic and descriptive data on buildings and sites under Quebec Cultural Heritage Act on Montreal territory — polygon boundaries with RPCQ links. | https://donnees.montreal.ca/dataset/sites-immeubles-proteges-lpc |

### Atlantic Canada (NB, NS, PE, NL)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Provincial Archives of New Brunswick | New Brunswick · Provincial | Archives | Searchable genealogical databases, land petitions, and historical images from New Brunswick's archives | https://archives.gnb.ca/ |
| Heritage NL — Provincial Register of Historic Places Search | Newfoundland and Labrador · Provincial | Lookup tool | Filterable register of 995 designated heritage properties province-wide: Registered Heritage Structures and Districts, municipal designations, fisheries heritage buildings and Century Farms, by type and region. | https://heritagenl.ca/discover/heritage-property-search/ |
| Nova Scotia Archives — Vital Statistics Search | Nova Scotia · Provincial | Genealogy database | Free search of historical Nova Scotia births (1864-1876, 1909+), marriages (from 1763 bonds) and deaths, every name linked to the digitized original record. | https://archives.novascotia.ca/vital-statistics/ |

## 📋 Lobbyists, Ethics & Disclosure

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Office of the Commissioner of Lobbying — Lobbyist Registry | Canada · Federal | Lobbyist registry | Searchable federal registry of in-house and consultant lobbyists: who is lobbying which officials, on what subject, for whom, and when. Note: site blocks automated requests; browse manually. | https://lobbycanada.gc.ca/ |

### British Columbia

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| BC Lobbyists Registry — Open Data | British Columbia · Provincial | Lobbyist open data | Monthly CSV datasets of lobbying registration returns and activity reports filed with the BC Registrar of Lobbyists since 2010. | https://www.lobbyistsregistrar.bc.ca/the-registry/open-data/ |

### Alberta

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Alberta Lobbyist Registry | Alberta · Provincial | Lobbyist registry | Free official registry under Alberta's Lobbyists Act; consultant and in-house lobbyist registrations are publicly searchable at any time. Live but blocks some automated fetchers. | https://albertalobbyistregistry.ca/ |
| Calgary Lobbyist Information | Calgary · Municipal | Lobbyist dataset | Open Calgary dataset of lobbyist registration information — download and query via API for municipal lobbying disclosures. | https://data.calgary.ca/Government/Lobbyist-Information/i74e-mxx5 |

### Saskatchewan

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Saskatchewan Lobbyist Registry | Saskatchewan · Provincial | Lobbyist registry | Public search of registered lobbyists and lobbying activities in Saskatchewan under The Lobbyists Act. | https://www.sasklobbyistregistry.ca/ |

### Manitoba

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Manitoba Lobbyists Registry | Manitoba · Provincial | Lobbyist registry | Search Manitoba lobbyist registrations and returns filed with the Office of the Integrity Commissioner. | https://manitoba.ca/lobbyists/ |

### Ontario

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Ontario Lobbyist Registry — Public Search | Ontario · Provincial | Lobbyist registry search | Search registered Ontario lobbyists by name, client, subject matter, ministry, and filing date — active and inactive registrations. | https://lobbyist.oico.on.ca/Pages/Public/PublicSearch/ |
| City of Hamilton — Lobbyist Registry | Hamilton · Municipal | Lobbyist registry | Publicly search who is lobbying Hamilton's Council, committees and staff and on what subjects — registrations and activity under the Lobbyist Registry By-law, with enforcement by the Integrity Commissioner. | https://www.hamilton.ca/city-council/accountability-transparency/lobbyist-registry |
| Ottawa Lobbyist Registry | Ottawa · Municipal | Lobbyist registry | Search lobbyist registrations and disclosed communications with City Council and staff within 15 business days of contact. | https://ottawa.ca/en/city-hall/open-transparent-and-accountable-government/lobbyist-registry |
| City of Pickering — Lobbyist Registry | Pickering · Municipal | Lobbyist registry | Established 2023 (By-law 8003/23): public search of registered lobbying activity with Council and city staff, including consultant, in-house and voluntary lobbyist profiles and subject matters. | https://www.pickering.ca/council-city-administration/accountability-and-transparency/lobbyist-registry |
| Toronto Lobbyist Registry — Open Data | Toronto · Municipal | Lobbyist dataset | Municipal lobbyist registration and communication disclosures synced to Open Toronto — analyze lobbying activity by subject and public office holder. | https://open.toronto.ca/dataset/lobbyist-registry-disclosure/ |
| Region of Waterloo — Lobbyist Registry | Waterloo · Municipal | Lobbyist registry | Launched January 1, 2025 under By-law #24-043: search consultant, in-house and voluntary lobbying of Region public office holders by subject and date through the public registry portal. | https://www.regionofwaterloo.ca/government-and-council/transparency-and-accountability/lobbyist-registry |

### Quebec

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Carrefour Lobby Québec | Quebec · Provincial | Lobbyist registry | Quebec public lobbyist registry — search mandates, institutions contacted, and lobbying subjects under the Lobbying Transparency and Ethics Act. | https://www.carrefourlobby.quebec/ |

### Atlantic Canada (NB, NS, PE, NL)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| New Brunswick Registry of Lobbyists | New Brunswick · Provincial | Lobbyist registry | Web-based registry operated by Service New Brunswick for the Integrity Commissioner; lobbyists file disclosures and the public can view registrations online. | https://www.pxw1.snb.ca/snb9000/product.aspx?productid=A001PSNBCATLOBBY&l=e |
| Newfoundland and Labrador Lobbyist Registry Search | Newfoundland and Labrador · Provincial | Lobbyist registry search | Free public search of registered lobbyists in Newfoundland and Labrador via the CADO portal — filter by lobbyist, client, and activity dates. | https://cado.eservices.gov.nl.ca/Lobbyist/LobbyistSearch.aspx |
| Nova Scotia Registry of Lobbyists | Nova Scotia · Provincial | Lobbyist registry search | Search the provincial Registry of Lobbyists for filings on lobbyists, clients, government funding, departments lobbied, subject matters and techniques used. | https://lobbyist.novascotia.ca/ |
| Prince Edward Island Lobbyist Registry | Prince Edward Island · Provincial | Lobbyist registry | PEI lobbyist registration search under the Lobbyist Registration Act. | https://www.princeedwardisland.ca/en/information/executive-council-office/lobbyist-registration |

### Northern Canada (YT, NT, NU)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Yukon Lobbyist Registry | Yukon · Provincial | Lobbyist registry | Search who is lobbying the Government of Yukon by organization or topic; view consultant and in-house filings and activity status. | https://yukonlobbyistregistry.ca/en/search-organization |

## 🚨 Emergency, Safety & Alerts

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Alert Ready — National Public Alerting System | Canada · Federal | Alerts | Public alerts for life-threatening weather, Amber Alerts, and emergencies delivered via TV, radio, LTE | https://www.alertready.ca/ |
| Canada's Missing | Canada · Federal | Search database | The RCMP's national public database of missing persons and unidentified remains cases — browse or search case profiles and submit tips directly to investigators. | https://www.canadasmissing.ca/ |
| Canadian Centre for Cyber Security | Canada · Federal | Cyber security | Government of Canada lead for cyber security, providing guidance, tools, incident reporting, and threat intelligence for citizens and organizations | https://cyber.gc.ca/en |
| Canadian Disaster Database | Canada · Federal | Search database | Public Safety Canada's searchable record of 1,000+ natural, technological and conflict disasters affecting Canadians since 1900, with fatalities, evacuations and cost estimates. | https://cdd.publicsafety.gc.ca/ |
| Canadian Nuclear Safety Commission | Canada · Federal | Regulator | Federal regulator of nuclear power and materials in Canada, overseeing licensing, compliance, and public health and safety around nuclear facilities | https://www.cnsc-ccsn.gc.ca/eng/ |
| CBSA — Enforcement Action Statistics | Canada · Federal | Statistics dashboard | Quarterly statistics on CBSA seizures of drugs, firearms, currency, and intercepted stolen vehicles, broken down by category and fiscal year. | https://www.cbsa-asfc.gc.ca/security-securite/seizure-saisie-eng.html |
| CBSA Border Watch Line — Online Tip Submission | Canada · Federal | Online reporting form | Report suspicious cross-border activity to CBSA 24/7 using a secure online form with optional attachments. | https://bwl-lsf.cbsa-asfc.cloud-nuage.canada.ca/tip-sub-en.html |
| CISC — Public Report on Organized Crime | Canada · Federal | Report series | Download the annual Criminal Intelligence Service Canada public report assessing hundreds of organized crime groups and their national threat levels. | https://publications.gc.ca/site/eng/9.506134/publication.html |
| CNSC — Nuclear Substance Licence Database | Canada · Federal | Registry | Search all active CNSC licences for nuclear substances, radiation devices and Class II facilities by use type, organization, city or province — medical, industrial and research. | https://www.cnsc-ccsn.gc.ca/eng/nuclear-substances/licensing-nuclear-substances-and-radiation-devices/licence-search |
| CPIC — Stolen Vehicle and Bike Search | Canada · Federal | Search database | Public search of the CPIC stolen-property database — check vehicles, bicycles, trailers and other serial-numbered goods reported stolen by Canadian police. | https://www.cpic-cipc.ca/ |
| CSE — Annual Reports | Canada · Federal | Report library | Read the Communications Security Establishment's unclassified annual reports on signals intelligence, cyber defence, and foreign cyber operations, back to 2019-20. | https://www.cse-cst.gc.ca/en/accountability/transparency/reports |
| CSIS — Integrated Threat Assessment Centre | Canada · Federal | Threat assessment resource | Learn how ITAC produces cross-government threat assessments and monitors Canada’s National Terrorism Threat Level in HTML. | https://www.canada.ca/en/security-intelligence-service/integrated-threat-assessment-centre.html |
| CSIS — Public Reports | Canada · Federal | Report library | Download every annual CSIS Public Report — the unclassified assessment of threats to Canada from terrorism, espionage, and foreign interference. | https://publications.gc.ca/site/eng/9.505816/publication.html |
| Cyber Centre — Top 10 Artificial Intelligence Security Actions | Canada · Federal | Security guidance | Apply ten practical measures for securing AI systems, users, data, and business processes; includes web guidance and downloadable report formats. | https://www.cyber.gc.ca/en/guidance/top-10-artificial-intelligence-security-actions-primer-itsap10049 |
| Cyber Threat Bulletin: Cyber Threat to Operational Technology | Canada · Federal | Threat assessment | Analyze CSE’s OT threat assessment, Canadian exposure snapshot, incident tables, and mitigation guidance online or as PDF. | https://www.cyber.gc.ca/en/guidance/cyber-threat-bulletin-cyber-threat-operational-technology |
| Cyber Threat Bulletin: PRC Cyber Threat Activity | Canada · Federal | Threat bulletin | Review CSE’s bulletin on PRC cyberespionage, critical-infrastructure targeting, tactics, and recommended mitigations in HTML. | https://www.cyber.gc.ca/en/guidance/cyber-threat-bulletin-cyber-centre-urges-canadians-be-aware-and-protect-against-prc-cyber-threat-activity |
| Earthquakes Canada | Canada · Federal | Live map / science tool | Near-real-time earthquake tracking and event data | https://earthquakescanada.nrcan.gc.ca/ |
| Health Canada — Canadian Cannabis Survey | Canada · Federal | Data | Annual cannabis use, perceptions, and harms reported by Canadians | https://www.canada.ca/en/health-canada/services/drugs-medication/cannabis/research-data.html |
| Health Canada — Recalls & Safety Alerts | Canada · Federal | Alerts database | Searchable national database of consumer product, food, and health product recalls and safety alerts, filterable by category, date, and brand. | https://healthycanadians.gc.ca/recall-alert-rappel-avis/index-eng.php |
| National Cyber Threat Assessment 2025-2026 | Canada · Federal | Threat assessment | Read or download CSE’s assessment of Canadian cyber threats, forecasts, actors, incidents, and trends in HTML or PDF. | https://www.cyber.gc.ca/en/guidance/national-cyber-threat-assessment-2025-2026 |
| National Wildland Fire Information System | Canada · Federal | Wildfire map | Wildfire status and fire information across Canada | https://cwfis.cfs.nrcan.gc.ca/ |
| Natural Resources Canada — Earthquake Hazard | Canada · Federal | Seismic hazard map and calculator | Determine seismic hazard at a site and view national and provincial seismic hazard maps used for Canadian building-code planning. | https://earthquakescanada.nrcan.gc.ca/hazard-alea/index-en.php |
| Public Safety Canada — Listed Terrorist Entities | Canada · Federal | Registry | Official registry of every entity listed under the Criminal Code as a terrorist entity, with background summaries and listing dates for each group. | https://www.publicsafety.gc.ca/cnt/ntnl-scrt/cntr-trrrsm/lstd-ntts/crrnt-lstd-ntts-en.aspx |
| Public Safety Canada — National Emergency Resources | Canada · Federal | Guide | Emergency preparedness guides, 72-hour kits, and hazard-specific response info | https://www.getprepared.gc.ca/ |
| RCMP — Canada's Missing | Canada · Federal | Case database | Search police-published profiles of missing persons and unidentified remains cases across Canada, with photos, descriptions, and tip submission. | https://canadasmissing.ca/index-eng.htm |
| RCMP — Crime Mapping and Statistics | Canada · Federal | Data | RCMP crime data, police reported statistics, and operational updates | https://www.rcmp-grc.gc.ca/en/crime-statistics |
| RCMP — High Risk Child Sex Offender Database | Canada · Federal | Searchable database | Search public profiles of high-risk child sex offenders by province or territory and gender using the RCMP database. | https://rcmp.ca/en/high-risk-child-sex-offender-database/search-database |
| Recalls and Safety Alerts | Canada · Federal | Alert database | Useful public alert tool for recalls and safety notices | https://recalls-rappels.canada.ca/ |
| Transport Canada — Motor Vehicle Safety Recalls Database | Canada · Federal | Recall search | Search safety recalls by make, model and year for Canadian-market vehicles, motorcycles, snowmobiles, trailers and child car seats. | https://wwwapps.tc.gc.ca/Saf-Sec-Sur/7/VRDB-BDRV/search-recherche/menu.aspx?lang=eng |
| Transport Canada — Vehicle Recalls Database API | Canada · Federal | Data API | First-party REST API for safety-related recall records on vehicles, tires and child restraints — query by recall number, make, model or model-year range in JSON or XML, no key required. | https://data.tc.gc.ca/v1.3/api/eng/vehicle-recall-database/?format=json |
| Avalanche Canada — Forecasts | Canada · Agency | Forecast map | Daily avalanche danger forecasts on an interactive map with dynamic region boundaries set by forecasters, covering Canada's backcountry mountain regions. | https://avalanche.ca/forecasts |
| Canadian Centre for Occupational Health and Safety (CCOHS) | Canada · Agency | Resources | Workplace safety guides, OSH Answers fact sheets, and e-learning | https://www.ccohs.ca/ |
| NSICOP — Committee Reports | Canada · Agency | Report library | Download annual and special reports from Parliament's security-cleared committee, including reviews of foreign interference, lawful access, and defence intelligence. | https://www.nsicop-cpsnr.ca/reports-rapports-en.html |
| NSIRA — Reports and Publications | Canada · Agency | Report library | Read unclassified NSIRA review reports and annual reports scrutinizing the national security activities of CSIS, CSE, the RCMP, and other federal agencies. | https://nsira-ossnr.gc.ca/en/publications/ |
| Office of the Intelligence Commissioner — Decisions | Canada · Agency | Decisions registry | Read declassified quasi-judicial decisions approving or rejecting ministerial authorizations for CSIS and CSE intelligence activities. | https://www.canada.ca/en/intelligence-commissioner/decisions.html |

### British Columbia

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| BC Coroners Service — Death Statistics & Drug Toxicity Dashboard | British Columbia · Provincial | Dashboard | Explore unregulated-drug toxicity deaths by month, age, sex, health authority and drug detected via an interactive dashboard, plus PDF statistical reports on drownings, crashes and more. | https://www2.gov.bc.ca/gov/content/life-events/death/coroners-service/statistical-reports |
| EmergencyInfoBC — Active Emergencies and Evacuation Orders | British Columbia · Provincial | Emergency alerts register | Ministry of Emergency Management portal listing current wildfires, floods, evacuation orders/alerts and states of provincial emergency, with links to EmergencyMapBC; updated continuously by local authorities. | https://www.emergencyinfobc.gov.bc.ca/ |
| Vancouver — GeoDASH Crime Map | Vancouver · Municipal | Interactive crime map | Map crimes reported to Vancouver Police, filtering by neighbourhood, crime type and date range, with statistical reports updated every 24 hours. | https://geodash.vpd.ca/ |

### Alberta

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Public Safety & Emergency Services — Alberta Emergency Alert | Alberta · Provincial | Alert map & feed | View critical and advisory emergency alerts on a live map, browse a 7-year alert archive, and subscribe province-wide via the official Atom/RSS feed or mobile apps. | https://emergencyalert.alberta.ca/ |
| Calgary — Police Community Safety Dashboard | Calgary · Municipal | Crime statistics dashboard | Explore Calgary crime and disorder trends back to 2018 in an interactive dashboard filterable by community, ward or police district, updated monthly. | https://www.calgarypolice.ca/transparency-and-accountability/crime-statistics.html |
| Edmonton — Neighbourhood Crime Mapping | Edmonton · Municipal | Interactive crime map | Click any Edmonton neighbourhood to plot eight crime types (assault, break and enter, vehicle theft, more) on a map for any date range up to 60 days. | https://www.edmontonpolice.ca/CrimeFiles/NeighbourhoodCrimeMapping |

### Saskatchewan

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| SaskAlert — Provincial Emergency Alert System | Saskatchewan · Provincial | Lookup tool | View current Saskatchewan emergency alerts (wildfires, floods, severe weather) by area and get notification info from the SPSA's official alerting service. | https://www.saskalert.ca/ |
| Prince Albert — CSWB Data & Crime Dashboard | Prince Albert · Municipal | Dashboard | Interactive GIS crime dashboard updated weekly with police call data, plus encampment mapping and needle reporting for community safety and well-being. | https://www.citypa.ca/living-in-our-community/cswb/data-cswb/ |
| Saskatoon — Police Crime Map | Saskatoon · Municipal | Interactive crime map | View approximate locations of crimes and traffic collisions reported to Saskatoon Police on an interactive city map, by neighbourhood or citywide. | https://map.saskatoonpolice.ca/ |

### Ontario

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Ontario Wildfire Map (Interactive) | Ontario · Provincial | Wildfire map | Ontario's interactive fire map with fire size, status, and restricted fire zones | https://www.ontario.ca/page/forest-wildland-and-outdoor-fires |
| Hamilton — Police Online Crime Mapping Tool | Hamilton · Municipal | Interactive crime map | Search where break-ins, robberies, vehicle thefts and homicides occurred in Hamilton over the past 60 days, with hotspot maps and email crime alerts. | https://hamiltonpolice.on.ca/how-to/online-crime-mapping-tool |
| Ottawa — Police Community Safety Data Portal | Ottawa · Municipal | Crime maps and open data | Browse Ottawa Police crime maps (year-to-date and historical), shootings, overdose calls by neighbourhood, and download 340k+ criminal offence records. | https://data.ottawapolice.ca/ |
| Toronto — Fire Active Incidents | Toronto · Municipal | Live incident feed | Watch active incidents dispatched by Toronto Fire Services in near real time, pulled from the CAD dispatch system and refreshed every five minutes. | https://www.toronto.ca/community-people/public-safety-alerts/alerts-notifications/toronto-fire-active-incidents/ |
| Toronto Police — Crime Dashboard | Toronto · Municipal | Dashboard | Public Safety Data Portal — major crime incidents, shootings, traffic collisions in Toronto | https://data.tps.ca/ |
| York Region — Police Community Safety Data Portal | York Region · Municipal | Crime map and dashboards | Track crime in Markham, Vaughan, Richmond Hill and the rest of York Region with an interactive safety map, auto-theft trend dashboard and stats by municipality. | https://community-safety-portal-datayrp.hub.arcgis.com/ |

### Quebec

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| SOPFEU — Interactive Wildfire Map | Quebec · Provincial | Interactive map | Real-time map of active forest fires (size, status, cause), fire danger index by zone, and current burn restrictions across Quebec, with saved locations and email alerts; updated daily at 9am. | https://www.sopfeu.qc.ca/carte/ |
| Vigilance — Surveillance de la crue des eaux | Quebec · Provincial | Monitoring portal | Sécurité publique real-time flood watch: river gauges, flood-extent surveillance maps and civil-security updates during spring freshet; complements regulatory flood-zone cartography. | https://vigilance.geo.msp.gouv.qc.ca/ |
| Montréal — Vue sur la sécurité publique | Montreal · Municipal | Crime data visualization | Visualize SPVM police data on Montreal crime since 2015 through an interactive map and charts, by borough, category and time period. | https://ville.montreal.qc.ca/vuesurlasecuritepublique/ |

### Atlantic Canada (NB, NS, PE, NL)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Department of Natural Resources and Energy Development — Fire Watch & Wildfire Dashboard | New Brunswick · Provincial | Interactive dashboard and burn map | Live wildfire dashboard with fire status updates plus a province-wide map of daily burn conditions updated at 2 p.m.; permits info and active-fire alerts. | https://www.gnb.ca/en/emergency/fire-watch.html |
| NL Daily Wildfire Risk & Active Wildfires | Newfoundland and Labrador · Provincial | Wildfire hazard map | Daily Fire Weather Index map by region from Forestry, Agriculture and Lands, plus the NL Active Wildfires dashboard showing location, status and size of ongoing wildfires. | https://www.gov.nl.ca/fal/wildfiremanagement/fire-hazard-map/ |
| WorkplaceNL — Certification Training Registry (CTR) Course Marketplace | Newfoundland and Labrador · Provincial | Lookup tool | Search the marketplace of WorkplaceNL-approved OHS training providers and courses, with workers' certification records stored electronically. | https://ctr.bluedrop.io/ |
| Department of Natural Resources — BurnSafe Fire Restrictions | Nova Scotia · Provincial | Dashboard | Daily county-level burn ban map and table (updated 2pm in wildfire season): no-burn, restricted, or allowed hours. Check before campfires or brush burning. | https://novascotia.ca/burnsafe/ |
| Halifax — Police Crime Mapping | Halifax · Municipal | Interactive crime map | See recent Halifax crimes on a map updated daily — search five crime types by street name or community for the last day, four days or week. | https://www.halifax.ca/safety-security/police/crime-mapping |

### Northern Canada (YT, NT, NU)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| NWT Wildfire Update (ECC) | Northwest Territories · Provincial | Fire status dashboard | GNWT Environment & Climate Change wildfire hub: live fire map with satellite hotspots, regional updates for all five regions, active-fire counts, hectares burned, smoke forecast and evacuation links. | https://www.ecc.gov.nt.ca/en/services/wildfire-update |
| Workers' Safety and Compensation Board (WSCB) — WHS Regulations Search | Yukon · Provincial | Lookup tool | Full-text browse/search of Yukon's Occupational Health and Safety Regulations in 19 parts plus WHMIS, diving and radiation rules — the board's consolidated HTML regulations library. | https://www.wcb.yk.ca/regulations |
| Yukon Wildfires Map (Wildland Fire Management) | Yukon · Provincial | Fire map | Live Government of Yukon map of active wildfires and prescribed burns with status, size, response type, plus fire danger ratings and fire ban information across the territory. | https://wildfires.service.yukon.ca/ |

## ⚖️ Justice, Courts & Legal

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Canadian Human Rights Tribunal — Decisions Database | Canada · Federal | Tribunal decisions database | Full-text searchable decisions and rulings of the Canadian Human Rights Tribunal since 1979, including pay equity decisions, with RSS feeds and a mailing list for newly posted cases. | https://decisions.chrt-tcdp.gc.ca/chrt-tcdp/en/nav.do |
| Child Support Table Look-up | Canada · Federal | Lookup tool | Department of Justice tool that calculates the base federal child support amount from the paying parent's gross income, number of children, and province. | https://www.justice.gc.ca/eng/fl-df/child-enfant/cst-orpe.html |
| Consolidated Canadian Autonomous Sanctions List | Canada · Federal | Sanctions list | Global Affairs Canada's searchable consolidated list of all individuals and entities under Canadian autonomous sanctions, published in HTML, PDF and XML. | https://www.international.gc.ca/world-monde/international_relations-relations_internationales/sanctions/consolidated-consolide.aspx?lang=eng |
| Correctional Service Canada — Research Publications | Canada · Federal | Research library | Browse CSC research reports and summaries by topic — recidivism, mental health, Indigenous corrections, women offenders, substance use, and more. | https://www.csc-scc.gc.ca/research/005008-2000-en.shtml |
| Court Martial Appeal Court of Canada — Decisions | Canada · Federal | Court decisions | Read the reasons for judgment of the superior court that hears appeals from Canadian courts martial, published in both official languages. | https://www.cmac-cacm.ca/en/pages/decisions-and-law-reports |
| Dispute Resolution Reference Guide | Canada · Federal | Interactive legal guide | Compare negotiation, mediation, arbitration, mini-trials, neutral evaluation, and online dispute resolution through linked HTML modules. | https://www.justice.gc.ca/eng/rp-pr/csj-sjc/dprs-sprd/res/drrg-mrrc/toc-tdm.html |
| Federal Court Decisions Database | Canada · Federal | Court decisions database | Search Federal Court judgments by date, case name, citation, file number, or full text and read decisions in HTML. | https://decisions.fct-cf.gc.ca/fc-cf/en/d/s/index.do?col=54 |
| Federal Court Forms | Canada · Federal | Online forms | Find and download Federal Court filing forms, including applications, claims, motions, appeals, and affidavits in PDF and RTF. | https://www.fct-cf.gc.ca/en/online-access/forms |
| Federal Court of Canada | Canada · Federal | Court | Federal Court decisions, forms, rules, and case filings | https://www.fct-cf.gc.ca/en/home |
| FINTRAC — Administrative Monetary Penalties | Canada · Federal | Enforcement notices | Review public money-laundering compliance penalties, entities, violations, amounts, appeals, and case status in an HTML listing. | https://fintrac-canafe.canada.ca/pen/4-eng |
| INTERPOL — View Red Notices | Canada · Federal | Searchable database | Search public INTERPOL Red Notices for wanted persons by name, nationality, age, gender, issuing country or keyword in HTML. | https://www.interpol.int/en/How-we-work/Notices/Red-Notices/View-Red-Notices |
| Justice Canada — Laws of Canada | Canada · Federal | Legislation | Consolidated federal statutes and regulations — the Justice Laws Website | https://laws-lois.justice.gc.ca/ |
| Office of the Correctional Investigator — Reports | Canada · Federal | Report library | Browse and download the Correctional Investigator’s annual and thematic reports on federal corrections as HTML or PDF. | https://www.oci-bec.gc.ca/en/reports |
| PPSC Deskbook | Canada · Federal | Prosecution policy manual | Consult directives and guidelines governing federal prosecutorial discretion in HTML or download the complete manual as PDF. | https://www.ppsc-sppc.gc.ca/eng/pub/fpsd-sfpg/index.html |
| Public Prosecution Service of Canada | Canada · Federal | Agency | Federal prosecution policies, annual reports, and case information | https://www.ppsc-sppc.gc.ca/ |
| Social Security Tribunal Decisions | Canada · Federal | Tribunal decisions database | Search published Social Security Tribunal decisions and subscribe to recent additions and decision updates in HTML. | https://decisions.sst-tss.gc.ca/sst-tss/en/nav.do |
| Supreme Court of Canada — Judgments | Canada · Federal | Decisions | Search SCC decisions, docket, hearings, and leave-to-appeal rulings | https://www.scc-csc.ca/ |
| Tax Court of Canada | Canada · Federal | Court | Tax Court decisions, procedures, and appeal filings | https://www.tcc-cci.gc.ca/ |
| CanLII — Canadian Legal Information Institute | Canada · Agency | Case law | Free Canadian legislation and case law search across all federal, provincial, and tribunal levels | https://www.canlii.org/ |
| CanLII — Legal Research API | Canada · Agency | Legal data API | Programmatic access to Canada's free legal research database — search case law, statutes and tribunal decisions by jurisdiction, court, citation or full text; free API key required. | https://canlii.ca/s/api |
| Office of the Correctional Investigator — Reports | Canada · Agency | Report library | Read annual and special investigation reports from the federal prison ombudsman on conditions, treatment, and systemic issues in Canadian penitentiaries. | https://oci-bec.gc.ca/en/reports |

### British Columbia

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| BC Civil Resolution Tribunal | British Columbia · Provincial | Online dispute resolution portal | Canada's first online tribunal: resolve small claims under $5,000, strata property, vehicle accident and society/co-op disputes without court, via the Solution Explorer, online claims and searchable decisions. | https://civilresolutionbc.ca/ |
| BC Laws | British Columbia · Provincial | Statutes database | Official consolidated statutes and regulations of British Columbia, free to search and cite | https://www.bclaws.gov.bc.ca/ |
| British Columbia — Court Services Online | British Columbia · Provincial | Court records search | E-search BC Provincial and Supreme civil, traffic and criminal court files by party name or file number, view daily court lists, and e-file documents. | https://justice.gov.bc.ca/cso/index.do |
| Courts of British Columbia — Judgments | British Columbia · Provincial | Court decisions | Judgments and hearing lists from the BC Court of Appeal, Supreme Court, and Provincial Court | https://www.bccourts.ca/ |
| Legal Services Society — Legal Aid BC | British Columbia · Provincial | Legal aid | Legal Aid BC — eligibility, duty counsel, and free legal resources for British Columbians | https://legalaid.bc.ca/ |

### Alberta

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Alberta — Traffic Tickets Digital Service | Alberta · Provincial | Online ticket and fine portal | Official Alberta portal to look up traffic tickets and fines, pay in full or partially, request time to pay, plead not guilty, request a trial date or seek a review by a prosecutor. | https://traffictickets.alberta.ca/ |
| Alberta Courts | Alberta · Provincial | Court portal | Court of Appeal, Court of King's Bench, and Alberta Court of Justice — sittings, decisions, and filing information | https://albertacourts.ca/ |
| Alberta King's Printer — Laws Online | Alberta · Provincial | Statutes database | Official source for Alberta's statutes, regulations, and orders in council | https://kings-printer.alberta.ca/ |
| Alberta King's Printer — Laws Online Catalogue | Alberta · Provincial | Lookup tool | Search Alberta's official catalogue of acts, regulations and codes by title, chapter number or responsible ministry; most available free as consolidated HTML or PDF. | https://kings-printer.alberta.ca/Laws_Online.cfm |
| Legal Aid Alberta | Alberta · Provincial | Legal aid | Alberta legal aid eligibility, application, and duty counsel information | https://www.legalaid.ab.ca/ |

### Saskatchewan

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Legal Aid Saskatchewan | Saskatchewan · Provincial | Legal aid | Free legal services in criminal and family matters for eligible Saskatchewan residents | https://legalaid.sk.ca/ |
| Saskatchewan Law Courts | Saskatchewan · Provincial | Court portal | Saskatchewan's courts — daily dockets, judgments, and self-represented litigant resources | https://sasklawcourts.ca/ |
| Saskatchewan Publications Centre | Saskatchewan · Provincial | Statutes database | Freelaw access to Saskatchewan's statutes, regulations, and official government publications | https://publications.saskatchewan.ca/ |

### Manitoba

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Legal Aid Manitoba | Manitoba · Provincial | Legal aid | Legal help for low-income Manitobans — apply online and find duty counsel services | https://www.legalaid.mb.ca/ |
| Manitoba — Manitoba Laws | Manitoba · Provincial | Legislation database | Browse and search official consolidated Manitoba statutes (C.C.S.M.) and regulations, updated as amendments come into force, with annual chapters back to 1985. | https://web2.gov.mb.ca/laws/index.php |
| Manitoba Courts | Manitoba · Provincial | Court portal | Manitoba Court of Appeal, King's Bench, and Provincial Court — hearing schedules, decisions, and registry contacts | https://www.manitobacourts.mb.ca/ |

### Ontario

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Courts of Ontario — Case Search | Ontario · Federal | Case search | Search for decisions from the Court of Appeal, Superior Court, and Ontario Court of Justice | https://www.ontariocourts.ca/ |
| Ontario Court of Appeal — Decisions | Ontario · Federal | Decisions | Published decisions from Ontario's highest provincial court | https://www.ontariocourts.ca/coa/ |
| Ontario Human Rights Tribunal — Decisions | Ontario · Federal | Decisions | Published decisions from the Human Rights Tribunal of Ontario | https://tribunalsontario.ca/hrto |
| Ontario Rental Housing Tribunal — Rent Increases | Ontario · Agency | Rent tool | Approved rent increase guidelines and maximum amounts for Ontario | https://www.ontario.ca/page/rent-increase-guideline |
| Legal Aid Ontario | Ontario · Provincial | Legal aid | Ontario legal aid eligibility checker, duty counsel, and legal information | https://www.legalaid.on.ca/ |
| Ontario — Provincial Offences Act Online Services | Ontario · Provincial | Ticket case status lookup | Check the case status of traffic tickets and fines, see how much you owe, pay, request an early resolution meeting with a prosecutor, or request a trial online for Provincial Offences Act matters. | https://www.justiceservices.jus.gov.on.ca/POA/ |
| Ontario Courts Public Portal | Ontario · Provincial | Court portal | Ontario's digital court portal for filing documents, accessing case information, and managing court matters online. | https://www.ontario.ca/page/ontario-courts-public-portal |
| Ontario e-Laws | Ontario · Provincial | Statutes database | Official consolidated statutes and regulations of Ontario, searchable and current to the day | https://www.ontario.ca/laws |
| Tribunals Ontario — Online Hearing Portal | Ontario · Provincial | Tribunal portal | File and manage matters across LTB, SBT, HRTO, LAT and other Tribunals Ontario bodies | https://tribunalsontario.ca/ |

### Quebec

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| SOQUIJ — Décisions des tribunaux du Québec | Quebec · Crown Corp | Court decisions | Free public search of judgments from Quebec's judicial and administrative tribunals, updated daily by the province's legal information corporation; searchable with English keywords. | https://soquij.qc.ca/ |
| Commission des services juridiques (Quebec) | Quebec · Provincial | Legal aid | Quebec legal aid eligibility and regional office finder | https://www.csj.qc.ca/ |
| Quebec — LégisQuébec | Quebec · Provincial | Legislation database | Search official consolidated Quebec statutes and regulations in French and English, with historical point-in-time versions and annual laws in PDF since 1996. | https://www.legisquebec.gouv.qc.ca/en |

### Atlantic Canada (NB, NS, PE, NL)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| New Brunswick — Acts and Regulations | New Brunswick · Provincial | Statutes database | Consolidated acts and regulations of New Brunswick in both official languages | https://laws.gnb.ca/ |
| New Brunswick Courts — Schedules and Records | New Brunswick · Provincial | Courts portal | Official judiciary site for the Court of Appeal, King's Bench, Probate, Provincial and Small Claims courts: case schedules, rules of court, courthouse locations and records access. | https://www.courtsnb-coursnb.ca/content/cour/en.html |
| Supreme Court of Newfoundland and Labrador — Judgments Database | Newfoundland and Labrador · Provincial | Lookup tool | Searchable database of Supreme Court and Court of Appeal decisions with keyword, docket number, judge, date-range and subject-tag filters; full judgment texts from 2001 onward. | https://records.court.nl.ca/ |
| Courts of Nova Scotia | Nova Scotia · Provincial | Court portal | Nova Scotia's courts — decisions database, virtual court information, and self-help guides | https://www.courts.ns.ca/ |
| Nova Scotia Courts — Decisions Database | Nova Scotia · Provincial | Court decisions database | Official searchable database of most written decisions of the Nova Scotia Court of Appeal, Supreme, Provincial, Bankruptcy and Small Claims courts released publicly since 2003, updated daily, with recent-additions feed. | https://decisions.courts.ns.ca/nsc/en/nav.do |
| Nova Scotia Legal Aid | Nova Scotia · Provincial | Legal aid | Free legal help in criminal, family, and social justice matters across Nova Scotia | https://www.nslegalaid.ca/ |

### Northern Canada (YT, NT, NU)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Courts of the NWT — Scheduled Matters & Docket PDFs | Northwest Territories · Provincial | Lookup tool | Filter scheduled court matters by court, community and date range across all NWT regions; download daily Territorial/Supreme Court docket PDFs refreshed several times a day. | https://www.nwtcourts.ca/en/schedule/matters/ |
| Nunavut Courts — Daily Docket & Court File Search | Nunavut · Provincial | Lookup tool | Search daily criminal/civil court dockets by community, court type and date across all Nunavut communities; also concluded dockets and party lookup by name or court file number. | https://dockets.nunavutcourts.ca/ |
| Yukon Courts — Judgment Database | Yukon · Provincial | Lookup tool | Search written reasons for judgment and sentencing from Yukon's Court of Appeal, Supreme Court and Territorial Court — most decisions since 2006, backfilled toward 2001, all as PDFs. | https://www.yukoncourts.ca/en/court-appeal/judgments |

## 🛡️ Consumer Protection & Privacy

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Canadian Anti-Fraud Centre | Canada · Federal | Reporting | Report fraud and scams to the national CAFC and browse current scam trends | https://www.antifraudcentre-centreantifraude.ca/ |
| Competition Bureau — Deceptive Marketing Cases | Canada · Federal | Lookup tool | Search every public deceptive-marketing case since 2015 by company, product, or outcome, including consent agreements and Tribunal rulings. | https://competition-bureau.canada.ca/en/deceptive-marketing-practices/cases-and-outcomes |
| Measurement Canada — Authorized Units for Selling Draft Beer | Canada · Federal | Consumer measurement guide | Check which units Canadian businesses may use to sell draft beer, including imperial pint, fluid ounce and millilitre rules and allowable error. | https://ised-isde.canada.ca/site/measurement-canada/en/selling-measured-goods/units-measurement-used-sell-draft-beer |
| Measurement Canada — Consumer Measurement Infographics | Canada · Federal | Infographic library | Browse plain-language measurement guides for firewood, food, gas pumps, EV charging, propane, meters, fuel tanks and net metering in HTML. | https://ised-isde.canada.ca/site/measurement-canada/en/infographics |
| Measurement Canada — Find an Authorized Service Provider | Canada · Federal | Search tool | Find companies authorized by Measurement Canada to inspect and certify scales, gas pumps, and other measuring devices in your area, with their approved inspection scope. | https://ised-isde.canada.ca/site/measurement-canada/en/authorized-service-providers/find-authorized-service-provider |
| National Do Not Call List | Canada · Agency | Service | Register Canadian phone numbers to reduce unwanted telemarketing calls | https://www.lnnte-dncl.gc.ca/ |
| Office of the Privacy Commissioner of Canada | Canada · Agency | Regulator | Privacy complaints, PIPEDA guidance, and breach reporting for Canadians | https://www.priv.gc.ca/ |
| Spam Reporting Centre — Fight Spam | Canada · Agency | Reporting | CRTC anti-spam information and guidance on reporting spam, phishing, and malicious electronic messages under CASL. | https://crtc.gc.ca/eng/internet/anti.htm |

### British Columbia

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| BC Ombudsperson | British Columbia · Provincial | Ombudsman | Investigates complaints of unfair treatment by BC public bodies and recommends fixes | https://bcombudsperson.ca/ |
| BC Residential Tenancy Branch — Search Past Decisions | British Columbia · Provincial | Decision lookup | Searchable database of RTB past decisions (direct request, participatory, special application, monetary orders and administrative penalties) to find how the tribunal ruled on similar landlord-tenant issues. | https://www2.gov.bc.ca/gov/content/housing-tenancy/residential-tenancies/solving-problems/tenancy-dispute-resolution/past-decisions |
| Consumer Protection BC | British Columbia · Provincial | Regulator | BC's consumer protection regulator — complaint filing and industry information | https://www.consumerprotectionbc.ca/ |
| Office of the Information and Privacy Commissioner of BC | British Columbia · Provincial | Regulator | BC's privacy regulator — complaint filing, FIPPA/PIPA decisions, and reports | https://www.oipc.bc.ca/ |

### Alberta

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Alberta Ombudsman | Alberta · Provincial | Ombudsman | Investigates complaints of unfair treatment by Alberta government authorities and designated professional organizations | https://www.ombudsman.ab.ca/ |
| Consumer Protection Alberta — Service Alberta | Alberta · Provincial | Resources | Alberta consumer protection information, complaints, and business licensing | https://www.alberta.ca/consumer-protection |
| OIPC Alberta | Alberta · Provincial | Regulator | Alberta's Information and Privacy Commissioner — access to information reviews and privacy breach reports | https://oipc.ab.ca/ |
| Service Alberta — Search for a Licensed Business | Alberta · Provincial | Licence lookup | Search active Alberta consumer-program licences and registrations: collection agencies, payday lenders, high-cost credit, home inspectors, direct sellers, prepaid contractors, and more. Downloads available in Excel. | https://www.servicealberta.gov.ab.ca/consumer/business_search/ |

### Saskatchewan

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| SGI — Vehicle Registration and Insurance Rate Calculator | Saskatchewan · Crown Corp | Rate calculator | Estimate vehicle registration and insurance costs by body type, make/model, year, class, use and safety rating. Includes monthly payment and short-term registration options. Rates updated June 2026. | https://sgi.sk.ca/ratecalc |
| FCAA — FCAA411 Licence & Registration Search | Saskatchewan · Provincial | Lookup tool | Search whether payday lenders, collection agencies, mortgage brokers, vehicle dealers, direct sellers, insurers and pension plans are licensed in Saskatchewan. | https://fcaa.gov.sk.ca/fcaa411 |
| OIPC Saskatchewan | Saskatchewan · Provincial | Regulator | Saskatchewan's Information and Privacy Commissioner — reviews, reports, and privacy guidance | https://oipc.sk.ca/ |
| Ombudsman Saskatchewan | Saskatchewan · Provincial | Ombudsman | Takes complaints about Saskatchewan government ministries, agencies, Crown corporations, and municipal councils | https://ombudsman.sk.ca/ |

### Manitoba

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Manitoba Ombudsman | Manitoba · Provincial | Ombudsman | Independent oversight of Manitoba government fairness, privacy, and whistleblower protection | https://www.ombudsman.mb.ca/ |

### Ontario

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Consumer Protection Ontario — Tools | Ontario · Federal | Calculators | Find, compare, and understand consumer protections including car loans, leases, and contracts | https://www.ontario.ca/page/consumer-protection-ontario |
| Condominium Authority of Ontario — Condo Registry | Ontario · Agency | Registry lookup | Free searchable database of Ontario condo corporations: address for service, voting units, board director names, management company, based on CAO filings. Search by legal/operating name, director or municipal address. | https://www.condoauthorityontario.ca/condo-registry-search/ |
| Information and Privacy Commissioner of Ontario | Ontario · Provincial | Regulator | Ontario's privacy and FOI oversight — complaint process, decisions, and guidance | https://www.ipc.on.ca/ |
| Ombudsman Ontario | Ontario · Provincial | Ombudsman | Independent office investigating complaints about Ontario government services, municipalities, universities, and school boards | https://www.ombudsman.on.ca/ |
| Ontario Data Catalogue — LTB Order Catalogue | Ontario · Provincial | Order lookup | Public catalogue of final Landlord and Tenant Board orders (Jan 2026 onward, phased back to 2021) from Tribunals Ontario. Monthly CSV downloads available to search specific LTB decisions. | https://data.ontario.ca/dataset/ltb-order-catalogue |

### Quebec

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Commission d'accès à l'information du Québec | Quebec · Provincial | Regulator | Quebec's access to information and privacy commission — decisions, complaints, guidance | https://www.cai.gouv.qc.ca/english/ |
| Office de la protection du consommateur (Quebec) | Quebec · Provincial | Regulator | Quebec's consumer protection office — complaint filing, contract guides, and business records | https://www.opc.gouv.qc.ca/en/ |
| Protecteur du citoyen (Québec) | Quebec · Provincial | Ombudsman | Québec's ombudsman — handles complaints about provincial ministries, agencies, and the health network | https://protecteurducitoyen.qc.ca/ |
| RBQ — Registre des détenteurs de licence | Quebec · Provincial | Lookup tool | Look up any Quebec construction contractor or owner-builder by name or licence number; see categories, bonding, claims and public-works restrictions. | https://www.pes.rbq.gouv.qc.ca/RegistreLicences |

### Atlantic Canada (NB, NS, PE, NL)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| FCNB — Check Licence and Registration | New Brunswick · Provincial | Lookup tool | Financial and Consumer Services Commission portal to verify insurance, investment, mortgage, real estate, direct-seller, debt-collection and payday-loan licences, plus complaint filing. | https://www.fcnb.ca/en/frauds-and-scams/check-licence-and-registration |
| NL Consumer Affairs Division | Newfoundland and Labrador · Provincial | Portal | Digital Government and Service NL consumer affairs hub: right to cancel, distance contracts, direct-seller licensing and complaints, identity-theft guidance, plus consumer alerts feed. | https://www.gov.nl.ca/dgsnl/consumer/consumer-affairs/ |
| Public Utilities Board — Regulated Fuel Price Schedule | Newfoundland and Labrador · Provincial | Dashboard | Weekly/daily maximum prices for gas, diesel, furnace oil and propane across all 14+ PUB pricing zones, with current PDF price orders per zone, historical pricing archive and zone map. | https://www.pub.nf.ca/PP_petroleumproducts.php |
| Service Nova Scotia — Consumer Protection | Nova Scotia · Provincial | Portal | Service NS hub for consumer rights under the Consumer Protection Act: direct sellers, collections, credit reports, payday loans, funerals, condominiums, and online business complaints. | https://beta.novascotia.ca/programs-and-services/consumer-protection |
| IRAC — Current Regulated Petroleum Prices | PEI · Provincial | Regulated price schedule | IRAC's regulated minimum/maximum pump prices for gasoline, diesel, furnace oil and propane, adjusted twice weekly, with pricing orders and notices (PDF). | https://irac.pe.ca/petrol/current-petroleum-prices/ |

### Northern Canada (YT, NT, NU)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| NWT MACA — Consumer Affairs | Northwest Territories · Provincial | Portal | Consumer Affairs office: free complaint process with electronic form, direct-seller/collection/real-estate/gaming licensing, product recalls and consumer information bulletins. | https://www.maca.gov.nt.ca/en/services/consumer-affairs |
| Yukon — Complaint Against a Regulated Business Professional | Yukon · Provincial | Complaint process | Formal complaint process for collection agents, funeral directors, insurers, pawnbrokers, real estate and security professionals, with paired licence-verification pages on yukon.ca. | https://yukon.ca/en/doing-business/professional-licensing/make-complaint-against-government-regulated-business-professional |

## 🪶 Indigenous Services & Treaties

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| ATRIS — Aboriginal and Treaty Rights Information System | Canada · Federal | Interactive map | CIRNAC's map-based system locating Indigenous communities and their potential or established Aboriginal and treaty rights, treaties, claims and court decisions — searchable by place, postal code or drawn area. | https://sidait-atris.rcaanc-cirnac.gc.ca/SIDAIT-GEO-ATRIS/index-eng.html |
| Crown-Indigenous Relations — Specific Claims | Canada · Federal | Database | Search specific claim status, agreements, and modern treaty progress | https://www.rcaanc-cirnac.gc.ca/eng/1100100030291/1539609517566 |
| First Nation Profiles Interactive Map | Canada · Federal | Interactive map | Indigenous Services Canada's map of First Nations communities across Canada, linked to profiles of governance, reserves, registered population and census statistics. | https://geo.sac-isc.gc.ca/cippn-fnpim/index-eng.html |
| Indigenous Services Canada — Drinking Water Advisories Map | Canada · Federal | Interactive map | Map and table of lifted and active long-term drinking water advisories on public water systems on reserve, browsable by community, region and status. | https://www.sac-isc.gc.ca/eng/1620925418298/1620925434679 |
| Indigenous Services Canada — First Nations Financial Transparency Act Search | Canada · Federal | Searchable database | Search audited consolidated financial statements and schedules of remuneration filed by First Nations governments under the First Nations Financial Transparency Act. | https://services.sac-isc.gc.ca/fnp/main/Search/SearchFF.aspx?lang=eng |
| Indigenous Services Canada — Indian Register | Canada · Federal | Registry | Apply for Indian status and Secure Certificate of Indian Status (SCIS) | https://www.sac-isc.gc.ca/eng/1100100032424/1572457769548 |
| Indigenous Services Canada — Jordan's Principle | Canada · Federal | Program | Jordan's Principle substantive-equality funding for First Nations children | https://www.sac-isc.gc.ca/eng/1568396296543/1582575228610 |
| Natural Resources Canada — Aboriginal Lands of Canada Legislative Boundaries | Canada · Federal | GIS dataset | Download GIS boundaries (SHP, KML, WMS) of Indian reserves, land claim settlement lands and Indian lands across Canada from the Canada Lands Survey System. | https://open.canada.ca/data/en/dataset/522b07b9-78e2-4819-b736-ad9208eb1067 |
| Specific Claims Tribunal — Decisions Database | Canada · Federal | Decisions database | Full-text search of final and binding Specific Claims Tribunal decisions on First Nations monetary claims against the Crown over lands, assets and treaty obligations. | https://decisions.sct-trp.ca/sct/en/nav.do |
| Statistics Canada — Statistics on Indigenous Peoples | Canada · Federal | Data portal | Browse census and survey data products on First Nations people, Métis and Inuit — communities, health, education, income and the Indigenous Population Profile. | https://www.statcan.gc.ca/en/subjects-start/indigenous_peoples |
| Assembly of First Nations | Canada · Agency | Organization | National advocacy organization of First Nations chiefs — resolutions, research, and programs | https://afn.ca/ |
| First Nations Information Governance Centre | Canada · Agency | Data | First Nations-led data governance, surveys, and research with the OCAP principles | https://fnigc.ca/ |
| Inuit Tapiriit Kanatami | Canada · Agency | Organization | National Inuit representational organization advancing Inuit rights and interests | https://www.itk.ca/ |
| Métis National Council | Canada · Agency | Organization | National representative body for the Métis Nation — policies, programs, and registries | https://www.metisnation.ca/ |
| NCTR — National Residential School Memorial Register | Canada · Agency | Searchable register | Search the National Centre for Truth and Reconciliation's memorial register by student name or school to honour children who died in the residential school system. | https://memorial.nctr.ca/ |
| Pauktuutit Inuit Women of Canada | Canada · Agency | Organization | National voice for Inuit women — programs, research, and safety resources | https://www.pauktuutit.ca/ |

### British Columbia

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| BC Treaty Commission — Interactive Map | British Columbia · Agency | Interactive map | Explore First Nations in BC treaty negotiations and modern treaty nations, with layers for traditional territories, shared areas and negotiation stages. | https://bctreaty.ca/map/ |
| Nisga'a Lisims Government — Nisga'a Land Title Office | British Columbia · Provincial | Registry | Request parcel title searches in Canada's only Indigenous-run Torrens land registry, calculate fees, and download survey plans, forms and legislation (PDF). | https://nisgaalandtitle.ca/title-search-and-copy/ |

### Alberta

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Otipemisiwak Métis Government — Harvesting Program | Alberta · Provincial | Registry & program | Métis Harvester Identification Cards for Otipemisiwak citizens: hunt, fish and trap for food in designated Alberta harvesting areas, with RELM integration for free domestic fishing licences. | https://albertametis.com/harvesting/ |

### Saskatchewan

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Métis Nation—Saskatchewan — Citizenship Registry | Saskatchewan · Provincial | Registry | Register as an MN–S citizen or renew, replace and update cards; download fillable citizenship applications, genealogy guides and vital-statistics consent forms (PDF). | https://mns.ca/metis-citizens/citizenship-registry |

### Manitoba

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Manitoba Métis Federation — Central Registry Online Citizenship Application | Manitoba · Provincial | Registry | Apply online for Red River Métis citizenship and harvester cards: document and photo upload, genealogy checklist, fee payment; instructions and forms as downloadable PDF. | https://cro.mmf.mb.ca/apply |

### Ontario

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Ontario — Map of Ontario Treaties and Reserves | Ontario · Provincial | Interactive map | Search an interactive map to find which of Ontario's 40+ treaties covers any location and click reserves to learn about First Nation communities. | https://www.ontario.ca/page/map-ontario-treaties-and-reserves |

### Atlantic Canada (NB, NS, PE, NL)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Nunatsiavut Government — Labrador Inuit Lands | Newfoundland and Labrador · Provincial | Land administration | Lands Division hub for Labrador Inuit Lands: applications registry for private interests, access rules under the Labrador Inuit Land Claims Agreement and the Regional Land Use Plan. | https://nunatsiavut.com/department/lands-natural-resources/labrador-inuit-lands/ |

### Northern Canada (YT, NT, NU)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Inuvialuit Regional Corporation — ISR Research Portal (Climate Action Map) | Northwest Territories · Provincial | Interactive map | Search interactive ArcGIS maps of climate-change research and community projects plus an indicator dashboard of socioeconomic and environmental stats for the Inuvialuit Settlement Region. | https://research.inuvialuit.com/ |
| Tłıchǫ Government — Tłıchǫ Mapping | Northwest Territories · Provincial | Interactive map | ArcGIS dashboards of Tłıchǫ lands: Wenek'e land-use plan zones, cabin registrations, harvesting areas and traditional place-name maps; user manual PDF. Site 403-bot-blocks fetchers. | https://www.tlicho.ca/tlicho-mapping |
| Qikiqtani Inuit Association — Land Use Registry | Nunavut · Provincial | Registry portal | Submit and track land-use applications for access to Inuit Owned Lands in the Qikiqtani Region — account-based portal with application status and permitting workflow. | https://apps.qia.ca/appform/ |

## 🎖️ Veterans & Military

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Canadian Armed Forces — Forces.ca Careers | Canada · Federal | Careers | CAF occupations, enrolment steps, and serving-member resources | https://forces.ca/ |
| Canadian Forces Morale and Welfare Services | Canada · Federal | Services | CFMWS programs, family services, CANEX discounts, and SISIP financial services | https://www.cfmws.ca/ |
| Canadian Military Journal — Archive | Canada · Federal | Journal archive | Read the CAF and DND's quarterly professional journal online, with a full back-issue archive of peer-reviewed articles on defence and security since 2000. | https://www.journal.forces.gc.ca/index-eng.asp |
| Canadian Virtual War Memorial | Canada · Federal | Memorial registry | Searchable registry of Canada's war dead — over 120,000 records with photographs, service numbers, units, and burial locations, maintained by Veterans Affairs. Community photo submissions accepted. | https://www.veterans.gc.ca/eng/remembrance/memorials/canadian-virtual-war-memorial |
| DND — Official Military Lineages | Canada · Federal | Reference database | Look up the official lineage, battle honours, badge, motto, and marches of every authorized Canadian Armed Forces unit since 1855, maintained by DND historians. | https://www.canada.ca/en/department-national-defence/services/military-history/history-heritage/official-military-history-lineages.html |
| DND/CAF — Current Operations List | Canada · Federal | Operations tracker | Filterable list of every current Canadian Armed Forces operation at home and abroad, with mission details, locations, and start dates. | https://www.canada.ca/en/department-national-defence/services/operations/military-operations/current-operations/list.html |
| Library and Archives Canada — First World War Personnel Records | Canada · Federal | Records database | Search roughly 622,000 digitized First World War service files of the Canadian Expeditionary Force by name, regimental number, or place of enlistment. | https://library-archives.canada.ca/eng/collection/research-help/military-heritage/first-world-war/Pages/fww-personnel.aspx |
| Library and Archives Canada — Military Medals, Honours and Awards (1812–1969) | Canada · Federal | Reference database | Search medal registers, honours and citation cards for awards from the War of 1812, Fenian Raids, North West 1885 and WWI/WWII conduct medals — useful as proof of service where no service file exists. | https://www.canada.ca/en/library-archives/collection/research-help/military-history/military-medals-honours-awards.html |
| Library and Archives Canada — Second World War Personnel Records (Service Files — War Dead) | Canada · Federal | Records database | WWII counterpart to the WWI database: search the open service files of the 44,090 Canadians who died in service 1939–1947 — attestation, service, medical, medals and death records, with genealogy packages digitized via Ancestry (free account). Survivors' files via ATIP. | https://www.canada.ca/en/library-archives/collection/research-help/military-history/second-world-war/personnel-records-second-world-war.html |
| Veterans Affairs Canada — Benefits Navigator | Canada · Federal | Finder | Interactive guide to VAC benefits based on your service background and needs | https://www.veterans.gc.ca/en/benefits-navigator |
| Veterans Affairs Canada — Books of Remembrance Search | Canada · Federal | Memorial search | Search the names inscribed in Canada's Books of Remembrance and view the digitized page where each of the fallen is commemorated in the Peace Tower. | https://www.veterans.gc.ca/en/remembrance/memorials/books-remembrance/search-books-remembrance |
| Veterans Affairs Canada — My VAC Account | Canada · Federal | Secure portal | Secure portal for veterans to apply for benefits, track claims, and manage services | https://www.veterans.gc.ca/en/contact-us/my-vac-account |
| War Memorials in Canada | Canada · Federal | Searchable database | Searchable database of Canadian war memorials, cenotaphs, and commemorative monuments | https://www.veterans.gc.ca/eng/remembrance/memorials |
| Project '44 — WWII Interactive Map | Canada · Agency | Interactive map | Follow Canadian units across WWII Europe day by day — 150,000+ mapped unit positions traced from digitized war diaries, from D-Day to VE Day. | https://project44.ca/ |

## 🗳️ Elections & Democracy

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Commissioner of Canada Elections — Administrative Monetary Penalties | Canada · Federal | Enforcement register | Browse published federal election violations, penalty amounts, dates and applicable Canada Elections Act sections in an HTML register. | https://www.cef-cce.ca/content.asp?section=amp&dir=pub&document=index&lang=e |
| Commissioner of Canada Elections — Charges and Outcomes | Canada · Federal | Case register | Search charges laid under the Canada Elections Act and Referendum Act, with accused names, dates and court outcomes in an HTML register. | https://www.cef-cce.ca/content.asp?section=charg&document=index&lang=e |
| Commissioner of Canada Elections — Online Complaint Form | Canada · Federal | Online form | Submit a complaint about a possible Canada Elections Act or Referendum Act contravention through the official online form. | https://www.cef-cce.ca/content.asp?section=comp&dir=faq&document=p14&lang=e |
| Elections Canada — Federal Electoral Districts Boundary Files (2023) | Canada · Federal | GIS dataset | Download digital boundary files (shapefile, KMZ, GDB) of the 343 federal electoral districts proclaimed by the 2023 Representation Order. | https://open.canada.ca/data/en/dataset/18bf3ea7-1940-46ec-af52-9ba3f77ed708 |
| Elections Canada — Interactive Data Visualizer (2023 Representation Orders) | Canada · Federal | Data dashboard | Explore how 2021 federal election results transpose onto the 343 electoral districts of the 2023 representation orders — estimated seat distribution by party, province and territory, with CSV export. | https://www.elections.ca/content.aspx?dir=rep%2Ftra%2F2023viz&document=index&lang=e&section=res |
| Elections Canada — Political Contributions Search | Canada · Federal | Contributions database | Searchable database of contributions to federal political parties, riding associations, and candidates — donor names, amounts, and dates, as reviewed by Elections Canada. | https://www.elections.ca/wpapps/WPF/EN/CCS/Index?returntype=1 |
| Elections Canada — Political Entity Registry | Canada · Federal | Registry | Current and historical registry of federal political parties, riding associations, candidates, and third parties registered with Elections Canada. | https://www.elections.ca/WPAPPS/WPR/EN |
| Elections Canada — Political Financing Open Data | Canada · Federal | Dataset bundle | Bulk CSV downloads of political financing data dating back to 1993: reviewed and as-filed contribution details for all political entities, plus financial returns. | https://www.elections.ca/content.aspx?section=fin&dir=oda&document=index&lang=e |
| Elections Canada — Poll-by-Poll Results Datasets | Canada · Federal | Datasets | Download poll-by-poll tabulation of votes within every electoral district for Canadian federal elections, available as CSV tables for each general election. | https://open.canada.ca/data/en/dataset?q=poll-by-poll%20results&organization=electionscanada-electionscanada |
| Leaders’ Debates Commission — 2025 Debate Watch | Canada · Federal | Debate archive | Watch or listen to the 2025 federal leaders’ debates with transcripts and accessible language versions, including Indigenous languages, ASL and LSQ. | https://www.debates-debats.ca/en/debates2025/ |
| Parlinfo — Canadian Parliamentary Database | Canada · Federal | Database | Historical and current data on parliamentarians, parties, cabinet, and elections | https://lop.parl.ca/ParlInfo/ |
| Senate of Canada | Canada · Federal | Legislative | Senate chamber business, committee reports, senators' biographies, and votes | https://sencanada.ca/ |
| Canada Gazette — Government Consultations | Canada · Agency | Consultations | Browse active government consultations and provide feedback | https://gazette.gc.ca/ |
| Elections Canada — Electoral Districts Map | Canada · Agency | Electoral map | Interactive map of federal electoral district boundaries | https://www.elections.ca/content.aspx?section=res&dir=cir/maps2&document=index&lang=e |
| Elections Canada — Results Tool | Canada · Agency | Results | Official past federal election results by riding, with poll-by-poll maps | https://www.elections.ca/content.aspx?section=res&dir=cir&document=index&lang=e |
| Elections Canada — Voter Information Service | Canada · Agency | Voter tool | Find your polling station, candidates, and election results | https://www.elections.ca/content.aspx?section=vot&document=index&lang=e |
| Open North — Represent Civic Information API | Canada · Agency | Civic API | Free REST API to look up elected officials and electoral district boundaries for any Canadian address or postal code, at every level of government. | https://represent.opennorth.ca/ |

### British Columbia

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Legislative Assembly of British Columbia | British Columbia · Agency | Legislative | Bills, debates, committee work, and live webcasts from BC's Legislative Assembly | https://www.leg.bc.ca/ |
| British Columbia — Political Contributions Search (FRPC) | British Columbia · Provincial | Contributions database | Elections BC's Financial Reports and Political Contributions system: combined contribution searches over $250 by contributor class (individual, corporation, union) with bulk download options. | https://contributions.electionsbc.gov.bc.ca/pcs/sa1asearch.aspx |
| Elections BC | British Columbia · Provincial | Agency | BC electoral information, voter registration, and financial disclosure search | https://elections.bc.ca/ |
| Elections BC — Find Your District | British Columbia · Provincial | Lookup tool | Enter an address or browse the map to find your British Columbia electoral district, see how 2024 boundaries changed from 2020/2017, and locate voting places. | https://elections.bc.ca/resources/maps/find-your-district/ |
| Vancouver — Municipal Election Results | Vancouver · Municipal | Dataset | Official results for every Vancouver municipal election since 1996 — mayor, council, park board and school board — with breakdowns by voting place; CSV/XLS downloads. | https://opendata.vancouver.ca/explore/dataset/municipal-election-results/api/ |
| Vancouver Open Data Portal | Vancouver · Municipal | Open data portal | High-quality datasets and APIs for civic use | https://opendata.vancouver.ca/ |
| Victoria — Council Election Voting Results (Open Data) | Victoria · Municipal | Dataset | Open-data dataset of City of Victoria council election voting results with candidate totals, queryable and downloadable. | https://opendata.victoria.ca/datasets/56be300327fc4f84af243eeb1dfe140f |

### Alberta

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Legislative Assembly of Alberta | Alberta · Agency | Legislative | Track Alberta bills, Hansard transcripts, and committee proceedings | https://www.assembly.ab.ca/ |
| Elections Alberta | Alberta · Provincial | Agency | Alberta provincial election administration, voter lookup, and results | https://www.elections.ab.ca/ |
| Elections Alberta — Financial Disclosure Database | Alberta · Provincial | Searchable database | Search registrations, financial reports and contributions over $250 for Alberta parties, candidates, constituency associations and leadership contests since 2004. | https://efpublic.elections.ab.ca/ |
| Elections Alberta — Maps & GIS Boundary Data | Alberta · Provincial | Maps & shapefiles | Download PDF maps of Alberta's 87 electoral divisions plus GIS boundary shapefiles of electoral division and voting-area boundaries for mapping software. | https://www.elections.ab.ca/resources/maps/ |
| Elections Alberta — Where to Vote Tool | Alberta · Provincial | Lookup tool | Enter your Alberta address to find your electoral division, voting place and polling station for provincial elections, plus voter-registration and where-to-vote-card information. | https://www.elections.ab.ca/where-to-vote-tool/ |
| Elections Calgary — Results and Disclosures | Calgary · Municipal | Results and disclosure hub | Browse official Calgary municipal election results by ward and voting station, plus candidate campaign finance disclosure statements. | https://www.electionscalgary.ca/results.html |
| Edmonton — 2025 Official Election Results by Voting Station | Edmonton · Municipal | Open dataset | Query and download station-level official results from Edmonton's 2025 municipal election; datasets for earlier elections are on the same portal. | https://data.edmonton.ca/Elected-Officials/2025-Official-Edmonton-Election-Results-by-Voting-/32te-6grv |

### Saskatchewan

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Elections Saskatchewan | Saskatchewan · Provincial | Agency | Saskatchewan provincial elections information and voter services | https://www.elections.sk.ca/ |
| Elections Saskatchewan — Find My Constituency | Saskatchewan · Provincial | Lookup tool | Search by address to find your Saskatchewan provincial constituency, polling division and voting information. | https://www.elections.sk.ca/voters/findmyconstituency/ |
| Elections Saskatchewan — Maps & Polling Division Data | Saskatchewan · Provincial | Maps & shapefiles | Download provincial and constituency PDF maps for Saskatchewan elections plus constituency and polling-division shapefiles and poll-key files. | https://www.elections.sk.ca/candidates-political-parties/maps/maps-archive-ge29/ |
| Saskatchewan — Contribution Search Tool | Saskatchewan · Provincial | Contributions database | Elections Saskatchewan's searchable political contribution tool with per-party, per-year filtering and downloadable fiscal-period returns from 2016 onward. | https://www.elections.sk.ca/reports-data/candidate-political-party-finances/contribution-search-tool/ |
| Regina — Election Results (Open Data) | Regina · Municipal | Datasets | City of Regina election results dating back to 1884 for mayor and councillors, plus voter-turnout statistics to 1946, bylaws and questions put to public vote — XLS downloads. | https://openregina.ca/dataset/election-results-historical |
| Saskatoon — Election History & Results | Saskatoon · Municipal | Results archive | Results for Saskatoon civic and school board elections back to 2000, including poll-by-poll results, turnout and candidate campaign disclosure statements. | https://www.saskatoon.ca/city-hall/elections-saskatoon/history-results |

### Manitoba

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Elections Manitoba | Manitoba · Provincial | Agency | Manitoba provincial elections information, candidates, and results | https://www.electionsmanitoba.ca/ |
| Elections Manitoba — Electoral Maps | Manitoba · Provincial | Maps & shapefiles | Download PDF maps and shapefiles of Manitoba's electoral divisions and voting areas for the 2023, 2019 and earlier general elections, organized by region. | https://www.electionsmanitoba.ca/en/resources/maps |
| Elections Manitoba — Financial Disclosure | Manitoba · Provincial | Finance portal | Browse public financial statements and returns filed under The Election Financing Act — election returns for candidates and parties, annual party and constituency-association returns, outstanding liabilities and loan agreements. | https://www.electionsmanitoba.ca/En/Finance/Financial_Disclosure |
| Winnipeg — Election Results Dataset | Winnipeg · Municipal | Open dataset | Query and download Winnipeg mayoral, councillor and school trustee election results dating back to 1966 from the city's open data portal. | https://data.winnipeg.ca/Council-Services/Winnipeg-Election-Results/7753-3fjc |

### Ontario

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Ontario Elections — Find Your Electoral District | Ontario · Agency | Voter tool | Find your provincial electoral district, polling place, and candidates via the Ontario voter information service. | https://voterinformationservice.elections.on.ca/ |
| Ontario Legislative Assembly — Hansard | Ontario · Agency | Legislative | Searchable record of debates and proceedings in the Ontario Legislature | https://www.ola.org/en |
| Elections Ontario — Finances Overview | Ontario · Provincial | Finance portal | Hub for Ontario's election-finance data: party and candidate financial summaries, campaign-period returns, contribution reports and spending-limit information for provincial elections and by-elections. | https://finances.elections.on.ca/en/finances-overview |
| Elections Ontario — Official Results Data Explorer | Ontario · Provincial | Results database | Filter official Ontario election and referendum results by year, electoral district, party or candidate, with interactive charts and CSV/PDF downloads. | https://results.elections.on.ca/en/ |
| Ontario — Municipal Election Results Dataset | Ontario · Provincial | Open dataset | Download post-election data for every Ontario municipality — eligible voters, turnout, voting methods and election statistics — from the provincial data catalogue. | https://data.ontario.ca/dataset/municipal-election-results |
| Ontario — Political Contributions Search | Ontario · Provincial | Contributions database | Searchable register of provincial political contributions (414,000+ records) — donors to Ontario parties, candidates, and associations with downloadable results. | https://finances.elections.on.ca/en/contributions |
| Brampton Open Data | Brampton · Municipal | Open data portal | Civic data portal with mapping and city datasets | https://geohub.brampton.ca/ |
| London Open Data | London · Municipal | Open data | City of London's open data portal — datasets, maps, and civic information for southwestern Ontario's largest city | https://london.ca/open-data |
| Ottawa — 2022 Elections Official Results | Ottawa · Municipal | Open dataset | Download poll-by-poll official results of Ottawa's 2022 municipal elections from the Open Ottawa portal. | https://open.ottawa.ca/documents/2022-elections-official-results |
| Sault Ste. Marie Ward Finder | Sault Ste. Marie · Municipal | Ward lookup tool | Look up municipal ward by street address using official address GIS data — powered by city open data extracts. | https://cityssm.github.io/ward-finder/ |
| Civic Tech Toronto | Toronto · Municipal | Civic tech | Toronto-based civic tech community working on projects that improve government services, transparency, and democratic participation. | https://civictech.ca/ |
| Toronto — Elections Financial Disclosure Search | Toronto · Municipal | Searchable database | Search campaign contributions and expenses from financial statements filed by Toronto election candidates and registered third-party advertisers. | https://app.toronto.ca/EFD/jsf/main/home.xhtml |
| Toronto — Elections Official Results Dataset | Toronto · Municipal | Open dataset | Download poll-level official results for Toronto municipal elections from 2003 onward and by-elections from 2012 onward via the city's open data portal. | https://open.toronto.ca/dataset/election-results-official/ |

### Quebec

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Élections Québec | Quebec · Provincial | Agency | Quebec electoral commission — voter info, results, and financial transparency | https://www.electionsquebec.qc.ca/ |
| Élections Québec — Provincial Electoral Divisions | Quebec · Provincial | Interactive map | Browse Québec's 125 electoral divisions on an interactive map with per-division information sheets, results, maps and downloadable boundary data. | https://www.electionsquebec.qc.ca/en/electoral-maps/provincial-electoral-divisions/ |
| Élections Québec — Québec Electoral Map | Quebec · Provincial | Interactive map | Interactive map of Québec's 125 electoral divisions with per-division socioeconomic and historical information sheets, plus downloadable official maps, polling-subdivision maps and GeoJSON/CSV boundary data. | https://www.electionsquebec.qc.ca/en/electoral-maps/quebec-electoral-map/ |
| Élections Québec — Research on Contributors | Quebec · Provincial | Searchable database | Search political contributions made to Quebec provincial and municipal parties and candidates by contributor name, political entity or year. | https://www.electionsquebec.qc.ca/en/financing-expenses-and-contributions/research-on-contributors/ |
| Quebec National Assembly — Hansard | Quebec · Provincial | Hansard | Quebec National Assembly debates, committee proceedings, and bill tracking | https://www.assnat.qc.ca/en/travaux-parlementaires/journaux-debats.html |
| Gatineau Open Data | Quebec · Municipal | Open data | Gatineau's open data portal — municipal datasets, maps, and civic information for the National Capital Region | https://www.gatineau.ca/donneesouvertes/ |

### Atlantic Canada (NB, NS, PE, NL)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Elections NL — Electoral District Maps & Poll Data | Newfoundland and Labrador · Agency | Map series | Per-district resources for all 40 NL districts: downloadable district maps, poll-by-poll maps and poll summaries alongside MLA and returning-office details. | https://www.elections.gov.nl.ca/resources/maps/ |
| Elections NL — GIS Boundary Data | Newfoundland and Labrador · Agency | Geospatial dataset | Download NL electoral boundary shapefiles for GIS software — current district boundaries (via Open Data NL) plus polling-division files covering all districts. | https://www.elections.gov.nl.ca/resources/gis/ |
| Elections Nova Scotia — Electoral District Tools | Nova Scotia · Agency | Interactive map | Explore provincial electoral districts on an interactive map and download the 2026 Provincial Electoral Map Series — one detailed PDF per district with boundaries and insets. | https://enstools.electionsnovascotia.ca/edinfo/ |
| Elections New Brunswick | New Brunswick · Provincial | Elections portal | Register to vote, look up your electoral district, polling division and MLA by address, find voting options, and browse results, reports and political financing returns. | https://www.electionsnb.ca/content/enb/en.html |
| Elections New Brunswick — Electoral District Maps | New Brunswick · Provincial | Maps & districts | Maps of New Brunswick's provincial electoral districts, with district information for voters and candidates. | https://www.electionsnb.ca/content/enb/en/maps.html |
| Elections New Brunswick — Public Inspection of Financial Returns | New Brunswick · Provincial | Finance portal | View political-party, district-association and candidate financial returns filed with the Supervisor of Political Financing — contribution lists as PDF and XLSX plus annual filing-status reports. | https://www.electionsnb.ca/content/enb/en/political-financing/status-report-on-financial-returns.html |
| Elections NL — General Election Finance Reports | Newfoundland and Labrador · Provincial | Finance reports | Candidate and party statements of income and expenses for general elections, including lists of contributors over $100, plus annual and by-election financial reports back to the 1990s. | https://www.elections.gov.nl.ca/resources/gereports/ |
| Elections PEI | PEI · Provincial | Election results & voter services | Office administering provincial, municipal and school trustee elections: official district-level results, historical result comparison maps, voter registration portal and voting information. | https://www.electionspei.ca/ |
| Elections PEI — Election Contributions Search | PEI · Provincial | Lookup tool | Search political-party contribution lists in excess of $250 by party and year, plus download the yearly political-party contributions open-data set. | https://www.electionspei.ca/resources/feature/election-contributions |
| Halifax — Past Municipal Election Results | Halifax · Municipal | Results archive | Downloadable official results from past Halifax regional council, school board and plebiscite elections in PDF format. | https://www.halifax.ca/city-hall/elections/about-elections/past-election-results |
| Civic Tech Fredericton | New Brunswick · Municipal | Civic tech | Fredericton-based civic tech community working on projects that improve government services, transparency, and democratic participation. | https://www.civictechfredericton.com/ |

### Northern Canada (YT, NT, NU)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Elections NWT | Northwest Territories · Agency | Election agency portal | Independent electoral authority for the NWT: official territorial election results, register-of-electors information, candidate financial reports and boundary commission reports. | https://www.electionsnwt.ca/ |
| Legislative Assembly of the Northwest Territories | Northwest Territories · Agency | Legislative | Bills, Hansard, and member information from the NWT's consensus government legislature | https://www.ntassembly.ca/ |
| Elections Nunavut | Nunavut · Agency | Election agency portal | Nunavut's election authority: latest general election results, constituency maps, online voter registration check/update and by-election coverage. | https://www.elections.nu.ca/en |
| Legislative Assembly of Nunavut | Nunavut · Agency | Legislative | Bills, Hansard, and proceedings from Nunavut's Legislative Assembly in English, Inuktitut, and French | https://assembly.nu.ca/ |
| Elections Yukon | Yukon · Agency | Election agency portal | Yukon's independent election authority: official results including the 2025 general election, voter information and candidate guides. | https://electionsyukon.ca/ |
| Yukon Legislative Assembly | Yukon · Agency | Legislative | Bills, Hansard, and sitting schedules from Yukon's Legislative Assembly | https://yukonassembly.ca/ |
| Elections NWT — Electoral Districts & Maps | Northwest Territories · Provincial | Maps & districts | Northwest Territories electoral districts with interactive maps showing district boundaries and community locations. | https://www.electionsnwt.ca/en/electoral-districts |

## 📡 Telecommunications & Digital

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Canada.ca Design System — Templates and Patterns | Canada · Federal | Design system | Download user-tested Canada.ca page templates, design patterns, and style specifications to build compliant Government of Canada web content. | https://design.canada.ca/ |
| Canada's Connectivity Strategy — Project Map & Reports | Canada · Federal | Program data | Federal broadband program transparency: funded connectivity projects, target speeds, households connected, and progress reporting toward universal rural internet. | https://ised-isde.canada.ca/site/canada-connectivity-strategy/en |
| Canadian Digital Service | Canada · Federal | Agency | CDS — builds and supports digital government services across federal departments | https://digital.canada.ca/ |
| Canadian Digital Service — GitHub Organization | Canada · Federal | Open source code | Nearly 300 open-source repositories behind GC Notify, GC Forms and GC Design System components — read, fork and reuse real production government service code. | https://github.com/cds-snc |
| CRTC — Broadband Internet Service Complaints | Canada · Federal | Complaint | Submit complaints about broadband, wireless, or TV providers via the CCTS | https://www.ccts-cprst.ca/ |
| CRTC — Communications Monitoring Report | Canada · Federal | Report | Annual data on Canadian broadcasting, wireless, and internet markets | https://crtc.gc.ca/eng/publications/reports/policymonitoring/2023/index.htm |
| CRTC — National Broadband Map | Canada · Federal | Map | Interactive map showing internet speeds and coverage across Canada | https://crtc.gc.ca/eng/internet/internet.htm |
| CRTC — Registered Telecommunications Providers List | Canada · Federal | Registration list | Look up companies registered with the CRTC to provide telecom services in Canada, including carriers, resellers, and high-speed internet resellers. | https://applications.crtc.gc.ca/portail-portal/eng/listes-lists/registration/5 |
| Government of Canada — GitHub Organization | Canada · Federal | Open source code | Browse, fork and reuse 70+ official open-source repositories — the Canada.ca design system, the domain-security Tracker, and the Open Resource Exchange. | https://github.com/canada-ca |
| ISED — Radio Equipment List (REL) | Canada · Federal | Certification database | Search all radio equipment certified for sale and use in Canada by certification number, company, or model to confirm a device meets ISED radio standards. | https://sms-sgs.ic.gc.ca/equipmentSearch/searchRadioEquipments?lang=en |
| ISED — Spectrum Management System | Canada · Federal | Licensing | Look up radio spectrum licence holders and technical info across Canada | https://sms-sgs.ic.gc.ca/ |
| ISED Spectrum Management System | Canada · Federal | Licence database | Public access to Canada's radio spectrum licensing: search radio licences by frequency, location, or licensee, browse spectrum auction results, and download site data for every licensed transmitter in the country. | https://sms-sgs.ic.gc.ca/eic/site/sms-sgs-prod.nsf/eng/home |
| National Broadband Map | Canada · Federal | Interactive map | ISED/CRTC interactive map of broadband internet availability by technology and speed across Canada, accurate to roughly 250 metres and updated twice yearly. | https://ised-isde.canada.ca/app/scr/sittibc/web/bbmap?lang=eng |
| CRTC — Decisions, Notices and Orders | Canada · Agency | Regulatory decisions index | Search and browse daily-updated indexes of CRTC broadcasting, telecom, and enforcement decisions, notices, and orders dating back to 1984. | https://crtc.gc.ca/eng/dno.htm |

### British Columbia

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| British Columbia — B.C. Design System | British Columbia · Provincial | Design system | Grab B.C. government design tokens and React components (npm, Figma, Storybook) to prototype and build accessible provincial digital products. | https://designsystem.gov.bc.ca/ |
| Connectivity in B.C. — Funded Projects Map | British Columbia · Provincial | Broadband project map | Interactive map of 217 Connecting BC and Connecting Communities BC broadband and cellular projects by community, with project status, funding details and source data in the BC Data Catalogue. | https://www2.gov.bc.ca/gov/content/governments/connectivity-in-bc/20531 |

### Alberta

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Alberta — Broadband Projects Lookup | Alberta · Provincial | Broadband project map | Search map and list of 81+ rural broadband projects funded via the Alberta Broadband Fund and Universal Broadband Fund; view recipient, households served, construction status and total investment per project. | https://www.alberta.ca/lookup/broadband-projects.aspx |
| Alberta — Government of Alberta Design System | Alberta · Provincial | Design system | Build Alberta government services with the GoA design system's component libraries for web components, React, and Angular, plus usage and accessibility guidance. | https://design.alberta.ca/ |

### Ontario

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Improving Connectivity for Ontario (ICON) Map Tool | Ontario · Provincial | Broadband coverage map | Map Ontario broadband service levels on 250m street segments and 50/10 Mbps hexagons, areas with no LTE, anchor institutions and First Nation boundaries; draw and export project areas as KML/geoJSON. | https://www.ontario.ca/page/improving-connectivity-ontario-map-tool |
| Ontario — Ontario Design System | Ontario · Provincial | Design system | Use Ontario government web components, styles, and Figma kits — installable via npm or CDN — to build accessible ontario.ca-consistent digital services. | https://designsystem.ontario.ca/ |

### Quebec

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Québec — Accès à Internet haute vitesse (Carte interactive) | Quebec · Provincial | Broadband coverage map | Interactive map of high-speed Internet service per address, municipality or administrative region of Quebec; verify 50/10 Mbps coverage, view providers and report map inaccuracies (French). | https://www.quebec.ca/habitation-territoire/amenagement-developpement-territoires/internet-haute-vitesse-etat-situation |
| Quebec — Système de design gouvernemental | Quebec · Provincial | Design system | Download Québec.ca-aligned UI components, page models, and the HTML/CSS/JS development kit to build accessible Quebec government interfaces. | https://design.quebec.ca/ |

### Atlantic Canada (NB, NS, PE, NL)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Internet for Nova Scotia Initiative | Nova Scotia · Provincial | Broadband rollout tracker | Track high-speed Internet rollout to ~103,000 Nova Scotia homes and businesses: search by community or postal code, browse zone and coverage maps, and check satellite Internet rebate eligibility. | https://internet.buildns.ca/ |

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for how to add new resources. In short: add to `data/resources.json`, run `node scripts/validate.js`, then `node scripts/generate-readme.js` before opening a PR.

## License

[MIT](LICENSE)
