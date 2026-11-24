# Needs the owner's confirmation

Matt answered the open questions on **24 November 2026**, in a six-round review run in the terminal
session (British English, exact live wording shown for each option). His answers are recorded below and
applied in `src/content/company.ts`; anything still open stays off the site.

## Answered on 24 November 2026

| # | Question | Matt's answer | Applied as |
|---|---|---|---|
| A1 | Whose "30+ years"? | Matt's own career | "Matt Restall has advised landlords on phone masts for over 30 years" (profile, team, About trust signals, homepage figures as "30+ years of Matt's experience advising landlords"). No start year given. |
| A2 | "since 1999" | Not confirmed (no start year given) | Stays off. |
| A3 | "10,000+ mast deals completed" | Accurate; he stands behind it | Shown in the trust signals and the homepage figures. |
| A4 | RICS | Andrew Chinn is MRICS | "Our Head Surveyor, Andrew Chinn MRICS, is a member of the Royal Institution of Chartered Surveyors"; "MRICS" under his name on the team page. |
| A5 | Google rating | Show it: https://maps.app.goo.gl/3YtwqUoH7pkJ6MEu8, 12 reviews | "Rated 5/5 on Google from 12 reviews", linked to the profile. No Review or AggregateRating markup. |
| A6 | Offices | No office where clients meet the team; no addresses, no mention | Office addresses and the London, Bristol and Oswestry pages removed; their URLs 308 to `/contact/`. Only the registered office remains, as the legal disclosure line (Companies (Trading Disclosures) Regulations 2008), which Matt approved. |
| A7, A8 | "First firm in the UK", "most significant ruling" | Asked for new wording, chose version 1 | Heading "The firm behind the Compton Beauchamp case"; text "We instigated and oversaw *Cornerstone v Compton Beauchamp Estates* [2022] UKSC 18, in which the Supreme Court confirmed that operators with leases protected by the Landlord and Tenant Act 1954 must renew under that Act." (homepage, About, Matt's profile, team, blog author box). |
| A12 | "Verified client" badge | Every testimonial is from a real client who agreed to be quoted | Badge restored. |
| B1 | Fee sentence | Redrafted with him; final wording his | "Our fees are incentivised and tied to the results we achieve for you. We seek a contribution from the operator wherever the law allows, but we are never solely dependent on it, so our advice always remains entirely independent in your interest." The FAQ answer keeps its example of a one-off payment or small percentage. The Robert Kell testimonial ("no-win, no-fee") is the client's own words and is unchanged. |
| B2 | Service area | Whole UK | "We advise landlords and landowners across the United Kingdom."; `areaServed` is the United Kingdom. The guides still explain the law of England and Wales where the law differs. |
| C2 | Matt's qualifications | HND Building Studies; BSc (Hons) Valuation Surveying | On his profile, and as `hasCredential` on his profile's Person node only. |
| C3 | Other cases | None given | Profile lists Compton Beauchamp only. |
| C5 | Rewritten guides and legal wording | Approved as written | Recorded in `content-changes-for-review.md`. |
| D6 | WhatsApp number | 07843 352654 | Kept; the repo `CLAUDE.md` corrected. |
| F2 | Google Ads click ID before consent | Only after consent | Held in memory on landing, stored only once advertising cookies are allowed, deleted if consent is withdrawn. |
| F3 | Handbook popup | Leave it off | Off. |

## Still open

| # | Item | What is needed |
|---|---|---|
| A4b | RICS register link for Andrew Chinn | His RICS membership number, so the page can link to the register entry. The claim is shown without a link meanwhile. |
| A9 | "Represented landlords ... from individual rural landowners to large corporate property portfolios ... one of the most comprehensive databases of comparable deals" | Agreement to a factual wording without the superlative. Off the site. |
| A10 | "Large corporations such as supermarket chains and Local Authorities" | Whether these client types can be named publicly. Off the site. |
| A11 | Mark Dernes: "over four decades", "both of the UK's leading mast investment companies" | His wording and dates. Off the site. |
| C1 | Matt's career history (roles, firms, years) | For his profile. The profile shows only confirmed facts. |
| C4 | Named reviewer per service page | Service pages say "By the Phone Mast Advice team, led by Matt Restall". |
| D1–D3 | CTIL site counts, CTIL ownership, Airwave ownership and migration | Current figures and sources. Off the operators hub. |
| E1–E7 | Unverified legal statements (*Firoka*, *On Tower v BT* in the Supreme Court, *Potting Shed* summary, *Vache Farm* break terms, the "thousand cases" figure, *Marks & Spencer* link, *Hanover Capital* link) | As listed in `content-changes-for-review.md`. All are off the site or cited without a link. |
| E8 | legislation.gov.uk links | legislation.gov.uk refuses automated requests and the Chrome check could not run (no browser accepted the connection request). A person should open each URL in `LEGISLATION` (`src/content/legal.ts`) and add `verifiedOn`; the guides then link them. The other legislation.gov.uk links on the Code, Section 26 and service pages were already on the live site and are unchanged. |
| G1 | Google Business Profile address | The profile link Matt gave opens a place pinned at Great Portland Street, London. If clients cannot visit, the profile should be a service-area business with the address hidden (see `offsite-checklist.md`). |
