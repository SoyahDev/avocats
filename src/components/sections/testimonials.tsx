"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Container } from "@/components/shared/container";
import { MouseGlow } from "@/components/shared/mouse-glow";
import { testimonials } from "@/lib/data";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 7000;

export function Testimonials() {
  const [[index, dir], setState] = useState<[number, number]>([0, 0]);
  const [paused, setPaused] = useState(false);

  const paginate = useCallback((step: number) => {
    setState(([current]) => [
      (current + step + testimonials.length) % testimonials.length,
      step,
    ]);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => paginate(1), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paginate, paused]);

  const active = testimonials[index]!;

  return (
    <section
      className="relative overflow-hidden bg-emerald-deep py-24 text-cream sm:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carrousel"
      aria-label="Témoignages clients"
    >
      <MouseGlow color="rgba(201, 169, 106, 0.14)" />

      <Container className="relative">
        <div className="mb-14 flex items-end justify-between gap-6">
          <div>
            <span className="eyebrow text-gold-300">Témoignages</span>
            <h2 className="mt-5 max-w-xl font-serif text-4xl leading-tight tracking-tight text-cream sm:text-5xl">
              La parole à ceux qui nous font confiance
            </h2>
          </div>
          <Quote className="hidden size-20 shrink-0 text-gold-400/25 md:block" />
        </div>

        <div className="relative min-h-[280px]">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.blockquote
              key={active.id}
              custom={dir}
              initial={{ opacity: 0, x: dir >= 0 ? 60 : -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir >= 0 ? -60 : 60 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl"
            >
              <p className="font-serif text-2xl leading-[1.4] text-cream/95 sm:text-3xl lg:text-4xl">
                &ldquo;{active.quote}&rdquo;
              </p>
              <footer className="mt-10 flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded-full border border-gold-400/40 font-serif text-lg text-gold-300">
                  {active.author.charAt(0)}
                </span>
                <div>
                  <p className="font-medium text-cream">{active.author}</p>
                  <p className="text-sm text-cream/60">
                    {active.role} · {active.company}
                  </p>
                </div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-12 flex items-center justify-between border-t border-cream/10 pt-8">
          <div className="flex gap-2.5" role="tablist" aria-label="Sélectionner un témoignage">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={i === index}
                aria-label={`Témoignage ${i + 1}`}
                onClick={() => setState([i, i > index ? 1 : -1])}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-500",
                  i === index
                    ? "w-10 bg-gold-400"
                    : "w-4 bg-cream/25 hover:bg-cream/50",
                )}
              />
            ))}
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => paginate(-1)}
              aria-label="Témoignage précédent"
              className="grid size-11 place-items-center rounded-full border border-cream/20 text-cream transition-colors hover:border-gold-400 hover:bg-gold-400 hover:text-navy-950"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => paginate(1)}
              aria-label="Témoignage suivant"
              className="grid size-11 place-items-center rounded-full border border-cream/20 text-cream transition-colors hover:border-gold-400 hover:bg-gold-400 hover:text-navy-950"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
