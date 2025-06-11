import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/features/Hero';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <Hero />
        
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass p-8 rounded-lg glow-hover">
              <h3 className="text-2xl font-bold mb-4">Любознательность</h3>
              <p className="text-gray-300">
                Стремление к знаниям и постоянное задавание вопросов - 
                основа нашего мировоззрения.
              </p>
            </div>
            
            <div className="glass p-8 rounded-lg glow-hover">
              <h3 className="text-2xl font-bold mb-4">Научный метод</h3>
              <p className="text-gray-300">
                Критическое мышление и проверка гипотез вместо слепой веры.
              </p>
            </div>
            
            <div className="glass p-8 rounded-lg glow-hover">
              <h3 className="text-2xl font-bold mb-4">Open Source</h3>
              <p className="text-gray-300">
                Открытое развитие идей и совместное создание будущего.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
