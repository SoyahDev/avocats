"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/lib/site";
import { useActiveSection } from "@/hooks/use-active-section";
import { AnimatedButton } from "@/components/shared/animated-button";
import { Logo } from "@/components/shared/logo";
import { cn } from "@/lib/utils";

const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

/**
 * `variant="page"` is used on routed sub-pages (legal, expertises, actualités):
 * the bar renders solid from the start (light glass + navy text) and in-page
 * anchors resolve back to the home page (`/#section`).
 */
export function Navbar({ variant = "home" }: { variant?: "home" | "page" }) {
  const isPage = variant === "page";
  // On sub-pages there is no dark hero behind the bar, so start solid.
  const [scrolled, setScrolled] = useState(isPage);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const active = useActiveSection(sectionIds);

  // Anchors point to the home page when we are on a routed sub-page.
  const to = (hash: string) => (isPage ? `/${hash}` : hash);

  useMotionValueEvent(scrollY, "change", (y) => {
    if (!isPage) setScrolled(y > 40);
  });

  // Lock body scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={cn(
          "flex w-full max-w-[1400px] items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ease-out-expo sm:px-6",
          scrolled
            ? "glass border border-navy-900/[0.06] shadow-soft"
            : "border border-transparent bg-transparent",
        )}
      >
        <a
          href={to("#top")}
          className="relative z-10"
          aria-label={`${site.name} — retour à l'accueil`}
        >
          <Logo
            className={cn(
              "transition-colors duration-500",
              scrolled ? "text-navy-900" : "text-cream",
            )}
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = active === id;
            return (
              <li key={link.href}>
                <a
                  href={to(link.href)}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-[0.82rem] font-medium tracking-[0.01em] transition-colors duration-300",
                    scrolled
                      ? isActive
                        ? "text-navy-900"
                        : "text-navy-900/60 hover:text-navy-900"
                      : isActive
                        ? "text-cream"
                        : "text-cream/70 hover:text-cream",
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className={cn(
                        "absolute inset-0 -z-10 rounded-full",
                        scrolled ? "bg-navy-900/[0.06]" : "bg-cream/10",
                      )}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <AnimatedButton
            href={to("#contact")}
            size="sm"
            variant={scrolled ? "primary" : "gold"}
            showArrow={false}
          >
            Prendre rendez-vous
          </AnimatedButton>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Ouvrir le menu"
          className={cn(
            "grid size-10 place-items-center transition-colors duration-500 lg:hidden",
            scrolled ? "text-navy-900" : "text-cream",
          )}
        >
          <Menu className="size-6" strokeWidth={1.5} />
        </button>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex flex-col bg-navy-950 px-6 py-6 text-cream lg:hidden"
          >
            <div className="flex items-center justify-between">
              <Logo className="text-cream" />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fermer le menu"
                className="grid size-10 place-items-center"
              >
                <X className="size-6" strokeWidth={1.5} />
              </button>
            </div>

            <ul className="mt-16 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a
                    href={to(link.href)}
                    onClick={() => setOpen(false)}
                    className="block border-b border-cream/10 py-4 font-serif text-3xl text-cream/90 transition-colors hover:text-gold-300"
                  >
                    <span className="mr-4 text-sm text-gold-400/70">
                      0{i + 1}
                    </span>
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="mt-auto">
              <AnimatedButton
                href={to("#contact")}
                variant="gold"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                Prendre rendez-vous
              </AnimatedButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
