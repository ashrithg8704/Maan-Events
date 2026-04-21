import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./sanity/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        md: "2rem",
        lg: "2.5rem",
      },
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        /* Brand */
        saffron: {
          DEFAULT: "#E8730A",
          soft: "#FF8B2A",
          deep: "#C85C08",
        },
        crimson: {
          DEFAULT: "#C0111F",
          soft: "#E23040",
        },
        gold: {
          DEFAULT: "#C9A84C",
          soft: "#E6C878",
        },
        /* Surfaces */
        ink: {
          DEFAULT: "#0A0A0A",
          50: "#1F1F1F",
          100: "#181818",
          200: "#111111",
          300: "#0A0A0A",
          400: "#050505",
        },
        /* Text */
        bone: "#F5F0E8",
        muted: "#888888",
        dim: "#555555",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "-apple-system", "sans-serif"],
      },
      fontSize: {
        hero: ["clamp(3rem, 8vw, 7rem)", { lineHeight: "1.02", letterSpacing: "-0.025em" }],
        h2: ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        h3: ["clamp(1.5rem, 2.5vw, 2.25rem)", { lineHeight: "1.15" }],
        lead: ["clamp(1rem, 1.2vw, 1.2rem)", { lineHeight: "1.7" }],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #E8730A 0%, #C0111F 100%)",
        "brand-text":
          "linear-gradient(135deg, #FF8B2A 0%, #E8730A 45%, #C0111F 100%)",
        "hero-vignette":
          "radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.9) 100%)",
        "grid-fade":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        noise:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.35 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      },
      boxShadow: {
        glow: "0 30px 80px -20px rgba(232,115,10,0.45)",
        "glow-soft": "0 18px 40px -16px rgba(232,115,10,0.35)",
        card: "0 24px 60px -20px rgba(0,0,0,0.8)",
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        floaty: "floaty 2.2s ease-in-out infinite",
        "pulse-slow": "pulseSlow 3s ease-in-out infinite",
        shine: "shine 2.4s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        floaty: {
          "0%,100%": { transform: "translate(-50%, 0)", opacity: "0.7" },
          "50%": { transform: "translate(-50%, 8px)", opacity: "1" },
        },
        pulseSlow: {
          "0%,100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        shine: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
