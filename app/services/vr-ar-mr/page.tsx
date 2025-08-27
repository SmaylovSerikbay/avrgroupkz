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
                VR/AR/MR разработка
              </h1>
              <p className="text-gray-400 text-lg mb-8 max-w-3xl mx-auto">
                Создаем инновационные решения в области виртуальной, дополненной и смешанной реальности. Разрабатываем иммерсивные приложения для бизнеса, образования и развлечений.
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
                      src="https://images.unsplash.com/photo-1617802690992-15d93263d3a9"
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Наши услуги включают:</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'VR разработка',
                description: 'Создание виртуальных миров и интерактивных VR приложений для бизнеса, обучения и развлечений.',
                icon: (
                  <svg className="w-8 h-8 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                title: 'AR решения',
                description: 'Разработка приложений с дополненной реальностью для визуализации продуктов и интерактивного взаимодействия.',
                icon: (
                  <svg className="w-8 h-8 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )
              },
              {
                title: 'MR приложения',
                description: 'Создание приложений смешанной реальности, объединяющих виртуальные объекты с реальным миром.',
                icon: (
                  <svg className="w-8 h-8 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                )
              },
              {
                title: '3D моделирование',
                description: 'Создание высококачественных 3D моделей и анимаций для VR/AR/MR проектов.',
                icon: (
                  <svg className="w-8 h-8 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                  </svg>
                )
              },
              {
                title: 'Интерактивные презентации',
                description: 'Разработка интерактивных VR/AR презентаций для выставок, шоурумов и маркетинговых мероприятий.',
                icon: (
                  <svg className="w-8 h-8 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                )
              },
              {
                title: 'Техническая поддержка',
                description: 'Обслуживание и обновление VR/AR/MR приложений, консультации по использованию.',
                icon: (
                  <svg className="w-8 h-8 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-white/5 to-transparent rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
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
              Примеры реализованных VR/AR/MR решений
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {vrProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-zinc-900/50 backdrop-blur-sm relative">
        <GeometricBackground />
        <div className="container mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Преимущества VR/AR решений</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Почему ведущие компании выбирают виртуальную и дополненную реальность
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Экономия на обучении',
                description: 'Снижение затрат на обучение персонала до 60% за счет виртуальных тренажеров',
                metric: '60%'
              },
              {
                title: 'Безопасность',
                description: 'Полное исключение рисков при отработке опасных операций в VR',
                metric: '100%'
              },
              {
                title: 'Эффективность',
                description: 'Повышение усвоения материала за счет полного погружения',
                metric: '80%'
              },
              {
                title: 'Окупаемость',
                description: 'Быстрый возврат инвестиций за счет экономии на оборудовании',
                metric: '6-12 мес'
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
              >
                <div className="text-3xl font-bold text-white mb-2">{benefit.metric}</div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 bg-black relative">
        <GeometricBackground />
        <div className="container mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Отрасли применения</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              VR/AR технологии эффективно применяются в различных сферах бизнеса
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Промышленность',
                description: 'Обучение работе со сложным оборудованием, симуляция аварийных ситуаций, визуализация производственных процессов'
              },
              {
                title: 'Медицина',
                description: 'Тренировка хирургических навыков, визуализация анатомии, реабилитация пациентов'
              },
              {
                title: 'Retail',
                description: 'Виртуальные примерочные, конфигураторы товаров, интерактивные каталоги'
              },
              {
                title: 'Строительство',
                description: 'Визуализация проектов, планирование работ, обучение технике безопасности'
              },
              {
                title: 'Образование',
                description: 'Интерактивные обучающие программы, виртуальные лаборатории, симуляторы'
              },
              {
                title: 'Нефть и газ',
                description: 'Тренажеры для отработки действий на месторождении, визуализация месторождений'
              }
            ].map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
              >
                <h3 className="text-xl font-bold mb-3">{industry.title}</h3>
                <p className="text-gray-400">{industry.description}</p>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Как мы работаем</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Прозрачный процесс разработки от идеи до внедрения
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              Ответы на популярные вопросы о VR/AR/MR решениях
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: 'Сколько стоит внедрение VR/AR решений?',
                answer: 'Стоимость зависит от сложности и масштаба проекта. Мы предоставляем детальную смету после анализа требований.'
              },
              {
                question: 'Какие сроки реализации?',
                answer: 'Простой AR-контент - от 2 недель, сложная VR-система - от 2 месяцев. Точные сроки определяются после технического аудита.'
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
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Создайте иммерсивный опыт</h2>
              <p className="text-gray-400 mb-8">
                Получите бесплатную консультацию и прототип вашего VR/AR/MR проекта
              </p>
            </div>
            <div className="text-center">
              <a 
                href="https://wa.me/77776875411?text=Здравствуйте! Хочу обсудить VR/AR/MR проект с AVR Group"
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