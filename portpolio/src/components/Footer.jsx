import React from 'react'
import { FaGithubSquare, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12 '>
        <div className='space-y-4'>
            <h3 className='text-2xl font-semibold text-gray-200'>K.N.U.Ranasinghe</h3>
            <div className='flex flex-row gap-6 text-4xl text-gray-400'>
                <a href='#'><FaGithubSquare/></a> 
                <a href='#'><FaInstagram/></a>                
            </div>

        </div>
        <p className='text-gray-400'>@2024 K.N.U.Ranasinghe</p>
      
    </div>
  )
}

export default Footer
