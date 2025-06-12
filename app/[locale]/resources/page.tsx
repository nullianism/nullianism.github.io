import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { SOCIAL_LINKS } from "@/lib/constants";
import { getLocalizedData } from "@/lib/translations";

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function ResourcesPage({ params }: Props) {
  const { locale } = await params;
  const { translations, navigationItems } = await getLocalizedData(locale);

  return (
    <>
      <Navigation
        translations={translations}
        navigationItems={navigationItems}
      />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-12 text-center">
            {translations.resources.title}
          </h1>
          <p className="text-gray-300 mb-8 text-center">
            {translations.resources.subtitle}
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <section className="glass p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">
                {translations.resources.mainMaterialsTitle}
              </h2>
              <ul className="space-y-3">
                <li>
                  <a
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300"
                  >
                    {translations.resources.githubRepo}
                  </a>
                </li>
                <li>
                  <a
                    href={SOCIAL_LINKS.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300"
                  >
                    {translations.resources.videoPresentation}
                  </a>
                </li>
              </ul>
            </section>
            <section className="glass p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">
                {translations.resources.recommendedLiteratureTitle}
              </h2>
              <p className="text-gray-300">
                {translations.resources.recommendedPlaceholder}
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer translations={translations} navigationItems={navigationItems} />
    </>
  );
}
