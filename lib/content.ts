/**
 * Fallback / demo content — used when Sanity isn't configured, or as defaults.
 * All the marketing copy lives here so editors can later migrate to Sanity.
 */
import type {
  HeroContent,
  ServiceItem,
  InfrastructureItem,
  ProjectItem,
  Testimonial,
} from "@/types";

export const heroFallback: HeroContent = {
  eyebrow: "India's Premier Event Infrastructure",
  titleLine1: "We Don't Just Plan Events.",
  titleLine2: "We Build Them.",
  subtitle:
    "From 500 to 50,000 attendees — Government functions, corporate launches, music festivals. Everything in-house. Nothing outsourced.",
  primaryCta: { label: "View Our Work", href: "#portfolio" },
  secondaryCta: { label: "Talk to Us", href: "#contact" },
  stats: [
    { value: 800, suffix: "+", label: "In-House Staff" },
    { value: 15, suffix: "+ Years", label: "Delivering Excellence" },
    { value: 20000, suffix: "+", label: "Max Event Capacity" },
  ],
};

export const servicesFallback: ServiceItem[] = [
  {
    _id: "s1",
    title: "Government & State Events",
    icon: "🏛️",
    tag: "Head of State Level",
    description:
      "Political rallies, ministerial functions, state ceremonies — built for 20,000+ with full protocol infrastructure.",
  },
  {
    _id: "s2",
    title: "Corporate & B2B Events",
    icon: "💼",
    tag: "Fortune 500 Clients",
    description:
      "Product launches, factory inaugurations, foundation-laying ceremonies, expo pavilions — branded infrastructure at scale.",
  },
  {
    _id: "s3",
    title: "Music Festivals & Entertainment",
    icon: "🎵",
    tag: "50,000+ Capacity",
    description:
      "Concert staging, artist zones, crowd infrastructure for Sunburn-scale events.",
  },
  {
    _id: "s4",
    title: "Exhibitions & Expos",
    icon: "🏢",
    tag: "Multi-Hall Builds",
    description:
      "Custom pavilion builds, modular structures, German hangars for trade events.",
  },
  {
    _id: "s5",
    title: "Inauguration Events",
    icon: "🎗️",
    tag: "Turnkey Delivery",
    description:
      "Grand inauguration setups for plants, factories, government buildings — with full ceremonial infrastructure.",
  },
];

export const infrastructureFallback: InfrastructureItem[] = [
  {
    _id: "i1",
    title: "German Hangars",
    icon: "⛺",
    description: "Multiple shapes and sizes, climate-controlled.",
  },
  {
    _id: "i2",
    title: "Air Conditioning",
    icon: "❄️",
    description: "Full HVAC for events up to 50,000 sq ft.",
  },
  {
    _id: "i3",
    title: "Staging & Scaffolding",
    icon: "🏗️",
    description: "Layher scaff, Layher staging, grandstands.",
  },
  {
    _id: "i4",
    title: "Flooring & Carpeting",
    icon: "🟫",
    description: "Professional flooring for any terrain.",
  },
  {
    _id: "i5",
    title: "Furniture",
    icon: "🛋️",
    description: "Chairs, sofas, VIP seating — thousands of units.",
  },
  {
    _id: "i6",
    title: "Drapes & Decor",
    icon: "🎭",
    description: "Full fabric infrastructure and decoration.",
  },
  {
    _id: "i7",
    title: "Glass Walls",
    icon: "🪟",
    description: "Premium glass partitioning for VIP sections.",
  },
  {
    _id: "i8",
    title: "Mezzanine Structures",
    icon: "🧱",
    description: "Multi-level builds for large venues.",
  },
  {
    _id: "i9",
    title: "Audio / Visual",
    icon: "🔊",
    description: "Sound systems, mics, screens, lighting rigs.",
  },
];

export const projectsFallback: ProjectItem[] = [
  {
    _id: "p1",
    title: "CM Rally — 20,000 Seats",
    category: "government",
    summary: "Massive tent interior for state-level political rally.",
    aspect: "tall",
  },
  {
    _id: "p2",
    title: "Ground Build Overview",
    category: "aerial",
    summary: "Aerial drone documentation of event setup.",
    aspect: "standard",
  },
  {
    _id: "p3",
    title: "Sunburn — Main Stage",
    category: "festival",
    summary: "Festival-grade stage, crowd infrastructure, lighting rigs.",
    aspect: "standard",
  },
  {
    _id: "p4",
    title: "Branded Launch Stage",
    category: "corporate",
    summary: "Product launch stage with full brand integration.",
    aspect: "standard",
  },
  {
    _id: "p5",
    title: "Factory Ribbon Ceremony",
    category: "inauguration",
    summary: "Factory inauguration with ceremonial infrastructure.",
    aspect: "tall",
  },
  {
    _id: "p6",
    title: "Hangar — VIP Lounge",
    category: "vip",
    summary: "German hangar interior, VIP seating, glass walls.",
    aspect: "standard",
  },
  {
    _id: "p7",
    title: "Foundation Stone Event",
    category: "ceremony",
    summary: "Government foundation-laying ceremony setup.",
    aspect: "standard",
  },
  {
    _id: "p8",
    title: "50,000 Attendees",
    category: "crowd",
    summary: "Aerial view of festival crowd at peak capacity.",
    aspect: "standard",
  },
];

export const testimonialsFallback: Testimonial[] = [
  {
    _id: "t1",
    quote:
      "When we needed a venue for 15,000 people in 48 hours, Maan Events delivered without a single compromise.",
    author: "Senior Government Official",
    role: "Andhra Pradesh",
  },
  {
    _id: "t2",
    quote:
      "Their in-house infrastructure is unmatched in India. We've worked with them on three national events.",
    author: "Director",
    role: "Major Corporate Group",
  },
];

export const clientsFallback = Array.from({ length: 8 }, (_, i) => ({
  _id: `c${i + 1}`,
  name: `Client ${i + 1}`,
}));
