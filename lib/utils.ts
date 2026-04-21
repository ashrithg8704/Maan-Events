import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatIN(num: number): string {
  return num.toLocaleString("en-IN");
}

export const SITE = {
  name: "Maan Events",
  tagline: "Where Everything Begins",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+91 99999 99999",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "events@maanevents.com",
  whatsapp:
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919999999999",
  location: "Hyderabad, Telangana, India",
  mapsQuery: "Maan+Events+Hyderabad",
} as const;

export const whatsappUrl = (msg?: string) =>
  `https://wa.me/${SITE.whatsapp}${msg ? `?text=${encodeURIComponent(msg)}` : ""}`;
