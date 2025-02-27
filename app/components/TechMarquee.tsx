'use client';
import { CodeBracketIcon, CubeIcon, DevicePhoneMobileIcon, GlobeAltIcon, Square3Stack3DIcon, ViewfinderCircleIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const technologies = [
  { name: 'Unity', icon: CubeIcon },
  { name: 'Unreal Engine', icon: Square3Stack3DIcon },
  { name: 'WebXR', icon: ViewfinderCircleIcon },
  { name: 'ARKit', icon: DevicePhoneMobileIcon },
  { name: 'ARCore', icon: DevicePhoneMobileIcon },
  { name: 'Three.js', icon: CubeIcon },
  { name: 'React', icon: CodeBracketIcon },
  { name: 'Next.js', icon: GlobeAltIcon },
  { name: 'Flutter', icon: DevicePhoneMobileIcon },
  { name: 'React Native', icon: DevicePhoneMobileIcon },
  { name: 'Blender', icon: CubeIcon },
  { name: 'Firebase', icon: Square3Stack3DIcon }
];

export const TechMarquee = () => {
  return (
    <div className="w-full bg-black/50 backdrop-blur-sm border-y border-white/10 overflow-hidden py-6">
      <motion.div
        className="flex gap-8"
        animate={{
          x: [0, -1920],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {[...technologies, ...technologies].map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div
              key={`${tech.name}-${index}`}
              className="flex items-center space-x-4 text-white/60 hover:text-white transition-colors"
            >
              <Icon className="w-6 h-6" />
              <span className="text-lg font-medium whitespace-nowrap">{tech.name}</span>
              <span className="w-2 h-2 bg-white/20 rounded-full"></span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}; 