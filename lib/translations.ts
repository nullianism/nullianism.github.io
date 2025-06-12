import fs from "fs/promises";
import path from "path";

export interface Translations {
  site: {
    name: string;
    description: string;
  };
  hero: {
    title: string;
    subtitle: string;
    readManifesto: string;
    joinCommunity: string;
  };
  navigation: {
    home: string;
    manifesto: string;
    philosophy: string;
    commandments: string;
    rituals: string;
    community: string;
    resources: string;
  };
  footer: {
    aboutTitle: string;
    aboutDescription: string;
    navigationTitle: string;
    joinTitle: string;
    copyright: string;
    builtWith: string;
  };
  community: {
    title: string;
    howToBecomeTitle: string;
    howToBecomeText: string;
    howToHelpTitle: string;
    bulletShareStrong: string;
    bulletShareBeforeLink: string;
    bulletShareVideoWord: string;
    bulletShareAfterLink: string;
    bulletLikeStrong: string;
    bulletLikeRest: string;
    bulletSuggestStrong: string;
    bulletSuggestRest: string;
    bulletSuggestIssues: string;
    bulletSuggestPulls: string;
  };
  resources: {
    title: string;
    subtitle: string;
    mainMaterialsTitle: string;
    githubRepo: string;
    videoPresentation: string;
    recommendedLiteratureTitle: string;
    recommendedPlaceholder: string;
  };
  notFound: {
    title: string;
    description: string;
    backHome: string;
  };
}

export interface NavigationItem {
  name: string;
  href: string;
}

export interface LocalizedData {
  translations: Translations;
  navigationItems: NavigationItem[];
}

// Cache for translations to avoid reading files multiple times
const translationsCache = new Map<string, Translations>();

export async function getTranslations(locale: string): Promise<Translations> {
  // Check cache first
  if (translationsCache.has(locale)) {
    return translationsCache.get(locale)!;
  }

  try {
    const filePath = path.join(process.cwd(), "locales", `${locale}.json`);
    const fileContent = await fs.readFile(filePath, "utf-8");
    const translations: Translations = JSON.parse(fileContent);

    // Cache the translations
    translationsCache.set(locale, translations);

    return translations;
  } catch {
    // Fallback to English if locale file not found
    if (locale !== "en") {
      return getTranslations("en");
    }

    // Ultimate fallback if even English fails
    const fallback: Translations = {
      site: {
        name: "Nullianism",
        description: "The world's first scientific Open-Source religion",
      },
      hero: {
        title: "Nullianism",
        subtitle: "The world's first scientific Open-Source religion.",
        readManifesto: "Read Manifesto",
        joinCommunity: "Join Community",
      },
      navigation: {
        home: "Home",
        manifesto: "Manifesto",
        philosophy: "Philosophy",
        commandments: "Commandments",
        rituals: "Rituals",
        community: "Community",
        resources: "Resources",
      },
      footer: {
        aboutTitle: "About Nullianism",
        aboutDescription:
          "The world's first scientific Open-Source religion based on curiosity and critical thinking.",
        navigationTitle: "Navigation",
        joinTitle: "Join Us",
        copyright: "Nullianism. Open Source religion.",
        builtWith: "Built with love for knowledge",
      },
      community: {
        title: "Nullianism Community",
        howToBecomeTitle: "How to become a Nullian?",
        howToBecomeText:
          "If you share the ideas presented here, consider yourself already a Nullian. No formal procedures are required. Our religion is decentralized.",
        howToHelpTitle: "How to help the project?",
        bulletShareStrong: "Share",
        bulletShareBeforeLink: "this site and",
        bulletShareVideoWord: "video",
        bulletShareAfterLink: "with friends.",
        bulletLikeStrong: "Give likes",
        bulletLikeRest: "and leave comments.",
        bulletSuggestStrong: "Suggest your ideas",
        bulletSuggestRest:
          "for commandments and rituals via {ISSUES} and {PULLS} in our repository.",
        bulletSuggestIssues: "Issues",
        bulletSuggestPulls: "Pull Requests",
      },
      resources: {
        title: "Resources",
        subtitle: "Here are useful materials and links.",
        mainMaterialsTitle: "Key materials",
        githubRepo: "GitHub repository",
        videoPresentation: "Video presentation",
        recommendedLiteratureTitle: "Recommended literature",
        recommendedPlaceholder:
          "The list of books and materials will be added by the community.",
      },
      notFound: {
        title: "Page not found",
        description:
          "It looks like this page has not yet materialized in our universe of knowledge.",
        backHome: "Return to home",
      },
    };

    translationsCache.set(locale, fallback);
    return fallback;
  }
}

export async function getLocalizedData(locale: string): Promise<LocalizedData> {
  const translations = await getTranslations(locale);

  // Convert navigation translations to NavigationItem array
  const navigationItems: NavigationItem[] = [
    { name: translations.navigation.home, href: "/" },
    { name: translations.navigation.manifesto, href: "/manifesto" },
    { name: translations.navigation.philosophy, href: "/philosophy" },
    { name: translations.navigation.commandments, href: "/commandments" },
    { name: translations.navigation.rituals, href: "/rituals" },
    { name: translations.navigation.community, href: "/community" },
    { name: translations.navigation.resources, href: "/resources" },
  ];

  return {
    translations,
    navigationItems,
  };
}
