"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import Button from "@/components/ui/Button";
import Counter from "@/components/ui/Counter";
import { EASE_OUT } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { HeroContent } from "@/types";

export default function Hero({ content }: { content: HeroContent }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const titleY = useTransform(scrollY, [0, 500], [0, -80]);
  const titleOpacity = useTransform(scrollY, [0, 400], [1, 0.3]);

  return (
    <section
      ref={ref}
      id="hero"
      aria-labelledby="heroTitle"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pt-24"
    >
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        {content.video ? (
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={undefined}
          >
            <source src={content.video} type="video/mp4" />
          </video>
        ) : (
          <div
            className="h-full w-full"
            style={{
              background:
                "linear-gradient(135deg, #0A0A0A 0%, #1a0a00 50%, #0A0A0A 100%)",
            }}
          />
        )}

        {/* Layered overlays for cinematic depth */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 20% 20%, rgba(232,115,10,0.25) 0%, transparent 55%),
              radial-gradient(ellipse at 80% 80%, rgba(192,17,31,0.22) 0%, transparent 55%),
              radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.92) 100%)
            `,
          }}
        />
        <div className="absolute inset-0 grid-bg-lg opacity-40" aria-hidden="true" />
      </div>

      {/* Hero content */}
      <motion.div
        style={{ y: titleY, opacity: titleOpacity }}
        className="container-page relative z-10 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.1 }}
          className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-gold md:text-sm"
        >
          {content.eyebrow}
        </motion.span>

        <motion.h1
          id="heroTitle"
          className="mt-5 font-display text-hero font-bold text-bone"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15, delayChildren: 0.25 } },
          }}
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { duration: 0.9, ease: EASE_OUT },
              },
            }}
            className="block"
          >
            {content.titleLine1}
          </motion.span>
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { duration: 0.9, ease: EASE_OUT },
              },
            }}
            className="block text-brand"
          >
            {content.titleLine2}
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.7 }}
          className="mx-auto mt-6 max-w-2xl text-muted text-lead"
        >
          {content.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.85 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <Button href={content.primaryCta.href} variant="primary" size="lg">
            {content.primaryCta.label}
          </Button>
          <Button href={content.secondaryCta.href} variant="ghost" size="lg">
            {content.secondaryCta.label}
          </Button>
        </motion.div>
      </motion.div>

      {/* Stat cards — overlapping next section */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 translate-y-1/2"
        aria-label="Company statistics"
      >
        <div className="container-page">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12, delayChildren: 1 } },
            }}
            className="pointer-events-auto grid gap-4 md:grid-cols-3"
          >
            {content.stats.map((s, i) => (
              <motion.article
                key={s.label}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT } },
                }}
                className={cn(
                  "glass relative rounded-xl border border-white/[0.08] border-t-2 border-t-saffron px-5 py-8 text-center shadow-card",
                )}
              >
                <div className="font-display text-4xl font-bold leading-none text-brand md:text-5xl">
                  <Counter
                    target={s.value}
                    suffix={s.suffix}
                    duration={1600 + i * 200}
                  />
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.18em] text-muted">
                  {s.label}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[0.7rem] uppercase tracking-[0.3em] text-muted animate-floaty"
      >
        <span>Scroll</span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="h-5 w-5 stroke-saffron"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </a>
    </section>
  );
}
