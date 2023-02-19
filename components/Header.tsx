import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"
import { Social } from '../typings';

type Props = {
    socials: Social[]
};

export default function Header({ socials }: Props) {
  return (
    <header className='sticky top-0 p-4 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>

        
        <motion.div 
        
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{
            duration: 1,

        }}
        
        className='flex flex-row items-center text-gray-300 cursor-pointer'>
            <SocialIcon
             className='cursor-pointer'
             network='email'
             fgColor='gray'
             bgColor='transparent'
             
            />
            <p className='uppercase hidden md:inline-flex text-sm text-blue-900 font-semibold'>You can also mail to me.</p>
        </motion.div>
       
         
        <motion.div 
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{
            duration: 1,
        }}

        className='flex flex-row items-center space-x-3'>
            {socials.map((social) => (
                <SocialIcon 
                key={social._id}
                url={social.url}
                />
            ))}
             {/* <SocialIcon url='http://google.com/'
             />
             <SocialIcon url='http://youtube.com/'
             />
             <SocialIcon url='http://github.com/'
             /> */}
        </motion.div>
    </header>
  )
}

 