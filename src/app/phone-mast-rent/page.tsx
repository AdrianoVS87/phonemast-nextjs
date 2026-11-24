import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import StructuredData from "@/components/seo/StructuredData";
import PageHero from "@/components/guide/PageHero";
import InlineCta from "@/components/guide/InlineCta";
import RentFiguresTable from "@/components/guide/RentFiguresTable";
import { CaseRef, LawRef } from "@/components/guide/Sources";
import { RENT_GUIDE } from "@/content/guides";
import { EARLIER_RURAL_FIGURE, GOVERNMENT_SOURCES, formatPounds, rentFigure } from "@/content/legal";
import { buildMetadata } from "@/seo/metadata";
import { ROUTES } from "@/seo/routes";
import { article, founderPerson } from "@/seo/schema";

const route = ROUTES.rentGuide;
export const metadata = buildMetadata({ ...route, publishedTime: route.published, modifiedTime: route.lastReviewed });

const rural = rentFigure("vacheFarm");
const nearHousing = rentFigure("dalePark");
const earlierRural = formatPounds(EARLIER_RURAL_FIGURE.annual);

export default function PhoneMastRentPage() {
  return (
    <>
      <StructuredData
        nodes={[
          article({
            path: route.path,
            headline: RENT_GUIDE.h1,
            description: route.description,
            datePublished: route.published ?? route.lastReviewed ?? "",
            dateModified: route.lastReviewed ?? route.published ?? "",
          }),
          founderPerson(),
        ]}
      />
      <Breadcrumbs items={[{ label: "Phone mast rent" }]} />

      <PageHero
        route={route}
        heading={RENT_GUIDE.h1}
        lede="The figures the Tribunals have set, how the rent is valued, and what you can claim on top of it."
        attribution="author"
        cta={{ label: "Get a free rent estimate", href: "/free-rent-estimate/" }}
      />

      <section className="section-padding">
        <article className="prose-guide">
          <div className="answer-box">
            <p>{RENT_GUIDE.answer}</p>
          </div>

          <div className="key-facts">
            <h2>Key facts</h2>
            <ul>
              <li>Standard rural mast: {rural} a year (<CaseRef id="vacheFarm" />).</li>
              <li>Rural mast next to housing: {nearHousing} a year (<CaseRef id="dalePark" />).</li>
              <li>Rent is valued as if your land had no use to a phone network: the &ldquo;no-network assumption&rdquo;.</li>
              <li>Fees, compensation and electricity are paid on top of the rent.</li>
              <li>Since 7 April 2026 the same basis applies to qualifying older leases renewing under the Landlord and Tenant Act 1954.</li>
            </ul>
          </div>

          <h2>What the published figures say</h2>
          <p>
            There is no official tariff. Rent is agreed between you and the operator, and when you cannot agree, a tribunal sets it. The
            published decisions are the best public benchmark, because every operator&rsquo;s adviser starts from them.
          </p>
          <RentFiguresTable caption="Annual rent set in published decisions, by site type" />
          <p>Three things to keep in mind when you read that table:</p>
          <ul>
            <li>These are figures imposed where the two sides could not agree. Negotiated agreements, unusual sites and leases still governed by the 1954 Act can differ.</li>
            <li>
              The figures move with time. In <CaseRef id="dalePark" /> the Tribunal suggested {earlierRural} a year was likely for a standard
              greenfield site; in <CaseRef id="vacheFarm" /> it set {rural} for a rural mast site, taking account of inflation.
            </li>
            <li>
              The rent is only part of what you receive. The <a href="#extras">extras you can claim</a> are often worth more than the rent itself in the first year.
            </li>
          </ul>

          <InlineCta
            text="Want a figure for your own site? We compare it with the published decisions and our own record of agreed deals."
            label="Get a free rent estimate"
            href="/free-rent-estimate/"
          />

          <h2>Why operators are offering less than before</h2>
          <p>
            The fall in rents is a direct result of Government policy. The 2017 reforms to the Electronic Communications Code were meant to
            cut the cost of building and running mobile networks, and the Government said at the time that they would bring down the rents
            operators pay to landowners (<a href={GOVERNMENT_SOURCES.reforms2017.url} rel="noopener" target="_blank">DCMS announcement, 19 October 2017</a>).
          </p>
          <p>
            Before the reforms, you could negotiate a rent that reflected how important your site was to the operator&rsquo;s network.
            Under the Code that premium is removed entirely.
          </p>

          <h2>How the rent is worked out</h2>
          <p>
            In the legislation the rent is called &ldquo;consideration&rdquo;. Since the reformed Code came into force on 28 December 2017,
            it has been valued on the no-network assumption: your site is valued as if the agreement had nothing to do with a phone network.
            In plain terms, the telecoms premium is stripped out, and your land is valued at its ordinary use, for example farming, storage
            or car parking. The valuation also assumes the operator could use more than one site, which removes any scarcity value.
          </p>
          <p>The tribunals then work in three stages:</p>
          <ol>
            <li><strong>Alternative use value:</strong> what the site would rent for in its best non-telecoms use.</li>
            <li><strong>Additional benefits:</strong> any extra value to the operator, such as a high position or an existing power supply.</li>
            <li><strong>Burdens on you:</strong> the disturbance the telecoms use causes, including loss of amenity, limits on development and interference with other uses.</li>
          </ol>
          <h3>Why rooftops pay more than masts in fields</h3>
          <p>
            A greenfield mast sits on land whose ordinary use, such as farming or storage, is worth little, so the rent is low. Roof space
            is valued by comparison with lettings for storage, signage and other non-telecoms uses, and city rooftops have been valued at
            higher levels than rural sites. The tribunals have also dealt with unusual structures such as water towers and church steeples.
          </p>

          <h2 id="extras">What you can claim on top of the rent</h2>
          <ul>
            <li><strong>Compensation for loss or damage</strong> you actually suffer because of the operator&rsquo;s Code rights (Paragraph 25 of the Code), separate from the rent.</li>
            <li><strong>Reasonable professional fees</strong>: legal and valuation costs of granting or renewing the agreement (Paragraph 84).</li>
            <li><strong>Electricity</strong>: where the operator uses your supply, you can recover the cost in full.</li>
            <li><strong>Access over your other land</strong>: if the operator has to cross your land to reach the site, that right has value and can be negotiated separately.</li>
            <li><strong>Physical damage</strong> to fences, gates, boundaries, the ground or other property caused by the operator or its contractors.</li>
          </ul>

          <h2>What you cannot charge for</h2>
          <ul>
            <li><strong>The site&rsquo;s value to the network.</strong> The no-network assumption exists to exclude it: you cannot charge extra because the operator needs your particular site.</li>
            <li><strong>A speculative fall in property value.</strong> Unless you can show an actual, measurable loss, the Tribunal will not compensate a theoretical one.</li>
            <li><strong>Rents agreed before 2017 as evidence.</strong> They are not admissible comparables in Tribunal proceedings.</li>
            <li><strong>The chance to use the site for telecoms yourself.</strong> Development value that comes from telecoms use is excluded too.</li>
          </ul>

          <h2>What changed in 2026</h2>
          <p>
            On 7 April 2026, sections 61 to 64 of the Product Security and Telecommunications Infrastructure Act 2022 came into force and
            added a new section 34A to the Landlord and Tenant Act 1954. For the first time, qualifying telecoms leases that renew under the
            1954 Act are valued on the no-network assumption. Until then, those older leases renewed at open market rent, often well above
            the Code figure, as the Supreme Court confirmed in <CaseRef id="comptonBeauchamp" />.
          </p>
          <ul>
            <li>If your lease pre-dates 28 December 2017 and is protected by the 1954 Act, its renewal rent is now assessed on the no-network basis.</li>
            <li>Rent you have already received does not have to be repaid.</li>
            <li>Interim rent is split: periods before 7 April 2026 are valued under the old rules, periods from that date under the new ones.</li>
            <li>Since 30 July 2026, new renewal proceedings for these leases go to the First-tier Tribunal and the Upper Tribunal instead of the courts.</li>
          </ul>

          <h2>What to do if the operator has offered less</h2>
          <ol>
            <li>Do not sign or agree the figure. A renewal letter or Heads of Terms is an opening position prepared by the operator&rsquo;s advisers.</li>
            <li>Reply in writing that you are taking independent advice. That keeps the process negotiated and keeps the operator&rsquo;s undertaking to pay your fees alive.</li>
            <li>Work out which rules apply: a Code agreement, a 1954 Act lease renewing after 7 April 2026, or a renewal already under way under the old rules.</li>
            <li>Have the figure checked against the published decisions and agreed deals for your type of site, and add the extras you can claim.</li>
            <li>Keep every notice and its date. The deadlines under the Code and the 1954 Act are strict.</li>
          </ol>
          <p>
            We handle the negotiation itself through our <Link href="/phone-mast-services/rent-reviews/">rent review service</Link> and, when
            the lease is ending, our <Link href="/phone-mast-services/lease-renewals/">lease renewal service</Link>. If the operator has served
            a notice under the 1954 Act, read our <Link href="/section-26-notice/">Section 26 notice guide</Link>. For the lease itself, from
            break clauses to what happens when it expires, see <Link href="/phone-mast-lease/">phone mast leases explained</Link>.
          </p>

          <section className="legal-detail" aria-labelledby="legal-detail">
            <h2 id="legal-detail">The legal detail</h2>
            <h3>The legislation</h3>
            <ul>
              <li><LawRef id="code" />: the rent rule is in Paragraph 24, compensation in Paragraph 25, professional fees in Paragraph 84.</li>
              <li><LawRef id="digitalEconomyAct" />, which put the reformed Code in place from 28 December 2017.</li>
              <li><LawRef id="psti" />, sections 61 to 64, in force from 7 April 2026.</li>
              <li><LawRef id="section34A" />, inserted by the 2022 Act.</li>
              <li>The old code, in <LawRef id="telecomsAct1984" />, under which rents were negotiated at open market value.</li>
            </ul>
            <h3>The decisions behind the figures</h3>
            <ul className="case-notes">
              <li>
                <span className="case-name"><CaseRef id="islington" full /></span>
                The first decision on consideration under the new Code, for an urban rooftop site in inner London.
              </li>
              <li>
                <span className="case-name"><CaseRef id="dalePark" full /></span>
                A renewal under Part 5 of the Code: {nearHousing}{" "}a year for a rural site near homes, plus the landlord&rsquo;s reasonable professional fees.
              </li>
              <li>
                <span className="case-name"><CaseRef id="londonQuadrant" full /></span>
                {rentFigure("londonQuadrant")} a year for a city residential rooftop. The Tribunal adopted the three-stage approach that the County Court had considered in <CaseRef id="hanoverCapital" />.
              </li>
              <li>
                <span className="case-name"><CaseRef id="affinityWater" full /></span>
                {rentFigure("affinityWater")} a year for a water tower. The decision also tabulates the earlier figures by site type, including {rentFigure("marksSpencer")} for a city department store and offices
                in <CaseRef id="marksSpencer" /> (Lands Tribunal for Scotland).
              </li>
              <li>
                <span className="case-name"><CaseRef id="vacheFarm" full /></span>
                The current reference point for rural greenfield sites: {rural} a year for a rural mast site.
              </li>
              <li>
                <span className="case-name"><CaseRef id="comptonBeauchamp" full /></span>
                The Supreme Court confirmed that operators with existing agreements protected by the 1954 Act must renew under that Act and cannot
                use the Code to impose new agreements on different terms. The Phone Mast Advice Company instigated and advised on this case.
              </li>
            </ul>
          </section>

          <p className="page-footnote">
            The figures above are published Tribunal determinations quoted for guidance. They are not legal or valuation advice for any
            particular site. For advice on yours, <Link href="/contact/">contact us</Link>.
          </p>
        </article>
      </section>

      <CTASection
        headline="Find out what your site should be paying"
        subheadline="A free, no-obligation rent estimate from specialists who act only for landowners."
        ctaText="Get a free rent estimate"
        ctaHref="/free-rent-estimate/"
      />
    </>
  );
}
