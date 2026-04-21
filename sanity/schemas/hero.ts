import { defineField, defineType } from "sanity";

export const hero = defineType({
  name: "hero",
  title: "Hero Section",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "titleLine1", title: "Title Line 1", type: "string" }),
    defineField({
      name: "titleLine2",
      title: "Title Line 2 (Gradient)",
      type: "string",
    }),
    defineField({ name: "subtitle", title: "Subtitle", type: "text", rows: 3 }),
    defineField({
      name: "primaryCta",
      title: "Primary CTA",
      type: "object",
      fields: [
        { name: "label", type: "string", title: "Label" },
        { name: "href", type: "string", title: "Href" },
      ],
    }),
    defineField({
      name: "secondaryCta",
      title: "Secondary CTA",
      type: "object",
      fields: [
        { name: "label", type: "string", title: "Label" },
        { name: "href", type: "string", title: "Href" },
      ],
    }),
    defineField({
      name: "backgroundVideo",
      title: "Background Video (MP4)",
      type: "file",
      options: { accept: "video/mp4,video/webm" },
    }),
    defineField({
      name: "posterImage",
      title: "Poster Image (fallback)",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "stats",
      title: "Stat Cards",
      type: "array",
      validation: (r) => r.max(3),
      of: [
        {
          type: "object",
          fields: [
            { name: "value", type: "number", title: "Numeric Value" },
            { name: "suffix", type: "string", title: "Suffix (e.g. '+')" },
            { name: "label", type: "string", title: "Label" },
          ],
          preview: {
            select: { title: "label", subtitle: "value" },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Hero Section" }),
  },
});
