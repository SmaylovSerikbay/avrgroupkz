'use client';
import { motion } from 'framer-motion';
import { RecommendationCard } from '../components/RecommendationCard';
import { GeometricBackground } from '../components/GeometricElements';
import Header from '../components/Header';

const recommendations = [
  {
    name: 'Астана Балет',
    position: 'Театр',
    company: 'Министерство культуры и спорта РК',
    text: 'ТОО «AVR Group» является партнером в области разработки технологий виртуальной реальности. Вместе мы разработали первый в Казахстане театральный стриминговый сервис с возможностью просмотра спектаклей в 360°. Компания проявила себя как компетентный, ответственный партнер, способный выполнить качественную работу в срок. Отличительной особенностью компании является полное экспертное сопровождение на всех этапах проекта (до, во время и после завершения). Рекомендуем ТОО «AVR Group» как надежного и стабильного партнера.',
    originalImage: '/images/40001.jpg',
    date: '2018',
    project: 'VR платформа для просмотра балетных постановок'
  },
  {
    name: 'HTC Россия и СНГ',
    position: 'Официальный партнер',
    company: 'HTC Corp.',
    text: 'Подтверждаем, что компания ТОО «AVR Group», расположенная по адресу: Казахстан, Астана ул. Селеты д.12, является официальным партнером компании HTC Corp., представленной в России филиалом «HTC BELGIUM». Это партнерство открывает новые возможности для развития VR/AR технологий в регионе.',
    originalImage: '/images/full_p9idm1wJ.jpg',
    date: '30 октября 2018',
    project: 'Официальное партнерство HTC'
  },
  {
    name: 'Astana Property Management',
    position: 'Управляющая компания',
    company: 'Недвижимость Астаны',
    text: 'Компания ТОО «Astana Property Management» благодарит команду специалистов компании «AVR GROUP» за оперативную разработку приложения с виртуальной реальностью (VR для планшетов, смартфонов). Продукт для «The Ritz-Carlton Residences, Astana» получился ярким, необычным и запоминающимся. Клиенты получили массу положительных эмоций от проекта. Желаем процветания Вашему бизнесу.',
    originalImage: '/images/full_Qp9UkPtS.jpg',
    date: '28 декабря 2017',
    project: 'VR приложение для The Ritz-Carlton Residences'
  }
];

export default function RecommendationsPage() {
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
            <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight">
              Рекомендации партнеров
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-3xl mx-auto">
              Официальные рекомендательные письма от ведущих компаний и государственных учреждений, 
              подтверждающие качество нашей работы и надежность как партнера
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4 relative">
        <GeometricBackground />
        <div className="container mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-8">Доверие партнеров</h2>
            <div className="bg-white/5 rounded-lg p-8 backdrop-blur-sm">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                За годы работы AVR Group заслужила доверие ведущих компаний Казахстана и международных партнеров. 
                Наши рекомендательные письма подтверждают высокое качество работы, профессионализм команды и 
                способность выполнять проекты любой сложности в установленные сроки.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Каждый проект - это не просто техническое решение, а стратегическое партнерство, направленное 
                на достижение бизнес-целей наших клиентов и развитие технологий в регионе.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recommendations Grid */}
      <section className="py-20 px-4 bg-zinc-900/50 relative">
        <GeometricBackground />
        <div className="container mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Официальные рекомендации</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {recommendations.map((recommendation, index) => (
                <RecommendationCard key={recommendation.name} recommendation={recommendation} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 relative">
        <GeometricBackground />
        <div className="container mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Почему нам доверяют</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center bg-white/5 rounded-lg p-6 backdrop-blur-sm"
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
                <h3 className="text-xl font-semibold mb-2">Проектов в срок</h3>
                <p className="text-gray-400">Все проекты выполняются в установленные сроки</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center bg-white/5 rounded-lg p-6 backdrop-blur-sm"
              >
                <div className="text-4xl font-bold text-green-400 mb-2">50+</div>
                <h3 className="text-xl font-semibold mb-2">Довольных клиентов</h3>
                <p className="text-gray-400">Клиенты возвращаются к нам снова</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center bg-white/5 rounded-lg p-6 backdrop-blur-sm"
              >
                <div className="text-4xl font-bold text-purple-400 mb-2">5+</div>
                <h3 className="text-xl font-semibold mb-2">Лет опыта</h3>
                <p className="text-gray-400">Успешно работаем с 2018 года</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-zinc-900/50 relative">
        <GeometricBackground />
        <div className="container mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Готовы стать нашим партнером?</h2>
            <p className="text-gray-400 mb-8">
              Свяжитесь с нами для обсуждения вашего проекта и присоединяйтесь к числу довольных клиентов
            </p>
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
          </motion.div>
        </div>
      </section>
    </main>
  );
}
