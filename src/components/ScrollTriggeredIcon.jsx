import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ScrollTriggeredIcon = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  const iconVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.5,
      rotate: -45
    },
    visible: { 
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: "backOut",
        scale: {
          type: "spring",
          damping: 15,
          stiffness: 300
        }
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={iconVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollTriggeredIcon;
