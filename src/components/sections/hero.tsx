"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { AnimatedButton } from "@/components/shared/animated-button";
import { Container } from "@/components/shared/container";
import { site } from "@/lib/site";

// Two logical lines, a single italic accent — restrained, not theatrical.
const headline = [
  { text: "L'exigence du droit,", accent: false },
  { text: "l'élégance du conseil.", accent: true },
];

// Discreet trust markers that give the left column substance and credibility.
const markers = [
  { label: "Barreau de Paris", value: "Depuis 2007" },
  { label: "Dossiers portés", value: "Par un associé" },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "26%"]);
  const cardY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy-950"
    >
      {/* Faint architectural backdrop — texture without clutter */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=2400&q=85"
          alt=""
          aria-hidden
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-[0.18]"
        />
      </motion.div>

      {/* Gradient veils keep the left column clean and legible */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/95 to-navy-950/70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/60" />
      {/* Subtle radial warmth from the upper-right */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_85%_0%,rgba(201,169,106,0.10),transparent_60%)]" />

      <Container className="relative z-10 py-28 lg:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
          {/* ── Left: content ── */}
          <motion.div style={{ y: contentY }} className="lg:col-span-7">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mb-7 inline-flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-widest2 text-gold-300"
            >
              <span className="h-px w-10 bg-gold-400/70" />
              Cabinet d&apos;avocats d&apos;affaires · Paris
            </motion.span>

            <h1 className="font-serif text-[2.65rem] font-normal leading-[1.07] tracking-[-0.015em] text-cream sm:text-5xl lg:text-6xl lg:leading-[1.05]">
              {headline.map((line, i) => (
                <span key={line.text} className="block overflow-hidden">
                  <motion.span
                    initial={{ y: "108%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.95,
                      delay: 0.45 + i * 0.12,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="block"
                  >
                    {line.accent ? (
                      <span className="italic text-gold-300">{line.text}</span>
                    ) : (
                      line.text
                    )}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-7 max-w-xl text-[1.0625rem] leading-[1.7] text-cream/80 sm:text-lg"
            >
              Un cabinet d&apos;affaires à taille humaine, dédié aux dirigeants et
              aux entreprises qui attendent de leur conseil rigueur, discrétion
              et vision stratégique.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.12, ease: [0.16, 1, 0.3, 1] }}
              className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center"
            >
              <AnimatedButton href="#contact" variant="gold" size="lg">
                Prendre rendez-vous
              </AnimatedButton>
              <AnimatedButton
                href="#expertises"
                variant="light"
                size="lg"
                showArrow={false}
              >
                Nos expertises
              </AnimatedButton>
            </motion.div>

            {/* Trust markers */}
            <motion.dl
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.28, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 flex flex-wrap gap-x-10 gap-y-6 border-t border-cream/10 pt-8"
            >
              {markers.map((m) => (
                <div key={m.label} className="flex flex-col gap-1">
                  <dt className="text-[0.68rem] font-medium uppercase tracking-widest2 text-cream/65">
                    {m.label}
                  </dt>
                  <dd className="font-serif text-lg text-cream/90">{m.value}</dd>
                </div>
              ))}
            </motion.dl>
          </motion.div>

          {/* ── Right: framed visual ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:col-span-5 lg:block"
          >
            <motion.div style={{ y: cardY }} className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-lift ring-1 ring-gold-400/25">
                <Image
                  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=85"
                  alt="Les bureaux du cabinet à Paris"
                  fill
                  priority
                  sizes="(max-width: 1024px) 0px, 40vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-navy-950/10" />
                <div className="absolute inset-0 rounded-sm ring-1 ring-inset ring-cream/10" />
              </div>

              {/* Floating credential card */}
              <div className="glass-dark absolute -bottom-6 -left-6 max-w-[15rem] rounded-sm border border-cream/10 p-5 shadow-elegant">
                <p className="flex items-center gap-2.5 text-[0.68rem] font-medium uppercase tracking-widest2 text-gold-300">
                  <span className="h-px w-6 bg-gold-400/70" />
                  Notre maison
                </p>
                <p className="mt-2.5 font-serif text-lg leading-snug text-cream">
                  {site.contact.address.street}
                </p>
                <p className="text-sm text-cream/60">
                  {site.contact.address.postalCode} {site.contact.address.city}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll cue */}
      <motion.a
        href="#expertises"
        aria-label="Faire défiler"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/50 md:flex"
      >
        <span className="text-[0.65rem] uppercase tracking-widest2">Défiler</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="size-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
