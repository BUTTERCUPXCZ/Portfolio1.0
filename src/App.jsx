import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FloatingElements from "./components/FloatingElements";

// Lazy load components that are below the fold
const Skills = lazy(() => import("./components/Skills"));
const Experience = lazy(() => import("./components/Experience"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

export default function App() {
  return(
    <>
    <FloatingElements />
    <Navbar/>
    <Hero />
    <Suspense fallback={<div className="h-20 flex items-center justify-center"><div className="text-blue-400">Loading...</div></div>}>
      <Skills />
      <Experience />
      <Portfolio />
      <Contact/>
      <Footer />
    </Suspense>
    </>
  )
}