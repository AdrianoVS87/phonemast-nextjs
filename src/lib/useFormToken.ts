"use client";

import { useCallback, useEffect, useRef } from "react";
import { issueFormToken } from "@/app/actions/formToken";

/**
 * Requests the anti-spam form token as soon as the form is on screen and hands it to the
 * submit handler. If someone submits before the token has arrived, `getToken()` waits for it;
 * if the request failed, it is retried once at submit time. See src/lib/spamGuard.ts.
 */
export function useFormToken(): () => Promise<string> {
  const pending = useRef<Promise<string> | null>(null);

  const request = useCallback(() => {
    pending.current = issueFormToken().catch(() => {
      pending.current = null;
      return "";
    });
    return pending.current;
  }, []);

  useEffect(() => {
    if (!pending.current) request();
  }, [request]);

  return useCallback(() => pending.current ?? request(), [request]);
}
