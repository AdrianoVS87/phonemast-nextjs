# Needs the owner's confirmation

Everything below is off the site until Matt answers. Most answers mean one edit in
`src/content/company.ts` (set `confirmed: true`) or `src/content/legal.ts`, and the site updates everywhere.

## A. Marketing claims (hidden behind flags in `CLAIMS`)

| # | Claim the site used to make | Question for Matt | Evidence needed |
|---|---|---|---|
| A1 | "30+ years' experience", "over 30 years" (About, Team, profile, guides, handbook, root description) | Whose 30 years? Companies House shows The Phone Mast Advice Company Ltd incorporated on **6 January 2021** and The Phone Mast Company Ltd on **23 June 2009**. | The year Matt started in telecoms property work, and how to word it (for example "Matt has advised landlords since 19xx"). |
| A2 | "since 1999" (About description, Team intro) | What happened in 1999? | A record of it (first instruction, employer, firm). |
| A3 | "10,000+ mast deals completed" (About, handbook, StatsBar, blog author box, "across England and Wales") | How is 10,000 counted: whose deals, from when, across which firms? | The underlying record or a defensible basis. |
| A4 | "RICS Registered Surveyors", "Chartered Surveyor — RICS Registered" (Andrew Chinn) | Is Andrew Chinn (or anyone) currently an RICS member? | Name, designation (MRICS or FRICS) and RICS membership number for each, so the page can name them and link to the RICS register. |
| A5 | "Rated 5/5 on Google" | Which Google Business Profile, and how many reviews? | Profile URL and current review count. The rating will then show with its count and a link. No Review or AggregateRating markup will be added either way, because Google treats self-serving review markup as ineligible. |
| A6 | "3 UK offices" / "Offices in London, Bristol and Oswestry" | Are all three staffed offices where clients can meet the team? Or is one a registered or virtual address? (The registered office is Bristol.) | Per address: staffed or not. Location pages stay up meanwhile, with the claims and anonymous testimonials removed (see D4). |
| A7 | "To date, we are the first firm in the UK to have successfully fought back against operators and new legislation and kept rents at the same high levels" (homepage) | Is there a published source? | A source, or agreement to drop it. |
| A8 | "The most significant UK telecoms ruling since the Telecommunications Act 1984" / "the most famous case in telecoms case law history" | Same. | A published source, or agreement to drop it. |
| A9 | "Matt has represented landlords across the UK, from individual rural landowners to large corporate property portfolios, and has developed one of the most comprehensive databases of comparable UK phone mast deals in the industry" | Can this be evidenced? | Agreement to a factual wording without the superlative. |
| A10 | About page: "Our success has ... benefited ... large corporations such as supermarket chains and Local Authorities" | Can these client types be named publicly? | Confirmation. |
| A11 | Mark Dernes: "over four decades" and "worked with both of the United Kingdom's leading mast investment companies" | Confirm with Mark. | His wording and dates. |
| A12 | "Verified client" badge on every testimonial | Were the testimonials verified, and how? | A description of the check, or keep the badge off. |

## B. Single sentences used everywhere (`STATEMENTS`)

| # | Statement in use now | Question |
|---|---|---|
| B1 | Fees: "Our fees are typically recovered from the improved rent or one-off payment we secure for you. We operate on a performance basis where possible." (the homepage FAQ wording) | Is this the approved fee sentence? The site also said "no-win, no-fee basis for most instructions" (operator pages, now gone) and "In most cases, we operate on a no-win, no-fee basis" (FAQ page, replaced by this sentence). The Robert Kell testimonial also says "they operate on a no-win, no-fee basis". If no-win, no-fee is accurate, say so and the sentence changes everywhere; if it is not, decide whether that testimonial should still be featured (it is the client's own words and was not edited). |
| B2 | Service area: "We advise landlords and landowners across England and Wales." | Do you take instructions in Scotland and Northern Ireland? If yes, the sentence and `areaServed` become "the UK". The guides explain the law of England and Wales either way. |
| B3 | Independence: "We act only for landlords and site owners, never for operators." | Confirm (unchanged positioning). |

## C. People and credentials

| # | Question |
|---|---|
| C1 | Matt's career history for his profile: roles, firms and years. The profile now shows only verified facts: founder of the company, the Compton Beauchamp case, LinkedIn. |
| C2 | Matt's qualifications (degree and subject) and professional memberships with numbers, if any, and whether he wants them shown. |
| C3 | Other cases Matt worked on, with citations, so the profile can link to the judgments. |
| C4 | Who reviews each service page? Service pages now say "By the Phone Mast Advice team, led by Matt Restall" with the last-reviewed date. Should a named reviewer appear on each? |
| C5 | The rewritten rent and lease guides say "Written by Matt Restall" and show the last-reviewed date of this rewrite (24 November 2026). Please confirm Matt has read the guides (see `content-changes-for-review.md`) before they go live. |

## D. Facts the operator and location pages carried

| # | Item | Question |
|---|---|---|
| D1 | "CTIL manages approximately 14,200 macro and 1,400 micro sites" | Current figures and source, or leave out (left out now). |
| D2 | "CTIL is jointly owned by Vodafone and O2" | Still accurate? The hub now says only that CTIL manages the infrastructure Vodafone and O2 share. |
| D3 | Airwave: "owned by Motorola Solutions" and "being migrated to the Emergency Services Network, which affects lease duration and renewal" | Both are time-sensitive; confirm the current position before they return. |
| D4 | Location pages: anonymous testimonials ("Commercial Property Manager, Central London" and two others) | Who said them? With a name and permission they can return; without, they stay off. |
| D5 | Location pages: "Our London team advises landlords across Greater London, the Home Counties and the South East", "Bristol and South West landlords", "historic market town" | Is there a team at each office? Ties to A6. |
| D6 | WhatsApp number | The site links to **07843 352654**; the repo's `CLAUDE.md` lists **447782412130**. Which is current? |

## E. Legal statements not verified (kept off the guides)

| # | Statement | What is needed |
|---|---|---|
| E1 | *CTIL v Firoka (Kings Cross) Ltd* (2025): "a hotel owner defeated a rooftop installation application on genuine redevelopment grounds" | Neutral citation or Tribunal reference. Not found on Find Case Law. |
| E2 | *On Tower v BT* "is now before the Supreme Court" | Confirmation that permission to appeal was granted, with the UKSC case reference. |
| E3 | *Vodafone v Potting Shed* [2023] EWCA Civ 825 summary (operator taking an assignment keeps Paragraph 33 renewal rights) | The judgment is about a concurrent lease to AP Wireless. Matt to say what point the site should make, if any. |
| E4 | *Vache Farm*: "the Tribunal imposed a landlord's redevelopment break from the fifth anniversary on 18 months' notice, not limited to non-telecoms redevelopment" | Paragraph reference in [2024] UKUT 216 (LC). The parties agreed the ten-year term, the operator break and the RPI review; this item is about what the Tribunal decided on the disputed break. |
| E5 | "Over a thousand Tribunal cases filed under the new Code, compared with 33 in 30 years under the old code" | Source. |
| E6 | *Marks & Spencer* (LTS/ECC/2019/34) | A link to the Lands Tribunal for Scotland decision, if Matt has one. It is cited without a link for now. |
| E7 | *Hanover Capital* [2020] EW Misc 18 (CC) | BAILII blocks automated access, so the link was not opened. A person can open https://www.bailii.org/ew/cases/Misc/2020/18.html and confirm. |
| E8 | legislation.gov.uk links (Schedule 3A, DEA 2017, LTA 1954 and s.34A, PSTI Act 2022, Telecommunications Act 1984 Sch 2) | legislation.gov.uk refuses automated requests. A person should open each URL in `src/content/legal.ts` and add `verifiedOn: "YYYY-MM-DD"`; the guides then link them automatically. |

## F. Consent and tracking

| # | Item | Question |
|---|---|---|
| F1 | Google tags now load only after consent (basic Consent Mode). Visitors who decline send nothing, so Google Ads conversion modelling for them stops. | Confirm this is acceptable; it is what UK GDPR and PECR, and the brief, require. |
| F2 | `ClickIdCapture` stores the Google Ads click ID (`gclid`) in sessionStorage before consent, so it can be attached to a form submission. | This is first-party storage for advertising measurement. It was left unchanged because it affects lead attribution, but under PECR it arguably needs consent. Legal call for Matt or his adviser. |
| F3 | The handbook popup (exit intent, 45 % scroll) was removed with the sticky bars. | Fine to leave it off? The handbook page and its form are unchanged. |
