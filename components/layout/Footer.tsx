import Link from "next/link";
import Logo from "./Logo";
import { SITE } from "@/lib/utils";

const QUICK_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#infrastructure", label: "Infrastructure" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

const BADGES = [
  "ISO 9001:2015 Certified",
  "Govt. Empanelled Vendor",
  "Safety & Compliance Audited",
];

export default function Footer() {
  return (
    <footer role="contentinfo" className="bg-ink-400 border-t border-white/[0.08]">
      <div className="container-page pt-24 pb-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-muted">
              {SITE.tagline}. India&apos;s premier full-infrastructure event management
              company, built in Hyderabad.
            </p>
            <div className="mt-5 flex gap-3">
              <SocialLink href="#" label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6v6.3h-4v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21H10V9z"/>
                </svg>
              </SocialLink>
              <SocialLink href="#" label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                  <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4 1 .5.4.8.9 1 1.4.2.5.4 1.1.4 2.3.1 1.2.1 1.6.1 4.7s0 3.5-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-1 1.4-.4.5-.9.8-1.4 1-.5.2-1.1.4-2.3.4-1.2.1-1.6.1-4.7.1s-3.5 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-1-.5-.4-.8-.9-1-1.4-.2-.5-.4-1.1-.4-2.3-.1-1.2-.1-1.6-.1-4.7s0-3.5.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 1-1.4.4-.5.9-.8 1.4-1 .5-.2 1.1-.4 2.3-.4C8.4 2.2 8.8 2.2 12 2.2zm0 4.9a4.9 4.9 0 1 0 0 9.8 4.9 4.9 0 0 0 0-9.8zm0 1.8a3.1 3.1 0 1 1 0 6.2 3.1 3.1 0 0 1 0-6.2zm5-3a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2z"/>
                </svg>
              </SocialLink>
              <SocialLink href="#" label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                  <path d="M23.5 6.2c-.3-1-1-1.8-2-2C19.7 3.7 12 3.7 12 3.7s-7.7 0-9.5.5c-1 .3-1.7 1-2 2C0 8 0 12 0 12s0 4 .5 5.8c.3 1 1 1.8 2 2 1.8.5 9.5.5 9.5.5s7.7 0 9.5-.5c1-.3 1.7-1 2-2 .5-1.8.5-5.8.5-5.8s0-4-.5-5.8zM9.6 15.6V8.4l6.4 3.6-6.4 3.6z"/>
                </svg>
              </SocialLink>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-muted transition-[color,padding] duration-200 ease-luxury hover:pl-1.5 hover:text-saffron"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Certified &amp; Recognized
            </h4>
            <div className="mt-5 space-y-2.5">
              {BADGES.map((b) => (
                <div
                  key={b}
                  className="flex items-center gap-2.5 rounded-md border border-white/[0.08] bg-white/[0.02] px-4 py-3 text-[0.82rem] tracking-wide text-muted"
                >
                  <span className="block h-2 w-2 rounded-full bg-saffron shadow-[0_0_0_3px_rgba(232,115,10,0.2)]" />
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/[0.08] py-5 text-center text-[0.82rem] text-dim">
        <span
          className="absolute left-1/2 top-0 h-0.5 w-36 -translate-x-1/2 bg-brand-gradient"
          aria-hidden="true"
        />
        © {new Date().getFullYear()} Maan Events. All Rights Reserved. &nbsp;|&nbsp; Designed by Henosis Digital
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] text-bone transition duration-200 ease-luxury hover:-translate-y-0.5 hover:border-saffron hover:text-saffron"
    >
      {children}
    </a>
  );
}
