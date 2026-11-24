/**
 * Google Ads click ID, kept for the lead log so that enquiries the office marks as qualified can be
 * reported back to Google Ads (offline conversion import). Browser-only helpers.
 *
 * PECR: nothing is written to the visitor's device until they allow advertising cookies. On landing,
 * the ID (?gclid=, ?gbraid= or ?wbraid=) is held in memory only. When advertising consent is granted
 * (now, or already on an earlier visit), it is kept in sessionStorage so it survives the visitor
 * browsing to the form page; if consent is withdrawn it is deleted. As a fallback the Google tag's own
 * first-party cookies (_gcl_aw, _gcl_gb), which exist only after advertising consent, are read.
 * Nothing is sent anywhere until the visitor submits a form.
 */
const STORAGE_KEY = "pma_click_id";
const PARAMS = ["gclid", "gbraid", "wbraid"] as const;

let pending: string | undefined;
let advertisingGranted = false;

function store(value: string): void {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, value);
  } catch {
    // storage blocked: the cookie fallback in getClickId() still works
  }
}

/** Reads the click ID from the landing URL into memory, and stores it only if consent is already given. */
export function captureClickId(): void {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  for (const name of PARAMS) {
    const value = params.get(name)?.trim();
    if (value && /^[\w-]{10,200}$/.test(value)) {
      pending = `${name}=${value}`;
      if (advertisingGranted) store(pending);
      return;
    }
  }
}

/** Called with every consent decision (see applyConsent in googleTags.ts). */
export function onAdvertisingConsent(granted: boolean): void {
  if (typeof window === "undefined") return;
  advertisingGranted = granted;
  if (granted) {
    if (pending) store(pending);
    return;
  }
  try {
    window.sessionStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}

function fromCookie(cookieName: string, param: "gclid" | "gbraid"): string | undefined {
  // Google's cookies look like "GCL.<timestamp>.<id>"
  const match = document.cookie.match(new RegExp(`(?:^|; )${cookieName}=([^;]+)`));
  const id = match ? decodeURIComponent(match[1]).split(".").slice(2).join(".") : "";
  return id && /^[\w-]{10,200}$/.test(id) ? `${param}=${id}` : undefined;
}

/** The click ID for a form submission, only when the visitor allowed advertising cookies. */
export function getClickId(): string | undefined {
  if (typeof window === "undefined" || !advertisingGranted) return undefined;
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
