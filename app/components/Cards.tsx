'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '../types';
import { CubeElement, EyeElement } from './GeometricElements';

interface Service {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  features: string[];
}

interface Technology {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface Testimonial {
  name: string;
  position: string;
  company: string;
  text: string;
  image: string;
}

interface CardProps {
  index: number;
}

interface ServiceCardProps extends CardProps {
  service: Service;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

interface TechnologyCardProps extends CardProps {
  tech: Technology;
}

interface TestimonialCardProps extends CardProps {
  testimonial: Testimonial;
}

export const ServiceCard = ({ service, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group relative p-6 bg-zinc-900/50 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-white/5 to-transparent rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <service.icon className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
          {index === 0 && <CubeElement />}
          {index === 1 && <EyeElement />}
        </div>
        <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
        <p className="text-gray-400 mb-4 text-sm leading-relaxed">{service.description}</p>
        <ul className="space-y-2">
          {service.features.map((feature: string, i: number) => (
            <li key={i} className="text-gray-400 flex items-center text-sm">
              <span className="w-1 h-1 bg-white rounded-full mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Link href={project.slug ? `/projects/${project.slug}` : '#'}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ 
          y: -5,
          transition: { duration: 0.2 }
        }}
        className="group relative bg-black/50 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
      >
        <div className="relative aspect-video">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
          
          {/* Анимированная иконка категории */}
          <motion.div 
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 shadow-lg shadow-black/50 group-hover:bg-white/20 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {project.service === 'mobile-development' ? (
              <svg className="w-6 h-6 text-white drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            ) : project.service === 'web-development' ? (
              <svg className="w-6 h-6 text-white drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-white drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            )}
          </motion.div>
        </div>
        
        <div className="relative p-6 z-10">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40 backdrop-blur-sm -z-10" />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-sm text-gray-400 mb-2 font-medium tracking-wider uppercase">{project.category}</p>
            <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">{project.title}</h3>
            <p className="text-gray-300 line-clamp-2 group-hover:text-gray-100 transition-colors">{project.description}</p>
            
            <div className="mt-4 flex items-center text-white/60 group-hover:text-white/80 transition-colors">
              <span className="text-sm">Подробнее</span>
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
}

export const ViewAllProjectsButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center mt-12"
    >
      <Link href="/projects">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-white/20 via-white/10 to-transparent opacity-0 group-hover:opacity-100 blur transition-opacity rounded-xl" />
          <div className="relative flex items-center gap-3">
            <span className="text-white font-medium">Посмотреть все проекты</span>
            <svg 
              className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export const TechnologyCard = ({ tech, index }: TechnologyCardProps) => {
  const Icon = tech.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="p-6 bg-zinc-900/50 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 group hover:-translate-y-1"
    >
      <div className="h-16 w-16 mb-4 mx-auto relative">
        <Icon className="w-full h-full text-white opacity-80 group-hover:opacity-100 transition-opacity" />
      </div>
      <h3 className="text-lg font-bold text-white text-center">{tech.name}</h3>
    </motion.div>
  );
};

export const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-white/10 p-8 relative group hover:border-white/20"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-white/5 to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Декоративные элементы */}
      <motion.div 
        className="absolute -top-6 -right-6 w-12 h-12"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-full h-full border-4 border-white/10 rounded-full" />
      </motion.div>
      
      <div className="absolute -bottom-4 -left-4 w-8 h-8 border-2 border-white/5 rounded-lg transform rotate-12" />
      
      <div className="relative">
        {/* Метрики и статистика */}
        <motion.div 
          className="grid grid-cols-2 gap-4 mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 relative overflow-hidden group">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-transparent"
              initial={{ x: '-100%' }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            />
            <p className="text-3xl font-bold text-white mb-1">+{40 + index * 15}%</p>
            <p className="text-sm text-gray-400">Рост эффективности</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 relative overflow-hidden group">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent"
              initial={{ x: '-100%' }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            />
            <p className="text-3xl font-bold text-white mb-1">{8 + index}x</p>
            <p className="text-sm text-gray-400">ROI</p>
          </div>
        </motion.div>
        
        {/* Текст отзыва */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-white/20 to-transparent"
          />
          <p className="text-gray-400 mb-6 text-sm leading-relaxed pl-6">{testimonial.text}</p>
        </div>
        
        {/* Информация о клиенте */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-4 mt-6 pl-6"
        >
          <div className="flex-1">
            <h4 className="text-white font-medium">{testimonial.name}</h4>
            <p className="text-gray-400 text-sm">{testimonial.position}</p>
            <p className="text-gray-500 text-sm">{testimonial.company}</p>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm"
          >
            <svg className="w-5 h-5 text-white/40" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}; 