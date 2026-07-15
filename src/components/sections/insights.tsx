import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionTitle } from "@/components/shared/section-title";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { insights } from "@/lib/data";

export function Insights() {
  return (
    <section id="actualites" className="scroll-mt-24 bg-background py-24 sm:py-32">
      <Container>
        <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionTitle
            eyebrow="Actualités"
            title={
              <>
                Notre regard sur{" "}
                <span className="italic text-gold-600">le droit des affaires</span>
              </>
            }
          />
          <Link
            href="/actualites"
            className="group inline-flex items-center gap-2 text-sm font-medium text-navy-900 transition-colors hover:text-gold-700 lg:pb-2"
          >
            Toutes nos actualités
            <ArrowRight className="size-4 transition-transform duration-500 ease-out-expo group-hover:translate-x-1" />
          </Link>
        </div>

        <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {insights.map((post) => (
            <RevealItem key={post.slug}>
              <Link
                href={`/actualites/${post.slug}`}
                className="group flex h-full flex-col border border-navy-900/10 bg-card p-8 transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-gold-400/50 hover:shadow-elegant"
              >
                <div className="flex items-center justify-between text-[0.7rem] uppercase tracking-widest text-gold-700">
                  <span>{post.category}</span>
                  <span className="text-muted-foreground">{post.dateLabel}</span>
                </div>
                <h3 className="mt-5 font-serif text-xl leading-snug text-navy-900">
                  {post.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-navy-900 transition-colors group-hover:text-gold-700">
                  Lire la note
                  <ArrowUpRight className="size-4 transition-transform duration-500 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
