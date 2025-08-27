'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ProjectCard } from '../../components/Cards';
import { GeometricBackground } from '../../components/GeometricElements';
import Header from '../../components/Header';
import { projects as allProjects } from '../../data/projects';
import { Project } from '../../types';
import SEOMeta from '../../components/SEOMeta';
import Breadcrumbs from '../../components/Breadcrumbs';

const webProjects = allProjects.filter((project: Project) => project.service === 'web-development');

export default function WebDevelopmentPage() {
  return (
    <>
      <SEOMeta
        title="Веб-разработка в Астане | AVR Group - Сайты, 3D-конфигураторы, Веб-приложения"
        description="Создаем современные веб-сайты, 3D-конфигураторы и веб-приложения. Разработка под ключ с AR/VR технологиями. Бесплатная консультация. Сроки: 1-3 месяца. Звоните: +7 777 687 54 11"
        keywords="веб-разработка, создание сайтов, 3D конфигураторы, веб-приложения, корпоративные порталы, разработка сайтов Астана, React, Next.js, AR VR веб"
        canonicalUrl="https://avrgroup.kz/services/web-development"
        ogImage="/images/web-development-og.jpg"
      />
      
            <main className="min-h-screen bg-black text-white">
        <Header />
        
        <Breadcrumbs
          items={[
            { label: 'Главная', href: '/' },
            { label: 'Услуги', href: '/services' },
            { label: 'Веб-разработка' }
          ]}
        />
        
        {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <GeometricBackground />
        <div className="container mx-auto relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-center md:text-left"
            >
              <h1 className="text-4xl md:text-7xl font-bold mb-6">
                Профессиональная веб-разработка
              </h1>
              <p className="text-gray-400 text-lg mb-8 max-w-3xl mx-auto">
                Создаем современные веб-сайты и веб-приложения любой сложности. От корпоративных порталов до высоконагруженных платформ. Используем передовые технологии и фреймворки.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex-1 relative"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-white/20 to-white/10 rounded-xl opacity-30 blur-xl"></div>
                <div className="relative overflow-hidden rounded-xl border border-white/10">
                  <div className="aspect-w-16 aspect-h-9 relative">
                    <Image
                      src="https://images.unsplash.com/photo-1547658719-da2b51169166"
                      alt="Веб-разработка"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-zinc-900/50 backdrop-blur-sm relative">
        <GeometricBackground />
        <div className="container mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Возможности</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Наши веб-решения предоставляют широкий спектр возможностей для вашего бизнеса
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: '3D-конфигураторы',
                description: 'Увеличиваем конверсию до 45% за счет интерактивной визуализации продукции. Сокращаем цикл продаж на 60%.'
              },
              {
                title: 'Веб-платформы',
                description: 'Разрабатываем масштабируемые решения с высокой производительностью. Поддержка более 100 000 пользователей одновременно.'
              },
              {
                title: 'Корпоративные порталы',
                description: 'Автоматизируем бизнес-процессы и увеличиваем эффективность работы сотрудников на 40%. Окупаемость от 6 месяцев.'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
              >
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4 bg-black relative">
        <GeometricBackground />
        <div className="container mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Наши проекты</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Примеры реализованных веб-решений
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {webProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 bg-zinc-900/50 backdrop-blur-sm relative">
        <GeometricBackground />
        <div className="container mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Технологии</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Используем современный стек технологий для создания надежных и масштабируемых решений
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { name: 'React', description: 'Современный фронтенд' },
              { name: 'Three.js', description: '3D визуализация' },
              { name: 'Node.js', description: 'Быстрый бэкенд' },
              { name: 'WebGL', description: 'Графика в браузере' },
              { name: 'WebXR', description: 'VR/AR в вебе' },
              { name: 'TypeScript', description: 'Надежный код' }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 text-center"
              >
                <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
                <p className="text-gray-400 text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-black relative">
        <GeometricBackground />
        <div className="container mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Полный спектр услуг по разработке веб-решений
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Корпоративные порталы',
                description: 'Разработка современных корпоративных порталов с интеграцией внутренних систем, аналитикой и управлением контентом.',
                features: ['Личные кабинеты', 'Документооборот', 'Аналитика', 'API интеграции']
              },
              {
                title: '3D Конфигураторы',
                description: 'Создание интерактивных 3D конфигураторов продукции с возможностью кастомизации и онлайн-заказа.',
                features: ['Реалистичная визуализация', 'Кастомизация', 'Экспорт спецификаций', 'Интеграция с CRM']
              },
              {
                title: 'Веб-платформы',
                description: 'Разработка масштабируемых веб-платформ для автоматизации бизнес-процессов и управления данными.',
                features: ['Высокая производительность', 'Масштабируемость', 'Безопасность', 'Аналитика']
              },
              {
                title: 'E-commerce решения',
                description: 'Создание современных интернет-магазинов с 3D-визуализацией товаров и интеграцией платежных систем.',
                features: ['3D просмотр товаров', 'Онлайн оплата', 'Интеграция с 1С', 'Аналитика продаж']
              },
              {
                title: 'WebXR приложения',
                description: 'Разработка веб-приложений с поддержкой виртуальной и дополненной реальности.',
                features: ['VR/AR в браузере', 'Кроссплатформенность', '3D визуализация', 'Интерактивность']
              },
              {
                title: 'Интеграционные решения',
                description: 'Разработка API и интеграция различных систем и сервисов в единую экосистему.',
                features: ['REST API', 'Микросервисы', 'Синхронизация данных', 'Мониторинг']
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
              >
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-gray-400 flex items-center text-sm">
                      <span className="w-1 h-1 bg-white rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-zinc-900/50 backdrop-blur-sm relative">
        <GeometricBackground />
        <div className="container mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Процесс разработки</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Прозрачный и эффективный процесс создания веб-решений
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Анализ требований',
                description: 'Детально изучаем ваши потребности, анализируем бизнес-процессы и формируем техническое задание'
              },
              {
                step: '02',
                title: 'Проектирование',
                description: 'Создаем прототипы интерфейсов, проектируем архитектуру и выбираем оптимальные технологии'
              },
              {
                step: '03',
                title: 'Разработка',
                description: 'Пишем чистый и масштабируемый код, регулярно демонстрируем результаты и собираем обратную связь'
              },
              {
                step: '04',
                title: 'Запуск и поддержка',
                description: 'Проводим тестирование, запускаем проект и обеспечиваем техническую поддержку'
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
              >
                <div className="text-4xl font-bold text-white/20 mb-4">{process.step}</div>
                <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                <p className="text-gray-400">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-black relative">
        <GeometricBackground />
        <div className="container mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Частые вопросы</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Ответы на популярные вопросы о веб-разработке
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: 'Сколько стоит разработка веб-проекта?',
                answer: 'Стоимость зависит от сложности и функционала. Мы предоставляем детальную смету после анализа требований.'
              },
              {
                question: 'Какие сроки разработки?',
                answer: 'Простой сайт - от 2 недель, сложная веб-платформа - от 2 месяцев. Точные сроки определяются после согласования технического задания.'
              },
              {
                question: 'Предоставляете ли гарантию?',
                answer: 'Да, мы предоставляем гарантийную поддержку в течение 6 месяцев после запуска проекта. Исправляем баги и вносим мелкие правки бесплатно.'
              },
              {
                question: 'Как организована поддержка?',
                answer: 'Мы обеспечиваем техническую поддержку 24/7, регулярные обновления и мониторинг производительности. Время реакции на критические проблемы - до 2 часов.'
              }
            ].map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
              >
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-zinc-900/50 backdrop-blur-sm relative">
        <GeometricBackground />
        <div className="container mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Создайте сайт будущего</h2>
              <p className="text-gray-400 mb-8">
                Получите бесплатную консультацию и прототип вашего веб-проекта
              </p>
            </div>
            <div className="text-center">
              <a 
                href="https://wa.me/77776875411?text=Здравствуйте! Хочу обсудить разработку веб-сайта с AVR Group"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors text-lg"
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Написать в WhatsApp
              </a>
              <p className="text-gray-500 text-sm mt-4">
                Или позвоните: <a href="tel:+77776875411" className="text-blue-400 hover:text-blue-300">+7 777 687 54 11</a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
    </>
  );
} 