'use client';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { GeometricBackground } from '../../components/GeometricElements';
import Header from '../../components/Header';
import { projects } from '../../data/projects';

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <main className="min-h-screen bg-black text-white">
        <Header />
        <div className="container mx-auto px-4 pt-32">
          <h1 className="text-4xl font-bold">Проект не найден</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <GeometricBackground />
        <div className="container mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="mb-8 text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl text-gray-400">{project.category}</p>
            </div>

            <div className="prose prose-invert max-w-none">
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">О проекте</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Ключевые особенности</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features?.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-3 bg-white/5 rounded-lg p-4"
                    >
                      <svg className="w-6 h-6 text-white/60 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white/5 rounded-xl p-8 text-center"
              >
                <h2 className="text-2xl font-bold mb-4">Заинтересованы в похожем проекте?</h2>
                <p className="text-gray-400 mb-6">
                  Давайте обсудим ваши идеи и создадим что-то удивительное вместе
                </p>
                <button className="px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors duration-300">
                  Связаться с нами
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 