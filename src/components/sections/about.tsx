"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/shared/container";
import { SectionTitle } from "@/components/shared/section-title";
import { Reveal } from "@/components/shared/reveal";
import { timeline } from "@/lib/data";

export function About() {
  const imgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="cabinet" className="scroll-mt-24 bg-cream py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Image column */}
          <div className="relative">
            <div
              ref={imgRef}
              className="relative aspect-[4/5] overflow-hidden"
            >
              <motion.div style={{ y }} className="absolute inset-0 scale-110">
                <Image
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85"
                  alt="Les bureaux du cabinet"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-8 -right-4 hidden w-56 border border-navy-900/10 bg-card p-7 shadow-elegant sm:block lg:-right-10"
            >
              <p className="font-serif text-5xl text-navy-900">2007</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Année de fondation de la Maison, à Paris.
              </p>
            </motion.div>
          </div>

          {/* Text column */}
          <div>
            <SectionTitle
              eyebrow="Le Cabinet"
              title={
                <>
                  Une maison de conseil,
                  <br />
                  <span className="italic text-gold-600">pensée autrement</span>
                </>
              }
            />
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                Nous avons fondé la Maison sur une conviction simple :
                le droit des affaires se pratique à hauteur d&apos;homme. Loin des
                structures impersonnelles, nous cultivons une relation de
                proximité où chaque dossier est porté par un associé.
              </p>
              <p>
                Notre approche conjugue la rigueur des grands cabinets
                internationaux à l&apos;attention d&apos;une maison à taille humaine.
                Une exigence discrète, au service exclusif de vos intérêts.
              </p>
            </div>

            {/* Timeline */}
            <div className="mt-12 space-y-0">
              {timeline.map((item, i) => (
                <Reveal key={item.year} delay={i * 0.08}>
                  <div className="group flex gap-6 border-t border-navy-900/10 py-6 transition-colors last:border-b hover:border-gold-400/40">
                    <span className="w-14 shrink-0 pt-0.5 font-serif text-xl text-gold-600">
                      {item.year}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl text-navy-900">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-[0.95rem] leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
