"use server";

import { issueToken } from "@/lib/spamGuard";

/** Called by the enquiry forms when they mount; the token travels back with the submission. */
export async function issueFormToken(): Promise<string> {
  return issueToken();
}
