/**
 * Sanity Studio mounted at /studio
 * Configure the project id via NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local
 */
"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";

export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
