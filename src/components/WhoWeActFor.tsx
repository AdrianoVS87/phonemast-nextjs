import { STATEMENTS } from "@/content/company";

/**
 * The firm's standing statements (independence, free first review, fees, service area), rendered
 * once per page from src/content/company.ts instead of being retyped on every template.
 */
export default function WhoWeActFor({ heading = "Who we act for, and what it costs" }: { heading?: string }) {
  return (
    <section className="who-we-act-for" aria-labelledby="who-we-act-for">
      <h2 id="who-we-act-for">{heading}</h2>
      <p>
        {STATEMENTS.independence} {STATEMENTS.serviceArea}
      </p>
      <p>
        {STATEMENTS.freeReview} {STATEMENTS.fees}
      </p>
    </section>
  );
}
