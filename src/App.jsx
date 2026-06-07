import React, { Suspense, lazy } from "react";
import { motion, useScroll } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// Below-the-fold sections stay lazy
const Skills = lazy(() => import("./components/Skills"));
const Experience = lazy(() => import("./components/Experience"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

const LoadingFallback = () => (
  <div className="h-36 flex items-center justify-center">
    <span className="font-mono text-xs tracking-widest2 uppercase text-muted animate-pulse">
      Loading —
    </span>
  </div>
);

export default function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative">
      {/* Scroll progress — orange hairline */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-accent origin-left z-[70]"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Page frame */}
      <div className="pointer-events-none fixed inset-x-4 inset-y-0 z-50 hidden md:block border-x border-line" />

      <Navbar />
      <Hero />
      <Suspense fallback={<LoadingFallback />}>
        <Skills />
        <Experience />
        <Portfolio />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}
