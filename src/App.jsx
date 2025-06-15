import React, { Suspense, lazy, useMemo, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FloatingElements from "./components/FloatingElements";
import ScrollProgress from "./components/ScrollProgress";
import ScrollToTop from "./components/ScrollToTop";
import SectionDivider from "./components/SectionDivider";

// Lazy load components that are below the fold
const Skills = lazy(() => import("./components/Skills"));
const Experience = lazy(() => import("./components/Experience"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

// Loading component with minimum height to prevent layout shift
const LoadingFallback = () => (
  <div className="h-36 flex items-center justify-center">
    <div className="text-blue-400 animate-pulse">Loading...</div>
  </div>
);

export default function App() {
  // Track if initial loading is complete to reduce animations on first load
  const [isInitialLoadComplete, setIsInitialLoadComplete] = useState(false);
  
  // Use memo for static components to prevent unnecessary re-renders
  const staticComponents = useMemo(() => (
    <>
      <ScrollProgress />
      <ScrollToTop />
    </>
  ), []);

  // Set initial load complete after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoadComplete(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return(
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
  )
}