"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Soft radial glow that follows the pointer within its container.
 * Used behind dark sections for a subtle, expensive sense of depth.
 */
export function MouseGlow({
  className,
  color = "rgba(201, 169, 106, 0.18)",
  size = 520,
}: {
  className?: string;
  color?: string;
  size?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 120, damping: 30 });
  const y = useSpring(my, { stiffness: 120, damping: 30 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(e.clientX - rect.left - size / 2);
    my.set(e.clientY - rect.top - size / 2);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={cn("pointer-events-auto absolute inset-0 overflow-hidden", className)}
      aria-hidden
    >
      <motion.div
        style={{
          x,
          y,
          width: size,
          height: size,
          background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        }}
        className="absolute left-0 top-0 rounded-full blur-2xl"
      />
    </div>
  );
}
