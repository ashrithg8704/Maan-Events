"use client";

import { motion } from "framer-motion";

import { VIEWPORT_DEFAULT, fadeUp, stagger } from "@/lib/motion";
import type { InfrastructureItem } from "@/types";

export default function Infrastructure({ items }: { items: InfrastructureItem[] }) {
  return (
    <section
      id="infrastructure"
      aria-labelledby="infraTitle"
      className="section relative overflow-hidden bg-ink"
    >
      {/* Grid background with mask */}
      <div className="absolute inset-0 grid-bg mask-fade-center opacity-50" aria-hidden="true" />
      {/* Saffron glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[20%] left-1/2 h-[900px] w-[900px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(circle, rgba(232,115,10,0.18), transparent 65%)",
        }}
      />

      <div className="container-page relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_DEFAULT}
          variants={stagger(0, 0.1)}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <motion.span variants={fadeUp} className="section-label">
            The Differentiator
          </motion.span>
          <motion.h2
            id="infraTitle"
            variants={fadeUp}
            className="section-headline mt-3"
          >
            Everything You Need.
            <br />
            <span className="text-brand">Nothing We Don&apos;t Own.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="section-sub mx-auto mt-5">
            Most event companies source from 30 vendors. We source from one: ourselves.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_DEFAULT}
          variants={stagger(0, 0.07)}
          className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((item) => (
            <motion.article
              key={item._id}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-xl border border-white/[0.08] bg-ink-200 p-6 transition-colors duration-300 hover:border-saffron/40 hover:bg-ink-100"
            >
              <div
                aria-hidden="true"
                className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl border border-gold/25 bg-gold/[0.06] text-2xl text-gold"
              >
                {item.icon}
              </div>
              <h3 className="font-display text-lg font-semibold text-bone">
                {item.title}
              </h3>
              <p className="mt-1.5 text-[0.92rem] leading-relaxed text-muted">
                {item.description}
              </p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_DEFAULT}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative mt-24 border-y border-white/[0.08] px-5 py-14 text-center"
          style={{
            background:
              "linear-gradient(180deg, transparent, rgba(232,115,10,0.04), transparent)",
          }}
        >
          <h3 className="font-display text-[clamp(1.5rem,3.5vw,2.75rem)] font-bold leading-tight text-brand">
            800+ staff. 15+ years. One company. Zero compromises.
          </h3>
        </motion.div>
      </div>
    </section>
  );
}
