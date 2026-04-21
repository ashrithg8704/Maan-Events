import { defineField, defineType } from "sanity";

export const client = defineType({
  name: "client",
  title: "Client Logo",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: r => r.required() }),
    defineField({
      name: "logo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "order", type: "number", initialValue: 100 }),
  ],
});
