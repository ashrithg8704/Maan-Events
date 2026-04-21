"use client";

import { motion } from "framer-motion";

import Placeholder from "@/components/ui/Placeholder";
import {
  VIEWPORT_DEFAULT,
  fadeUp,
  stagger,
} from "@/lib/motion";
import type { ServiceItem } from "@/types";

export default function Services({ items }: { items: ServiceItem[] }) {
  return (
    <section
      id="services"
      aria-labelledby="servicesTitle"
      className="section border-y border-white/[0.06] bg-ink-200"
    >
      <div className="container-page">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_DEFAULT}
          variants={stagger(0, 0.1)}
          className="mb-14 flex flex-wrap items-end justify-between gap-6"
        >
          <motion.div variants={fadeUp}>
            <span className="section-label">What We Execute</span>
            <h2 id="servicesTitle" className="section-headline mt-3">
              Every Scale. <span className="text-brand">Every Stage.</span>
            </h2>
          </motion.div>
          <motion.p variants={fadeUp} className="section-sub">
            Five domains. One standard of excellence. Every event, every time.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_DEFAULT}
          variants={stagger(0, 0.1)}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((item) => (
            <motion.article
              key={item._id}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-white/[0.06] border-l-4 border-l-saffron bg-ink-100 transition-shadow duration-500 hover:shadow-glow"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-ink-50">
                {/* IMAGE: Service category feature image */}
                <div className="absolute inset-0 image-placeholder" />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 40%, rgba(10,10,10,0.85))",
                  }}
                />
              </div>

              <div className="flex flex-1 flex-col gap-3 p-6">
                <span
                  aria-hidden="true"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-saffron/10 text-xl text-saffron"
                >
                  {item.icon}
                </span>
                <h3 className="font-display text-xl font-bold leading-tight text-bone">
                  {item.title}
                </h3>
                <p className="text-sm text-muted">{item.description}</p>
                {item.tag ? (
                  <span className="mt-auto inline-flex w-fit items-center rounded-full border border-saffron/35 bg-gold/[0.06] px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-gold">
                    {item.tag}
                  </span>
                ) : null}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
