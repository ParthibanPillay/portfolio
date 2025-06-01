import React from 'react'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from './ui/navigation-menu';
import { Link, Element } from 'react-scroll';
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
                        <Link to="section1" smooth={true}>
                            <NavigationMenuLink className={`${lora.className} cursor-none text-3xl hover:text-purple-500`}>
                                    my work
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link to='section2' smooth={true}>
                            <NavigationMenuLink className={`${lora.className} cursor-none text-3xl hover:text-purple-500`}>
                                About Me
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link to='section3' smooth={true}>
                            <NavigationMenuLink className={`${lora.className} cursor-none text-3xl hover:text-purple-500`}>
                                Connect
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </nav>
    )
}

export default Navbar