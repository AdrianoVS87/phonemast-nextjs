/**
 * Decides whether a conversion may fire. Pure, so the rules can be checked without a browser
 * (scripts/conversion-dedupe.check.mjs).
 *
 * A form conversion needs the id of a real send: silent spam drops report success to the bot but
 * carry no id. The mast answer never blocks a conversion: a qualified enquiry is one the firm agrees to
 * pay for, which can include prospects without a mast. Each form kind counts once per session.
 */
export interface SessionStore {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
}

/** True the first time `key` is seen. Without storage it says yes: Ads still dedupes on transaction_id. */
export function claimOnce(key: string, storage: SessionStore | null): boolean {
  try {
    if (!storage) return true;
    if (storage.getItem(key)) return false;
    storage.setItem(key, "1");
    return true;
  } catch {
    return true;
  }
}

export function claimFormConversion(
  submission: { kind: string; id?: string; hasMast?: string },
  storage: SessionStore | null,
): boolean {
  if (!submission.id) return false;
  return claimOnce(`pma_conversion_${submission.kind}`, storage);
}
