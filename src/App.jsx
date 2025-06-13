import React, { Suspense, lazy } from "react";
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

export default function App() {
  return(
    <>
    <ScrollProgress />
    <FloatingElements />
    <Navbar/>
    <Hero />
    <Suspense fallback={<div className="h-20 flex items-center justify-center"><div className="text-blue-400 animate-pulse">Loading...</div></div>}>
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
    <ScrollToTop />
    </>
  )
}