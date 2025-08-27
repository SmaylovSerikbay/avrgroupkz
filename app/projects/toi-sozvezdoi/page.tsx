'use client';
import { motion } from 'framer-motion';
import { GeometricBackground } from '../../components/GeometricElements';
import Header from '../../components/Header';

export default function ToiSozvezdoiPage() {
  const features = [
    {
      title: 'Каталог исполнителей',
      description: 'Поиск фотографов, видеографов, музыкантов и других профессионалов'
    },
    {
      title: 'Система заявок',
      description: 'Создание и управление заявками на проведение мероприятий'
    },
    {
      title: 'Прямая коммуникация',
      description: 'Чат для переговоров и обсуждения деталей с исполнителями'
    },
    {
      title: 'Бронирование дат',
      description: 'Проверка свободных дат и бронирование исполнителей'
    },
    {
      title: 'Профили исполнителей',
      description: 'Детальная информация о услугах, портфолио и рейтингах'
    },
    {
      title: 'Управление заказами',
      description: 'Полная система управления заявками и расписанием'
    }
  ];

  const specs = [
    { name: 'Тип проекта', value: 'Веб-платформа' },
    { name: 'Технологии', value: 'Next.js, React, TypeScript' },
    { name: 'Дизайн', value: 'Адаптивный UI/UX' },
    { name: 'Интеграции', value: 'Платежные системы, чат, уведомления' },
    { name: 'Безопасность', value: 'SSL, защита данных, верификация' },
    { name: 'Производительность', value: 'Оптимизация Core Web Vitals' }
  ];

  const technologies = [
    'Next.js 14',
    'React 18',
    'TypeScript',
    'Tailwind CSS',
    'Framer Motion',
    'Responsive Design'
  ];

  const platformFeatures = [
    {
      title: 'Для заказчиков',
      items: [
        'Поиск исполнителей по категориям и рейтингу',
        'Создание заявок с описанием мероприятий',
        'Прямое общение с исполнителями',
        'Бронирование дат и управление заказами'
      ]
    },
    {
      title: 'Для исполнителей',
      items: [
        'Создание профилей с портфолио',
        'Получение уведомлений о заказах',
        'Управление услугами и ценами',
        'Ведение расписания и календаря'
      ]
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Toi Sozvezdoi.kz</h1>
            <p className="text-2xl text-gray-400 mb-8">Платформа для поиска исполнителей</p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Инновационная платформа, соединяющая заказчиков с лучшими исполнителями 
              для праздников и мероприятий: фотографами, видеографами, музыкантами и другими профессионалами
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 px-4 relative">
        <GeometricBackground />
        <div className="container mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">О проекте</h2>
            <div className="bg-white/5 rounded-lg p-8 backdrop-blur-sm">
              <p className="text-lg text-gray-300 leading-relaxed">
                Toi Sozvezdoi.kz - это двусторонняя платформа, которая решает проблему 
                поиска и подбора исполнителей для праздников и мероприятий. Заказчики могут 
                легко найти профессионалов по категориям, создать заявки и забронировать 
                даты. Исполнители получают возможность создавать профили, демонстрировать 
                портфолио и получать заказы. Платформа обеспечивает прозрачную коммуникацию 
                и удобное управление всем процессом организации мероприятий.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section className="py-20 px-4 bg-zinc-900/50 relative">
        <GeometricBackground />
        <div className="container mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Возможности платформы</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {platformFeatures.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 rounded-lg p-6 backdrop-blur-sm"
                >
                  <h3 className="text-2xl font-bold mb-4 text-white">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Ключевые функции</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 rounded-lg p-6 backdrop-blur-sm hover:bg-white/10 transition-colors"
                >
                  <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 bg-zinc-900/50 relative">
        <GeometricBackground />
        <div className="container mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Используемые технологии</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 rounded-lg p-4 text-center backdrop-blur-sm hover:bg-white/10 transition-colors"
                >
                  <span className="text-white font-medium">{tech}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 px-4 relative">
        <GeometricBackground />
        <div className="container mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Технические характеристики</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {specs.map((spec, index) => (
                <motion.div
                  key={spec.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Заинтересованы в похожем решении?</h2>
            <p className="text-gray-400 mb-8">
              Свяжитесь с нами для обсуждения вашего проекта платформы
            </p>
            <a 
              href="https://wa.me/77776875411?text=Здравствуйте! Хочу обсудить проект платформы с AVR Group"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors text-lg"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              Написать в WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
