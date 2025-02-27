'use client';
import { CodeBracketIcon, CubeIcon, DevicePhoneMobileIcon, GlobeAltIcon, Square3Stack3DIcon, ViewfinderCircleIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const icons = [
  { icon: CubeIcon, color: '#3B82F6' }, // blue-500
  { icon: DevicePhoneMobileIcon, color: '#22C55E' }, // green-500
  { icon: GlobeAltIcon, color: '#A855F7' }, // purple-500
  { icon: CodeBracketIcon, color: '#EAB308' }, // yellow-500
  { icon: Square3Stack3DIcon, color: '#EF4444' }, // red-500
  { icon: ViewfinderCircleIcon, color: '#06B6D4' } // cyan-500
];

const useIsClient = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);
  return isClient;
};

export const AnimatedEye = () => {
  const [currentIconIndex, setCurrentIconIndex] = useState(0);
  const isClient = useIsClient();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIconIndex((prev) => (prev + 1) % icons.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  if (!isClient) {
    return null;
  }

  const CurrentIcon = icons[currentIconIndex].icon;

  return (
    <div className="relative w-full h-full hidden md:block">
      <svg 
        viewBox="0 0 400 400" 
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Глаз с белой заливкой */}
        <motion.path
          d="M 50 200 C 150 280 250 280 350 200 C 250 120 150 120 50 200"
          fill="white"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2 }}
        />

        {/* Внешний круг радужки */}
        <circle cx="200" cy="200" r="70" fill="black" />
        
        {/* Технологичные элементы радужки */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Внутренний круг */}
          <circle cx="200" cy="200" r="56" stroke="#4B5563" strokeWidth="1" fill="none" />
          
          {/* Сегменты */}
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <line
              key={angle}
              x1="200"
              y1="200"
              x2={200 + 70 * Math.cos(angle * Math.PI / 180)}
              y2={200 + 70 * Math.sin(angle * Math.PI / 180)}
              stroke="#374151"
              strokeWidth="1"
            />
          ))}
          
          {/* Круговые сегменты */}
          <circle cx="200" cy="200" r="42" stroke="#4B5563" strokeWidth="0.5" fill="none" strokeDasharray="2 3" />
          <circle cx="200" cy="200" r="63" stroke="#4B5563" strokeWidth="0.5" fill="none" strokeDasharray="4 6" />
          
          {/* Анимированное кольцо */}
          <motion.circle
            cx="200"
            cy="200"
            r="49"
            stroke="#6B7280"
            strokeWidth="1"
            fill="none"
            strokeDasharray="12 16"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              transformOrigin: "200px 200px"
            }}
          />
        </motion.g>

        {/* Центральная анимированная иконка */}
        <foreignObject x="165" y="165" width="70" height="70">
          <div className="w-full h-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIconIndex}
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                exit={{ rotate: 720, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ width: '100%', height: '100%', color: icons[currentIconIndex].color }}
              >
                <CurrentIcon className="w-full h-full" />
              </motion.div>
            </AnimatePresence>
          </div>
        </foreignObject>
      </svg>
    </div>
  );
}; 