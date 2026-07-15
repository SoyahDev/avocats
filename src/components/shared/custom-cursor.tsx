"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useIsDesktopPointer } from "@/hooks/use-media-query";

/**
 * Minimal dual-ring cursor for fine-pointer devices only.
 * A small dot tracks precisely; an outer ring lags with spring physics and
 * expands over interactive elements.
 */
export function CustomCursor() {
  const isDesktop = useIsDesktopPointer();
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(true);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 350, damping: 28, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 350, damping: 28, mass: 0.6 });

  useEffect(() => {
    if (!isDesktop) return;
    document.documentElement.classList.add("cursor-none-desktop");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHidden(false);
      const target = e.target as HTMLElement;
      setHovering(
        Boolean(
          target.closest(
            "a, button, [role='button'], input, textarea, select, [data-cursor='hover']",
          ),
        ),
      );
    };
    const leave = () => setHidden(true);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      document.documentElement.classList.remove("cursor-none-desktop");
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, [isDesktop, x, y]);

  if (!isDesktop) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[9999]">
      <motion.div
        className="absolute left-0 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400"
        style={{ x, y }}
        animate={{ opacity: hidden ? 0 : 1, scale: hovering ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold-400/70"
        style={{ x: ringX, y: ringY }}
        animate={{
          opacity: hidden ? 0 : 1,
          width: hovering ? 56 : 30,
          height: hovering ? 56 : 30,
          backgroundColor: hovering
            ? "rgba(201,169,106,0.12)"
            : "rgba(201,169,106,0)",
        }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}
