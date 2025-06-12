import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import fs from "fs-extra";
import path from "path";

// Function to get available locales from content directory
async function getAvailableLocales(): Promise<string[]> {
  try {
    const contentDir = path.join(process.cwd(), "content");
    if (await fs.pathExists(contentDir)) {
      const items = await fs.readdir(contentDir);
      const locales = [];

      for (const item of items) {
        const itemPath = path.join(contentDir, item);
        const stat = await fs.stat(itemPath);
        if (stat.isDirectory() && item.length <= 5) {
          // Language codes are usually 2-5 chars
          locales.push(item);
        }
      }

      return locales.length > 0 ? locales : ["en"];
    }
    return ["en"];
  } catch {
    return ["en"];
  }
}

// Function to load locales info
async function getLocalesInfo() {
  try {
    const localesPath = path.join(process.cwd(), "content", "locales.json");
    if (await fs.pathExists(localesPath)) {
      const localesInfo = await fs.readJson(localesPath);
      return localesInfo;
    }
  } catch {
    // Fallback if no locales.json exists
  }

  const availableLocales = await getAvailableLocales();
  return {
    locales: availableLocales,
    defaultLocale: availableLocales.includes("en") ? "en" : availableLocales[0],
  };
}

export default getRequestConfig(async ({ locale }) => {
  const localesInfo = await getLocalesInfo();

  // Validate that the incoming `locale` parameter is valid
  if (!localesInfo.locales.includes(locale)) {
    notFound();
  }

  return {
    messages: {}, // We'll handle content via markdown files, not translation JSON
    locale: locale as string,
  };
});
