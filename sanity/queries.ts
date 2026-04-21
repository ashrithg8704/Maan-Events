import { groq } from "next-sanity";

export const heroQuery = groq`*[_type == "hero"][0]{
  eyebrow, titleLine1, titleLine2, subtitle,
  primaryCta, secondaryCta,
  "video": backgroundVideo.asset->url,
  poster, stats
}`;

export const servicesQuery = groq`*[_type == "service"] | order(order asc){
  _id, title, icon, tag, description,
  "slug": slug.current,
  image
}`;

export const infrastructureQuery = groq`*[_type == "infrastructure"] | order(order asc){
  _id, title, icon, description
}`;

export const projectsQuery = groq`*[_type == "project"] | order(order asc){
  _id, title, category, summary, aspect,
  "slug": slug.current,
  "cover": cover,
  "alt": coalesce(cover.alt, title)
}`;

export const testimonialsQuery = groq`*[_type == "testimonial" && featured == true] | order(_createdAt desc){
  _id, quote, author, role
}`;

export const clientsQuery = groq`*[_type == "client"] | order(order asc){
  _id, name, logo
}`;

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  title, tagline, description,
  phone, email, whatsapp, address, mapsUrl, socials
}`;
