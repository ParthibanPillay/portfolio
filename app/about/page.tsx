import { OrbitingCircles } from '@/components/magicui/orbiting-circles'
import { Icons } from "@/lib/Icons";
import { Pinyon_Script } from 'next/font/google';
import { Lora } from 'next/font/google';
import React from 'react'

const pinyon = Pinyon_Script({
  subsets: ['latin'],
  weight: '400', // Only '400' available for Pinyon Script
  variable: '--font-pinyon',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  weight: '500', // Only '400' available for Pinyon Script
  variable: '--font-lora',
  display: 'swap',
});

const Aboutpage = () => {
  return (
    <>
      <div className='text-center'>
        <h1 className={`${lora.className}`}>About<span className={`text-[70px] text-purple-500 ${pinyon.className}`}> me</span>
        </h1>
        <div className='grid grid-cols-2 min-h-screen mt-20 ml-20'>
          <p className={`text-start ${lora.className}`}>
            I'm a passionate and curious developer with a strong interest in building practical and creative solutions through code. I enjoy exploring new technologies, learning continuously, and working on projects that solve real-world problems. With a solid foundation in computer science and hands-on experience in full-stack development, I'm always eager to contribute, collaborate, and grow in the tech world.
          </p>
          <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
            <OrbitingCircles iconSize={40}>
              <Icons.whatsapp />
              <Icons.notion />
              <Icons.openai />
              <Icons.googleDrive />
              <Icons.whatsapp />
            </OrbitingCircles>
            <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
              <Icons.whatsapp />
              <Icons.notion />
              <Icons.openai />
              <Icons.googleDrive />
            </OrbitingCircles>
          </div>
        </div>
      </div>
    </>
  )
}

export default Aboutpage
