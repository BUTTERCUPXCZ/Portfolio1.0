import React from 'react';
import { motion } from 'framer-motion';
import ParallaxElement from './ParallaxElement';

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Parallax floating shapes - move at different speeds when scrolling */}
      <ParallaxElement speed={0.2}>
        <motion.div
          className="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-500/5 rounded-full blur-xl opacity-50"
          animate={{
            x: [0, 50, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </ParallaxElement>
      
      <ParallaxElement speed={0.3}>
        <motion.div
          className="absolute top-3/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-xl opacity-40"
          animate={{
            x: [0, -75, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </ParallaxElement>

      <ParallaxElement speed={0.15}>
        <motion.div
          className="absolute top-1/2 left-1/2 w-32 h-32 bg-cyan-500/5 rounded-full blur-lg opacity-30"
          animate={{
            x: [0, 30, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </ParallaxElement>
    </div>
  );
};

export default FloatingElements;
