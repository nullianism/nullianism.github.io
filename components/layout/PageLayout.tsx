import { ReactNode } from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Translations, NavigationItem } from "@/lib/translations";
import { getAvailableLocales } from "@/lib/locales";

interface PageLayoutProps {
  children: ReactNode;
  translations: Translations;
  navigationItems: NavigationItem[];
  showFooter?: boolean;
}

export default async function PageLayout({
  children,
  translations,
  navigationItems,
  showFooter = true,
}: PageLayoutProps) {
  const availableLocales = await getAvailableLocales();

  return (
    <>
      <Navigation
        translations={translations}
        navigationItems={navigationItems}
        availableLocales={availableLocales}
      />
      {children}
      {showFooter && (
        <Footer translations={translations} navigationItems={navigationItems} />
      )}
    </>
  );
}
