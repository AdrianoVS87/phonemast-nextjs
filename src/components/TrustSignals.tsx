import GoogleG from "@/components/GoogleG";
import { COMPANY, STATEMENTS, confirmedClaim, confirmedClaimRecord } from "@/content/company";

interface Signal {
  title: string;
  text: string;
  href?: string;
  linkText?: string;
  /** Shows the Google G: only for the rating, which links to our Business Profile. */
  google?: boolean;
}

/**
 * What a landlord can check about us. Marketing claims (RICS, experience, deal counts, Google rating)
 * appear only once the owner has confirmed them in src/content/company.ts. The rating is plain text with
 * a link to the Google profile: no Review or AggregateRating markup for the firm's own reviews.
 */
export default function TrustSignals() {
  const signals: Signal[] = [
    { title: "Independent", text: STATEMENTS.independence },
    {
      title: "Registered company",
      text: `${COMPANY.legalName}, Companies House number ${COMPANY.registrationNumber}.`,
      href: COMPANY.companiesHouseUrl,
      linkText: "View the record",
    },
  ];
  const rics = confirmedClaim("ricsSurveyors");
  if (rics) signals.push({ title: "Professional body", text: `${rics}.` });
  const experience = confirmedClaim("experienceYears");
  if (experience) signals.push({ title: "Experience", text: `${experience}.` });
  const deals = confirmedClaim("dealsCompleted");
  if (deals) signals.push({ title: "Track record", text: `${deals}.` });
  const rating = confirmedClaimRecord("googleRating");
  if (rating) signals.push({ title: "Reviews", text: `${rating.text}.`, href: rating.href, linkText: "Read the reviews", google: true });

  return (
    <section className="trust-signals" aria-labelledby="trust-heading">
      <div className="container-max">
        <h2 id="trust-heading">What you can check about us</h2>
        <ul>
          {signals.map((s) => (
            <li key={s.title}>
              {s.google ? <GoogleG /> : null}
              <strong>{s.title}</strong>
              <span>
                {s.text}
                {s.href ? (
                  <>
                    {" "}
                    <a href={s.href} rel="noopener" target="_blank">
                      {s.linkText}
                    </a>
                  </>
                ) : null}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
