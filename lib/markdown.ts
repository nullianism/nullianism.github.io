import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const contentDirectory = path.join(process.cwd(), "content");

export async function getMarkdownContent(
  filename: string,
  locale: string = "ru"
) {
  const fullPath = path.join(contentDirectory, locale, filename);

  try {
    const fileContents = await fs.readFile(fullPath, "utf8");
    const matterResult = matter(fileContents);
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
      contentHtml,
      locale,
      ...matterResult.data,
    };
  } catch (err) {
    if (locale !== "ru") {
      // Fallback to Russian
      return getMarkdownContent(filename, "ru");
    }
    throw err;
  }
}

export async function getAllContent(locale: string = "ru") {
  const localeDir = path.join(contentDirectory, locale);
  let markdownFiles: string[] = [];
  try {
    markdownFiles = (await fs.readdir(localeDir)).filter((file) =>
      file.endsWith(".md")
    );
  } catch (err) {
    if (locale !== "ru") {
      return getAllContent("ru");
    }
    throw err;
  }

  const allContent = await Promise.all(
    markdownFiles.map(async (filename) => {
      const content = await getMarkdownContent(filename, locale);
      return {
        filename: filename.replace(/\.md$/, ""),
        ...content,
      };
    })
  );

  return allContent;
}

export async function getAvailableLocales(): Promise<string[]> {
  try {
    const dirs = await fs.readdir(contentDirectory);
    return dirs.filter(async (d) => {
      const stat = await fs.stat(path.join(contentDirectory, d));
      return stat.isDirectory();
    });
  } catch {
    return ["ru"];
  }
}
