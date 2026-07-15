"use client";

import { useCallback, useEffect, useState } from "react";

export type Consent = "accepted" | "declined" | null;

const KEY = "cookie-consent";
const EVENT = "cookie-consent-change";

/**
 * Tiny consent store backed by localStorage, synchronised across components
 * (and tabs) via a custom event. No third-party cookie is set until the user
 * accepts — see the cookie policy page.
 */
export function useCookieConsent() {
  const [consent, setConsent] = useState<Consent>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const read = () => {
      const v = window.localStorage.getItem(KEY);
      setConsent(v === "accepted" || v === "declined" ? v : null);
    };
    read();
    setReady(true);
    window.addEventListener(EVENT, read);
    window.addEventListener("storage", read);
    return () => {
      window.removeEventListener(EVENT, read);
      window.removeEventListener("storage", read);
    };
  }, []);

  const set = useCallback((value: "accepted" | "declined") => {
    window.localStorage.setItem(KEY, value);
    window.dispatchEvent(new Event(EVENT));
  }, []);

  return {
    ready,
    consent,
    accepted: consent === "accepted",
    accept: useCallback(() => set("accepted"), [set]),
    decline: useCallback(() => set("declined"), [set]),
  };
}
