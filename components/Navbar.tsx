import React from 'react'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from './ui/navigation-menu'
import Link from 'next/link'
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
                        <Link href="/projects" passHref>
                            <NavigationMenuLink className={`${lora.className} cursor-none text-3xl`}>
                                My Work
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/about" passHref>
                            <NavigationMenuLink className={`${lora.className} cursor-none text-3xl`}>
                                About Me
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/contact" passHref>
                            <NavigationMenuLink className={`${lora.className} cursor-none text-3xl`}>
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