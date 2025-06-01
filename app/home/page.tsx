"use client";
import { Meteors } from '@/components/magicui/meteors';
import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from 'next/link';
import { Globe } from '@/components/magicui/globe';
import { Pinyon_Script } from 'next/font/google';
import { Lora } from 'next/font/google';
import ProjectPage from '../projects/page';
import Aboutpage from '../about/page';
import { MacbookScroll } from '@/components/ui/macbook-scroll';
import { Badge } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ContactPage from '../contact/page';

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


const Home = () => {
    return (
        <>
            <div className="h-full w-full text-5xl">
                <Meteors number={30} />

                {/* navbar component */}
                <Navbar />

                <div className='grid grid-col-1 justify-center mt-10'>
                    <br />
                    <h1 className={`text-center text-[60px] ${lora.className}`}>
                        "Fueled by Coffee.
                    </h1>
                    <br />
                    <h2 className={`text-[60px] ${lora.className}`}>
                        Driven by Design. Powered by <span className={`text-[60px] text-purple-500 ${pinyon.className}`}>Code</span>.
                    </h2>
                </div>
                {/* macbook model */}
                <div className='overflow-hidden'>
                    <MacbookScroll
                        title={
                            <span>
                                Little preview of my work .
                            </span>
                        }
                        badge={
                            <a href="https://github.com/ParthibanPillay">
                                <Badge className="h-10 w-10 transform -rotate-12" />
                            </a>
                        }
                        src={`/github_pic.png`}
                        showGradient={false}
                    />
                </div>


                {/*project section*/}
                <ProjectPage />

                {/*about me section*/}
                <Aboutpage />

                {/*contact me section */}
                <ContactPage />
            </div >
        </>
    );
}
export default Home;