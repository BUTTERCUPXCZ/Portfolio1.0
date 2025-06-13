import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const TextReveal = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  const textVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      filter: "blur(4px)"
    },
    visible: { 
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        delay: delay,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={textVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default TextReveal;
