import { confirmedClaim } from "@/content/company";

/**
 * Headline figures. Every figure the bar used to show (30+ years, 10,000+ deals, 3 offices) is an
 * unconfirmed claim, so the bar renders only once at least three are confirmed in
 * src/content/company.ts; a bar with one or two numbers would look like it was missing something.
 */
export default function StatsBar() {
  const stats = [confirmedClaim("experienceYears"), confirmedClaim("dealsCompleted"), confirmedClaim("threeOffices")].filter(
    (s): s is string => s !== null,
  );
  if (stats.length < 3) return null;
  return (
    <section className="stats-bar" aria-label="Key figures">
      <div className="container-max">
        <ul>
          {stats.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
