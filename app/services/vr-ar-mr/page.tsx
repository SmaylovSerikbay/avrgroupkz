'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ProjectCard } from '../../components/Cards';
import { GeometricBackground } from '../../components/GeometricElements';
import Header from '../../components/Header';
import { projects as allProjects } from '../../data/projects';
import { Project } from '../../types';

const vrProjects = allProjects.filter((project: Project) => project.service === 'vr-ar-mr');

export default function VRARMRPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      
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
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
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
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
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
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
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
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
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
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
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
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
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
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
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
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
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
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
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
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Частые вопросы</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Ответы на популярные вопросы о VR/AR решениях
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: 'Какое оборудование требуется?',
                answer: 'Для большинства решений достаточно стандартных VR-шлемов или мобильных устройств. Мы поможем подобрать оптимальное оборудование под ваши задачи.'
              },
              {
                question: 'Сколько времени занимает разработка?',
                answer: 'Сроки зависят от сложности проекта. Прототип можем создать за 2-3 недели, полноценное решение - от 2 месяцев.'
              },
              {
                question: 'Как оценить эффективность внедрения?',
                answer: 'Мы предоставляем подробную аналитику и метрики эффективности: время обучения, количество ошибок, уровень усвоения материала и др.'
              },
              {
                question: 'Какая поддержка предоставляется?',
                answer: 'Мы обеспечиваем полное сопровождение: обучение персонала, техническую поддержку, обновления и доработки по запросу.'
              }
            ].map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
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
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Начните экономить уже сегодня</h2>
              <p className="text-gray-400 mb-8">
                Получите бесплатную консультацию и расчет стоимости внедрения VR/AR решений для вашего бизнеса
              </p>
            </div>
            <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-white/10">
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full p-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/30"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/30"
                />
                <textarea
                  placeholder="Опишите ваш проект"
                  rows={4}
                  className="w-full p-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/30"
                ></textarea>
                <button className="w-full py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors duration-300">
                  Отправить
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 