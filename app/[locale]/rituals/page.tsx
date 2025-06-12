import { getMarkdownContent } from "@/lib/markdown";
import { getLocalizedData } from "@/lib/translations";
import PageLayout from "@/components/layout/PageLayout";

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function RitualsPage({ params }: Props) {
  const { locale } = await params;
  const { translations, navigationItems } = await getLocalizedData(locale);
  const { contentHtml } = await getMarkdownContent("RITUALS.md", locale);

  return (
    <PageLayout
      translations={translations}
      navigationItems={navigationItems}
    >
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="prose prose-invert prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      </main>
    </PageLayout>
  );
}
