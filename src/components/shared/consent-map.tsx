"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCookieConsent } from "@/hooks/use-cookie-consent";

/**
 * Google Maps embed gated behind cookie consent (RGPD): the iframe — which
 * may set third-party cookies — only loads once the visitor accepts.
 */
export function ConsentMap({ src, title }: { src: string; title: string }) {
  const { accepted, accept } = useCookieConsent();

  return (
    <div className="relative mt-2 aspect-[16/10] overflow-hidden border border-navy-900/10">
      {accepted ? (
        <iframe
          title={title}
          src={src}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full w-full grayscale"
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-4 bg-secondary/40 p-6 text-center">
          <span className="grid size-11 place-items-center rounded-full border border-navy-900/10 bg-card text-gold-600">
            <MapPin className="size-5" />
          </span>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            La carte est fournie par Google Maps et peut déposer des cookies.
            Elle ne se charge qu&apos;avec votre accord.
          </p>
          <Button variant="outline" size="sm" onClick={accept}>
            Afficher la carte
          </Button>
          <Link
            href="/cookies"
            className="text-xs text-muted-foreground underline underline-offset-2 hover:text-gold-700"
          >
            Politique cookies
          </Link>
        </div>
      )}
    </div>
  );
}
