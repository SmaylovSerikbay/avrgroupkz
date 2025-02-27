'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const useIsClient = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);
  return isClient;
};

export const GeometricBackground = () => {
  const isClient = useIsClient();

  if (!isClient) {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black opacity-50" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black opacity-50" />
      
      {/* Геометрические фигуры */}
      <div className="absolute inset-0">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 20, 
              delay: i * 2,
              repeat: Infinity,
              ease: "linear" 
            }}
            className="absolute"
            style={{
              left: `${30 + i * 25}%`,
              top: `${20 + i * 20}%`,
              width: '40rem',
              height: '40rem',
              background: 'linear-gradient(45deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)',
              borderRadius: '30%',
              filter: 'blur(50px)'
            }}
          />
        ))}
      </div>

      {/* Сетка линий */}
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem'
        }}
      />
    </div>
  );
};

export const CubeElement = () => {
  const isClient = useIsClient();

  if (!isClient) {
    return null;
  }

  return (
    <div className="relative w-16 h-16">
      <motion.div
        initial={{ opacity: 0, rotateY: 0 }}
        animate={{ opacity: 1, rotateY: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 border-2 border-white/20 transform preserve-3d perspective-1000 rotate-45">
          <div className="absolute inset-0 border-2 border-white/20 transform -translate-z-8"></div>
          <div className="absolute inset-0 border-2 border-white/20 transform translate-z-8"></div>
        </div>
      </motion.div>
    </div>
  );
};

export const EyeElement = () => {
  const isClient = useIsClient();

  if (!isClient) {
    return null;
  }

  return (
    <div className="relative w-12 h-12">
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 border-2 border-white/20 rounded-full flex items-center justify-center"
      >
        <motion.div
          animate={{
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-2 h-2 bg-white rounded-full"
        />
      </motion.div>
    </div>
  );
}; 