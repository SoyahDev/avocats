"use client";

import { useState, useId } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Mail, GraduationCap, Languages, Plus } from "lucide-react";
import type { Attorney } from "@/types";
import { revealItemVariants } from "./reveal";
import { cn } from "@/lib/utils";

/** Attorney profile card with an accessible expandable biography drawer. */
export function AttorneyCard({ attorney }: { attorney: Attorney }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <motion.article
      variants={revealItemVariants}
      className="group relative flex flex-col overflow-hidden border border-navy-900/10 bg-card"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={attorney.image}
          alt={`Portrait de ${attorney.name}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover object-center grayscale transition-all [transition-duration:1200ms] ease-out-expo group-hover:scale-[1.04] group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/10 to-transparent" />

        {/* Socials */}
        <div className="absolute bottom-4 right-4 flex translate-y-2 gap-2 opacity-0 transition-all duration-500 ease-out-expo group-hover:translate-y-0 group-hover:opacity-100">
          <a
            href={attorney.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`LinkedIn de ${attorney.name}`}
            className="grid size-9 place-items-center rounded-full glass text-navy-900 transition-colors hover:bg-gold-400 hover:text-navy-950"
          >
            <Linkedin className="size-4" />
          </a>
          <a
            href={`mailto:${attorney.email}`}
            aria-label={`Écrire à ${attorney.name}`}
            className="grid size-9 place-items-center rounded-full glass text-navy-900 transition-colors hover:bg-gold-400 hover:text-navy-950"
          >
            <Mail className="size-4" />
          </a>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-6 text-cream">
          <p className="mb-1 text-[0.7rem] uppercase tracking-widest text-gold-300">
            {attorney.role}
          </p>
          <h3 className="font-serif text-2xl">{attorney.name}</h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex flex-wrap gap-2">
          {attorney.specialties.map((s) => (
            <span
              key={s}
              className="rounded-full border border-navy-900/10 bg-secondary/50 px-3 py-1 text-xs text-navy-700"
            >
              {s}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className="mt-auto flex items-center justify-between border-t border-navy-900/10 pt-4 text-left text-sm font-medium text-navy-900 transition-colors hover:text-gold-600"
        >
          {open ? "Réduire le profil" : "Découvrir le profil"}
          <Plus
            className={cn(
              "size-4 text-gold-500 transition-transform duration-500 ease-out-expo",
              open && "rotate-45",
            )}
          />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={panelId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="space-y-5 pt-5 text-sm leading-relaxed text-muted-foreground">
                <p>{attorney.bio}</p>

                <div>
                  <p className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-navy-900">
                    <GraduationCap className="size-4 text-gold-500" /> Formation
                  </p>
                  <ul className="space-y-1">
                    {attorney.education.map((e) => (
                      <li key={e}>{e}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-navy-900">
                    <Languages className="size-4 text-gold-500" /> Langues
                  </p>
                  <p>{attorney.languages.join(" · ")}</p>
                </div>

                <p className="text-xs uppercase tracking-widest text-gold-600">
                  {attorney.experience}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}
