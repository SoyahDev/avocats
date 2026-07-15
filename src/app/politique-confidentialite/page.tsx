import type { Metadata } from "next";
import Link from "next/link";
import { PageShell, Prose } from "@/components/layout/page-shell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: `Politique de protection des données personnelles du cabinet ${site.name}.`,
  robots: { index: true, follow: true },
};

export default function PolitiqueConfidentialite() {
  return (
    <PageShell
      eyebrow="Protection des données"
      title="Politique de confidentialité"
      description="Comment nous collectons, utilisons et protégeons vos données personnelles, conformément au RGPD."
    >
      <Prose>
        <p className="text-xs uppercase tracking-widest text-gold-700">
          Dernière mise à jour : {site.legal.updatedAt}
        </p>

        <h2>Responsable du traitement</h2>
        <p>
          Le responsable du traitement est <strong>{site.legalName}</strong>,{" "}
          {site.contact.address.full}. Pour toute question relative à vos
          données, vous pouvez écrire à{" "}
          <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>.
        </p>

        <h2>Données collectées</h2>
        <p>
          Nous collectons uniquement les données que vous nous transmettez via
          le formulaire de contact : nom, adresse e-mail, numéro de téléphone
          (facultatif), objet et contenu de votre message.
        </p>

        <h2>Finalités et base légale</h2>
        <ul>
          <li>
            Répondre à votre demande et, le cas échéant, établir une relation
            client — base légale : votre consentement et/ou l&apos;exécution de
            mesures précontractuelles.
          </li>
          <li>
            Respecter nos obligations professionnelles et légales — base légale :
            obligation légale.
          </li>
        </ul>

        <h2>Durée de conservation</h2>
        <p>
          Les données de contact sont conservées le temps nécessaire au
          traitement de votre demande, puis archivées ou supprimées conformément
          à nos obligations légales et déontologiques.
        </p>

        <h2>Destinataires</h2>
        <p>
          Vos données sont destinées aux seuls avocats et personnels habilités du
          cabinet. Elles ne sont ni vendues ni cédées à des tiers à des fins
          commerciales. Elles sont couvertes par le secret professionnel.
        </p>

        <h2>Vos droits</h2>
        <p>
          Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de
          rectification, d&apos;effacement, de limitation, d&apos;opposition et de
          portabilité. Vous pouvez les exercer en écrivant à{" "}
          <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>. Vous
          pouvez également introduire une réclamation auprès de la CNIL
          (www.cnil.fr).
        </p>

        <h2>Cookies</h2>
        <p>
          L&apos;utilisation des cookies et traceurs est détaillée dans notre{" "}
          <Link href="/cookies">politique cookies</Link>.
        </p>

        <p className="mt-10 rounded-sm border border-gold-400/40 bg-gold-400/5 p-4 text-xs text-navy-800">
          ⚠️ Modèle à faire valider par un avocat / référent RGPD avant mise en
          ligne (voir SKIPPED-TASKS.md).
        </p>
      </Prose>
    </PageShell>
  );
}
