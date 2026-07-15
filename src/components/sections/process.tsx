"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/shared/container";
import { SectionTitle } from "@/components/shared/section-title";
import { processSteps } from "@/lib/data";

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 65%", "end 65%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="processus" className="scroll-mt-24 bg-background py-24 sm:py-32">
      <Container>
        <SectionTitle
          align="center"
          eyebrow="Notre approche"
          title={
            <>
              Un accompagnement en{" "}
              <span className="italic text-gold-600">cinq temps</span>
            </>
          }
          description="Une méthode éprouvée, pensée pour la clarté et la maîtrise, de la première rencontre à la résolution."
          className="mx-auto mb-20 max-w-2xl"
        />

        <div ref={ref} className="relative mx-auto max-w-3xl">
          {/* Track */}
          <div className="absolute left-[27px] top-2 h-full w-px bg-navy-900/10 md:left-1/2 md:-translate-x-1/2" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[27px] top-2 w-px origin-top bg-gold-400 md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-12">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex items-start gap-8 md:block md:gap-0"
              >
                {/* Node */}
                <div className="relative z-10 grid size-14 shrink-0 place-items-center rounded-full border border-gold-400/40 bg-background font-serif text-lg text-gold-600 md:absolute md:left-1/2 md:top-1 md:-translate-x-1/2">
                  {step.step}
                </div>

                {/* Card */}
                <div
                  className={`flex-1 md:w-1/2 ${
                    i % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:ml-auto md:pl-16"
                  }`}
                >
                  <h3 className="font-serif text-2xl text-navy-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
