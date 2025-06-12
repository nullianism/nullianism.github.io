import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n.ts");

const isExport = process.env.NEXT_STATIC_EXPORT === "true";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  // Добавляем поддержку для GitHub Pages
  basePath: process.env.NODE_ENV === "production" ? "" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "" : "",
  // Отключаем автоматический i18n Next.js для использования next-intl
  trailingSlash: true,
  ...(isExport ? { output: "export" } : {}),
};

export default withNextIntl(nextConfig);
