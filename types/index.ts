import type { Image } from "sanity";

export type CTA = { label: string; href: string };

export type Stat = { value: number; suffix?: string; label: string };

export type HeroContent = {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  primaryCta: CTA;
  secondaryCta: CTA;
  video?: string;
  poster?: Image;
  stats: Stat[];
};

export type ServiceItem = {
  _id: string;
  title: string;
  icon?: string;
  tag?: string;
  description: string;
  image?: Image;
};

export type InfrastructureItem = {
  _id: string;
  title: string;
  icon?: string;
  description: string;
};

export type ProjectItem = {
  _id: string;
  title: string;
  category?: string;
  summary?: string;
  cover?: Image & { alt?: string };
  aspect?: "standard" | "tall";
};

export type Testimonial = {
  _id: string;
  quote: string;
  author?: string;
  role?: string;
};

export type ClientLogo = {
  _id: string;
  name: string;
  logo?: Image;
};
