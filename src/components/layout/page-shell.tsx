import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/shared/container";
import { cn } from "@/lib/utils";

/** Consistent long-form typography for legal / editorial routed pages. */
export function Prose({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "max-w-none text-[0.975rem] leading-relaxed text-muted-foreground",
        "[&_h2]:mb-3 [&_h2]:mt-12 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-navy-900 [&_h2:first-child]:mt-0",
        "[&_h3]:mb-2 [&_h3]:mt-8 [&_h3]:font-serif [&_h3]:text-lg [&_h3]:text-navy-900",
        "[&_p]:mt-4 [&_p:first-child]:mt-0",
        "[&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5",
        "[&_a]:font-medium [&_a]:text-gold-700 [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-gold-800",
        "[&_strong]:font-medium [&_strong]:text-navy-900",
        className,
      )}
    >
      {children}
    </div>
  );
}

interface PageShellProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactNode;
  /** "narrow" for long-form legal/text pages, "wide" for richer layouts. */
  width?: "narrow" | "wide";
}

/**
 * Layout for routed sub-pages (legal, expertises, actualités).
 * Renders the sub-page navbar variant, a navy header band, then the content
 * on the light background, followed by the shared footer.
 */
export function PageShell({
  eyebrow,
  title,
  description,
  children,
  width = "narrow",
}: PageShellProps) {
  return (
    <>
      <Navbar variant="page" />

      <main>
        {/* Header band */}
        <section className="bg-navy-950 pb-16 pt-36 text-cream sm:pb-20 sm:pt-40">
          <Container>
            {eyebrow && (
              <span className="eyebrow text-gold-300">{eyebrow}</span>
            )}
            <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-[1.08] tracking-tight sm:text-5xl">
              {title}
            </h1>
            {description && (
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/75">
                {description}
              </p>
            )}
          </Container>
        </section>

        {/* Body */}
        <section className="bg-background py-16 sm:py-20">
          <Container size={width === "narrow" ? "narrow" : "wide"}>
            {children}
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
