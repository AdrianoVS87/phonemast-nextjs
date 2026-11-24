# Content changes for Matt's sign-off

Every sentence on this branch that states law, a Tribunal figure or a case outcome and was rewritten,
moved or removed. Nothing here should go live until Matt has read it.

- **Plain restructuring** (shorter sentences, second person, a section moved) is marked **R** and is meant
  to say exactly what the old sentence said.
- **Corrections** are marked **C**. The old wording did not match the judgment. The judgment's own words
  are quoted, with a link.
- **Removals** are marked **X**. The statement could not be verified, so it was taken off the page and
  listed in `needs-owner-confirmation.md`.

**How to sign off.** Reply "approved" per item, or with the wording you want, then record the sign-off date
in `src/seo/routes.ts` (`lastReviewed`) and in `tests/guide-freeze.test.ts` if a locked field changes.

> **Signed off.** Matt approved every item in sections 1 to 6 **as written** on 24 November 2026, in the
> review run in the terminal session ("Approved as written"). Section 7 lists the statements written with
> him that day; each is his chosen wording. Items marked **X** stay off the site until the open questions in
> `needs-owner-confirmation.md` are answered.

---

## 1. Rent guide, `/phone-mast-rent/`

### 1.1 Locked opening answer (new)

> Published Tribunal decisions value a standard rural phone mast at £1,750 a year and city rooftop sites at
> £3,850 to £5,000 a year. What your site should pay depends on its type and on the agreement you hold, and
> fees, compensation and electricity are paid on top of the rent. An operator's offer is an opening
> position, not the answer.

Replaces the "In short" box: "Where landlord and operator cannot agree, the Upper Tribunal has imposed
figures from £750 to £1,750 a year for a standard rural mast and £3,850 to £5,000 a year for city rooftops."

**C.** Two things in the old wording did not match the judgments:

- **£3,850.** It was not set by the Upper Tribunal. It was set by the Lands Tribunal for Scotland in
  *CTIL v Marks & Spencer plc* (LTS/ECC/2019/34, 6 July 2021). The Upper Tribunal lists it in a table in
  [*Affinity Water* [2022] UKUT 8 (LC)](https://caselaw.nationalarchives.gov.uk/ukut/lc/2022/8), para 31.
  The new answer says "Tribunal decisions" and the table names the Scottish tribunal.
- **£750.** It was not "imposed". In *Dale Park* the Tribunal "suggested that £750 was likely to be
  appropriate for a standard greenfield site". That is how *Affinity Water* summarises it at para 32.
  The new text says "suggested".

### 1.2 Figures table

| Old row | New row | Basis |
|---|---|---|
| "Standard rural mast on farmland (greenfield) £1,750, Vache Farm, Upper Tribunal, 2024" | Same figure and decision | [*Vache Farm* [2024] UKUT 216 (LC)](https://caselaw.nationalarchives.gov.uk/ukut/lc/2024/216), para 84: "the appropriate annual consideration for a rural mast site is £1,750". **R** |
| "Standard rural mast, the earlier Tribunal benchmark £750, Upper Tribunal decisions before 2024" | Removed from the table, explained in the text as *Dale Park*'s suggested figure | See 1.1. **C** |
| "Rural site next to housing £1,200, Dale Park, Upper Tribunal, 2020" | Same | [*On Tower v JH & FW Green* [2020] UKUT 348 (LC)](https://caselaw.nationalarchives.gov.uk/ukut/lc/2020/348), para 149. **R** |
| "Water tower on greenfield land £3,300, Affinity Water" | "Water tower £3,300", basis "including a break-clause allowance" | *Affinity Water*, paras 82–83: "A headline figure of £3,000 a year (£3,300 with the additional benefit of the break clause)". The judgment does not say "greenfield". **C** |
| "City rooftop on a retail or office building £3,850, Affinity Water table, Upper Tribunal" | "City rooftop, department store or offices £3,850, *Marks & Spencer*, Lands Tribunal for Scotland, 2021" | *Affinity Water*, paras 29 and 31. **C** |
| "City rooftop on a residential building £5,000, Affinity Water table, Upper Tribunal" | "City rooftop, residential building £5,000, *London & Quadrant*, Upper Tribunal, 2020" | [*CTIL v London and Quadrant Housing Trust* [2020] UKUT 282 (LC)](https://caselaw.nationalarchives.gov.uk/ukut/lc/2020/282), as tabulated in *Affinity Water*, para 31. **C** |

### 1.3 Sentences rewritten

| # | Old | New | |
|---|---|---|---|
| a | "the Tribunal has said that the older figures should be adjusted for inflation, which is why the standard rural figure rose from £750 to £1,750 in Vache Farm (2024)" | "In *Dale Park* the Tribunal suggested £750 a year was likely for a standard greenfield site; in *Vache Farm* it set £1,750 for a rural mast site, taking account of inflation." | **C** (see 1.1; *Vache Farm* para 85 "reiterate the impact of inflation") |
| b | "This structured approach was first set out in Vodafone Ltd v Hanover Capital Ltd and subsequently endorsed by the Upper Tribunal in multiple decisions." | "The Tribunal adopted the three-stage approach that the County Court had considered in *Hanover Capital* [2020] EW Misc 18 (CC)." (under *London & Quadrant*) | **C**: *Affinity Water* para 29 says *London & Quadrant* "adopted the three-stage valuation approach considered by the County Court in Vodafone v Hanover Capital". The *Hanover Capital* judgment itself could not be opened (BAILII blocks automated access), so it is cited without a link. |
| c | The three stages ("Alternative use value", "Additional benefits", "Adverse effects") | Same three stages, plain wording ("Burdens on you" for adverse effects) | **R** |
| d | No-network assumption paragraph (Paragraph 24, "does not relate to the provision or use of an electronic communications network", more than one site assumption) | Same points, shorter; the quotation marks around the statutory words were dropped | **R** |
| e | "Since December 2017 the number of disputes ... over a thousand Tribunal cases have been filed under the new Code, compared with 33 in the 30 years under the previous legislation." | Removed | **X**: no source in the repo or online that I could verify |
| f | "The stated objective behind the Digital Economy Act 2017 reforms was to reduce the cost of deploying..." | "The 2017 reforms to the Electronic Communications Code were meant to cut the cost of building and running mobile networks, and the Government said at the time that they would bring down the rents operators pay to landowners", with a link to the [DCMS announcement of 19 October 2017](https://www.gov.uk/government/news/reforms-to-boost-uks-digital-infrastructure) | **R** + source (taken from the merged post `reduce-phone-mast-rents`) |
| g | 7 April 2026 section: sections 61 to 64 PSTI Act, new s.34A LTA 1954, rents received not repaid, interim rent split, 30 July 2026 tribunal change | Same points, shorter | **R** |
| h | "What can I charge in addition to rent?" list (Para 25 compensation, Para 84 fees, electricity, access rights, physical damage) | Same five items | **R** |
| i | "What can I not charge for?" list (network value, speculative diminution, pre-2017 rents as comparables, telecoms development value) | Same four items | **R** |
| j | Five steps if the operator offers less, including "keeps the operator's fee undertaking alive" | Same five steps, plain wording ("keeps the operator's undertaking to pay your fees alive") | **R** |
| k | *Islington* card: "first ever determination ... confirmed that pre-2017 comparable rents are irrelevant ... compensation for diminution in property value is not automatically recoverable" | "The first decision on consideration under the new Code, for an urban rooftop site in inner London." | **R** (shortened). The first part was not re-checked against the judgment: Find Case Law has only the PDF. |
| l | *Dale Park* card: "endorsed the three-stage approach, set £1,200 ... confirmed that the landlord is entitled to recover reasonable professional fees" | "A renewal under Part 5 of the Code: £1,200 a year for a rural site near homes, plus the landlord's reasonable professional fees." | **R**; para 149 awards £7,957.90 legal costs as compensation |
| m | *Vache Farm* card: "...also imposed a break clause allowing the landlord to terminate on notice where redevelopment is intended" | "The current reference point for rural greenfield sites: £1,750 a year for a rural mast site." | **X** for the break clause (see 2.3) |
| n | *Compton Beauchamp* card | Same holding sentence, case named in full | **R** |
| o | FAQ (six questions) | Removed. Each one repeated a section above. | Structure only |

## 2. Lease guide, `/phone-mast-lease/`

### 2.1 Locked opening answer (new)

> A phone mast lease gives an operator exclusive possession of part of your land or building for a period,
> in return for rent. It is a commercial lease with one big difference: the operator also holds rights under
> the Electronic Communications Code that override many of its clauses, so it does not simply end when its
> term runs out.

**R**: combines the old "What is a phone mast lease?" definition ("grants an operator exclusive possession
of land or part of a building for a period of time, fixed or periodic, in return for rent") with the old
"In short" box.

### 2.2 Rent at summary level (new)

"Published Tribunal decisions put it at £1,750 a year for a standard rural mast, £1,200 for a rural site next
to housing and £3,850 to £5,000 for city rooftops", plus a key fact "Published Tribunal rents run from
£1,200 to £5,000 a year". The figures come from the same data as the rent guide (see 1.2). The page
previously had no rent figure at all.

### 2.3 Sentences rewritten

| # | Old | New | |
|---|---|---|---|
| a | "the Upper Tribunal now typically imposes a 10-year term with a tenant break at year 5 and a landlord's redevelopment break exercisable from the fifth anniversary on 18 months' notice, the pattern set in the 2024 Vache Farm decision. Rent is usually reviewed every five years, linked to RPI or CPI." | "The Code sets no minimum or maximum term. In *Vache Farm*, for example, the parties agreed a ten-year lease with a break for the operator and an RPI rent review after five years, and asked the Tribunal to decide the rent and whether the landowner should have a right to end the lease for redevelopment." | **C**: *Vache Farm* para 3: "It is agreed that the new lease will be for ten years with a break exercisable by the operator after five years. There will be a rent review by reference to RPI also after five years. The only significant terms remaining in dispute are the amount of the rent and whether the site provider ... should have the right to terminate the lease for redevelopment." The terms were agreed, not imposed. What the Tribunal decided on the redevelopment break (from the fifth anniversary, 18 months' notice, not limited to non-telecoms redevelopment) could not be confirmed from the text, so it is listed for Matt. |
| b | Paragraph 30 and 31: lease does not end at expiry; Para 31 notice, at least 18 months, four grounds; counter-notice within three months; Tribunal | Same | **R** |
| c | Paragraph 21 test and "operators almost always satisfy this test" | Same | **R** |
| d | Redevelopment defence: "confirmed in EE Ltd v Sir James Chichester [2019] UKUT 164 (LC) and applied more recently in CTIL v Firoka (Kings Cross) Ltd (2025), where a hotel owner defeated a rooftop installation application" | "(Paragraph 21(5); *Meyrick Estate* [2019] UKUT 164 (LC))" | **R** for the test, which is cited to the same decision under one name (the parties are EE and Hutchison 3G v the trustees of the Meyrick Estate). **X** for *Firoka*: not found on Find Case Law. |
| e | "In On Tower UK Ltd v British Telecommunications plc [2025] EWCA Civ 844 the Court of Appeal held that where a site provider relies on a contractual break clause, every requirement of the clause must be strictly complied with. BT's termination notice was void because it cited the wrong ground. The case is now before the Supreme Court." | "...every requirement of the clause must be met. BT's break notice was invalid because it relied on a termination right BT was not entitled to use." | **C** (closer to para 90: "BT was not entitled to rely upon sub-clause 5.8(b)(v) as the basis for the service of its break notice ... That notice was invalid"). **X** for "now before the Supreme Court": not verified. |
| f | "In On Tower UK Limited v Green [2022] 4 WLR 27 the Court of Appeal upheld unrestricted upgrading rights." Case card: "Landowners cannot contractually prevent equipment upgrades where the Paragraph 17 conditions are satisfied." | Case card: "The Court of Appeal upheld the Tribunal's decision to give the operator upgrading and sharing rights going beyond the minimum that Paragraph 17 provides." Cited as [2021] EWCA Civ 1858. | **C**: para 66 "There was very good reason to give On Tower upgrading and sharing rights beyond those for which paragraph 17 of the Code provides"; para 67 "I would dismiss the appeal". The old card described Paragraph 17 itself, not the decision. The neutral citation replaces the law report reference, which could not be checked. |
| g | "Vodafone Ltd v Potting Shed Bar and Gardens Ltd [2023] EWCA Civ 825: an operator who acquires Code rights by assignment retains full rights to seek renewal under Paragraph 33" | Removed | **X**: the judgment ([2023] EWCA Civ 825) is about a concurrent lease granted to AP Wireless and whether Paragraph 33 or Part 4 applies. The old summary did not match, so it is listed for Matt instead of rewritten. |
| h | Paragraph 17, 17A (PSTI s.58, 21 days' notice), Paragraph 16 (assignment terms void, AGA) | Same | **R** |
| i | Rooftop and standalone lists (48–72 hours' notice, Building Safety Act 2022, £5 million cover, Paragraph 40 reinstatement) | Same, shorter | **R** |
| j | 2026 list (PSTI ss.61–64, s.34A, rents not repaid, interim rent split, 30 July 2026, FTT since 6 April 2024, ADR since November 2023) | Same | **R** |
| k | Sixteen standard clauses | Same, plain wording | **R** |
| l | FAQ (six questions) | Removed. Each one repeated a section. | Structure only |

## 3. Rent reviews service page

| Old | New | |
|---|---|---|
| FAQ: "the Upper Tribunal now treats a five-yearly review linked to RPI or CPI as the standard for new Code agreements" | "most agreements review the rent every three to five years" | **X** for the Tribunal standard (see 2.3a) |
| "a Code agreement is valued on the no-network assumption in Paragraph 24, where the Upper Tribunal's 2024 Vache Farm decision set the benchmark for a standard rural greenfield mast at £1,750 per annum, with rooftop and urban sites assessed at higher levels" | "a Code agreement is valued on the no-network assumption", with a link to the rent guide for figures | **R** (figures now live only in the guide) |
| "Can my rent go down at a review?" (index-linked; 1954 Act; 7 April 2026; Code since December 2017) | Same, under "Review or renewal?" | **R** |
| FAQ "benchmark phone mast rent in 2026" and "Can the operator reduce my rent at a review?" | Removed (answered by the guide and the section above) | Structure only |

## 4. Homepage

| Old | New | |
|---|---|---|
| FAQ: "It introduced a new 'no-scheme' valuation model" | "It values the site on the 'no-network assumption'" | **C**: the Code's term is the no-network assumption (Paragraph 24) |
| FAQ: "Operators have rights to apply to the Upper Tribunal (Lands Chamber) to contest removal." | "Operators can ask the Tribunal to keep the mast in place." | **C**: Code disputes start in the First-tier Tribunal (Property Chamber) since 6 April 2024 (as the lease guide says) |
| FAQ: "We have successfully resisted such reductions for many clients." | Removed | **X** |
| FAQ: CTIL "managing approximately 14,200 macro and 1,400 micro sites across the UK" | "It manages the mast infrastructure that Vodafone and O2 share." | **X** for the site counts |
| "the landmark case that established operators cannot use the new Code to bypass existing Landlord and Tenant Act 1954 protections ... (see CTIL v Compton Beauchamp Estates [2022] UKSC 18)" | "The Supreme Court confirmed that operators with existing agreements protected by the Landlord and Tenant Act 1954 must renew under that Act and cannot use the Code to impose new agreements on different terms ([2022] UKSC 18)." | **R** (same wording as the guides, so the case is described one way everywhere) |

## 5. Operators hub (replaces nine operator pages)

Only entity facts that were already on the site and are stable are kept:

- CTIL and Cornerstone are the same company;
- Arqiva sold its mobile business to Cellnex in 2020, which is now On Tower;
- EE is part of BT Group;
- MBNL is the EE and Three joint venture;
- O2 is Telefónica UK Ltd;
- Cellnex and WIG are neutral hosts;
- Airwave runs the TETRA emergency network.

**New:** "Vodafone and Three completed their merger on 31 May 2025 and now trade as VodafoneThree". This comes
from the site's own post `vodafonethree-mast-site-consolidation-landlords`, which cites its sources. It
replaces "Proposed merger with Vodafone UK was subject to regulatory scrutiny".

**X:** the operator FAQs that used "no-scheme valuation", referred disputes to "the Upper Tribunal", or said
"specialist advice is essential" are gone with the pages.

## 6. About, Team, Matt's profile

The Compton Beauchamp description is the same sentence as in 1.3n. Everything else removed from these
pages was a marketing claim, not law. See `needs-owner-confirmation.md`.

## 7. Wording agreed with Matt on 24 November 2026

| Where | Old | New | |
|---|---|---|---|
| Homepage, About, Matt's profile, team, blog author box | "Matt Restall instigated and advised on the Compton Beauchamp case in the Supreme Court. The Supreme Court confirmed that operators with existing agreements protected by the Landlord and Tenant Act 1954 must renew under that Act and cannot use the Code to impose new agreements on different terms." | Heading "The firm behind the Compton Beauchamp case". "We instigated and oversaw *Cornerstone v Compton Beauchamp Estates* [2022] UKSC 18, in which the Supreme Court confirmed that operators with leases protected by the Landlord and Tenant Act 1954 must renew under that Act." | **R**, Matt's version 1. Same holding as 1.3n, shortened; the citation links to the judgment. |
| Every page that mentions fees | "Our fees are typically recovered from the improved rent or one-off payment we secure for you. We operate on a performance basis where possible." | "Our fees are incentivised and tied to the results we achieve for you. We seek a contribution from the operator wherever the law allows, but we are never solely dependent on it, so our advice always remains entirely independent in your interest." | Matt's wording. "Wherever the law allows" refers to the professional fees an operator can be required to meet, for example under Paragraph 84 of the Code (see 1.3h). |
| FAQ, "How do we charge?" | "Additionally, our fees are designed to be incentivised, meaning that if we secure a higher rent ..." | "For example, if we secure a higher rent or recover backdated payments for a client, we receive a one-off payment or a small percentage of the amount gained." | **R**: the "incentivised" sentence now repeats the fee sentence, so only the example is kept. |
| Lease renewals, FAQ | Seven questions as open headings, one answer ending "Read the ECC legislation on legislation.gov.uk" | The same seven questions and answers, as an accordion built from the same data as the FAQPage markup; the unverified legislation.gov.uk link is removed | **R** |
| Privacy policy, "Who we are" | "Our registered office is at: 167-169 Great Portland Street, 5th Floor, London, W1W 5PF." | "Registered office: The Bristol Office, 2nd Floor, 5 High Street, Westbury on Trym, Bristol BS9 3BY." | **C**: matches Companies House (company 13115582). |
