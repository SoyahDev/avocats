"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { PracticeArea } from "@/types";
import { revealItemVariants } from "./reveal";

/** Only serializable fields cross the RSC boundary; the icon arrives pre-rendered. */
interface PracticeCardProps
  extends Pick<PracticeArea, "id" | "title" | "description" | "points"> {
  index: number;
  icon: React.ReactNode;
}

/** Interactive practice-area card with a gold sweep and reveal-on-hover detail. */
export function PracticeCard({ id, title, description, points, index, icon }: PracticeCardProps) {
  return (
    <motion.article
      variants={revealItemVariants}
      className="group relative flex flex-col overflow-hidden border border-navy-900/10 bg-card p-8 transition-all duration-700 ease-out-expo hover:-translate-y-1 hover:border-gold-400/50 hover:shadow-elegant sm:p-10"
    >
      {/* Corner index */}
      <span className="absolute right-6 top-6 font-serif text-sm text-navy-900/20 transition-colors duration-500 group-hover:text-gold-500">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Gold sweep */}
      <span className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-gold-400 transition-transform duration-700 ease-out-expo group-hover:scale-x-100" />

      <div className="mb-8 grid size-14 place-items-center rounded-full border border-navy-900/10 bg-secondary/60 text-navy-800 transition-all duration-500 group-hover:border-gold-400/40 group-hover:bg-gold-400/10 group-hover:text-gold-600">
        {icon}
      </div>

      <h3 className="mb-3 font-serif text-2xl text-navy-900">{title}</h3>
      <p className="mb-7 text-[0.95rem] leading-relaxed text-muted-foreground">
        {description}
      </p>

      <ul className="mb-8 mt-auto space-y-2">
        {points.map((point) => (
          <li
            key={point}
            className="flex items-center gap-2.5 text-sm text-navy-700"
          >
            <span className="h-1 w-1 rounded-full bg-gold-400" />
            {point}
          </li>
        ))}
      </ul>

      <a
        href={`/expertises/${id}`}
        className="inline-flex items-center gap-2 text-[0.8rem] font-medium uppercase tracking-widest text-navy-900 transition-colors duration-300 group-hover:text-gold-600"
      >
        En savoir plus
        <ArrowUpRight className="size-4 transition-transform duration-500 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </motion.article>
  );
}
