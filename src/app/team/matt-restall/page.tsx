import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import StructuredData from "@/components/seo/StructuredData";
import { CaseRef } from "@/components/guide/Sources";
import { COMPANY, STATEMENTS, confirmedClaim } from "@/content/company";
import { buildMetadata } from "@/seo/metadata";
import { ROUTES } from "@/seo/routes";
import { FOUNDER_ID, founderPerson, profilePage } from "@/seo/schema";

const route = ROUTES.mattRestall;
export const metadata = buildMetadata(route);

const GUIDES = [
  { href: "/phone-mast-lease/", label: "Phone mast leases explained" },
  { href: "/phone-mast-rent/", label: "Phone mast rent: what operators pay landowners, and why" },
  { href: "/electronic-communications-code/", label: "The Electronic Communications Code explained for landowners" },
  { href: "/section-26-notice/", label: "Section 26 notices on phone mast leases" },
  { href: "/phone-mast-solicitors/", label: "Phone mast solicitor or surveyor: who you need" },
];

export default function MattRestallPage() {
  const founder = COMPANY.founder;
  const experience = confirmedClaim("experienceYears");
  return (
    <>
      <StructuredData nodes={[profilePage(route.path, FOUNDER_ID), founderPerson()]} />
      <Breadcrumbs items={[{ label: "Our team", href: "/team/" }, { label: founder.name }]} />

      <section className="page-hero">
        <div className="container-max profile-hero">
          <Image src={founder.image} alt={`${founder.name}, founder of ${COMPANY.legalName}`} width={180} height={180} className="profile-photo" priority />
          <div>
            <h1>{founder.name}</h1>
            <p className="lede">
              {founder.jobTitle}, {COMPANY.legalName}. Specialist telecoms surveyor acting only for landlords.
            </p>
            <a href={founder.linkedIn} rel="noopener" target="_blank" className="profile-link">
              LinkedIn profile
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="prose-guide">
          <h2>What Matt does</h2>
          <p>
            Matt founded {COMPANY.legalName} and advises landlords on telecoms property: leases, rent reviews, new lettings and lease sales.
            {experience ? ` ${experience}.` : ""} {STATEMENTS.independence}
          </p>
          <p>
            Every instruction starts with a free review of the agreement and the operator&rsquo;s letters, so that a landlord knows which
            rules apply, what the statutory valuation produces for that site and what can still be negotiated, before any fee is agreed.
          </p>

          <h2>Cases</h2>
          <ul className="case-notes">
            <li>
              <span className="case-name">
                <CaseRef id="comptonBeauchamp" full />
              </span>
              Matt instigated and advised on this case. The Supreme Court confirmed that operators with existing agreements protected by the
              Landlord and Tenant Act 1954 must renew under that Act and cannot use the Electronic Communications Code to impose new
              agreements on different terms. Read our <Link href="/blog/compton-beauchamp-supreme-court-phone-mast-case/">case note</Link>.
            </li>
          </ul>

          <h2>Guides Matt wrote</h2>
          <ul>
            {GUIDES.map((g) => (
              <li key={g.href}>
                <Link href={g.href}>{g.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/blog/">All articles</Link>
            </li>
          </ul>

          <h2>Contact Matt&rsquo;s team</h2>
          <p>
            Call <a href={COMPANY.phone.href}>{COMPANY.phone.display}</a>, email <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> or ask
            for a <Link href="/free-lease-check/">free lease check</Link>.
          </p>
        </div>
      </section>

      <CTASection
        headline="Speak to a specialist telecoms surveyor"
        subheadline="A free first review of your lease or the operator's offer, with no obligation. We act only for landlords."
        ctaText="Get a free lease check"
        ctaHref="/free-lease-check/"
      />
    </>
  );
}
