import React, { useEffect, useState, useRef, useCallback } from 'react';

const ParallaxElement = ({ children, speed = 0.5, className = "", disabled = false }) => {
  const [offsetY, setOffsetY] = useState(0);
  const requestRef = useRef(null);
  const previousScrollY = useRef(window.pageYOffset);
  
  // Throttled scroll handler using requestAnimationFrame
  const handleScroll = useCallback(() => {
    requestRef.current = requestAnimationFrame(() => {
      if (disabled) {
        setOffsetY(0);
        return;
      }
      
      const currentScrollY = window.pageYOffset;
      // Only update if there's a significant change (optimization)
      if (Math.abs(currentScrollY - previousScrollY.current) > 5) {
        setOffsetY(currentScrollY * speed);
        previousScrollY.current = currentScrollY;
      }
    });
  }, [speed, disabled]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [handleScroll]);

  // Apply transform directly instead of using motion component for better performance
  return (
    <div
      className={className}
      style={{ transform: `translateY(${offsetY}px)`, willChange: 'transform' }}
    >
      {children}
    </div>
  );
};

export default React.memo(ParallaxElement);
