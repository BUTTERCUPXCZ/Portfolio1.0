import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='fixed top-6 left-0 right-0 z-50 flex justify-center px-4'>
      <motion.div 
        className={`rounded-full backdrop-blur-xl border border-white/10 transition-all duration-300 ${
          scrolled ? 'bg-black/50 shadow-2xl shadow-white/5 py-2' : 'bg-black/20 py-4'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className='flex items-center justify-between px-6 md:px-12 gap-4 md:gap-12'>
     
          <a href="#" className='text-2xl font-bold text-white tracking-tight'>Ivan.</a>
            
          <ul className='flex gap-6 md:gap-10 items-center'>
            <li><Link to='skills' smooth={true} offset={50} duration={500} className='text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-300 cursor-pointer'>About</Link></li>
            <li><Link to='portfolio' smooth={true} offset={50} duration={500} className='text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-300 cursor-pointer'>Work</Link></li>
            <li><Link to='contact' smooth={true} offset={50} duration={500} className='text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-300 cursor-pointer'>Contact</Link></li>
          </ul>
              
        </div>
      </motion.div>
    </div>
  )
}

export default Navbar