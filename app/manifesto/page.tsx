import { Metadata } from 'next';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { getMarkdownContent } from '@/lib/markdown';

export const metadata: Metadata = {
  title: 'Манифест Любознательности',
  description: 'Основной программный текст Нуллианства',
};

export default async function ManifestoPage() {
  const { contentHtml } = await getMarkdownContent('MANIFESTO.md');

  return (
    <>
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-12 text-center">
            Манифест Любознательности
          </h1>
          
          <div 
            className="prose prose-invert prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
