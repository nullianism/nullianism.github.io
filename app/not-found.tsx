import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="pt-32 pb-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-9xl font-bold text-purple-500 mb-4">404</div>
          <h1 className="text-4xl font-bold mb-4">Страница не найдена</h1>
          <p className="text-xl text-gray-400 mb-8">
            Похоже, эта страница еще не существует в нашей вселенной знаний.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full font-semibold transition-colors"
          >
            Вернуться на главную
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
