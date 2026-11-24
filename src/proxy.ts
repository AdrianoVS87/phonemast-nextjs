import { NextResponse, type NextRequest } from "next/server";
import { resolveRequest } from "@/seo/redirects";

/**
 * Redirects and 410s, decided by the data table in src/seo/redirects.ts. Runs before Next.js adds
 * the trailing slash, so `/foo` and `/foo/` both reach their destination in one 308.
 */
export function proxy(req: NextRequest) {
  const decision = resolveRequest(req.headers.get("host") ?? "", req.nextUrl.pathname);

  if (decision.kind === "gone") {
    return new NextResponse("Gone", { status: 410, headers: { "X-Robots-Tag": "noindex" } });
  }
  if (decision.kind === "redirect") {
    const url = new URL(decision.location, req.nextUrl.origin);
    url.search = req.nextUrl.search;
    return NextResponse.redirect(url, decision.status);
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Every path without a file extension, except Next internals, API routes and the Studio
    "/((?!_next|api|studio|.*\\..*).*)",
    // Old WordPress files and folders that do have extensions
    "/index.php",
    "/xmlrpc.php",
    "/wp-login.php",
    "/sitemap_index.xml",
    "/wp-content/:path*",
    "/wp-includes/:path*",
  ],
};
