"use client"

import ContactForm from '@/components/ContactForm'
import HeroService from '@/components/Hero/HeroService'
import PricingSection from '@/components/PricingSection'
import SubServiceCard from '@/components/Service/SubServiceCard'
import { Check } from 'lucide-react'
import React from 'react'

const ServicePage = () => {

    const heroServiceData = {
        title: 'Website Development',
        description: 'Our website development services provide you with visually stunning, responsive, and functional websites tailored to your business needs.',
        services: [
            'Custom Website Design',
            'E-commerce Development',
            'Content Management Systems (CMS)',
            'Responsive Design',
            'Web Application Development',
            'API Integration',
            'SEO Optimization',
            'UI/UX Design',
            'Mobile-Friendly Websites',
            'Website Maintenance',
            'Performance Optimization',
            'Security Implementation',
            'Database Management',
            'Third-Party Integrations',
            'Landing Page Design',
            'Corporate Websites',
            'Portfolio Websites',
            'Consulting Services'
        ],
        videoSrc: '/hero-webdev-video.mp4',
        stats: [
            { label: 'Projects Completed', value: 200 },
            { label: 'Happy Clients', value: 150 },
            { label: 'Awards Won', value: 15 },
            { label: 'Years of Experience', value: 8 },
        ],
    }
    
    const subServiceData = [
        {
            name: "Custom Website Design",
            short_information: "Unique, user-friendly website designs crafted to suit your brand’s identity and business goals.",
            key_points: `Brand Analysis
                         UX Research
                         Responsive Design
                         Visual Design
                         Interaction Design
                         Prototyping`
        },
        {
            name: "E-commerce Development",
            short_information: "Develop secure, scalable, and optimized e-commerce platforms tailored to maximize conversions.",
            key_points: `Custom Cart Solutions
                         Payment Integration
                         Product Management
                         Inventory Management
                         Security & Compliance
                         Mobile Responsiveness`
        },
        {
            name: "Content Management Systems (CMS)",
            short_information: "Effortlessly manage your website content with a custom or ready-made CMS solution.",
            key_points: `WordPress
                         Joomla
                         Drupal
                         Custom CMS
                         User Permissions
                         SEO Optimization`
        },
        {
            name: "Web Application Development",
            short_information: "Create powerful, scalable web applications for a seamless user experience and robust functionality.",
            key_points: `Custom App Development
                         API Integration
                         Performance Optimization
                         Security & Authentication
                         Cross-Browser Compatibility
                         Cloud Deployment`
        }
    ]
    
    const whyInvestData = [
        { text: 'Enhanced User Experience' },
        { text: 'Improved Customer Engagement' },
        { text: 'Increased Conversion Rates' },
        { text: 'Improved Brand Credibility' },
        { text: 'Edge Over Competitors' },
    ]
    
    const industriesAndTechnologiesData = {
        industries: [
            'Retail', 'Healthcare', 'Education', 'Finance', 'Real Estate', 
            'Entertainment', 'Non-profit', 'Technology', 'Manufacturing', 'Hospitality'
        ],
        technologies: [
            'HTML/CSS', 'JavaScript', 'React', 'Vue.js', 'Angular', 
            'Node.js', 'PHP', 'WordPress', 'Shopify', 'Magento'
        ]
    }
},
        {
            name: "Corporate Website",
            link: "/portfolio/corporate-website",
            image: "/portfolio/corporate.png",
            tags: [
                { tagLink: '/portfolio/web-development', tagName: 'Web Development' },
                { tagLink: '/portfolio/corporate', tagName: 'Corporate' }
            ]
        },
        {
            name: "Portfolio Website",
            link: "/portfolio/portfolio-website",
            image: "/portfolio/portfolio.png",
            tags: [
                { tagLink: '/portfolio/web-development', tagName: 'Web Development' },
                { tagLink: '/portfolio/portfolio', tagName: 'Portfolio' }
            ]
        },
        {
            name: "Non-Profit Website",
            link: "/portfolio/non-profit-website",
            image: "/portfolio/nonprofit.png",
            tags: [
                { tagLink: '/portfolio/web-development', tagName: 'Web Development' },
                { tagLink: '/portfolio/nonprofit', tagName: 'Non-Profit' }
            ]
        }
    ]
    
    const pricingData = [
        {
            value: "basic",
            label: "Basic (500-1000$)",
            content: [
                { label: "Pages", detail: "Up to 5 pages" },
                { label: "Revisions", detail: "1-2" },
                { label: "Responsive Design", icon: <Check className="w-4 h-4" /> },
                { label: "Basic SEO", icon: <Check className="w-4 h-4" /> },
                { label: "Hosting Setup", icon: <Check className="w-4 h-4" /> },
            ],
            buttonText: "Send Request"
        },
        {
            value: "standard",
            label: "Standard (1000-3000$)",
            content: [
                { label: "Pages", detail: "Up to 10 pages" },
                { label: "Revisions", detail: "3-5" },
                { label: "Responsive Design", icon: <Check className="w-4 h-4" /> },
                { label: "Advanced SEO", icon: <Check className="w-4 h-4" /> },
                { label: "E-commerce Functionality", icon: <Check className="w-4 h-4" /> },
            ],
            buttonText: "Send Request"
        },
        {
            value: "premium",
            label: "Premium (3000-5000$)",
            content: [
                { label: "Pages", detail: "Up to 20 pages" },
                { label: "Revisions", detail: "Unlimited" },
                { label: "Responsive Design", icon: <Check className="w-4 h-4" /> },
                { label: "Full SEO Suite", icon: <Check className="w-4 h-4" /> },
                { label: "Custom Integrations", icon: <Check className="w-4 h-4" /> },
            ],
            buttonText: "Send Request"
        },
        {
            value: "custom",
            label: "Talk to us",
            content: [
            ],
            buttonText: "Contact Us"
        }
    ]
    

    return (
        <div>

            {/* Hero */}
            <HeroService
                title={heroServiceData.title}
                description={heroServiceData.description}
                services={heroServiceData.services}
                videoSrc={heroServiceData.videoSrc}
                stats={heroServiceData.stats}
            />

            {/* Sub services  */}
            <div className='p-6 md:mt-32 sm:mt-12'>
                <div></div>
                <div>
                    <h2 className='sm:text-[32px] xl:text-[64px] font-semibold xl:leading-[64px] sm:leading-[32px]'>{heroServiceData.title}</h2>
                    <p className='opacity-60 max-w-[500px] mt-4 mb-12'>Our clientele includes businesses of all sizes, from startups to established enterprises, seeking innovative solutions across various services.</p>
                </div>

                {subServiceData.map((service, index) => (
                    <SubServiceCard
                        key={index}
                        name={service.name}
                        short_information={service.short_information}
                        key_points={service.key_points}
                    />
                ))}
            </div>


            {/* Why Invest */}
            <div className='bg-[#141414] md:py-48 sm:py-24 w-full sm:mt-18 xl:mt-32 flex sm:flex-col xl:flex-row xl:gap-24 sm:gap-8 px-6'>
                <h3 className='sm:text-[48px] sm:leading-[48px] md:text-[128px] md:leading-[128px] font-bold text-white z-0'>
                    Why Invest <br />in {heroServiceData.title}?
                </h3>

                <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-2 w-full'>
                    {whyInvestData.map((benefit, index) => (
                        <div key={index} className='bg-gradient-to-r from-white/5 to-white/10 text-white p-8 rounded-md backdrop-blur-md h-fill flex items-center'>
                            <p className='md:text-[24px] sm:text-[16px] font-medium'>{benefit.text}</p>
                        </div>
                    ))}
                </div>
            </div>


            {/* Industries and Technologies */}
            <div className='md:py-32 sm:py-20 grid md:grid-cols-2 sm:grid-cols-1 p-6 md:gap-32 sm:gap-16'>
                <section className='flex flex-col gap-6'>
                    <h4 className='md:text-[24px] sm:text-[18px] font-semibold'>Industries we are serving:</h4>
                    <ul className='flex flex-wrap gap-2'>
                        {industriesAndTechnologiesData.industries.map((industry: string, index: number) => (
                            <li key={index} className='bg-[#F2F2F2] p-4 w-fit rounded-lg font-medium text-[18px]'>{industry}</li>
                        ))}
                    </ul>
                </section>

                <section className='flex flex-col gap-6'>
                    <h4 className='md:text-[24px] sm:text-[18px] font-semibold'>Technologies we are using:</h4>
                    <ul className='flex flex-wrap gap-2'>
                        {industriesAndTechnologiesData.technologies.map((technology: string, index: number) => (
                            <li key={index} className='bg-[#F2F2F2] p-4 w-fit rounded-lg font-medium text-[18px]'>{technology}</li>
                        ))}
                    </ul>
                </section>
            </div>

            <PricingSection tabData={pricingData} />


            {/* Contact Form */}
            <div className='mt-32'>
                <ContactForm heading={true} />
            </div>
        </div>
    )
}

export default ServicePage
