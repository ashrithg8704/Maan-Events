"use client";

import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";

import { VIEWPORT_DEFAULT, fadeLeft, fadeRight } from "@/lib/motion";
import { SITE, whatsappUrl } from "@/lib/utils";

type Status = "idle" | "submitting" | "success";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  /* FORM: wire to backend (e.g. /api/enquiry) or WhatsApp deep link. */
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");

    // Simulate submission — replace with fetch to your backend or WhatsApp API.
    await new Promise((r) => setTimeout(r, 800));
    setStatus("success");

    setTimeout(() => {
      form.reset();
      setStatus("idle");
    }, 3500);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contactTitle"
      className="section"
    >
      <div className="container-page grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_DEFAULT}
          variants={fadeLeft}
        >
          <span className="section-label">Let&apos;s Talk</span>
          <h2 id="contactTitle" className="section-headline mt-3">
            Let&apos;s Build Something{" "}
            <span className="text-brand">Grand.</span>
          </h2>
          <p className="mt-5 max-w-md text-lead text-muted">
            Tell us about your event. We&apos;ll tell you how we&apos;ll make it unforgettable.
          </p>

          <div className="mt-10 space-y-4">
            <ContactRow icon="📞" label="Phone">
              <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a>
            </ContactRow>
            <ContactRow icon="📧" label="Email">
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </ContactRow>
            <ContactRow icon="💬" label="WhatsApp">
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                Chat with us
              </a>
            </ContactRow>
            <ContactRow icon="📍" label="Address">
              <span>{SITE.location}</span>
            </ContactRow>
            <ContactRow icon="🗺️" label="Location">
              <a
                href={`https://maps.google.com/?q=${SITE.mapsQuery}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Google Maps
              </a>
            </ContactRow>
          </div>
        </motion.div>

        <motion.form
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_DEFAULT}
          variants={fadeRight}
          onSubmit={onSubmit}
          className="grid grid-cols-1 gap-5 rounded-xl border border-white/[0.08] bg-ink-100 p-8 md:grid-cols-2 md:p-10"
          noValidate
        >
          <Field label="Name" htmlFor="f-name">
            <input
              id="f-name"
              name="name"
              type="text"
              placeholder="Your full name"
              required
              className={inputCls}
            />
          </Field>
          <Field label="Organization" htmlFor="f-org">
            <input
              id="f-org"
              name="organization"
              type="text"
              placeholder="Company / Department"
              className={inputCls}
            />
          </Field>
          <Field label="Event Type" htmlFor="f-type">
            <select id="f-type" name="eventType" required className={inputCls} defaultValue="">
              <option value="" disabled>
                Select event type
              </option>
              <option>Government</option>
              <option>Corporate</option>
              <option>Festival</option>
              <option>Inauguration</option>
              <option>Other</option>
            </select>
          </Field>
          <Field label="Expected Attendees" htmlFor="f-attendees">
            <input
              id="f-attendees"
              name="attendees"
              type="number"
              min={1}
              placeholder="e.g. 5000"
              className={inputCls}
            />
          </Field>
          <Field label="Message" htmlFor="f-msg" full>
            <textarea
              id="f-msg"
              name="message"
              rows={5}
              placeholder="Tell us about your event — dates, location, scope..."
              className={`${inputCls} resize-y min-h-[130px]`}
            />
          </Field>

          <button
            type="submit"
            disabled={status !== "idle"}
            className="col-span-full rounded-md bg-saffron px-6 py-4 text-[0.85rem] font-bold uppercase tracking-[0.1em] text-ink transition ease-luxury hover:-translate-y-0.5 hover:bg-saffron-soft hover:shadow-glow-soft disabled:opacity-80 disabled:translate-y-0"
          >
            {status === "submitting"
              ? "Sending…"
              : status === "success"
                ? "Thank you — we'll be in touch"
                : "Send Enquiry"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}

const inputCls =
  "w-full rounded-md border border-white/[0.08] bg-ink px-4 py-3.5 text-[0.95rem] text-bone placeholder:text-dim transition duration-200 ease-luxury focus:border-saffron focus:bg-saffron/[0.04] focus:outline-none";

function Field({
  label,
  htmlFor,
  children,
  full,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <div className={`flex flex-col gap-2 ${full ? "md:col-span-2" : ""}`}>
      <label
        htmlFor={htmlFor}
        className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-dim"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        aria-hidden="true"
        className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-saffron/10 text-lg text-saffron"
      >
        {icon}
      </span>
      <div>
        <span className="block text-[0.7rem] uppercase tracking-[0.2em] text-dim">
          {label}
        </span>
        <div className="text-[0.98rem] text-bone transition-colors hover:text-saffron [&_a]:transition-colors [&_a:hover]:text-saffron">
          {children}
        </div>
      </div>
    </div>
  );
}
