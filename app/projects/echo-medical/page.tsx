'use client';
import { motion } from 'framer-motion';
import { GeometricBackground } from '../../components/GeometricElements';
import Header from '../../components/Header';

export default function EchoMedicalPage() {
  const specs = [
    { name: 'Размеры', value: '50 см x 40 см x 20 см' },
    { name: 'Вес', value: '5 кг' },
    { name: 'Wi-Fi', value: 'Двухдиапазонное (2.4 и 5 GHz)' },
    { name: 'Bluetooth', value: 'Advanced Audio Distribution Profile (A2DP)' },
    { name: 'Идентификация', value: 'Face ID, Touch ID' },
    { name: 'Измерения', value: 'Давление, температура, алкоголь, наркотесты' },
    { name: 'Печать', value: 'Встроенный термопринтер' },
    { name: 'Экран', value: 'Интерактивный сенсорный дисплей' },
    { name: 'Хранение данных', value: 'Защищённая онлайн-база данных' }
  ];

  const features = [
    {
      title: 'Быстрая диагностика',
      description: 'Полный медицинский осмотр всего за 60 секунд'
    },
    {
      title: 'Комплексные измерения',
      description: 'Давление, пульс, температура, алкотесты и наркотесты'
    },
    {
      title: 'Биометрическая защита',
      description: 'Распознавание лиц и отпечатков пальцев'
    },
    {
      title: 'Автоматизация',
      description: 'Полностью автоматический процесс осмотра'
    },
    {
      title: 'Интеграция',
      description: 'Подключение к корпоративным системам'
    },
    {
      title: 'Отчетность',
      description: 'Автоматическое формирование и печать отчетов'
    }
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Echo</h1>
            <p className="text-2xl text-gray-400 mb-8">Медицинский осмотр за 60 секунд</p>
            <div className="aspect-video relative rounded-xl overflow-hidden mb-12">
              <img
                src="/projects/echo-medical.jpg"
                alt="Echo Medical Device"
                className="object-cover w-full h-full"
              />
            </div>
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
            <h2 className="text-3xl font-bold mb-12 text-center">Возможности устройства</h2>
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
            <h2 className="text-3xl font-bold mb-6">Заинтересованы в приобретении?</h2>
            <p className="text-gray-400 mb-8">
              Свяжитесь с нами для получения подробной информации о стоимости и условиях поставки
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