import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'
import Reveal from './Reveal';
import AnimatedCounter from './AnimatedCounter';

const Contact = () => {
  return (
    <div className='px-6 max-w-[1000px] mx-auto md:my-20' id='contact'>
     <Reveal>
     <div className='grid md:grid-cols-2 gap-16 place-items-start'> 
        <div className="space-y-8 w-full">
           <div className='text-zinc-300'>
            <h3 className='text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight'>About <span className="text-zinc-500">Me</span></h3>
            <div className="h-1 w-20 bg-zinc-700 mb-6"></div>
            <p className='text-zinc-400 text-lg leading-relaxed'>
            As a dedicated Third-year Computer Science student, I am focused on building a solid foundation in software engineering. I aim to apply these skills in internships and collaborative projects, preparing myself for a successful career in tech.
            </p>
           </div>
            <div className='flex gap-8'>
               <div className=''>
                  <h3 className='text-4xl font-bold text-white mb-1'>
                    <AnimatedCounter end={5} />
                     <span className="text-zinc-500">+</span>
                  </h3>
                 <p className='text-sm text-zinc-500 uppercase tracking-wider'>Projects</p>
               </div>

               <div className=''>
                  <h3 className='text-4xl font-bold text-white mb-1'>
                    <AnimatedCounter end={3} />
                     <span className="text-zinc-500">+</span>
                  </h3>
                 <p className='text-sm text-zinc-500 uppercase tracking-wider'>Years Exp.</p>
               </div>
            </div>
        </div>

           <form 
           action="https://getform.io/f/alllnlpa"
           method = "POST"
           className="w-full space-y-6"
           id="form"
           >
            <h4 className='text-white font-bold text-2xl mb-2'>
              Let's Connect
            </h4>
            <p className="text-zinc-400 text-sm mb-6">Send me a message and I'll get back to you.</p>
            
            <div className="space-y-4">
              <input 
              type="text"
              id='name'
              placeholder='Name'
              name='name'
              className='w-full bg-transparent border-b border-zinc-800 py-3 px-0 text-white placeholder-zinc-600 focus:border-white focus:outline-none transition-colors'    
              />

              <input 
                type="email"
                id='email'
                placeholder='Email'
                name='email'
                className='w-full bg-transparent border-b border-zinc-800 py-3 px-0 text-white placeholder-zinc-600 focus:border-white focus:outline-none transition-colors'    
                />

              <textarea
                id='message'
                placeholder='Message'
                rows='4'
                name='message'
                className='w-full bg-transparent border-b border-zinc-800 py-3 px-0 text-white placeholder-zinc-600 focus:border-white focus:outline-none transition-colors resize-none'    
                />
            </div>
            
            <button
              type = 'submit'
              className='mt-6 px-8 py-3 bg-white text-black font-bold rounded-md hover:bg-zinc-200 transition-all duration-300 tracking-wide' 
            >
                Send Message
            </button>

           </form>
            

     </div>
     </Reveal>
    </div>
  )
}

export default Contact