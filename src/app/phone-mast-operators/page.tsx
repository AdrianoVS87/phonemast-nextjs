import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import WhoWeActFor from "@/components/WhoWeActFor";
import PageHero from "@/components/guide/PageHero";
import InlineCta from "@/components/guide/InlineCta";
import { OPERATORS } from "@/content/operators";
import { buildMetadata } from "@/seo/metadata";
import { ROUTES } from "@/seo/routes";

const route = ROUTES.operators;
export const metadata = buildMetadata(route);

export default function OperatorsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Phone mast operators" }]} />

      <PageHero
        route={route}
        heading="Phone mast operators: who holds your lease"
        lede="Your lease is held by a company, which is not always the network whose name is on the mast. Find yours below."
        cta={{ label: "Get a free lease check", href: "/free-lease-check/" }}
      />

      <section className="section-padding">
        <div className="prose-guide">
          <nav aria-label="Operators on this page" className="operator-index">
            <ul>
              {OPERATORS.map((o) => (
                <li key={o.id}>
                  <a href={`#${o.id}`}>{o.name}</a>
                </li>
              ))}
            </ul>
          </nav>

          <p>
            Whichever company holds your lease, the same rules apply: every one of them is a Code operator under the Electronic
            Communications Code, and the legal entity matters when you negotiate. How the rent is valued is in our{" "}
            <Link href="/phone-mast-rent/">guide to phone mast rent</Link>, and what the lease lets the operator do is in{" "}
            <Link href="/phone-mast-lease/">phone mast leases explained</Link>.
          </p>

          {OPERATORS.map((o, index) => (
            <section key={o.id} id={o.id} aria-labelledby={`${o.id}-heading`}>
              <h2 id={`${o.id}-heading`}>{o.name}</h2>
              {o.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {o.sources ? (
                <p className="operator-sources">
                  Sources:{" "}
                  {o.sources.map((s, i) => (
                    <span key={s.href}>
                      {i > 0 ? "; " : ""}
                      <a href={s.href} rel="noopener" target="_blank">
                        {s.label}
                      </a>
                    </span>
                  ))}
                  .
                </p>
              ) : null}
              {o.related ? (
                <p>
                  Read more: <Link href={o.related.href}>{o.related.label}</Link>.
                </p>
              ) : null}
              {index === 3 ? (
                <InlineCta
                  text="Not sure which company your lease is with? Send it to us and we will tell you, free."
                  label="Get a free lease check"
                  href="/free-lease-check/"
                />
              ) : null}
            </section>
          ))}

          <h2>When an operator writes to you</h2>
          <p>
            A letter about a rent review, a renewal or an upgrade is the operator&rsquo;s opening position. We handle each of them for
            landowners: <Link href="/phone-mast-services/rent-reviews/">rent reviews</Link>,{" "}
            <Link href="/phone-mast-services/lease-renewals/">lease renewals</Link>,{" "}
            <Link href="/phone-mast-services/other-services/">upgrade requests and other notices</Link>, and{" "}
            <Link href="/phone-mast-services/mast-sales/">offers to buy the site income</Link>.
          </p>

          <WhoWeActFor />
        </div>
      </section>

      <CTASection
        headline="Had a letter from an operator?"
        subheadline="Send it to us for a free first review. We act only for landowners, never for operators."
        ctaText="Get a free lease check"
        ctaHref="/free-lease-check/"
      />
    </>
  );
}
