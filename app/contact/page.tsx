import { AuroraText } from "@/components/magicui/aurora-text";
import { Pinyon_Script, Lora } from 'next/font/google';
import { Button } from '@/components/ui/button';
import { Element } from "react-scroll";
import { Input } from '@/components/ui/input';

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

console.log('Button:', Button);
console.log('Input:', Input);
console.log('AuroraText:', AuroraText);

const ContactPage = () => {
    return (
        <Element name='section3'>
            <div className={`${lora.className}`}>
                <div className='grid text-center gap-y-20 text-3xl'>
                    <h1>Contact <AuroraText className={`${pinyon.className} text-[80px]`}>me</AuroraText></h1>
                </div>
                <div className='flex justify-center items-center gap-10 mt-10 mb-50'>
                    <Input type='email' placeholder='Email' className='w-3xl' />
                    <Button variant='ghost' size='lg' className='border border-blue-500 cursor-none'>Get in touch</Button>
                </div>
            </div>
        </Element>
    )
}

export default ContactPage;