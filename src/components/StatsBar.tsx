import GoogleG from "@/components/GoogleG";
import { confirmedClaimRecord, type ClaimId } from "@/content/company";

const STAT_CLAIMS: readonly ClaimId[] = ["combinedExperience", "dealsCompleted", "googleRating"];

/**
 * Headline figures, each from a claim Matt confirmed (src/content/company.ts). The bar renders only
 * when all three are confirmed, so it never looks like it is missing something. A figure with a link
 * is the Google rating: it shows the Google G and links to the Business Profile.
 */
export default function StatsBar() {
  const stats = STAT_CLAIMS.map(confirmedClaimRecord).filter((c) => c?.stat);
  if (stats.length < STAT_CLAIMS.length) return null;
  const STAT_LEAD = stats[0];
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
                ) : c === STAT_LEAD ? (
                  <span className="stats-tagline">
                    <strong>{c.stat.value}</strong>
                    <span aria-hidden="true"> | </span>
                    <span>{c.stat.label}</span>
                  </span>
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
