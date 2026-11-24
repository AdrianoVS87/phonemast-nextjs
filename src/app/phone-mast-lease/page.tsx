import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import StructuredData from "@/components/seo/StructuredData";
import PageHero from "@/components/guide/PageHero";
import InlineCta from "@/components/guide/InlineCta";
import { CaseRef, LawRef } from "@/components/guide/Sources";
import { LEASE_GUIDE } from "@/content/guides";
import { formatPounds, rentFigure, rentFigureRange } from "@/content/legal";
import { buildMetadata } from "@/seo/metadata";
import { ROUTES } from "@/seo/routes";
import { article, founderPerson } from "@/seo/schema";

const route = ROUTES.leaseGuide;
const range = rentFigureRange();
export const metadata = buildMetadata({ ...route, publishedTime: route.published, modifiedTime: route.lastReviewed });

const CLAUSES: readonly [string, string][] = [
  ["Date and parties", "When the lease was granted, and who the lessor (you) and the lessee (the operator) are."],
  ["Premises", "The exact area the operator has exclusive possession of, such as the compound or the roof area, with a plan."],
  ["Term and commencement date", "How long the lease runs and from when. The commencement date can differ from the date of the document."],
  ["Rent", "What the operator pays, normally once a year. Under the Code it is called consideration."],
  ["Permitted use", "Normally restricted to telecommunications."],
  ["Rights and equipment", "What the operator may install, maintain and upgrade on the site."],
  ["Sharing and assignment", "The operator's rights to share the site and to assign the lease. Under the 2017 Code, restrictions on these are largely void."],
  ["Group companies", "Whether companies in the operator's group may benefit from the lease."],
  ["Rent review", "The method (often the higher of market value or an index such as RPI) and how often, typically every three to five years."],
  ["Break clauses", "The dates and procedure for either side to end the lease early."],
  ["Lift and shift", "Your right to have equipment moved or removed for essential repairs or works, and who pays."],
  ["Access", "The route to the site, notice for routine visits and the procedure in an emergency."],
  ["Switch off", "How the equipment is powered down in an emergency or during works."],
  ["Insurance and indemnity", "Who insures what, and the process if there is a claim."],
  ["Yield up and reinstatement", "What the operator must remove and restore when the lease ends (Paragraph 40 of the Code)."],
  ["Wayleaves and easements", "Your obligations to let third parties bring power and communication links to the site."],
];

export default function PhoneMastLeasePage() {
  return (
    <>
      <StructuredData
        nodes={[
          article({
            path: route.path,
            headline: LEASE_GUIDE.h1,
            description: route.description,
            datePublished: route.published ?? route.lastReviewed ?? "",
            dateModified: route.lastReviewed ?? route.published ?? "",
          }),
          founderPerson(),
        ]}
      />
      <Breadcrumbs items={[{ label: "Phone mast lease" }]} />

      <PageHero
        route={route}
        heading={LEASE_GUIDE.h1}
        lede="What a mast lease gives the operator, what it pays you, how long it lasts and what you can still control."
        attribution="author"
        cta={{ label: "Get a free lease check", href: "/free-lease-check/" }}
      />

      <section className="section-padding">
        <article className="prose-guide">
          <div className="answer-box">
            <p>{LEASE_GUIDE.answer}</p>
          </div>

          <div className="key-facts">
            <h2>Key facts</h2>
            <ul>
              <li>Published Tribunal rents run from {formatPounds(range.low)} to {formatPounds(range.high)} a year depending on the site; a standard rural mast is {rentFigure("vacheFarm")}.</li>
              <li>The lease continues after its term ends until it is brought to an end under the Code.</li>
              <li>The operator can usually upgrade and share the equipment without your consent.</li>
              <li>You can rarely refuse a mast outright; the main exception is a genuine plan to redevelop.</li>
              <li>Since 7 April 2026, qualifying older leases renewing under the 1954 Act are valued on the same basis as Code agreements.</li>
            </ul>
          </div>

          <h2>Is it a lease, a licence or a wayleave?</h2>
          <p>
            A lease gives the operator exclusive possession of the site for a fixed or periodic term. Some mast agreements are licences or
            wayleaves instead, which do not give exclusive possession. The label matters less than the substance: what the operator actually
            has on the ground, and when the agreement was made, decide which rules apply when it comes to renewal.
          </p>
          <p>
            Otherwise a mast lease reads much like a lease of a shop or industrial unit. The difference is that the operator holds
            &ldquo;Code rights&rdquo; under the Electronic Communications Code, which replaced the old code in the Telecommunications Act 1984
            on <strong>28 December 2017</strong>. Those rights sit above the contract, so several clauses you would expect to rely on are
            overridden or void.
          </p>
          <p>
            Leases granted before 28 December 2017 were given security of tenure by Part II of the Landlord and Tenant Act 1954, and those
            still renew under that Act. Leases granted after that date are not protected by the 1954 Act; the Code gives operators its own
            security of tenure instead, and you cannot contract out of it.
          </p>

          <h2>What a mast lease pays</h2>
          <p>
            The rent is valued as if your land had no use to a phone network. Published Tribunal decisions put it at {rentFigure("vacheFarm")} a
            year for a standard rural mast, {rentFigure("dalePark")} for a rural site next to housing and {rentFigure("marksSpencer")} to{" "}
            {rentFigure("londonQuadrant")} for city rooftops. Fees, compensation and electricity are paid on top. The figures, how they are
            worked out and what you can claim are in our <Link href="/phone-mast-rent/">guide to phone mast rent</Link>.
          </p>

          <h2>Can you say no to a mast?</h2>
          <p>
            Rarely. The operator can apply to the Tribunal to have an agreement imposed on you. Under Paragraph 21 of the Code the Tribunal
            imposes one if the harm to you can be adequately compensated in money and the public benefit of the mast outweighs it. Operators
            almost always pass that test.
          </p>
          <p>
            The main defence is redevelopment. If you have a firm, settled and unconditional intention to redevelop your land, and a
            reasonable prospect of carrying it out, the Tribunal may refuse the application (Paragraph 21(5); <CaseRef id="meyrickEstate" />).
            If redevelopment is what you have in mind, see our <Link href="/phone-mast-services/removal-and-redevelopment/">removal and redevelopment service</Link>.
          </p>

          <h2>How long it lasts, and how it ends</h2>
          <p>
            The Code sets no minimum or maximum term. In <CaseRef id="vacheFarm" />, for example, the parties agreed a ten-year lease with a
            break for the operator and an RPI rent review after five years, and asked the Tribunal to decide the rent and whether the
            landowner should have a right to end the lease for redevelopment.
          </p>
          <p>
            A mast lease <strong>does not end when its term expires</strong>. Under Paragraph 30 it carries on until it is brought to an end
            under the Code, so waiting for it to run out does not remove the operator. To end it, you serve a Paragraph 31 notice giving at
            least 18 months&rsquo; notice on one of four grounds: substantial breach, persistent late payment, an intention to redevelop, or
            that the Paragraph 21 public-benefit test is no longer met. If the operator serves a counter-notice within three months, the
            agreement continues until the Tribunal decides.
          </p>
          <p>
            Break clauses must be followed to the letter. In <CaseRef id="onTowerBt" /> the Court of Appeal held that where a site provider
            relies on a contractual break clause, every requirement of the clause must be met. BT&rsquo;s break notice was invalid because it
            relied on a termination right BT was not entitled to use.
          </p>
          <p>
            If the operator wants new terms instead, it serves a Paragraph 33 notice or, for a 1954 Act lease, a Section 26 request. Our{" "}
            <Link href="/section-26-notice/">Section 26 notice guide</Link> and the explainer on the{" "}
            <Link href="/blog/phone-mast-renewal-letter/">operator&rsquo;s renewal letter</Link> cover what to do next.
          </p>

          <InlineCta
            text="Received a letter or notice about your lease? We will tell you which rules apply and what the deadlines are."
            label="Get a free lease check"
            href="/free-lease-check/"
          />

          <h2>What the operator can do without asking</h2>
          <h3>Upgrade and share the equipment</h3>
          <p>
            Under Paragraph 17 an operator may upgrade its equipment or share it with another operator without your consent, provided the
            change has no more than a minimal effect on how the equipment looks and puts no additional burden on you. Section 58 of the 2022
            Act added Paragraph 17A, extending similar rights to agreements made before 2017, subject to 21 days&rsquo; notice.
          </p>
          <h3>Assign the lease</h3>
          <p>
            <strong>Any term that prevents or limits assignment to another operator is void</strong> (Paragraph 16). The protection left to
            you is to require the outgoing operator to give an authorised guarantee agreement.
          </p>

          <h2>What your lease should say</h2>
          <p>
            The main terms are first set out in Heads of Terms, negotiated between your surveyor and the operator&rsquo;s before solicitors
            are instructed. Draft Heads of Terms come from the operator&rsquo;s advisers and are their opening position. Getting them right
            first saves time and legal fees, because the solicitors then record what has been agreed. See{" "}
            <Link href="/phone-mast-solicitors/">who you need, a solicitor or a surveyor</Link>.
          </p>
          <dl className="clause-list">
            {CLAUSES.map(([term, meaning]) => (
              <div key={term}>
                <dt>{term}</dt>
                <dd>{meaning}</dd>
              </div>
            ))}
          </dl>
          <p>
            <strong>Two points landlords often get wrong:</strong> once a lease is completed it is very hard to change terms that are not in
            your favour, and a lease that is silent on a matter does not stop the operator doing it. If you want to restrict something, it
            must be written in, and even then the Code may override it.
          </p>
          <h3>For a rooftop site</h3>
          <ul>
            <li><strong>Access through the building:</strong> how the operator reaches the roof, with advance notice for routine visits (typically 48 to 72 hours) and narrowly defined emergency access.</li>
            <li><strong>Lift and shift:</strong> your right to have equipment moved or removed for roof works at the operator&rsquo;s cost, which matters for buildings with Building Safety Act 2022 obligations.</li>
            <li><strong>Structural surveys</strong> before installation, and before any upgrade.</li>
            <li><strong>Building insurance:</strong> the operator should tell your insurer, contribute to any increase and hold its own public liability cover, typically at least £5 million.</li>
            <li><strong>Roof warranty:</strong> installation can void a flat-roof guarantee; the lease should say who pays to reinstate it.</li>
          </ul>
          <h3>For a mast on open land</h3>
          <ul>
            <li><strong>Access track:</strong> the route across your other land has its own value and should be defined and negotiated.</li>
            <li><strong>Compound boundary:</strong> a precisely defined, usually fenced, compound, so the operator cannot spread without renegotiating.</li>
            <li><strong>Farming:</strong> livestock around the compound, and access during busy periods such as lambing and harvest.</li>
            <li><strong>Reinstatement:</strong> under Paragraph 40 you can require removal of all equipment and restoration of the land when the agreement ends, including foundations, cabinets, fencing, the access track and anything a sharing operator installed.</li>
          </ul>

          <h2>Mistakes to avoid</h2>
          <ul>
            <li><strong>Accepting the first offer.</strong> Opening offers usually undervalue the site and lock in weaker terms for the whole term.</li>
            <li><strong>Agreeing loose terms.</strong> Broad access rights, light maintenance duties and weak reinstatement clauses cause years of friction.</li>
            <li><strong>Ignoring notices.</strong> Silence does not pause the statutory process. It pushes the operator to the Tribunal, where terms are imposed and the operator&rsquo;s undertaking to pay your fees may fall away.</li>
            <li><strong>Demanding removal.</strong> Refusing outright or demanding removal without a valid ground invites proceedings and terms imposed by the Tribunal.</li>
            <li><strong>Not keeping records.</strong> Offers, counter-offers, notices and their dates are the evidence you will need if it goes to the Tribunal.</li>
          </ul>

          <h2>What changed in 2026</h2>
          <p>
            On 7 April 2026, sections 61 to 64 of the 2022 Act came into force and added section 34A to the Landlord and Tenant Act 1954.
            Qualifying telecoms leases that renew under the 1954 Act are now valued on the Code&rsquo;s no-network assumption, which removed
            the advantage owners of older leases had after <CaseRef id="comptonBeauchamp" />.
          </p>
          <ul>
            <li>Rent already received does not have to be repaid.</li>
            <li>Interim rent is split: periods before 7 April 2026 are valued under the old rules, periods from that date under the new ones.</li>
            <li>Since 30 July 2026, new 1954 Act renewal proceedings for these leases are heard by the First-tier Tribunal and the Upper Tribunal instead of the courts. Code disputes have gone to the First-tier Tribunal (Property Chamber) since 6 April 2024.</li>
            <li>Since November 2023, an operator must consider alternative dispute resolution, where reasonably practicable, before applying to impose Code rights, and both sides must do so before applying for new terms under Paragraph 33.</li>
          </ul>

          <section className="legal-detail" aria-labelledby="legal-detail">
            <h2 id="legal-detail">The legal detail</h2>
            <h3>The Code paragraphs that matter most</h3>
            <ul>
              <li><strong>Paragraph 16:</strong> terms preventing or limiting assignment to another operator are void.</li>
              <li><strong>Paragraphs 17 and 17A:</strong> upgrading and sharing without consent, within limits; 17A extends this to older agreements.</li>
              <li><strong>Paragraph 21:</strong> when the Tribunal will impose an agreement; 21(5) is the redevelopment exception.</li>
              <li><strong>Paragraph 24:</strong> how the rent (consideration) is valued.</li>
              <li><strong>Paragraphs 30 and 31:</strong> the agreement continues after expiry until ended by notice on a statutory ground.</li>
              <li><strong>Paragraph 33:</strong> how either side asks for new terms once the agreement has expired.</li>
              <li><strong>Paragraph 40:</strong> removal of equipment and reinstatement of the land.</li>
            </ul>
            <p>
              Sources: <LawRef id="code" />; <LawRef id="landlordTenantAct1954" />; <LawRef id="psti" />.
            </p>
            <h3>Decisions that shape lease terms</h3>
            <ul className="case-notes">
              <li>
                <span className="case-name"><CaseRef id="vacheFarm" full /></span>
                A renewal of a greenfield site in which the parties agreed a ten-year term, an operator break and an RPI review after five
                years. The Tribunal set the rent at {rentFigure("vacheFarm")} a year.
              </li>
              <li>
                <span className="case-name"><CaseRef id="onTowerBt" full /></span>
                A site provider relying on a contractual break clause to found a Paragraph 31 notice must comply strictly with the clause.
              </li>
              <li>
                <span className="case-name"><CaseRef id="daleParkAppeal" full /></span>
                The Court of Appeal upheld the Tribunal&rsquo;s decision to give the operator upgrading and sharing rights going beyond the
                minimum that Paragraph 17 provides.
              </li>
              <li>
                <span className="case-name"><CaseRef id="meyrickEstate" full /></span>
                The redevelopment test under Paragraph 21(5): a firm, settled and unconditional intention, with a reasonable prospect of carrying it out.
              </li>
              <li>
                <span className="case-name"><CaseRef id="comptonBeauchamp" full /></span>
                Operators with existing agreements protected by the 1954 Act must renew under that Act and cannot use the Code to impose new
                agreements on different terms. The Phone Mast Advice Company instigated and advised on this case.
              </li>
            </ul>
          </section>

          <p className="page-footnote">
            This guide is general information, not legal advice on your agreement. For advice on yours, <Link href="/contact/">contact us</Link>.
          </p>
        </article>
      </section>

      <CTASection
        headline="Have your lease or the operator's terms checked, free"
        subheadline="No obligation and no cost for the first review. We act only for landowners."
        ctaText="Get a free lease check"
        ctaHref="/free-lease-check/"
      />
    </>
  );
}
