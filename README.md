# Awesome Canada 🇨🇦

> A curated list of **municipal and provincial data sources** — open data portals, planning tools, council trackers, budget transparency, transit feeds, environmental monitoring, and other hard-to-find government datasets across Canada.

[![CI](https://github.com/awesome-canada/awesome-canada/actions/workflows/validate.yml/badge.svg)](https://github.com/awesome-canada/awesome-canada/actions/workflows/validate.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-green.svg)](CONTRIBUTING.md)

**Quick stats:** 544 resources · 34 categories · covering Federal, Provincial, Territorial, Regional and Municipal governments.

**Focus:** Municipal and Provincial data sources that are actionable, insightful, and hard to find. We prioritize datasets you can download, APIs you can query, and tools that expose information usually buried in PDFs or behind FOIA requests.

---

## About

This list is organized by **function first, then region**. Find the kind of data you need (planning permits, council votes, transit GTFS, budget disclosures, etc.), then drill down to the jurisdiction.

Every entry links directly to an official source. Descriptions explain **what you can do** with the link — not just what it is.

The list is generated from [`data/resources.json`](data/resources.json) — the JSON file is the source of truth. Do not edit the tables in this README by hand; add/fix entries in the JSON and re-run `node scripts/generate-readme.js`.

- New resources: see [CONTRIBUTING.md](CONTRIBUTING.md) and [docs/DATA-SCOUTING-STRATEGY.md](docs/DATA-SCOUTING-STRATEGY.md)
- Schema and categories: [`scripts/categories.js`](scripts/categories.js)

---

## Table of Contents

- [📊 Open Data & Statistics](#open-data-and-statistics) — 54
- [🪪 Government Services & ID](#government-services-and-id) — 33
- [💰 Taxes & Revenue](#taxes-and-revenue) — 13
- [🏦 Finance, Banking & Economy](#finance-banking-and-economy) — 15
- [🏢 Business & Procurement](#business-and-procurement) — 16
- [💼 Employment & Labour](#employment-and-labour) — 14
- [🎓 Education & Student Aid](#education-and-student-aid) — 11
- [🛂 Immigration & Citizenship](#immigration-and-citizenship) — 14
- [🩺 Health & Wellness](#health-and-wellness) — 18
- [🤝 Benefits & Social Services](#benefits-and-social-services) — 24
- [🏠 Housing & Real Estate](#housing-and-real-estate) — 21
- [🛣️ Transportation & Roads](#transportation-and-roads) — 24
- [🚌 Transit & Mobility](#transit-and-mobility) — 27
- [✈️ Aviation, Marine & Rail](#aviation-marine-and-rail) — 16
- [🌲 Parks, Trails & Outdoors](#parks-trails-and-outdoors) — 52
- [🌦️ Weather, Climate & Environment](#weather-climate-and-environment) — 22
- [⚡ Energy & Utilities](#energy-and-utilities) — 27
- [🌾 Agriculture, Food & Drink](#agriculture-food-and-drink) — 13
- [🔬 Science, Research & Space](#science-research-and-space) — 12
- [🎭 Heritage, Culture & Arts](#heritage-culture-and-arts) — 38
- [🚨 Emergency, Safety & Alerts](#emergency-safety-and-alerts) — 12
- [⚖️ Justice, Courts & Legal](#justice-courts-and-legal) — 16
- [🛡️ Consumer Protection & Privacy](#consumer-protection-and-privacy) — 12
- [🪶 Indigenous Services & Treaties](#indigenous-services-and-treaties) — 8
- [🎖️ Veterans & Military](#veterans-and-military) — 6
- [🗳️ Elections & Democracy](#elections-and-democracy) — 21
- [📡 Telecommunications & Digital](#telecommunications-and-digital) — 5

---

## 📊 Open Data & Statistics

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Census Program | Canada · Federal | Census portal | Census profiles, maps, and reference materials | https://www12.statcan.gc.ca/census-recensement/index-eng.cfm |
| GEO.ca | Canada · Federal | Geospatial portal | Canada's federal geospatial data portal, providing open access to authoritative geospatial information, maps, and datasets from federal sources. | https://geo.ca/ |
| Government of Canada — Open Government Portal | Canada · Federal | Open data portal | Search 40,000+ federal datasets, reports, and geospatial layers with API access | https://search.open.canada.ca/opendata/ |
| ISED API Catalogue | Canada · Federal | API catalogue | Catalogue of APIs published by Innovation, Science and Economic Development Canada, including corporations, patents, and business data. | https://api.ised-isde.canada.ca/en |
| Open Government Portal | Canada · Federal | Open data portal | Main federal portal for datasets, information, and downloadable public resources | https://open.canada.ca/ |
| Open Maps | Canada · Federal | Geospatial portal | Federal map and geospatial data discovery portal | https://open.canada.ca/en/open-maps |
| Open North | Canada · Federal | Civic tech nonprofit | Canadian nonprofit building open data standards and civic technology tools to help governments and communities share information and engage citizens | https://opennorth.ca/ |
| Proactive Publication of Government Contracts | Canada · Federal | Transparency | Search federal contracts over $10,000 disclosed quarterly by every department | https://search.open.canada.ca/contracts/ |
| Project Browser — Global Affairs Canada | Canada · Federal | Data portal | Browse and search Government of Canada international development and humanitarian assistance projects around the world. | https://w05.international.gc.ca/projectbrowser-banqueprojets/ |
| Statistics Canada | Canada · Federal | Data portal | One of the strongest public data sites in Canada; census, tables, visuals, releases | https://www.statcan.gc.ca/ |
| Statistics Canada — Census Profile | Canada · Federal | Census search | Search detailed population, demographic, and housing profiles by postal code, city, or region | https://www12.statcan.gc.ca/census-recensement/2021/dp-pd/prof/index.cfm |
| Statistics Canada — Consumer Price Index Portal | Canada · Federal | Inflation data | Monthly CPI releases, inflation calculators, and interactive charts by component and province | https://www.statcan.gc.ca/en/subjects-start/prices_and_price_indexes/consumer_price_indexes |
| Statistics Canada — Data Visualization Gallery | Canada · Federal | Data visualizations | Interactive dashboards, data explorers, and visual summaries across economy, society, and environment | https://www150.statcan.gc.ca/n1/pub/71-607-x/71-607-x2020016-eng.htm |
| Statistics Canada — The Daily | Canada · Federal | News/data feed | Daily releases of new statistics, economic indicators, and analytical reports from StatCan | https://www150.statcan.gc.ca/n1/dai-quo/index-eng.htm |
| Statistics Canada — Web Data Service (WDS) API | Canada · Federal | API | REST API for accessing StatCan tables, metadata, and bulk downloads programmatically | https://www.statcan.gc.ca/en/developers/wds |
| Statistics Canada Developers | Canada · Federal | Developer/data access | APIs and structured access for developers and researchers | https://www.statcan.gc.ca/en/developers |
| Canadian Urban Transit Association — Stats Dashboard | Canada · Agency | Transit data | National ridership, fare, and service data for Canadian transit systems | https://cutaactu.ca/ |

### British Columbia

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| B.C. API Gateway | British Columbia · Provincial | API portal | British Columbia government API gateway for discovering, accessing, and managing provincial APIs and data services | https://api.gov.bc.ca/ |
| DataBC | British Columbia · Provincial | Open data portal | Major open data and geospatial hub for BC | https://www2.gov.bc.ca/gov/content/data |
| Victoria Open Data Catalogue | Victoria · Municipal | Open data portal | Municipal datasets and geospatial resources | https://opendata.victoria.ca/ |

### Alberta

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Alberta Open Government Portal | Alberta · Provincial | Open data portal | Alberta's open government portal providing open data, publications, and reports for researchers, developers, and citizens | https://open.alberta.ca/ |
| Calgary Open Data overview | Calgary · Municipal | Portal landing page | Nice overview of categories, uses, and mapping assets | https://www.calgary.ca/research/open-data-portal.html |
| Open Calgary | Calgary · Municipal | Open data portal | Well-stocked municipal open data portal with lots of map assets | https://data.calgary.ca/ |
| Edmonton Open Data Portal | Edmonton · Municipal | Open data portal | Large set of municipal datasets and maps | https://data.edmonton.ca/ |

### Saskatchewan

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Saskatoon Open Data | Saskatoon · Municipal | Open data portal | Data portal with city datasets and maps | https://opendata.saskatoon.ca/ |

### Manitoba

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Winnipeg Open Data Portal | Winnipeg · Municipal | Open data portal | Municipal data catalogue with maps and downloads | https://data.winnipeg.ca/ |

### Ontario

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Ontario Data Catalogue | Ontario · Provincial | Open data portal | Large and very usable provincial open data catalogue | https://www.ontario.ca/open-data |
| Durham Region Open Data Portal | Durham · Regional | Open data portal | Open data portal for the Regional Municipality of Durham — transportation, environment, and community data | https://opendata-durham.hub.arcgis.com/ |
| Halton Region Open Data Portal | Halton · Regional | Open data portal | Open data portal for the Regional Municipality of Halton — planning, transportation, and public health datasets | https://opendata-halton.hub.arcgis.com/ |
| Peel Region Open Data Portal | Peel · Regional | Open data portal | Open data portal for the Regional Municipality of Peel — datasets on planning, transportation, health, and more | https://opendata-peel.hub.arcgis.com/ |
| York Region Open Data Portal | York Region · Regional | Open data portal | Open data portal for York Region — maps, statistics, and datasets for planning and public services | https://opendata-york.hub.arcgis.com/ |
| Barrie Open Data Portal | Barrie · Municipal | Open data portal | City of Barrie open data portal — maps, statistics, and municipal datasets | https://opendata-barrie.hub.arcgis.com/ |
| Guelph Open Data Portal | Guelph · Municipal | Open data portal | City of Guelph open data portal — GIS datasets, infrastructure, and city services data | https://opendata-guelph.hub.arcgis.com/ |
| Hamilton Open Data | Hamilton · Municipal | Open data portal | Datasets and map resources | https://open.hamilton.ca/ |
| Kitchener Open Data Portal | Kitchener · Municipal | Open data portal | City of Kitchener open data portal — transportation, parks, development, and demographic datasets | https://opendata-kitchener.hub.arcgis.com/ |
| Markham Open Data Portal | Markham · Municipal | Open data portal | City of Markham open data portal — GIS, demographics, transportation, and parks datasets | https://opendata-markham.hub.arcgis.com/ |
| Mississauga Open Data | Mississauga · Municipal | Open data portal | Strong GTA municipal data portal | https://data.mississauga.ca/ |
| Ottawa Budget Explorer | Ottawa · Municipal | Budget explorer | Interactive budget explainer with graphs, charts, and downloadable data | https://ottawa.ca/en/city-hall/city-news/newsroom/discover-draft-budget-2026-budget-explorer |
| Ottawa Budget Explorer datasets | Ottawa · Municipal | Dataset bundle | Raw datasets behind the budget visualizations | https://open.ottawa.ca/datasets/e88c52d7727e4a9dba6d427c9bd6445c |
| Ottawa Open Data | Ottawa · Municipal | Open data portal | Municipal open data portal with datasets and map resources | https://open.ottawa.ca/ |
| Richmond Hill Open Data Portal | Richmond Hill · Municipal | Open data portal | City of Richmond Hill open data portal — planning, transportation, and community services data | https://opendata-richmondhill.hub.arcgis.com/ |
| 2026 City Budget | Toronto · Municipal | Budget portal | Official budget portal with accessible explainer content and documents | http://toronto.ca/Budget |
| Toronto Maps / data and research hub | Toronto · Municipal | GIS / research hub | Broad entry point for city maps, data, and research tools | https://www.toronto.ca/city-government/data-research-maps/ |
| Toronto Open Data Portal | Toronto · Municipal | Open data portal | One of the best municipal open data portals in Canada | https://open.toronto.ca/ |
| Vaughan Open Data Portal | Vaughan · Municipal | Open data portal | City of Vaughan open data portal — municipal data, maps, and analytics for city services | https://opendata-vaughan.hub.arcgis.com/ |

### Quebec

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Données Québec | Quebec · Provincial | Open data portal | Strong open data portal with datasets, apps, and interactive map components | https://www.donneesquebec.ca/ |
| Montreal Open Data Portal | Montreal · Municipal | Open data portal | Strong open data site with datasets, apps, and frequent updates | https://data.montreal.ca/ |

### Atlantic Canada (NB, NS, PE, NL)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Newfoundland and Labrador Open Data | Newfoundland and Labrador · Provincial | Open data portal | Provincial open data portal for Newfoundland and Labrador providing government datasets across multiple sectors | https://opendata.gov.nl.ca/ |
| Newfoundland and Labrador Statistics Agency | Newfoundland and Labrador · Provincial | Statistics portal | Official provincial statistics on population, economy, labour market, and social indicators for Newfoundland and Labrador | https://stats.gov.nl.ca/ |
| Nova Scotia Open Data | Nova Scotia · Provincial | Open data portal | Nova Scotia open data with storytelling feature and datasets | https://data.novascotia.ca/ |
| PEI Open Data | PEI · Provincial | Open data portal | Prince Edward Island government open data | https://www.princeedwardisland.ca/en/service/open-data |
| Prince Edward Island Open Data Portal | PEI · Provincial | Open data portal | PEI government open data catalogue with datasets on agriculture, environment, health, and transportation | https://data.princeedwardisland.ca/ |
| Halifax Open Data | Halifax · Municipal | Open data portal | Useful municipal data and maps hub | https://www.halifax.ca/home/open-data |

### Northern Canada (YT, NT, NU)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Yukon Open Data | Yukon · Provincial | Open data portal | Yukon government open data catalogue with datasets on environment, infrastructure, health, and demographics | https://open.yukon.ca/ |

## 🪪 Government Services & ID

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Code for Canada | Canada · Federal | Civic tech organization | Canadian nonprofit that helps government and communities design and build better digital services through technology and design partnerships | https://codefor.ca/ |
| GC Design System | Canada · Federal | Design system | Official production-ready design system for Government of Canada websites and digital products — components, patterns, and guidance | https://design-system.canada.ca/en/ |
| GC Forms | Canada · Federal | Form builder | Secure, accessible, bilingual form-building platform for Government of Canada services — no coding required | https://articles.alpha.canada.ca/forms-formulaires/ |
| GC Notify | Canada · Federal | Notification service | Government of Canada notification service for sending emails and text messages to users — built by Canadian Digital Service | https://notification.canada.ca/ |
| GCcollab | Canada · Federal | Collaboration platform | Government of Canada's professional networking and collaboration platform for public servants and external partners to share knowledge and work together | https://gccollab.ca/ |
| GCKey — Federal Sign-In Service | Canada · Federal | Authentication | Unified credential used to access many Government of Canada online services | https://clegc-gckey.gc.ca/ |
| Government of Canada Employee Directory (GEDS) | Canada · Federal | Directory | Government of Canada Employee Directory (GEDS) — search for federal public servant contact information and organizational structure. | https://geds-sage.gc.ca/en/GEDS?pgid=002 |
| My Service Canada Account (MSCA) | Canada · Federal | Secure portal | Sign in to view EI, CPP, OAS, ROE, and access most federal individual services in one place | https://www.canada.ca/en/employment-social-development/services/my-account.html |
| NEXUS — Trusted Traveller Program | Canada · Federal | Service | Apply for expedited border crossing between Canada and the US at land, air, and marine entries | https://www.cbsa-asfc.gc.ca/prog/nexus/menu-eng.html |
| Passport Canada — Apply or Renew | Canada · Federal | Service | Apply for, renew, or replace a Canadian passport; track application status online | https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports.html |
| Service Canada — Find a Service Canada Office | Canada · Federal | Finder | Locate the nearest Service Canada Centre and confirm services, hours, and appointment options | https://www.canada.ca/en/employment-social-development/corporate/portfolio/service-canada/find-office.html |
| Termium Plus | Canada · Federal | Terminology database | Government of Canada's terminology and linguistic data bank — over 4 million terms in English, French, Spanish, and other languages | https://www.btb.termiumplus.gc.ca/ |
| Travel Advice and Advisories | Canada · Federal | Advisory finder | Country-by-country official travel advisories | https://travel.gc.ca/travelling/advisories |
| Travel.gc.ca — Consent Letter for Children Travelling Abroad | Canada · Federal | Service | Template and guidance for consent letters when children travel abroad without both parents | https://travel.gc.ca/travelling/children/consent-letter |
| Canada Council for the Arts — Discover | Canada · Crown Corp | Arts | Funding programs, arts research, and Canadian arts discovery | https://canadacouncil.ca/ |
| Canada Foundation for Innovation — Research Infrastructure | Canada · Crown Corp | Research | Funding for research infrastructure across Canadian institutions | https://www.innovation.ca/ |
| Canada Post — Send, Ship, Track | Canada · Crown Corp | Shipping tool | Send mail, ship packages, calculate postage, and track shipments | https://www.canadapost.ca/send |
| Canada Science and Technology Exhibition Centre | Canada · Crown Corp | Science outreach | Science and innovation exhibits and public programs | https://www.sciencetech.ca/ |
| CBC — Gem Streaming | Canada · Crown Corp | Streaming | Free Canadian streaming of news, documentaries, and shows on CBC Gem | https://gem.cbc.ca/ |

### British Columbia

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| B.C. Government DevHub | British Columbia · Provincial | Developer portal | British Columbia government developer hub with technical documentation, code samples, APIs, and community knowledge bases | https://developer.gov.bc.ca/ |
| BC Services Card | British Columbia · Provincial | Digital ID | BC's combined health card and digital ID used to access online government services securely | https://www2.gov.bc.ca/gov/content/governments/government-id/bc-services-card |
| Connected Services BC | British Columbia · Provincial | Digital service | British Columbia's initiative to build connected, people-centred digital government services and improve cross-government service delivery. | https://www2.gov.bc.ca/gov/content/governments/organizational-structure/ministries-organizations/central-government-agencies/csbc |
| Service BC — Online Services | British Columbia · Provincial | Service | BC government service finder — IDs, permits, licences, vital stats, health card, payments | https://www2.gov.bc.ca/gov/content/governments/services-for-government |

### Alberta

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Alberta.ca Account | Alberta · Provincial | Authentication | Single sign-in used to access Alberta government online services like MyAlberta Digital ID | https://account.alberta.ca/ |
| MyAlberta Digital ID | Alberta · Provincial | Digital ID | Verified digital identity used to access Alberta government services remotely | https://account.alberta.ca/signin |

### Manitoba

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Manitoba Geological Survey | Manitoba · Provincial | Geology maps | Geological maps, mineral resources, and geoscience data for Manitoba | https://www.manitoba.ca/mit/geo/ |

### Ontario

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Ontario.ca Developer Hub | Ontario · Provincial | Developer portal | Ontario government developer hub with APIs, technical documentation, and code samples for building digital services | https://developer.ontario.ca/ |
| ServiceOntario | Ontario · Provincial | Service portal | Ontario government's one-stop portal for driver’s licences, health cards, birth certificates, business registrations, and other provincial services | https://www.ontario.ca/page/serviceontario |
| Brampton budget / Open Book resources | Brampton · Municipal | Transparency / budget | Budget transparency resources and project-oriented views | https://www.brampton.ca/EN/City-Hall/budget/ |
| Toronto 311 — Service Requests | Toronto · Municipal | Service | Report issues, request services, and track cases in Toronto via web, app, or phone | https://www.toronto.ca/home/311-toronto-at-your-service/ |

### Quebec

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Directeur de l'état civil du Québec | Quebec · Provincial | Vital statistics | Order Quebec certificates of birth, marriage, civil union, and death online | https://www.etatcivil.gouv.qc.ca/ |

### Atlantic Canada (NB, NS, PE, NL)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| New Brunswick Geological Survey | New Brunswick · Provincial | Geology maps | Interactive geological maps, mineral deposits, and geoscience data for NB | https://www2.gnb.ca/content/gnb/en/departments/10.html |

### Northern Canada (YT, NT, NU)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Northwest Territories Geological Survey | Northwest Territories · Provincial | Geology maps | Geological maps, mining data, and geoscience publications for NWT | https://www.nwtgeoscience.ca/ |

## 💰 Taxes & Revenue

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Canada Revenue Agency — My Business Account | Canada · Federal | Tax portal | Online business tax portal for GST/HST filing, payroll, and corporate returns | https://www.canada.ca/en/revenue-agency/services/e-services.html |
| CRA — Express Notice of Assessment (NOA) | Canada · Federal | Service | Fast online delivery of your Notice of Assessment after filing your tax return | https://www.canada.ca/en/revenue-agency/services/e-services/about-express-noa.html |
| CRA — Federal and Provincial Tax Brackets | Canada · Federal | Reference | Current and historical federal and provincial/territorial personal income tax rates | https://www.canada.ca/en/revenue-agency/services/tax/individuals/frequently-asked-questions-individuals/canadian-income-tax-rates-individuals-current-previous-years.html |
| CRA — GST/HST Calculator and Rates | Canada · Federal | Calculator | Look up the GST/HST rate that applies by province and calculate taxes on sales | https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/charge-collect-which-rate.html |
| CRA — List of Charities and Giving | Canada · Federal | Search | Search registered Canadian charities, view revocation notices, and browse T3010 filings | https://apps.cra-arc.gc.ca/ebci/hacc/srch/pub/dsplyBscSrch |
| CRA — My Account for Individuals | Canada · Federal | Secure portal | View tax returns, refunds, RRSP/TFSA room, CCB payments, and direct-deposit settings | https://www.canada.ca/en/revenue-agency/services/e-services/e-services-individuals/account-individuals.html |
| CRA — NETFILE Certified Software List | Canada · Federal | Finder | Annual list of CRA-certified software (including free options) for filing personal taxes online | https://www.canada.ca/en/revenue-agency/services/e-services/digital-services-individuals/netfile-overview/certified-software-netfile-program.html |
| CRA — Payroll Deductions Online Calculator (PDOC) | Canada · Federal | Calculator | Official calculator for payroll CPP, EI, and federal/provincial income tax deductions | https://www.canada.ca/en/revenue-agency/services/e-services/digital-services-businesses/payroll-deductions-online-calculator.html |
| Taxpayers' Ombudsperson | Canada · Agency | Ombudsman | Independent review of complaints about CRA service and taxpayer rights | https://www.canada.ca/en/taxpayers-ombudsperson.html |

### British Columbia

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| BC Property Transfer Tax Calculator | British Columbia · Provincial | Calculator | Calculate the provincial property transfer tax due when buying property or acquiring land in British Columbia | https://www2.gov.bc.ca/gov/content/taxes/property-taxes/property-transfer-tax |
| Vancouver Property Tax Calculator | Vancouver · Municipal | Calculator | Estimate your annual property tax in Vancouver based on assessed value and property classification | https://vancouver.ca/home-property-development/property-taxes-and-assessments.aspx |

### Ontario

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Mississauga Property Tax Calculator | Mississauga · Municipal | Calculator | Calculate your annual property tax bill in Mississauga based on your property's assessed value | https://www.mississauga.ca/portal/residents/propertytax |

### Quebec

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Revenu Québec — Mon dossier | Quebec · Provincial | Secure portal | Quebec's tax portal for personal and business returns, refunds, and notices | https://www.revenuquebec.ca/en/online-services/online-services-mon-dossier/ |

## 🏦 Finance, Banking & Economy

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Bank of Canada — Inflation Calculator | Canada · Federal | Calculator | Calculate the buying power of the Canadian dollar in any year from 1914 to today | https://www.bankofcanada.ca/rates/related/inflation-calculator/ |
| Bank of Canada — Monetary Policy Report | Canada · Federal | Report | Quarterly report on inflation, growth, and interest-rate outlook with supporting data | https://www.bankofcanada.ca/publications/mpr/ |
| Bank of Canada — Research and Publications | Canada · Federal | Research | Economic research, working papers, staff discussion papers, and data | https://www.bankofcanada.ca/publications/ |
| CPP/QPP Statement of Contributions | Canada · Federal | Statement | View your CPP/QPP contribution history and estimated retirement benefit | https://www.canada.ca/en/services/benefits/publicpensions/cpp/statement-contributions.html |
| FCAC — Credit Card Comparison Tool | Canada · Federal | Comparator | Compare fees, rewards, and interest rates across all federally regulated credit cards | https://itools-ioutils.fcac-acfc.gc.ca/CCCT-OCCC/SearchFilter-eng.aspx |
| FCAC — Mortgage Calculator | Canada · Federal | Calculator | Official mortgage qualifier and payment calculator including stress-test scenarios | https://itools-ioutils.fcac-acfc.gc.ca/MC-CH/MCCalc-CHCalc-eng.aspx |
| Financial Consumer Agency — Consumer Tools | Canada · Federal | Financial tools | Budget planner, credit card selector, bank account comparison, and financial literacy tools | https://www.canada.ca/en/financial-consumer-agency.html |
| Business Development Bank of Canada (BDC) | Canada · Crown Corp | Business financing | Federal crown corporation providing financing, advisory services, and venture capital to Canadian businesses | https://www.bdc.ca/ |
| CDIC — Deposit Insurance Calculator | Canada · Crown Corp | Calculator | Calculate how much of your bank deposits are protected by CDIC coverage | https://www.cdic.ca/your-coverage/deposit-insurance-calculator/ |
| Export Development Canada — Trade Intelligence | Canada · Crown Corp | Trade data | International trade data, market intelligence, and export tools | https://www.edc.ca/en |
| Canadian Investor Protection Fund | Canada · Agency | Coverage tool | Check coverage of investment dealer member firms and eligible assets | https://www.cipf.ca/ |
| SEDAR+ — Canadian Securities Filings | Canada · Agency | Filings search | Official filings portal for Canadian public companies — prospectuses, annual reports, continuous disclosure | https://www.sedarplus.ca/ |

### British Columbia

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| BC Securities Commission — InvestRight | British Columbia · Provincial | Investor tools | Check registration, investor alerts, and scam reporting for BC securities investors | https://www.investright.org/ |

### Ontario

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Ontario Securities Commission — Investor Portal | Ontario · Provincial | Investor tools | Investor education, registration checks, and complaint filing for Ontario securities regulation | https://www.osc.ca/en/investors |

### Quebec

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Autorité des marchés financiers — Registre | Quebec · Provincial | Registry | Quebec's securities and insurance regulator — registrant search, consumer tools, and alerts | https://lautorite.qc.ca/ |

## 🏢 Business & Procurement

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| BizPaL — Permits and Licences Finder | Canada · Federal | Finder | Generate a personalized list of federal, provincial, and municipal permits you need to operate a business | https://www.bizpal.ca/ |
| Canada Business — Starting a Business | Canada · Federal | Guide | Official guide for starting a business in Canada — permits, taxes, licensing, and supports by province | https://www.canada.ca/en/services/business/start.html |
| CanadaBuys — Federal Tenders | Canada · Federal | Procurement | Modern federal procurement portal replacing buyandsell.gc.ca — browse and bid on tenders | https://canadabuys.canada.ca/en |
| Canadian Intellectual Property Office (CIPO) | Canada · Federal | Service | Search and apply for patents, trademarks, copyrights, and industrial designs in Canada | https://ised-isde.canada.ca/site/canadian-intellectual-property-office/en |
| FedDev Ontario | Canada · Federal | Economic development | Federal economic development agency supporting business growth, innovation, and community economic development in southern Ontario | https://feddev-ontario.canada.ca/ |
| Innovation Canada — Business Benefits Finder | Canada · Federal | Finder | Personalized search of federal, provincial, and regional business funding and support programs | https://innovation.ised-isde.canada.ca/innovation/s/?language=en_CA |
| MERX — Canadian Procurement Platform | Canada · Federal | Procurement | Canada's largest electronic procurement platform — access federal, provincial, and municipal tender notices across all industries | https://www.merx.com/ |
| Canadian Commercial Corporation — Government Procurement | Canada · Crown Corp | Procurement | Procurement tools for businesses selling to governments domestically and internationally | https://www.ccc.ca/ |
| Defence Construction Canada | Canada · Crown Corp | Procurement | Defence construction contracting and project management | https://www.dcc-cdc.com/ |

### British Columbia

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| BC Bid — Provincial Procurement | British Columbia · Provincial | Procurement | BC's electronic tendering portal for public-sector opportunities across the province | https://www.bcbid.gov.bc.ca/ |
| BC Business Registry — Corporate Online | British Columbia · Provincial | Business registry | Search BC corporate records, register a new business, and file annual reports through BC Corporate Online | https://www.corporateonline.gov.bc.ca/ |

### Alberta

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Alberta Purchasing Connection | Alberta · Provincial | Procurement | Alberta's public-sector tender site — bid opportunities, awards, and vendor accounts | https://vendor.purchasingconnection.ca/ |

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
| SEAO — Système électronique d'appels d'offres du Québec | Quebec · Provincial | Procurement | Quebec's electronic tender system for public contracts with full search and alerts | https://www.seao.ca/ |

## 💼 Employment & Labour

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Canadian Occupational Projection System (COPS) | Canada · Federal | Labour data | Ten-year occupational projections for job openings and job seekers across Canadian occupations | https://occupations.esdc.gc.ca/sppc-cops/ |
| Employment and Social Development Canada — Labour Program | Canada · Federal | Regulator | Federal labour standards, occupational health and safety, workplace equity, and unjust-dismissal info | https://www.canada.ca/en/employment-social-development/corporate/portfolio/labour.html |
| Employment Insurance (EI) — Apply Online | Canada · Federal | Service | Apply for Employment Insurance regular, sickness, maternity, parental, and caregiver benefits | https://www.canada.ca/en/services/benefits/ei.html |
| Job Bank Canada — Job Search | Canada · Federal | Job search | Official job search tool with 56,000+ postings, filters by location, salary, hours, education | https://www.jobbank.gc.ca/findajob |
| Job Bank Canada — Labour Market Information | Canada · Federal | Labour data | Employment trends, occupation outlook, and market data explorer | https://www.jobbank.gc.ca/trend-analysis |
| Job Bank Canada — Wage Search | Canada · Federal | Wage comparison | Compare wages by occupation and location across Canada | https://www.jobbank.gc.ca/trend-analysis/search-wages |
| National Occupational Classification (NOC) | Canada · Federal | Classification | Search Canada's standard occupational taxonomy used for job postings, immigration, and LMI | https://noc.esdc.gc.ca/ |
| Record of Employment (ROE) Web | Canada · Federal | Service | Online employer portal for submitting Records of Employment electronically to Service Canada | https://www.canada.ca/en/employment-social-development/programs/ei/ei-list/roe-secure-online.html |
| Red Seal Program — Skilled Trades | Canada · Federal | Certification | National Red Seal standard for skilled trades — occupation list, exams, and recognized trades | https://red-seal.ca/ |

### British Columbia

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| WorkSafeBC | British Columbia · Provincial | Regulator | BC's workers' compensation and occupational health and safety regulator | https://www.worksafebc.com/ |

### Alberta

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| WCB Alberta | Alberta · Provincial | Regulator | Alberta's workers' compensation board — claims, employer accounts, and prevention resources | https://www.wcb.ab.ca/ |

### Ontario

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Employment Standards Act Ontario — Tools | Ontario · Federal | Calculators | Calculate overtime, vacation pay, termination pay, and other ESA obligations | https://www.ontario.ca/document/your-guide-employment-standards-act-0 |
| Ontario Minimum Wage | Ontario · Provincial | Reference | Current and scheduled Ontario minimum wage rates by worker category | https://www.ontario.ca/document/your-guide-employment-standards-act-0/minimum-wage |

### Quebec

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| CNESST — Quebec Labour Standards | Quebec · Provincial | Regulator | Quebec commission on labour standards, pay equity, occupational health, and work accidents | https://www.cnesst.gouv.qc.ca/en |

## 🎓 Education & Student Aid

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Canada Education Savings Grant (CESG) | Canada · Federal | Benefit | Federal matching grant of up to 20% on RESP contributions for eligible children | https://www.canada.ca/en/services/benefits/education/education-savings/cesg.html |
| Canada Job Grant — Employer Funded Training | Canada · Federal | Grant | Jointly funded training program for employers investing in workforce upskilling | https://www.canada.ca/en/employment-social-development/services/training-agreements/canada-job-grant.html |
| Canada Learning Bond | Canada · Federal | Benefit | Up to $2,000 in RESP grant money for children from lower-income families — eligibility and application | https://www.canada.ca/en/services/benefits/education/education-savings/learning-bond.html |
| Canada Student Loans and Grants | Canada · Federal | Financial aid | Apply for federal student loans and grants, manage your loan, and explore repayment assistance options | https://www.canada.ca/en/services/benefits/education/student-aid.html |

### British Columbia

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| StudentAid BC | British Columbia · Provincial | Student aid | Apply for BC loans, grants, and scholarships; calculate eligibility; repay student debt | https://studentaidbc.ca/ |

### Alberta

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Alberta Student Aid | Alberta · Provincial | Student aid | Apply for Alberta loans, grants, and scholarships with an account dashboard | https://studentaid.alberta.ca/ |
| ApplyAlberta | Alberta · Provincial | Service | Central application service for Alberta post-secondary institutions | https://www.applyalberta.ca/ |

### Ontario

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| OCAS — Ontario College Application | Ontario · Agency | Service | Central application portal for Ontario's public colleges | https://www.ontariocolleges.ca/ |
| OUAC — Ontario Universities' Application Centre | Ontario · Agency | Service | Apply online to Ontario universities using a single OUAC application | https://www.ouac.on.ca/ |
| OSAP — Ontario Student Assistance Program | Ontario · Provincial | Student aid | Apply for Ontario student loans and grants, estimate aid, and track your application status | https://www.ontario.ca/page/osap-ontario-student-assistance-program |

### Quebec

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Aide financière aux études (Quebec) | Quebec · Provincial | Student aid | Quebec's loans and bursaries program for full- and part-time post-secondary students | https://www.quebec.ca/education/aide-financiere-aux-etudes |

## 🛂 Immigration & Citizenship

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Express Entry — Create an Express Entry Profile | Canada · Federal | Service | Submit your Express Entry profile online to be entered into the pool of candidates for Canada's primary economic immigration programs | https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/submit-profile.html |
| Express Entry — Eligibility Checker | Canada · Federal | Eligibility tool | Find out if you're eligible for Express Entry under the Federal Skilled Worker, Federal Skilled Trades, or Canadian Experience Class programs | https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/eligibility.html |
| Immigration, Refugees and Citizenship Canada — Come to Canada Tool | Canada · Federal | Eligibility tool | Answer two questions to get a personalized list of immigration programs you may be eligible for, with a personal reference code | https://www.canada.ca/en/immigration-refugees-citizenship/services/come-canada-tool.html |
| IRCC — Application Processing Times | Canada · Federal | Reference | Official processing times for PR, citizenship, visas, work/study permits updated weekly | https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html |
| IRCC — Express Entry Rounds of Invitations | Canada · Federal | Reference | Historical CRS cut-off scores and candidate counts for every Express Entry draw | https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-rounds.html |
| IRCC — Medical Requirements and Panel Physicians | Canada · Federal | Finder | Find IRCC panel physicians and review medical exam requirements by country | https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/medical-exams.html |
| IRCC — Post-Graduation Work Permit | Canada · Federal | Service | Apply for a PGWP after graduating from a designated Canadian learning institution | https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation.html |
| IRCC — Provincial Nominee Program (PNP) Directory | Canada · Federal | Finder | Links to every provincial and territorial nominee program and its streams | https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees.html |
| IRCC — Study Permit Application | Canada · Federal | Service | Apply for a Canadian study permit and access designated-learning institution list | https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html |

### British Columbia

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| BC Provincial Nominee Program | British Columbia · Provincial | Nominee program | BC PNP streams for skilled workers, tech, entrepreneurs, and graduates | https://www.welcomebc.ca/Immigrate-to-B-C/B-C-Provincial-Nominee-Program |

### Alberta

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Alberta Advantage Immigration Program | Alberta · Provincial | Nominee program | Alberta's PNP streams for skilled workers, entrepreneurs, rural renewal, and tourism | https://www.alberta.ca/alberta-advantage-immigration-program |

### Manitoba

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Manitoba Provincial Nominee Program | Manitoba · Provincial | Nominee program | Manitoba's streams including Skilled Worker in Manitoba, International Education, and Business | https://immigratemanitoba.com/ |

### Ontario

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Ontario Immigrant Nominee Program (OINP) | Ontario · Provincial | Nominee program | Ontario's PNP streams for skilled workers, international students, and investors | https://www.ontario.ca/page/ontario-immigrant-nominee-program-oinp |

### Quebec

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Quebec Immigration — Mon projet Québec | Quebec · Provincial | Service | Quebec-specific immigration programs including selection criteria for skilled workers | https://www.quebec.ca/en/immigration |

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
| Health Canada — Clinical Trials Database | Canada · Federal | Research database | Searchable registry of authorized and completed clinical trials in Canada | https://health-products.canada.ca/ctdb-bdec/ |
| MedEffect Canada — Adverse Reaction Reporting | Canada · Federal | Reporting | Report and search adverse reactions to health products overseen by Health Canada | https://www.canada.ca/en/health-canada/services/drugs-health-products/medeffect-canada.html |
| Public Health Agency of Canada — Respiratory Virus Dashboard | Canada · Federal | Dashboard | Weekly surveillance of COVID-19, influenza, and RSV activity across Canada | https://health-infobase.canada.ca/respiratory-virus-detections/ |
| Canadian Blood Services — Donate | Canada · Agency | Service | Book a blood donation, register as a stem-cell donor, and track My Donor account | https://www.blood.ca/ |

### British Columbia

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| HealthLink BC — 8-1-1 | British Columbia · Provincial | Health service | 24/7 non-emergency health advice, dietitian, and pharmacist services by phone and web in BC | https://www.healthlinkbc.ca/ |
| Vaccinate BC | British Columbia · Provincial | Service | Book BC immunizations, view records, and find vaccine availability | https://www.getvaccinated.gov.bc.ca/ |

### Alberta

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Health Link Alberta — 8-1-1 | Alberta · Provincial | Health service | Alberta's 24/7 telehealth service for health advice and service navigation | https://www.albertahealthservices.ca/healthlink/ |

### Saskatchewan

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Saskatchewan eHealth | Saskatchewan · Provincial | Health records | Electronic health records, patient portals, and provincial health information services for Saskatchewan residents | https://www.ehealthsask.ca/ |

### Manitoba

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Health Links Manitoba — 8-1-1 | Manitoba · Provincial | Health service | Manitoba's 24/7 telephone health advice from registered nurses | https://sharedhealthmb.ca/patients-and-families/health-links/ |

### Ontario

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Cancer Care Ontario — Ontario Cancer System | Ontario · Federal | Cancer data | Wait times, screening program results, cancer statistics for Ontario | https://www.cancercareontario.ca/en |
| Ontario — Find a Doctor | Ontario · Provincial | Finder | Health Care Connect — register to be matched with a family doctor or nurse practitioner | https://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner |
| Trillium Gift of Life Network — Organ Donation | Ontario · Provincial | Service | Register as an organ and tissue donor in Ontario | https://www.giftoflife.on.ca/en/ |

## 🤝 Benefits & Social Services

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Benefits Finder | Canada · Federal | Service finder | Finds benefits across federal, provincial, and territorial programs | https://www.canada.ca/en/services/benefits/finder.html |
| Canada Child Benefit — Overview and Apply | Canada · Federal | Benefit | Eligibility, payment schedule, and application for the tax-free monthly CCB | https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-child-benefit-overview.html |
| Canada Dental Benefit | Canada · Federal | Benefit | Coverage details and application for the Canadian Dental Care Plan | https://www.canada.ca/en/services/benefits/dental.html |
| Canada Dental Care Plan | Canada · Federal | Health benefit | Apply for the national dental care plan providing coverage for uninsured Canadians with household incomes under $90,000 | https://www.canada.ca/en/services/benefits/dental/dental-care-plan.html |
| Canada Housing Benefit | Canada · Federal | Rental assistance | One-time top-up and ongoing rental assistance for low-income renters, administered with provinces and territories | https://www.canada.ca/en/services/benefits/housing/canada-housing-benefit.html |
| Canada Pension Plan (CPP) — Overview and Apply | Canada · Federal | Benefit | Eligibility, amounts, and application for CPP retirement, disability, and survivor benefits | https://www.canada.ca/en/services/benefits/publicpensions/cpp.html |
| Canada Workers Benefit | Canada · Federal | Tax benefit | Refundable tax credit for low-income workers and families to help offset employment costs | https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-workers-benefit.html |
| Canada.ca — Benefits Payment Calendar | Canada · Federal | Calendar | Official payment dates for CPP, OAS, EI, and other Government of Canada benefits | https://www.canada.ca/en/services/benefits/calendar.html |
| Canadian Retirement Income Calculator | Canada · Federal | Calculator | Estimates retirement income from public pensions, workplace pensions, and savings | https://www.canada.ca/en/services/benefits/publicpensions/cpp/retirement-income-calculator.html |
| Child and Family Benefits Calculator | Canada · Federal | Calculator | Estimates child and family benefit amounts | https://www.canada.ca/en/revenue-agency/services/child-family-benefits/child-family-benefits-calculator.html |
| CPP Retirement Hub | Canada · Federal | Information hub | Central hub for Canada Pension Plan retirement planning — contributions, applying, and combining with other income | https://www.canada.ca/en/services/benefits/publicpensions/cpp/retirement-hub.html |
| Disability Tax Credit Certificate — Form T2201 | Canada · Federal | Form | Apply for the Disability Tax Credit, which unlocks RDSP, CCB disability supplement, and more | https://www.canada.ca/en/revenue-agency/services/forms-publications/forms/t2201.html |
| Old Age Security (OAS) — Overview and Apply | Canada · Federal | Benefit | Eligibility, amounts, and application for Old Age Security and Guaranteed Income Supplement | https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security.html |
| Registered Disability Savings Plan (RDSP) | Canada · Federal | Savings plan | Overview, grants, and bonds available in the RDSP for eligible Canadians with disabilities | https://www.canada.ca/en/employment-social-development/programs/disability/savings.html |

### British Columbia

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| BC Income Assistance | British Columbia · Provincial | Social assistance | Apply for BC Employment and Assistance or disability assistance | https://www2.gov.bc.ca/gov/content/family-social-supports/income-assistance |

### Alberta

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Alberta Income Support | Alberta · Provincial | Social assistance | Apply for Alberta income support or AISH (Assured Income for the Severely Handicapped) | https://www.alberta.ca/income-support |
| Calgary Equity Index | Calgary · Municipal | Equity map / dashboard | Sophisticated GIS tool mapping equity indicators across the city | https://calgary.ca/research/calgary-equity-index.html |

### Ontario

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Ontario Disability Support Program (ODSP) | Ontario · Provincial | Social assistance | Apply for ODSP income and employment supports for people with disabilities in Ontario | https://www.ontario.ca/page/ontario-disability-support-program |
| Ontario GeoHub | Ontario · Provincial | GIS / map portal | Ontario's geographic data and interactive map hub | https://geohub.lio.gov.on.ca/ |
| Ontario Works (OW) | Ontario · Provincial | Social assistance | Apply for financial and employment assistance under Ontario Works | https://www.ontario.ca/page/ontario-works |
| London Maps | London · Municipal | GIS | London's interactive GIS mapping tool — property, zoning, infrastructure, and planning data | https://london.ca/maps |
| Oakville Maps — GeoHub | Ontario · Municipal | GIS | Oakville's interactive mapping portal — property, zoning, parks, and municipal infrastructure | https://maps.oakville.ca/ |
| Vaughan Maps — GeoVaughan | Ontario · Municipal | GIS | Interactive GIS map for the City of Vaughan — property, zoning, infrastructure, and planning data | https://maps.vaughan.ca/ |
| GeoOttawa | Ottawa · Municipal | Interactive map | Property, zoning, planning, aerials, and city geography layers | https://maps.ottawa.ca/geoottawa/ |

## 🏠 Housing & Real Estate

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Canada Greener Homes Initiative | Canada · Federal | Grant and loan | Federal grants and loans for home energy evaluations, retrofits, and renewable energy upgrades to reduce emissions | https://www.canada.ca/en/environment-climate-change/services/energy-efficiency/greener-homes-initiative.html |
| First Home Savings Account (FHSA) | Canada · Federal | Account | Tax-free registered savings account for first-time home buyers, up to $40,000 lifetime | https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/first-home-savings-account.html |
| Government of Canada Financial Tools and Calculators | Canada · Federal | Calculator hub | Big collection of practical calculators for budgeting, mortgages, loans, credit cards, and retirement | https://www.canada.ca/en/services/finance/tools.html |
| Home Buyers' Plan (HBP) — RRSP Withdrawal | Canada · Federal | Program | Withdraw up to $60,000 tax-free from RRSPs toward a first home — rules and repayment | https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/what-home-buyers-plan.html |
| Underused Housing Tax — Overview | Canada · Federal | Tax | Federal 1% annual tax on non-Canadian-owned vacant or underused residential property | https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/underused-housing-tax.html |
| Canada Lands Company — Property Portfolio | Canada · Crown Corp | Real estate | Surplus federal properties and lands available for redevelopment | https://www.clc.ca/ |
| CMHC — Mortgage Calculator | Canada · Crown Corp | Calculator | Official mortgage payment, amortization, and affordability calculator from CMHC | https://www.cmhc-schl.gc.ca/consumers/home-buying/calculators |
| CMHC Housing Affordability Tracker | Canada · Crown Corp | Housing tool | Monitor housing affordability across Canadian markets | https://www.cmhc-schl.gc.ca/ |
| Canadian Real Estate Association — Stats | Canada · Agency | Market data | Monthly national home sales, prices, and MLS benchmarks by market | https://www.crea.ca/housing-market-stats/ |

### British Columbia

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| BC Assessment — Property Search | British Columbia · Provincial | Property | Look up assessed property values, property class, sales data, and ownership information for any property in BC | https://www.bcassessment.ca/ |
| BC Residential Tenancy Branch | British Columbia · Provincial | Tribunal | Resolve BC tenancy disputes, find tenancy forms, and read the Residential Tenancy Act | https://www2.gov.bc.ca/gov/content/housing-tenancy/residential-tenancies |
| Vancouver Active Condo Listings — City Data | Vancouver · Municipal | Housing | Active Strata and condo listings data published as open data by the City of Vancouver | https://opendata.vancouver.ca/pages/home/ |

### Alberta

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Alberta Property Rights — Land Titles | Alberta · Provincial | Land registry | Alberta land titles search — property ownership records, title documents, and land ownership history | https://alta.registries.gov.ab.ca/ |
| Alberta Residential Tenancy Dispute Resolution Service | Alberta · Provincial | Tribunal | Alberta alternative to court for tenancy disputes — applications, forms, and rules | https://www.alberta.ca/residential-tenancy-dispute-resolution-service |

### Manitoba

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Manitoba Residential Tenancies Branch | Manitoba · Provincial | Tribunal | Manitoba's branch for residential tenancy disputes, rent regulation, and guidance | https://www.gov.mb.ca/cca/rtb/ |

### Ontario

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Toronto Community Housing — Directory | Toronto · Agency | Housing | Directory of Toronto Community Housing units and application info | https://www.toronto.ca/city-government/data-research-maps/open-data |
| Landlord and Tenant Board (LTB) Ontario | Ontario · Provincial | Tribunal | File applications, download forms, and read LTB rules for Ontario residential tenancy disputes | https://tribunalsontario.ca/ltb/ |
| Ontario Property Assessment — MPAC | Ontario · Provincial | Property | Municipal Property Assessment Corporation — look up your property's assessed value, class, and assessment details | https://www.mpac.ca/ |
| Windsor Property Tax Calculator | Windsor · Municipal | Calculator | Estimate your annual property tax bill in Windsor based on assessed value and property class | https://www.citywindsor.ca/taxes/property-taxes/property-tax-calculator |

### Quebec

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Tribunal administratif du logement (TAL) Quebec | Quebec · Provincial | Tribunal | Quebec housing tribunal — tenancy dispute filings, forms, and rent increase calculator | https://www.tal.gouv.qc.ca/en |

### Atlantic Canada (NB, NS, PE, NL)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| PEI Property Tax Calculator | PEI · Provincial | Calculator | Estimate annual property taxes for residential and commercial properties on Prince Edward Island | https://www.princeedwardisland.ca/en/service/property-tax |

## 🛣️ Transportation & Roads

### British Columbia

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| DriveBC | British Columbia · Provincial | Road conditions map | Cameras, closures, incidents, and route conditions | https://www.drivebc.ca/ |
| ICBC — Driver Licensing | British Columbia · Provincial | Service | Book knowledge tests, road tests, renew BC driver's licences, and manage BC ID | https://www.icbc.com/driver-licensing |

### Alberta

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| 511 Alberta | Alberta · Provincial | Road conditions map | Official highway events, road conditions, and cameras | https://511.alberta.ca/ |
| Calgary 311 — Service Requests | Calgary · Municipal | Service | Submit and track 311 service requests in Calgary — bylaw violations, road maintenance, parks, and more | https://www.calgary.ca/311.html |
| CalTRACS | Calgary · Municipal | Transportation data tool | Searchable traffic count system with decades of pedestrian, bike, and vehicle data | https://calgary.ca/planning/transportation/traffic-counts.html |

### Saskatchewan

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Saskatchewan 511 | Saskatchewan · Provincial | Road conditions map | Highway conditions, construction, and road cameras across SK | https://hotline.gov.sk.ca/ |
| SGI — Saskatchewan Driver and Vehicle Services | Saskatchewan · Provincial | Service | Saskatchewan Government Insurance — driver's licence, vehicle registration, and road tests | https://www.sgi.sk.ca/ |

### Manitoba

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Manitoba Public Insurance — Driver Services | Manitoba · Provincial | Service | MPI account for driver's licence, insurance, and vehicle registration in Manitoba | https://www.mpi.mb.ca/ |

### Ontario

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| 511 Ontario | Ontario · Provincial | Road conditions map | Real-time highway conditions, incidents, closures, and cameras | https://511on.ca/ |
| Ontario — Driver's Licence | Ontario · Provincial | Service | Apply for, renew, or replace an Ontario driver's licence and access related services | https://www.ontario.ca/page/drivers-licence |
| Ontario — Licence Plate Sticker Renewal | Ontario · Provincial | Service | Renew your Ontario licence plate sticker online and check renewal status | https://www.ontario.ca/page/renew-licence-plate-sticker |
| Ontario Photo Card | Ontario · Provincial | ID service | Apply for an Ontario Photo Card — government-issued photo ID for residents who don't have a driver's licence | https://www.ontario.ca/page/ontario-photo-card |
| ServiceOntario — Vehicle Registration Renewal | Ontario · Provincial | Service | Renew Ontario vehicle registration, transfer ownership, and order licence plate stickers online | https://www.ontario.ca/page/renew-drivers-licence |
| Ottawa Traffic, Parking and Road Bans | Ottawa · Municipal | Service | View real-time traffic conditions, road closures, parking restrictions, and seasonal road bans in Ottawa | https://traffic.ottawa.ca/ |

### Quebec

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Quebec 511 | Quebec · Provincial | Road conditions map | Provincial road conditions, incidents, and closures | https://www.quebec511.info/en/ |
| SAAQClic — Quebec Driver Services | Quebec · Provincial | Service | Quebec's online SAAQ portal for driver's licence, vehicle registration, and fines | https://saaq.gouv.qc.ca/en/online-services |
| Allo-MTL — Montréal en temps réel | Montreal · Municipal | Real-time city map | Aggregates 20+ datasets: snow removal, parking signs, bike routes, trees, air quality, and more | https://donnees.montreal.ca/en/showcase/allo-mtl-montreal-temps-reel |

### Atlantic Canada (NB, NS, PE, NL)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| New Brunswick 511 | New Brunswick · Provincial | Road conditions map | Road conditions, construction, cameras, and travel advisories for NB | https://511.gnb.ca/ |
| Service New Brunswick — Driver and Vehicle Services | New Brunswick · Provincial | Service | Apply and renew NB driver's licences, registrations, and check driver records | https://www2.snb.ca/content/snb/en/services/services_renderer.9955.Driver%E2%80%99s_Licence.html |
| Nova Scotia Registry of Motor Vehicles | Nova Scotia · Provincial | Service | Renew or replace NS driver's licence, vehicle registration, and plates | https://novascotia.ca/sns/access/drivers.asp |
| Access PEI — Driver and Vehicle Services | PEI · Provincial | Service | PEI government services for driver's licences, vehicle registrations, and plates | https://www.princeedwardisland.ca/en/service/driver-licences-vehicle-registration |

### Northern Canada (YT, NT, NU)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| 511 Northwest Territories | Northwest Territories · Provincial | Road conditions | NWT highway conditions, closures, and cameras | https://www.dot.gov.nt.ca/Highways/Highway-Conditions |
| NT Drive Yukon — 511 Yukon | Yukon · Provincial | Road conditions | Yukon highway conditions, closures, and cameras | https://511yukon.ca/ |
| Yukon — Driver Licensing | Yukon · Provincial | Service | Yukon driver's licensing, ID cards, and road tests | https://yukon.ca/en/driving-and-transportation/driver-licensing |

## 🚌 Transit & Mobility

### British Columbia

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| BC Transit — Trip Planner | British Columbia · Regional | Trip planner | Provincial and municipal transit connections across British Columbia | https://www.bctransit.com/ |
| TransLink Trip Planner | Metro Vancouver · Regional | Trip planner | Great regional transit planning tool | https://www.translink.ca/ |

### Alberta

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Edmonton Transit Service (ETS) | Edmonton · Regional | Transit | ETS bus and LRT trip planning for Edmonton | https://www.edmonton.ca/ets |

### Saskatchewan

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Regina Transit | Regina · Regional | Transit | Regina Transit schedules and route information | https://www.regina.ca/transit |
| Saskatoon Transit | Saskatoon · Municipal | Transit | Saskatoon Transit trip planning, schedules, and real-time info | https://transit.saskatoon.ca/ |

### Manitoba

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Winnipeg Transit — Trip Planner | Winnipeg · Municipal | Trip planner | Winnipeg Transit trip planning, schedules, and real-time vehicle info | https://www.winnipegtransit.com/ |

### Ontario

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Brampton Transit | Brampton · Regional | Transit | Brampton transit routes, schedules, and Züm BRT info | https://www.brampton.ca/en/residents/transit |
| Burlington Transit | Burlington · Regional | Transit | Burlington bus routes and schedules | https://www.burlington.ca/en/transit |
| Guelph Transit | Guelph · Regional | Transit | Guelph bus routes and trip planning | https://www.guelph.ca/en/live-here/guelph-transit.aspx |
| Hamilton Street Railway (HSR) | Hamilton · Regional | Transit | Hamilton bus routes and BLine rapid transit info | https://www.hamilton.ca/hsr |
| London Transit | London · Regional | Transit | London, Ontario bus routes and schedules | https://www.londontransit.ca/ |
| Metrolinx Triplinx | Ontario · Regional | Trip planner | Region-wide transit trip planner across many systems | https://www.triplinx.ca/ |
| Durham Region Transit | Ontario/GTA · Regional | Transit | Durham Region's transit service — routes, schedules, and fares | https://www.durhamregiontransit.com/ |
| GO Transit — Trip Planner | Ontario/GTA · Regional | Trip planner | GO Transit schedules, trip planning, and fare information for Greater Toronto Area | https://www.gotransit.com/en/ |
| PRESTO Fare Calculator | Ontario/GTA · Regional | Fare calculator | Transit fare estimator across participating systems | https://www.prestocard.ca/en/about/fare-types-and-discounts |
| York Region Transit (YRT/Viva) | Ontario/GTA · Regional | Transit | York Region Transit and Viva BRT trip planning across York Region | https://www.yrt.ca/ |
| OC Transpo — Trip Planner | Ottawa · Regional | Trip planner | OC Transpo bus and O-Train trip planning for Ottawa | https://www.octranspo.com/ |
| Grand River Transit (Waterloo Region) | Waterloo · Regional | Transit | Waterloo Region bus and ION LRT trip planning and schedules | https://www.grt.ca/ |
| Windsor Transit | Windsor · Regional | Transit | Windsor transit routes and schedules | https://www.citywindsor.ca |
| MiWay — Mississauga Transit | Mississauga · Municipal | Transit | MiWay bus routes, schedules, and real-time info for Mississauga | https://www.mississauga.ca/miway |
| Thunder Bay Transit | Ontario · Municipal | Transit | Thunder Bay Transit routes, schedules, real-time bus tracking, and fare information | https://www.thunderbay.ca/transit |
| Toronto Bike Share station map | Toronto · Municipal | Mobility map | Station finder and system map for bike share | https://bikesharetoronto.com/system-map/ |
| TTC Service Advisories / maps | Toronto · Municipal | Transit tool | Route, service, and map resources for transit users | https://www.ttc.ca/ |

### Quebec

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| exo — Greater Montreal Commuter Rail and Bus | Montreal · Regional | Trip planner | Trip planning and schedules for Greater Montreal commuter rail and suburban bus network | https://exo.quebec/en |
| STM Info outils / network maps | Montreal · Municipal | Transit map/tools | Metro and bus map resources and rider tools | https://www.stm.info/en |
| STO — Outaouais Transit (Gatineau) | Quebec · Municipal | Transit | Société de transport de l'Outaouais trip planning and schedules for Gatineau | https://www.sto.ca/en/ |
| RTC — Réseau de transport de la Capitale (Quebec City) | Quebec City · Municipal | Transit | Quebec City bus trip planning, schedules, and real-time arrivals | https://www.rtcquebec.ca/ |

## ✈️ Aviation, Marine & Rail

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Canadian Coast Guard — Marine Communications | Canada · Federal | Marine safety | Search and rescue info, nautical charts, and marine safety | https://www.canada.ca/coast-guard |
| Canadian Coast Guard — Notices to Mariners | Canada · Federal | Marine safety | Official Notices to Mariners with corrections to nautical charts and publications | https://www.notmar.gc.ca/ |
| Marine Atlantic — Ferry Booking and Schedules | Canada · Federal | Ferry booking | Book and plan crossings between Nova Scotia and Newfoundland | https://www.marineatlantic.ca/ |
| NAV CANADA — Aeronautical Publications | Canada · Federal | Aviation maps | Airspace maps, aeronautical information, and flight planning tools | https://www.navcanada.ca/en/aeronautical-information/ |
| NAV CANADA — Flight Planning | Canada · Federal | Flight tools | NOTAM search, Canadian Aviation Weather, and flight planning resources | https://www.navcanada.ca/en/flight-planning/ |
| NAV CANADA — Live NOTAM Map | Canada · Federal | Aviation tool | Live Canadian airspace NOTAM visualization and search | https://plan.navcanada.ca/wxrecall/ |
| Transport Canada — Drone Registration | Canada · Federal | Service | Register your drone, take the pilot certificate exam, and review Canadian drone rules | https://tc.canada.ca/en/aviation/drone-safety/drone-pilot-licensing |
| VIA Rail — Trip Planner and Booking | Canada · Federal | Trip planner | Train schedules, booking, and trip planning across Canada | https://www.viarail.ca/en/plan |

### British Columbia

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Port of Prince Rupert | British Columbia · Crown Corp | Port authority | Canada's second-largest port and a key trade gateway connecting Asia and North America, with real-time vessel tracking and trade data | https://www.rupertport.com/ |
| Vancouver Airport Authority (YVR) | Vancouver · Agency | Airport | YVR flight tracker, parking, terminal maps, and airport services | https://www.yvr.ca/ |
| BC Ferries — Trip Planning and Booking | British Columbia · Regional | Ferry | BC Ferries routes, schedules, reservation booking, and fare information for coastal ferry routes across British Columbia | https://www.bcferries.com/ |

### Ontario

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Greater Toronto Airports Authority (YYZ) | Toronto · Agency | Airport | Pearson International arrivals/departures, parking, and airport info | https://www.torontopearson.com/ |
| Metrolinx GO Transit — Service Updates | Ontario/GTA · Regional | Real-time | Live GO Train and GO Bus service status and advisories for the GTHA | https://www.gotransit.com/en/service-updates |

### Quebec

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Aéroports de Montréal (YUL) | Montreal · Agency | Airport | Montréal-Trudeau airport flights, services, and real-time info | https://www.admtl.com/en |
| Quebec ferry — Traverse Québec–Lévis | Quebec · Provincial | Ferry | Quebec City to Lévis ferry service — schedules, fares, and real-time crossing information | https://www.traversiers.com/en/ |

### Atlantic Canada (NB, NS, PE, NL)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
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
| BC Parks Find a Park | British Columbia · Provincial | Finder | Filterable park explorer by activity, facilities, and area | https://bcparks.ca/find-a-park/ |
| BC Parks Maps | British Columbia · Provincial | Interactive maps | Rich park map with overlays like closures, weather, cell coverage, and earthquakes | https://bcparks.ca/plan-your-trip/maps |
| Recreation Sites and Trails B.C. | British Columbia · Provincial | Outdoor map / finder | Great search and filterable map for trails, recreation sites, alerts, and closures | https://www.sitesandtrailsbc.ca/ |

### Alberta

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Alberta Parks | Alberta · Provincial | Park finder | Park discovery, activities, reservations, and maps | https://www.albertaparks.ca/ |
| Public Land Recreation Maps | Alberta · Provincial | Recreation map hub | Downloadable and georeferenced recreation maps for public land | https://alberta.ca/public-land-recreation-maps |
| Public Land Use | Alberta · Provincial | Outdoor info hub | Closures, advisories, PLUZ info, maps, and camping pass links | https://www.alberta.ca/public-land-recreation |

### Ontario

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Ontario Trails Council | Ontario · Agency | Trails finder | Searchable directory of 2,300+ Ontario trails across hiking, biking, paddling, and skiing | https://ontariotrails.on.ca/ |
| Ontario Parks | Ontario · Provincial | Park finder / booking | Park discovery, camping, maps, and trip planning | https://www.ontarioparks.ca/ |

### Quebec

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Sépaq | Quebec · Provincial | Outdoor network portal | Huge outdoor destination network with parks, lodging, and activity discovery | https://www.sepaq.com/index.dot?language_id=1 |
| Sépaq — Quebec Parks Online Reservations | Quebec · Provincial | Booking | Reserve camping, lodging, and activities across Quebec's Sépaq parks and wildlife reserves | https://www.sepaq.com/reservation/ |

### Atlantic Canada (NB, NS, PE, NL)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| NL Parks — Provincial Parks Directory | Newfoundland and Labrador · Provincial | Park finder | Search Newfoundland and Labrador provincial parks and outdoor destinations | https://www.gov.nl.ca/ecc/ |
| PEI Parks | PEI · Provincial | Park finder | PEI provincial parks and beaches, camping and booking info | https://www.princeedwardisland.ca/en/topics/parks-and-environment |

## 🌦️ Weather, Climate & Environment

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Canadian Climate Data Online | Canada · Federal | Climate data | Daily, monthly, and hourly historical climate observations from ECCC stations | https://climate.weather.gc.ca/ |
| Canadian Ice Service | Canada · Federal | Marine/ice map | Super niche and very cool ice charts and marine ice information | https://ice-glaces.ec.gc.ca/ |
| ClimateData.ca | Canada · Federal | Climate tools | Downscaled climate projections, analysis tools, and scenario maps for Canada | https://climatedata.ca/ |
| Environment and Climate Change Canada — MSC Datamart | Canada · Federal | Open data | Raw feeds of weather, water, climate, and air-quality data for developers and researchers | https://dd.weather.gc.ca/ |
| Environment Canada — Marine Weather Forecast | Canada · Federal | Forecast | Marine forecasts for Canadian coastal waters, Great Lakes, and major lakes | https://weather.gc.ca/marine/index_e.html |
| Environment Canada — Naturalized Flow Data | Canada · Federal | Hydrology | Canadian historical and naturalized streamflow records for rivers and basins | https://www.canada.ca/en/environment-climate-change/services/water-overview.html |
| Freshwater Research | Canada · Federal | Research hub | DFO research on freshwater fish, habitat, and aquatic ecosystems | https://waves-vagues.dfo-mpo.gc.ca/ |
| GeoGratis | Canada · Federal | Geospatial data portal | Topographic, elevation, and imagery datasets from NRCan | https://geogratis.gc.ca/ |
| Hinterland Who's Who | Canada · Federal | Species fact sheets | Species fact sheets, identification guides, and conservation stories for Canadian wildlife | https://www.hww.ca/ |
| Weather.gc.ca | Canada · Federal | Weather dashboard | Forecasts, alerts, radar, air quality, marine weather, and more | https://weather.gc.ca/ |

### British Columbia

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| BC Wildfire Service — Active Wildfires Map | British Columbia · Provincial | Wildfire map | Live BC wildfire locations, sizes, statuses, and evacuation orders | https://www2.gov.bc.ca/gov/content/safety/wildfire-status |

### Alberta

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Alberta Wildfire Status | Alberta · Provincial | Wildfire map | Live Alberta wildfire locations, sizes, causes, and fire bans | https://wildfire.alberta.ca/ |

### Saskatchewan

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Saskatchewan Wildfire Status | Saskatchewan · Provincial | Wildfire map | Saskatchewan Public Safety Agency wildfire dashboard and active fire map | https://www.saskatchewan.ca/residents/environment-public-health-and-safety/wildfire-in-saskatchewan |

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
| Ontario — Forest Fires Information | Ontario · Provincial | Wildfire map | Active Ontario forest fires, fire bans, and fire-weather conditions | https://www.ontario.ca/page/forest-fires |

## ⚡ Energy & Utilities

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Canada Energy Regulator — Energy Futures | Canada · Federal | Scenarios | Annual scenarios and interactive dashboards for Canada's energy supply and demand | https://www.cer-rec.gc.ca/en/data-analysis/canada-energy-future/ |
| Canada Energy Regulator — Pipeline Profiles | Canada · Federal | Data | Capacity, throughput, and tolls for major federally regulated pipelines | https://www.cer-rec.gc.ca/en/data-analysis/facilities-we-regulate/pipeline-profiles/ |
| Water Office | Canada · Federal | Hydrology tool | Water level and flow monitoring data | https://wateroffice.ec.gc.ca/ |

### British Columbia

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| BC Hydro — Planned Outages and Outage List | British Columbia · Provincial | Outage info | Browse list of current, planned, and recently restored power outages across BC Hydro's service territory | https://www.bchydro.com/power-outages |
| BC Hydro — Power Outage Map | British Columbia · Provincial | Outage map | Interactive map showing current and recent power outages across BC — view affected areas, estimated restoration times, and outage cause | https://app.bchydro.com/power-outages/app/outage-map.html |
| BC Hydro — Report an Outage | British Columbia · Provincial | Service | Report a power outage to BC Hydro online or check the outage map for your area | https://www.bchydro.com/outages/orsmapview.jsp |
| FortisBC — Gas Outage Map | British Columbia · Provincial | Outage map | Map of current gas service interruptions in FortisBC's service territory across British Columbia | https://www.fortisbc.com/outages |
| Vancouver VanMap | Vancouver · Municipal | Interactive map | Parcel, zoning, parks, utilities, and city layers | https://maps.vancouver.ca/vanmap-viewer/ |

### Alberta

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Alberta Energy Regulator | Alberta · Provincial | Regulator | Regulates the upstream oil, gas, and coal development in Alberta, including licensing, compliance, and environmental monitoring | https://www.aer.ca/ |
| Alberta Utilities Commission — Consumer Services | Alberta · Provincial | Consumer protection | Alberta Utilities Commission consumer services — complaints, dispute resolution, and utility rate information for Alberta energy consumers | https://www.auc.ab.ca/ |
| ATCO — Gas Outage Map and Emergency | Alberta · Provincial | Outage map | ATCO's gas and electric outage information — view current outages and report gas emergencies in Alberta | https://electric.atco.com/en-ca/power-outages.html |
| Utilities Consumer Advocate Alberta | Alberta · Provincial | Advocacy | Free advocacy for Alberta energy consumers — compare electricity and gas rates, understand your options, and get help with disputes | https://ucahelps.alberta.ca/ |
| Calgary Electric Utility — ENMAX Outages | Calgary · Municipal | Outage map | ENMAX's power outage information and map for Calgary — view current outages and report service issues | https://www.enmax.com/outages |
| Edmonton Electric Utility — EPCOR Outages | Edmonton · Municipal | Outage map | EPCOR's electric outage map for Edmonton — current power outages, outage causes, and restoration times | https://www.epcor.com/outages-safety/outages/current/Pages/default.aspx |
| Edmonton Maps | Edmonton · Municipal | City map portal | Property, planning, utilities, and municipal geography tools | https://maps.edmonton.ca/ |

### Manitoba

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Manitoba Hydro — Outage Map | Manitoba · Crown Corp | Outage map | Manitoba Hydro outage map and reporting | https://www.hydro.mb.ca/outages/ |

### Ontario

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Hydro One — Outage Map | Ontario · Provincial | Outage map | Live outage map for Hydro One's rural and regional Ontario distribution network | https://www.hydroone.com/power-outages |
| Ontario Energy Board | Ontario · Provincial | Regulator | Independent regulator of the electricity and natural gas sectors in Ontario, including utility rate decisions, consumer protection, and energy policy | https://www.oeb.ca/ |
| Ontario Power Generation — Dam Safety and Water Management | Ontario · Provincial | Water management | OPG's dam safety monitoring, water level data, and water management information for Ontario's hydroelectric facilities | https://www.opg.com/safety/dams/ |
| Ontario Power Generation — Nuclear Monitoring Dashboard | Ontario · Provincial | Dashboard | Nuclear generation data, environmental monitoring results, and safety performance information from OPG's Pickering and Darlington stations | https://www.opg.com/generating-power/nuclear/nuclear-performance/ |
| Alectra — Outage Map | Ontario/GTA · Regional | Outage map | Live power outage map across Alectra Utilities' Ontario service territory | https://www.alectrautilities.com/outage-map |
| Hydro Ottawa — Outage Map | Ottawa · Municipal | Outage map | Live power outage map and reporting for Ottawa and surrounding areas | https://hydroottawa.com/outage |
| Toronto Hydro — Outage Map | Toronto · Municipal | Outage map | Toronto Hydro's power outage map — view current outages in Toronto's electricity distribution area | https://www.torontohydro.com/outages |

### Quebec

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Hydro-Québec — Report an Outage and Mobile App | Quebec · Provincial | Service | Report a power outage to Hydro-Québec, check real-time status by address, and access the Hydro-Québec mobile app for notifications | https://www.hydroquebec.com/mobile-app.html |

### Atlantic Canada (NB, NS, PE, NL)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Nova Scotia Power — Outage Map | Nova Scotia · Provincial | Outage map | Live power outage map across Nova Scotia | https://outagemap.nspower.ca/ |
| Maritime Electric — Outage Map | PEI · Provincial | Outage map | Maritime Electric's Prince Edward Island outage map | https://maritimeelectric.com/outages/ |

### Northern Canada (YT, NT, NU)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Yukon Energy Map | Yukon · Provincial | Energy map | Yukon energy infrastructure, electricity generation, and transmission maps | https://yukon.ca/en |

## 🌾 Agriculture, Food & Drink

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Agri-Food Data Canada | Canada · Federal | Research data | Agricultural research and producer data platform supporting Canadian farms and AI projects | https://agrifooddatacanada.ca/ |
| Agriculture and Agri-Food Canada | Canada · Federal | Government department | Federal department supporting Canadian agriculture through research, policies, market development, and producer programs | https://agriculture.canada.ca/en |
| Canadian Food Inspection Agency (CFIA) | Canada · Federal | Regulator | Federal food safety, plant and animal health regulator — recalls, inspections, and standards | https://inspection.canada.ca/ |
| Canadian Grain Commission | Canada · Federal | Regulator | Canada's grain quality regulator — grading, testing, and producer protection services | https://www.grainscanada.gc.ca/ |
| Canadian Wine Authority — VQA Wine Info | Canada · Federal | Wine info | Ontario's Vintners Quality Alliance wine standards, producer listings, and wine info | https://vqaontario.ca/ |
| Foodland Ontario — Seasonal Availability | Canada · Federal | Seasonal guide | What's in season across Ontario farms and markets | https://www.ontario.ca/foodland/ |
| Farm Credit Canada | Canada · Crown Corp | Agricultural financing | Federal crown corporation providing financing, insurance, and software to Canadian farmers and agribusinesses | https://www.fcc-fac.ca/ |

### British Columbia

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| BC Liquor Stores | British Columbia · Crown Corp | Retail | BCLS product catalogue, inventory by store, and special releases | https://www.bcliquorstores.com/ |

### Saskatchewan

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Saskatchewan Land | Saskatchewan · Provincial | Land maps | Crown land information, agricultural land, and land use data | https://www.saskatchewan.ca/business/agriculture-natural-resources-and-industry |

### Manitoba

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Manitoba Liquor and Lotteries | Manitoba · Crown Corp | Retail | Manitoba's crown retailer with liquor product and lottery services | https://www.mbll.ca/ |

### Ontario

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| LCBO — Ontario Liquor Retailer | Ontario · Crown Corp | Retail | Search LCBO product catalogue, store availability, and specialty releases | https://www.lcbo.com/ |

### Quebec

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| SAQ — Société des alcools du Québec | Quebec · Crown Corp | Retail | Browse SAQ spirits and wines with inventory, food pairings, and specialty imports | https://www.saq.com/en |

### Atlantic Canada (NB, NS, PE, NL)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| NSLC — Nova Scotia Liquor Corporation | Nova Scotia · Crown Corp | Retail | Nova Scotia's crown liquor retailer with product search and store inventory | https://www.mynslc.com/ |

## 🔬 Science, Research & Space

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Canadian Space Agency | Canada · Federal | Science portal | Missions, astronauts, educational material, media, and space updates | https://www.asc-csa.gc.ca/eng/ |
| Canadian Space Agency — Mission Tracker | Canada · Federal | Tracker | Current and upcoming CSA-supported satellite missions, astronauts, and science payloads | https://www.asc-csa.gc.ca/eng/missions/ |
| Canadian Space Agency — RADARSAT Constellation Data | Canada · Federal | Data | Earth-observation data from the RADARSAT Constellation Mission (RCM) | https://www.asc-csa.gc.ca/eng/satellites/radarsat/ |
| National Research Council — IR Aerospace Research Centre | Canada · Federal | Research | NRC aerospace research facilities, services, and partnership programs | https://nrc.canada.ca/en/research-development/research-collaboration/research-centres/aerospace-research-centre |
| NSERC — Natural Sciences and Engineering Research Council | Canada · Federal | Research funding | Federal agency that funds natural sciences and engineering research at Canadian universities and colleges | https://www.nserc-crsng.gc.ca/ |
| Polar Knowledge Canada — CHARS | Canada · Federal | Research | Canadian High Arctic Research Station — northern science, Indigenous research, and community data | https://www.canada.ca/en/polar-knowledge.html |
| NRC — Programs and Services | Canada · Crown Corp | Research | NRC research programs, technology platforms, and business innovation support | https://nrc.canada.ca/en |
| Genome Canada | Canada · Agency | Research | National genomics organization funding research, platforms, and innovation | https://www.genomecanada.ca/ |
| Ocean Networks Canada | Canada · Agency | Observatory | Live ocean observatory data from UVIC-operated cabled instruments off the Pacific and Arctic coasts | https://www.oceannetworks.ca/ |
| Perimeter Institute — Public Science | Canada · Agency | Education | Perimeter's free public lectures, educator resources, and theoretical physics content | https://perimeterinstitute.ca/outreach |
| SNOLAB — Underground Physics | Canada · Agency | Research | SNOLAB Sudbury underground lab — dark-matter and neutrino physics research | https://www.snolab.ca/ |
| TRIUMF — Canada's Particle Accelerator | Canada · Agency | Research | TRIUMF UBC-based subatomic and nuclear research lab — public science content and tours | https://www.triumf.ca/ |

## 🎭 Heritage, Culture & Arts

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Bank of Canada — Exchange Rates | Canada · Federal | Currency data | Daily exchange rates, historical data, and currency converter | https://www.bankofcanada.ca/rates/exchange/ |
| Bank of Canada — Interest Rates | Canada · Federal | Rates data | Current and historical interest rates, monetary policy summaries, and research | https://www.bankofcanada.ca/rates/ |
| Canadian Heritage — Virtual Exhibits | Canada · Federal | Digital exhibits | Digital heritage exhibits and museum resources | https://www.canada.ca/en/canadian-heritage/services/virtual-exhibits.html |
| Canadian Museum for Human Rights | Canada · Federal | Museum | National museum in Winnipeg dedicated to the evolution, celebration, and future of human rights in Canada | https://humanrights.ca/ |
| Canadian Museum of Immigration at Pier 21 | Canada · Federal | Museum | National museum in Halifax exploring the immigrant experience and contributions to Canada's cultural mosaic | https://pier21.ca/ |
| Canadian Museum of Nature — Online Collection | Canada · Federal | Digital collection | Digital access to the museum's natural history specimens and research | https://nature.ca/collection |
| Canadian War Museum | Canada · Federal | Museum | Canada's national museum of military history, covering conflicts from earliest times to the present | https://www.warmuseum.ca/ |
| Celebrate Being Canadian | Canada · Federal | Civic engagement | Resources and events to celebrate Canadian citizenship, culture, and national identity | https://www.canada.ca/en/immigration-refugees-citizenship/services/canadians/celebrate-being-canadian.html |
| Historic Sites and Monuments Board of Canada | Canada · Federal | Historic sites register | Register of historic sites, searchable by province, theme, and date | https://historicplaces.ca/ |
| Historica Canada — Heritage Minutes | Canada · Federal | Educational videos | Educational video shorts on Canadian history moments and figures | https://www.historicacanada.ca/ |
| National Film Board — Online Screening Room | Canada · Federal | Streaming | Free streaming of Canadian documentaries, animations, and interactive works | https://www.nfb.ca/ |
| National Gallery of Canada — Collection Search | Canada · Federal | Art collection | Explore the national art collection online with high-resolution images | https://www.gallery.ca/collection |
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
| Royal Canadian Mint — Coin Shop and History | Canada · Crown Corp | Cultural | Explore Canadian coinage, commemorative releases, and numismatic history | https://www.mint.ca/ |
| Canada's Sports Hall of Fame | Canada · Agency | Museum | Canadian athlete biographies, sport history, and educational content | https://sportshall.ca/ |
| Canadiana.ca — Heritage Digital Collection | Canada · Agency | Archive | Digitized historical Canadian publications, directories, and government documents | https://www.canadiana.ca/ |
| Hockey Hall of Fame | Canada · Agency | Museum | Inductee biographies, hockey history, and digital exhibits from the Hockey Hall of Fame | https://www.hhof.com/ |
| National Centre for Truth and Reconciliation — Archives | Canada · Agency | Archive | Residential school records, survivor statements, and research for reconciliation | https://nctr.ca/records/ |

### British Columbia

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Royal BC Museum — Collections | British Columbia · Agency | Museum | Natural and human history collections and learning portal for BC | https://royalbcmuseum.bc.ca/ |
| Vancouver Heritage Register — Vancouver Heritage Database | Vancouver · Municipal | Heritage register | Search Vancouver's heritage database — designated A, B, C heritage resources and potential heritage sites | https://vancouver.ca/home-property-development/heritage-register.aspx |

### Alberta

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Glenbow Museum — Collections Online | Alberta · Agency | Museum | Western Canadian art, Indigenous collections, and historical photos from Glenbow | https://www.glenbow.org/collections/ |

### Ontario

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Royal Ontario Museum — Collections | Ontario · Agency | Museum | Search the ROM's online collections of natural history, art, and world cultures | https://collections.rom.on.ca/ |
| Teranet — Ontario Land Registry | Ontario · Agency | Land data | Property search and historical title data for Ontario | https://www.teranet.ca/ |
| Mississauga Heritage — Heritage Register | Mississauga · Municipal | Heritage register | Mississauga's heritage register of designated built heritage properties and cultural heritage landscapes | https://www.mississauga.ca/heritage/ |
| Toronto Heritage Register — Built Heritage | Toronto · Municipal | Heritage register | Searchable list of Toronto's designated and listed heritage properties — built heritage, cultural landscapes, and archaeological sites | https://www.toronto.ca/city-government/data-research-maps/toronto-parks-trees-green-space/heritage-register/ |
| Toronto Open Data landing page | Toronto · Municipal | Open data hub | Portal page with datasets, gallery, and city data access | https://www.toronto.ca/city-government/data-research-maps/open-data/open-data-portal/ |
| Toronto Public Library — Digital Archive | Toronto · Municipal | Archive | Toronto's digital heritage archive with photos, maps, and historical records | https://digitalarchive.tpl.ca/ |

### Quebec

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| BAnQ — Bibliothèque et Archives nationales du Québec | Quebec · Provincial | Archive | Quebec's national library and archives with digitized newspapers, records, and genealogy | https://www.banq.qc.ca/ |
| Montreal Open Data showcase | Montreal · Municipal | App gallery | Gallery of applications built from Montreal open data | https://donnees.montreal.ca/en/showcase |

## 🚨 Emergency, Safety & Alerts

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Alert Ready — National Public Alerting System | Canada · Federal | Alerts | Public alerts for life-threatening weather, Amber Alerts, and emergencies delivered via TV, radio, LTE | https://www.alertready.ca/ |
| Canadian Centre for Cyber Security | Canada · Federal | Cyber security | Government of Canada lead for cyber security, providing guidance, tools, incident reporting, and threat intelligence for citizens and organizations | https://cyber.gc.ca/en |
| Canadian Nuclear Safety Commission | Canada · Federal | Regulator | Federal regulator of nuclear power and materials in Canada, overseeing licensing, compliance, and public health and safety around nuclear facilities | https://www.cnsc-ccsn.gc.ca/eng/ |
| Earthquakes Canada | Canada · Federal | Live map / science tool | Near-real-time earthquake tracking and event data | https://earthquakescanada.nrcan.gc.ca/ |
| Health Canada — Canadian Cannabis Survey | Canada · Federal | Data | Annual cannabis use, perceptions, and harms reported by Canadians | https://www.canada.ca/en/health-canada/services/drugs-medication/cannabis/research-data.html |
| National Wildland Fire Information System | Canada · Federal | Wildfire map | Wildfire status and fire information across Canada | https://cwfis.cfs.nrcan.gc.ca/ |
| Public Safety Canada — National Emergency Resources | Canada · Federal | Guide | Emergency preparedness guides, 72-hour kits, and hazard-specific response info | https://www.getprepared.gc.ca/ |
| RCMP — Crime Mapping and Statistics | Canada · Federal | Data | RCMP crime data, police reported statistics, and operational updates | https://www.rcmp-grc.gc.ca/en/statistics |
| Recalls and Safety Alerts | Canada · Federal | Alert database | Useful public alert tool for recalls and safety notices | https://recalls-rappels.canada.ca/ |
| Canadian Centre for Occupational Health and Safety (CCOHS) | Canada · Agency | Resources | Workplace safety guides, OSH Answers fact sheets, and e-learning | https://www.ccohs.ca/ |

### Ontario

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Ontario Wildfire Map (Interactive) | Ontario · Provincial | Wildfire map | Ontario's interactive fire map with fire size, status, and restricted fire zones | https://www.gisapplication.lrc.gov.on.ca/ForestFireInformationMap/ |
| Toronto Police — Crime Dashboard | Toronto · Municipal | Dashboard | Public Safety Data Portal — major crime incidents, shootings, traffic collisions in Toronto | https://data.torontopolice.on.ca/ |

## ⚖️ Justice, Courts & Legal

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Federal Court of Canada | Canada · Federal | Court | Federal Court decisions, forms, rules, and case filings | https://www.fct-cf.gc.ca/en/home |
| Justice Canada — Laws of Canada | Canada · Federal | Legislation | Consolidated federal statutes and regulations — the Justice Laws Website | https://laws-lois.justice.gc.ca/ |
| Public Prosecution Service of Canada | Canada · Federal | Agency | Federal prosecution policies, annual reports, and case information | https://www.ppsc-sppc.gc.ca/ |
| Supreme Court of Canada — Judgments | Canada · Federal | Decisions | Search SCC decisions, docket, hearings, and leave-to-appeal rulings | https://www.scc-csc.ca/ |
| Tax Court of Canada | Canada · Federal | Court | Tax Court decisions, procedures, and appeal filings | https://www.tcc-cci.gc.ca/ |
| CanLII — Canadian Legal Information Institute | Canada · Agency | Case law | Free Canadian legislation and case law search across all federal, provincial, and tribunal levels | https://www.canlii.org/ |

### British Columbia

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Legal Services Society — Legal Aid BC | British Columbia · Provincial | Legal aid | Legal Aid BC — eligibility, duty counsel, and free legal resources for British Columbians | https://legalaid.bc.ca/ |

### Alberta

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Legal Aid Alberta | Alberta · Provincial | Legal aid | Alberta legal aid eligibility, application, and duty counsel information | https://www.legalaid.ab.ca/ |

### Ontario

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Courts of Ontario — Case Search | Ontario · Federal | Case search | Search for decisions from the Court of Appeal, Superior Court, and Ontario Court of Justice | https://www.ontariocourts.ca/ |
| Ontario Court of Appeal — Decisions | Ontario · Federal | Decisions | Published decisions from Ontario's highest provincial court | https://www.ontariocourts.ca/coa/ |
| Ontario Human Rights Tribunal — Decisions | Ontario · Federal | Decisions | Published decisions from the Human Rights Tribunal of Ontario | https://tribunalsontario.ca/hrto |
| Ontario Rental Housing Tribunal — Rent Increases | Ontario · Agency | Rent tool | Approved rent increase guidelines and maximum amounts for Ontario | https://www.ontario.ca/page/rent-increase-guideline |
| Legal Aid Ontario | Ontario · Provincial | Legal aid | Ontario legal aid eligibility checker, duty counsel, and legal information | https://www.legalaid.on.ca/ |
| Ontario Courts Public Portal | Ontario · Provincial | Court portal | Ontario's digital court portal for filing documents, accessing case information, and managing court matters online. | https://www.ontario.ca/page/ontario-courts-public-portal |
| Tribunals Ontario — Online Hearing Portal | Ontario · Provincial | Tribunal portal | File and manage matters across LTB, SBT, HRTO, LAT and other Tribunals Ontario bodies | https://tribunalsontario.ca/ |

### Quebec

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Commission des services juridiques (Quebec) | Quebec · Provincial | Legal aid | Quebec legal aid eligibility and regional office finder | https://www.csj.qc.ca/ |

## 🛡️ Consumer Protection & Privacy

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Canadian Anti-Fraud Centre | Canada · Federal | Reporting | Report fraud and scams to the national CAFC and browse current scam trends | https://www.antifraudcentre-centreantifraude.ca/ |
| Competition Bureau Canada — Corporate Search | Canada · Federal | Corporate search | Search for registered businesses, corporate histories, and merger information | https://www.competitionbureau.gc.ca/eng/mergers-and-acquisitions |
| National Do Not Call List | Canada · Agency | Service | Register Canadian phone numbers to reduce unwanted telemarketing calls | https://www.lnnte-dncl.gc.ca/ |
| Office of the Privacy Commissioner of Canada | Canada · Agency | Regulator | Privacy complaints, PIPEDA guidance, and breach reporting for Canadians | https://www.priv.gc.ca/ |
| Spam Reporting Centre — Fight Spam | Canada · Agency | Reporting | Report spam, phishing, and malicious electronic messages under CASL | https://www.fightspam.gc.ca/ |

### British Columbia

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Consumer Protection BC | British Columbia · Provincial | Regulator | BC's consumer protection regulator — complaint filing and industry information | https://www.consumerprotectionbc.ca/ |
| Office of the Information and Privacy Commissioner of BC | British Columbia · Provincial | Regulator | BC's privacy regulator — complaint filing, FIPPA/PIPA decisions, and reports | https://www.oipc.bc.ca/ |

### Alberta

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Consumer Protection Alberta — Service Alberta | Alberta · Provincial | Resources | Alberta consumer protection information, complaints, and business licensing | https://www.alberta.ca/consumer-protection |

### Ontario

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Consumer Protection Ontario — Tools | Ontario · Federal | Calculators | Find, compare, and understand consumer protections including car loans, leases, and contracts | https://www.ontario.ca/page/consumer-protection-ontario |
| Information and Privacy Commissioner of Ontario | Ontario · Provincial | Regulator | Ontario's privacy and FOI oversight — complaint process, decisions, and guidance | https://www.ipc.on.ca/ |

### Quebec

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Commission d'accès à l'information du Québec | Quebec · Provincial | Regulator | Quebec's access to information and privacy commission — decisions, complaints, guidance | https://www.cai.gouv.qc.ca/english/ |
| Office de la protection du consommateur (Quebec) | Quebec · Provincial | Regulator | Quebec's consumer protection office — complaint filing, contract guides, and business records | https://www.opc.gouv.qc.ca/en/ |

## 🪶 Indigenous Services & Treaties

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Crown-Indigenous Relations — Specific Claims | Canada · Federal | Database | Search specific claim status, agreements, and modern treaty progress | https://www.rcaanc-cirnac.gc.ca/eng/1100100030291/1539609517566 |
| Indigenous Services Canada — Indian Register | Canada · Federal | Registry | Apply for Indian status and Secure Certificate of Indian Status (SCIS) | https://www.sac-isc.gc.ca/eng/1100100032424/1572457769548 |
| Indigenous Services Canada — Jordan's Principle | Canada · Federal | Program | Jordan's Principle substantive-equality funding for First Nations children | https://www.sac-isc.gc.ca/eng/1568396296543/1582575228610 |
| Assembly of First Nations | Canada · Agency | Organization | National advocacy organization of First Nations chiefs — resolutions, research, and programs | https://afn.ca/ |
| First Nations Information Governance Centre | Canada · Agency | Data | First Nations-led data governance, surveys, and research with the OCAP principles | https://fnigc.ca/ |
| Inuit Tapiriit Kanatami | Canada · Agency | Organization | National Inuit representational organization advancing Inuit rights and interests | https://www.itk.ca/ |
| Métis National Council | Canada · Agency | Organization | National representative body for the Métis Nation — policies, programs, and registries | https://www2.metisnation.ca/ |
| Pauktuutit Inuit Women of Canada | Canada · Agency | Organization | National voice for Inuit women — programs, research, and safety resources | https://www.pauktuutit.ca/ |

## 🎖️ Veterans & Military

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Canadian Armed Forces — Forces.ca Careers | Canada · Federal | Careers | CAF occupations, enrolment steps, and serving-member resources | https://forces.ca/ |
| Canadian Forces Morale and Welfare Services | Canada · Federal | Services | CFMWS programs, family services, CANEX discounts, and SISIP financial services | https://www.cfmws.ca/ |
| Canadian Military History — Directorate of History and Heritage | Canada · Federal | Archive | Canadian Forces history, regiments, and heritage publications | https://www.canada.ca/en/department-national-defence/services/military-history.html |
| Veterans Affairs Canada — Benefits Navigator | Canada · Federal | Finder | Interactive guide to VAC benefits based on your service background and needs | https://www.veterans.gc.ca/en/benefits-navigator |
| Veterans Affairs Canada — My VAC Account | Canada · Federal | Secure portal | Secure portal for veterans to apply for benefits, track claims, and manage services | https://www.veterans.gc.ca/en/contact-us/my-vac-account |
| War Memorials in Canada | Canada · Federal | Searchable database | Searchable database of Canadian war memorials, cenotaphs, and commemorative monuments | https://www.veterans.gc.ca/eng/remembrance/memorials |

## 🗳️ Elections & Democracy

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Parlinfo — Canadian Parliamentary Database | Canada · Federal | Database | Historical and current data on parliamentarians, parties, cabinet, and elections | https://lop.parl.ca/ParlInfo/ |
| Senate of Canada | Canada · Federal | Legislative | Senate chamber business, committee reports, senators' biographies, and votes | https://sencanada.ca/ |
| Canada Gazette — Government Consultations | Canada · Agency | Consultations | Browse active government consultations and provide feedback | https://gazette.gc.ca/ |
| Elections Canada — Electoral Districts Map | Canada · Agency | Electoral map | Interactive map of federal electoral district boundaries | https://www.elections.ca/content2.aspx |
| Elections Canada — Results Tool | Canada · Agency | Results | Official past federal election results by riding, with poll-by-poll maps | https://www.elections.ca/content.aspx?section=res&dir=cir/list&document=index&lang=e |
| Elections Canada — Voter Information Service | Canada · Agency | Voter tool | Find your polling station, candidates, and election results | https://www.elections.ca/content.aspx |

### British Columbia

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Elections BC | British Columbia · Provincial | Agency | BC electoral information, voter registration, and financial disclosure search | https://elections.bc.ca/ |
| Vancouver Open Data Portal | Vancouver · Municipal | Open data portal | High-quality datasets and APIs for civic use | https://opendata.vancouver.ca/ |

### Alberta

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Elections Alberta | Alberta · Provincial | Agency | Alberta provincial election administration, voter lookup, and results | https://www.elections.ab.ca/ |

### Saskatchewan

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Elections Saskatchewan | Saskatchewan · Provincial | Agency | Saskatchewan provincial elections information and voter services | https://www.elections.sk.ca/ |

### Manitoba

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Elections Manitoba | Manitoba · Provincial | Agency | Manitoba provincial elections information, candidates, and results | https://www.electionsmanitoba.ca/ |

### Ontario

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Ontario Elections — Find Your Electoral District | Ontario · Agency | Voter tool | Find your provincial electoral district and candidates | https://www.ontario.ca/laws |
| Ontario Legislative Assembly — Hansard | Ontario · Agency | Legislative | Searchable record of debates and proceedings in the Ontario Legislature | https://www.ola.org/en |
| Brampton Open Data | Brampton · Municipal | Open data portal | Civic data portal with mapping and city datasets | https://geohub.brampton.ca/ |
| London Open Data | London · Municipal | Open data | City of London's open data portal — datasets, maps, and civic information for southwestern Ontario's largest city | https://london.ca/open-data |
| Civic Tech Toronto | Toronto · Municipal | Civic tech | Toronto-based civic tech community working on projects that improve government services, transparency, and democratic participation. | https://civictech.ca/ |
| Windsor Open Data | Windsor · Municipal | Open data | City of Windsor's open data portal — datasets, maps, and civic information for Canada's southernmost major city | https://www.citywindsor.ca/opendata |

### Quebec

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Élections Québec | Quebec · Provincial | Agency | Quebec electoral commission — voter info, results, and financial transparency | https://www.electionsquebec.qc.ca/ |
| Quebec National Assembly — Hansard | Quebec · Provincial | Hansard | Quebec National Assembly debates, committee proceedings, and bill tracking | https://www.assnat.qc.ca/en/travaux-parlementaires/journaux-debats.html |
| Gatineau Open Data | Quebec · Municipal | Open data | Gatineau's open data portal — municipal datasets, maps, and civic information for the National Capital Region | https://www.gatineau.ca/donneesouvertes/ |

### Atlantic Canada (NB, NS, PE, NL)

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Civic Tech Fredericton | New Brunswick · Municipal | Civic tech | Fredericton-based civic tech community working on projects that improve government services, transparency, and democratic participation. | https://www.civictechfredericton.com/ |

## 📡 Telecommunications & Digital

### Federal / National

| Name | Jurisdiction · Level | Type | Description | URL |
|---|---|---|---|---|
| Canadian Digital Service | Canada · Federal | Agency | CDS — builds and supports digital government services across federal departments | https://digital.canada.ca/ |
| CRTC — Broadband Internet Service Complaints | Canada · Federal | Complaint | Submit complaints about broadband, wireless, or TV providers via the CCTS | https://www.ccts-cprst.ca/ |
| CRTC — Communications Monitoring Report | Canada · Federal | Report | Annual data on Canadian broadcasting, wireless, and internet markets | https://crtc.gc.ca/eng/publications/reports/policymonitoring/2023/index.htm |
| CRTC — National Broadband Map | Canada · Federal | Map | Interactive map showing internet speeds and coverage across Canada | https://crtc.gc.ca/eng/internet/internet.htm |
| ISED — Spectrum Management System | Canada · Federal | Licensing | Look up radio spectrum licence holders and technical info across Canada | https://sms-sgs.ic.gc.ca/ |

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for how to add new resources. In short: add to `data/resources.json`, run `node scripts/validate.js`, then `node scripts/generate-readme.js` before opening a PR.

## License

[MIT](LICENSE)
