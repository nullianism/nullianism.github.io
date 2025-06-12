import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { getLocalizedData } from "@/lib/translations";

export default async function NotFound() {
  const { translations, navigationItems } = await getLocalizedData("en");

  return (
    <>
      <Navigation
        translations={translations}
        navigationItems={navigationItems}
      />
      <main className="pt-32 pb-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-9xl font-bold text-purple-500 mb-4">404</div>
          <h1 className="text-4xl font-bold mb-4">
            {translations.notFound.title}
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            {translations.notFound.description}
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full font-semibold transition-colors"
          >
            {translations.notFound.backHome}
          </Link>
        </div>
      </main>
      <Footer translations={translations} navigationItems={navigationItems} />
    </>
  );
}
