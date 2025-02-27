'use client';
import { motion } from 'framer-motion';
import { GeometricBackground } from '../../components/GeometricElements';
import Header from '../../components/Header';

export default function HolyMelonPage() {
  const features = [
    {
      title: 'Управление контентом',
      description: 'Административная панель для управления информацией о ресторанах'
    },
    {
      title: 'Фотопортал',
      description: 'Интегрированный фотопортал с поддержкой Яндекс.Диска'
    },
    {
      title: 'Автоматизация',
      description: 'Автоматизированная обработка и организация медиаконтента'
    },
    {
      title: 'Права доступа',
      description: 'Гибкая система управления правами пользователей'
    },
    {
      title: 'Организация медиа',
      description: 'Структурированное хранение и категоризация фотоматериалов'
    },
    {
      title: 'Интеграция',
      description: 'Полная интеграция с существующими системами ресторанов'
    }
  ];

  const specs = [
    { name: 'Тип системы', value: 'Веб-приложение' },
    { name: 'Интеграции', value: 'Яндекс.Диск API' },
    { name: 'Хранение данных', value: 'Облачное хранилище' },
    { name: 'Доступ', value: 'Многопользовательский' },
    { name: 'Безопасность', value: 'SSL шифрование' },
    { name: 'Интерфейс', value: 'Адаптивный дизайн' }
  ];

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
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Holy Melon</h1>
            <p className="text-2xl text-gray-400 mb-8">Платформа управления контентом</p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative">
        <GeometricBackground />
        <div className="container mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Возможности платформы</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 rounded-lg p-6 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 px-4 bg-zinc-900/50 relative">
        <GeometricBackground />
        <div className="container mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Технические характеристики</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {specs.map((spec, index) => (
                <motion.div
                  key={spec.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex justify-between p-4 bg-white/5 rounded-lg backdrop-blur-sm"
                >
                  <span className="text-gray-400">{spec.name}</span>
                  <span className="text-white font-medium">{spec.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 relative">
        <GeometricBackground />
        <div className="container mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Заинтересованы в похожем решении?</h2>
            <p className="text-gray-400 mb-8">
              Свяжитесь с нами для обсуждения вашего проекта
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Связаться с нами
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 