"use client";

import { motion } from "framer-motion";

import { VIEWPORT_DEFAULT, fadeUp, stagger } from "@/lib/motion";
import type { ClientLogo, Testimonial } from "@/types";

export default function Clients({
  clients,
  testimonials,
}: {
  clients: ClientLogo[];
  testimonials: Testimonial[];
}) {
  const duplicated = [...clients, ...clients];

  return (
    <section
      id="clients"
      aria-labelledby="clientsTitle"
      className="section"
    >
      <div className="container-page">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_DEFAULT}
          variants={stagger(0, 0.1)}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <motion.span variants={fadeUp} className="section-label">
            Trusted By
          </motion.span>
          <motion.h2
            id="clientsTitle"
            variants={fadeUp}
            className="section-headline mt-3"
          >
            The Events That <span className="text-brand">Define India</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="section-sub mx-auto mt-5">
            From state governments to Fortune 500 boardrooms to festival grounds.
          </motion.p>
        </motion.div>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VIEWPORT_DEFAULT}
          transition={{ duration: 0.8 }}
          aria-label="Client logos"
          className="relative overflow-hidden border-y border-white/[0.08] py-5 mask-fade-x"
        >
          <div
            className="flex w-max gap-14 animate-marquee hover:[animation-play-state:paused]"
          >
            {duplicated.map((c, i) => (
              <div
                key={`${c._id}-${i}`}
                aria-hidden={i >= clients.length}
                className="flex h-20 w-[170px] flex-none items-center justify-center rounded-md border border-white/[0.08] bg-white/[0.02] text-xs uppercase tracking-[0.2em] text-muted opacity-50 transition duration-200 ease-luxury hover:scale-105 hover:border-saffron/35 hover:text-bone hover:opacity-100"
              >
                {c.name}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_DEFAULT}
          variants={stagger(0.1, 0.12)}
          className="mt-20 grid gap-8 md:grid-cols-2"
        >
          {testimonials.map((t) => (
            <motion.blockquote
              key={t._id}
              variants={fadeUp}
              className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-ink-100 p-10"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-5 left-3 font-display text-[10rem] font-bold leading-none text-gold/20"
              >
                &ldquo;
              </span>
              <p className="relative z-10 font-display italic text-xl leading-snug text-bone">
                “{t.quote}”
              </p>
              <footer className="relative z-10 mt-5 flex items-center gap-3 text-sm text-muted">
                <span aria-hidden className="h-px w-6 bg-saffron" />
                <span>
                  <strong className="font-semibold text-bone">{t.author}</strong>
                  {t.role ? `, ${t.role}` : null}
                </span>
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
