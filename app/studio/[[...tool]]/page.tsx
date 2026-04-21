/**
 * Sanity Studio mounted at /studio
 * Configure the project id via NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local
 *
 * This page is a Server Component so `metadata` / `viewport` can be re-exported
 * from next-sanity/studio. The actual Studio UI is rendered by the client-only
 * <StudioClient /> below.
 */
import StudioClient from "./StudioClient";

export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  return <StudioClient />;
}
