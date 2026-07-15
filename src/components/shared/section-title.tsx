import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

interface SectionTitleProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
  id?: string;
}

/** Editorial section heading: eyebrow + serif title + optional lede. */
export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
  id,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <Reveal direction="none" duration={0.6}>
          <span className={cn("eyebrow", tone === "light" && "text-gold-300")}>
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          id={id}
          className={cn(
            "max-w-3xl text-balance font-serif text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl",
            tone === "light" ? "text-cream" : "text-navy-900",
            align === "center" && "mx-auto",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.12}>
          <p
            className={cn(
              "max-w-xl text-lg leading-relaxed",
              tone === "light" ? "text-cream/70" : "text-muted-foreground",
              align === "center" && "mx-auto",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
