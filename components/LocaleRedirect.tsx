"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useBrowserLocale } from "@/lib/useBrowserLocale";

// Ideally, retrieve this dynamically; for now keep in sync with your locales.
const SUPPORTED_LOCALES = [
  "ar",
  "arz",
  "az",
  "be",
  "bn",
  "cs",
  "da",
  "de",
  "el",
  "en",
  "es",
  "et",
  "fa",
  "fr",
  "ha",
  "he",
  "hi",
  "id",
  "is",
  "it",
  "ja",
  "jv",
  "kk",
  "ko",
  "ky",
  "la",
  "lt",
  "lv",
  "mk",
  "mr",
  "ng",
  "nl",
  "no",
  "pl",
  "pnb",
  "pt",
  "ro",
  "ru",
  "sr",
  "sv",
  "sw",
  "ta",
  "te",
  "tg",
  "th",
  "tl",
  "tr",
  "tt",
  "ug",
  "uk",
  "ur",
  "uz",
  "vi",
  "wuu",
  "yue",
  "zh",
];
const DEFAULT_LOCALE = "en";

export default function LocaleRedirect() {
  const browserLocale = useBrowserLocale(DEFAULT_LOCALE);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    console.log("🌐 Browser locale detected:", browserLocale);
    console.log("📍 Current pathname:", pathname);

    if (!pathname) return;
    // Skip if URL already starts with a supported locale (e.g., /en/about)
    const alreadyHasLocale = SUPPORTED_LOCALES.some((l) =>
      pathname.startsWith(`/${l}`)
    );

    console.log("✅ Already has locale?", alreadyHasLocale);

    if (alreadyHasLocale) return;

    const targetLocale = SUPPORTED_LOCALES.includes(browserLocale)
      ? browserLocale
      : DEFAULT_LOCALE;

    console.log("🎯 Target locale:", targetLocale);

    // Prevent double slashes
    const newPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
    const redirectTo = `/${targetLocale}${newPath}`;

    console.log("🚀 Redirecting to:", redirectTo);
    router.replace(redirectTo);
  }, [browserLocale, pathname, router]);

  return null;
}
