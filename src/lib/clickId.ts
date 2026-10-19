/**
 * Google Ads click ID, kept for the lead log so that enquiries the office marks as qualified can be
 * reported back to Google Ads (offline conversion import). Browser-only helpers.
 *
 * The ID arrives in the landing URL (?gclid=, ?gbraid= or ?wbraid=) and is kept for the session in
 * sessionStorage, so it survives the visitor browsing to the form page. As a fallback the Google tag's
 * own first-party cookies (_gcl_aw, _gcl_gb) are read when the visitor allowed advertising cookies.
 * Nothing is sent anywhere until the visitor submits a form.
 */
const STORAGE_KEY = "pma_click_id";
const PARAMS = ["gclid", "gbraid", "wbraid"] as const;

export function captureClickId(): void {
  if (typeof window === "undefined") return;
  try {
    const params = new URLSearchParams(window.location.search);
    for (const name of PARAMS) {
      const value = params.get(name)?.trim();
      if (value && /^[\w-]{10,200}$/.test(value)) {
        window.sessionStorage.setItem(STORAGE_KEY, `${name}=${value}`);
        return;
      }
    }
  } catch {
    // storage blocked: the cookie fallback in getClickId() still works
  }
}

function fromCookie(cookieName: string, param: "gclid" | "gbraid"): string | undefined {
  // Google's cookies look like "GCL.<timestamp>.<id>"
  const match = document.cookie.match(new RegExp(`(?:^|; )${cookieName}=([^;]+)`));
  const id = match ? decodeURIComponent(match[1]).split(".").slice(2).join(".") : "";
  return id && /^[\w-]{10,200}$/.test(id) ? `${param}=${id}` : undefined;
}

export function getClickId(): string | undefined {
  if (typeof window === "undefined") return undefined;
  try {
    const stored = window.sessionStorage.getItem(STORAGE_KEY);
    if (stored) return stored;
  } catch {
    // ignore
  }
  try {
    return fromCookie("_gcl_aw", "gclid") ?? fromCookie("_gcl_gb", "gbraid");
  } catch {
    return undefined;
  }
}
