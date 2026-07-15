import { Container } from "@/components/shared/container";
import { SectionTitle } from "@/components/shared/section-title";
import { RevealGroup } from "@/components/shared/reveal";
import { PracticeCard } from "@/components/shared/practice-card";
import { practiceAreas } from "@/lib/data";

export function PracticeAreas() {
  return (
    <section id="expertises" className="relative scroll-mt-24 bg-background py-24 sm:py-32">
      <Container>
        <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionTitle
            eyebrow="Nos expertises"
            title={
              <>
                Un savoir-faire complet
                <br />
                au service de vos <span className="italic text-gold-600">enjeux</span>
              </>
            }
          />
          <p className="max-w-sm text-lg leading-relaxed text-muted-foreground lg:pb-2">
            Six domaines d&apos;intervention, une même exigence : comprendre
            votre situation en profondeur pour défendre vos intérêts avec
            justesse.
          </p>
        </div>

        <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((area, i) => {
            const Icon = area.icon;
            return (
              <PracticeCard
                key={area.id}
                id={area.id}
                title={area.title}
                description={area.description}
                points={area.points}
                index={i}
                icon={<Icon className="size-6" strokeWidth={1.4} />}
              />
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
