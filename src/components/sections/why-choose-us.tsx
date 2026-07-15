import { Container } from "@/components/shared/container";
import { SectionTitle } from "@/components/shared/section-title";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { values } from "@/lib/data";

export function WhyChooseUs() {
  return (
    <section id="approche" className="scroll-mt-24 bg-cream py-24 sm:py-32">
      <Container>
        <div className="mb-16 max-w-2xl">
          <SectionTitle
            eyebrow="Pourquoi nous choisir"
            title={
              <>
                Ce qui fait la{" "}
                <span className="italic text-gold-600">différence</span>
              </>
            }
            description="Au-delà de la technique juridique, une manière d'exercer fondée sur la confiance, la clarté et la constance."
          />
        </div>

        <RevealGroup className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <RevealItem key={value.title}>
                <div className="group flex flex-col gap-4 border-t border-navy-900/15 pt-6 transition-colors duration-500 hover:border-gold-400">
                  <div className="flex items-center gap-4">
                    <Icon
                      className="size-6 text-gold-600 transition-transform duration-500 ease-out-expo group-hover:-translate-y-0.5"
                      strokeWidth={1.4}
                    />
                    <h3 className="font-serif text-2xl text-navy-900">
                      {value.title}
                    </h3>
                  </div>
                  <p className="leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
