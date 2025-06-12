import { Footer } from "@/components/layout";
import Navigation from "@/components/layout/Navigation";
import Hero from "@/components/features/Hero";
import { getLocalizedData } from "@/lib/translations";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { translations, navigationItems } = await getLocalizedData(locale);

  return (
    <div className="min-h-screen relative">
      <Navigation
        translations={translations}
        navigationItems={navigationItems}
      />
      <main className="pt-16">
        <Hero translations={translations} />
      </main>
      <Footer translations={translations} navigationItems={navigationItems} />
    </div>
  );
}
