import { defineField, defineType } from "sanity";

export const infrastructure = defineType({
  name: "infrastructure",
  title: "Infrastructure Item",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: r => r.required() }),
    defineField({ name: "icon", title: "Icon (emoji)", type: "string" }),
    defineField({ name: "description", type: "text", rows: 2 }),
    defineField({ name: "order", type: "number", initialValue: 100 }),
  ],
  orderings: [
    { title: "Display order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
});
