import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { PageShell, Prose } from "@/components/layout/page-shell";
import { AnimatedButton } from "@/components/shared/animated-button";
import { insights } from "@/lib/data";

export function generateStaticParams() {
  return insights.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = insights.find((p) => p.slug === slug);
  if (!post) return { title: "Article introuvable" };
  return { title: post.title, description: post.excerpt };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = insights.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <PageShell
      eyebrow={`${post.category} · ${post.dateLabel}`}
      title={post.title}
      description={post.excerpt}
    >
      <Prose>
        <p className="rounded-sm border border-gold-400/40 bg-gold-400/5 p-4 text-xs text-navy-800">
          ⚠️ Article d&apos;exemple — le contenu ci-dessous est un texte de
          remplacement destiné à la démonstration. À remplacer par une vraie
          note juridique (voir SKIPPED-TASKS.md §8).
        </p>

        <p>
          Cette note propose une lecture synthétique des évolutions récentes et
          de leurs conséquences pratiques pour les dirigeants et leurs conseils.
          Elle n&apos;a qu&apos;une vocation d&apos;information générale et ne
          constitue pas un conseil juridique.
        </p>

        <h2>Contexte</h2>
        <p>
          Le cadre applicable connaît des ajustements réguliers qu&apos;il
          convient d&apos;anticiper. Nous en présentons ici les points saillants
          ainsi que les réflexes à adopter.
        </p>

        <h2>Points de vigilance</h2>
        <ul>
          <li>Identifier les opérations et clauses concernées.</li>
          <li>Adapter la documentation contractuelle en conséquence.</li>
          <li>Sécuriser la traçabilité des décisions.</li>
        </ul>

        <h2>Ce que nous recommandons</h2>
        <p>
          Un diagnostic ciblé permet de mesurer l&apos;exposition et de
          prioriser les actions. Nos équipes se tiennent à votre disposition
          pour un échange confidentiel.
        </p>
      </Prose>

      <div className="mt-12 flex flex-wrap items-center justify-between gap-6">
        <Link
          href="/actualites"
          className="group inline-flex items-center gap-2 text-sm font-medium text-navy-900 transition-colors hover:text-gold-700"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
          Toutes les actualités
        </Link>
        <AnimatedButton href="/#contact" variant="gold">
          Prendre rendez-vous
        </AnimatedButton>
      </div>
    </PageShell>
  );
}
