"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/lib/site";

/**
 * Brief, elegant intro curtain shown once per session.
 * Skipped entirely for users who prefer reduced motion.
 */
export function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      (window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        window.sessionStorage.getItem("intro-seen"))
    ) {
      setDone(true);
      return;
    }
    const id = window.setTimeout(() => {
      setDone(true);
      window.sessionStorage.setItem("intro-seen", "1");
    }, 1900);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-navy-950"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="flex flex-col items-center gap-4"
            >
              <span className="font-serif text-3xl tracking-tight text-cream sm:text-4xl">
                {site.name}
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                className="h-px w-24 origin-left bg-gold-400"
              />
              <span className="text-[0.6rem] uppercase tracking-widest2 text-cream/50">
                {site.tagline}
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
