import { Container } from "@/components/shared/container";
import { Statistic } from "@/components/shared/statistic";
import { Reveal } from "@/components/shared/reveal";
import { MouseGlow } from "@/components/shared/mouse-glow";
import { stats } from "@/lib/data";

export function Statistics() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 text-cream sm:py-32">
      <MouseGlow />
      <div className="pointer-events-none absolute inset-0 bg-grain bg-repeat opacity-[0.04]" />

      <Container className="relative">
        <Reveal className="mb-16 max-w-2xl">
          <span className="eyebrow text-gold-300">En quelques chiffres</span>
          <h2 className="mt-5 font-serif text-4xl leading-[1.1] tracking-tight text-cream sm:text-5xl">
            Une trajectoire mesurée à l&apos;aune de{" "}
            <span className="italic text-gold-300">la confiance</span> accordée.
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Statistic key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
