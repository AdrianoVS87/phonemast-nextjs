"use client";

import { useEffect } from "react";
import { captureClickId } from "@/lib/clickId";

/** Remembers the Google Ads click ID from the landing URL for the session. Renders nothing. */
export default function ClickIdCapture() {
  useEffect(() => {
    captureClickId();
  }, []);
  return null;
}
