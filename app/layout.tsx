import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

import CustomCursor from "@/components/layout/CustomCursor";
import SmoothScroll from "@/components/layout/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://maanevents.com"),
  title: {
    default: "Maan Events — Where Everything Begins",
    template: "%s · Maan Events",
  },
  description:
    "India's premier end-to-end event infrastructure company. 800+ in-house professionals. German hangars, AC systems, staging, and more — all owned, all in-house. Based in Hyderabad.",
  keywords: [
    "Maan Events",
    "event management Hyderabad",
    "government event infrastructure",
    "music festival production India",
    "German hangars",
    "corporate event setup",
    "Sunburn production",
  ],
  authors: [{ name: "Maan Events" }],
  openGraph: {
    type: "website",
    url: "https://maanevents.com",
    siteName: "Maan Events",
    title: "Maan Events — Where Everything Begins",
    description:
      "India's largest full-infrastructure event management company. We own it all. We deliver before deadline.",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maan Events — Where Everything Begins",
    description:
      "India's largest full-infrastructure event management company.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} scroll-smooth`}
    >
      <body>
        <CustomCursor />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
