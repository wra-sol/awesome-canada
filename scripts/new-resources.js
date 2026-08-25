/**
 * New resources to append to data/resources.json.
 * Each entry follows the schema (name, level, jurisdiction, category, type,
 * description, url, tags). Categories come from scripts/categories.js.
 *
 * To add new resources:
 *   1. Add entries to this array
 *   2. Run: node scripts/migrate.js
 *   3. Run: node scripts/generate-readme.js
 *   4. Commit and push
 *
 * Resources already in data/resources.json by URL are automatically skipped.
 */
module.exports = [
  {
    "name": "Office of the Auditor General of Canada",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "budget",
    "type": "Legislative audit",
    "description": "Independent audits of federal government operations — performance reports, financial audits, and environment commissioner reports",
    "url": "https://www.oag-bvg.gc.ca/",
    "tags": [
      "audit",
      "accountability",
      "spending"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "IRCC — Check Application Status",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "immigration",
    "type": "Status tracker",
    "description": "Check the status of citizenship, permanent residence, and temporary visa applications online",
    "url": "https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-status.html",
    "tags": [
      "immigration",
      "status",
      "application"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "Canadian Museum of History — Collection",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "culture",
    "type": "Museum",
    "description": "Online collection and virtual exhibitions from Canada's national museum of human history",
    "url": "https://www.historymuseum.ca/",
    "tags": [
      "museum",
      "history",
      "collection"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "Ontario e-Laws",
    "level": "Provincial",
    "jurisdiction": "Ontario",
    "category": "justice",
    "type": "Statutes database",
    "description": "Official consolidated statutes and regulations of Ontario, searchable and current to the day",
    "url": "https://www.ontario.ca/laws",
    "tags": [
      "laws",
      "statutes",
      "regulations"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "BC Laws",
    "level": "Provincial",
    "jurisdiction": "British Columbia",
    "category": "justice",
    "type": "Statutes database",
    "description": "Official consolidated statutes and regulations of British Columbia, free to search and cite",
    "url": "https://www.bclaws.gov.bc.ca/",
    "tags": [
      "laws",
      "statutes",
      "regulations"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "Alberta King's Printer — Laws Online",
    "level": "Provincial",
    "jurisdiction": "Alberta",
    "category": "justice",
    "type": "Statutes database",
    "description": "Official source for Alberta's statutes, regulations, and orders in council",
    "url": "https://kings-printer.alberta.ca/",
    "tags": [
      "laws",
      "statutes",
      "regulations"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "New Brunswick — Acts and Regulations",
    "level": "Provincial",
    "jurisdiction": "New Brunswick",
    "category": "justice",
    "type": "Statutes database",
    "description": "Consolidated acts and regulations of New Brunswick in both official languages",
    "url": "https://laws.gnb.ca/",
    "tags": [
      "laws",
      "statutes",
      "bilingual"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "Saskatchewan Publications Centre",
    "level": "Provincial",
    "jurisdiction": "Saskatchewan",
    "category": "justice",
    "type": "Statutes database",
    "description": "Freelaw access to Saskatchewan's statutes, regulations, and official government publications",
    "url": "https://publications.saskatchewan.ca/",
    "tags": [
      "laws",
      "publications",
      "regulations"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "Courts of British Columbia — Judgments",
    "level": "Provincial",
    "jurisdiction": "British Columbia",
    "category": "justice",
    "type": "Court decisions",
    "description": "Judgments and hearing lists from the BC Court of Appeal, Supreme Court, and Provincial Court",
    "url": "https://www.bccourts.ca/",
    "tags": [
      "courts",
      "judgments",
      "decisions"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "Alberta Courts",
    "level": "Provincial",
    "jurisdiction": "Alberta",
    "category": "justice",
    "type": "Court portal",
    "description": "Court of Appeal, Court of King's Bench, and Alberta Court of Justice — sittings, decisions, and filing information",
    "url": "https://albertacourts.ca/",
    "tags": [
      "courts",
      "judgments",
      "filings"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "Saskatchewan Law Courts",
    "level": "Provincial",
    "jurisdiction": "Saskatchewan",
    "category": "justice",
    "type": "Court portal",
    "description": "Saskatchewan's courts — daily dockets, judgments, and self-represented litigant resources",
    "url": "https://sasklawcourts.ca/",
    "tags": [
      "courts",
      "dockets",
      "judgments"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "Manitoba Courts",
    "level": "Provincial",
    "jurisdiction": "Manitoba",
    "category": "justice",
    "type": "Court portal",
    "description": "Manitoba Court of Appeal, King's Bench, and Provincial Court — hearing schedules, decisions, and registry contacts",
    "url": "https://www.manitobacourts.mb.ca/",
    "tags": [
      "courts",
      "hearings",
      "decisions"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "Courts of Nova Scotia",
    "level": "Provincial",
    "jurisdiction": "Nova Scotia",
    "category": "justice",
    "type": "Court portal",
    "description": "Nova Scotia's courts — decisions database, virtual court information, and self-help guides",
    "url": "https://www.courts.ns.ca/",
    "tags": [
      "courts",
      "decisions",
      "self-help"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "Auditor General of Ontario",
    "level": "Provincial",
    "jurisdiction": "Ontario",
    "category": "budget",
    "type": "Legislative audit",
    "description": "Value-for-money and financial audits of Ontario ministries, agencies, and the broader public sector",
    "url": "https://www.auditor.on.ca/",
    "tags": [
      "audit",
      "accountability",
      "spending"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "Auditor General of British Columbia",
    "level": "Provincial",
    "jurisdiction": "British Columbia",
    "category": "budget",
    "type": "Legislative audit",
    "description": "Independent audits and reports on how well BC's government manages public resources",
    "url": "https://www.bcauditor.com/",
    "tags": [
      "audit",
      "accountability",
      "spending"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "Auditor General of Alberta",
    "level": "Provincial",
    "jurisdiction": "Alberta",
    "category": "budget",
    "type": "Legislative audit",
    "description": "Independent assurance on Alberta government financial reporting and program performance",
    "url": "https://www.oag.ab.ca/",
    "tags": [
      "audit",
      "accountability",
      "reports"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "Vérificateur général du Québec",
    "level": "Provincial",
    "jurisdiction": "Quebec",
    "category": "budget",
    "type": "Legislative audit",
    "description": "Independent audits of Québec government departments, agencies, and Crown enterprises",
    "url": "https://www.vgq.qc.ca/",
    "tags": [
      "audit",
      "accountability",
      "spending"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "Auditor General of Manitoba",
    "level": "Provincial",
    "jurisdiction": "Manitoba",
    "category": "budget",
    "type": "Legislative audit",
    "description": "Independent audit reports on Manitoba government operations and public accounts",
    "url": "https://www.oag.mb.ca/",
    "tags": [
      "audit",
      "accountability",
      "reports"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "Provincial Auditor of Saskatchewan",
    "level": "Provincial",
    "jurisdiction": "Saskatchewan",
    "category": "budget",
    "type": "Legislative audit",
    "description": "Independent audits of Saskatchewan government ministries, Crown corporations, and agencies",
    "url": "https://auditor.sk.ca/",
    "tags": [
      "audit",
      "accountability",
      "reports"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "Auditor General of Nova Scotia",
    "level": "Provincial",
    "jurisdiction": "Nova Scotia",
    "category": "budget",
    "type": "Legislative audit",
    "description": "Performance and financial audits of Nova Scotia government departments and agencies",
    "url": "https://oag-ns.ca/",
    "tags": [
      "audit",
      "accountability",
      "reports"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "Auditor General of New Brunswick",
    "level": "Provincial",
    "jurisdiction": "New Brunswick",
    "category": "budget",
    "type": "Legislative audit",
    "description": "Independent audits and special reports on New Brunswick government programs and spending",
    "url": "https://www.agnb-vgnb.ca/",
    "tags": [
      "audit",
      "accountability",
      "reports"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "Ombudsman Ontario",
    "level": "Provincial",
    "jurisdiction": "Ontario",
    "category": "consumer",
    "type": "Ombudsman",
    "description": "Independent office investigating complaints about Ontario government services, municipalities, universities, and school boards",
    "url": "https://www.ombudsman.on.ca/",
    "tags": [
      "complaints",
      "oversight",
      "accountability"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "BC Ombudsperson",
    "level": "Provincial",
    "jurisdiction": "British Columbia",
    "category": "consumer",
    "type": "Ombudsman",
    "description": "Investigates complaints of unfair treatment by BC public bodies and recommends fixes",
    "url": "https://bcombudsperson.ca/",
    "tags": [
      "complaints",
      "fairness",
      "oversight"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "Protecteur du citoyen (Québec)",
    "level": "Provincial",
    "jurisdiction": "Quebec",
    "category": "consumer",
    "type": "Ombudsman",
    "description": "Québec's ombudsman — handles complaints about provincial ministries, agencies, and the health network",
    "url": "https://protecteurducitoyen.qc.ca/",
    "tags": [
      "complaints",
      "oversight",
      "citizens"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "Alberta Ombudsman",
    "level": "Provincial",
    "jurisdiction": "Alberta",
    "category": "consumer",
    "type": "Ombudsman",
    "description": "Investigates complaints of unfair treatment by Alberta government authorities and designated professional organizations",
    "url": "https://www.ombudsman.ab.ca/",
    "tags": [
      "complaints",
      "fairness",
      "oversight"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "Ombudsman Saskatchewan",
    "level": "Provincial",
    "jurisdiction": "Saskatchewan",
    "category": "consumer",
    "type": "Ombudsman",
    "description": "Takes complaints about Saskatchewan government ministries, agencies, Crown corporations, and municipal councils",
    "url": "https://ombudsman.sk.ca/",
    "tags": [
      "complaints",
      "oversight",
      "fairness"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "Manitoba Ombudsman",
    "level": "Provincial",
    "jurisdiction": "Manitoba",
    "category": "consumer",
    "type": "Ombudsman",
    "description": "Independent oversight of Manitoba government fairness, privacy, and whistleblower protection",
    "url": "https://www.ombudsman.mb.ca/",
    "tags": [
      "complaints",
      "privacy",
      "oversight"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "OIPC Alberta",
    "level": "Provincial",
    "jurisdiction": "Alberta",
    "category": "consumer",
    "type": "Regulator",
    "description": "Alberta's Information and Privacy Commissioner — access to information reviews and privacy breach reports",
    "url": "https://oipc.ab.ca/",
    "tags": [
      "privacy",
      "foip",
      "access to information"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "OIPC Saskatchewan",
    "level": "Provincial",
    "jurisdiction": "Saskatchewan",
    "category": "consumer",
    "type": "Regulator",
    "description": "Saskatchewan's Information and Privacy Commissioner — reviews, reports, and privacy guidance",
    "url": "https://oipc.sk.ca/",
    "tags": [
      "privacy",
      "access to information",
      "oversight"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "Health811 Ontario",
    "level": "Provincial",
    "jurisdiction": "Ontario",
    "category": "health",
    "type": "Health service",
    "description": "Ontario's 811 service — chat or call a registered nurse day or night, and find health services near you",
    "url": "https://health811.ontario.ca/",
    "tags": [
      "811",
      "nurse line",
      "health advice"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "Info-Santé 811 (Québec)",
    "level": "Provincial",
    "jurisdiction": "Quebec",
    "category": "health",
    "type": "Health service",
    "description": "Québec's free 811 telephone consultation service for non-urgent health questions, staffed by nurses",
    "url": "https://www.quebec.ca/en/health/finding-a-resource/info-sante-811",
    "tags": [
      "811",
      "nurse line",
      "health advice"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "Nova Scotia 811",
    "level": "Provincial",
    "jurisdiction": "Nova Scotia",
    "category": "health",
    "type": "Health service",
    "description": "Non-emergency health information and advice from registered nurses, by phone or online in Nova Scotia",
    "url": "https://811.novascotia.ca/",
    "tags": [
      "811",
      "nurse line",
      "health advice"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "Ontario Parks — Reservations",
    "level": "Provincial",
    "jurisdiction": "Ontario",
    "category": "parks",
    "type": "Reservation system",
    "description": "Book campsites, roofed accommodations, and backcountry permits across Ontario's provincial parks",
    "url": "https://reservations.ontarioparks.ca/",
    "tags": [
      "camping",
      "reservations",
      "provincial parks"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "BC Parks — Camping Reservations",
    "level": "Provincial",
    "jurisdiction": "British Columbia",
    "category": "parks",
    "type": "Reservation system",
    "description": "Reserve frontcountry campsites, backcountry permits, and group sites in BC's provincial parks",
    "url": "https://camping.bcparks.ca/",
    "tags": [
      "camping",
      "reservations",
      "provincial parks"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "Alberta Parks — Reservations",
    "level": "Provincial",
    "jurisdiction": "Alberta",
    "category": "parks",
    "type": "Reservation system",
    "description": "Book campsites and comfort camping across Alberta's provincial parks and recreation areas",
    "url": "https://reserve.albertaparks.ca/",
    "tags": [
      "camping",
      "reservations",
      "provincial parks"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "Nova Scotia Provincial Parks",
    "level": "Provincial",
    "jurisdiction": "Nova Scotia",
    "category": "parks",
    "type": "Parks portal",
    "description": "Find and book Nova Scotia's provincial parks, campgrounds, and beaches",
    "url": "https://parks.novascotia.ca/",
    "tags": [
      "parks",
      "camping",
      "reservations"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "Québec — Student Financial Assistance (AFE)",
    "level": "Provincial",
    "jurisdiction": "Quebec",
    "category": "education",
    "type": "Student aid",
    "description": "Québec's loans and bursaries program — eligibility simulators and online application",
    "url": "https://www.quebec.ca/en/education/student-financial-assistance",
    "tags": [
      "student loans",
      "bursaries",
      "education funding"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "Saskatchewan Student Loans",
    "level": "Provincial",
    "jurisdiction": "Saskatchewan",
    "category": "education",
    "type": "Student aid",
    "description": "Apply for Saskatchewan student loans and grants, and manage repayment online",
    "url": "https://www.saskatchewan.ca/residents/education-and-learning/student-loans",
    "tags": [
      "student loans",
      "grants",
      "education funding"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "Nova Scotia Student Assistance",
    "level": "Provincial",
    "jurisdiction": "Nova Scotia",
    "category": "education",
    "type": "Student aid",
    "description": "Student loans, grants, and repayment assistance for Nova Scotia post-secondary students",
    "url": "https://novascotia.ca/studentassistance/",
    "tags": [
      "student loans",
      "grants",
      "education funding"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "WSIB Ontario",
    "level": "Provincial",
    "jurisdiction": "Ontario",
    "category": "employment",
    "type": "Regulator",
    "description": "Ontario's workplace injury insurer — file claims, view claim status, and access return-to-work services online",
    "url": "https://www.wsib.ca/",
    "tags": [
      "workers compensation",
      "claims",
      "workplace safety"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "Saskatchewan Workers' Compensation Board",
    "level": "Provincial",
    "jurisdiction": "Saskatchewan",
    "category": "employment",
    "type": "Regulator",
    "description": "File and track workplace injury claims and employer accounts with Saskatchewan's WCB",
    "url": "https://www.wcbsask.com/",
    "tags": [
      "workers compensation",
      "claims",
      "workplace safety"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "WCB Manitoba",
    "level": "Provincial",
    "jurisdiction": "Manitoba",
    "category": "employment",
    "type": "Regulator",
    "description": "Manitoba's workplace injury insurance — online claims, clearances, and employer services",
    "url": "https://www.wcb.mb.ca/",
    "tags": [
      "workers compensation",
      "claims",
      "workplace safety"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "WorkSafeNB",
    "level": "Provincial",
    "jurisdiction": "New Brunswick",
    "category": "employment",
    "type": "Regulator",
    "description": "New Brunswick's workplace health, safety, and compensation services — claims and employer accounts online",
    "url": "https://www.worksafenb.ca/",
    "tags": [
      "workers compensation",
      "claims",
      "workplace safety"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "WCB Nova Scotia",
    "level": "Provincial",
    "jurisdiction": "Nova Scotia",
    "category": "employment",
    "type": "Regulator",
    "description": "Workplace injury insurance for Nova Scotia — online claim services for workers and employers",
    "url": "https://www.wcb.ns.ca/",
    "tags": [
      "workers compensation",
      "claims",
      "workplace safety"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "WCB Prince Edward Island",
    "level": "Provincial",
    "jurisdiction": "PEI",
    "category": "employment",
    "type": "Regulator",
    "description": "Workers compensation services for PEI — claims, clearances, and workplace safety resources",
    "url": "https://www.wcb.pe.ca/",
    "tags": [
      "workers compensation",
      "claims",
      "workplace safety"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "Legal Aid Saskatchewan",
    "level": "Provincial",
    "jurisdiction": "Saskatchewan",
    "category": "justice",
    "type": "Legal aid",
    "description": "Free legal services in criminal and family matters for eligible Saskatchewan residents",
    "url": "https://legalaid.sk.ca/",
    "tags": [
      "legal aid",
      "justice",
      "family law"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "Legal Aid Manitoba",
    "level": "Provincial",
    "jurisdiction": "Manitoba",
    "category": "justice",
    "type": "Legal aid",
    "description": "Legal help for low-income Manitobans — apply online and find duty counsel services",
    "url": "https://www.legalaid.mb.ca/",
    "tags": [
      "legal aid",
      "justice",
      "apply online"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "Nova Scotia Legal Aid",
    "level": "Provincial",
    "jurisdiction": "Nova Scotia",
    "category": "justice",
    "type": "Legal aid",
    "description": "Free legal help in criminal, family, and social justice matters across Nova Scotia",
    "url": "https://www.nslegalaid.ca/",
    "tags": [
      "legal aid",
      "justice",
      "family law"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "Provincial Archives of Alberta",
    "level": "Provincial",
    "jurisdiction": "Alberta",
    "category": "heritage",
    "type": "Archives",
    "description": "Alberta's provincial archives — search millions of photographs, films, and government and private records",
    "url": "https://provincialarchives.alberta.ca/",
    "tags": [
      "archives",
      "genealogy",
      "records"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "Archives of Manitoba",
    "level": "Provincial",
    "jurisdiction": "Manitoba",
    "category": "heritage",
    "type": "Archives",
    "description": "Manitoba government records and the Hudson's Bay Company Archives — keyword search and online finding aids",
    "url": "https://www.gov.mb.ca/chc/archives/",
    "tags": [
      "archives",
      "hbca",
      "records"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "Provincial Archives of New Brunswick",
    "level": "Provincial",
    "jurisdiction": "New Brunswick",
    "category": "heritage",
    "type": "Archives",
    "description": "Searchable genealogical databases, land petitions, and historical images from New Brunswick's archives",
    "url": "https://archives.gnb.ca/",
    "tags": [
      "archives",
      "genealogy",
      "records"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "The Rooms (Newfoundland and Labrador)",
    "level": "Provincial",
    "jurisdiction": "Newfoundland and Labrador",
    "category": "culture",
    "type": "Museum",
    "description": "Newfoundland and Labrador's provincial museum, art gallery, and archives — collections and online exhibits",
    "url": "https://www.therooms.ca/",
    "tags": [
      "museum",
      "archives",
      "art gallery"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "Royal Alberta Museum",
    "level": "Provincial",
    "jurisdiction": "Alberta",
    "category": "culture",
    "type": "Museum",
    "description": "Western Canada's largest museum — natural and human history of Alberta, with online collections",
    "url": "https://royalalbertamuseum.ca/",
    "tags": [
      "museum",
      "history",
      "collections"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "Royal Saskatchewan Museum",
    "level": "Provincial",
    "jurisdiction": "Saskatchewan",
    "category": "culture",
    "type": "Museum",
    "description": "Saskatchewan's natural history museum — galleries, research, and the T. rex Discovery Centre",
    "url": "https://royalsaskmuseum.ca/",
    "tags": [
      "museum",
      "natural history",
      "paleontology"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "Manitoba TAXcess",
    "level": "Provincial",
    "jurisdiction": "Manitoba",
    "category": "taxes",
    "type": "Tax portal",
    "description": "File and pay Manitoba retail sales tax, payroll tax, and other provincial taxes online",
    "url": "https://taxcess.gov.mb.ca/",
    "tags": [
      "taxes",
      "business",
      "filing"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "MyHealth Alberta",
    "level": "Provincial",
    "jurisdiction": "Alberta",
    "category": "health",
    "type": "Health portal",
    "description": "Alberta's health information portal — symptom checker, care guides, and access to personal health records",
    "url": "https://myhealth.alberta.ca/",
    "tags": [
      "health records",
      "symptom checker",
      "health advice"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "BC Health Gateway",
    "level": "Provincial",
    "jurisdiction": "British Columbia",
    "category": "health",
    "type": "Health portal",
    "description": "Secure access to your BC health records — lab results, medications, immunizations, and hospital visits",
    "url": "https://www.healthgateway.gov.bc.ca/",
    "tags": [
      "health records",
      "lab results",
      "immunizations"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "Legislative Assembly of British Columbia",
    "level": "Agency",
    "jurisdiction": "British Columbia",
    "category": "elections",
    "type": "Legislative",
    "description": "Bills, debates, committee work, and live webcasts from BC's Legislative Assembly",
    "url": "https://www.leg.bc.ca/",
    "tags": [
      "bills",
      "legislature",
      "debates"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "Legislative Assembly of Alberta",
    "level": "Agency",
    "jurisdiction": "Alberta",
    "category": "elections",
    "type": "Legislative",
    "description": "Track Alberta bills, Hansard transcripts, and committee proceedings",
    "url": "https://www.assembly.ab.ca/",
    "tags": [
      "bills",
      "legislature",
      "hansard"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "Yukon Legislative Assembly",
    "level": "Agency",
    "jurisdiction": "Yukon",
    "category": "elections",
    "type": "Legislative",
    "description": "Bills, Hansard, and sitting schedules from Yukon's Legislative Assembly",
    "url": "https://yukonassembly.ca/",
    "tags": [
      "bills",
      "legislature",
      "hansard"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "Legislative Assembly of the Northwest Territories",
    "level": "Agency",
    "jurisdiction": "Northwest Territories",
    "category": "elections",
    "type": "Legislative",
    "description": "Bills, Hansard, and member information from the NWT's consensus government legislature",
    "url": "https://www.ntassembly.ca/",
    "tags": [
      "bills",
      "legislature",
      "consensus government"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "Legislative Assembly of Nunavut",
    "level": "Agency",
    "jurisdiction": "Nunavut",
    "category": "elections",
    "type": "Legislative",
    "description": "Bills, Hansard, and proceedings from Nunavut's Legislative Assembly in English, Inuktitut, and French",
    "url": "https://assembly.nu.ca/",
    "tags": [
      "bills",
      "legislature",
      "inuktitut"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "New Brunswick Museum",
    "level": "Provincial",
    "jurisdiction": "New Brunswick",
    "category": "culture",
    "type": "Museum",
    "description": "New Brunswick's provincial museum — natural science and human history collections and online resources",
    "url": "https://www.nbm-mnb.ca/",
    "tags": [
      "museum",
      "history",
      "collections"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "Manitoba Vital Statistics Branch",
    "level": "Provincial",
    "jurisdiction": "Manitoba",
    "category": "gov-services",
    "type": "Service",
    "description": "Order Manitoba birth, marriage, and death certificates online",
    "url": "https://vitalstats.gov.mb.ca/",
    "tags": [
      "certificates",
      "birth",
      "records"
    ],
    "dateAdded": "2026-08-25"
  },
  {
    "name": "BC Energy Regulator — Data Centre",
    "level": "Provincial",
    "jurisdiction": "British Columbia",
    "category": "open-data",
    "type": "Open data portal",
    "description": "Download 131 regulator datasets on wells, pipelines, facilities and liabilities: Well Index and Rig Activity CSVs, daily shapefile/KML/geodatabase zips, FracFocus disclosures.",
    "url": "https://www.bc-er.ca/data-reports/data-centre/",
    "tags": [
      "energy",
      "oil-and-gas",
      "wells",
      "pipelines",
      "regulatory",
      "csv",
      "shapefile",
      "kml",
      "geodatabase"
    ],
    "dateAdded": "2026-08-24",
    "verified": true
  },
  {
    "name": "Ministry of Environment — BC Species & Ecosystems Explorer",
    "level": "Provincial",
    "jurisdiction": "British Columbia",
    "category": "environment",
    "type": "Lookup tool",
    "description": "Search BC's Conservation Data Centre by name, taxon group, Red/Blue/SARA status, biogeoclimatic unit or drawn/uploaded area to list species and ecosystems at risk.",
    "url": "https://a100.gov.bc.ca/pub/eswp/",
    "tags": [
      "conservation",
      "species-at-risk",
      "wildlife",
      "ecosystems",
      "lookup",
      "gis"
    ],
    "dateAdded": "2026-08-24",
    "verified": true
  },
  {
    "name": "Agricultural Land Commission — ALR Property and Map Finder",
    "level": "Provincial",
    "jurisdiction": "British Columbia",
    "category": "agriculture",
    "type": "Interactive map",
    "description": "Check if any BC parcel is inside the Agricultural Land Reserve by PID or address; view ALC applications, print 1:20k mapsheets, download quarterly ALR shapefiles and KMZ.",
    "url": "https://www.alc.gov.bc.ca/alr-maps/",
    "tags": [
      "alr",
      "land-use",
      "farming",
      "parcels",
      "gis",
      "shapefile",
      "kmz"
    ],
    "dateAdded": "2026-08-24",
    "verified": true
  },
  {
    "name": "BC Coroners Service — Death Statistics & Drug Toxicity Dashboard",
    "level": "Provincial",
    "jurisdiction": "British Columbia",
    "category": "safety",
    "type": "Dashboard",
    "description": "Explore unregulated-drug toxicity deaths by month, age, sex, health authority and drug detected via an interactive dashboard, plus PDF statistical reports on drownings, crashes and more.",
    "url": "https://www2.gov.bc.ca/gov/content/life-events/death/coroners-service/statistical-reports",
    "tags": [
      "coroners",
      "overdose",
      "mortality",
      "statistics",
      "public-health",
      "dashboard",
      "pdf"
    ],
    "dateAdded": "2026-08-24",
    "verified": true
  },
  {
    "name": "Ministry of Jobs, Economy & Trade — Alberta Economic Dashboard",
    "level": "Provincial",
    "jurisdiction": "Alberta",
    "category": "finance",
    "type": "Dashboard",
    "description": "Build custom live dashboards of Alberta GDP, jobs, investment, tourism and trade indicators; search datasets, embed charts, plus regional and major-projects tools.",
    "url": "https://economicdashboard.alberta.ca/",
    "tags": [
      "economic-data",
      "indicators",
      "gdp",
      "employment",
      "interactive",
      "dashboard"
    ],
    "dateAdded": "2026-08-24",
    "verified": true
  },
  {
    "name": "Alberta King's Printer — Laws Online Catalogue",
    "level": "Provincial",
    "jurisdiction": "Alberta",
    "category": "justice",
    "type": "Lookup tool",
    "description": "Search Alberta's official catalogue of acts, regulations and codes by title, chapter number or responsible ministry; most available free as consolidated HTML or PDF.",
    "url": "https://kings-printer.alberta.ca/Laws_Online.cfm",
    "tags": [
      "legislation",
      "statutes",
      "regulations",
      "lookup",
      "pdf",
      "html"
    ],
    "dateAdded": "2026-08-24",
    "verified": true
  },
  {
    "name": "Public Safety & Emergency Services — Alberta Emergency Alert",
    "level": "Provincial",
    "jurisdiction": "Alberta",
    "category": "safety",
    "type": "Alert map & feed",
    "description": "View critical and advisory emergency alerts on a live map, browse a 7-year alert archive, and subscribe province-wide via the official Atom/RSS feed or mobile apps.",
    "url": "https://emergencyalert.alberta.ca/",
    "tags": [
      "emergencies",
      "alerts",
      "disaster",
      "map",
      "rss",
      "atom",
      "public-safety"
    ],
    "dateAdded": "2026-08-24",
    "verified": true
  },
  {
    "name": "Agriculture & Irrigation — Alberta Soil Information Viewer",
    "level": "Provincial",
    "jurisdiction": "Alberta",
    "category": "agriculture",
    "type": "Interactive map",
    "description": "Query AGRASID soil types, land suitability ratings and elevation profiles per quarter section across Alberta's 26-million-hectare farm region; GIS spatial data available.",
    "url": "https://soil.agric.gov.ab.ca/agrasidviewer/",
    "tags": [
      "agriculture",
      "soil",
      "gis",
      "mapping",
      "agronomy",
      "spatial-data"
    ],
    "dateAdded": "2026-08-24",
    "verified": true
  },
  {
    "name": "Treasury Board & Finance — Budget 2026 Documents",
    "level": "Provincial",
    "jurisdiction": "Alberta",
    "category": "budget",
    "type": "Government publications",
    "description": "Download detailed Budget 2026 fiscal plan documents covering revenue, expense, capital plan ($28.3B over 3 years), economic outlook and ministry business plans.",
    "url": "https://www.alberta.ca/budget",
    "tags": [
      "budget",
      "fiscal-plan",
      "government-spending",
      "capital-plan",
      "pdf"
    ],
    "dateAdded": "2026-08-24",
    "verified": true
  },
  {
    "name": "Ministry of Agriculture, Food and Agribusiness — AgMaps",
    "level": "Provincial",
    "jurisdiction": "Ontario",
    "category": "agriculture",
    "type": "Interactive map",
    "description": "Build custom farm maps: assessment-parcel search, aerial imagery, soils, drainage, erosion-potential and CLI layers; annotate and export maps for farm programs.",
    "url": "https://www.lioapplications.lrc.gov.on.ca/AgMaps/Index.html?viewer=AgMaps.AgMaps&locale=en-CA",
    "tags": [
      "agriculture",
      "gis",
      "maps",
      "parcels",
      "soils",
      "imagery"
    ],
    "dateAdded": "2026-08-24",
    "verified": true
  },
  {
    "name": "Ministry of Long-Term Care — LTC Home Inspection Reports",
    "level": "Provincial",
    "jurisdiction": "Ontario",
    "category": "health",
    "type": "Lookup tool",
    "description": "Search any licensed Ontario long-term care home by name or city to view ministry inspection reports, compliance orders, director actions and home profiles.",
    "url": "https://publicreports.mltc.gov.on.ca/",
    "tags": [
      "health",
      "long-term-care",
      "inspections",
      "reports",
      "seniors"
    ],
    "dateAdded": "2026-08-24",
    "verified": true
  },
  {
    "name": "Ministry of Finance — Ontario Population Projections",
    "level": "Provincial",
    "jurisdiction": "Ontario",
    "category": "open-data",
    "type": "Statistical dashboard",
    "description": "Annual projections to 2051 for Ontario, 49 census divisions, health units and regions under reference/low/high scenarios; charts online plus XLSX table downloads.",
    "url": "https://www.ontario.ca/page/ontario-population-projections",
    "tags": [
      "demographics",
      "population",
      "projections",
      "statistics",
      "xlsx"
    ],
    "dateAdded": "2026-08-24",
    "verified": true
  },
  {
    "name": "Ministry of Natural Resources — Hunting Regulations Summary",
    "level": "Provincial",
    "jurisdiction": "Ontario",
    "category": "environment",
    "type": "Regulations guide",
    "description": "Annual hunt-and-trap guide: licences and fees, season dates and rules per game species (moose, deer, bear, turkey), WMU maps and mandatory reporting; full PDF download.",
    "url": "https://www.ontario.ca/document/ontario-hunting-regulations-summary",
    "tags": [
      "hunting",
      "wildlife",
      "regulations",
      "outdoors",
      "pdf"
    ],
    "dateAdded": "2026-08-24",
    "verified": true
  },
  {
    "name": "MSSS — Emergency Room Hourly Occupancy Data",
    "level": "Provincial",
    "jurisdiction": "Quebec",
    "category": "health",
    "type": "Open data feed",
    "description": "Hourly CSV from the provincial ER console: stretcher patients per facility, plus counts waiting 24h/48h+ across every Quebec hospital; refreshed continuously as part of open government.",
    "url": "https://msss.gouv.qc.ca/professionnels/statistiques-donnees-services-sante-services-sociaux/donnees-urgences/",
    "tags": [
      "quebec",
      "health",
      "emergency-room",
      "hospital",
      "wait-times",
      "csv",
      "real-time"
    ],
    "dateAdded": "2026-08-24",
    "verified": true
  },
  {
    "name": "MELCCFP — Indice de la qualité de l'air (IQA)",
    "level": "Provincial",
    "jurisdiction": "Quebec",
    "category": "environment",
    "type": "Dashboard",
    "description": "Live hourly air quality index for ~60 monitoring stations on an interactive ArcGIS map (PM2.5, ozone, NO2, SO2, CO), plus a Power BI dashboard of good/acceptable/bad statistics since 2015.",
    "url": "https://www.iqa.environnement.gouv.qc.ca/contenu/index.asp",
    "tags": [
      "quebec",
      "air-quality",
      "pollution",
      "monitoring",
      "map",
      "dashboard",
      "real-time"
    ],
    "dateAdded": "2026-08-24",
    "verified": true
  },
  {
    "name": "MTMD — Débit de circulation (Traffic Flow Dataset)",
    "level": "Provincial",
    "jurisdiction": "Quebec",
    "category": "transport-roads",
    "type": "Dataset",
    "description": "Estimated traffic volumes (annual, summer and winter average daily flow) for every provincial road segment from 4,500+ count sites. Downloads in CSV, GeoJSON, SHP, GPKG plus WMS/WFS services.",
    "url": "https://www.donneesquebec.ca/recherche/dataset/debit-de-circulation",
    "tags": [
      "quebec",
      "traffic",
      "roads",
      "highways",
      "transport-planning",
      "csv",
      "geojson",
      "shp",
      "wfs"
    ],
    "dateAdded": "2026-08-24",
    "verified": true
  },
  {
    "name": "SOPFEU — Interactive Wildfire Map",
    "level": "Provincial",
    "jurisdiction": "Quebec",
    "category": "safety",
    "type": "Interactive map",
    "description": "Real-time map of active forest fires (size, status, cause), fire danger index by zone, and current burn restrictions across Quebec, with saved locations and email alerts; updated daily at 9am.",
    "url": "https://www.sopfeu.qc.ca/carte/",
    "tags": [
      "quebec",
      "wildfire",
      "forest-fire",
      "fire-danger",
      "restrictions",
      "map",
      "alerts",
      "real-time"
    ],
    "dateAdded": "2026-08-24",
    "verified": true
  },
  {
    "name": "MAMH — Répertoire des municipalités du Québec",
    "level": "Provincial",
    "jurisdiction": "Quebec",
    "category": "open-data",
    "type": "Reference dataset",
    "description": "Daily-updated directory of every Quebec municipality and MRC: contacts, mayors and councillors, population decrees, regional affiliations and inactive organizations. Bulk XML downloads with related reference files.",
    "url": "https://www.donneesquebec.ca/recherche/dataset/repertoire-des-municipalites-du-quebec",
    "tags": [
      "quebec",
      "municipalities",
      "directory",
      "elected-officials",
      "population",
      "xml",
      "reference"
    ],
    "dateAdded": "2026-08-24",
    "verified": true
  },
  {
    "name": "Government of Saskatchewan — GeoHub Open Data",
    "level": "Provincial",
    "jurisdiction": "Saskatchewan",
    "category": "open-data",
    "type": "Open data portal",
    "description": "Explore and download 180+ provincial GIS datasets (boundaries, environment, geoscience, agriculture) as GeoJSON/CSV via ArcGIS REST API or interactive maps.",
    "url": "https://geohub.saskatchewan.ca/",
    "tags": [
      "open-data",
      "gis",
      "geojson",
      "csv",
      "api",
      "maps"
    ],
    "dateAdded": "2026-08-24",
    "verified": true
  },
  {
    "name": "Water Security Agency — Stream Flows & Lake Levels",
    "level": "Provincial",
    "jurisdiction": "Saskatchewan",
    "category": "environment",
    "type": "Dashboard",
    "description": "Check near real-time provisional stream flow and lake levels from hydrometric gauges across 13 watersheds via an interactive web map and per-station hydrographs.",
    "url": "https://wsask.ca/recreation-environment/lakes-and-rivers-overview/stream-flows-and-lake-levels/",
    "tags": [
      "water",
      "hydrology",
      "flood",
      "real-time",
      "map",
      "dashboard"
    ],
    "dateAdded": "2026-08-24",
    "verified": true
  },
  {
    "name": "SaskAlert — Provincial Emergency Alert System",
    "level": "Provincial",
    "jurisdiction": "Saskatchewan",
    "category": "safety",
    "type": "Lookup tool",
    "description": "View current Saskatchewan emergency alerts (wildfires, floods, severe weather) by area and get notification info from the SPSA's official alerting service.",
    "url": "https://www.saskalert.ca/",
    "tags": [
      "emergency",
      "alerts",
      "public-safety",
      "wildfire",
      "map"
    ],
    "dateAdded": "2026-08-24",
    "verified": false
  },
  {
    "name": "Ministry of Parks, Culture and Sport — Searching Saskatchewan Places",
    "level": "Provincial",
    "jurisdiction": "Saskatchewan",
    "category": "heritage",
    "type": "Lookup tool",
    "description": "Search 13,000+ geographic names and historic places designated under The Heritage Property Act by name, type, designation or municipality, with interactive GIS maps.",
    "url": "https://www.saskatchewan.ca/residents/parks-culture-heritage-and-sport/heritage-conservation-and-commemoration/search-for-a-heritage-property",
    "tags": [
      "heritage",
      "historic-places",
      "geographic-names",
      "gis",
      "search"
    ],
    "dateAdded": "2026-08-24",
    "verified": true
  },
  {
    "name": "Ministry of Government Relations — Municipal Directory Search",
    "level": "Provincial",
    "jurisdiction": "Saskatchewan",
    "category": "council",
    "type": "Lookup tool",
    "description": "Look up any Saskatchewan municipality's office address, phone number and list of elected officials — cities, towns, villages and rural municipalities.",
    "url": "https://www.saskatchewan.ca/government/municipal-administration/municipal-directory/search",
    "tags": [
      "municipal",
      "directory",
      "elected-officials",
      "lookup"
    ],
    "dateAdded": "2026-08-24",
    "verified": true
  },
  {
    "name": "Manitoba Education and Early Childhood Learning — Manitoba Child Care Search",
    "level": "Provincial",
    "jurisdiction": "Manitoba",
    "category": "gov-services",
    "type": "Lookup tool",
    "description": "Map-based search of all licensed child care facilities in Manitoba; filter by age group, vacancies, hours, language and non-profit status, then view facility profiles.",
    "url": "https://childcaresearch.gov.mb.ca/",
    "tags": [
      "child-care",
      "lookup-tool",
      "map",
      "vacancies",
      "licensed-facilities",
      "early-learning"
    ],
    "dateAdded": "2026-08-24",
    "verified": true
  },
  {
    "name": "Manitoba Finance — Budget 2026",
    "level": "Provincial",
    "jurisdiction": "Manitoba",
    "category": "budget",
    "type": "Budget documents",
    "description": "Download Manitoba Budget 2026 documents — full budget book, budget speech, Estimates of Expenditure and Budget in Brief (PDF) — with archives of prior provincial budgets.",
    "url": "https://www.gov.mb.ca/budget2026/index.html",
    "tags": [
      "budget",
      "estimates",
      "expenditure",
      "pdf",
      "finance"
    ],
    "dateAdded": "2026-08-24",
    "verified": true
  },
  {
    "name": "Manitoba Agriculture — Crop Markets and Statistics",
    "level": "Provincial",
    "jurisdiction": "Manitoba",
    "category": "agriculture",
    "type": "Statistical datasets",
    "description": "Download Manitoba crop statistics as XLSX: acreage/yield/production 1965–2025, costs of production 1981–2026, grain stocks, deliveries, elevator capacity, plus sector profiles (PDF).",
    "url": "https://www.gov.mb.ca/agriculture/markets-and-statistics/crop-statistics/index.html",
    "tags": [
      "crops",
      "statistics",
      "xlsx",
      "pdf",
      "grain",
      "markets"
    ],
    "dateAdded": "2026-08-24",
    "verified": true
  },
  {
    "name": "Manitoba Transportation and Infrastructure — Spring Road Restrictions Maps",
    "level": "Provincial",
    "jurisdiction": "Manitoba",
    "category": "transport-roads",
    "type": "Map collection",
    "description": "Print current-year spring weight-restriction maps for provincial highways by region (11 zone PDFs plus Winnipeg enlargement) alongside the legal Spring Road Restrictions Order.",
    "url": "https://www.gov.mb.ca/mti/srr/srrmap.html",
    "tags": [
      "highways",
      "trucking",
      "weight-restrictions",
      "maps",
      "pdf"
    ],
    "dateAdded": "2026-08-24",
    "verified": true
  },
  {
    "name": "Department of Environment and Local Government — Air Quality Data Portal",
    "level": "Provincial",
    "jurisdiction": "New Brunswick",
    "category": "environment",
    "type": "Real-time data portal",
    "description": "Query current and historic air quality readings from all provincial and industry-run monitoring stations; hourly updates, charts, Excel export, 3 years of data.",
    "url": "https://www.elgegl.gnb.ca/AirNB/",
    "tags": [
      "air-quality",
      "monitoring",
      "open-data",
      "stations",
      "excel-export"
    ],
    "dateAdded": "2026-08-24",
    "verified": true
  },
  {
    "name": "Department of Natural Resources and Energy Development — Fire Watch & Wildfire Dashboard",
    "level": "Provincial",
    "jurisdiction": "New Brunswick",
    "category": "safety",
    "type": "Interactive dashboard and burn map",
    "description": "Live wildfire dashboard with fire status updates plus a province-wide map of daily burn conditions updated at 2 p.m.; permits info and active-fire alerts.",
    "url": "https://www.gnb.ca/en/topic/laws-safety/emergency-preparedness-alerts/fire-watch.html",
    "tags": [
      "wildfire",
      "burn-permits",
      "dashboard",
      "emergency-preparedness"
    ],
    "dateAdded": "2026-08-24",
    "verified": true
  },
  {
    "name": "Department of Health — NB Health Link Patient Registry",
    "level": "Provincial",
    "jurisdiction": "New Brunswick",
    "category": "health",
    "type": "Patient registry and booking tool",
    "description": "Register online if you lack a family doctor or nurse practitioner; book in-person, phone or virtual appointments and find clinic locations across the province.",
    "url": "https://nbhealthlink.ca/",
    "tags": [
      "primary-care",
      "patient-registry",
      "appointments",
      "family-doctor"
    ],
    "dateAdded": "2026-08-24",
    "verified": true
  },
  {
    "name": "Service New Brunswick — Corporate Registry Search",
    "level": "Provincial",
    "jurisdiction": "New Brunswick",
    "category": "business",
    "type": "Public registry lookup",
    "description": "Keyword-search the provincial registry of business corporations, non-profits, partnerships, business names and condominium corporations; buy certificates and filings online.",
    "url": "https://www2.snb.ca/content/snb/en/sites/corporate-registry.html",
    "tags": [
      "corporate-registry",
      "business-names",
      "search",
      "incorporation",
      "nonprofits"
    ],
    "dateAdded": "2026-08-24",
    "verified": true
  },
  {
    "name": "Department of Agriculture, Aquaculture and Fisheries — GIS Open Data Download",
    "level": "Provincial",
    "jurisdiction": "New Brunswick",
    "category": "agriculture",
    "type": "Dataset downloads (SHP/KML)",
    "description": "Daily-updated shapefile/KML downloads: farm locations (ARMS), maple sugary potential, marine aquaculture lease sites for finfish, shellfish and lobster, and rockweed sectors.",
    "url": "https://www2.gnb.ca/content/gnb/en/departments/10/open-data/data_download.html",
    "tags": [
      "agriculture",
      "aquaculture",
      "shapefile",
      "kml",
      "gis",
      "farms"
    ],
    "dateAdded": "2026-08-24",
    "verified": true
  },
  {
    "name": "Department of Education and Early Childhood Development — Child Care Directory",
    "level": "Provincial",
    "jurisdiction": "Nova Scotia",
    "category": "education",
    "type": "Dataset + lookup",
    "description": "Search all ~338 active licensed daycares by county, city or program type; filter licence details, capacity, inspections and age ranges. CSV/GeoJSON/Socrata API downloads.",
    "url": "https://data.novascotia.ca/Education-Early-Childhood/Child-Care-Directory/3j9v-yimg",
    "tags": [
      "child-care",
      "daycare",
      "licensing",
      "open-data",
      "families"
    ],
    "dateAdded": "2026-08-24",
    "verified": true
  },
  {
    "name": "Department of Natural Resources — Abandoned Mine Openings Database",
    "level": "Provincial",
    "jurisdiction": "Nova Scotia",
    "category": "open-data",
    "type": "Downloadable geodatabase",
    "description": "~8,500 documented shafts, adits, open cuts and workings across ~700 mining areas, searchable by hazard degree, commodity, county. Downloads: SHP, GDB, KML/KMZ, XLS.",
    "url": "https://novascotia.ca/natr/meb/download/dp010.asp",
    "tags": [
      "mines",
      "geology",
      "geoscience",
      "hazards",
      "shapefile"
    ],
    "dateAdded": "2026-08-24",
    "verified": true
  },
  {
    "name": "Department of Natural Resources and Renewables — Find a Provincial Park",
    "level": "Provincial",
    "jurisdiction": "Nova Scotia",
    "category": "parks",
    "type": "Lookup/filterable directory",
    "description": "Browse every provincial park filtered by region, activity (camping, beaches, hiking trails) and amenities (showers, electrical hookups, accessibility), with descriptions and maps.",
    "url": "https://parks.novascotia.ca/parks/all/all",
    "tags": [
      "parks",
      "camping",
      "beaches",
      "hiking",
      "tourism"
    ],
    "dateAdded": "2026-08-24",
    "verified": true
  },
  {
    "name": "Department of Finance and Treasury Board — Budget Documents",
    "level": "Provincial",
    "jurisdiction": "Nova Scotia",
    "category": "budget",
    "type": "Budget portal + document library",
    "description": "Current Budget 2026-27 hub plus archives: downloadable estimates and supplementary detail, four-year fiscal plans, business plans and capital plan PDFs for every department.",
    "url": "https://novascotia.ca/budget/",
    "tags": [
      "budget",
      "estimates",
      "public-finance",
      "spending"
    ],
    "dateAdded": "2026-08-24",
    "verified": true
  },
  {
    "name": "Health PEI — Emergency Department Wait Times",
    "level": "Provincial",
    "jurisdiction": "PEI",
    "category": "health",
    "type": "Live dashboard",
    "description": "Live estimated ER wait times for all four PEI hospital emergency departments (QEH, PCH, KCMH, Western), refreshed every five minutes.",
    "url": "https://www.princeedwardisland.ca/en/information/health-pei/emergency-department-wait-times",
    "tags": [
      "wait-times",
      "emergency",
      "hospitals",
      "dashboard"
    ],
    "dateAdded": "2026-08-24",
    "verified": false
  },
  {
    "name": "IRAC — Current Regulated Petroleum Prices",
    "level": "Provincial",
    "jurisdiction": "PEI",
    "category": "consumer",
    "type": "Regulated price schedule",
    "description": "IRAC's regulated minimum/maximum pump prices for gasoline, diesel, furnace oil and propane, adjusted twice weekly, with pricing orders and notices (PDF).",
    "url": "https://irac.pe.ca/petrol/current-petroleum-prices/",
    "tags": [
      "fuel-prices",
      "gasoline",
      "diesel",
      "regulation"
    ],
    "dateAdded": "2026-08-24",
    "verified": true
  },
  {
    "name": "Department of Environment, Energy and Climate Action — Water Well Records (OD0040)",
    "level": "Provincial",
    "jurisdiction": "PEI",
    "category": "environment",
    "type": "Open dataset",
    "description": "Records for wells drilled on PEI — location, construction details and groundwater level — downloadable as CSV/GeoJSON or queryable via ArcGIS API.",
    "url": "https://data.princeedwardisland.ca/datasets/48e7e4de6ab84efaa610bd26d89eac55/explore",
    "tags": [
      "groundwater",
      "wells",
      "water",
      "open-data"
    ],
    "dateAdded": "2026-08-24",
    "verified": true
  },
  {
    "name": "Department of Education and Early Years — Official School Enrolment from 1999 (OD0009)",
    "level": "Provincial",
    "jurisdiction": "PEI",
    "category": "education",
    "type": "Open dataset",
    "description": "Official school-by-school enrolment counts since 1999 under the Open Government Licence – PEI; download CSV/Excel or query the feature service API.",
    "url": "https://data.princeedwardisland.ca/datasets/e787cce54aaa46249a7f2e922dbad1b6/explore",
    "tags": [
      "schools",
      "enrolment",
      "statistics",
      "open-data"
    ],
    "dateAdded": "2026-08-24",
    "verified": true
  },
  {
    "name": "Department of Fisheries, Tourism, Sport and Culture — Oyster Monitoring Program Results (OD0027)",
    "level": "Provincial",
    "jurisdiction": "PEI",
    "category": "science",
    "type": "Monitoring dataset",
    "description": "Estuarial sampling results from the provincial oyster larvae monitoring program: site, temperature, larvae counts and concentration ratings; CSV/GeoJSON downloads.",
    "url": "https://data.princeedwardisland.ca/datasets/968d606d569143c2aa69222d23696279/explore",
    "tags": [
      "fisheries",
      "aquaculture",
      "oyster",
      "monitoring",
      "open-data"
    ],
    "dateAdded": "2026-08-24",
    "verified": true
  },
  {
    "name": "Ministry of Industry, Energy and Technology — GeoScience Atlas",
    "level": "Provincial",
    "jurisdiction": "Newfoundland and Labrador",
    "category": "science",
    "type": "Interactive Map",
    "description": "Geological Survey map viewer for bedrock geology, mineral occurrences, mining claims, geophysics and geochemistry, with spatial queries plus data and map downloads.",
    "url": "https://geoatlas.gov.nl.ca/",
    "tags": [
      "geology",
      "mining",
      "minerals",
      "maps",
      "open-data"
    ],
    "dateAdded": "2026-08-24",
    "verified": true
  },
  {
    "name": "Ministry of Education and Early Childhood Development — Early Learning and Child Care Directory",
    "level": "Provincial",
    "jurisdiction": "Newfoundland and Labrador",
    "category": "education",
    "type": "Search Directory",
    "description": "Map-based database of all regulated child care in NL — centres, family providers and agencies — searchable by community, route or child's age, with recent violation orders.",
    "url": "https://www.childcare.gov.nl.ca/public/ccr/search",
    "tags": [
      "childcare",
      "families",
      "directory",
      "map"
    ],
    "dateAdded": "2026-08-24",
    "verified": true
  },
  {
    "name": "Office of Immigration and Multiculturalism — AIP Designated Employers List",
    "level": "Provincial",
    "jurisdiction": "Newfoundland and Labrador",
    "category": "immigration",
    "type": "Public Register",
    "description": "Official register of employers designated for the Atlantic Immigration Program, listing each employer's communities, designation date and eligible NOC occupation codes.",
    "url": "https://www.gov.nl.ca/immigration/immigrating-to-newfoundland-and-labrador/atlantic-immigration-program/designated-employers/",
    "tags": [
      "immigration",
      "employers",
      "atlantic-immigration-program",
      "jobs"
    ],
    "dateAdded": "2026-08-24",
    "verified": true
  },
  {
    "name": "Ministry of Environment and Climate Change — Environmental Assessment Projects Register",
    "level": "Provincial",
    "jurisdiction": "Newfoundland and Labrador",
    "category": "environment",
    "type": "Public Register",
    "description": "Filterable register of provincial environmental assessments since March 2000: browse projects by year with proponents, registration dates, status and release decisions.",
    "url": "https://www.gov.nl.ca/eccc/env-assessment/projects-list/",
    "tags": [
      "environmental-assessment",
      "projects",
      "permits",
      "registry"
    ],
    "dateAdded": "2026-08-24",
    "verified": true
  },
  {
    "name": "Ministry of Transportation and Infrastructure — Provincial Ferry Schedules and Rates",
    "level": "Provincial",
    "jurisdiction": "Newfoundland and Labrador",
    "category": "aviation-marine",
    "type": "Schedule Lookup",
    "description": "Summary of all 15 intra-provincial ferry routes with links to seasonal schedules, vessels, crossing times and fare rates, from Bell Island to Labrador coastal ports.",
    "url": "https://www.gov.nl.ca/ti/ferryservices/schedules/",
    "tags": [
      "ferries",
      "schedules",
      "marine",
      "transportation"
    ],
    "dateAdded": "2026-08-24",
    "verified": true
  },
  {
    "name": "Government of Yukon — GeoYukon Map Viewer",
    "level": "Provincial",
    "jurisdiction": "Yukon",
    "category": "open-data",
    "type": "Interactive GIS map & data downloads",
    "description": "Explore, measure, print and download the Yukon government's authoritative spatial layers — mining claims, land tenure, forestry, wildlife, air photos and more — free in a browser viewer.",
    "url": "https://mapservices.gov.yk.ca/GeoYukon/",
    "tags": [
      "gis",
      "maps",
      "spatial-data",
      "land",
      "yukon"
    ],
    "dateAdded": "2026-08-24",
    "verified": true
  },
  {
    "name": "Government of Yukon — Waterline Public Registry",
    "level": "Provincial",
    "jurisdiction": "Yukon",
    "category": "environment",
    "type": "Public registry search",
    "description": "Yukon Water Board's online registry: search water use licences and applications by number, name or community and view licence documents, status and conditions of issuance.",
    "url": "https://apps.gov.yk.ca/waterline/",
    "tags": [
      "water",
      "licences",
      "registry",
      "search",
      "yukon"
    ],
    "dateAdded": "2026-08-24",
    "verified": true
  },
  {
    "name": "Government of Northwest Territories — Spatial Data Warehouse Viewer",
    "level": "Provincial",
    "jurisdiction": "Northwest Territories",
    "category": "open-data",
    "type": "Interactive GIS map & data downloads",
    "description": "NWT Centre for Geomatics browser viewer over GNWT's Spatial Data Warehouse: browse, query and extract public geospatial data — imagery, land tenure, permafrost, wildlife — no GIS software needed.",
    "url": "https://www.maps.geomatics.gov.nt.ca/Html5Viewer/index.html?viewer=SDW",
    "tags": [
      "gis",
      "maps",
      "spatial-data",
      "geomatics",
      "northwest-territories"
    ],
    "dateAdded": "2026-08-24",
    "verified": true
  },
  {
    "name": "Government of Northwest Territories — Water Management & Monitoring Data",
    "level": "Provincial",
    "jurisdiction": "Northwest Territories",
    "category": "environment",
    "type": "Monitoring data downloads",
    "description": "ECC water data hub: download water quality and water level monitoring data (CSV/Excel) for NWT community and transboundary stations, with links to Mackenzie DataStream and real-time feeds.",
    "url": "https://www.gov.nt.ca/ecc/en/services/water-management-and-monitoring/data",
    "tags": [
      "water-quality",
      "hydrology",
      "monitoring",
      "csv",
      "northwest-territories"
    ],
    "dateAdded": "2026-08-24",
    "verified": true
  },
  {
    "name": "Government of Nunavut — Bureau of Statistics",
    "level": "Provincial",
    "jurisdiction": "Nunavut",
    "category": "open-data",
    "type": "Statistics portal",
    "description": "Nunavummit Kiglisiniartiit publications: statistical fact sheets for every community plus population, labour force, income, health, education and housing-survey tables.",
    "url": "https://www.gov.nu.ca/en/nunavut-statistics",
    "tags": [
      "statistics",
      "demographics",
      "labour",
      "housing",
      "nunavut"
    ],
    "dateAdded": "2026-08-24",
    "verified": false
  },
  {
    "name": "Canadian Conservation Institute — Light Damage Calculator",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "heritage",
    "type": "Interactive tool",
    "description": "Estimate how colourants and museum collections fade under any lighting scenario: pick a colourant or collection type, set lux/hours, view predicted colour swatches. Three interactive variants.",
    "url": "https://app.pch.gc.ca/application/cdl-ldc/description-about.app?lang=en",
    "tags": [
      "heritage",
      "conservation",
      "museums",
      "lighting",
      "interactive",
      "collections"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Telefilm Canada — Funded Projects Directory",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "culture",
    "type": "Funding registry",
    "description": "Searchable directory of every Canadian feature film financed by Telefilm since FY2013-14 across development, production, marketing and Talent to Watch programs, filterable by fiscal year.",
    "url": "https://telefilm.ca/en/who-we-are/directories/funded-projects-directory",
    "tags": [
      "film",
      "funding",
      "registry",
      "search",
      "cinema"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Library and Archives Canada — Home Children Database (1869–1932)",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "heritage",
    "type": "Genealogy database",
    "description": "Search 245,000+ indexed names of British Home Children by surname, given name, ship and year of arrival; entries link to passenger lists, inspection reports and Immigration Branch files.",
    "url": "https://www.bac-lac.gc.ca/eng/discover/immigration/immigration-records/home-children-1869-1930/immigration-records/pages/immigration-records.aspx",
    "tags": [
      "genealogy",
      "home children",
      "immigration",
      "database",
      "search"
    ],
    "dateAdded": "2026-08-25",
    "verified": false
  },
  {
    "name": "Library and Archives Canada — Canadian Directories Collection (1790–1906)",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "heritage",
    "type": "Full-text archive",
    "description": "Full-text keyword search across ~95 digitized pre-1901 Canadian city, county and provincial directories (incl. Ottawa and Halifax runs); hits link directly to scanned directory pages.",
    "url": "https://www.bac-lac.gc.ca/eng/discover/directories-collection/pages/directories-collection.aspx",
    "tags": [
      "directories",
      "local history",
      "full-text",
      "pdf",
      "genealogy",
      "search"
    ],
    "dateAdded": "2026-08-25",
    "verified": false
  },
  {
    "name": "Canadian Conservation Institute — Agents of Deterioration",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "heritage",
    "type": "Reference",
    "description": "Comprehensive illustrated reference on the 10 primary agents of deterioration (light, pests, water, theft, fire...) threatening heritage collections, with risk-assessment and prevention guidance.",
    "url": "https://www.canada.ca/en/conservation-institute/services/agents-deterioration.html",
    "tags": [
      "conservation",
      "museums",
      "preventive conservation",
      "reference",
      "heritage"
    ],
    "dateAdded": "2026-08-25",
    "verified": false
  },
  {
    "name": "Ingenium — Collection API",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "science",
    "type": "Collection API",
    "description": "REST API over Ingenium's 150,000+ science-and-tech artifacts (agriculture, aviation, science museums): search, record lookup, more-like-this. Free API key; OpenAPI docs; bulk CSV/XML export.",
    "url": "https://api.ingeniumcanada.org/en/api_docs/",
    "tags": [
      "api",
      "museum",
      "collection",
      "open data",
      "csv",
      "xml",
      "aviation",
      "agriculture"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "National Capital Commission — NCC Hub Open Data",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "open-data",
    "type": "Open data",
    "description": "NCC's official ArcGIS Hub (21 datasets): download CSV, GeoJSON, KML or query REST/WFS APIs for Rideau Canal Skateway ice conditions, Greenbelt land-use designations, NCR boundaries.",
    "url": "https://ncc-hub-ncc-ccn.hub.arcgis.com/",
    "tags": [
      "geojson",
      "csv",
      "arcgis rest",
      "wfs",
      "trails",
      "greenbelt",
      "gatineau park",
      "ottawa"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Canada Council Art Bank — Collection Search & Open Data",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "culture",
    "type": "Collection search",
    "description": "Search the world's largest contemporary Canadian art collection — 17,000+ works by 3,000+ artists; full collection dataset downloadable as CSV or Excel via Canada Council data tables.",
    "url": "https://artbank.ca/",
    "tags": [
      "art",
      "collection",
      "csv",
      "excel",
      "open data",
      "indigenous artists"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Pier 21 — Passenger List Database",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "immigration",
    "type": "Lookup tool",
    "description": "Searchable, sortable index of 100,000+ passenger arrivals at Pier 21 (1928–1971 gateway era): name, honourific, departure date and ship, for genealogy and immigration-history research.",
    "url": "https://pier21.ca/immigration-records/passenger-list-database",
    "tags": [
      "genealogy",
      "passenger lists",
      "ships",
      "halifax",
      "lookup",
      "records"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Canadian War Museum — Online Exhibitions",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "heritage",
    "type": "Virtual exhibits",
    "description": "Two dozen free online exhibitions from Canada's national military museum: veterans' oral histories, D-Day, First World War, war art, naval history, medals and propaganda poster archives.",
    "url": "https://www.warmuseum.ca/dod/online-exhibitions",
    "tags": [
      "virtual exhibits",
      "military history",
      "oral histories",
      "war art",
      "veterans"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "ESDC Labour Program — Equi'Vision Employment Equity Dashboard",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "employment",
    "type": "Dashboard",
    "description": "Search and compare workforce representation rates and hourly/bonus/overtime pay gaps by employer, sector, or location for 530+ federally regulated private-sector employers; interactive Power BI.",
    "url": "https://equivision.services.gc.ca/",
    "tags": [
      "pay equity",
      "employment equity",
      "pay gaps",
      "dashboard",
      "interactive",
      "power bi"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "ESDC Labour Program — Negotech Collective Agreements Library",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "employment",
    "type": "Lookup tool",
    "description": "Full-text search of federal and provincial collective agreements by employer, union, NAICS industry, NOC occupation, dates, employee count and jurisdiction; multiple renewals, PDF downloads.",
    "url": "https://negotech.service.canada.ca/search/index.html",
    "tags": [
      "collective agreements",
      "labour relations",
      "unions",
      "search",
      "pdf"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "ESDC Labour Program — Minimum Wage Database",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "employment",
    "type": "Lookup tool",
    "description": "Look up current and forthcoming general minimum wage rates for every province and territory, special rates for students and specific occupations, plus historical rates back to 1965 via custom search.",
    "url": "https://minwage-salairemin.service.canada.ca/en/index.html",
    "tags": [
      "minimum wage",
      "wages",
      "labour standards",
      "history",
      "custom search"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Canada Industrial Relations Board — Decisions Database",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "employment",
    "type": "Decisions database",
    "description": "Search CIRB reasons for decision, certification orders and OHS Tribunal records under the Canada Labour Code and Status of the Artist Act; advanced filters, RSS and email alerts.",
    "url": "https://decisia.lexum.com/cirb-ccri/en/nav.do",
    "tags": [
      "labour law",
      "canada labour code",
      "certification",
      "decisions",
      "rss",
      "html"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Service Canada — Wage Earner Protection Program Application",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "employment",
    "type": "Apply online",
    "description": "Apply online within 56 days for up to $9,275 (2026) in unpaid wages, vacation pay and severance owed when an employer goes bankrupt or into receivership; eligibility and payment details.",
    "url": "https://www.canada.ca/en/employment-social-development/services/wage-earner-protection/employee.html",
    "tags": [
      "unpaid wages",
      "bankruptcy",
      "insolvency",
      "apply online",
      "workers"
    ],
    "dateAdded": "2026-08-25",
    "verified": false
  },
  {
    "name": "WorkSafeBC — Industry Health & Safety Data Dashboards",
    "level": "Provincial",
    "jurisdiction": "British Columbia",
    "category": "employment",
    "type": "Dashboard",
    "description": "Interactive dashboards of BC injury rates, claim costs, inspections, orders and penalties by industry over 10 years; filter serious injuries and deaths by region, occupation and age.",
    "url": "https://www.worksafebc.com/en/about-us/data-insights/industry-health-safety-data",
    "tags": [
      "workplace safety",
      "injury data",
      "claims",
      "inspections",
      "statistics",
      "dashboard"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "WCB-Alberta — Premium Rate Manual Search",
    "level": "Provincial",
    "jurisdiction": "Alberta",
    "category": "employment",
    "type": "Lookup tool",
    "description": "Search or browse all WCB-Alberta industry classification codes and current premium rates per $100 of assessable earnings by sector, rate group and industry; keyword or code search.",
    "url": "https://rm.wcb.ab.ca/WCB.RateManual.WebServer/",
    "tags": [
      "premium rates",
      "industry classification",
      "workers compensation",
      "employers",
      "lookup tool"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Manitoba Workplace Safety and Health — Stop Work Orders, Penalties & Convictions",
    "level": "Provincial",
    "jurisdiction": "Manitoba",
    "category": "employment",
    "type": "Enforcement database",
    "description": "Published lists of Manitoba WSH stop work orders, administrative penalties and court convictions under the Workplace Safety and Health Act, browsable to check any employer's enforcement history.",
    "url": "https://www.gov.mb.ca/labour/safety/compliance.html",
    "tags": [
      "workplace safety",
      "enforcement",
      "stop work orders",
      "convictions",
      "administrative penalties"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Saskatchewan WCB — Classification Index & Premium Rates",
    "level": "Provincial",
    "jurisdiction": "Saskatchewan",
    "category": "employment",
    "type": "Lookup tool",
    "description": "Filterable online index of every Saskatchewan WCB industry class code (10 schedules, 50 groups) with current-year premium rates, plus downloadable 2026 premium rate summary sheet PDF.",
    "url": "https://www.wcbsask.com/classification",
    "tags": [
      "premium rates",
      "industry classification",
      "workers compensation",
      "employers",
      "pdf",
      "lookup tool"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "SaskJobs — Provincial Job Search Board",
    "level": "Provincial",
    "jurisdiction": "Saskatchewan",
    "category": "employment",
    "type": "Job search board",
    "description": "Government-run Saskatchewan job board with ~9,600 live postings searchable by occupation, region and community via interactive map; covers health, trades, sales, oil/gas and more.",
    "url": "https://www.saskjobs.ca/",
    "tags": [
      "job search",
      "job board",
      "hiring",
      "labour market",
      "lookup tool"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "CNESST — Lésions professionnelles Accepted Claims Dataset",
    "level": "Provincial",
    "jurisdiction": "Quebec",
    "category": "open-data",
    "type": "Open data",
    "description": "Download annual CSV/XLSX files (2014-2023) of accepted Quebec work-injury claims by region, sector, and injury type; CKAN datastore API available.",
    "url": "https://www.donneesquebec.ca/recherche/dataset/0e3ba082-a963-4771-95a2-accc43ae244c",
    "tags": [
      "quebec",
      "cnesst",
      "workplace injuries",
      "workers compensation",
      "csv",
      "xlsx",
      "api"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "MLITSD — Employment Standards Claims Report",
    "level": "Provincial",
    "jurisdiction": "Ontario",
    "category": "open-data",
    "type": "Open data",
    "description": "CSV downloads of Ontario ESA claims received/resolved and dollars assessed by ministry officers, fiscal 2012-2025, refreshed yearly.",
    "url": "https://data.ontario.ca/dataset/8d8c31d3-4ec8-4684-b817-39ce2884bb2f",
    "tags": [
      "ontario",
      "labour",
      "employment standards",
      "claims",
      "csv"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "CNESST — Online Complaint Filing (Dépôt d'une plainte)",
    "level": "Provincial",
    "jurisdiction": "Quebec",
    "category": "employment",
    "type": "Self-service portal",
    "description": "Start an official CNESST complaint online: guided eligibility questionnaire routes unpaid wages, harassment, reprisal and other labour standards recours.",
    "url": "https://www.cnesst.gouv.qc.ca/fr/service-clientele/plaintes-recours/depot-plainte",
    "tags": [
      "quebec",
      "cnesst",
      "labour standards",
      "complaint",
      "filing",
      "self-service"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "MLITSD — Occupational Health and Safety Inspections Report",
    "level": "Provincial",
    "jurisdiction": "Ontario",
    "category": "open-data",
    "type": "Open data",
    "description": "CSV of MLITSD proactive OHS field-visit inspection counts by enforcement program area, fiscal 2011-2025, updated yearly.",
    "url": "https://data.ontario.ca/dataset/occupational-health-and-safety-inspections-report",
    "tags": [
      "ontario",
      "occupational health and safety",
      "inspections",
      "csv",
      "open data"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "CNESST — Premium Rate Lookup (Taux de prime)",
    "level": "Provincial",
    "jurisdiction": "Quebec",
    "category": "employment",
    "type": "Lookup tool",
    "description": "Look up Quebec workplace-safety insurance premium rates per $100 payroll by classification unit; official annual Table des taux PDF and rate components.",
    "url": "https://www.cnesst.gouv.qc.ca/fr/demarches-formulaires/employeurs/assurance-sante-securite-travail/tarification/taux-prime",
    "tags": [
      "quebec",
      "cnesst",
      "insurance rates",
      "employers",
      "pdf",
      "lookup"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Post-Secondary Education, Training and Labour (PETL) — NBjobs Hiring Demand Bulletins & LMI",
    "level": "Provincial",
    "jurisdiction": "New Brunswick",
    "category": "employment",
    "type": "Dashboard",
    "description": "PETL-run labour market hub: regional online job-ad hiring demand dashboards, labour force statistics, sector profiles and outlook reports based on live job-postings data.",
    "url": "https://www.nbjobs.ca/stats/hiringdemand",
    "tags": [
      "labour market",
      "job postings",
      "hiring demand",
      "new brunswick",
      "dashboard",
      "pdf",
      "reports"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Department of Labour, Skills and Immigration — Licensed Foreign Worker Recruiter Registry",
    "level": "Provincial",
    "jurisdiction": "Nova Scotia",
    "category": "employment",
    "type": "Registry",
    "description": "Public registry of every Foreign Worker Recruiter Licence issued by the Labour Standards Division: licensee, business, expiry date, conditions, with each licence as a downloadable PDF.",
    "url": "https://novascotia.ca/lae/employmentrights/fw/licensedrecruiters.asp",
    "tags": [
      "foreign workers",
      "recruiter licences",
      "labour standards",
      "employer registry",
      "pdf"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Post-Secondary Education, Training and Labour (PETL) — Employment Standards Online Complaint Form",
    "level": "Provincial",
    "jurisdiction": "New Brunswick",
    "category": "gov-services",
    "type": "Self-service portal",
    "description": "File an Employment Standards Act complaint online without paper: unpaid wages, overtime, vacation pay, termination pay and more, routed directly to PETL investigators.",
    "url": "https://www.gnb.ca/en/topic/jobs-workplaces/labour-market-workforce/employment-standards/employment-standards-complaint.html",
    "tags": [
      "employment standards",
      "wage complaints",
      "self-service",
      "online form",
      "new brunswick"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Workers' Safety and Compensation Board (WSCB) — WHS Regulations Search",
    "level": "Provincial",
    "jurisdiction": "Yukon",
    "category": "safety",
    "type": "Lookup tool",
    "description": "Full-text browse/search of Yukon's Occupational Health and Safety Regulations in 19 parts plus WHMIS, diving and radiation rules — the board's consolidated HTML regulations library.",
    "url": "https://www.wcb.yk.ca/regulations",
    "tags": [
      "occupational health and safety",
      "regulations",
      "workplace safety",
      "yukon",
      "html"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "WorkplaceNL — Certification Training Registry (CTR) Course Marketplace",
    "level": "Provincial",
    "jurisdiction": "Newfoundland and Labrador",
    "category": "safety",
    "type": "Lookup tool",
    "description": "Search the marketplace of WorkplaceNL-approved OHS training providers and courses, with workers' certification records stored electronically.",
    "url": "https://ctr.bluedrop.io/",
    "tags": [
      "ohs training",
      "certification",
      "approved providers",
      "workplace safety",
      "lookup tool"
    ],
    "dateAdded": "2026-08-25",
    "verified": false
  },
  {
    "name": "CADORS — Civil Aviation Occurrence Reports",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "aviation-marine",
    "type": "Incident database",
    "description": "Transport Canada's Civil Aviation Daily Occurrence Reporting System — query aviation incident and accident reports by date, aerodrome, aircraft, or event type, with TXT export.",
    "url": "https://wwwapps.tc.gc.ca/Saf-Sec-Sur/2/CADORS-SCREAQ/q.aspx?lang=eng",
    "tags": [
      "aviation",
      "safety",
      "incidents",
      "transport canada",
      "database"
    ],
    "verified": true,
    "dateAdded": "2026-08-25"
  },
  {
    "name": "Transportation Safety Board — Investigation Reports",
    "level": "Agency",
    "jurisdiction": "Canada",
    "category": "aviation-marine",
    "type": "Investigation reports",
    "description": "Search TSB rail, pipeline, marine and air investigation reports; browse occurrences by mode, year, or investigation class with full PDF reports.",
    "url": "https://www.tsb.gc.ca/eng",
    "tags": [
      "safety",
      "investigations",
      "aviation",
      "marine",
      "rail",
      "pipeline"
    ],
    "verified": true,
    "dateAdded": "2026-08-25"
  },
  {
    "name": "Canadian Importers Database",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "business",
    "type": "Search database",
    "description": "Find the major companies importing any product into Canada — searchable by product, city, or country of origin, built from CBSA customs data, with the firms behind 80% of imports of each product.",
    "url": "https://ised-isde.canada.ca/site/ised/en/research-and-business-intelligence/canadian-importers-database",
    "tags": [
      "trade",
      "imports",
      "business intelligence",
      "ISED"
    ],
    "verified": true,
    "dateAdded": "2026-08-25"
  },
  {
    "name": "Licensed Natural Health Products Database (LNHPD)",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "health",
    "type": "Product database",
    "description": "Search licensed Canadian natural health products — vitamins, herbals, homeopathics — by product name, licence holder, or NPN number.",
    "url": "https://health-products.canada.ca/lnhpd-bdpsnh/?lang=eng",
    "tags": [
      "health",
      "supplements",
      "natural health products",
      "health canada"
    ],
    "verified": true,
    "dateAdded": "2026-08-25"
  },
  {
    "name": "Pesticide Label Search",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "agriculture",
    "type": "Product database",
    "description": "Search Health Canada’s pesticide product registry by registration number, active ingredient, or company; view and download current registered labels (PDF).",
    "url": "https://pest-control.canada.ca/pesticide-registry/en/label-search.html",
    "tags": [
      "pesticides",
      "agriculture",
      "PMRA",
      "health canada",
      "labels"
    ],
    "verified": true,
    "dateAdded": "2026-08-25"
  },
  {
    "name": "CSRS-PPP — Precise Point Positioning",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "science",
    "type": "Processing tool",
    "description": "Submit GNSS observation files (RINEX) for free online post-processing to cm-level positions in NAD83/ITRF; results by email or download.",
    "url": "https://webapp.csrs-scrs.nrcan-rncan.gc.ca/geod/tools-outils/ppp.php",
    "tags": [
      "GNSS",
      "GPS",
      "surveying",
      "geodesy",
      "NRCan"
    ],
    "verified": true,
    "dateAdded": "2026-08-25"
  },
  {
    "name": "Species at Risk Public Registry",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "environment",
    "type": "Registry",
    "description": "Search Canada’s official list of species at risk: status documents, recovery strategies, management plans and permits, downloadable per species.",
    "url": "https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry.html",
    "tags": [
      "species at risk",
      "wildlife",
      "conservation",
      "SARA",
      "environment"
    ],
    "verified": false,
    "dateAdded": "2026-08-25"
  },
  {
    "name": "CPIC — Stolen Vehicle and Bike Search",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "safety",
    "type": "Search database",
    "description": "Public search of the CPIC stolen-property database — check vehicles, bicycles, trailers and other serial-numbered goods reported stolen by Canadian police.",
    "url": "https://www.cpic-cipc.ca/",
    "tags": [
      "police",
      "stolen property",
      "vehicles",
      "bikes",
      "RCMP"
    ],
    "verified": true,
    "dateAdded": "2026-08-25"
  },
  {
    "name": "Canada's Missing",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "safety",
    "type": "Search database",
    "description": "The RCMP's national public database of missing persons and unidentified remains cases — browse or search case profiles and submit tips directly to investigators.",
    "url": "https://www.canadasmissing.ca/",
    "tags": [
      "missing persons",
      "police",
      "RCMP",
      "public safety"
    ],
    "verified": true,
    "dateAdded": "2026-08-25"
  },
  {
    "name": "Ingenium Collection — Digital Archive",
    "level": "Crown Corp",
    "jurisdiction": "Canada",
    "category": "culture",
    "type": "Collection search",
    "description": "Browse Canada's national science and technology collection online — 150,000+ artifacts from the Science and Technology, Aviation and Space, and Agriculture and Food museums, with photos and records.",
    "url": "https://collection.ingenium.ca/en/",
    "tags": [
      "museums",
      "artifacts",
      "science",
      "technology",
      "heritage"
    ],
    "verified": true,
    "dateAdded": "2026-08-25"
  },
  {
    "name": "RETScreen — Clean Energy Management Software",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "utilities",
    "type": "Software",
    "description": "Free government software for energy project feasibility analysis: clean energy, efficiency and cogeneration modelling with global climate and product data.",
    "url": "https://natural-resources.canada.ca/maps-tools-publications/tools-applications/retscreen",
    "tags": [
      "energy",
      "renewables",
      "software",
      "NRCan",
      "modelling"
    ],
    "verified": true,
    "dateAdded": "2026-08-25"
  },
  {
    "name": "Canadian Weather Radar — Interactive Map",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "weather",
    "type": "Interactive map",
    "description": "Environment Canada's national radar mosaic — animated precipitation radar for the whole country on one interactive map, with rain/snow layers and station-level detail.",
    "url": "https://weather.gc.ca/index_e.html?layers=%2Cradar",
    "tags": [
      "weather",
      "radar",
      "precipitation",
      "environment canada"
    ],
    "verified": true,
    "dateAdded": "2026-08-25"
  },
  {
    "name": "St. Thomas — Council Agendas & Minutes (eScribe)",
    "level": "Municipal",
    "jurisdiction": "St. Thomas",
    "category": "council",
    "type": "Council portal",
    "description": "Searchable eScribe meeting portal with downloadable PDF agendas, minutes and supporting documents for St. Thomas regular, special and committee meetings.",
    "url": "https://pub-stthomas.escribemeetings.com/",
    "tags": [
      "agendas",
      "council",
      "escribe",
      "minutes",
      "stthomas"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  }
];
