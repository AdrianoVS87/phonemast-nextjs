import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import StructuredData from "@/components/seo/StructuredData";
import PageHero from "@/components/guide/PageHero";
import ComptonStatement from "@/components/guide/ComptonStatement";
import { COMPANY, COMPTON_STATEMENT, STATEMENTS, confirmedClaim, registrationLine } from "@/content/company";
import { buildMetadata } from "@/seo/metadata";
import { ROUTES } from "@/seo/routes";
import { organization } from "@/seo/schema";

const route = ROUTES.about;
export const metadata = buildMetadata(route);

const PROCESS = [
  ["First contact", "When you contact us, we talk through the issue you have and work out how we can help."],
  ["Send documents", "We usually need a copy of the agreement and any recent correspondence, which we review free of charge."],
  ["Information and terms of business", "We send you information on the issue and our terms of business, so you can see our fees."],
  ["Your surveyor", "Once you instruct us, a dedicated surveyor deals with your case from start to finish and can be contacted for an update whenever you wish."],
  ["Leave it with us", "Your surveyor contacts the operator or its agent and takes the matter out of your hands."],
  ["The result", "We negotiate the best deal we can for you and take the hassle away."],
] as const;

export default function AboutPage() {
  const rics = confirmedClaim("ricsSurveyors");
  return (
    <>
      <StructuredData nodes={[organization()]} />
      <Breadcrumbs items={[{ label: "About us" }]} />

      <PageHero route={route} heading="About The Phone Mast Advice Company" lede={`Specialist telecoms surveyors. ${STATEMENTS.independence}`} />

      <section className="section-padding">
        <div className="prose-guide">
          <h2>Our story</h2>
          <p>
            We are specialist telecoms surveyors, set up to help the many landlords who deal with mobile operators without representation.
            Operators have made large savings over the years by dealing directly with landlords who do not have specialist advice.
          </p>
          <p>
            We are committed to every client, however many mast sites they have. We aim to build a friendly working relationship and to keep
            you well looked after and informed at every stage.
          </p>
          <p>
            Our goal is the most favourable lease terms and the highest rent achievable for your site, while keeping a good working
            relationship between you and the operator. If you are still researching, start with{" "}
            <Link href="/phone-mast-lease/">phone mast leases explained</Link> and our{" "}
            <Link href="/phone-mast-rent/">guide to phone mast rent</Link>.
          </p>

          <h2>{COMPTON_STATEMENT.heading}</h2>
          <p>
            <ComptonStatement />
          </p>
          <blockquote className="client-quote">
            <p>
              &ldquo;Matt Restall has been managing the Compton Beauchamp Estates Phone Mast site portfolio since 2012. Matt was involved in
              instigating and advising on the famous court case Compton Beauchamp Estates v CTIL. We value the advice we have received from
              him over the last 12 years, and we would be happy to recommend his services to any landlords who have got Phone Mast sites.&rdquo;
            </p>
            <cite>Richard Salmon, Director, Compton Beauchamp Estates</cite>
          </blockquote>

          {rics ? (
            <>
              <h2>Professional standards</h2>
              <p>{rics}</p>
            </>
          ) : null}

          <h2>How we work</h2>
          <ol className="process-steps">
            {PROCESS.map(([title, detail]) => (
              <li key={title}>
                <strong>{title}.</strong> {detail}
              </li>
            ))}
          </ol>

          <h2>Who we act for, and where</h2>
          <p>
            {STATEMENTS.independence} {STATEMENTS.serviceArea} {STATEMENTS.freeReview} {STATEMENTS.fees}
          </p>
          <p>
            Meet the people who will handle your case on our <Link href="/team/">team page</Link>, or read about our founder,{" "}
            <Link href={COMPANY.founder.profilePath}>{COMPANY.founder.name}</Link>.
          </p>

          <h2>Company details</h2>
          <p>
            {COMPANY.legalName}. {registrationLine()}{" "}
            <a href={COMPANY.companiesHouseUrl} rel="noopener" target="_blank">
              View the Companies House record
            </a>
            .
          </p>
        </div>
      </section>

      <CTASection
        headline="Talk to us about your mast"
        subheadline="A free, no-obligation first review of your agreement or the operator's letter. We act only for landowners."
        ctaText="Get a free lease check"
        ctaHref="/free-lease-check/"
      />
    </>
  );
}
