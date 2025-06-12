import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const Reveal = ({ children, width = 'fit-content' }) => {
  const ref = useRef(null);

  // Check if the element is in view with reduced threshold for better performance
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  // Animation controls
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  return (
    <div
      ref={ref}
      style={{ position: 'relative', width, overflow: 'hidden' }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 }, // Reduced animation distance
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.4, delay: 0.1 }} // Faster, shorter animations
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
