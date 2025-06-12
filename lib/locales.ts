import fs from "fs/promises";
import { readFileSync } from "fs";
import path from "path";

export async function getAvailableLocales(): Promise<string[]> {
  try {
    const filePath = path.join(process.cwd(), "content", "locales.json");
    const fileContent = await fs.readFile(filePath, "utf-8");
    const data = JSON.parse(fileContent);
    return data.locales || ["en"];
  } catch {
    return ["en"];
  }
}

export function getAvailableLocalesSync(): string[] {
  try {
    const filePath = path.join(process.cwd(), "content", "locales.json");
    const fileContent = readFileSync(filePath, "utf-8");
    const data = JSON.parse(fileContent);
    return data.locales || ["en"];
  } catch {
    return ["en"];
  }
}
