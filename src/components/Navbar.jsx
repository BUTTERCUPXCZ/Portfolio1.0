import React, { useState, useEffect } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleNav = () => {
    setNav(!nav)
  }
    
  const closeNav = () => {
    setNav(false)
  }

  const menuVariants = {
     open: {
        x: 0,
        transition: {
            stifness: 20,
            damping: 15
        }
     },
     closed: {
       x: '-100%', 
       transition: {
         stifness: 20,
         damping: 15
       }
     } 
  }

  return (
    <motion.div 
      className={`fixed top-0 left-0 w-full backdrop-blur-md z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/20 shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
        <div className='max-w-[1200px] mx-auto  flex justify-between text-gray-200 text-xl items-center px-12 h-20'>
     
          <a href="#" className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-300'>Ivan Eltagonde</a>
            
          <ul className='hidden md:flex gap-12 z-10 cursor-pointer'>
            <li><Link to='skills' smooth={true} offset={50} duration={500} className='hover:text-blue-400 transition-colors duration-300'>About</Link></li>
            <li><Link to='portfolio' smooth={true} offset={50} duration={500} className='hover:text-blue-400 transition-colors duration-300'>Portfolio</Link></li>
            <li><Link to='contact' smooth={true} offset={50} duration={500} className='hover:text-blue-400 transition-colors duration-300'>Contact</Link></li>
          </ul>

         <div onClick={toggleNav} className='md:hidden z-50 text-gray-200'>
            {nav ? <AiOutlineClose size={30} /> :  <AiOutlineMenu size={30} />}
         </div>
   
           <motion.div
            initial = {false}
            animate = {nav ? 'open' : 'closed'} 
            variants = {menuVariants}
            className='fixed left-0 top-0 w-full min-h-screen bg-black/95 backdrop-blur-md z-40'
           >
              <ul className='font semi-bold text-4xl space-y-8 mt-24 text-center'>
                    <li><Link to="skills" onClick={closeNav} smooth={true} offset={50} duration={500} className='hover:text-blue-400 transition-colors duration-300'>About</Link></li>
                    <li><Link to="portfolio" onClick={closeNav} smooth={true} offset={50} duration={500} className='hover:text-blue-400 transition-colors duration-300'>Portfolio</Link></li>
                    <li><Link to="contact" onClick={closeNav}  smooth={true} offset={50} duration={500} className='hover:text-blue-400 transition-colors duration-300'>Contact</Link></li>
              </ul>

 
           </motion.div>
              
        </div>
    </motion.div>
  )
}

export default Navbar