import type { Metadata } from "next";
import Link from "next/link";
import { PageShell, Prose } from "@/components/layout/page-shell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique cookies",
  description: `Gestion des cookies et traceurs sur le site du cabinet ${site.name}.`,
  robots: { index: true, follow: true },
};

export default function Cookies() {
  return (
    <PageShell
      eyebrow="Cookies & traceurs"
      title="Politique cookies"
      description="Le site n'utilise pas de traceurs publicitaires. Seuls certains contenus tiers peuvent déposer des cookies, avec votre accord."
    >
      <Prose>
        <p className="text-xs uppercase tracking-widest text-gold-700">
          Dernière mise à jour : {site.legal.updatedAt}
        </p>

        <h2>Qu&apos;est-ce qu&apos;un cookie ?</h2>
        <p>
          Un cookie est un petit fichier déposé sur votre terminal lors de la
          visite d&apos;un site. Ce site ne dépose <strong>aucun cookie de
          mesure d&apos;audience ou de publicité</strong>.
        </p>

        <h2>Cookies tiers soumis à consentement</h2>
        <p>
          La carte de localisation de notre page contact est fournie par{" "}
          <strong>Google Maps</strong>. Ce service est susceptible de déposer des
          cookies. Pour cette raison, la carte ne se charge{" "}
          <strong>qu&apos;après votre consentement</strong> : tant que vous
          n&apos;avez pas accepté, aucun cookie tiers n&apos;est déposé.
        </p>

        <h2>Gérer votre choix</h2>
        <p>
          Vous pouvez accepter ou refuser via le bandeau affiché lors de votre
          première visite. Vous pouvez à tout moment modifier votre choix en
          effaçant les cookies de votre navigateur, ce qui réaffichera le
          bandeau.
        </p>

        <h2>En savoir plus</h2>
        <p>
          Le traitement de vos données personnelles est décrit dans notre{" "}
          <Link href="/politique-confidentialite">
            politique de confidentialité
          </Link>
          .
        </p>
      </Prose>
    </PageShell>
  );
}
