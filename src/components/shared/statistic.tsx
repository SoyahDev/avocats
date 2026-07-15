"use client";

import { useEffect, useRef } from "react";
import {
  useInView,
  useMotionValue,
  useSpring,
  motion,
} from "framer-motion";
import type { Stat } from "@/types";
import { usePrefersReducedMotion } from "@/hooks/use-media-query";

/** Count-up statistic that animates once when scrolled into view. */
export function Statistic({ stat, index }: { stat: Stat; index: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = usePrefersReducedMotion();

  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    stiffness: 60,
    damping: 22,
    mass: 1,
  });

  useEffect(() => {
    if (inView) motionValue.set(stat.value);
  }, [inView, stat.value, motionValue]);

  useEffect(() => {
    if (reduced) {
      if (ref.current) {
        ref.current.textContent = `${stat.prefix ?? ""}${stat.value}${stat.suffix ?? ""}`;
      }
      return;
    }
    return spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${stat.prefix ?? ""}${Math.round(latest)}${stat.suffix ?? ""}`;
      }
    });
  }, [spring, stat, reduced]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-3"
    >
      <span className="font-serif text-5xl text-cream sm:text-6xl lg:text-7xl">
        <span ref={ref}>
          {stat.prefix ?? ""}0{stat.suffix ?? ""}
        </span>
      </span>
      <span className="h-px w-10 bg-gold-400/60" />
      <span className="text-sm uppercase tracking-widest text-cream/60">
        {stat.label}
      </span>
    </motion.div>
  );
}
