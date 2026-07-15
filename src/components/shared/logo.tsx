import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

/** Wordmark logo — a refined monogram paired with the firm name. */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden
        className="shrink-0"
      >
        <rect
          x="0.6"
          y="0.6"
          width="38.8"
          height="38.8"
          rx="6"
          stroke="currentColor"
          strokeOpacity="0.25"
          strokeWidth="1"
        />
        <path
          d="M11 28V12h3.4l5.6 9.8L25.6 12H29v16h-3.2V17.8L20.6 27h-1.2L14.2 17.8V28H11Z"
          fill="currentColor"
        />
        <circle cx="20" cy="20" r="17" stroke="#c9a96a" strokeOpacity="0.5" strokeWidth="0.75" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-lg tracking-tight">{site.name}</span>
        <span className="text-[0.55rem] uppercase tracking-widest2 text-current opacity-50">
          {site.tagline}
        </span>
      </span>
    </span>
  );
}
