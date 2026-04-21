"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { formatIN } from "@/lib/utils";

type CounterProps = {
  target: number;
  suffix?: string;
  duration?: number;
  className?: string;
};

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export function Counter({ target, suffix = "", duration = 1800, className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const step = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setVal(Math.floor(easeOutCubic(p) * target));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);

  return (
    <span ref={ref} className={className}>
      {formatIN(val)}
      {suffix}
    </span>
  );
}

export default Counter;
