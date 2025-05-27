import React from 'react';
import { AuroraText } from "@/components/magicui/aurora-text";
import { Pinyon_Script } from 'next/font/google';

const pinyon = Pinyon_Script({
  subsets: ['latin'],
  weight: '400', // Only '400' available for Pinyon Script
  variable: '--font-pinyon',
  display: 'swap',
});

const ProjectPage = () => {
  return (
    <>
      <div className={`min-h-screen w-full text-center ${pinyon.className} text-[100px]`}>
        my <AuroraText>work</AuroraText>
      </div>
    </>
  )
}

export default ProjectPage
