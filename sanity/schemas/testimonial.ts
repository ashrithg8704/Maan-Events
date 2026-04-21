import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({ name: "quote", type: "text", rows: 4, validation: r => r.required() }),
    defineField({ name: "author", type: "string" }),
    defineField({ name: "role", type: "string" }),
    defineField({
      name: "featured",
      type: "boolean",
      initialValue: false,
    }),
  ],
});
