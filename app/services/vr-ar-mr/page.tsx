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

const vrProjects = allProjects.filter((project: Project) => project.service === 'vr-ar-mr');

export default function VRARMRPage() {
  return (
    <>
      <SEOMeta
        title="VR/AR/MR разработка в Астане | AVR Group - Виртуальная и дополненная реальность"
        description="Создаем инновационные VR/AR/MR решения для бизнеса, образования и развлечений. Разработка под ключ с иммерсивными технологиями. Бесплатная консультация. Звоните: +7 777 687 54 11"
        keywords="VR разработка, AR разработка, MR разработка, виртуальная реальность, дополненная реальность, смешанная реальность, VR приложения, AR приложения, Unity, Unreal Engine, Астана"
        canonicalUrl="https://avrgroup.kz/services/vr-ar-mr"
        ogImage="/images/vr-ar-mr-og.jpg"
      />
      
      <main className="min-h-screen bg-black text-white">
        <Header />
        
        <Breadcrumbs
          items={[
            { label: 'Главная', href: '/' },
            { label: 'Услуги', href: '/services' },
            { label: 'VR/AR/MR разработка' }
          ]}
        />
        
        {/* Hero Section - Более продающий */}
        <section className="pt-20 md:pt-32 pb-16 px-4 relative overflow-hidden">
          <GeometricBackground />
          <div className="container mx-auto relative">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1 text-center md:text-left"
              >
                <div className="inline-flex items-center px-4 py-2 bg-green-600/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-4 md:mb-6">
                  🚀 Инновационные технологии 2025
                </div>
                <h1 className="text-4xl md:text-7xl font-bold mb-4 md:mb-6">
                  VR/AR/MR разработка
                </h1>
                <p className="text-gray-300 text-xl mb-8 max-w-3xl mx-auto">
                  <strong>Увеличиваем продажи на 40-70%</strong> с помощью иммерсивных технологий. 
                  Создаем VR/AR решения для вашего бизнеса за <strong>2-4 месяца</strong>.
                </p>
                
                {/* CTA кнопки в hero секции */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
                  <motion.a
                    href="https://wa.me/77776875411?text=Здравствуйте! Хочу обсудить VR/AR/MR проект с AVR Group"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all duration-300 text-lg shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
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
                    <div className="text-2xl md:text-3xl font-bold text-green-500">40-70%</div>
                    <div className="text-sm text-gray-400">Рост продаж</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-green-500">2-4</div>
                    <div className="text-sm text-gray-400">Месяца разработки</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-green-500">60%</div>
                    <div className="text-sm text-gray-400">Экономия на обучении</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-green-500">6-12 мес</div>
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
                        src="/images/vr-training.jpg"
                        alt="VR технологии"
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
                  title: '🚀 Быстрый результат',
                  description: 'От идеи до готового решения за 2-4 месяца',
                  highlight: '2-4 месяца'
                },
                {
                  title: '💰 Высокая окупаемость',
                  description: 'Возврат инвестиций за 6-12 месяцев',
                  highlight: '6-12 месяцев'
                },
                {
                  title: '📈 Рост продаж',
                  description: 'Увеличение конверсии на 40-70%',
                  highlight: '40-70%'
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
                  <div className="text-3xl font-bold text-green-500">{benefit.highlight}</div>
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
                Полный спектр VR/AR/MR решений для вашего бизнеса
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'VR Тренажеры',
                  description: 'Обучение персонала без рисков. Экономия до 60% на обучении.',
                  price: 'от 800,000 ₸',
                  duration: '2-3 месяца'
                },
                {
                  title: 'AR Конфигураторы',
                  description: 'Визуализация продуктов в реальном времени. Рост продаж на 50%.',
                  price: 'от 500,000 ₸',
                  duration: '1-2 месяца'
                },
                {
                  title: 'VR Шоурумы',
                  description: 'Виртуальные выставки и презентации. Экономия на аренде.',
                  price: 'от 1,200,000 ₸',
                  duration: '3-4 месяца'
                },
                {
                  title: 'AR Обучение',
                  description: 'Интерактивные обучающие программы. Повышение эффективности.',
                  price: 'от 600,000 ₸',
                  duration: '2-3 месяца'
                },
                {
                  title: 'MR Приложения',
                  description: 'Смешанная реальность для сложных задач. Инновационные решения.',
                  price: 'от 1,500,000 ₸',
                  duration: '4-6 месяцев'
                },
                {
                  title: 'VR Развлечения',
                  description: 'Иммерсивные игры и развлечения. Новый источник дохода.',
                  price: 'от 1,000,000 ₸',
                  duration: '3-5 месяцев'
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
                    <div className="text-green-500 font-bold">{service.price}</div>
                    <div className="text-gray-500 text-sm">{service.duration}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries - Компактная секция с отраслями */}
        <section className="py-16 px-4 bg-zinc-900/50 backdrop-blur-sm relative">
          <GeometricBackground />
          <div className="container mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Для каких отраслей</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                VR/AR технологии эффективно применяются в различных сферах бизнеса
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: '🏭 Промышленность',
                  description: 'Обучение работе со сложным оборудованием, симуляция аварийных ситуаций',
                  benefit: 'Снижение травматизма на 80%'
                },
                {
                  title: '🏥 Медицина',
                  description: 'Тренировка хирургических навыков, визуализация анатомии',
                  benefit: 'Повышение точности на 60%'
                },
                {
                  title: '🛍️ Retail',
                  description: 'Виртуальные примерочные, конфигураторы товаров',
                  benefit: 'Рост продаж на 45%'
                },
                {
                  title: '🏗️ Строительство',
                  description: 'Визуализация проектов, планирование работ',
                  benefit: 'Сокращение ошибок на 70%'
                },
                {
                  title: '🎓 Образование',
                  description: 'Интерактивные обучающие программы, виртуальные лаборатории',
                  benefit: 'Улучшение усвоения на 80%'
                },
                {
                  title: '⛽ Нефть и газ',
                  description: 'Тренажеры для отработки действий на месторождении',
                  benefit: 'Экономия на обучении 60%'
                }
              ].map((industry, index) => (
                <motion.div
                  key={industry.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
                >
                  <h3 className="text-xl font-bold mb-3">{industry.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm">{industry.description}</p>
                  <div className="text-green-500 font-bold text-sm">{industry.benefit}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio - Компактная секция с проектами */}
        <section className="py-16 px-4 bg-black relative">
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
                Реализованные VR/AR/MR решения для различных отраслей
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {vrProjects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
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
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Как мы работаем</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Прозрачный процесс разработки от идеи до внедрения
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: '01',
                  title: 'Анализ',
                  description: 'Изучаем ваши бизнес-процессы и определяем, где VR/AR принесет максимальную пользу'
                },
                {
                  step: '02',
                  title: 'Прототип',
                  description: 'Создаем рабочий прототип для тестирования концепции и сбора обратной связи'
                },
                {
                  step: '03',
                  title: 'Разработка',
                  description: 'Разрабатываем полноценное решение с учетом всех требований и особенностей'
                },
                {
                  step: '04',
                  title: 'Внедрение',
                  description: 'Помогаем с внедрением, обучаем персонал и обеспечиваем техническую поддержку'
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
        <section className="py-16 px-4 bg-black relative">
          <GeometricBackground />
          <div className="container mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Частые вопросы</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Ответы на популярные вопросы о VR/AR/MR решениях
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  question: 'Сколько стоит внедрение VR/AR решений?',
                  answer: 'Стоимость зависит от сложности: простой AR-контент от 500,000 ₸, сложная VR-система от 1,500,000 ₸. Предоставляем детальную смету после анализа требований.'
                },
                {
                  question: 'Какие сроки реализации?',
                  answer: 'Простой AR-контент - от 1 месяца, сложная VR-система - от 4 месяцев. Работаем по Agile методологии с регулярными демонстрациями.'
                },
                {
                  question: 'Какое оборудование требуется?',
                  answer: 'Поддерживаем все популярные VR/AR устройства: Meta Quest, HTC Vive, Microsoft HoloLens, а также мобильные AR для смартфонов.'
                },
                {
                  question: 'Как организована поддержка?',
                  answer: 'Предоставляем 6 месяцев бесплатной поддержки, включая обновления контента и техническую помощь. Далее поддержка по договору.'
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
                  <p className="text-gray-400 text-sm">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact - Продающая секция с призывом к действию */}
        <section className="py-20 px-4 bg-zinc-900/50 backdrop-blur-sm relative">
          <GeometricBackground />
          <div className="container mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="mb-8">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Создайте иммерсивный опыт</h2>
                <p className="text-gray-300 text-lg mb-6">
                  Получите бесплатную консультацию и прототип вашего VR/AR/MR проекта
                </p>
                <div className="inline-flex items-center px-4 py-2 bg-red-600/20 border border-red-500/30 rounded-full text-red-400 text-sm font-medium mb-6">
                  ⏰ Ограниченное количество проектов на 2025 год
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                  <h3 className="text-xl font-bold mb-3">🎁 Что вы получаете бесплатно:</h3>
                  <ul className="text-gray-400 text-sm space-y-2 text-left">
                    <li>• Анализ ваших бизнес-процессов</li>
                    <li>• Техническое задание проекта</li>
                    <li>• Прототип решения</li>
                    <li>• Детальную смету</li>
                    <li>• План внедрения</li>
                  </ul>
                </div>
                <div className="p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                  <h3 className="text-xl font-bold mb-3">⚡ Специальное предложение:</h3>
                  <ul className="text-gray-400 text-sm space-y-2 text-left">
                    <li>• Скидка 15% при заказе до конца месяца</li>
                    <li>• Бесплатная техническая поддержка 12 месяцев</li>
                    <li>• Обучение персонала работе с системой</li>
                    <li>• Помощь с внедрением и запуском</li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center">
                <a 
                  href="https://wa.me/77776875411?text=Здравствуйте! Хочу обсудить VR/AR/MR проект с AVR Group"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors text-lg shadow-lg hover:shadow-xl"
                >
                  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Получить бесплатную консультацию
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