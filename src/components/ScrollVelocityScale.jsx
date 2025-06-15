import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

const ScrollVelocityScale = ({ children, maxScale = 1.05, className = "" }) => {
  const [scale, setScale] = useState(1);
  const lastScrollY = useRef(window.scrollY);
  const requestRef = useRef(null);
  const timeoutRef = useRef(null);

  const updateScrollVelocity = useCallback(() => {
    const currentScrollY = window.scrollY;
    const velocity = Math.abs(currentScrollY - lastScrollY.current);
    
    // Reduce sensitivity and max scale for better performance
    const newScale = Math.min(1 + (velocity / 400), maxScale);
    setScale(newScale);
    
    lastScrollY.current = currentScrollY;
    requestRef.current = null;
  }, [maxScale]);

  const handleScroll = useCallback(() => {
    // Skip if we already have a frame scheduled
    if (!requestRef.current) {
      requestRef.current = requestAnimationFrame(updateScrollVelocity);
    }
  }, [updateScrollVelocity]);

  useEffect(() => {
    // Use passive event listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Decay the scale back to 1 - optimized to run less frequently
    timeoutRef.current = setInterval(() => {
      setScale(prev => {
        const newValue = Math.max(1, prev * 0.95);
        // If we're very close to 1, just set it to 1
        return Math.abs(newValue - 1) < 0.01 ? 1 : newValue;
      });
    }, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timeoutRef.current);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [handleScroll]);

  // Only animate if scale is different from 1
  return scale !== 1 ? (
    <motion.div
      className={className}
      animate={{ scale }}
      transition={{ type: "spring", damping: 20, stiffness: 300 }}
    >
      {children}
    </motion.div>
  ) : (
    <div className={className}>{children}</div>
  );
};

export default React.memo(ScrollVelocityScale);
