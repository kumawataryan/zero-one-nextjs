import ContactForm from '@/components/ContactForm'
import HeroAbout from '@/components/Hero/HeroAbout'
import React from 'react'

const ContactPage = () => {
    return (
        <div>
            {/* Hero About */}
            <HeroAbout />

            {/* Contact Form */}
            <ContactForm />
        </div>
    )
}

export default ContactPage