import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'
import Reveal from './Reveal';

const Contact = () => {
  return (
    <div className='px-6 max-w-[1000px] mx-auto md:my-12' id='contact'>
     <Reveal>
     <div className='grid md:grid-cols-2 place-items-center'> 
        <div>
           <div className='text-gray-300 my-3'>
            <h3 className='text-4xl font-semibold mb-5'>About Me</h3>
            <p className='text-justify leading-7 w-11/12 mx-auto'>
            As a dedicated Third-year Computer Science student, I am focused on building a solid foundation in software engineering. I aim to apply these skills in internships and collaborative projects, preparing myself for a successful career in tech.
            </p>
           </div>
            <div className='flex mt-10 items-center gap-7'>
               <div className='bg-gray-800/40 p-4 rounded-lg'>
                  <h3 className='md:text-3xl text-2xl font-semibold text-white'>11
                     <span>+</span>
                  </h3>
                 <p className='text-xs md:text-base'><span>Projects</span></p>

               </div>

               <div className='bg-gray-800/40 p-5 rounded-lg'>
                  <h3 className='md:text-3xl text-2xl font-semibold text-white'>3
                     <span>+</span>
                  </h3>
                 <p className='text-xs md:text-base'><span>years of Experience</span></p>

               </div>
               <div className='bg-gray-800/40 p-5 rounded-lg'>
                  <h3 className='md:text-3xl text-2xl font-semibold text-white'>10
                     <span>+</span>
                  </h3>
                 <p className='text-xs md:text-base'><span>Happy Clients</span></p>

               </div>
            </div>
        </div>

           <form 
           action="https://getform.io/f/alllnlpa"
           method = "POST"
           className="max-w-6xl p-5 md:p-12"
           id="form"
           >

            <p className='text-gray-100 font-bold text-xl mb-2'>
              Let's connect
            </p>
            <input 
            type="text"
            id='name'
            placeholder='Your Name ...'
            name='name'
            className='mb-2 w-full rounded-md border border-blue-600 py-2 pl-2 pr-4'    
            />

          <input 
            type="text"
            id='name'
            placeholder='Your Email ...'
            name='name'
            className='mb-2 w-full rounded-md border border-blue-600 py-2 pl-2 pr-4'    
            />

          <textarea
            type="text"
            id='name'
            placeholder='Your Message ...'
            cols='30'
            rows='4'
            name='name'
            className='mb-2 w-full rounded-md border border-blue-600 py-2 pl-2 pr-4'    
            />
            <button
              type = 'submit'
              className='w-full py-3 rounded-md text-gray-100 font-semibond text-xl bg-primary-color' 
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