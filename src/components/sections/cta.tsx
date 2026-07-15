import Image from "next/image";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { AnimatedButton } from "@/components/shared/animated-button";
import { site } from "@/lib/site";

export function Cta() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 text-cream sm:py-28">
      <Image
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=80"
        alt=""
        fill
        aria-hidden
        sizes="100vw"
        className="object-cover object-center opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/60" />

      <Container className="relative">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          <Reveal className="max-w-2xl">
            <span className="eyebrow text-gold-300">Premier rendez-vous</span>
            <h2 className="mt-5 font-serif text-4xl leading-[1.08] tracking-tight text-cream sm:text-5xl lg:text-6xl">
              Prenons le temps d&apos;étudier{" "}
              <span className="italic text-gold-300">votre situation.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/70">
              Un entretien confidentiel, sans engagement, pour comprendre vos
              enjeux et vous indiquer la voie la plus juste.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="flex shrink-0 flex-col gap-4 sm:flex-row lg:flex-col">
            <AnimatedButton href="#contact" variant="gold" size="lg">
              Prendre rendez-vous
            </AnimatedButton>
            <AnimatedButton
              href={`tel:${site.contact.phoneHref}`}
              variant="light"
              size="lg"
              showArrow={false}
            >
              {site.contact.phone}
            </AnimatedButton>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
