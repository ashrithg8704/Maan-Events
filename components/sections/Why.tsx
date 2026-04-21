"use client";

import { motion } from "framer-motion";

import { VIEWPORT_DEFAULT, fadeUp, stagger } from "@/lib/motion";

const ROWS = [
  {
    n: "01",
    icon: "🧱",
    title: "Zero Vendor Dependency",
    body: "We own the infrastructure, you own the peace of mind.",
    chip: "Own It All",
  },
  {
    n: "02",
    icon: "👷",
    title: "800+ In-House Professionals",
    body: "Every person on your event is our person.",
    chip: "On Payroll",
  },
  {
    n: "03",
    icon: "⏱️",
    title: "Delivered Before Deadline",
    body: "Our track record is our promise.",
    chip: "Every Time",
  },
];

export default function Why() {
  return (
    <section
      id="why"
      aria-labelledby="whyTitle"
      className="section border-y border-white/[0.08] bg-ink-200"
    >
      <div className="container-page">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_DEFAULT}
          variants={stagger(0, 0.1)}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <motion.span variants={fadeUp} className="section-label">
            Why Maan Events
          </motion.span>
          <motion.h2
            id="whyTitle"
            variants={fadeUp}
            className="section-headline mt-3"
          >
            Three Promises.{" "}
            <span className="text-brand">Zero Exceptions.</span>
          </motion.h2>
        </motion.div>

        <div>
          {ROWS.map((r, idx) => (
            <motion.div
              key={r.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_DEFAULT}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: idx * 0.08,
              }}
              className="relative grid grid-cols-[60px_1fr] items-center gap-6 overflow-hidden border-b border-white/[0.08] py-10 last:border-b-0 md:grid-cols-[100px_1fr_auto] md:gap-10 md:py-14"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-2 top-1/2 -translate-y-1/2 font-display text-[clamp(10rem,22vw,20rem)] font-black leading-[0.8] tracking-tighter text-saffron/[0.05]"
              >
                {r.n}
              </span>

              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-saffron/35 bg-saffron/[0.08] text-2xl text-saffron md:h-20 md:w-20 md:text-3xl">
                {r.icon}
              </div>

              <div className="relative z-10 col-span-2 md:col-span-1">
                <h3 className="font-display text-[clamp(1.5rem,3vw,2.5rem)] font-bold leading-tight text-bone">
                  {r.title}
                </h3>
                <p className="mt-1.5 max-w-lg text-muted">{r.body}</p>
              </div>

              <span className="relative z-10 hidden whitespace-nowrap rounded-full border border-saffron/35 bg-saffron/[0.08] px-4 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-saffron md:inline-block">
                {r.chip}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
