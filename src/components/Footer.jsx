import React from 'react'
import { FaGithubSquare, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1200px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12 border-t border-gray-800/50'>
      <div className='space-y-4'>
         <h3 className='text-2xl text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-300 font-semibold'>Ivan Eltagonde</h3>
         <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
           <a href="https://github.com/BUTTERCUPXCZ" className="hover:text-blue-400 transition-colors duration-300"><FaGithubSquare/></a>
           <a href="https://www.instagram.com/ivan.eltagonde/" className="hover:text-blue-400 transition-colors duration-300"><FaInstagram /></a>
         </div>
      </div>
       <p className='text-gray-400'>@2025 Ivan Eltagonde</p>
      
    </div>
  )
}

export default Footer