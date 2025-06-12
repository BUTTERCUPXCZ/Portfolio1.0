import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'
import Reveal from './Reveal';

const Contact = () => {
  return (
    <div className='px-6 max-w-[1200px] mx-auto md:my-20' id='contact'>
     <Reveal>
     <div className='grid md:grid-cols-2 gap-12 place-items-center'> 
        <div className="space-y-8">
           <div className='text-gray-300'>
            <h3 className='text-4xl md:text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500'>About Me</h3>
            <p className='text-gray-400 text-lg leading-relaxed max-w-lg'>
            As a dedicated Third-year Computer Science student, I am focused on building a solid foundation in software engineering. I aim to apply these skills in internships and collaborative projects, preparing myself for a successful career in tech.
            </p>
           </div>
            <div className='grid grid-cols-3 gap-6'>
               <div className='bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-6 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 text-center'>
                  <h3 className='text-3xl font-black text-white mb-2'>11
                     <span className="text-blue-400">+</span>
                  </h3>
                 <p className='text-sm text-gray-400 font-medium'>Projects</p>
               </div>

               <div className='bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-6 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 text-center'>
                  <h3 className='text-3xl font-black text-white mb-2'>3
                     <span className="text-blue-400">+</span>
                  </h3>
                 <p className='text-sm text-gray-400 font-medium'>Years Experience</p>
               </div>
            </div>
        </div>

           <form 
           action="https://getform.io/f/alllnlpa"
           method = "POST"
           className="w-full max-w-lg bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm"
           id="form"
           >

            <h4 className='text-white font-bold text-2xl mb-6 text-center'>
              Let's Connect
            </h4>
            
            <div className="space-y-4">
              <input 
              type="text"
              id='name'
              placeholder='Your Name'
              name='name'
              className='w-full rounded-lg border border-gray-600 bg-gray-800/50 py-3 px-4 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors'    
              />

              <input 
                type="email"
                id='email'
                placeholder='Your Email'
                name='email'
                className='w-full rounded-lg border border-gray-600 bg-gray-800/50 py-3 px-4 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors'    
                />

              <textarea
                id='message'
                placeholder='Your Message'
                rows='5'
                name='message'
                className='w-full rounded-lg border border-gray-600 bg-gray-800/50 py-3 px-4 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors resize-none'    
                />
            </div>
            
            <button
              type = 'submit'
              className='w-full mt-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105' 
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