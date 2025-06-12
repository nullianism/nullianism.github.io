"use client";

import { useEffect, useState } from "react";

/**
 * Detects the visitor's preferred language in the browser.
 * Returns only the language code part (e.g. "en" from "en-US").
 * Falls back to the provided value when detection isn't possible (SSR).
 */
export function useBrowserLocale(fallback: string = "en") {
  const [locale, setLocale] = useState<string>(fallback);

  useEffect(() => {
    const detected =
      typeof navigator !== "undefined"
        ? (navigator.languages && navigator.languages.length
            ? navigator.languages[0]
            : navigator.language) || fallback
        : fallback;

    if (detected) {
      setLocale(detected.split("-")[0]);
    }
  }, [fallback]);

  return locale;
}
