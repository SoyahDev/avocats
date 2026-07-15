import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { AnimatedButton } from "@/components/shared/animated-button";
import { practiceAreas, attorneys } from "@/lib/data";

export function generateStaticParams() {
  return practiceAreas.map((a) => ({ id: a.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const area = practiceAreas.find((a) => a.id === id);
  if (!area) return { title: "Expertise introuvable" };
  return {
    title: area.title,
    description: area.description,
  };
}

export default async function ExpertisePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const area = practiceAreas.find((a) => a.id === id);
  if (!area) notFound();

  const Icon = area.icon;
  const referent = attorneys.find((a) => a.id === area.referentId);
  const others = practiceAreas.filter((a) => a.id !== area.id);

  return (
    <PageShell
      width="wide"
      eyebrow="Expertise"
      title={area.title}
      description={area.intro ?? area.description}
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
        {/* Main */}
        <div className="lg:col-span-2">
          <div className="mb-8 grid size-14 place-items-center rounded-full border border-navy-900/10 bg-secondary/60 text-navy-800">
            <Icon className="size-6" strokeWidth={1.4} />
          </div>

          <h2 className="font-serif text-2xl text-navy-900">
            Nos interventions
          </h2>
          <ul className="mt-6 space-y-4">
            {(area.services ?? area.points).map((s) => (
              <li key={s} className="flex items-start gap-3">
                <Check className="mt-0.5 size-5 shrink-0 text-gold-600" />
                <span className="leading-relaxed text-navy-800">{s}</span>
              </li>
            ))}
          </ul>

          <p className="mt-8 rounded-sm border border-navy-900/10 bg-card p-5 text-sm leading-relaxed text-muted-foreground">
            Cette page présente nos domaines d&apos;intervention. Pour étudier
            votre situation précise, un premier échange confidentiel est sans
            engagement.
          </p>

          <div className="mt-8">
            <AnimatedButton href="/#contact" variant="gold" size="lg">
              Prendre rendez-vous
            </AnimatedButton>
          </div>
        </div>

        {/* Aside */}
        <aside className="flex flex-col gap-8">
          {referent && (
            <div className="border border-navy-900/10 bg-card">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={referent.image}
                  alt={`Portrait de ${referent.name}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-center grayscale"
                />
              </div>
              <div className="p-6">
                <p className="text-[0.7rem] uppercase tracking-widest text-gold-700">
                  Votre interlocuteur
                </p>
                <h3 className="mt-1 font-serif text-xl text-navy-900">
                  {referent.name}
                </h3>
                <p className="text-sm text-muted-foreground">{referent.role}</p>
                <Link
                  href="/#associes"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-navy-900 transition-colors hover:text-gold-700"
                >
                  Découvrir l&apos;équipe
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          )}

          <div>
            <p className="text-[0.7rem] uppercase tracking-widest text-muted-foreground">
              Autres expertises
            </p>
            <ul className="mt-4 space-y-1">
              {others.map((o) => (
                <li key={o.id}>
                  <Link
                    href={`/expertises/${o.id}`}
                    className="group flex items-center justify-between border-b border-navy-900/10 py-3 text-navy-800 transition-colors hover:text-gold-700"
                  >
                    {o.title}
                    <ArrowRight className="size-4 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </PageShell>
  );
}
