import Link from "next/link";
import { Linkedin, Instagram, ArrowUp } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Logo } from "@/components/shared/logo";
import { navLinks, site } from "@/lib/site";
import { practiceAreas } from "@/lib/data";

const legalLinks = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-confidentialite" },
  { label: "Cookies", href: "/cookies" },
];

export function Footer() {
  const year = 2026;

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-cream/70">
      <div className="pointer-events-none absolute inset-0 bg-grain bg-repeat opacity-[0.03]" />

      <Container className="relative">
        {/* Top */}
        <div className="grid grid-cols-2 gap-10 border-b border-cream/10 py-16 md:grid-cols-4 lg:py-20">
          <div className="col-span-2 flex flex-col gap-6 md:col-span-1">
            <Logo className="text-cream" />
            <p className="max-w-xs text-sm leading-relaxed text-cream/60">
              {site.tagline} à Paris. Une exigence discrète au service de vos
              intérêts les plus stratégiques.
            </p>
            <div className="flex gap-3">
              <SocialLink href={site.social.linkedin} label="LinkedIn">
                <Linkedin className="size-4" />
              </SocialLink>
              <SocialLink href={site.social.instagram} label="Instagram">
                <Instagram className="size-4" />
              </SocialLink>
            </div>
          </div>

          <FooterColumn title="Expertises">
            {practiceAreas.slice(0, 5).map((a) => (
              <FooterLink key={a.id} href="#expertises">
                {a.title}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Navigation">
            {navLinks.map((l) => (
              <FooterLink key={l.href} href={l.href}>
                {l.label}
              </FooterLink>
            ))}
            <FooterLink href="/actualites">Actualités</FooterLink>
          </FooterColumn>

          <FooterColumn title="Contact">
            <FooterLink href={`tel:${site.contact.phoneHref}`}>
              {site.contact.phone}
            </FooterLink>
            <FooterLink href={`mailto:${site.contact.email}`}>
              {site.contact.email}
            </FooterLink>
            <span className="text-sm text-cream/60">
              {site.contact.address.street}
              <br />
              {site.contact.address.postalCode} {site.contact.address.city}
            </span>
          </FooterColumn>
        </div>

        {/* Barreau / structure — mention obligatoire (RIN art. 10.4) */}
        <p className="border-b border-cream/10 py-6 text-xs text-cream/60">
          {site.legal.structure} · Avocats au {site.legal.barreau}.
        </p>

        {/* Bottom */}
        <div className="flex flex-col items-start justify-between gap-6 py-8 text-xs text-cream/60 md:flex-row md:items-center">
          <p>
            © {year} {site.legalName}. Tous droits réservés.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="link-underline transition-colors hover:text-gold-300"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="#top"
            className="group flex items-center gap-2 transition-colors hover:text-gold-300"
          >
            Haut de page
            <span className="grid size-8 place-items-center rounded-full border border-cream/20 transition-all group-hover:border-gold-300 group-hover:-translate-y-0.5">
              <ArrowUp className="size-3.5" />
            </span>
          </a>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-[0.7rem] font-medium uppercase tracking-widest2 text-gold-300">
        {title}
      </h3>
      <div className="flex flex-col gap-2.5">{children}</div>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="w-fit text-sm text-cream/60 transition-colors duration-300 hover:text-cream"
    >
      {children}
    </a>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid size-10 place-items-center rounded-full border border-cream/15 text-cream/70 transition-all duration-300 hover:border-gold-400 hover:bg-gold-400 hover:text-navy-950"
    >
      {children}
    </a>
  );
}
