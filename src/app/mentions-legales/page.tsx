import type { Metadata } from "next";
import Link from "next/link";
import { PageShell, Prose } from "@/components/layout/page-shell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Mentions légales du cabinet ${site.name}.`,
  robots: { index: true, follow: true },
};

export default function MentionsLegales() {
  return (
    <PageShell
      eyebrow="Informations légales"
      title="Mentions légales"
      description={`Conformément à la loi et au Règlement Intérieur National de la profession d'avocat.`}
    >
      <Prose>
        <p className="text-xs uppercase tracking-widest text-gold-700">
          Dernière mise à jour : {site.legal.updatedAt}
        </p>

        <h2>Éditeur du site</h2>
        <p>
          Le présent site est édité par <strong>{site.legalName}</strong>,{" "}
          {site.legal.structure}, inscrite au {site.legal.barreau}.
        </p>
        <ul>
          <li>Adresse : {site.contact.address.full}</li>
          <li>Téléphone : {site.contact.phone}</li>
          <li>E-mail : {site.contact.email}</li>
          <li>RCS : {site.legal.rcs}</li>
          <li>SIREN : {site.legal.siren}</li>
          <li>N° TVA intracommunautaire : {site.legal.vat}</li>
          <li>Directeur de la publication : {site.legal.publicationDirector}</li>
        </ul>

        <h2>Barreau et réglementation professionnelle</h2>
        <p>
          Les avocats du cabinet sont inscrits au {site.legal.barreau} et
          soumis aux règles de la profession, notamment au Règlement Intérieur
          National (RIN) et au Règlement Intérieur du Barreau de Paris (RIBP).
          La profession est réglementée par la loi n° 71-1130 du 31 décembre
          1971 et le décret n° 91-1197 du 27 novembre 1991.
        </p>

        <h2>Hébergement</h2>
        <p>
          Le site est hébergé par <strong>{site.legal.host.name}</strong>,{" "}
          {site.legal.host.address}.
        </p>

        <h2>Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble des contenus présents sur ce site (textes, éléments
          graphiques, logo, structure) est protégé par le droit de la propriété
          intellectuelle. Toute reproduction ou représentation, totale ou
          partielle, sans autorisation préalable, est interdite.
        </p>

        <h2>Données personnelles</h2>
        <p>
          Les traitements de données réalisés via ce site sont décrits dans
          notre{" "}
          <Link href="/politique-confidentialite">
            politique de confidentialité
          </Link>
          . L&apos;usage des cookies est détaillé dans notre{" "}
          <Link href="/cookies">politique cookies</Link>.
        </p>

        <h2>Responsabilité</h2>
        <p>
          Les informations diffusées sur ce site le sont à titre d&apos;information
          générale et ne constituent pas un conseil juridique. Elles ne sauraient
          engager la responsabilité du cabinet. Pour toute question, nous vous
          invitons à nous <Link href="/#contact">contacter</Link>.
        </p>

        <p className="mt-10 rounded-sm border border-gold-400/40 bg-gold-400/5 p-4 text-xs text-navy-800">
          ⚠️ Document à finaliser : les champs marqués « [À COMPLÉTER] »
          doivent être renseignés et le texte validé avant mise en ligne (voir
          SKIPPED-TASKS.md).
        </p>
      </Prose>
    </PageShell>
  );
}
