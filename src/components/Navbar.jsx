import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

const Navbar = () => {
    const [nav, setNav] = useState(false)

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
    <div className='fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800/50'>
        <div className='max-w-[1300px] mx-auto  flex justify-between text-gray-200 text-xl items-center px-12 h-20'>
     
          <a href="#" className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500'>Ivan Eltagonde</a>
            
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
    </div>
  )
}

export default Navbar