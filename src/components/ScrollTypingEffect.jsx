import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const ScrollTypingEffect = ({ text, speed = 50, className = "" }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [isInView, currentIndex, text, speed]);

  return (
    <span ref={ref} className={className}>
      {displayText}
      {isInView && currentIndex < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
};

export default ScrollTypingEffect;
