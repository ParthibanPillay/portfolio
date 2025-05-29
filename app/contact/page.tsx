import { RippleButton } from '@/components/magicui/ripple-button';
import React from 'react'

const ContactPage = () => {
    return (
        <div>
            <div className='grid text-center gap-y-20'>
                <h1>Contact me</h1>
                <p>
                    Want to chat? Just shoot me a dm with a direct question on twitter and I'll respond whenever I can. I will ignore all soliciting.
                </p>
            </div>
            <RippleButton>Get in touch</RippleButton>
        </div>
    )
}

export default ContactPage;