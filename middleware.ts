import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: [
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
  ],

  // Default locale when none is specified in the URL
  // or when the browser's language can't be matched
  defaultLocale: "en",

  // Always show the locale in the URL
  localePrefix: "always",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/((?!api|_next|_vercel|.*\\..*).*)"],
};
