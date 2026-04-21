"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Logo from "./Logo";
import { cn, whatsappUrl } from "@/lib/utils";
import { EASE_OUT } from "@/lib/motion";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#infrastructure", label: "Infrastructure" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      id="site-nav"
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background,border-color,padding,backdrop-filter] duration-500 ease-luxury border-b border-transparent",
        scrolled
          ? "bg-ink/90 backdrop-blur-md border-saffron/40 py-3"
          : "py-5",
      )}
    >
      <div className="container-page flex items-center justify-between gap-5">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-9">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group relative py-1 text-sm font-medium tracking-wide text-bone transition-colors hover:text-saffron"
            >
              {l.label}
              <span className="absolute inset-x-0 bottom-0 block h-px w-0 bg-saffron transition-[width] duration-500 ease-luxury group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <a
          href={whatsappUrl("Hi Maan Events, I'd like a quote for an event.")}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 rounded-md bg-saffron px-5 py-2.5 text-sm font-semibold text-ink transition ease-luxury hover:-translate-y-0.5 hover:bg-saffron-soft hover:shadow-glow-soft"
          aria-label="Get a quote on WhatsApp"
        >
          <WhatsAppIcon />
          Get a Quote
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden relative z-[60] flex h-10 w-10 items-center justify-center"
        >
          <span
            className={cn(
              "absolute left-2 right-2 h-[2px] bg-bone transition-[transform,top,opacity] duration-500 ease-luxury",
              open ? "top-[19px] rotate-45" : "top-[14px]",
            )}
          />
          <span
            className={cn(
              "absolute left-2 right-2 top-[19px] h-[2px] bg-bone transition-opacity duration-300",
              open ? "opacity-0" : "opacity-100",
            )}
          />
          <span
            className={cn(
              "absolute left-2 right-2 h-[2px] bg-bone transition-[transform,top] duration-500 ease-luxury",
              open ? "top-[19px] -rotate-45" : "top-[24px]",
            )}
          />
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE_OUT }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-ink/98 backdrop-blur-2xl lg:hidden"
          >
            <motion.nav
              aria-label="Mobile"
              className="flex flex-col items-center gap-6"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.07 } },
              }}
            >
              {LINKS.map((l) => (
                <motion.div
                  key={l.href}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl font-semibold tracking-tight text-bone transition-colors hover:text-saffron"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                href={whatsappUrl("Hi Maan Events, I'd like a quote for an event.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-saffron px-6 py-3 text-sm font-semibold text-ink"
              >
                <WhatsAppIcon />
                Get a Quote
              </motion.a>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <path d="M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.46 0 .12 5.34.12 11.92c0 2.1.55 4.15 1.59 5.96L0 24l6.28-1.65a11.9 11.9 0 0 0 5.75 1.47h.01c6.58 0 11.92-5.34 11.92-11.92 0-3.18-1.24-6.17-3.44-8.42zM17.47 14.41c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.87 1.21 3.07c.15.2 2.1 3.2 5.07 4.49.71.31 1.26.5 1.69.64.71.23 1.35.2 1.86.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35z" />
    </svg>
  );
}
