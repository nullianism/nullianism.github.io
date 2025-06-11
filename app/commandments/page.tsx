import { Metadata } from 'next';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { getMarkdownContent } from '@/lib/markdown';

export const metadata: Metadata = {
  title: 'Заповеди',
  description: '8 ключевых принципов Нуллианства',
};

export default async function CommandmentsPage() {
  const { contentHtml } = await getMarkdownContent('COMMANDMENTS.md');

  return (
    <>
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-12 text-center">
            Заповеди Нуллианства
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
