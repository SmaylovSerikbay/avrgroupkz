'use client';
import { motion } from 'framer-motion';
import { ProjectCard } from '../components/Cards';
import { GeometricBackground } from '../components/GeometricElements';
import Header from '../components/Header';
import { projects } from '../data/projects';

export default function ProjectsPage() {
  // Группируем проекты по категориям услуг
  const projectsByService = projects.reduce((acc, project) => {
    const service = project.service || 'other';
    if (!acc[service]) {
      acc[service] = [];
    }
    acc[service].push(project);
    return acc;
  }, {} as Record<string, typeof projects>);

  const serviceNames = {
    'web-development': 'Веб-разработка',
    'mobile-development': 'Мобильные приложения',
    'vr-ar-mr': 'VR/AR/MR решения',
    'other': 'Другие проекты'
  };

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
            className="text-center"
          >
            <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight">
              Наши проекты
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-3xl mx-auto">
              Мы создаем инновационные цифровые решения для бизнеса: от корпоративных веб-порталов и мобильных приложений до иммерсивных VR/AR/MR проектов
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Sections */}
      {Object.entries(projectsByService).map(([service, serviceProjects]) => (
        <section key={service} className="py-20 px-4 bg-zinc-900/50 backdrop-blur-sm relative">
          <GeometricBackground />
          <div className="container mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">{serviceNames[service as keyof typeof serviceNames]}</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceProjects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>
      ))}

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
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Давайте обсудим ваш проект</h2>
              <p className="text-gray-400 mb-8">
                Расскажите о вашей идее, и мы поможем воплотить ее в реальность
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
    </main>
  );
} 