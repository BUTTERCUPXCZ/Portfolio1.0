import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import Profile from '../assets/picture.png'
import ShinyEffect from './ShinyEffect'
import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiNodejsSmall, DiJava, DiPhp } from 'react-icons/di';
import {
    AiOutlineGithub,
    AiOutlineInstagram,
    AiOutlineLinkedin,
} from 'react-icons/ai'
import {motion} from 'framer-motion'
import Reveal from './Reveal';

const Hero = () => {
  return (
    <div className='mt-24 max-w-[1200px] mx-auto relative px-6'>
       <div className='grid md:grid-cols-2 place-items-center gap-12 min-h-[80vh]'>
          <motion.div
             initial = {{ opacity: 0, y: -50}}
             whileInView={{ opacity: 1, y:0 }}
             viewport={{once: true}}
             transition={{ duration: 1 }}
             className='space-y-6'
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className='inline-block'
            >
              <span className='px-4 py-2 bg-gradient-to-r from-blue-500/20 to-blue-400/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium backdrop-blur-sm'>
                Available for work
              </span>
            </motion.div>

            <TypeAnimation
            sequence={[
                "Full Stack Developer", 1000,
                "Web Designer", 1000,
                "Problem Solver", 1000,
            ]}
             speed={50}
             repeat={Infinity}
             className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 text-2xl md:text-4xl mb-4 block'
            
            />

             <motion.h1
              initial = {{ opacity: 0}}
              whileInView={{ opacity: 1}}
              viewport={{once: true}}
              transition={{ duration: 1, delay: 0.5 }}
              className='text-white text-5xl md:text-8xl font-black tracking-tight leading-none mb-6'
              
              >
                 HEY, I'M <br />
                 <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300'>IVAN ELTAGONDE</span>

             </motion.h1>

             <motion.p
              initial = {{ opacity: 0}}
              whileInView={{ opacity: 1}}
              viewport={{once: true}}
              transition={{ duration: 1, delay: 1 }}
              className='text-gray-300 max-w-[500px] md:max-w-[600px] md:text-xl text-lg mb-6 leading-relaxed'
              
              >
                I am a third-year Computer Science student and an aspiring full-stack developer based in the Philippines. With a strong passion for technology and design, I specialize in creating intuitive, responsive, and visually appealing websites and web applications. My goal is to deliver solutions that combine functionality and seamless user experiences.

             </motion.p>

              <motion.div
               initial = {{ opacity: 0, y: 50}}
               whileInView={{ opacity: 1, y:0 }}
               viewport={{once: true}}
               transition={{ duration: 1, delay: 1.5 }}
               className='flex flex-row items-center gap-6 my-8 md:mb-0'
              >
           
           
            <motion.a
                href="/Resume.pdf" download
                whileHover={{ scale: 1.05, boxShadow: '0px 0px 20px rgba(59, 130, 246, 0.4)' }}
                className='z-10 cursor-pointer font-bold text-white md:w-auto px-6 py-3 border-2 border-blue-500 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 transition-all duration-300'
            >
                Download CV
            </motion.a>
           
            

             <div className='flex gap-6 flex-row text-4xl md:text-5xl text-blue-400 z-20'>
                <motion.a whileHover={{scale: 1.2, color: '#58a6ff' }} href='https://github.com/BUTTERCUPXCZ'>
                    <AiOutlineGithub/>
                </motion.a>
                <motion.a whileHover={{scale: 1.2, color: '#58a6ff' }} href='https://www.linkedin.com/in/ivan-eltagonde-38a853312/'>
                    <AiOutlineLinkedin/>
                </motion.a>
                <motion.a whileHover={{scale: 1.2, color: '#58a6ff' }} href='https://www.instagram.com/ivan.eltagonde/'>
                    <AiOutlineInstagram/>
                </motion.a>

            </div>
              </motion.div>
          </motion.div>
          
           <motion.div
                className="relative flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                >
                {/* Multi-layered neon blue glow behind the image */}
                <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
                  <div className="w-[420px] md:w-[520px] h-[420px] md:h-[520px] rounded-full blur-[120px] bg-blue-500 opacity-40 animate-pulse"></div>
                  <div className="w-[340px] md:w-[440px] h-[340px] md:h-[440px] rounded-full blur-3xl bg-blue-400 opacity-50"></div>
                  <div className="w-[260px] md:w-[340px] h-[260px] md:h-[340px] rounded-full blur-2xl bg-cyan-400 opacity-30"></div>
                </div>
                {/* Profile image with gradient border */}
                <div className="relative bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 p-2 rounded-full shadow-2xl z-10">
                    <img
                    src={Profile}
                    alt="Profile"
                    className="w-[260px] md:w-[340px] rounded-full object-cover bg-black"
                    style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)" }}
                    />
                </div>
                </motion.div>
       </div>
       <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 2 }}
            className="flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24"
        >
            <p className="text-gray-200 mr-6">My Tech Stack</p>
            <DiHtml5 className="text-orange-600 mx-2" />
            <DiCss3 className="text-blue-600 mx-2" />
            <DiJavascript1 className="text-yellow-500 mx-2" />
            <DiReact className="text-blue-500 mx-2" />
            <DiNodejsSmall className="text-green-500 mx-2" />
            

        </motion.div>

        <div className="absolute inset-0 hidden md:block">
            <ShinyEffect left={0} top={0} size={1400} />
        </div>

    </div>
  )
}

export default Hero