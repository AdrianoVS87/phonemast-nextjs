import Link from "next/link";
import { COMPANY } from "@/content/company";
import type { RouteEntry } from "@/seo/routes";
import { formatLongDate } from "./PageHero";

/** "By the Phone Mast Advice team, led by Matt Restall. Last reviewed 19 October 2026." */
export default function ReviewedBy({ route }: { route: RouteEntry }) {
  return (
    <>
      By the Phone Mast Advice team, led by <Link href={COMPANY.founder.profilePath}>{COMPANY.founder.name}</Link>.
      {route.lastReviewed ? (
        <>
          {" "}
          Last reviewed <time dateTime={route.lastReviewed}>{formatLongDate(route.lastReviewed)}</time>.
        </>
      ) : null}
    </>
  );
}
