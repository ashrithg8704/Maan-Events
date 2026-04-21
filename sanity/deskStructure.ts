import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Maan Events")
    .items([
      S.listItem()
        .title("Site Settings")
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("siteSettings"),
        ),
      S.listItem()
        .title("Hero")
        .child(
          S.document()
            .schemaType("hero")
            .documentId("hero"),
        ),
      S.divider(),
      S.documentTypeListItem("service").title("Services"),
      S.documentTypeListItem("infrastructure").title("Infrastructure"),
      S.documentTypeListItem("project").title("Projects"),
      S.documentTypeListItem("testimonial").title("Testimonials"),
      S.documentTypeListItem("client").title("Clients"),
    ]);
