import { cn } from "@/lib/utils";

type PlaceholderProps = {
  label?: string;
  className?: string;
  variant?: "default" | "alt";
  comment?: string;
};

/**
 * Styled gradient placeholder used in place of real imagery during design.
 * When real images are wired in via Sanity, the <Media /> component is used instead.
 */
export function Placeholder({
  label,
  className,
  variant = "default",
}: PlaceholderProps) {
  return (
    <div
      className={cn(
        "image-placeholder",
        variant === "alt" && "image-placeholder--alt",
        "flex items-end p-4 rounded-xl border border-white/[0.06]",
        className,
      )}
      aria-hidden={!label}
    >
      {label ? (
        <span className="relative z-10 text-[0.7rem] uppercase tracking-[0.18em] text-bone/70">
          {label}
        </span>
      ) : null}
    </div>
  );
}

export default Placeholder;
