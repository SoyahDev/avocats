import { Container } from "@/components/shared/container";
import { SectionTitle } from "@/components/shared/section-title";
import { RevealGroup } from "@/components/shared/reveal";
import { AttorneyCard } from "@/components/shared/attorney-card";
import { attorneys } from "@/lib/data";

export function Attorneys() {
  return (
    <section id="associes" className="scroll-mt-24 bg-background py-24 sm:py-32">
      <Container>
        <SectionTitle
          align="center"
          eyebrow="Les Associés"
          title={
            <>
              Des praticiens d&apos;exception,
              <br className="hidden sm:block" /> un engagement{" "}
              <span className="italic text-gold-600">commun</span>
            </>
          }
          description="Une équipe resserrée d'avocats reconnus dans leurs domaines, réunis par une même culture de l'excellence et du service."
          className="mx-auto mb-16 max-w-2xl"
        />

        <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {attorneys.map((attorney) => (
            <AttorneyCard key={attorney.id} attorney={attorney} />
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
