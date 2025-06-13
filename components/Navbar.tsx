import React from 'react'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from './ui/navigation-menu';
import { Link } from 'react-scroll';
import { Lora } from 'next/font/google';
import Image from 'next/image';
import logo from "@/public/logo.png";

const lora = Lora({
    subsets: ['latin'],
    weight: '500', // Only '400' available for Pinyon Script
    variable: '--font-lora',
    display: 'swap',
});

const Navbar = () => {
    return (
        <nav className='flex items-center justify-around p-10 text-5xl'>
            <Image
                width={120}
                height={120}
                src={logo}
                alt='logo image'
            />
            <NavigationMenu>
                <NavigationMenuList className='gap-10'>
                    <NavigationMenuItem>
                            <NavigationMenuLink href='section1' className={`${lora.className} cursor-none text-3xl hover:text-purple-500`}>
                                    my work
                            </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                            <NavigationMenuLink href='section2' className={`${lora.className} cursor-none text-3xl hover:text-purple-500`}>
                                About Me
                            </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                            <NavigationMenuLink href='section3' className={`${lora.className} cursor-none text-3xl hover:text-purple-500`}>
                                Connect
                            </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </nav>
    )
}

export default Navbar