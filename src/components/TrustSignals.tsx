import { COMPANY, STATEMENTS, confirmedClaim } from "@/content/company";

interface Signal {
  title: string;
  text: string;
  href?: string;
}

/**
 * What a landlord can check about us. Marketing claims (RICS, experience, deal counts, Google rating)
 * appear only once the owner has confirmed them in src/content/company.ts.
 */
export default function TrustSignals() {
  const signals: Signal[] = [
    { title: "Independent", text: STATEMENTS.independence },
    {
      title: "Registered company",
      text: `${COMPANY.legalName}, Companies House number ${COMPANY.registrationNumber}.`,
      href: COMPANY.companiesHouseUrl,
    },
  ];
  const rics = confirmedClaim("ricsSurveyors");
  if (rics) signals.push({ title: "Professional body", text: rics });
  const experience = confirmedClaim("experienceYears");
  if (experience) signals.push({ title: "Experience", text: experience });
  const deals = confirmedClaim("dealsCompleted");
  if (deals) signals.push({ title: "Track record", text: deals });
  const rating = confirmedClaim("googleRating");
  if (rating) signals.push({ title: "Reviews", text: rating });

  return (
    <section className="trust-signals" aria-labelledby="trust-heading">
      <div className="container-max">
        <h2 id="trust-heading">What you can check about us</h2>
        <ul>
          {signals.map((s) => (
            <li key={s.title}>
              <strong>{s.title}</strong>
              <span>
                {s.text}
                {s.href ? (
                  <>
                    {" "}
                    <a href={s.href} rel="noopener" target="_blank">
                      View the record
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
