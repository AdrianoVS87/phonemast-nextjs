/**
 * Site-wide URL rules. One host (www), HTTPS, and a trailing slash on every path,
 * matching `trailingSlash: true` in next.config.ts.
 */
export const SITE_URL = "https://www.phonemastadvice.co.uk";
export const SITE_HOST = "www.phonemastadvice.co.uk";
export const APEX_HOST = "phonemastadvice.co.uk";
export const SITE_NAME = "Phone Mast Advice";
export const SITE_LOCALE = "en_GB";

/** `"/phone-mast-rent"` → `"/phone-mast-rent/"`; `""` → `"/"`. Query strings and fragments are kept. */
export function normalisePath(path: string): string {
  const match = /^([^?#]*)(.*)$/.exec(path.trim());
  const pathname = match?.[1] ?? "";
  const rest = match?.[2] ?? "";
  const withLeading = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const collapsed = withLeading.replace(/\/{2,}/g, "/");
  const withTrailing = collapsed.endsWith("/") ? collapsed : `${collapsed}/`;
  return `${withTrailing}${rest}`;
}

/** Canonical absolute URL for a site path. */
export function absoluteUrl(path: string): string {
  return `${SITE_URL}${normalisePath(path)}`;
}
