import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Simplified floating shapes - reduced blur and complexity */}
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
    </div>
  );
};

export default FloatingElements;
