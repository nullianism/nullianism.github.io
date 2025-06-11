import { Metadata } from 'next';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { SOCIAL_LINKS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Ресурсы',
  description: 'Материалы и ресурсы Нуллианства',
};

export default function ResourcesPage() {
  return (
    <>
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-12 text-center">
            Ресурсы
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            <section className="glass p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Основные материалы</h2>
              <ul className="space-y-3">
                <li>
                  <a 
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300"
                  >
                    GitHub репозиторий
                  </a>
                </li>
                <li>
                  <a 
                    href={SOCIAL_LINKS.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300"
                  >
                    Видео презентация
                  </a>
                </li>
              </ul>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Рекомендуемая литература</h2>
              <p className="text-gray-300">
                Список книг и материалов о научном методе, критическом мышлении 
                и рациональном подходе к познанию мира будет дополнен сообществом.
              </p>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Символика</h2>
              <p className="text-gray-300">
                Основной символ Нуллианства - Ноль (0), символизирующий отсутствие догм,
                начальную точку познания и равенство всех участников.
              </p>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Для разработчиков</h2>
              <p className="text-gray-300">
                Присоединяйтесь к развитию проекта через GitHub. 
                Мы приветствуем любые идеи и улучшения!
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
