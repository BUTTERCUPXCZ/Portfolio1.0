import React from 'react';
import { motion } from 'framer-motion';
import ParallaxElement from './ParallaxElement';

const FloatingElements = ({ reducedMotion = false }) => {
  // Simplified animations for better performance
  const animationConfig = reducedMotion ? {
    duration: 0,
    repeat: 0
  } : {
    duration: 30,
    repeat: Infinity,
    ease: "easeInOut"
  };
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Optimized parallax floating shapes - reduced count and complexity */}
      <ParallaxElement speed={0.1} disabled={reducedMotion}>
        <motion.div
          className="absolute top-1/4 left-1/4 w-48 h-48 bg-white/5 rounded-full blur-xl opacity-30"
          animate={{
            x: [0, 25, 0],
            y: [0, -15, 0],
          }}
          transition={animationConfig}
        />
      </ParallaxElement>
      
      <ParallaxElement speed={0.15} disabled={reducedMotion}>
        <motion.div
          className="absolute top-3/4 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-xl opacity-30"
          animate={{
            x: [0, -35, 0],
            y: [0, 20, 0],
          }}
          transition={{
            ...animationConfig,
            duration: animationConfig.duration + 5
          }}
        />
      </ParallaxElement>
    </div>
  );
};

export default React.memo(FloatingElements);
