"use client";

import { useEffect } from "react";
import { captureClickId } from "@/lib/clickId";

/** Reads the Google Ads click ID from the landing URL; it is stored only after advertising consent. Renders nothing. */
export default function ClickIdCapture() {
  useEffect(() => {
    captureClickId();
  }, []);
  return null;
}
