import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import WhoWeActFor from "@/components/WhoWeActFor";
import StructuredData from "@/components/seo/StructuredData";
import PageHero from "@/components/guide/PageHero";
import InlineCta from "@/components/guide/InlineCta";
import { buildMetadata } from "@/seo/metadata";
import { ROUTES } from "@/seo/routes";
import { service } from "@/seo/schema";

const route = ROUTES.rentReviews;
export const metadata = buildMetadata(route);

/** Questions the sections above do not already answer. */
const faqs = [
  {
    question: "How often is phone mast rent reviewed?",
    answer:
      "It depends on your lease, but most agreements review the rent every three to five years. If your lease has a review clause that has never been used, the review may still be possible: send us the lease and we will check.",
  },
  {
    question: "Do I need a surveyor for a phone mast rent review?",
    answer:
      "For an index-linked review the arithmetic is simple, but operators and their agents often miscalculate, delay or dispute the figure. For an open market review you need valuation evidence the operator cannot dismiss. Either way, landlord-side advice usually pays for itself, and our first review is free.",
  },
];

export default function RentReviewsPage() {
  return (
    <>
      <StructuredData
        nodes={[
          service({
            path: route.path,
            name: "Phone mast rent review service",
            serviceType: "Telecoms rent review",
            description: route.description,
          }),
        ]}
      />
      <Breadcrumbs items={[{ label: "Services", href: "/phone-mast-services/" }, { label: "Rent reviews" }]} />

      <PageHero
        route={route}
        heading="Phone mast rent review service"
        lede="We run the rent review on your mast lease for you: we check the clause, work out what the rent should be and negotiate it with the operator."
        cta={{ label: "Get a free rent estimate", href: "/free-rent-estimate/" }}
      />

      <section className="section-padding">
        <div className="prose-guide">
          <h2>What we do for you</h2>
          <ul>
            <li>Read your lease and its review clause, and find every review date, including any that were missed.</li>
            <li>Work out what the rent should be under that clause, and what should already have been paid.</li>
            <li>Compare your site with similar agreements so the figure we put forward is one the operator cannot easily dismiss.</li>
            <li>Deal with the operator and its agents for you: proposals, counter-proposals, disputes and any formal valuation.</li>
            <li>Pursue backdated rent where the agreement supports it.</li>
          </ul>

          <h2>How a rent review works with us</h2>
          <h3>1. We assess the lease</h3>
          <p>We review your lease to find the rent review clause, past and upcoming review dates, and any chance of a backdated increase.</p>
          <h3>2. We benchmark the rent</h3>
          <p>We compare your site with similar telecoms agreements to establish a fair rent, so every proposal we make is accurate and defensible.</p>
          <h3>3. We negotiate with the operator</h3>
          <p>We handle all communication and negotiation with the operator, including rent proposals, review disputes and formal valuation processes.</p>

          <InlineCta
            text="Not sure what your review clause says? Send it to us and we will tell you what the next review should produce."
            label="Get a free rent estimate"
            href="/free-rent-estimate/"
          />

          <h2>What your review clause decides</h2>
          <p>
            The outcome depends on the wording of the clause. An index-linked review (RPI or CPI) is arithmetic and should be applied without
            argument. An open market review depends on which rules govern the agreement: a Code agreement is valued on the no-network
            assumption, while a lease still protected by the Landlord and Tenant Act 1954 keeps its contractual review basis until it
            renews. How Code rent is valued, and the published figures, are in our <Link href="/phone-mast-rent/">guide to phone mast rent</Link>.
          </p>

          <h2>Review or renewal?</h2>
          <p>
            Your rent cannot go down under an index-linked clause, and not under most older open market clauses while the lease runs. The
            reduction operators talk about usually comes at <em>renewal</em>, not at review: since 7 April 2026, qualifying 1954 Act leases
            are valued on the no-network basis when they renew, and Code agreements have been valued that way since December 2017. Knowing
            which event you face changes the advice completely. If your lease is ending, see our{" "}
            <Link href="/phone-mast-services/lease-renewals/">lease renewal service</Link>.
          </p>

          <h2>Missed and backdated reviews</h2>
          <p>
            Many mast leases contain review clauses that have never been used, sometimes for a decade or more. Whether the review can still be
            triggered, and whether the increase is backdated, depends on the wording of the clause, in particular whether time is of the
            essence. We read the clause, calculate what should have been paid, and pursue the arrears where the agreement supports it.
          </p>

          <WhoWeActFor />

          <h2>Rent reviews: other questions</h2>
          <FAQAccordion items={faqs} schemaPath={route.path} />
        </div>
      </section>

      <CTASection
        headline="Find out what your next review should produce"
        subheadline="A free, no-obligation rent estimate from specialists who act only for landowners."
        ctaText="Get a free rent estimate"
        ctaHref="/free-rent-estimate/"
      />
    </>
  );
}
