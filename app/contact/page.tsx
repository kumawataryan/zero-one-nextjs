import ContactForm from '@/components/ContactForm'
import HeroAbout from '@/components/Hero/HeroAbout'
import type { Metadata } from "next";
import React from 'react'
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
    title: "Contact 01 Agency",
    description:
        "Talk to 01 Agency about your website, app, design, AI, or marketing project.",
    path: "/contact",
});

const ContactPage = () => {
    return (
        <div>
            {/* Hero About */}
            <HeroAbout />

            {/* Contact Form */}
            <ContactForm heading={true} />
        </div>
    )
}

export default ContactPage
