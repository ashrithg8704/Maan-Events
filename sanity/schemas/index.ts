import type { SchemaTypeDefinition } from "sanity";

import { siteSettings } from "./siteSettings";
import { hero } from "./hero";
import { service } from "./service";
import { infrastructure } from "./infrastructure";
import { project } from "./project";
import { testimonial } from "./testimonial";
import { client } from "./client";

export const schemaTypes: SchemaTypeDefinition[] = [
  siteSettings,
  hero,
  service,
  infrastructure,
  project,
  testimonial,
  client,
];
