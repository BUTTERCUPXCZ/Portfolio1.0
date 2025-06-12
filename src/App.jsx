import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import FloatingElements from "./components/FloatingElements";

export default function App() {
  return(
    <>
    <FloatingElements />
    <Navbar/>
    <Hero />
    <Skills />
    <Experience />
    <Portfolio />
    <Contact/>
    <Footer />

    </>
  )
}