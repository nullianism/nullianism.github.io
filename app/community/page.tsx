import { Metadata } from 'next';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { SOCIAL_LINKS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Сообщество',
  description: 'Присоединяйтесь к сообществу Нуллианства',
};

export default function CommunityPage() {
  return (
    <>
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-12 text-center">
            Сообщество Нуллианства
          </h1>

          <div className="space-y-12">
            <section className="glass p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">Как стать нуллианцем?</h2>
              <p className="text-lg text-gray-300 mb-4">
                Если вы разделяете изложенные здесь идеи, считайте, что вы уже нуллианец. 
                Никаких формальных процедур не требуется. Наша религия децентрализована.
              </p>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">Как помочь проекту?</h2>
              <ol className="list-decimal list-inside space-y-4 text-lg text-gray-300">
                <li>
                  <strong>Поделитесь</strong> этим сайтом и{' '}
                  <a 
                    href={SOCIAL_LINKS.youtube} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300"
                  >
                    видео
                  </a>{' '}
                  с друзьями.
                </li>
                <li>
                  <strong>Ставьте лайки</strong> и оставляйте комментарии.
                </li>
                <li>
                  <strong>Предлагайте свои идеи</strong> для заповедей и ритуалов через{' '}
                  <a 
                    href={`${SOCIAL_LINKS.github}/issues`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300"
                  >
                    Issues
                  </a>{' '}
                  и{' '}
                  <a 
                    href={`${SOCIAL_LINKS.github}/pulls`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300"
                  >
                    Pull Requests
                  </a>{' '}
                  в нашем репозитории.
                </li>
              </ol>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
