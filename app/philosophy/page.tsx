import { Metadata } from 'next';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { getMarkdownContent } from '@/lib/markdown';

export const metadata: Metadata = {
  title: 'Философия',
  description: 'Основные ценности и мировоззрение Нуллианства',
};

export default async function PhilosophyPage() {
  const { contentHtml } = await getMarkdownContent('PHILOSOPHY.md');

  return (
    <>
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-12 text-center">
            Философия Нуллианства
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
