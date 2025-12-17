import React, { Suspense, lazy, useMemo, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FloatingElements from "./components/FloatingElements";
import ScrollProgress from "./components/ScrollProgress";
import ScrollToTop from "./components/ScrollToTop";
import SectionDivider from "./components/SectionDivider";
import LoadingScreen from "./components/LoadingScreen";
import { AnimatePresence } from "framer-motion";

// Lazy load components that are below the fold
const Skills = lazy(() => import("./components/Skills"));
const Experience = lazy(() => import("./components/Experience"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

// Loading component with minimum height to prevent layout shift
const LoadingFallback = () => (
  <div className="h-36 flex items-center justify-center">
    <div className="text-white animate-pulse">Loading...</div>
  </div>
);

export default function App() {
  // State to control the loading screen
  const [isLoading, setIsLoading] = useState(true);
  // Track if initial loading is complete to reduce animations on first load
  const [isInitialLoadComplete, setIsInitialLoadComplete] = useState(false);
  
  // Use memo for static components to prevent unnecessary re-renders
  const staticComponents = useMemo(() => (
    <>
      <ScrollProgress />
      <ScrollToTop />
    </>
  ), []);

  // Handle initial loading and animation states
  useEffect(() => {
    // Simulate loading time (minimum 2 seconds for good UX)
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);
    
    // Set animation state for components after loading
    const animationTimer = setTimeout(() => {
      setIsInitialLoadComplete(true);
    }, 2500);
    
    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(animationTimer);
    };
  }, []);

  return(
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen isLoading={isLoading} />}
      </AnimatePresence>
      
      {!isLoading && (
        <>
          {staticComponents}
          <FloatingElements reducedMotion={!isInitialLoadComplete} />
          <Navbar/>
          <Hero />
          <Suspense fallback={<LoadingFallback />}>
            <SectionDivider />
            <Skills />
            <SectionDivider />
            <Experience />
            <SectionDivider />
            <Portfolio />
            <SectionDivider />
            <Contact/>
            <Footer />
          </Suspense>
        </>
      )}
    </>
  )
}