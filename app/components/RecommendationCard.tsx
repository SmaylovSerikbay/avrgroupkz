'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface Recommendation {
  name: string;
  position: string;
  company: string;
  text: string;
  originalImage?: string;
  date?: string;
}

interface RecommendationCardProps {
  recommendation: Recommendation;
  index: number;
}

export const RecommendationCard = ({ recommendation, index }: RecommendationCardProps) => {
  const [showOriginal, setShowOriginal] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-white/10 p-8 relative group hover:border-white/20 transition-all duration-300"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-white/5 to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Основной текст */}
        <div className="relative">
          <p className="text-gray-300 leading-relaxed mb-6 text-sm">
            {recommendation.text}
          </p>
          
          {/* Информация о компании */}
          <div className="border-t border-white/10 pt-4">
            <h4 className="text-white font-semibold mb-1">{recommendation.name}</h4>
            <p className="text-gray-400 text-sm mb-1">{recommendation.position}</p>
            <p className="text-blue-400 text-sm">{recommendation.company}</p>
            {recommendation.date && (
              <p className="text-gray-500 text-xs mt-2">{recommendation.date}</p>
            )}
          </div>

          {/* Кнопка просмотра оригинала */}
          {recommendation.originalImage && (
            <button
              onClick={() => setShowOriginal(true)}
              className="mt-4 px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm rounded-lg transition-colors border border-white/20 hover:border-white/40"
            >
              Посмотреть оригинал
            </button>
          )}
        </div>
      </motion.div>

      {/* Модальное окно с оригиналом */}
      {showOriginal && recommendation.originalImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="relative max-w-4xl max-h-[90vh] overflow-auto bg-zinc-900 rounded-xl border border-white/20"
          >
            {/* Заголовок */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h3 className="text-white text-lg font-semibold">
                Рекомендательное письмо от {recommendation.name}
              </h3>
              <button
                onClick={() => setShowOriginal(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Изображение */}
            <div className="p-6">
              <img
                src={recommendation.originalImage}
                alt={`Рекомендательное письмо от ${recommendation.name}`}
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Информация */}
            <div className="p-6 border-t border-white/10 bg-zinc-800/50">
              <div className="text-center">
                <p className="text-gray-300 text-sm">
                  <strong>{recommendation.name}</strong> - {recommendation.position}
                </p>
                <p className="text-blue-400 text-sm">{recommendation.company}</p>
                {recommendation.date && (
                  <p className="text-gray-500 text-xs mt-2">{recommendation.date}</p>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};
