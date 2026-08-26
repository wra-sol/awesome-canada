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
  },
  {
    "name": "Yukon HSS — Public Health Inspections Lookup",
    "level": "Provincial",
    "jurisdiction": "Yukon",
    "category": "health",
    "type": "Lookup tool",
    "description": "Search inspection reports for Yukon food premises and personal services establishments by facility or community; Environmental Health Officer reports updated weekly since 2014.",
    "url": "https://www.healthinspections.gov.yk.ca/",
    "tags": [
      "health inspections",
      "food safety",
      "personal services",
      "yukon",
      "lookup"
    ],
    "dateAdded": "2026-08-25",
    "verified": false
  },
  {
    "name": "Nunavut Courts — Daily Docket & Court File Search",
    "level": "Provincial",
    "jurisdiction": "Nunavut",
    "category": "justice",
    "type": "Lookup tool",
    "description": "Search daily criminal/civil court dockets by community, court type and date across all Nunavut communities; also concluded dockets and party lookup by name or court file number.",
    "url": "https://dockets.nunavutcourts.ca/",
    "tags": [
      "court dockets",
      "justice",
      "nunavut",
      "search",
      "pdf"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Yukon — YESAB Online Registry",
    "level": "Provincial",
    "jurisdiction": "Yukon",
    "category": "environment",
    "type": "Registry",
    "description": "Official public record of all Yukon environmental socio-economic assessments: search 200+ projects by map, read proposals and recommendations, track comment periods and decisions.",
    "url": "https://yesabregistry.ca/",
    "tags": [
      "environmental assessment",
      "mining",
      "registry",
      "yukon",
      "search",
      "shapefile"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Courts of the NWT — Scheduled Matters & Docket PDFs",
    "level": "Provincial",
    "jurisdiction": "Northwest Territories",
    "category": "justice",
    "type": "Lookup tool",
    "description": "Filter scheduled court matters by court, community and date range across all NWT regions; download daily Territorial/Supreme Court docket PDFs refreshed several times a day.",
    "url": "https://www.nwtcourts.ca/en/schedule/matters/",
    "tags": [
      "court dockets",
      "justice",
      "northwest territories",
      "search",
      "pdf"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "GNWT ECC — NWT Air Quality Monitoring Network",
    "level": "Provincial",
    "jurisdiction": "Northwest Territories",
    "category": "environment",
    "type": "Dashboard",
    "description": "Near real-time readings (PM2.5, ozone, NO2, SO2, CO) from five community stations (Yellowknife, Inuvik, Fort Smith, Fort Simpson, Norman Wells) with archived-data query tools; NAPS network.",
    "url": "https://aqm.enr.gov.nt.ca/",
    "tags": [
      "air quality",
      "monitoring",
      "real-time",
      "northwest territories",
      "dashboard"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "NL Schools — BusPlanner School & Bus Eligibility Lookup",
    "level": "Provincial",
    "jurisdiction": "Newfoundland and Labrador",
    "category": "school-board",
    "type": "Lookup tool",
    "description": "Address-based lookup for every NL community: find which school your address attends and whether it qualifies for busing, with bus stop info for 2026-27. Covers all Anglophone districts.",
    "url": "https://nlschools.mybusplanner.ca/Eligibility",
    "tags": [
      "education",
      "school catchment",
      "busing",
      "school bus",
      "lookup tool",
      "addresses"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Public Utilities Board — Regulated Fuel Price Schedule",
    "level": "Provincial",
    "jurisdiction": "Newfoundland and Labrador",
    "category": "consumer",
    "type": "Dashboard",
    "description": "Weekly/daily maximum prices for gas, diesel, furnace oil and propane across all 14+ PUB pricing zones, with current PDF price orders per zone, historical pricing archive and zone map.",
    "url": "https://www.pub.nf.ca/PP_petroleumproducts.php",
    "tags": [
      "fuel prices",
      "gasoline",
      "diesel",
      "heating oil",
      "regulation",
      "consumer protection",
      "pdf"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Supreme Court of Newfoundland and Labrador — Judgments Database",
    "level": "Provincial",
    "jurisdiction": "Newfoundland and Labrador",
    "category": "justice",
    "type": "Lookup tool",
    "description": "Searchable database of Supreme Court and Court of Appeal decisions with keyword, docket number, judge, date-range and subject-tag filters; full judgment texts from 2001 onward.",
    "url": "https://records.court.nl.ca/",
    "tags": [
      "court decisions",
      "judgments",
      "case law",
      "justice",
      "search",
      "supreme court"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Heritage NL — Provincial Register of Historic Places Search",
    "level": "Provincial",
    "jurisdiction": "Newfoundland and Labrador",
    "category": "heritage",
    "type": "Lookup tool",
    "description": "Filterable register of 995 designated heritage properties province-wide: Registered Heritage Structures and Districts, municipal designations, fisheries heritage buildings and Century Farms, by type and region.",
    "url": "https://heritagenl.ca/discover/heritage-property-search/",
    "tags": [
      "heritage",
      "historic places",
      "property register",
      "designation",
      "architecture"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "MMSB — Green Depot Locator",
    "level": "Provincial",
    "jurisdiction": "Newfoundland and Labrador",
    "category": "environment",
    "type": "Lookup tool",
    "description": "Interactive Leaflet map plus searchable listing of all ~55 licensed beverage-container recycling depots across NL, with addresses, hours, contacts and paint/electronics acceptance notes.",
    "url": "https://mmsb.nl.ca/green-depot/",
    "tags": [
      "recycling",
      "green depots",
      "waste management",
      "beverage containers",
      "map",
      "locations"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Health PEI — Facility Locations (OD0050)",
    "level": "Provincial",
    "jurisdiction": "PEI",
    "category": "health",
    "type": "Dataset",
    "description": "Download every Health PEI facility — acute-care hospitals, health centres, etc. — with name, type, street address and lat/long coordinates. CSV/GeoJSON export plus ArcGIS REST API.",
    "url": "https://data.princeedwardisland.ca/datasets/0f90d991469e40ed8fcba35ee0ec62da/explore",
    "tags": [
      "pei",
      "health pei",
      "hospitals",
      "health centres",
      "facilities",
      "geocoded",
      "csv",
      "geojson",
      "api"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Department of Justice and Public Safety — Victim Services Referrals (OD0018)",
    "level": "Provincial",
    "jurisdiction": "PEI",
    "category": "justice",
    "type": "Dataset",
    "description": "Annual count of new referrals to the PEI Victim Services Program by fiscal year from 2011/12 onward. Track demand for justice support services. CSV/Excel download and ArcGIS REST API.",
    "url": "https://data.princeedwardisland.ca/datasets/265f2d1210b348b2971c18b5fd4a2372/explore",
    "tags": [
      "pei",
      "victim services",
      "justice",
      "public safety",
      "annual series",
      "csv",
      "api"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Department of Social Development and Seniors — Family Housing Program Activity (OD0059)",
    "level": "Provincial",
    "jurisdiction": "PEI",
    "category": "housing",
    "type": "Dataset",
    "description": "Social-housing activity by fiscal year: number of family housing units and new rent supplements issued. CSV/Excel download and ArcGIS REST API for housing-supply analysis.",
    "url": "https://data.princeedwardisland.ca/datasets/8c5cfc39e54c485db8f89a0d49c573b8/explore",
    "tags": [
      "pei",
      "social housing",
      "rent supplements",
      "family housing",
      "housing supply",
      "csv",
      "api"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Department of Social Development and Seniors — AccessAbility Supports Monthly Caseload (OD0056)",
    "level": "Provincial",
    "jurisdiction": "PEI",
    "category": "benefits",
    "type": "Dataset",
    "description": "Monthly caseload counts for PEI's AccessAbility Supports disability benefit program, fiscal year 2010-11 to present. Monitor disability-benefit uptake over time. CSV/Excel and API.",
    "url": "https://data.princeedwardisland.ca/datasets/675d2761b44946a9951992177035ef1e/explore",
    "tags": [
      "pei",
      "disability supports",
      "accessability",
      "caseload",
      "monthly data",
      "csv",
      "api"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Department of Education and Early Years — Child Care Subsidy Monthly Caseload (OD0057)",
    "level": "Provincial",
    "jurisdiction": "PEI",
    "category": "benefits",
    "type": "Dataset",
    "description": "Monthly number of families receiving child care subsidies in PEI since 2010, by fiscal year and month. Gauge affordability-program uptake. CSV/Excel download and ArcGIS REST API.",
    "url": "https://data.princeedwardisland.ca/datasets/8dc414ba9a7d45718a643f9fd1748bf4/explore",
    "tags": [
      "pei",
      "child care",
      "subsidy",
      "early years",
      "caseload",
      "monthly data",
      "csv",
      "api"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "SaskPower — Outage Map and Updates",
    "level": "Provincial",
    "jurisdiction": "Saskatchewan",
    "category": "utilities",
    "type": "Dashboard",
    "description": "Live map and table of unplanned and planned power outages across Saskatchewan with locations, restoration details and update times; set up outage-area notifications.",
    "url": "https://www.saskpower.com/outages/power-outages/outage-updates",
    "tags": [
      "electricity",
      "outages",
      "crown corporation",
      "dashboard",
      "real-time"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Water Security Agency — Provincial Flood Forecast & Spring Runoff Reports",
    "level": "Provincial",
    "jurisdiction": "Saskatchewan",
    "category": "weather",
    "type": "Reports & forecasts",
    "description": "Download current Spring Runoff Outlook reports, ten-day flow forecasts for the Saskatchewan River System, plus Lake Diefenbaker and Qu'Appelle watershed updates (PDF).",
    "url": "https://wsask.ca/recreation-environment/provincial-forecast/",
    "tags": [
      "flood",
      "forecasting",
      "hydrology",
      "spring runoff",
      "pdf"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "FCAA — FCAA411 Licence & Registration Search",
    "level": "Provincial",
    "jurisdiction": "Saskatchewan",
    "category": "consumer",
    "type": "Lookup tool",
    "description": "Search whether payday lenders, collection agencies, mortgage brokers, vehicle dealers, direct sellers, insurers and pension plans are licensed in Saskatchewan.",
    "url": "https://fcaa.gov.sk.ca/fcaa411",
    "tags": [
      "consumer protection",
      "licences",
      "payday loans",
      "mortgage brokers",
      "lookup tool"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Ministry of Education — Directory of Saskatchewan School Divisions",
    "level": "Provincial",
    "jurisdiction": "Saskatchewan",
    "category": "school-board",
    "type": "Dataset / directory",
    "description": "Official downloadable directory (PDF) of all 27 school divisions: addresses, phones, websites, board chairs, directors and CFOs; kept current via Publications Centre API.",
    "url": "https://publications.saskatchewan.ca/api/v1/products/48334/formats/118525/download",
    "tags": [
      "school divisions",
      "k-12",
      "education",
      "directory",
      "download",
      "pdf"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Nisga'a Lisims Government — Nisga'a Land Title Office",
    "level": "Provincial",
    "jurisdiction": "British Columbia",
    "category": "indigenous",
    "type": "Registry",
    "description": "Request parcel title searches in Canada's only Indigenous-run Torrens land registry, calculate fees, and download survey plans, forms and legislation (PDF).",
    "url": "https://nisgaalandtitle.ca/title-search-and-copy/",
    "tags": [
      "nisgaa",
      "land-title",
      "registry",
      "survey-plans",
      "forms",
      "pdf"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Tłıchǫ Government — Tłıchǫ Mapping",
    "level": "Provincial",
    "jurisdiction": "Northwest Territories",
    "category": "indigenous",
    "type": "Interactive map",
    "description": "ArcGIS dashboards of Tłıchǫ lands: Wenek'e land-use plan zones, cabin registrations, harvesting areas and traditional place-name maps; user manual PDF. Site 403-bot-blocks fetchers.",
    "url": "https://www.tlicho.ca/tlicho-mapping",
    "tags": [
      "tlicho",
      "lands",
      "gis",
      "arcgis",
      "map",
      "land-use-plan",
      "pdf"
    ],
    "dateAdded": "2026-08-25",
    "verified": false
  },
  {
    "name": "Inuvialuit Regional Corporation — ISR Research Portal (Climate Action Map)",
    "level": "Provincial",
    "jurisdiction": "Northwest Territories",
    "category": "indigenous",
    "type": "Interactive map",
    "description": "Search interactive ArcGIS maps of climate-change research and community projects plus an indicator dashboard of socioeconomic and environmental stats for the Inuvialuit Settlement Region.",
    "url": "https://research.inuvialuit.com/",
    "tags": [
      "inuvialuit",
      "climate",
      "research",
      "map",
      "arcgis",
      "dashboard"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Manitoba Métis Federation — Central Registry Online Citizenship Application",
    "level": "Provincial",
    "jurisdiction": "Manitoba",
    "category": "indigenous",
    "type": "Registry",
    "description": "Apply online for Red River Métis citizenship and harvester cards: document and photo upload, genealogy checklist, fee payment; instructions and forms as downloadable PDF.",
    "url": "https://cro.mmf.mb.ca/apply",
    "tags": [
      "metis",
      "citizenship",
      "registry",
      "harvester",
      "application",
      "pdf"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Métis Nation—Saskatchewan — Citizenship Registry",
    "level": "Provincial",
    "jurisdiction": "Saskatchewan",
    "category": "indigenous",
    "type": "Registry",
    "description": "Register as an MN–S citizen or renew, replace and update cards; download fillable citizenship applications, genealogy guides and vital-statistics consent forms (PDF).",
    "url": "https://mns.ca/metis-citizens/citizenship-registry",
    "tags": [
      "metis",
      "citizenship",
      "registry",
      "genealogy",
      "forms",
      "pdf"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Public Health Ontario — Ontario Respiratory Virus Tool",
    "level": "Provincial",
    "jurisdiction": "Ontario",
    "category": "health",
    "type": "Interactive dashboard",
    "description": "Explore weekly COVID-19, influenza and RSV activity by public health unit, age group and setting; filter trends and export graph data to CSV. Updated Fridays.",
    "url": "https://www.publichealthontario.ca/en/Data-and-Analysis/Commonly-Used-Products/Respiratory-Virus-Tool",
    "tags": [
      "public-health-units",
      "respiratory-viruses",
      "covid-19",
      "influenza",
      "rsv",
      "surveillance",
      "dashboard",
      "csv"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Québec — Performance du réseau de la santé et des services sociaux",
    "level": "Provincial",
    "jurisdiction": "Quebec",
    "category": "health",
    "type": "Power BI dashboard",
    "description": "Weekly Power BI dashboard of first-line access, ER, surgery, mental health and HR indicators, filterable by region and CISSS/CIUSSS service territory (RTS); methodology notes included.",
    "url": "https://www.quebec.ca/sante/systeme-et-services-de-sante/organisation-des-services/donnees-systeme-sante-quebecois-services/performance-reseau-sante-services-sociaux",
    "tags": [
      "ciusss",
      "cisss",
      "health-indicators",
      "emergency",
      "wait-times",
      "dashboard",
      "quebec"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Manitoba — Provincial Health System Performance Dashboard",
    "level": "Provincial",
    "jurisdiction": "Manitoba",
    "category": "health",
    "type": "Monthly dashboard reports (PDF)",
    "description": "Monthly PDF scorecards tracking ED/urgent care wait times at sites in all five RHAs, patient experience and expenditure sustainability, with targets and trend context since 2020.",
    "url": "https://www.gov.mb.ca/openmb/infomb/departments/dashboard/index.html",
    "tags": [
      "regional-health-authorities",
      "wait-times",
      "performance",
      "pdf",
      "manitoba"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Ontario Data Catalogue — Public Health Unit Boundaries",
    "level": "Provincial",
    "jurisdiction": "Ontario",
    "category": "health-region",
    "type": "Geospatial open-data dataset",
    "description": "Download digital boundary files (GeoJSON/shape via GeoHub) for all 34 Ontario public health units under the Open Government Licence – Ontario, for mapping and joins to PHU-level data.",
    "url": "https://data.ontario.ca/en/dataset/public-health-unit-boundaries",
    "tags": [
      "public-health-units",
      "boundaries",
      "geospatial",
      "geojson",
      "open-data"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Québec — Découpage territorial du réseau de la santé (MSSS)",
    "level": "Provincial",
    "jurisdiction": "Quebec",
    "category": "health-region",
    "type": "Territory lookup tool + code tables",
    "description": "Look up CLSC territories from postal/municipal codes via the M34 tool, and get official annual code/name lists for the 18 sociosanitary regions, 22 RTS, 93 RLS and 166 CLSC territories.",
    "url": "https://www.quebec.ca/sante/systeme-et-services-de-sante/organisation-des-services/donnees-systeme-sante-quebecois-services/decoupage-territorial-sante-services-sociaux",
    "tags": [
      "rss",
      "rts",
      "rls",
      "clsc",
      "territories",
      "lookup-tool",
      "codes",
      "quebec"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "SINP Processing Statistics — Saskatchewan Immigrant Nominee Program",
    "level": "Provincial",
    "jurisdiction": "Saskatchewan",
    "category": "immigration",
    "type": "Draw results & processing times",
    "description": "Official SINP dashboard: quarterly processing times by category, EOI intake windows and caps for capped sectors, and nominations-issued totals for 2026.",
    "url": "https://www.saskatchewan.ca/residents/moving-to-saskatchewan/live-in-saskatchewan/by-immigrating/saskatchewan-immigrant-nominee-program/sinp-processing-statistics",
    "tags": [
      "pnp",
      "nominee program",
      "processing times",
      "draws",
      "oasis"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Nova Scotia Nominee Program — Live in NS",
    "level": "Provincial",
    "jurisdiction": "Nova Scotia",
    "category": "immigration",
    "type": "Program portal",
    "description": "Official NS government NSNP hub: stream eligibility (Skilled Worker, Graduate, Entrepreneur, Express Entry), EOI submission, draw selection rules, and fee updates.",
    "url": "https://liveinnovascotia.com/nova-scotia-nominee-program",
    "tags": [
      "pnp",
      "nominee program",
      "eoi",
      "streams",
      "eligibility"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "New Brunswick Provincial Nominee Program",
    "level": "Provincial",
    "jurisdiction": "New Brunswick",
    "category": "immigration",
    "type": "Program portal",
    "description": "Immigration NB's NBPNP page: streams, EOI via INB portal, scheduled invitation-draw rounds listing, nomination application steps and post-nomination guidance.",
    "url": "https://www.gnb.ca/en/topic/family-home-community/immigration/provincial-nominee-program.html",
    "tags": [
      "pnp",
      "nominee program",
      "inb portal",
      "expression of interest",
      "draws"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "PEI PNP Expression of Interest Draws",
    "level": "Provincial",
    "jurisdiction": "PEI",
    "category": "immigration",
    "type": "Draw results publication",
    "description": "PEI Office of Immigration's official publication of EOI invitation-to-apply draw dates, sectors prioritized, and selection criteria for the PEI PNP.",
    "url": "https://www.princeedwardisland.ca/en/information/office-of-immigration/expression-of-interest-draws",
    "tags": [
      "pnp",
      "nominee program",
      "draws",
      "eoi",
      "invitations"
    ],
    "dateAdded": "2026-08-25",
    "verified": false
  },
  {
    "name": "Yukon Nominee Program",
    "level": "Provincial",
    "jurisdiction": "Yukon",
    "category": "immigration",
    "type": "Program portal",
    "description": "Official yukon.ca YNP page: employer-driven streams, Expression of Interest intakes and scoring priorities, application forms, and eligibility requirements.",
    "url": "https://yukon.ca/en/yukon-nominee-program",
    "tags": [
      "pnp",
      "nominee program",
      "eoi",
      "employer-driven",
      "yukon"
    ],
    "dateAdded": "2026-08-25",
    "verified": false
  },
  {
    "name": "FCNB — Check Licence and Registration",
    "level": "Provincial",
    "jurisdiction": "New Brunswick",
    "category": "consumer",
    "type": "Lookup tool",
    "description": "Financial and Consumer Services Commission portal to verify insurance, investment, mortgage, real estate, direct-seller, debt-collection and payday-loan licences, plus complaint filing.",
    "url": "https://www.fcnb.ca/en/frauds-and-scams/check-licence-and-registration",
    "tags": [
      "licence-lookup",
      "financial-services",
      "investor-protection",
      "new-brunswick"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Service Nova Scotia — Consumer Protection",
    "level": "Provincial",
    "jurisdiction": "Nova Scotia",
    "category": "consumer",
    "type": "Portal",
    "description": "Service NS hub for consumer rights under the Consumer Protection Act: direct sellers, collections, credit reports, payday loans, funerals, condominiums, and online business complaints.",
    "url": "https://beta.novascotia.ca/programs-and-services/consumer-protection",
    "tags": [
      "consumer-rights",
      "complaints",
      "payday-loans",
      "collections"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "NWT MACA — Consumer Affairs",
    "level": "Provincial",
    "jurisdiction": "Northwest Territories",
    "category": "consumer",
    "type": "Portal",
    "description": "Consumer Affairs office: free complaint process with electronic form, direct-seller/collection/real-estate/gaming licensing, product recalls and consumer information bulletins.",
    "url": "https://www.maca.gov.nt.ca/en/services/consumer-affairs",
    "tags": [
      "complaints",
      "licensing",
      "consumer-bulletins",
      "northwest-territories"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Yukon — Complaint Against a Regulated Business Professional",
    "level": "Provincial",
    "jurisdiction": "Yukon",
    "category": "consumer",
    "type": "Complaint process",
    "description": "Formal complaint process for collection agents, funeral directors, insurers, pawnbrokers, real estate and security professionals, with paired licence-verification pages on yukon.ca.",
    "url": "https://yukon.ca/en/doing-business/professional-licensing/make-complaint-against-government-regulated-business-professional",
    "tags": [
      "complaints",
      "professional-licensing",
      "yukon"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "NL Consumer Affairs Division",
    "level": "Provincial",
    "jurisdiction": "Newfoundland and Labrador",
    "category": "consumer",
    "type": "Portal",
    "description": "Digital Government and Service NL consumer affairs hub: right to cancel, distance contracts, direct-seller licensing and complaints, identity-theft guidance, plus consumer alerts feed.",
    "url": "https://www.gov.nl.ca/dgsnl/consumer/consumer-affairs/",
    "tags": [
      "consumer-rights",
      "direct-sellers",
      "consumer-alerts",
      "newfoundland-and-labrador"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Centre d'expertise hydrique Québec (CEHQ) — Water Levels & Flows",
    "level": "Provincial",
    "jurisdiction": "Quebec",
    "category": "weather",
    "type": "Hydrometric monitoring",
    "description": "~280-station hydrometric network with real-time levels and flows, open-water hydrological forecasts, full historical records, flood/low-flow analyses and Hydroclimatic Atlas.",
    "url": "https://www.cehq.gouv.qc.ca/hydrometrie/index.htm",
    "tags": [
      "quebec",
      "hydrology",
      "river-gauges",
      "flood",
      "real-time",
      "forecast"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "NB River Watch Flood Tracker",
    "level": "Provincial",
    "jurisdiction": "New Brunswick",
    "category": "weather",
    "type": "Flood monitoring",
    "description": "NBEMO interactive map tracking current and forecast water levels on the Saint John River during freshet, with normal/advisory/watch/warning/flood alert levels per location.",
    "url": "https://geonb.snb.ca/rwm/",
    "tags": [
      "new brunswick",
      "flood",
      "freshet",
      "saint john river",
      "forecast",
      "warnings"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Vigilance — Flood Water Monitoring Map (Sécurité publique Québec)",
    "level": "Provincial",
    "jurisdiction": "Quebec",
    "category": "weather",
    "type": "Interactive map",
    "description": "Web app showing the spring-freshet flood situation across Québec in real time, informing residents and mobilizing municipal and government responders during flood events.",
    "url": "https://vigilance.geo.msp.gouv.qc.ca/carte",
    "tags": [
      "quebec",
      "flood",
      "spring thaw",
      "monitoring",
      "emergency-planning"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "PEI Climate Hazard & Risk Information System (CHRIS)",
    "level": "Provincial",
    "jurisdiction": "PEI",
    "category": "environment",
    "type": "Map viewer",
    "description": "Official PEI government/UPEI map portal for coastal erosion, coastal flooding scenarios (2020–2100), inland flooding projections and historical storm events like Fiona and Dorian.",
    "url": "https://chris.peiclimate.ca/",
    "tags": [
      "pei",
      "coastal-flooding",
      "storm-surge",
      "erosion",
      "climate-hazards"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Nova Scotia Coastal Hazard Map (NSGI)",
    "level": "Provincial",
    "jurisdiction": "Nova Scotia",
    "category": "environment",
    "type": "Interactive map",
    "description": "Province of Nova GeoNova viewer for coastal hazard layers including flooding and erosion risk, complementing legacy provincial flood-risk mapping data.",
    "url": "https://nsgi.novascotia.ca/chm",
    "tags": [
      "nova scotia",
      "coastal-flooding",
      "storm-surge",
      "erosion",
      "maps"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Alberta Lobbyist Registry",
    "level": "Provincial",
    "jurisdiction": "Alberta",
    "category": "lobbyist",
    "type": "Lobbyist registry",
    "description": "Free official registry under Alberta's Lobbyists Act; consultant and in-house lobbyist registrations are publicly searchable at any time. Live but blocks some automated fetchers.",
    "url": "https://albertalobbyistregistry.ca/",
    "tags": [
      "alberta",
      "lobbyists",
      "registry",
      "search",
      "transparency"
    ],
    "dateAdded": "2026-08-25",
    "verified": false
  },
  {
    "name": "Nova Scotia Registry of Lobbyists",
    "level": "Provincial",
    "jurisdiction": "Nova Scotia",
    "category": "lobbyist",
    "type": "Lobbyist registry search",
    "description": "Search the provincial Registry of Lobbyists for filings on lobbyists, clients, government funding, departments lobbied, subject matters and techniques used.",
    "url": "https://lobbyist.novascotia.ca/",
    "tags": [
      "nova scotia",
      "lobbyists",
      "registry",
      "search"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "New Brunswick Registry of Lobbyists",
    "level": "Provincial",
    "jurisdiction": "New Brunswick",
    "category": "lobbyist",
    "type": "Lobbyist registry",
    "description": "Web-based registry operated by Service New Brunswick for the Integrity Commissioner; lobbyists file disclosures and the public can view registrations online.",
    "url": "https://www.pxw1.snb.ca/snb9000/product.aspx?productid=A001PSNBCATLOBBY&l=e",
    "tags": [
      "new brunswick",
      "lobbyists",
      "registry"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Granby — Séances du conseil municipal",
    "level": "Municipal",
    "jurisdiction": "Granby",
    "category": "council",
    "type": "Council meetings",
    "description": "Ordres du jour et procès-verbaux PDF des séances du conseil de Granby, webdiffusion en direct sur MAtv/YouTube et périodes de questions citoyennes.",
    "url": "https://www.granby.ca/fr/ville/ville/seances-du-conseil-municipal-2026",
    "tags": [
      "granby",
      "council",
      "agendas",
      "minutes",
      "pdf",
      "webdiffusion",
      "estrie"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Drummondville — Séances du conseil",
    "level": "Municipal",
    "jurisdiction": "Drummondville",
    "category": "council",
    "type": "Council meetings",
    "description": "Ordres du jour, procès-verbaux et vidéos des séances du conseil municipal de Drummondville depuis 2016, avec archives téléchargeables et webdiffusion en direct.",
    "url": "https://www.drummondville.ca/mairie-et-vie-municipale/seances-du-conseil/",
    "tags": [
      "drummondville",
      "council",
      "agendas",
      "minutes",
      "video",
      "centre-du-québec"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Beloeil — Séances du conseil",
    "level": "Municipal",
    "jurisdiction": "Beloeil",
    "category": "council",
    "type": "Council documents",
    "description": "Calendrier 2026, ordres du jour et procès-verbaux (2023–2026) des séances du conseil de Beloeil; séances hybrides avec webdiffusion et période de questions.",
    "url": "https://beloeil.ca/interagir/conseil-municipal/seances-du-conseil/",
    "tags": [
      "beloeil",
      "council",
      "agendas",
      "minutes",
      "pdf",
      "montérégie"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Mascouche — Séances du conseil",
    "level": "Municipal",
    "jurisdiction": "Mascouche",
    "category": "council",
    "type": "Council documents",
    "description": "Prochaines séances, ordres du jour et procès-verbaux annuels (2022–2026) du conseil municipal de Mascouche, avec abonnement aux avis texto/courriel.",
    "url": "https://www.ville.mascouche.qc.ca/ville/vie-democratique/seances-du-conseil",
    "tags": [
      "mascouche",
      "council",
      "agendas",
      "minutes",
      "pdf",
      "lanaudière"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Saint-Jérôme — Conseil municipal et comité exécutif",
    "level": "Municipal",
    "jurisdiction": "Saint-Jérôme",
    "category": "council",
    "type": "Council portal",
    "description": "Portail démocratique de Saint-Jérôme : ordres du jour, procès-verbaux, webdiffusion, membres du conseil et comité exécutif, éthique et déontologie.",
    "url": "https://www.vsj.ca/conseil-municipal-et-comite-executif/",
    "tags": [
      "saint-jérôme",
      "council",
      "agendas",
      "minutes",
      "laurentides"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "NWT Open Data — Hospital, Health Centre & Health Station List",
    "level": "Provincial",
    "jurisdiction": "Northwest Territories",
    "category": "health",
    "type": "Dataset",
    "description": "Download the list of NWT hospitals, health centres and health stations by facility name, community, level of care and contact information — XLSX on the territorial open data portal.",
    "url": "https://opendata.gov.nt.ca/dataset/hospital-health-centre-and-health-station-list/resource/f0160ad7-b4c0-4bf9-9378-586cf59e0783",
    "tags": [
      "hospitals",
      "health centres",
      "facilities",
      "xlsx",
      "open data",
      "nwt"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "NTHSSA — Performance Indicators Dashboard",
    "level": "Provincial",
    "jurisdiction": "Northwest Territories",
    "category": "health-region",
    "type": "Dashboard",
    "description": "Interactive dashboard of NWT health-system indicators: emergency department physician wait times, Stanton CT/ultrasound waits, air-ambulance flights, medical travel volumes and lab workloads.",
    "url": "https://www.nthssa.ca/en/nthssa-performance-indicator-data",
    "tags": [
      "health indicators",
      "wait times",
      "dashboard",
      "nwt"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Yukon Courts — Judgment Database",
    "level": "Provincial",
    "jurisdiction": "Yukon",
    "category": "justice",
    "type": "Lookup tool",
    "description": "Search written reasons for judgment and sentencing from Yukon's Court of Appeal, Supreme Court and Territorial Court — most decisions since 2006, backfilled toward 2001, all as PDFs.",
    "url": "https://www.yukoncourts.ca/en/court-appeal/judgments",
    "tags": [
      "judgments",
      "case law",
      "courts",
      "yukon",
      "pdf"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Elections NWT",
    "level": "Agency",
    "jurisdiction": "Northwest Territories",
    "category": "elections",
    "type": "Election agency portal",
    "description": "Independent electoral authority for the NWT: official territorial election results, register-of-electors information, candidate financial reports and boundary commission reports.",
    "url": "https://www.electionsnwt.ca/",
    "tags": [
      "elections",
      "results",
      "voter registration",
      "nwt"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Elections Nunavut",
    "level": "Agency",
    "jurisdiction": "Nunavut",
    "category": "elections",
    "type": "Election agency portal",
    "description": "Nunavut's election authority: latest general election results, constituency maps, online voter registration check/update and by-election coverage.",
    "url": "https://www.elections.nu.ca/en",
    "tags": [
      "elections",
      "results",
      "voter registration",
      "maps",
      "nunavut"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Elections Nova Scotia — Electoral District Tools",
    "level": "Agency",
    "jurisdiction": "Nova Scotia",
    "category": "elections",
    "type": "Interactive map",
    "description": "Explore provincial electoral districts on an interactive map and download the 2026 Provincial Electoral Map Series — one detailed PDF per district with boundaries and insets.",
    "url": "https://enstools.electionsnovascotia.ca/edinfo/",
    "tags": [
      "elections",
      "electoral districts",
      "maps",
      "pdf",
      "nova scotia"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Elections NL — Electoral District Maps & Poll Data",
    "level": "Agency",
    "jurisdiction": "Newfoundland and Labrador",
    "category": "elections",
    "type": "Map series",
    "description": "Per-district resources for all 40 NL districts: downloadable district maps, poll-by-poll maps and poll summaries alongside MLA and returning-office details.",
    "url": "https://www.elections.gov.nl.ca/resources/maps/",
    "tags": [
      "elections",
      "districts",
      "polls",
      "maps",
      "pdf",
      "newfoundland and labrador"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Elections NL — GIS Boundary Data",
    "level": "Agency",
    "jurisdiction": "Newfoundland and Labrador",
    "category": "elections",
    "type": "Geospatial dataset",
    "description": "Download NL electoral boundary shapefiles for GIS software — current district boundaries (via Open Data NL) plus polling-division files covering all districts.",
    "url": "https://www.elections.gov.nl.ca/resources/gis/",
    "tags": [
      "elections",
      "shapefile",
      "gis",
      "boundaries",
      "newfoundland and labrador"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Elections Yukon",
    "level": "Agency",
    "jurisdiction": "Yukon",
    "category": "elections",
    "type": "Election agency portal",
    "description": "Yukon's independent election authority: official results including the 2025 general election, voter information and candidate guides.",
    "url": "https://electionsyukon.ca/",
    "tags": [
      "elections",
      "results",
      "voter information",
      "yukon"
    ],
    "dateAdded": "2026-08-25",
    "verified": false
  },
  {
    "name": "Saskatchewan — SAID Income Support for People with Disabilities",
    "level": "Provincial",
    "jurisdiction": "Saskatchewan",
    "category": "benefits",
    "type": "Program portal & rates",
    "description": "Saskatchewan Assured Income for Disability hub: monthly rate tables by community tier, income exemptions, and online application through a Saskatchewan Account with document upload.",
    "url": "https://www.saskatchewan.ca/residents/family-and-social-support/people-with-disabilities/income-support-for-people-with-disabilities",
    "tags": [
      "income support",
      "disability",
      "said",
      "benefits",
      "saskatchewan"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Manitoba — Rent Assist Estimator",
    "level": "Provincial",
    "jurisdiction": "Manitoba",
    "category": "benefits",
    "type": "Calculator",
    "description": "Estimate monthly Rent Assist shelter benefits for low-income private renters — compares 80% of median market rent against 30% of net household income by household size.",
    "url": "https://gov.mb.ca/fs/eia/estimator.html",
    "tags": [
      "rent assist",
      "calculator",
      "housing benefit",
      "manitoba"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Québec — Services en ligne, aide financière de dernier recours",
    "level": "Provincial",
    "jurisdiction": "Quebec",
    "category": "benefits",
    "type": "Client portal",
    "description": "Mon dossier portal for Québec social assistance: verify payment amounts and dates, submit documents online, track appointments and deadlines, apply and make repayments.",
    "url": "https://www.quebec.ca/famille-et-soutien-aux-personnes/aide-sociale-et-solidarite-sociale/services-en-ligne",
    "tags": [
      "social assistance",
      "payments",
      "client portal",
      "quebec"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "NB Power — Current Outages",
    "level": "Crown Corp",
    "jurisdiction": "New Brunswick",
    "category": "utilities",
    "type": "Outage dashboard",
    "description": "Live outage map and per-region outage lists for NB Power — unplanned and planned interruptions with customers affected, refreshed every 10 minutes; lookup by phone or account number.",
    "url": "https://www.nbpower.com/open/outages.aspx?lang=en",
    "tags": [
      "outages",
      "electricity",
      "real-time",
      "map",
      "new brunswick"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Otipemisiwak Métis Government — Harvesting Program",
    "level": "Provincial",
    "jurisdiction": "Alberta",
    "category": "indigenous",
    "type": "Registry & program",
    "description": "Métis Harvester Identification Cards for Otipemisiwak citizens: hunt, fish and trap for food in designated Alberta harvesting areas, with RELM integration for free domestic fishing licences.",
    "url": "https://albertametis.com/harvesting/",
    "tags": [
      "metis",
      "harvesting",
      "registry",
      "section 35",
      "alberta"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Qikiqtani Inuit Association — Land Use Registry",
    "level": "Provincial",
    "jurisdiction": "Nunavut",
    "category": "indigenous",
    "type": "Registry portal",
    "description": "Submit and track land-use applications for access to Inuit Owned Lands in the Qikiqtani Region — account-based portal with application status and permitting workflow.",
    "url": "https://apps.qia.ca/appform/",
    "tags": [
      "inuit",
      "land use",
      "permits",
      "registry",
      "nunavut"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Nunavut Planning Commission — Public Registry",
    "level": "Provincial",
    "jurisdiction": "Nunavut",
    "category": "planning-zoning",
    "type": "Land-use registry",
    "description": "Search Nunavut land-use project proposals on a map or by keyword and region — proposal notices, documents, schedules and comment periods, with new-document email alerts.",
    "url": "https://lupit.nunavut.ca/portal/registry/",
    "tags": [
      "land use",
      "planning",
      "registry",
      "map",
      "nunavut"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Nunatsiavut Government — Labrador Inuit Lands",
    "level": "Provincial",
    "jurisdiction": "Newfoundland and Labrador",
    "category": "indigenous",
    "type": "Land administration",
    "description": "Lands Division hub for Labrador Inuit Lands: applications registry for private interests, access rules under the Labrador Inuit Land Claims Agreement and the Regional Land Use Plan.",
    "url": "https://nunatsiavut.com/department/lands-natural-resources/labrador-inuit-lands/",
    "tags": [
      "inuit",
      "lands",
      "land claims",
      "labrador",
      "applications"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "Northwest Territories Nominee Program",
    "level": "Provincial",
    "jurisdiction": "Northwest Territories",
    "category": "immigration",
    "type": "Immigration program portal",
    "description": "NTNP streams (Employer-Driven, Francophone, Business) with an online Expression-of-Interest portal — points grid, draw schedule and employer application accounts.",
    "url": "https://www.immigratenwt.ca/",
    "tags": [
      "immigration",
      "nominee program",
      "eoi",
      "northwest territories"
    ],
    "dateAdded": "2026-08-25",
    "verified": true
  },
  {
    "name": "NRCan — Fuel Prices by City",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "utilities",
    "type": "Lookup tool",
    "description": "Compare daily, weekly or monthly retail gasoline, diesel, propane and furnace-oil prices for 70+ Canadian cities; export tables as XLS with tax and margin breakdowns.",
    "url": "https://www2.nrcan-rncan.gc.ca/eneene/sources/pripri/prices_bycity_e.cfm",
    "tags": [
      "fuel-prices",
      "gasoline",
      "diesel",
      "nrcan",
      "xls",
      "energy"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "CNSC — Nuclear Substance Licence Database",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "safety",
    "type": "Registry",
    "description": "Search all active CNSC licences for nuclear substances, radiation devices and Class II facilities by use type, organization, city or province — medical, industrial and research.",
    "url": "https://www.cnsc-ccsn.gc.ca/eng/nuclear-substances/licensing-nuclear-substances-and-radiation-devices/licence-search",
    "tags": [
      "cnsc",
      "nuclear",
      "licences",
      "registry",
      "radiation",
      "search"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "NRCan — Canada's Critical Minerals Map",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "science",
    "type": "Interactive map",
    "description": "Interactive map of Canada's 34 critical-mineral mines, advanced projects and processing plants; filter by commodity and download shapefile, FGDB or WMS.",
    "url": "https://atlas.gc.ca/critical-minerals/en/index.html",
    "tags": [
      "critical-minerals",
      "mining",
      "nrcan",
      "shapefile",
      "wms",
      "geoscience"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "Canada Energy Regulator — Commodity Tracking System",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "utilities",
    "type": "Lookup tool",
    "description": "Query monthly CER-regulated trade in electricity, crude oil, natural gas, LNG and NGLs by port, region and year; export reports as Excel, PDF or HTML.",
    "url": "https://apps.cer-rec.gc.ca/CommodityStatistics/Statistics.aspx?language=english",
    "tags": [
      "cer",
      "electricity",
      "natural-gas",
      "crude-oil",
      "imports",
      "exports",
      "excel"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "Canada Energy Regulator — International Power Lines Dashboard",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "utilities",
    "type": "Dashboard",
    "description": "Map and filter Canada's international power lines by status, origin and destination; view voltage, capacity and length, with CSV download from Open Government.",
    "url": "https://www.cer-rec.gc.ca/en/data-analysis/facilities-we-regulate/international-power-lines-dashboard/index.html",
    "tags": [
      "cer",
      "electricity",
      "intertie",
      "power-lines",
      "csv",
      "dashboard"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "DFO — Seafisheries Landings Dashboard",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "environment",
    "type": "Dashboard",
    "description": "Filter 1990–2024 commercial seafisheries landings by province, species and year on an interactive dashboard; download volume and value as CSV.",
    "url": "https://www.dfo-mpo.gc.ca/stats/commercial/sea-maritimes-eng.htm",
    "tags": [
      "dfo",
      "fisheries",
      "landings",
      "catch",
      "csv",
      "dashboard"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "ECCC — National Air Pollution Surveillance (NAPS)",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "environment",
    "type": "Dataset",
    "description": "Query hourly PM2.5, O3, NO2, SO2 and CO from ~280 stations; custom CSV via the query tool plus pre-built annual files in the ECCC catalogue.",
    "url": "https://open.canada.ca/data/en/dataset/1b36a356-defd-4813-acea-47bc3abd859b",
    "tags": [
      "naps",
      "air quality",
      "pm2.5",
      "ozone",
      "csv",
      "eccc"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "ECCC — Air Pollutant Emissions Inventory Search",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "environment",
    "type": "Lookup tool",
    "description": "Query national and provincial air pollutant and black carbon emissions since 1990 by substance, sector and region; download CSV or Excel.",
    "url": "https://pollution-waste.canada.ca/air-emission-inventory/",
    "tags": [
      "apei",
      "emissions",
      "air pollutants",
      "black carbon",
      "csv",
      "excel"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "ECCC — Canadian Environmental Sustainability Indicators",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "environment",
    "type": "Dashboard",
    "description": "Browse CESI air, water, climate, biodiversity and waste indicators with interactive maps and download national and provincial trend tables as CSV.",
    "url": "https://www.canada.ca/en/environment-climate-change/services/environmental-indicators.html",
    "tags": [
      "cesi",
      "indicators",
      "climate",
      "water",
      "csv",
      "eccc"
    ],
    "dateAdded": "2026-08-26",
    "verified": false
  },
  {
    "name": "Canadian Coast Guard — e-Navigation Data Catalogue",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "aviation-marine",
    "type": "Open data portal",
    "description": "Search 41 official marine datasets—AIS aids to navigation, List of Lights, ice, weather XML and notices—and download by coast or Great Lakes region.",
    "url": "https://e-navigation.canada.ca/gn/index-en",
    "tags": [
      "coast guard",
      "ais",
      "navigation",
      "lights",
      "xml",
      "download"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "Transport Canada — Key Transportation Indicators",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "transport-roads",
    "type": "Dashboard",
    "description": "Interactive dashboard of air, marine, road and trade stats (passengers, crossings, commodities) with downloadable ZIP tables by mode.",
    "url": "https://tdih-cdit.tc.canada.ca/en/dashboard/key-transportation-indicators",
    "tags": [
      "transport",
      "dashboard",
      "air",
      "marine",
      "road",
      "trade",
      "zip",
      "statistics"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "CMHC — Residential Mortgage Industry Data Dashboard",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "housing",
    "type": "Dashboard",
    "description": "Filter quarterly Canadian mortgage stock, originations, arrears and LTV by lender type; download 2015–2026 tables as XLSX.",
    "url": "https://www.cmhc-schl.gc.ca/professionals/housing-markets-data-and-research/housing-data/residential-mortgage-industry-data-dashboard",
    "tags": [
      "cmhc",
      "mortgage",
      "housing-finance",
      "dashboard",
      "xlsx",
      "arrears"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "CMHC — Housing Accelerator Fund Progress Report",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "housing",
    "type": "Dashboard",
    "description": "See HAF funding, permit targets and incented units by province and community in an interactive progress report (through March 2026).",
    "url": "https://www.cmhc-schl.gc.ca/professionals/project-funding-and-mortgage-financing/funding-programs/all-funding-programs/housing-accelerator-fund/housing-accelerator-fund-rounds-data",
    "tags": [
      "cmhc",
      "housing",
      "housing-accelerator-fund",
      "permits",
      "funding",
      "dashboard"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "Transport Canada — Navigation Protection Program Registry",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "aviation-marine",
    "type": "Lookup tool",
    "description": "Search proposed and approved works on Canadian navigable waters by map or waterway; view project records and public comment notices.",
    "url": "https://nwar-rlen.tc.canada.ca/about-apropos",
    "tags": [
      "navigable-waters",
      "registry",
      "marine",
      "transport",
      "map",
      "search"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "CMHC — Household Characteristics and Core Housing Need Tables",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "housing",
    "type": "Data tables",
    "description": "Download Excel tables on core housing need, tenure, income and household type for Canada, provinces, territories and CMAs.",
    "url": "https://www.cmhc-schl.gc.ca/professionals/housing-markets-data-and-research/housing-data/data-tables/household-characteristics",
    "tags": [
      "cmhc",
      "core-housing-need",
      "housing",
      "excel",
      "tenure",
      "income"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "PHAC — Opioid- and Stimulant-related Harms Dashboard",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "health",
    "type": "Dashboard",
    "description": "Explore maps and charts of opioid/stimulant deaths, hospitalizations, ED visits and EMS responses by province since 2016; download the full series as ZIP/CSV.",
    "url": "https://health-infobase.canada.ca/substance-related-harms/opioids-stimulants/",
    "tags": [
      "phac",
      "opioids",
      "stimulants",
      "overdose",
      "dashboard",
      "csv",
      "zip"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "IRCC — Permanent Residents Monthly Open Data",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "immigration",
    "type": "Open data",
    "description": "Download monthly PR admissions by province, CMA, citizenship, category, age and gender as CSV or XLSX; updated monthly through June 2026.",
    "url": "https://open.canada.ca/data/en/dataset/f7e5498e-0ad8-4417-85c9-9b8aff9b9eda",
    "tags": [
      "ircc",
      "permanent residents",
      "immigration",
      "open data",
      "csv",
      "xlsx"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "PHAC — Canadian Chronic Disease Surveillance System",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "health",
    "type": "Data tool",
    "description": "Chart incidence and prevalence for 20+ chronic conditions by province, age and sex from 2000 onward; download custom tables from the data tool.",
    "url": "https://health-infobase.canada.ca/ccdss/data-tool/",
    "tags": [
      "phac",
      "chronic disease",
      "surveillance",
      "ccdss",
      "dashboard",
      "csv"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "PHAC — Health of People in Canada Dashboard",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "health",
    "type": "Dashboard",
    "description": "Explore 50+ population-health indicators (life expectancy, chronic disease, substance use, social factors) with maps and trends; download the dashboard CSV.",
    "url": "https://health-infobase.canada.ca/health-of-people-in-canada-dashboard/",
    "tags": [
      "phac",
      "population health",
      "indicators",
      "dashboard",
      "csv"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "CRA — GST/HST Registry Search",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "taxes",
    "type": "Lookup tool",
    "description": "Confirm a supplier's GST/HST number was registered on the invoice date by entering the 9-digit BN, legal name, and transaction date.",
    "url": "https://www.businessregistration-inscriptionentreprise.gc.ca/ebci/brom/registry/pub/reg_01_Ld.action",
    "tags": [
      "cra",
      "gst",
      "hst",
      "registry",
      "lookup",
      "itc"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "OSFI — Bank Financial Data (FINDAT)",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "finance",
    "type": "Dataset",
    "description": "Download monthly/quarterly bank filings as CSV—balance sheets, BASEL III capital, income—plus Open Government API access.",
    "url": "https://open.canada.ca/data/en/dataset/91ed76b4-a1a2-4f87-9c4c-59cd64f7a9de",
    "tags": [
      "osfi",
      "banks",
      "findat",
      "csv",
      "api",
      "capital"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "ISED — CSBFP Lender Finance Map",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "business",
    "type": "Interactive map",
    "description": "Find 3,180+ Canada Small Business Financing Program lender branches on an interactive map, or download the full point list as CSV.",
    "url": "https://www.ised-isde.canada.ca/site/maps/en/finance-map",
    "tags": [
      "ised",
      "csbfp",
      "lenders",
      "map",
      "csv",
      "small business"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "Competition Bureau — Deceptive Marketing Cases",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "consumer",
    "type": "Lookup tool",
    "description": "Search every public deceptive-marketing case since 2015 by company, product, or outcome, including consent agreements and Tribunal rulings.",
    "url": "https://competition-bureau.canada.ca/en/deceptive-marketing-practices/cases-and-outcomes",
    "tags": [
      "competition",
      "deceptive marketing",
      "enforcement",
      "search",
      "consumer"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "FINTRAC — Transaction Report Volume Data",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "finance",
    "type": "Dataset",
    "description": "Download STR, large-cash, EFT and casino-disbursement report counts by FSA postal code and sector as CSV/XLSX (2011–2023).",
    "url": "https://open.canada.ca/data/en/dataset/81cc47ac-e88d-4b7f-9318-8774a2d919e6",
    "tags": [
      "fintrac",
      "aml",
      "csv",
      "xlsx",
      "postal code",
      "str"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "Canada Council for the Arts — Grant Recipients Data Tables",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "culture",
    "type": "Open data tables",
    "description": "Download complete lists of Canada Council grant recipients from 2013–present by program, field, community and riding; Excel and CSV plus methodology PDFs.",
    "url": "https://canadacouncil.ca/research/data-tables",
    "tags": [
      "canada council",
      "grants",
      "arts funding",
      "csv",
      "excel",
      "open data"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "National Film Board — Collection Catalogue",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "culture",
    "type": "Film catalogue",
    "description": "Search every NFB production since 1939—13,000+ documentaries, animations and films—by title, genre, format and duration; thousands stream free on NFB.ca.",
    "url": "https://collection.nfb.ca/home",
    "tags": [
      "nfb",
      "film",
      "documentary",
      "animation",
      "catalogue",
      "search"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "Library and Archives Canada — Government of Canada Web Archive",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "heritage",
    "type": "Web archive",
    "description": "Search and browse 35+ TB of preserved Canadian websites since 2005: federal sites, COVID-19, TRC, royal commissions, and historical .ca domain crawls.",
    "url": "https://webarchiveweb.bac-lac.canada.ca/en/",
    "tags": [
      "lac",
      "web archive",
      "wayback",
      "government websites",
      "search"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "CHIN — Nomenclature for Museum Cataloging",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "heritage",
    "type": "Controlled vocabulary",
    "description": "Search and browse North America's standard object-name thesaurus for museum cataloguing; bilingual terms plus SPARQL/LOD endpoint and reconciliation API.",
    "url": "https://www.nomenclature.info/apropos-about.app?lang=en",
    "tags": [
      "chin",
      "museums",
      "nomenclature",
      "sparql",
      "linked open data",
      "api"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "Library and Archives Canada — Aurora Catalogue",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "heritage",
    "type": "Library catalogue",
    "description": "Search LAC's published holdings—books, newspapers, magazines, official publications, maps, music and theses—via the national bibliography (WorldCat Discovery).",
    "url": "https://bac-lac.on.worldcat.org/discovery?lang=en",
    "tags": [
      "lac",
      "aurora",
      "library catalogue",
      "worldcat",
      "bibliography",
      "search"
    ],
    "dateAdded": "2026-08-26",
    "verified": false
  },
  {
    "name": "Island Health — Food Facility Inspections",
    "level": "Provincial",
    "jurisdiction": "British Columbia",
    "category": "health-region",
    "type": "Lookup tool",
    "description": "Search Island Health restaurant and food-facility inspections by city; view hazard ratings, violations and closure orders for Vancouver Island premises.",
    "url": "https://inspections.myhealthdepartment.com/island-health/program-food",
    "tags": [
      "food inspections",
      "restaurants",
      "vancouver island",
      "health authority",
      "lookup"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "Ministry of Environment — Air Quality Health Index Map",
    "level": "Provincial",
    "jurisdiction": "British Columbia",
    "category": "environment",
    "type": "Interactive map",
    "description": "View hourly AQHI, PM2.5, ozone, NO2 and SO2 at BC monitoring stations on an interactive map; click stations for readings. Refreshes every 60 minutes.",
    "url": "https://www.gov.bc.ca/airqualitymap",
    "tags": [
      "air quality",
      "aqhi",
      "pm2.5",
      "monitoring",
      "map",
      "environment"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "Ministry of Water, Land and Resource Stewardship — Water Licence Search",
    "level": "Provincial",
    "jurisdiction": "British Columbia",
    "category": "environment",
    "type": "Lookup tool",
    "description": "Search BC surface-water and groundwater licences by client, source, PID, watershed or region; download matching licence data as Excel and retrieve scanned documents.",
    "url": "https://j200.gov.bc.ca/pub/ams/Default.aspx?PossePresentation=AMSPublic&PosseObjectDef=o_ATIS_DocumentSearch&PosseMenuName=WS_Main",
    "tags": [
      "water licences",
      "groundwater",
      "excel",
      "registry",
      "lookup"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "Heritage Branch — BC Register of Historic Places",
    "level": "Provincial",
    "jurisdiction": "British Columbia",
    "category": "heritage",
    "type": "Registry",
    "description": "Search 5,000+ provincially, municipally and federally recognized historic places by name, address or map; download filtered records as CSV or shapefile.",
    "url": "https://apps.nrs.gov.bc.ca/bcrhp/",
    "tags": [
      "heritage register",
      "historic places",
      "csv",
      "shapefile",
      "gis",
      "map"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "ICBC — Crash Statistics and Open Data",
    "level": "Provincial",
    "jurisdiction": "British Columbia",
    "category": "transport-roads",
    "type": "Open data portal",
    "description": "Download ICBC crash, casualty, intersection and vehicle-population open datasets (CSV) and explore interactive Tableau dashboards of reported crashes across B.C.",
    "url": "https://www.icbc.com/about-icbc/newsroom/Statistics",
    "tags": [
      "crashes",
      "road safety",
      "csv",
      "open data",
      "tableau",
      "icbc"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "Treasury Board & Finance — Grant Payments Disclosure",
    "level": "Provincial",
    "jurisdiction": "Alberta",
    "category": "budget",
    "type": "Dataset",
    "description": "Download CSVs of every Alberta grant by ministry, recipient, amount and program (2014–present); current-year CSV/XML export also available.",
    "url": "https://open.alberta.ca/opendata/grant-disclosure",
    "tags": [
      "grants",
      "spending",
      "csv",
      "xml",
      "treasury",
      "disclosure"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "Environment & Protected Areas — Environmental Records Viewer",
    "level": "Provincial",
    "jurisdiction": "Alberta",
    "category": "environment",
    "type": "Lookup tool",
    "description": "Map-search and download contaminated-site files, reclamation certificates, waste/industrial/pesticide authorizations and Water Act licences.",
    "url": "https://geospatial.alberta.ca/erv/",
    "tags": [
      "contaminated sites",
      "reclamation",
      "water licences",
      "map",
      "environment"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "Environment & Protected Areas — Air Data Warehouse",
    "level": "Provincial",
    "jurisdiction": "Alberta",
    "category": "environment",
    "type": "Dataset",
    "description": "Filter industrial and airshed ambient stations and download Alberta air-quality extracts (PM2.5, NO2, SO2, O3+) as CSV.",
    "url": "https://datamanagementplatform.alberta.ca/ambient",
    "tags": [
      "air quality",
      "csv",
      "pm2.5",
      "emissions",
      "monitoring"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "Education & Childcare — Childcare Search",
    "level": "Provincial",
    "jurisdiction": "Alberta",
    "category": "education",
    "type": "Lookup tool",
    "description": "Search licensed daycares, preschools and family day-home agencies by city, postal code, age and type; map view plus 18 months of non-compliance history.",
    "url": "https://childcare.alberta.ca/childcaresearch",
    "tags": [
      "childcare",
      "inspections",
      "licensing",
      "map",
      "lookup"
    ],
    "dateAdded": "2026-08-26",
    "verified": false
  },
  {
    "name": "Treasury Board & Finance — Non-profit Listing Dashboard",
    "level": "Provincial",
    "jurisdiction": "Alberta",
    "category": "business",
    "type": "Dashboard",
    "description": "Search Alberta Corporate Registry non-profits by name, type, status and location; export the monthly listing and explore Power BI charts.",
    "url": "https://www.alberta.ca/alberta-non-profit-listing-dashboard",
    "tags": [
      "non-profit",
      "registry",
      "xlsx",
      "dashboard",
      "corporate registry"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "Water Security Agency — Drinking Water Quality Search",
    "level": "Provincial",
    "jurisdiction": "Saskatchewan",
    "category": "environment",
    "type": "Lookup tool",
    "description": "Search any Saskatchewan waterworks for lab sample results, inspections and quarterly bacti reports; download historical tests against provincial drinking-water standards.",
    "url": "https://waterquality.saskatchewan.ca/DrinkingWater",
    "tags": [
      "drinking water",
      "water quality",
      "inspections",
      "download",
      "saskatchewan"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "Ministry of Energy and Resources — MARS Mineral Disposition Map",
    "level": "Provincial",
    "jurisdiction": "Saskatchewan",
    "category": "science",
    "type": "Lookup tool",
    "description": "Public map of Saskatchewan mineral permits and claims: search by disposition number or cadastral/grid, see free-and-clear vs restricted land, updated daily.",
    "url": "https://mars.isc.ca/MARSWeb/publicmap/FeatureAvailabilitySearch.aspx",
    "tags": [
      "minerals",
      "claims",
      "tenure",
      "map",
      "saskatchewan"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "Water Security Agency — Water Wells Map",
    "level": "Provincial",
    "jurisdiction": "Saskatchewan",
    "category": "utilities",
    "type": "Interactive map",
    "description": "Interactive map of ~125,000 water-well drilling records (lithology, depth, completion) submitted by Saskatchewan drillers; locate wells by area.",
    "url": "https://gis.wsask.ca/Html5Viewer/index.html?viewer=WaterWells.WellsViewer/",
    "tags": [
      "water wells",
      "groundwater",
      "gis",
      "map",
      "saskatchewan"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "eHealth Saskatchewan — Specialist Directory",
    "level": "Provincial",
    "jurisdiction": "Saskatchewan",
    "category": "health",
    "type": "Lookup tool",
    "description": "Look up ~200 Saskatchewan surgeons and 2,600 procedures with weekly-updated surgical wait times so patients can compare specialists and travel for faster surgery.",
    "url": "https://specialists.ehealthsask.ca/",
    "tags": [
      "wait times",
      "surgery",
      "specialists",
      "health",
      "saskatchewan"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "Ministry of Education — Regulated Child Care Finder",
    "level": "Provincial",
    "jurisdiction": "Saskatchewan",
    "category": "education",
    "type": "Lookup tool",
    "description": "Search 1,380 regulated child-care centres and homes on an interactive map; filter by infants, extended/24-hour hours, francophone and teen-parent programs.",
    "url": "https://www.saskatchewan.ca/residents/family-and-social-support/child-care/find-a-child-care-provider-in-my-community",
    "tags": [
      "child care",
      "daycare",
      "map",
      "early learning",
      "saskatchewan"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "Manitoba Petroleum Branch — Oil & Gas GIS Map Gallery",
    "level": "Provincial",
    "jurisdiction": "Manitoba",
    "category": "open-data",
    "type": "Interactive map + shapefile downloads",
    "description": "Search wells, batteries and facilities on an interactive GIS map; download shapefiles of well locations, Crown lands, unit/field/pool boundaries (ZIP, 2026).",
    "url": "https://www.gov.mb.ca/iem/petroleum/gis/index.html",
    "tags": [
      "oil",
      "gas",
      "wells",
      "shapefile",
      "gis",
      "manitoba",
      "zip"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "Manitoba Environment — Environmental Assessment Public Registry",
    "level": "Provincial",
    "jurisdiction": "Manitoba",
    "category": "environment",
    "type": "Public registry",
    "description": "Browse Environment Act proposals by status (open for comment, in process, licensed); download licences, summaries and compliance reports as PDF.",
    "url": "https://www.gov.mb.ca/sd/eal/registries/index.html",
    "tags": [
      "environmental assessment",
      "licences",
      "public registry",
      "pdf",
      "manitoba"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "Manitoba Education — K-12 Education Data Dashboard",
    "level": "Provincial",
    "jurisdiction": "Manitoba",
    "category": "school-board",
    "type": "Dashboard",
    "description": "View provincial and divisional dashboards for enrolment, EDI, Grade 3–12 assessments, credit attainment and high school graduation rates.",
    "url": "https://www.edu.gov.mb.ca/k12/grad_rates/index.html",
    "tags": [
      "education",
      "graduation",
      "assessments",
      "dashboard",
      "manitoba"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "Manitoba Office of Drinking Water — Advisories Map",
    "level": "Provincial",
    "jurisdiction": "Manitoba",
    "category": "utilities",
    "type": "Advisory map",
    "description": "See current boil-water, water-quality and avoidance advisories for public and semi-public systems on a map, with short/medium/long-term status.",
    "url": "https://www.gov.mb.ca/sd/water/drinking-water/advisory/map.html",
    "tags": [
      "drinking water",
      "boil water",
      "advisories",
      "map",
      "manitoba"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "Manitoba Parks — Parks Reservation Service",
    "level": "Provincial",
    "jurisdiction": "Manitoba",
    "category": "parks",
    "type": "Reservation tool",
    "description": "Reserve campsites, cabins, yurts and group-use areas at 46 provincial-park locations online via manitoba.goingtocamp.com, or by phone.",
    "url": "https://www.manitoba.ca/sd/parks/prs/index.html",
    "tags": [
      "camping",
      "parks",
      "reservations",
      "manitoba"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "Ministry of Municipal Affairs and Housing — Financial Information Return",
    "level": "Provincial",
    "jurisdiction": "Ontario",
    "category": "budget",
    "type": "Open data portal",
    "description": "Download yearly CSV ZIPs of every Ontario municipality's revenues, expenses, reserves and stats (2000–2025), plus dashboards and per-municipality reports.",
    "url": "https://efis.fma.csc.gov.on.ca/fir/",
    "tags": [
      "ontario",
      "municipal finance",
      "csv",
      "budget",
      "fir"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "Metrolinx — GO Transit and UP Express GTFS",
    "level": "Provincial",
    "jurisdiction": "Ontario",
    "category": "transit",
    "type": "GTFS feed",
    "description": "Download current GO Transit and UP Express GTFS.zip schedule feeds (updated Aug 2026) for regional rail and bus apps.",
    "url": "https://www.gotransit.com/en/partner-with-us/software-developers",
    "tags": [
      "gtfs",
      "go transit",
      "metrolinx",
      "transit",
      "zip"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "Ministry of Natural Resources — Crown Land Use Policy Atlas",
    "level": "Provincial",
    "jurisdiction": "Ontario",
    "category": "planning-zoning",
    "type": "Interactive map",
    "description": "Map Crown land-use policy areas across 39 million hectares and search area-specific policy reports and amendments in the interactive atlas.",
    "url": "https://www.lioapplications.lrc.gov.on.ca/CLUPA/index.html?viewer=CLUPA.CLUPA&locale=en-CA",
    "tags": [
      "crown land",
      "land use",
      "map",
      "ontario",
      "clupa"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "Ministry of Energy and Mines — MLAS Mining Claims Map",
    "level": "Provincial",
    "jurisdiction": "Ontario",
    "category": "science",
    "type": "Interactive map",
    "description": "Look up active unpatented mining claims, mineral titles and lands open for staking on the public MLAS Map Viewer.",
    "url": "https://www.lioapplications.lrc.gov.on.ca/MLAS/Index.html?viewer=MLAS.MLAS&locale=en-CA",
    "tags": [
      "mining",
      "claims",
      "map",
      "ontario",
      "mlas"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "Ministry of the Environment — Source Protection Information Atlas",
    "level": "Provincial",
    "jurisdiction": "Ontario",
    "category": "environment",
    "type": "Interactive map",
    "description": "Look up any address to see wellhead protection areas, intake zones, vulnerable aquifers and water-taking permits on the provincial source-water atlas.",
    "url": "https://www.lioapplications.lrc.gov.on.ca/SourceWaterProtection/index.html?viewer=SourceWaterProtection.SWPViewer&locale=en-CA",
    "tags": [
      "drinking water",
      "source protection",
      "map",
      "ontario",
      "environment"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "RBQ — Registre des détenteurs de licence",
    "level": "Provincial",
    "jurisdiction": "Quebec",
    "category": "consumer",
    "type": "Lookup tool",
    "description": "Look up any Quebec construction contractor or owner-builder by name or licence number; see categories, bonding, claims and public-works restrictions.",
    "url": "https://www.pes.rbq.gouv.qc.ca/RegistreLicences",
    "tags": [
      "rbq",
      "contractor",
      "licence",
      "construction",
      "quebec"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "MAPAQ — Liste des établissements sous permis",
    "level": "Provincial",
    "jurisdiction": "Quebec",
    "category": "agriculture",
    "type": "Lookup tool",
    "description": "Search MAPAQ food permits (restaurants, retailers, abattoirs) by name, type or region and download the list as CSV or PDF.",
    "url": "https://web.mapaq.gouv.qc.ca/bh/etablissements-sous-permis",
    "tags": [
      "mapaq",
      "food",
      "permits",
      "inspection",
      "csv",
      "quebec"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "CPTAQ — Rechercher un dossier",
    "level": "Provincial",
    "jurisdiction": "Quebec",
    "category": "agriculture",
    "type": "Lookup tool",
    "description": "Search 370,000+ CPTAQ agricultural-zone decisions, rights declarations and orders since 1978 by file number, lot or municipality.",
    "url": "https://www.cptaq.gouv.qc.ca/rechercher-un-dossier",
    "tags": [
      "cptaq",
      "agricultural zone",
      "decisions",
      "land use",
      "quebec"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "MELCCFP — Répertoire des terrains contaminés",
    "level": "Provincial",
    "jurisdiction": "Quebec",
    "category": "environment",
    "type": "Lookup tool",
    "description": "Search Quebec contaminated and rehabilitated sites by region, municipality or contaminant; map them in Repère GTC and export to Excel.",
    "url": "https://www.environnement.gouv.qc.ca/sol/terrains/terrains-contamines/recherche.asp",
    "tags": [
      "contaminated sites",
      "soil",
      "excel",
      "melccfp",
      "quebec"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "MRNF — GESTIM mining titles registry",
    "level": "Provincial",
    "jurisdiction": "Quebec",
    "category": "science",
    "type": "Lookup tool",
    "description": "Query Quebec's public mining-rights register by map or criteria, download title data and generate custom claim maps (PDF).",
    "url": "https://gestim.mines.gouv.qc.ca/",
    "tags": [
      "mining",
      "claims",
      "gestim",
      "pdf",
      "map",
      "quebec"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "Department of Environment and Local Government — Contaminated Sites Viewer",
    "level": "Provincial",
    "jurisdiction": "New Brunswick",
    "category": "environment",
    "type": "Interactive map",
    "description": "Map every open and closed contaminated-site file in NB; search by address, click a site for details. Weekday-updated GeoNB interactive map.",
    "url": "https://geonb.snb.ca/contaminated_sites__lieux_contamines/index.html",
    "tags": [
      "contaminated-sites",
      "environment",
      "map",
      "geonb",
      "brownfields"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "Department of Health — Surgical Wait Times",
    "level": "Provincial",
    "jurisdiction": "New Brunswick",
    "category": "health",
    "type": "Dashboard",
    "description": "Look up typical wait times by surgical procedure (hip/knee, cataract, CABG and more) plus trending, target and surgeon-level reports.",
    "url": "https://www1.gnb.ca/0217/SurgicalWaitTimes/Index-e.aspx",
    "tags": [
      "wait-times",
      "surgery",
      "hospitals",
      "dashboard",
      "health"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "New Brunswick Health Council — Data Tables",
    "level": "Provincial",
    "jurisdiction": "New Brunswick",
    "category": "health-region",
    "type": "Open data portal",
    "description": "Compare health indicators by zone, community, hospital or school district and export any table as CSV or PDF — acute care, surveys and wait times.",
    "url": "https://nbhc.ca/data/browse/data-tables",
    "tags": [
      "health-indicators",
      "csv",
      "pdf",
      "health-zones",
      "surveys"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "Department of Education and Early Childhood Development — Child Care Finder",
    "level": "Provincial",
    "jurisdiction": "New Brunswick",
    "category": "education",
    "type": "Lookup tool",
    "description": "Map-search licensed early-learning and childcare sites by community or name; filter by age, open spaces, designation, language and district.",
    "url": "https://www.nbed.nb.ca/parentportal/en/Search/Elc/",
    "tags": [
      "childcare",
      "early-learning",
      "map",
      "licensing",
      "lookup"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "NB Natural Resources — Fishing Regulation Web App",
    "level": "Provincial",
    "jurisdiction": "New Brunswick",
    "category": "parks",
    "type": "Lookup tool",
    "description": "Look up recreational angling seasons, bag/size limits and gear rules by water body, fishing area, town or coordinates on an interactive map.",
    "url": "https://dnr-mrn.gnb.ca/FishRegulation/?lang=en",
    "tags": [
      "fishing",
      "regulations",
      "map",
      "wildlife",
      "lookup"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "Department of Public Works — NS Weather Station Data",
    "level": "Provincial",
    "jurisdiction": "Nova Scotia",
    "category": "weather",
    "type": "Dataset",
    "description": "Download 31M+ readings (2011–2024) from 56 provincial road-weather stations: temp, wind, humidity, precip, pavement status. CSV/JSON/Socrata API.",
    "url": "https://data.novascotia.ca/Environment-and-Energy/NS-Weather-Station-Data/kafq-j9u4",
    "tags": [
      "weather",
      "climate",
      "temperature",
      "precipitation",
      "wind",
      "csv",
      "json",
      "api",
      "socrata"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "Department of Environment and Climate Change — Water Resources Data Portal",
    "level": "Provincial",
    "jurisdiction": "Nova Scotia",
    "category": "environment",
    "type": "Dashboard",
    "description": "Interactive maps and charts of provincial groundwater levels, river flows, lake/river water quality, and weather used to track water conditions over time.",
    "url": "https://novascotia.ca/water-resources-data-portal/",
    "tags": [
      "groundwater",
      "water-quality",
      "hydrology",
      "weather",
      "monitoring",
      "maps",
      "dashboard"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "Department of Natural Resources — BurnSafe Fire Restrictions",
    "level": "Provincial",
    "jurisdiction": "Nova Scotia",
    "category": "safety",
    "type": "Dashboard",
    "description": "Daily county-level burn ban map and table (updated 2pm in wildfire season): no-burn, restricted, or allowed hours. Check before campfires or brush burning.",
    "url": "https://novascotia.ca/burnsafe/",
    "tags": [
      "wildfire",
      "burn-ban",
      "fire-restrictions",
      "emergency",
      "map"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "NS Education — Directory of Public Schools",
    "level": "Provincial",
    "jurisdiction": "Nova Scotia",
    "category": "school-board",
    "type": "Lookup tool",
    "description": "Interactive map of every NS public school with grades, contacts and RCE/CSAP; download the 2025–2026 directory as Excel plus historical editions.",
    "url": "https://stats-summary.ednet.ns.ca/directory-public-schools",
    "tags": [
      "schools",
      "directory",
      "catchment",
      "excel",
      "map",
      "education"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "Department of Fisheries and Aquaculture — Aquaculture Site Licences",
    "level": "Provincial",
    "jurisdiction": "Nova Scotia",
    "category": "agriculture",
    "type": "Lookup tool",
    "description": "Sortable table of every issued aquaculture licence/lease by operator, county, size and cultivation type, with downloadable licence and lease PDFs.",
    "url": "https://novascotia.ca/fish/aquaculture/public-information/",
    "tags": [
      "aquaculture",
      "licences",
      "leases",
      "fisheries",
      "pdf",
      "registry"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "PEI Weather & Climate App",
    "level": "Provincial",
    "jurisdiction": "PEI",
    "category": "weather",
    "type": "Dashboard",
    "description": "View and download real-time observations from 100+ PEI weather stations plus historical climate (temperature, precipitation, wind, humidity) on an interactive map.",
    "url": "https://weather.peiclimate.ca/",
    "tags": [
      "weather",
      "climate",
      "stations",
      "download",
      "pei"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "Department of Land and Environment — PEI Water Registry",
    "level": "Provincial",
    "jurisdiction": "PEI",
    "category": "environment",
    "type": "Registry",
    "description": "Search official Water Act dashboards and maps for groundwater levels, stream flow, water-use permits, well records, watershed report cards and water quality.",
    "url": "https://water.princeedwardisland.ca/",
    "tags": [
      "water",
      "groundwater",
      "registry",
      "maps",
      "environment"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "Department of Land and Environment — PEI Air Monitoring",
    "level": "Provincial",
    "jurisdiction": "PEI",
    "category": "environment",
    "type": "Dashboard",
    "description": "Explore PEI ambient air-quality dashboards (AQHI, CAAQS) and download provincial air-quality reports from the monitoring network.",
    "url": "https://air.princeedwardisland.ca/",
    "tags": [
      "air-quality",
      "aqhi",
      "dashboard",
      "environment",
      "reports"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "Department of Justice and Public Safety — Civic Address Points",
    "level": "Provincial",
    "jurisdiction": "PEI",
    "category": "open-data",
    "type": "Open dataset",
    "description": "Nightly-updated GIS points for every PEI civic address. Download from the open-data portal or query the ArcGIS Feature Service API.",
    "url": "https://data.princeedwardisland.ca/datasets/3db2ec93bbe44d98a97f04a2cb6f7ce3/explore",
    "tags": [
      "civic-address",
      "gis",
      "api",
      "geojson",
      "public-safety"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "Department of Land and Environment — PEI Soils",
    "level": "Provincial",
    "jurisdiction": "PEI",
    "category": "agriculture",
    "type": "Open dataset",
    "description": "Province-wide soils polygon GIS from the Resource Inventory & Modelling Section. Query or download via the ArcGIS Feature Service.",
    "url": "https://data.princeedwardisland.ca/datasets/576af49a64a94665a89a655b8990a137/explore",
    "tags": [
      "soils",
      "agriculture",
      "gis",
      "geodatabase",
      "api"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "ParksNL — Campsite Reservation Service",
    "level": "Provincial",
    "jurisdiction": "Newfoundland and Labrador",
    "category": "parks",
    "type": "Reservation tool",
    "description": "Book serviced and unserviced sites at 13 NL provincial parks online or by phone; lists 2026 fees, seasons and vehicle-pass rates, with a link to ParksNL booking.",
    "url": "https://www.parksnl.ca/reservations/",
    "tags": [
      "camping",
      "reservations",
      "provincial parks",
      "parksnl",
      "newfoundland"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "NL Statistics Agency — Community Accounts Climate Data",
    "level": "Provincial",
    "jurisdiction": "Newfoundland and Labrador",
    "category": "weather",
    "type": "Climate data portal",
    "description": "Query 70+ NL weather stations for daily/monthly/annual temperature, rain and snow from 1874–2026; nearest-station search plus charts.",
    "url": "https://nl.communityaccounts.ca/climate/",
    "tags": [
      "climate",
      "weather stations",
      "temperature",
      "precipitation",
      "charts",
      "csv"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "Municipal and Community Affairs — Land Use Planning Registry",
    "level": "Provincial",
    "jurisdiction": "Newfoundland and Labrador",
    "category": "planning-zoning",
    "type": "Planning registry",
    "description": "A–Z register of municipal plans and development regulations in legal effect, with PDF plans and KMZ zoning maps for every NL municipality.",
    "url": "https://www.gov.nl.ca/mca/registry/reglist/",
    "tags": [
      "zoning",
      "municipal plans",
      "development regulations",
      "pdf",
      "kmz"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "Forestry, Agriculture and Lands — Near-Real-Time Weather Stations",
    "level": "Provincial",
    "jurisdiction": "Newfoundland and Labrador",
    "category": "weather",
    "type": "Weather station dashboard",
    "description": "Hourly graphs from 22 provincial forestry RAWS stations across Newfoundland and Labrador; fire-weather data plus a downloadable KMZ station map.",
    "url": "https://www.mae.gov.nl.ca/wrmd/ADRS/v6/RAWS_Graphs_List.asp",
    "tags": [
      "weather",
      "raws",
      "forestry",
      "hourly",
      "kmz",
      "fire weather"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "NL Health Services — Health Dashboards Hub",
    "level": "Provincial",
    "jurisdiction": "Newfoundland and Labrador",
    "category": "health-region",
    "type": "Dashboard",
    "description": "Interactive GIS maps to find naloxone kits, flu/COVID vaccine clinics and Family Care Team locations across the province; updated regularly.",
    "url": "https://nlhealthservices.ca/find-health-care/dashboards/",
    "tags": [
      "gis",
      "naloxone",
      "vaccines",
      "family care teams",
      "health",
      "map"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "Yukon Parks — Camping Reservations",
    "level": "Provincial",
    "jurisdiction": "Yukon",
    "category": "parks",
    "type": "Reservation tool",
    "description": "Book frontcountry, backcountry and group campsites at Yukon territorial campgrounds; search availability by park, dates and equipment.",
    "url": "https://yukon.goingtocamp.com/",
    "tags": [
      "yukon",
      "parks",
      "camping",
      "reservations",
      "tombstone"
    ],
    "dateAdded": "2026-08-26",
    "verified": false
  },
  {
    "name": "Yukon Lobbyist Registry",
    "level": "Provincial",
    "jurisdiction": "Yukon",
    "category": "lobbyist",
    "type": "Lobbyist registry",
    "description": "Search who is lobbying the Government of Yukon by organization or topic; view consultant and in-house filings and activity status.",
    "url": "https://yukonlobbyistregistry.ca/en/search-organization",
    "tags": [
      "yukon",
      "lobbyists",
      "registry",
      "search",
      "transparency"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "NWT Parks — Find a Park",
    "level": "Provincial",
    "jurisdiction": "Northwest Territories",
    "category": "parks",
    "type": "Park finder",
    "description": "Filter 34 NWT territorial parks by activity, facility and open/closed status; book campsites via the linked reservation portal.",
    "url": "https://www.nwtparks.ca/find-a-park",
    "tags": [
      "nwt",
      "parks",
      "camping",
      "map",
      "finder"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "Mackenzie Valley Land and Water Board — Public Registry",
    "level": "Provincial",
    "jurisdiction": "Northwest Territories",
    "category": "environment",
    "type": "Public registry",
    "description": "Search Mackenzie Valley land-use permits and water licences; download inspection reports, applications and issuances as PDFs.",
    "url": "https://mvlwb.com/registry",
    "tags": [
      "nwt",
      "permits",
      "water licences",
      "pdf",
      "registry"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  },
  {
    "name": "Nunavut Impact Review Board — Public Registry",
    "level": "Provincial",
    "jurisdiction": "Nunavut",
    "category": "environment",
    "type": "Public registry",
    "description": "Browse Nunavut impact assessments; download screening decisions, comment submissions and annual reports as PDFs.",
    "url": "https://www.nirb.ca/",
    "tags": [
      "nunavut",
      "impact assessment",
      "pdf",
      "registry",
      "environment"
    ],
    "dateAdded": "2026-08-26",
    "verified": true
  }
];
