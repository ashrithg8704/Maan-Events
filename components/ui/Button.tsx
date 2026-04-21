import Link from "next/link";
import { forwardRef } from "react";

import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "outline";
type Size = "md" | "lg";

type BaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type ButtonAsLink = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const base =
  "relative inline-flex items-center justify-center gap-2 font-semibold tracking-wide rounded-md transition duration-200 ease-luxury focus-visible:ring-2 focus-visible:ring-saffron focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:opacity-50 disabled:cursor-not-allowed";

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-saffron text-ink hover:bg-saffron-soft hover:-translate-y-0.5 hover:shadow-glow",
  ghost:
    "bg-transparent text-bone border border-white/30 hover:border-saffron hover:text-saffron hover:-translate-y-0.5",
  outline:
    "bg-transparent text-saffron border border-saffron hover:bg-saffron hover:text-ink hover:-translate-y-0.5",
};

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, children, ...rest }, ref) => {
    const cls = cn(base, sizes[size], variants[variant], className);

    if ("href" in rest && rest.href) {
      const { href, ...anchorProps } = rest as ButtonAsLink;
      const isExternal = href.startsWith("http");
      if (isExternal) {
        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cls}
            {...anchorProps}
          >
            {children}
          </a>
        );
      }
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={cls}
          {...anchorProps}
        >
          {children}
        </Link>
      );
    }

    const { ...buttonProps } = rest as ButtonAsButton;
    return (
      <button ref={ref as React.Ref<HTMLButtonElement>} className={cls} {...buttonProps}>
        {children}
      </button>
    );
  },
);
Button.displayName = "Button";

export default Button;
