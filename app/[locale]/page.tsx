import Hero from "@/components/features/Hero";
import { getLocalizedData } from "@/lib/translations";
import PageLayout from "@/components/layout/PageLayout";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { translations, navigationItems } = await getLocalizedData(locale);

  return (
    <div className="min-h-screen relative">
      <PageLayout
        translations={translations}
        navigationItems={navigationItems}
      >
        <main className="pt-16">
          <Hero translations={translations} />
        </main>
      </PageLayout>
    </div>
  );
}
