"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useCookieConsent } from "@/hooks/use-cookie-consent";

/** Bottom consent banner shown until the visitor makes a choice. */
export function CookieConsent() {
  const { ready, consent, accept, decline } = useCookieConsent();
  const show = ready && consent === null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          role="dialog"
          aria-label="Consentement aux cookies"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-4 bottom-4 z-[200] mx-auto max-w-2xl rounded-sm border border-navy-900/10 bg-cream/95 p-5 shadow-elegant backdrop-blur sm:bottom-6 sm:p-6"
        >
          <p className="text-sm leading-relaxed text-navy-800">
            Ce site n&apos;utilise{" "}
            <strong className="font-medium text-navy-900">
              aucun traceur publicitaire
            </strong>
            . Seule la carte Google Maps de la page contact peut déposer des
            cookies, et uniquement si vous l&apos;acceptez.{" "}
            <Link
              href="/cookies"
              className="font-medium text-gold-700 underline underline-offset-2 hover:text-gold-800"
            >
              En savoir plus
            </Link>
            .
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Button variant="gold" size="sm" onClick={accept}>
              Tout accepter
            </Button>
            <Button variant="outline" size="sm" onClick={decline}>
              Refuser
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
