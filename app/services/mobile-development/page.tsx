'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ProjectCard } from '../../components/Cards';
import { GeometricBackground } from '../../components/GeometricElements';
import Header from '../../components/Header';
import { projects as allProjects } from '../../data/projects';
import { Project } from '../../types';
import SEOMeta from '../../components/SEOMeta';
import FAQSection from '../../components/FAQSection';
import CTASection from '../../components/CTASection';
import Breadcrumbs from '../../components/Breadcrumbs';

const mobileProjects = allProjects.filter((project: Project) => project.service === 'mobile-development');

export default function MobileDevelopmentPage() {
  return (
    <>
      <SEOMeta
        title="Разработка мобильных приложений в Астане | AVR Group - iOS, Android, Flutter"
        description="Создаем нативные и кроссплатформенные мобильные приложения для iOS и Android. Разработка под ключ с AR-функциями. Бесплатная консультация. Сроки: 2-3 месяца. Звоните: +7 777 687 54 11"
        keywords="разработка мобильных приложений, мобильное приложение Астана, iOS разработка, Android разработка, Flutter разработка, React Native, AR приложения, создание приложений, разработка под ключ"
        canonicalUrl="https://avrgroup.kz/services/mobile-development"
        ogImage="/images/mobile-development-og.jpg"
      />
      
      <main className="min-h-screen bg-black text-white">
        <Header />
        
        <Breadcrumbs
          items={[
            { label: 'Главная', href: '/' },
            { label: 'Услуги', href: '/services' },
            { label: 'Мобильная разработка' }
          ]}
        />
        
        {/* Hero Section - Более продающий */}
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
                <div className="inline-flex items-center px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-400 text-sm font-medium mb-6">
                  📱 Мобильные технологии 2024
                </div>
                <h1 className="text-4xl md:text-7xl font-bold mb-6">
                  Разработка мобильных приложений
                </h1>
                <p className="text-gray-300 text-xl mb-8 max-w-3xl mx-auto">
                  <strong>Увеличиваем конверсию на 50-70%</strong> с помощью AR-функций и интерактивных возможностей. 
                  Создаем приложения за <strong>2-3 месяца</strong> с гарантией качества.
                </p>
                
                {/* CTA кнопки в hero секции */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
                  <motion.a
                    href="https://wa.me/77776875411?text=Здравствуйте! Хочу обсудить разработку мобильного приложения с AVR Group"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-all duration-300 text-lg shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    Получить бесплатную консультацию
                  </motion.a>
                  
                  <motion.a
                    href="tel:+77776875411"
                    className="inline-flex items-center px-8 py-4 border border-white/20 hover:border-white/40 text-white rounded-lg font-medium transition-all duration-300 text-lg hover:bg-white/10"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-6 h-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Позвонить сейчас
                  </motion.a>
                </div>

                {/* Статистика для доверия */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-purple-500">50-70%</div>
                    <div className="text-sm text-gray-400">Рост конверсии</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-purple-500">2-3</div>
                    <div className="text-sm text-gray-400">Месяца разработки</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-purple-500">40%</div>
                    <div className="text-sm text-gray-400">Экономия на разработке</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-purple-500">6 мес</div>
                    <div className="text-sm text-gray-400">Окупаемость</div>
                  </div>
                </div>
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
                        src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c"
                        alt="Разработка мобильных приложений iOS Android Flutter React Native"
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

        {/* Quick Benefits - Компактная секция с преимуществами */}
        <section className="py-16 px-4 bg-zinc-900/50 backdrop-blur-sm relative">
          <GeometricBackground />
          <div className="container mx-auto relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: '🚀 Быстрый запуск',
                  description: 'От идеи до публикации за 2-3 месяца',
                  highlight: '2-3 месяца'
                },
                {
                  title: '💰 Оптимизация затрат',
                  description: 'До 40% экономии за счет кроссплатформенности',
                  highlight: '40%'
                },
                {
                  title: '📈 Высокая конверсия',
                  description: 'Увеличение конверсии на 50-70% с AR',
                  highlight: '50-70%'
                }
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
                >
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-400 mb-4">{benefit.description}</p>
                  <div className="text-3xl font-bold text-purple-500">{benefit.highlight}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services - Компактная секция с услугами */}
        <section className="py-16 px-4 bg-black relative">
          <GeometricBackground />
          <div className="container mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Что мы создаем</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Полный спектр мобильных решений для вашего бизнеса
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'iOS приложения',
                  description: 'Нативные приложения для iPhone и iPad. Интеграция с Apple экосистемой.',
                  price: 'от 800,000 ₸',
                  duration: '2-3 месяца'
                },
                {
                  title: 'Android приложения',
                  description: 'Приложения для Android устройств. Material Design и Android guidelines.',
                  price: 'от 700,000 ₸',
                  duration: '2-3 месяца'
                },
                {
                  title: 'Кроссплатформенные приложения',
                  description: 'Flutter и React Native. Экономия до 40% на разработке.',
                  price: 'от 600,000 ₸',
                  duration: '2-3 месяца'
                },
                {
                  title: 'AR приложения',
                  description: 'ARKit и ARCore. Визуализация продуктов и интерактивность.',
                  price: 'от 1,200,000 ₸',
                  duration: '3-4 месяца'
                },
                {
                  title: 'Корпоративные решения',
                  description: 'Бизнес-приложения с учетом специфики и безопасности.',
                  price: 'от 1,500,000 ₸',
                  duration: '3-5 месяцев'
                },
                {
                  title: 'E-commerce приложения',
                  description: 'Интернет-магазины с AR-функциями и платежами.',
                  price: 'от 900,000 ₸',
                  duration: '2-4 месяца'
                }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="text-purple-500 font-bold">{service.price}</div>
                    <div className="text-gray-500 text-sm">{service.duration}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio - Компактная секция с проектами */}
        <section className="py-16 px-4 bg-zinc-900/50 backdrop-blur-sm relative">
          <GeometricBackground />
          <div className="container mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Наши проекты</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Примеры реализованных мобильных приложений для различных отраслей
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mobileProjects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Technologies - Компактная секция с технологиями */}
        <section className="py-16 px-4 bg-black relative">
          <GeometricBackground />
          <div className="container mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Технологии</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Используем передовые технологии для создания мобильных приложений
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { name: 'Flutter', description: 'Кроссплатформенная разработка' },
                { name: 'React Native', description: 'Нативный опыт' },
                { name: 'Swift', description: 'iOS разработка' },
                { name: 'Kotlin', description: 'Android разработка' },
                { name: 'ARKit', description: 'AR для iOS' },
                { name: 'ARCore', description: 'AR для Android' }
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

        {/* Process - Компактная секция с процессом */}
        <section className="py-16 px-4 bg-zinc-900/50 backdrop-blur-sm relative">
          <GeometricBackground />
          <div className="container mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Процесс разработки</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Прозрачный и эффективный процесс создания мобильных приложений
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: '01',
                  title: 'Анализ и планирование',
                  description: 'Изучаем ваши требования, проводим анализ рынка и создаем детальный план разработки'
                },
                {
                  step: '02',
                  title: 'Дизайн и прототип',
                  description: 'Разрабатываем UI/UX дизайн и создаем интерактивный прототип приложения'
                },
                {
                  step: '03',
                  title: 'Разработка',
                  description: 'Пишем чистый и оптимизированный код, регулярно показываем результаты'
                },
                {
                  step: '04',
                  title: 'Тестирование и запуск',
                  description: 'Проводим тщательное тестирование и публикуем приложение в магазинах'
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
                  <p className="text-gray-400 text-sm">{process.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ - Компактная секция с вопросами */}
        <FAQSection
          title="Частые вопросы"
          subtitle="Ответы на популярные вопросы о мобильной разработке"
          faqs={[
            {
              question: 'Сколько стоит разработка мобильного приложения?',
              answer: 'Стоимость зависит от сложности: простое приложение от 600,000 ₸, сложное с AR-функциями от 1,500,000 ₸. Предоставляем детальную смету после анализа требований.'
            },
            {
              question: 'Какие сроки разработки?',
              answer: 'Среднее время разработки 2-3 месяца. Простое приложение можем сделать за 1.5 месяца, сложное решение с AR может занять 4-6 месяцев. Работаем по Agile методологии.'
            },
            {
              question: 'Как происходит процесс разработки?',
              answer: 'Работаем по Agile методологии с двухнедельными спринтами. Каждые 2 недели показываем работающий прототип и собираем обратную связь. Используем современные инструменты для отслеживания прогресса.'
            },
            {
              question: 'Какую поддержку вы оказываете?',
              answer: 'Предоставляем 6 месяцев бесплатной поддержки, включая исправление багов и мелкие доработки. Далее поддержка по договору. Также предлагаем планы обслуживания с приоритетной поддержкой.'
            },
            {
              question: 'Можете ли вы разработать приложение с AR-функциями?',
              answer: 'Да, специализируемся на AR-разработке для iOS (ARKit) и Android (ARCore). Создаем интерактивные AR-конфигураторы, визуализацию продуктов и образовательные AR-приложения.'
            },
            {
              question: 'Как происходит публикация в App Store и Google Play?',
              answer: 'Помогаем с подготовкой всех необходимых материалов для публикации: скриншоты, описания, иконки. Осуществляем публикацию и проходим модерацию. При необходимости помогаем с отзывами на отклонения.'
            }
          ]}
        />

        {/* CTA - Продающая секция с призывом к действию */}
        <CTASection
          title="Создайте приложение будущего"
          subtitle="Получите бесплатную консультацию и прототип вашего мобильного приложения. Начните проект уже сегодня!"
          primaryButtonText="Получить бесплатную консультацию"
          primaryButtonUrl="https://wa.me/77776875411?text=Здравствуйте! Хочу обсудить разработку мобильного приложения с AVR Group"
          secondaryButtonText="Позвонить сейчас"
          secondaryButtonUrl="tel:+77776875411"
          urgencyText="Ограниченное количество проектов на 2024 год"
          className="bg-zinc-900/50"
        />
      </main>
    </>
  );
} 