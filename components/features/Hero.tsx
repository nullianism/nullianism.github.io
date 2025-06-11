'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Динамически импортируем ParticleBackground только на клиенте
const ParticleBackground = dynamic(
  () => import('./ParticleBackground'),
  { ssr: false }
);

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background particles effect */}
      <ParticleBackground />

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8 inline-block"
        >
          <div className="w-32 h-32 mx-auto rounded-full border-4 border-purple-500 flex items-center justify-center">
            <span className="text-6xl font-bold">0</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Нуллианство
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Первая в мире научная Open-Source религия
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/manifesto"
            className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full font-semibold transition-colors"
          >
            Читать Манифест
          </Link>
          <Link
            href="/community"
            className="px-8 py-3 border border-purple-600 hover:bg-purple-600/20 rounded-full font-semibold transition-colors"
          >
            Присоединиться
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
