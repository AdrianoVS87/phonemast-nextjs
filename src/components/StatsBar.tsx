import GoogleG from "@/components/GoogleG";
import { confirmedClaimRecord, type ClaimId } from "@/content/company";

const STAT_CLAIMS: readonly ClaimId[] = ["experienceYears", "dealsCompleted", "googleRating"];

/**
 * Headline figures, each from a claim Matt confirmed (src/content/company.ts). The bar renders only
 * when all three are confirmed, so it never looks like it is missing something. A figure with a link
 * is the Google rating: it shows the Google G and links to the Business Profile.
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
                {c.href ? (
                  <a href={c.href} rel="noopener" target="_blank" className="stats-rating">
                    <GoogleG />
                    <strong>{c.stat.value}</strong> <span className="stats-rating-label">{c.stat.label}</span>
                  </a>
                ) : (
                  <>
                    <strong>{c.stat.value}</strong> {c.stat.label}
                  </>
                )}
              </li>
            ) : null,
          )}
        </ul>
      </div>
    </section>
  );
}
