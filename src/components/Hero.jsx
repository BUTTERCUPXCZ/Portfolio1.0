import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiNodejsSmall, DiMysql, DiPostgresql } from 'react-icons/di';
import { SiExpress, SiNextdotjs, SiTailwindcss, SiTypescript, SiPrisma } from 'react-icons/si';
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineArrowDown } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { GridPattern } from './ui/grid-pattern'
import { cn } from '../lib/utils'

// Memoize tech stack data to prevent recreation on every render
const techStackData = [
  { Icon: DiHtml5, className: "text-gray-400 mx-4 sm:mx-6 w-10 h-10 sm:w-12 sm:h-12", key: "html" },
  { Icon: DiCss3, className: "text-gray-400 mx-4 sm:mx-6 w-10 h-10 sm:w-12 sm:h-12", key: "css" },
  { Icon: DiJavascript1, className: "text-gray-400 mx-4 sm:mx-6 w-10 h-10 sm:w-12 sm:h-12", key: "js" },
  { Icon: SiTypescript, className: "text-gray-400 mx-4 sm:mx-6 w-8 h-8 sm:w-10 sm:h-10", key: "ts" },
  { Icon: DiReact, className: "text-gray-400 mx-4 sm:mx-6 w-10 h-10 sm:w-12 sm:h-12", key: "react" },
  { Icon: SiNextdotjs, className: "text-gray-400 mx-4 sm:mx-6 w-8 h-8 sm:w-10 sm:h-10", key: "next" },
  { Icon: DiNodejsSmall, className: "text-gray-400 mx-4 sm:mx-6 w-10 h-10 sm:w-12 sm:h-12", key: "node" },
  { Icon: SiExpress, className: "text-gray-400 mx-4 sm:mx-6 w-10 h-10 sm:w-12 sm:h-12", key: "express" },
  { Icon: SiTailwindcss, className: "text-gray-400 mx-4 sm:mx-6 w-8 h-8 sm:w-10 sm:h-10", key: "tailwind" },
  { Icon: SiPrisma, className: "text-gray-400 mx-4 sm:mx-6 w-8 h-8 sm:w-10 sm:h-10", key: "prisma" },
  { Icon: DiMysql, className: "text-gray-400 mx-4 sm:mx-6 w-10 h-10 sm:w-12 sm:h-12", key: "mysql" },
  { Icon: DiPostgresql, className: "text-gray-400 mx-4 sm:mx-6 w-10 h-10 sm:w-12 sm:h-12", key: "postgres" },
];

const Hero = () => {
  return (
    <div className='relative w-full min-h-screen overflow-hidden bg-zinc-950'>
       {/* Grid Pattern Background */}
       <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [6, 6],
          [5, 3],
          [10, 5],
          [12, 8],
          [3, 7],
          [15, 10],
          [7, 12],
          [2, 2],
          [9, 9],
          [14, 4],
          [11, 11],
          [20, 6],
          [18, 14],
          [22, 10],
          [16, 3],
        ]}
        className={cn(
          "inset-0",
          "fill-white/[0.08] stroke-white/[0.12]"
        )}
      />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-transparent to-zinc-950/60 pointer-events-none" />
       
       <div className='mt-16 sm:mt-20 md:mt-24 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center min-h-screen relative z-10'>
          <div className='flex flex-col items-center justify-center text-center gap-6 sm:gap-8'>
          
        
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
              <h1 className='text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter text-white mb-2 sm:mb-4 leading-tight'>
                  IVAN <span className='text-zinc-500'>ELTAGONDE</span>
              </h1>
          </motion.div>

          {/* Type Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="will-change-opacity"
          >
              <TypeAnimation
                  sequence={[
                      "Full Stack Developer", 1000,
                      "Backend Engineer", 1000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                  className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-zinc-400 tracking-wide'
              />
          </motion.div>

          {/* Description */}
           <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className='text-zinc-400 max-w-[90%] sm:max-w-[700px] text-base sm:text-lg md:text-xl leading-relaxed mx-auto px-4'
            >
              I craft robust and scalable web applications with a focus on performance and user experience. Transforming complex problems into elegant, efficient solutions using modern technologies.
           </motion.p>

            {/* Buttons & Socials */}
            <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.4 }}
             className='flex flex-col sm:flex-row items-center gap-6 sm:gap-8 mt-4 sm:mt-8 w-full sm:w-auto px-4 sm:px-0'
            >
              <motion.a
                  href="/ELTAGONDE_cv.pdf" download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-bold rounded-md shadow-lg hover:bg-zinc-200 transition-all duration-300 w-full sm:w-auto text-center tracking-wide text-sm sm:text-base will-change-transform'
              >
                  Download CV
              </motion.a>
              
              <div className='flex gap-4 sm:gap-6 text-2xl sm:text-3xl text-zinc-400'>
                  <motion.a 
                    whileHover={{ scale: 1.2, color: "#fff" }} 
                    whileTap={{ scale: 0.9 }}
                    href='https://github.com/BUTTERCUPXCZ' 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors will-change-transform"
                    aria-label="GitHub Profile"
                  >
                    <AiOutlineGithub/>
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.2, color: "#fff" }} 
                    whileTap={{ scale: 0.9 }}
                    href='https://www.linkedin.com/in/ivan-eltagonde-38a853312/' 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors will-change-transform"
                    aria-label="LinkedIn Profile"
                  >
                    <AiOutlineLinkedin/>
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.2, color: "#fff" }} 
                    whileTap={{ scale: 0.9 }}
                    href='https://www.instagram.com/ivan.eltagonde/' 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors will-change-transform"
                    aria-label="Instagram Profile"
                  >
                    <AiOutlineInstagram/>
                  </motion.a>
              </div>
            </motion.div>
       </div>

       {/* Tech Stack Marquee - Optimized */}
       <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="py-8 sm:py-12 w-full overflow-hidden mt-12 sm:mt-16 md:mt-20"
        >
            <p className="text-center text-zinc-500 text-xs sm:text-sm mb-6 sm:mb-8 tracking-[0.2em] sm:tracking-[0.3em] uppercase px-4">
              Technologies I Work With
            </p>
            <div className="relative flex overflow-x-hidden">
                <div className="animate-scroll flex whitespace-nowrap will-change-transform">
                    {/* First set of icons - Optimized rendering */}
                    {techStackData.map(({ Icon, className, key }) => (
                        <span 
                          key={key} 
                          className="text-zinc-500 transition-colors duration-200 inline-flex items-center grayscale"
                        >
                            <Icon className={className} />
                        </span>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {techStackData.map(({ Icon, className, key }) => (
                        <span 
                          key={`dup-${key}`} 
                          className="text-zinc-500 transition-colors duration-200 inline-flex items-center grayscale"
                        >
                            <Icon className={className} />
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.5, 1, 0.5],
            y: [0, 8, 0]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            delay: 1,
            ease: "easeInOut" 
          }}
          className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 text-zinc-500"
        >
          <AiOutlineArrowDown className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.div>
      </div>
    </div>
  )
}

export default React.memo(Hero)