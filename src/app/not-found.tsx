import type { Metadata } from "next";
import { AnimatedButton } from "@/components/shared/animated-button";

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center bg-navy-950 px-6 text-center text-cream">
      <span className="eyebrow text-gold-300">Erreur 404</span>
      <h1 className="mt-6 font-serif text-6xl tracking-tight sm:text-8xl">
        Page introuvable
      </h1>
      <p className="mt-5 max-w-md text-cream/60">
        La page que vous recherchez n&apos;existe pas ou a été déplacée.
      </p>
      <div className="mt-10">
        <AnimatedButton href="/" variant="gold">
          Retour à l&apos;accueil
        </AnimatedButton>
      </div>
    </main>
  );
}
