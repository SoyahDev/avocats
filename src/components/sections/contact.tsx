import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionTitle } from "@/components/shared/section-title";
import { Reveal } from "@/components/shared/reveal";
import { ContactForm } from "@/components/shared/contact-form";
import { ConsentMap } from "@/components/shared/consent-map";
import { site } from "@/lib/site";

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  `${site.contact.address.full}`,
)}&output=embed`;

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-background py-24 sm:py-32">
      <Container>
        <SectionTitle
          align="center"
          eyebrow="Contact"
          title={
            <>
              Engageons la <span className="italic text-gold-600">conversation</span>
            </>
          }
          description="Chaque grande décision commence par un échange. Confiez-nous votre situation en toute confidentialité."
          className="mx-auto mb-16 max-w-2xl"
        />

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          {/* Info + map */}
          <Reveal className="flex flex-col gap-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <ContactDetail icon={<MapPin className="size-5" />} label="Adresse">
                {site.contact.address.street}
                <br />
                {site.contact.address.postalCode} {site.contact.address.city}
              </ContactDetail>

              <ContactDetail icon={<Clock className="size-5" />} label="Horaires">
                {site.contact.hours.map((h) => (
                  <span key={h.day} className="block">
                    {h.day} · {h.value}
                  </span>
                ))}
              </ContactDetail>

              <ContactDetail icon={<Phone className="size-5" />} label="Téléphone">
                <a
                  href={`tel:${site.contact.phoneHref}`}
                  className="link-underline transition-colors hover:text-gold-600"
                >
                  {site.contact.phone}
                </a>
              </ContactDetail>

              <ContactDetail icon={<Mail className="size-5" />} label="E-mail">
                <a
                  href={`mailto:${site.contact.email}`}
                  className="link-underline break-all transition-colors hover:text-gold-600"
                >
                  {site.contact.email}
                </a>
              </ContactDetail>
            </div>

            <ConsentMap src={mapSrc} title={`Localisation — ${site.name}`} />
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1} className="border border-navy-900/10 bg-card p-8 shadow-soft sm:p-10">
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function ContactDetail({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <span className="flex size-11 items-center justify-center rounded-full border border-navy-900/10 bg-secondary/50 text-gold-600">
        {icon}
      </span>
      <div>
        <p className="mb-1 text-[0.7rem] uppercase tracking-widest text-muted-foreground">
          {label}
        </p>
        <div className="text-[0.95rem] leading-relaxed text-navy-800">
          {children}
        </div>
      </div>
    </div>
  );
}
