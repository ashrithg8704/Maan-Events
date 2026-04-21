import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Logo({
  href = "#top",
  className,
}: {
  href?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      aria-label="Maan Events home"
      className={cn("inline-flex flex-col gap-1 leading-none", className)}
    >
      <span className="font-display text-[1.35rem] font-bold tracking-[0.08em] text-bone">
        MAAN EVENTS
      </span>
      <span className="h-0.5 w-11 bg-saffron" aria-hidden="true" />
    </Link>
  );
}
