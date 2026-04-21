"use client";

import { motion } from "framer-motion";

import Button from "@/components/ui/Button";
import { VIEWPORT_DEFAULT, fadeUp, stagger } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { ProjectItem } from "@/types";

export default function Portfolio({ items }: { items: ProjectItem[] }) {
  return (
    <section
      id="portfolio"
      aria-labelledby="portfolioTitle"
      className="section bg-ink-200 px-0"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_DEFAULT}
        variants={stagger(0, 0.1)}
        className="mx-auto mb-14 max-w-3xl px-5 text-center"
      >
        <motion.span variants={fadeUp} className="section-label">
          Our Work Speaks
        </motion.span>
        <motion.h2
          id="portfolioTitle"
          variants={fadeUp}
          className="section-headline mt-3"
        >
          Built for the Stage.{" "}
          <span className="text-brand">Remembered Forever.</span>
        </motion.h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_DEFAULT}
        variants={stagger(0, 0.08)}
        className="grid grid-cols-1 auto-rows-[220px] gap-1 sm:grid-cols-2 lg:grid-cols-3"
      >
        {items.map((p, i) => (
          <motion.figure
            key={p._id}
            variants={fadeUp}
            whileHover={{ scale: 1.03, zIndex: 2 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "group relative overflow-hidden bg-ink-50",
              p.aspect === "tall" && "sm:row-span-2",
            )}
          >
            {/* IMAGE: Portfolio item cover */}
            <div
              className={cn(
                "absolute inset-0 image-placeholder",
                i % 2 === 1 && "image-placeholder--alt",
              )}
            />

            <figcaption className="absolute inset-0 z-10 flex items-end bg-gradient-to-t from-ink/95 via-ink/40 to-transparent p-5 opacity-0 transition-opacity duration-500 ease-luxury group-hover:opacity-100">
              <div>
                <span className="block text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-saffron">
                  {p.category}
                </span>
                <span className="mt-1.5 block font-display text-lg text-bone">
                  {p.title}
                </span>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT_DEFAULT}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mt-14 px-5 text-center"
      >
        <Button href="#contact" variant="outline" size="lg">
          See Full Portfolio →
        </Button>
      </motion.div>
    </section>
  );
}
