import { confirmedClaimRecord, type ClaimId } from "@/content/company";

const STAT_CLAIMS: readonly ClaimId[] = ["experienceYears", "dealsCompleted", "googleRating"];

/**
 * Headline figures, each from a claim Matt confirmed (src/content/company.ts). The bar renders only
 * when all three are confirmed, so it never looks like it is missing something.
 */
export default function StatsBar() {
  const stats = STAT_CLAIMS.map(confirmedClaimRecord).filter((c) => c?.stat);
  if (stats.length < STAT_CLAIMS.length) return null;
  return (
    <section className="stats-bar" aria-label="Key figures">
      <div className="container-max">
        <ul>
          {stats.map((c) =>
            c?.stat ? (
              <li key={c.stat.value}>
                <strong>{c.stat.value}</strong>{" "}
                {c.href ? (
                  <a href={c.href} rel="noopener" target="_blank">
                    {c.stat.label}
                  </a>
                ) : (
                  c.stat.label
                )}
              </li>
            ) : null,
          )}
        </ul>
      </div>
    </section>
  );
}
