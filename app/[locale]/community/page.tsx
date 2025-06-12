import { SOCIAL_LINKS } from "@/lib/constants";
import { getLocalizedData } from "@/lib/translations";
import PageLayout from "@/components/layout/PageLayout";

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function CommunityPage({ params }: Props) {
  const { locale } = await params;
  const { translations, navigationItems } = await getLocalizedData(locale);

  return (
    <PageLayout
      translations={translations}
      navigationItems={navigationItems}
    >
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-12 text-center">
            {translations.community.title}
          </h1>
          <div className="space-y-12">
            <section className="glass p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">
                {translations.community.howToBecomeTitle}
              </h2>
              <p className="text-lg text-gray-300 mb-4">
                {translations.community.howToBecomeText}
              </p>
            </section>
            <section className="glass p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">
                {translations.community.howToHelpTitle}
              </h2>
              <ol className="list-decimal list-inside space-y-4 text-lg text-gray-300">
                <li>
                  <strong>{translations.community.bulletShareStrong}</strong>{" "}
                  {translations.community.bulletShareBeforeLink}{" "}
                  <a
                    href={SOCIAL_LINKS.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300"
                  >
                    {translations.community.bulletShareVideoWord}
                  </a>{" "}
                  {translations.community.bulletShareAfterLink}
                </li>
                <li>
                  <strong>{translations.community.bulletLikeStrong}</strong>{" "}
                  {translations.community.bulletLikeRest}
                </li>
                <li>
                  <strong>{translations.community.bulletSuggestStrong}</strong>{" "}
                  {
                    translations.community.bulletSuggestRest.split(
                      "{ISSUES}"
                    )[0]
                  }{" "}
                  <a
                    href={`${SOCIAL_LINKS.github}/issues`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300"
                  >
                    {translations.community.bulletSuggestIssues}
                  </a>{" "}
                  {
                    translations.community.bulletSuggestRest
                      .split("{ISSUES}")[1]
                      ?.split("{PULLS}")[0]
                  }{" "}
                  <a
                    href={`${SOCIAL_LINKS.github}/pulls`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300"
                  >
                    {translations.community.bulletSuggestPulls}
                  </a>{" "}
                  {translations.community.bulletSuggestRest.split("{PULLS}")[1]}
                </li>
              </ol>
            </section>
          </div>
        </div>
      </main>
    </PageLayout>
  );
}
