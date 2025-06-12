import fs from "fs";
import path from "path";
import type { Metadata } from "next";

export const dynamicParams = false; // disable extra runtime params

// Read locales at build time
function getLocales() {
  try {
    const data = fs.readFileSync(
      path.join(process.cwd(), "content", "locales.json"),
      "utf8"
    );
    const json = JSON.parse(data);
    return json.locales as string[];
  } catch {
    return ["en"];
  }
}

export function generateStaticParams() {
  return getLocales().map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Nullianism",
};

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
