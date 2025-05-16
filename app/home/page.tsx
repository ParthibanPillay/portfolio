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
                <nav className='flex items-center justify-around border'>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                        PSP
                    </h2>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <Link href="/projects" passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        My Work
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/about" passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        About Me
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/contact" passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Connect
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </nav>

                <div className='grid grid-col-1 justify-center'>
                    <br />
                    <h1 className={`text-center text-[60px] ${lora.className}`}>
                        I help turn ideas
                    </h1>
                    <br />
                    <h2 className={`text-[60px] ${lora.className}`}>
                        into seamless <span className={`text-[60px] text-purple-500 ${pinyon.className}`}>Experiences</span>
                    </h2>
                </div>

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

            {/*project section*/}
            <ProjectPage />

            {/*about me section*/}
            <Aboutpage />
        </div >
        </>
    );
}
export default Home;