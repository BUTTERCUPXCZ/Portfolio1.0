import React from "react";
import { motion } from "framer-motion";

export const BackgroundRippleEffect = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[80px] animate-pulse delay-75" />
      
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white/5 rounded-full"
          initial={{ width: "200px", height: "200px", opacity: 1 }}
          animate={{
            width: ["200px", "800px"],
            height: ["200px", "800px"],
            opacity: [0.5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};
