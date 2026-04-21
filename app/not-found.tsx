import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[100svh] items-center justify-center px-5 text-center">
      <div>
        <span className="section-label">404</span>
        <h1 className="section-headline mt-3">
          Page <span className="text-brand">Not Found.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          We build the biggest events in India. But this page? It doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-saffron px-6 py-3 font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-saffron-soft"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
