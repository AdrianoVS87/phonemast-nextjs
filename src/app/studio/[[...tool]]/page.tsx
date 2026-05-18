/**
 * Sanity Studio mount point.
 * Renders the Studio at /studio with hash-based routing.
 *
 * Auth is handled by Sanity (login via sanity.io account that has access
 * to project `fn50r1sg`). To grant Matt access, add him at
 * https://sanity.io/manage as an Editor.
 */
"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export const dynamic = "force-static";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
