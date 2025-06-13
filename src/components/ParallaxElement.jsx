import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ParallaxElement = ({ children, speed = 0.5, className = "" }) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset * speed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <motion.div
      className={className}
      style={{ transform: `translateY(${offsetY}px)` }}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxElement;
