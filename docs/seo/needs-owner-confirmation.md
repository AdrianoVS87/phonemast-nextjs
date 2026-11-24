# Needs the owner's confirmation

Matt answered the open questions on **24 November 2026**, in a six-round review run in the terminal
session (British English, exact live wording shown for each option). His answers are recorded below and
applied in `src/content/company.ts`; anything still open stays off the site.

## Answered on 24 November 2026

| # | Question | Matt's answer | Applied as |
|---|---|---|---|
| A1 | Whose "30+ years"? | Matt's own career; asked again after his LinkedIn (which starts in April 2000) was read, he confirmed "over 30 years" is right | "Matt Restall has over 30 years' experience in the phone mast industry" (profile, team, trust signals; homepage figure "30+ years of Matt's experience in the phone mast industry"). Worded for the industry, not "advising landlords", because his roles from 2000 to 2004 were on the operators' side. |
| A2 | "since 1999" | Not confirmed (no start year given) | Stays off. |
| A3 | "10,000+ mast deals completed" | Accurate; he stands behind it | Shown in the trust signals and the homepage figures. |
| A4 | RICS | Andrew Chinn is MRICS | "Our Head Surveyor, Andrew Chinn MRICS, is a member of the Royal Institution of Chartered Surveyors"; "MRICS" under his name on the team page. |
| A5 | Google rating | Show it: https://maps.app.goo.gl/3YtwqUoH7pkJ6MEu8; later the same day, show the rating only, without the review count, with the Google logo | The listing, read on 24 Nov 2026, shows **4.8** (from 12 reviews), not 5/5. The site shows "4.8/5 on Google" with the official full-colour Google G (GoogleG_FullColor_RGB.png from Google's Brand Resource Center, unaltered, on white, with its built-in clear space), linked to the Business Profile, as Google's customer-reviews guidance allows for a business referring to its own reviews. No Review or AggregateRating markup. Update `googleReviews` in `src/content/company.ts` when the rating changes. |
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

## Answered on 24 November 2026, second round

| # | Question | Matt's answer | Applied as |
|---|---|---|---|
| A4b | RICS register link | Keep it without a link | MRICS line unchanged. |
| A9 | Client range and deals database | Factual version | Profile: "Matt has represented landlords across the UK, from individual rural landowners to large corporate property portfolios, and keeps a database of comparable phone mast deals." The superlative stays off. |
| A10 | Client types | Yes | About page: "Our clients range from individual landowners to supermarket chains and local authorities." No client names. |
| A11 | Mark Dernes | Both statements are accurate | Team page: "over four decades of experience across telecoms, finance and real estate, including work with both of the UK's leading mast investment companies". |
| C1 | Career history | Take it from his LinkedIn | Profile section "Career": roles since 2000 from LinkedIn, read on 24 Nov 2026 with Adriano signed in; universities added. The 2002 to 2004 role is worded as Matt corrected it: "Asset Manager, UK National Site Share Manager of NTL and Crown Castle, on behalf of Airwave / O2 UK Limited". His chosen line: "Matt began his career on the operators' side, acquiring and managing mast sites, so he knows how operators and their agents work. Since 2004 he has worked for property owners." |
| C4 | Named reviewer on service pages | Keep it as it is | "By the Phone Mast Advice team, led by Matt Restall". |
| D1–D3 | Operator facts | Check them online and correct them | Checked against Virgin Media O2's press releases (31 Oct 2023, 30 Oct 2024), Vantage Towers, the CMA (5 Apr 2023) and the Home Office ESN overview. The old "jointly owned by Vodafone and O2" and "14,200 macro sites" were out of date. The hub now gives the current ownership, Vantage Towers' figure of 15,604 macro sites at 31 March 2024, Motorola's ownership of Airwave and the ESN plan, each with its source under the section. |
| E1–E7 | Unverified legal statements | Fact-check them | Results below, with the judgments' own words in `content-changes-for-review.md` section 8. |
| E8 | legislation.gov.uk links | Adriano opened all six by hand on 24 Nov 2026 (from a UK connection); all load | Marked `verifiedOn` in `LEGISLATION` and now linked from the guides. Schedule 2 to the Telecommunications Act 1984 (the old Code) shows as omitted from 28 December 2017 by the Digital Economy Act 2017, so its link text says "repealed on 28 December 2017". |
| G1 | Google listing address | Keep the address | Unchanged. Matt was told Google can suspend a listing at an address clients cannot visit if it is reported; he chose to keep it. |
| PSI | Proving mobile 100 | Bypass token | Adriano creates a Vercel "Protection Bypass for Automation" secret; `lighthouse.config.cjs` sends it as a header from the environment (never committed). |

### Fact-check of E1 to E7

| # | Old statement | What the sources say | Now on the site |
|---|---|---|---|
| E1 | *CTIL v Firoka* (2025): a hotel owner defeated a rooftop application on redevelopment grounds | Correct, but it is a **First-tier Tribunal** decision: *CTIL v Firoka (Kings Cross) Ltd*, BIR/00CN/ERO/2025/0637, 17 November 2025. The Tribunal found Firoka intended to redevelop the rooftop and could not reasonably do so if the order were made (para 86), and dismissed the reference (para 111). | Lease guide case notes and the removal and redevelopment page, naming the First-tier Tribunal and linking the decision on gov.uk. |
| E2 | *On Tower v BT* "is now before the Supreme Court" | Out of date. The Supreme Court **refused BT permission to appeal** on 27 November 2025 (UKSC/2025/0168). | Lease guide: the Court of Appeal decision is final. |
| E3 | *Potting Shed*: an operator taking an assignment keeps Paragraph 33 renewal rights | Wrong. The Court of Appeal held that a company granted a concurrent lease of the landowner's interest (AP Wireless) is a "party to the agreement" for the purposes of the Code (para 86), so Part 5 applies between it and the operator. | The correct holding, in the lease guide case notes. |
| E4 | *Vache Farm*: landlord's redevelopment break from the fifth anniversary on 18 months' notice, not limited to non-telecoms redevelopment | Correct. Paras 25 and 28: on 18 months' notice expiring on the fifth or any later anniversary, if the landlord intends to redevelop and could not reasonably do so while the lease continues; para 25 declines to limit it to non-telecoms uses. | Restored in the lease guide and its case note. |
| E5 | "Over a thousand Tribunal cases ... compared with 33 in 30 years" | No source found for either number. Law-firm commentary from 2019 and 2020 says only that the new Code produced more decisions within two years than the old Code did in about 30. | Stays off. |
| E6 | *Marks & Spencer*, no link | Found on the Lands Tribunal for Scotland's site. Its own reference is **LTS/ECC/2020/34** (Affinity Water cites it as LTS/ECC/2019/34); the opinion's table gives total consideration of £3,850. | Cited as LTS/ECC/2020/34 and linked. The Tribunal's site serves the page over http only. |
| E7 | *Hanover Capital*, no link | BAILII shows a bot check even in a real browser. *Affinity Water* para 29 confirms the citation [2020] EW Misc 18 (CC). | Cited without a link. |

## Still open

| # | Item | What is needed |
|---|---|---|
| A1b | Roles before 2000 | Matt confirmed "over 30 years", but his LinkedIn starts in April 2000 (after a degree from 1998 to 2000). If a competitor challenges the figure, the earlier roles are the evidence: employer, role and years. The profile's career list is headed "Roles since 2000" until then. |
| PSI | Mobile 100 on PageSpeed | The bypass secret from Vercel, saved in a local file outside the repo (for example `~/.phonemast/vercel-bypass`), so the Lighthouse CI run against the preview never prints it. |
