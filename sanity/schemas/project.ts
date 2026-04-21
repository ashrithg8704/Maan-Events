import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Portfolio Project",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: r => r.required() }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
    }),
    defineField({
      name: "category",
      type: "string",
      options: {
        list: [
          { title: "Government", value: "government" },
          { title: "Corporate", value: "corporate" },
          { title: "Festival", value: "festival" },
          { title: "Inauguration", value: "inauguration" },
          { title: "Exhibition", value: "exhibition" },
        ],
      },
    }),
    defineField({ name: "summary", type: "text", rows: 2 }),
    defineField({
      name: "cover",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        { name: "alt", type: "string", title: "Alt text" },
      ],
    }),
    defineField({
      name: "gallery",
      title: "Gallery Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "featured",
      type: "boolean",
      initialValue: false,
    }),
    defineField({ name: "order", type: "number", initialValue: 100 }),
    defineField({
      name: "aspect",
      title: "Gallery Aspect",
      type: "string",
      options: {
        list: [
          { title: "Standard", value: "standard" },
          { title: "Tall", value: "tall" },
        ],
      },
      initialValue: "standard",
    }),
  ],
});
