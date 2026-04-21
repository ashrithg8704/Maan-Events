"use client";

import { motion, type Variants } from "framer-motion";
import { VIEWPORT_DEFAULT, fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variants?: Variants;
  as?: keyof JSX.IntrinsicElements;
  viewportAmount?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  variants = fadeUp,
  viewportAmount,
}: RevealProps) {
  return (
    <motion.div
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        ...VIEWPORT_DEFAULT,
        ...(viewportAmount !== undefined ? { amount: viewportAmount } : {}),
      }}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
