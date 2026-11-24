import Link from "next/link";
import type { ReactNode } from "react";
import { COMPANY } from "@/content/company";
import type { RouteEntry } from "@/seo/routes";

export function formatLongDate(iso: string): string {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

interface PageHeroProps {
  route: RouteEntry;
  heading: string;
  lede: ReactNode;
  /** The one call to action above the fold. */
  cta?: { label: string; href: string };
  /** "author": the guides Matt wrote. "team": pages written by the firm, led by Matt. */
  attribution?: "author" | "team";
}

/** Navy band with the page's only H1, a one-line lede, who stands behind the page and when it was last reviewed. */
export default function PageHero({ route, heading, lede, cta, attribution = "team" }: PageHeroProps) {
  const founder = COMPANY.founder;
  return (
    <section className="page-hero">
      <div className="container-max">
        <h1>{heading}</h1>
        <p className="lede">{lede}</p>
        <p className="byline">
          {attribution === "author" ? "Written by " : "By the Phone Mast Advice team, led by "}
          <Link href={founder.profilePath}>{founder.name}</Link>
          {attribution === "author" ? ", founder" : ""}
          {route.lastReviewed ? (
            <>
              {". "}Last reviewed <time dateTime={route.lastReviewed}>{formatLongDate(route.lastReviewed)}</time>.
            </>
          ) : (
            "."
          )}
        </p>
        {cta ? (
          <Link href={cta.href} className="btn-primary">
            {cta.label}
          </Link>
        ) : null}
      </div>
    </section>
  );
}
