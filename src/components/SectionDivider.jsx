import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SectionDivider = ({ className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className={`flex justify-center my-16 ${className}`} ref={ref}>
      <motion.div
        className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent"
        initial={{ width: 0 }}
        animate={isInView ? { width: "100%" } : { width: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        style={{ maxWidth: "400px" }}
      />
    </div>
  );
};

export default SectionDivider;
