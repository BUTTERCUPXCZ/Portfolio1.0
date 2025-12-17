import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ isLoading }) => {
  // If not loading, don't render anything
  if (!isLoading) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { 
          duration: 0.6,
          ease: "easeInOut" 
        } 
      }}
    >
      <div className="relative">
        {/* Logo/Name Animation */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold mb-4 text-zinc-100 tracking-tight">
            Ivan Eltagonde
          </h1>
        </motion.div>

        {/* Loading Bar */}
        <div className="h-1 w-48 bg-zinc-800 rounded-full overflow-hidden mt-6 mb-4 mx-auto">
          <motion.div
            className="h-full bg-zinc-200"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ 
              duration: 1.8,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Loading Text */}
        <motion.div
          className="text-center text-zinc-500 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p>Building Experiences</p>
        </motion.div>

        {/* Pulsing Circles */}
        <div className="flex justify-center mt-6 space-x-2">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 rounded-full bg-zinc-400"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
