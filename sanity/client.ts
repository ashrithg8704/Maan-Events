import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { apiVersion, dataset, projectId, useCdn } from "./env";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  perspective: "published",
});

const builder = imageUrlBuilder({ projectId, dataset });

export const urlFor = (source: SanityImageSource) => builder.image(source);

/**
 * Safe fetch — returns fallback if Sanity isn't configured yet so the marketing
 * site renders beautifully out of the box with baked-in demo content.
 */
export async function safeFetch<T>(
  query: string,
  params: Record<string, unknown> = {},
  fallback: T,
): Promise<T> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return fallback;
  try {
    return await sanityClient.fetch<T>(query, params, {
      next: { revalidate: 60 },
    });
  } catch (err) {
    console.warn("[sanity] fetch failed, using fallback", err);
    return fallback;
  }
}
