import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Infrastructure from "@/components/sections/Infrastructure";
import Portfolio from "@/components/sections/Portfolio";
import Clients from "@/components/sections/Clients";
import Why from "@/components/sections/Why";
import Contact from "@/components/sections/Contact";

import { safeFetch } from "@/sanity/client";
import {
  heroQuery,
  servicesQuery,
  infrastructureQuery,
  projectsQuery,
  testimonialsQuery,
  clientsQuery,
} from "@/sanity/queries";
import {
  heroFallback,
  servicesFallback,
  infrastructureFallback,
  projectsFallback,
  testimonialsFallback,
  clientsFallback,
} from "@/lib/content";
import type {
  HeroContent,
  ServiceItem,
  InfrastructureItem,
  ProjectItem,
  Testimonial,
  ClientLogo,
} from "@/types";

export const revalidate = 60;

export default async function HomePage() {
  // Fetch in parallel, with rich fallbacks so the page renders fully
  // without Sanity being configured.
  const [hero, services, infrastructure, projects, testimonials, clients] =
    await Promise.all([
      safeFetch<HeroContent>(heroQuery, {}, heroFallback),
      safeFetch<ServiceItem[]>(servicesQuery, {}, servicesFallback),
      safeFetch<InfrastructureItem[]>(
        infrastructureQuery,
        {},
        infrastructureFallback,
      ),
      safeFetch<ProjectItem[]>(projectsQuery, {}, projectsFallback),
      safeFetch<Testimonial[]>(testimonialsQuery, {}, testimonialsFallback),
      safeFetch<ClientLogo[]>(clientsQuery, {}, clientsFallback),
    ]);

  // Merge: if Sanity returns empty arrays (no content yet), use fallback
  const s = services?.length ? services : servicesFallback;
  const infra = infrastructure?.length ? infrastructure : infrastructureFallback;
  const proj = projects?.length ? projects : projectsFallback;
  const test = testimonials?.length ? testimonials : testimonialsFallback;
  const cli = clients?.length ? clients : clientsFallback;

  return (
    <>
      <Nav />
      <main id="top">
        <Hero content={hero ?? heroFallback} />
        <About />
        <Services items={s} />
        <Infrastructure items={infra} />
        <Portfolio items={proj} />
        <Clients clients={cli as ClientLogo[]} testimonials={test} />
        <Why />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
