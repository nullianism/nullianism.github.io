import { Navigation, Footer } from '@/components/layout';
import Hero from '@/components/features/Hero';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <Navigation />
      <main className="pt-16">
        <Hero />
        
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass rounded-2xl p-8 glow-hover group">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
                Любознательность
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Стремление к знаниям и постоянное задавание вопросов - 
                основа нашего мировоззрения.
              </p>
            </div>
            
            <div className="glass rounded-2xl p-8 glow-hover group">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                Научный метод
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Критическое мышление и проверка гипотез вместо слепой веры.
              </p>
            </div>
            
            <div className="glass rounded-2xl p-8 glow-hover group">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Open Source
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Открытое развитие идей и совместное создание будущего.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
