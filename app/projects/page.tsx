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
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
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
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Давайте обсудим ваш проект</h2>
              <p className="text-gray-400 mb-8">
                Расскажите о вашей идее, и мы поможем воплотить ее в реальность
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