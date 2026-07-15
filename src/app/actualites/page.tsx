import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { insights } from "@/lib/data";

export const metadata: Metadata = {
  title: "Actualités",
  description:
    "Notes juridiques et analyses du cabinet en droit des affaires.",
};

export default function ActualitesPage() {
  return (
    <PageShell
      width="wide"
      eyebrow="Actualités"
      title="Notes & analyses"
      description="Notre lecture des évolutions du droit des affaires, à destination des dirigeants et de leurs équipes."
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {insights.map((post) => (
          <Link
            key={post.slug}
            href={`/actualites/${post.slug}`}
            className="group flex h-full flex-col border border-navy-900/10 bg-card p-8 transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-gold-400/50 hover:shadow-elegant"
          >
            <div className="flex items-center justify-between text-[0.7rem] uppercase tracking-widest text-gold-700">
              <span>{post.category}</span>
              <span className="text-muted-foreground">{post.dateLabel}</span>
            </div>
            <h2 className="mt-5 font-serif text-xl leading-snug text-navy-900">
              {post.title}
            </h2>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">
              {post.excerpt}
            </p>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-navy-900 transition-colors group-hover:text-gold-700">
              Lire la note
              <ArrowUpRight className="size-4 transition-transform duration-500 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
