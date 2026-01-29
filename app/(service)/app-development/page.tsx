"use client"

import ContactForm from '@/components/ContactForm'
import HeroService from '@/components/Hero/HeroService'
import PricingSection from '@/components/PricingSection'
import SubServiceCard from '@/components/Service/SubServiceCard'
import { Check } from 'lucide-react'
import React from 'react'

const ServicePage = () => {

    const heroServiceData = {
        title: 'App Development',
        description: 'Our app development services transform your ideas into high-quality, user-friendly mobile applications across platforms.',
        services: [
            'iOS Development',
            'Android Development',
            'Cross-Platform Development',
            'UI/UX Design',
            'App Maintenance',
            'Backend Development',
            'API Integration',
            'Quality Assurance',
            'App Store Optimization',
            'Progressive Web Apps (PWAs)',
            'Native App Development',
            'Enterprise App Solutions',
            'Augmented Reality Apps',
            'Game Development',
            'Social Media Apps',
            'E-commerce Apps',
            'Consulting Services'
        ],
        videoSrc: '/hero-app-video.mp4',
        stats: [
            { label: 'Projects Completed', value: 120 },
            { label: 'Happy Clients', value: 90 },
            { label: 'Awards Won', value: 10 },
            { label: 'Years of Experience', value: 6 },
        ],
    }
    
    const subServiceData = [
        {
            name: "iOS Development",
            short_information: "Create stunning iOS applications that offer exceptional performance and a seamless user experience.",
            key_points: `Swift Development
                         Objective-C
                         App Store Submission
                         User Interface Design
                         Testing and Debugging
                         App Analytics`
        },
        {
            name: "Android Development",
            short_information: "Develop powerful Android applications tailored to your business needs with a focus on usability and design.",
            key_points: `Java/Kotlin Development
                         Material Design Principles
                         Google Play Store Submission
                         Testing and Debugging
                         User Feedback Integration
                         Performance Optimization`
        },
        {
            name: "Cross-Platform Development",
            short_information: "Build applications that run on multiple platforms with a single codebase for efficiency and cost-effectiveness.",
            key_points: `React Native
                         Flutter
                         Xamarin
                         Responsive UI
                         Shared Codebase
                         Faster Development`
        },
        {
            name: "UI/UX Design",
            short_information: "Design user-centric interfaces that enhance user experience and increase app engagement.",
            key_points: `User Research
                         Wireframing
                         Prototyping
                         User Testing
                         Interaction Design
                         Visual Design`
        }
    ]
    
    const whyInvestData = [
        { text: 'Enhanced User Engagement' },
        { text: 'Increased Revenue Opportunities' },
        { text: 'Broader Audience Reach' },
        { text: 'Improved Customer Satisfaction' },
        { text: 'Competitive Edge in Market' },
    ]
    
    const industriesAndTechnologiesData = {
        industries: [
            'Healthcare', 'Finance', 'Retail', 'Education', 'Entertainment', 
            'Travel', 'Real Estate', 'Gaming', 'Automotive', 'Telecommunications'
        ],
        technologies: [
            'Swift', 'Kotlin', 'React Native', 'Flutter', 'Xamarin', 
            'Java', 'Objective-C', 'Node.js', 'Firebase', 'MongoDB'
        ]
    }
    
    const pricingData = [
        {
            value: "basic",
            label: "Basic (500-1000$)",
            content: [
                { label: "Features", detail: "Up to 5 basic features" },
                { label: "Platforms", detail: "Single platform" },
                { label: "Design", icon: <Check className="w-4 h-4" /> },
                { label: "App Store Submission", icon: <Check className="w-4 h-4" /> },
                { label: "Basic Analytics", icon: <Check className="w-4 h-4" /> },
            ],
            buttonText: "Send Request"
        },
        {
            value: "standard",
            label: "Standard (1000-3000$)",
            content: [
                { label: "Features", detail: "Up to 10 features" },
                { label: "Platforms", detail: "Two platforms" },
                { label: "Custom Design", icon: <Check className="w-4 h-4" /> },
                { label: "App Store Submission", icon: <Check className="w-4 h-4" /> },
                { label: "Advanced Analytics", icon: <Check className="w-4 h-4" /> },
            ],
            buttonText: "Send Request"
        },
        {
            value: "premium",
            label: "Premium (3000-5000$)",
            content: [
                { label: "Features", detail: "Unlimited features" },
                { label: "Platforms", detail: "Multiple platforms" },
                { label: "Custom Design", icon: <Check className="w-4 h-4" /> },
                { label: "In-depth Analytics", icon: <Check className="w-4 h-4" /> },
                { label: "Ongoing Support", icon: <Check className="w-4 h-4" /> },
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
