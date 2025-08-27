'use client';
import { CubeIcon, DevicePhoneMobileIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { AnimatedEye } from './components/AnimatedEye';
import { ProjectCard, ServiceCard } from './components/Cards';
import { GeometricBackground } from './components/GeometricElements';
import Header from './components/Header';
import { RecommendationCard } from './components/RecommendationCard';
import { TechMarquee } from './components/TechMarquee';
import { projects } from './data/projects';

const services = [
  {
    icon: CubeIcon,
    title: 'VR/AR/MR решения',
    description: 'Создаем иммерсивные решения для бизнеса, образования и развлечений',
    features: [
      'Виртуальные тренажеры',
      'AR-приложения',
      'Визуализация данных',
      'Интерактивные презентации'
    ]
  },
  {
    icon: GlobeAltIcon,
    title: 'Веб-разработка',
    description: 'Разрабатываем современные веб-приложения любой сложности',
    features: [
      'Корпоративные порталы',
      'Интернет-магазины',
      'CRM-системы',
      'Высоконагруженные сервисы'
    ]
  },
  {
    icon: DevicePhoneMobileIcon,
    title: 'Мобильная разработка',
    description: 'Создаем нативные и кроссплатформенные мобильные приложения',
    features: [
      'iOS приложения',
      'Android приложения',
      'React Native',
      'Flutter'
    ]
  }
];

const recommendations = [
  {
    name: 'Астана Балет',
    position: 'Театр',
    company: 'Министерство культуры и спорта РК',
    text: 'ТОО «AVR Group» является партнером в области разработки технологий виртуальной реальности. Вместе мы разработали первый в Казахстане театральный стриминговый сервис с возможностью просмотра спектаклей в 360°. Компания проявила себя как компетентный, ответственный партнер, способный выполнить качественную работу в срок.',
    originalImage: '/images/40001.jpg',
    date: '2018'
  },
  {
    name: 'HTC Россия и СНГ',
    position: 'Официальный партнер',
    company: 'HTC Corp.',
    text: 'Подтверждаем, что компания ТОО «AVR Group», расположенная по адресу: Казахстан, Астана ул. Селеты д.12, является официальным партнером компании HTC Corp., представленной в России филиалом «HTC BELGIUM».',
    originalImage: '/images/full_p9idm1wJ.jpg',
    date: '30 октября 2018'
  },
  {
    name: 'Astana Property Management',
    position: 'Управляющая компания',
    company: 'Недвижимость Астаны',
    text: 'Компания ТОО «Astana Property Management» благодарит команду специалистов компании «AVR GROUP» за оперативную разработку приложения с виртуальной реальностью (VR для планшетов, смартфонов). Продукт для «The Ritz-Carlton Residences, Astana» получился ярким, необычным и запоминающимся.',
    originalImage: '/images/full_Qp9UkPtS.jpg',
    date: '28 декабря 2017'
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "AVR Group",
            "url": "https://avrgroup.kz",
            "logo": "https://avrgroup.kz/logo.png",
            "description": "Ведущая IT компания в Астане. Разработка сайтов, мобильных приложений, VR/AR/MR решений.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "ул. Куйши Дина, д. 14, офис 46",
              "addressLocality": "Астана",
              "postalCode": "010000",
              "addressCountry": "KZ"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+7-708-544-6945",
              "contactType": "customer service",
              "email": "info@avrgroup.kz"
            },
            "sameAs": [
              "https://www.facebook.com/avrgroup",
              "https://www.instagram.com/avr.group"
            ]
          })
        }}
      />
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
                Разработка IT решений для бизнеса
              </h1>
              <p className="text-gray-400 text-lg mb-8 max-w-3xl mx-auto">
                Создаем комплексные цифровые решения: веб-сайты, мобильные приложения, корпоративные системы, VR/AR/MR технологии. Помогаем бизнесу расти через инновационные IT решения.
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              >
                <Link href="#contact">
                  <button className="px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors duration-300 shadow-lg hover:shadow-xl">
                    Обсудить проект
                  </button>
                </Link>
                <Link href="/projects">
                  <button className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-colors duration-300">
                    Наши работы
                  </button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="grid grid-cols-3 gap-8 md:gap-4 mt-12"
              >
                {[
                  { number: '50+', label: 'Реализованных проектов' },
                  { number: '50+', label: 'Довольных клиентов' },
                  { number: '8+', label: 'Лет опыта' },
                ].map((stat, index) => (
                  <div key={index} className="text-center p-3 md:p-0">
                    <div className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-2">{stat.number}</div>
                    <div className="text-sm md:text-sm text-gray-400 leading-relaxed px-2">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex-1 relative"
            >
              <div className="relative">
                <div className="relative">
                  <AnimatedEye />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Marquee */}
      <TechMarquee />

      {/* Services Section */}
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Полный спектр IT услуг: от разработки сайтов до создания виртуальной реальности. Индивидуальный подход к каждому проекту.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      

      {/* Portfolio Section */}
      <section className="py-20 px-4 bg-zinc-900/50 backdrop-blur-sm relative">
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
              Портфолио успешно реализованных проектов в сфере веб-разработки, мобильных приложений и иммерсивных технологий
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-zinc-900/50 backdrop-blur-sm relative">
        <GeometricBackground />
        <div className="container mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Рекомендации партнеров</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Официальные рекомендательные письма от ведущих компаний и государственных учреждений
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recommendations.map((recommendation, index) => (
              <RecommendationCard key={recommendation.name} recommendation={recommendation} index={index} />
            ))}
          </div>
          
          {/* View All Button */}
          <div className="text-center mt-12">
            <Link href="/recommendations">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-colors border border-white/20 hover:border-white/40"
              >
                Посмотреть все рекомендации
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-zinc-900/50 backdrop-blur-sm relative">
        <GeometricBackground />
        <div className="container mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Обсудим ваш проект?</h2>
              <p className="text-gray-400 mb-8">
                Свяжитесь с нами для консультации по вашему проекту. Создадим индивидуальное IT решение для развития вашего бизнеса.
              </p>
            </div>
            <div className="text-center">
              <a 
                href="https://wa.me/77776875411?text=Здравствуйте! Хочу обсудить проект с AVR Group"
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

      {/* Footer */}
      <footer className="bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">О компании</h3>
              <p className="text-gray-400 text-sm mb-4">
                AVR Group - инновационная компания, специализирующаяся на разработке передовых решений в области VR/AR/MR технологий, 
                мобильной и веб-разработки. Мы создаем технологии будущего для вашего бизнеса уже сегодня.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/vr-ar-mr" className="text-gray-400 hover:text-white transition-colors">
                    VR/AR/MR решения
                  </Link>
                </li>
                <li>
                  <Link href="/services/web-development" className="text-gray-400 hover:text-white transition-colors">
                    Веб-разработка
                  </Link>
                </li>
                <li>
                  <Link href="/services/mobile-development" className="text-gray-400 hover:text-white transition-colors">
                    Мобильная разработка
                  </Link>
                </li>
                <li>
                  <Link href="/recommendations" className="text-gray-400 hover:text-white transition-colors">
                    Рекомендации партнеров
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+77776875411" className="hover:text-white transition-colors">+7 777 687 54 11</a>
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:augmented.vr@gmail.com" className="hover:text-white transition-colors">augmented.vr@gmail.com</a>
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Казахстан, Астана, ул. Куйши Дина, д. 14, офис 46</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-center text-gray-400 text-sm">
              © {new Date().getFullYear()} AVR Group. Все права защищены. Мы создаем инновационные решения для вашего бизнеса.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
