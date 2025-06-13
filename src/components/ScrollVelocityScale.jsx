import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ScrollVelocityScale = ({ children, maxScale = 1.1, className = "" }) => {
  const [scrollVelocity, setScrollVelocity] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollVelocity = () => {
      const currentScrollY = window.scrollY;
      const velocity = Math.abs(currentScrollY - lastScrollY);
      
      setScrollVelocity(velocity);
      
      // Convert velocity to scale (max velocity of 20 = max scale)
      const newScale = Math.min(1 + (velocity / 200), maxScale);
      setScale(newScale);
      
      lastScrollY = currentScrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollVelocity);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Decay the scale back to 1
    const decayInterval = setInterval(() => {
      setScale(prev => Math.max(1, prev * 0.95));
    }, 50);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(decayInterval);
    };
  }, [maxScale]);

  return (
    <motion.div
      className={className}
      animate={{ scale }}
      transition={{ type: "spring", damping: 20, stiffness: 300 }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollVelocityScale;
