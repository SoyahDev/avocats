import { Container } from "@/components/shared/container";
import { SectionTitle } from "@/components/shared/section-title";
import { Reveal } from "@/components/shared/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/data";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-cream py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionTitle
              eyebrow="Questions fréquentes"
              title={
                <>
                  Honoraires &<br />
                  <span className="italic text-gold-600">transparence</span>
                </>
              }
              description="Les réponses aux questions que l'on nous pose le plus souvent. Une interrogation particulière ? Écrivez-nous."
            />
          </div>

          <Reveal>
            <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={faq.question} value={`item-${i}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
