import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define supported locales and content files
const contentFiles = [
  "README.md",
  "MANIFESTO.md",
  "PHILOSOPHY.md",
  "COMMANDMENTS.md",
  "RITUALS.md",
];

async function syncContent() {
  const sourceDocsDir = path.join(__dirname, "../content-source/docs");
  const targetBaseDir = path.join(__dirname, "../content");

  // Ensure target directory exists
  await fs.ensureDir(targetBaseDir);

  try {
    // Get all language directories from the source
    const langDirs = await fs.readdir(sourceDocsDir);
    const locales = [];

    for (const dir of langDirs) {
      const dirPath = path.join(sourceDocsDir, dir);
      const stat = await fs.stat(dirPath);

      if (stat.isDirectory() && dir !== "template") {
        locales.push(dir);
      }
    }

    console.log(`🌍 Found locales: ${locales.join(", ")}`);

    // Sync content for each locale
    for (const locale of locales) {
      const sourceDir = path.join(sourceDocsDir, locale);
      const targetDir = path.join(targetBaseDir, locale);

      // Ensure locale directory exists
      await fs.ensureDir(targetDir);

      console.log(`\n📁 Syncing ${locale.toUpperCase()} content...`);

      // Copy each content file for this locale
      for (const file of contentFiles) {
        const source = path.join(sourceDir, file);
        const target = path.join(targetDir, file);

        if (await fs.pathExists(source)) {
          await fs.copy(source, target);
          console.log(`  ✓ Copied ${locale}/${file}`);
        } else {
          console.log(`  ⚠️  ${locale}/${file} not found in source`);
        }
      }
    }

    console.log("\n✨ Multilingual content sync completed!");

    // Log summary
    console.log("\n📊 Content Summary:");
    for (const locale of locales) {
      const localeDir = path.join(targetBaseDir, locale);
      if (await fs.pathExists(localeDir)) {
        const files = await fs.readdir(localeDir);
        const mdFiles = files.filter((f) => f.endsWith(".md"));
        console.log(`  ${locale}: ${mdFiles.length} files`);
      }
    }

    // Write locales info for Next.js
    const localesInfo = {
      locales,
      defaultLocale: locales.includes("ru") ? "ru" : locales[0],
      timestamp: new Date().toISOString(),
    };

    await fs.writeJson(path.join(targetBaseDir, "locales.json"), localesInfo, {
      spaces: 2,
    });
    console.log(`\n📝 Created locales.json with ${locales.length} locales`);
  } catch (error) {
    console.error("❌ Error accessing source docs directory:", error.message);
    console.log("Make sure the submodule is initialized and updated.");
    process.exit(1);
  }
}

syncContent().catch((err) => {
  console.error("❌ Error syncing content:", err);
  process.exit(1);
});
