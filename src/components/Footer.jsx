import React from 'react'
import { FaGithubSquare, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1000px] mx-auto flex justify-between items-center p-6 md:p-20 text-sm mt-12 border-t border-zinc-800'>
      <div className='space-y-4'>
         <h3 className='text-2xl text-zinc-200 font-semibold'>Ivan.</h3>
         <div className='flex flex-row gap-6 text-zinc-400 text-4xl'>
           <a href="https://github.com/BUTTERCUPXCZ" className="hover:text-white transition-colors duration-300"><FaGithubSquare size={24} /></a>
           <a href="https://www.instagram.com/ivan.eltagonde/" className="hover:text-white transition-colors duration-300"><FaInstagram size={24} /></a>
         </div>
      </div>
       <p className='text-zinc-500'>@2025 Ivan Eltagonde</p>
      
    </div>
  )
}

export default Footer