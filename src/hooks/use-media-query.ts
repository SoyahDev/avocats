"use client";

import { useEffect, useState } from "react";

/** Subscribe to a CSS media query. SSR-safe (returns false until mounted). */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const update = () => setMatches(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [query]);

  return matches;
}

/** True on fine-pointer (mouse) devices — used to gate the custom cursor. */
export function useIsDesktopPointer(): boolean {
  return useMediaQuery("(hover: hover) and (pointer: fine)");
}

/** Respect the user's reduced-motion preference. */
export function usePrefersReducedMotion(): boolean {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}
