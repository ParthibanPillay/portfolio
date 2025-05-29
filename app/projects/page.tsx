import React from 'react';
import { AuroraText } from "@/components/magicui/aurora-text";
import { Pinyon_Script, Lora } from 'next/font/google';
import { PinContainer } from '@/components/ui/3d-pin';
import Image from "next/image";

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

const projects = [
  {
    title: "GenAI SaaS",
    img: '/genAI.png',
    desc: "All in one place for generating content."
  },
  {
    title: "Collabify",
    img: '/collabify.png',
    desc: "Collabify is a real-time collaboration platform for teams with integrated voice and video calls. It streamlines communication and boosts productivity within workspaces."
  },
  {
    title: "coding.cafe",
    img: '/codingCafe.png',
    desc: "Simple CLI-based tool for streaming music while coding. Especially made for productivity nerds who like to code while listening to music."
  }
]

const ProjectPage = () => {
  return (
    <div>
      <div className={`text-center ${pinyon.className} text-[100px] mt-10`}>
        my <AuroraText>work</AuroraText>
      </div>
      <div className='mt-0 h-[40rem] w-full flex items-center justify-center gap-x-50'>
        {projects.map((list) => (
          <PinContainer title={list.title} className={`${lora.className} grid  h-[25rem] text-2xl w-[30rem] cursor-none gap-y-5`}>
            <h1 className='text-2xl text-center'>{list.title}</h1>
            <p className='text-[20px]'>{list.desc}</p>
            <Image alt='container-images' src={list.img} width={1000} height={1000} />
          </PinContainer>
        ))}
      </div>
    </div>
  )
}

export default ProjectPage
