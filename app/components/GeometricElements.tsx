'use client';
import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

const useIsClient = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);
  return isClient;
};

export const GeometricBackground = () => {
  const isClient = useIsClient();
  const shouldReduceMotion = useReducedMotion();

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
      {!shouldReduceMotion && (
        <div className="absolute inset-0">
          {Array.from({ length: 2 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.1, scale: 1 }}
              animate={{ 
                opacity: [0.1, 0.15, 0.1],
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 30,
                delay: i * 2,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute"
              style={{
                left: `${30 + i * 25}%`,
                top: `${20 + i * 20}%`,
                width: '30rem',
                height: '30rem',
                background: 'linear-gradient(45deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)',
                borderRadius: '30%',
                filter: 'blur(30px)',
                willChange: 'transform'
              }}
            />
          ))}
        </div>
      )}

      {/* Сетка линий */}
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem'
        }}
      />
    </div>
  );
};

export const CubeElement = () => {
  const isClient = useIsClient();
  const shouldReduceMotion = useReducedMotion();

  if (!isClient || shouldReduceMotion) {
    return null;
  }

  return (
    <div className="relative w-16 h-16">
      <motion.div
        initial={{ opacity: 0.8, rotateY: 0 }}
        animate={{ opacity: 1, rotateY: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
        style={{ willChange: 'transform' }}
      >
        <div className="absolute inset-0 border border-white/10 transform preserve-3d perspective-1000 rotate-45">
          <div className="absolute inset-0 border border-white/10 transform -translate-z-8"></div>
          <div className="absolute inset-0 border border-white/10 transform translate-z-8"></div>
        </div>
      </motion.div>
    </div>
  );
};

export const EyeElement = () => {
  const isClient = useIsClient();
  const shouldReduceMotion = useReducedMotion();

  if (!isClient || shouldReduceMotion) {
    return null;
  }

  return (
    <div className="relative w-12 h-12">
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 border border-white/10 rounded-full flex items-center justify-center"
        style={{ willChange: 'transform' }}
      >
        <motion.div
          animate={{
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-2 h-2 bg-white/80 rounded-full"
          style={{ willChange: 'transform' }}
        />
      </motion.div>
    </div>
  );
}; 