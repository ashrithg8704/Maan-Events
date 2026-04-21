"use client";

import { motion } from "framer-motion";

import Placeholder from "@/components/ui/Placeholder";
import { fadeLeft, fadeRight, stagger, VIEWPORT_DEFAULT, fadeUp } from "@/lib/motion";

const HIGHLIGHTS = [
  {
    icon: "🏗️",
    text: "Complete in-house infrastructure — no vendor dependency",
  },
  {
    icon: "👥",
    text: "800–900 trained professionals on payroll",
  },
  {
    icon: "⏱️",
    text: "Delivered before deadline. Every time.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="aboutTitle"
      className="section pt-48 md:pt-56"
    >
      <div className="container-page grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_DEFAULT}
          variants={fadeLeft}
        >
          <span className="section-label">About Maan Events</span>
          <h2
            id="aboutTitle"
            className="section-headline mt-4"
          >
            The Infrastructure Behind India&apos;s{" "}
            <span className="text-brand">Greatest Events</span>
          </h2>

          <div className="mt-6 space-y-5 text-lead text-muted max-w-xl">
            <p>
              When the Chief Minister calls. When 20,000 seats need to be ready by morning.
              When a music festival demands world-class staging — Maan Events answers.
            </p>
            <p>We own our infrastructure. We staff our teams. We deliver before deadline.</p>
          </div>

          <hr className="divider-brand mt-8" aria-hidden="true" />

          <motion.ul
            variants={stagger(0.1, 0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_DEFAULT}
            className="mt-8 space-y-4"
          >
            {HIGHLIGHTS.map((h) => (
              <motion.li
                key={h.text}
                variants={fadeUp}
                className="flex items-start gap-3 text-bone"
              >
                <span
                  aria-hidden="true"
                  className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-saffron/10 text-lg text-saffron"
                >
                  {h.icon}
                </span>
                <span className="pt-2 text-[0.98rem]">{h.text}</span>
              </motion.li>
            ))}
          </motion.ul>

          <a
            href="#why"
            className="group mt-8 inline-flex items-center gap-1.5 font-semibold text-saffron transition-[gap,color] duration-200 ease-luxury hover:gap-3 hover:text-saffron-soft"
          >
            Our Story
            <span aria-hidden>→</span>
          </a>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_DEFAULT}
          variants={stagger(0.1, 0.15)}
          className="grid grid-cols-2 grid-rows-[200px_200px] gap-3 md:grid-rows-[220px_220px] lg:grid-rows-[260px_260px]"
        >
          <motion.div variants={fadeRight} className="row-span-2">
            {/* IMAGE: Aerial view of massive tent setup for government event */}
            <Placeholder
              label="Govt. Aerial"
              className="h-full"
            />
          </motion.div>
          <motion.div variants={fadeRight}>
            {/* IMAGE: German hangar interior with 10,000+ chairs */}
            <Placeholder
              variant="alt"
              label="Hangar Interior"
              className="h-full"
            />
          </motion.div>
          <motion.div variants={fadeRight}>
            {/* IMAGE: Stage construction in progress */}
            <Placeholder
              label="Stage Build"
              className="h-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
