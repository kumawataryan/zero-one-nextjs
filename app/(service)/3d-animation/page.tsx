"use client"

import ContactForm from '@/components/ContactForm'
import HeroService from '@/components/Hero/HeroService'
import PortfolioCard from '@/components/Portfolio/PortfolioCard'
import PricingSection from '@/components/PricingSection'
import SubServiceCard from '@/components/Service/SubServiceCard'
import { Check } from 'lucide-react'
import React from 'react'

const ServicePage = () => {

    const heroServiceData = {
        title: '3D Animation',
        description: 'Our 3D animation services bring your ideas to life with stunning visuals and captivating storytelling.',
        services: [
            'Character Animation',
            'Product Visualization',
            'Architectural Visualization',
            'Explainer Videos',
            'Motion Graphics',
            '3D Modeling',
            '3D Rendering',
            'Visual Effects',
            'Animation for Games',
            'Animation for Films',
            'Virtual Reality',
            'Augmented Reality',
            'Simulation',
            'Medical Animation',
            'Educational Animation',
            'Promotional Videos',
            'Interactive Animation',
            'Animation Consulting'
        ],
        videoSrc: '/hero-video.mp4',
        stats: [
            { label: 'Projects Completed', value: 150 },
            { label: 'Happy Clients', value: 100 },
            { label: 'Awards Won', value: 20 },
            { label: 'Years of Experience', value: 10 },
        ],
    }

    const subServiceData = [
        {
            name: "Character Animation",
            short_information: "Bring characters to life with expressive and realistic animations for films, games, and more.",
            key_points: `Character Rigging
                       Motion Capture
                       Lip Sync
                       Facial Animation
                       Body Mechanics
                       Performance Animation`
        },
        {
            name: "Product Visualization",
            short_information: "Create detailed and realistic 3D models of products for marketing, prototyping, and presentations.",
            key_points: `3D Modeling
                       Texturing
                       Lighting
                       Rendering
                       Animation
                       Interactive Demos`
        },
        {
            name: "Architectural Visualization",
            short_information: "Visualize architectural designs with photorealistic 3D renderings and animations.",
            key_points: `3D Modeling
                       Texturing
                       Lighting
                       Rendering
                       Walkthroughs
                       Flythroughs`
        },
        {
            name: "Explainer Videos",
            short_information: "Simplify complex ideas with engaging and informative 3D animated explainer videos.",
            key_points: `Storyboarding
                       Scriptwriting
                       Animation
                       Voiceover
                       Sound Design
                       Editing`
        }
    ]

    const whyInvestData = [
        { text: 'Enhanced Visual Appeal' },
        { text: 'Improved Engagement' },
        { text: 'Increased Conversion Rates' },
        { text: 'Better Communication' },
        { text: 'Competitive Advantage' },
    ]

    const industriesAndTechnologiesData = {
        industries: [
            'Advertising', 'Automotive', 'Education', 'Entertainment', 'Healthcare',
            'Manufacturing', 'Real Estate', 'Retail', 'Technology', 'Training'
        ],
        technologies: [
            'Maya', '3ds Max', 'Blender', 'Cinema 4D', 'Houdini', 'ZBrush'
        ]
    }

    const portfolioData = [
        {
            name: "Animation Project 1",
            link: "/portfolio/animation-project-1",
            image: "/portfolio/p-1.png",
            tags: [
                { tagLink: '/portfolio/animation', tagName: 'Animation' },
                { tagLink: '/portfolio/3d', tagName: '3D' },
            ]
        },
        {
            name: "Animation Project 2",
            link: "/portfolio/animation-project-2",
            image: "/portfolio/p-2.png",
            tags: [
                { tagLink: '/portfolio/animation', tagName: 'Animation' },
                { tagLink: '/portfolio/3d', tagName: '3D' }
            ]
        },
        {
            name: "Animation Project 3",
            link: "/portfolio/animation-project-3",
            image: "/portfolio/p-3.png",
            tags: [
                { tagLink: '/portfolio/animation', tagName: 'Animation' },
                { tagLink: '/portfolio/3d', tagName: '3D' }
            ]
        },
        {
            name: "Animation Project 4",
            link: "/portfolio/animation-project-4",
            image: "/portfolio/p-1.png",
            tags: [
                { tagLink: '/portfolio/animation', tagName: 'Animation' },
                { tagLink: '/portfolio/3d', tagName: '3D' }
            ]
        }
    ]

    const pricingData = [
        {
            value: "basic",
            label: "Basic (500-1000$)",
            content: [
                { label: "Duration", detail: "up to 30 seconds" },
                { label: "Revisions", detail: "1-2" },
                { label: "Resolution", detail: "HD" },
                { label: "Storyboard", icon: <Check className="w-4 h-4" /> },
                { label: "Basic Sound Design", icon: <Check className="w-4 h-4" /> },
                { label: "Rendering", icon: <Check className="w-4 h-4" /> },
            ],
            buttonText: "Send Request"
        },
        {
            value: "standard",
            label: "Standard (1000-3000$)",
            content: [
                { label: "Duration", detail: "up to 60 seconds" },
                { label: "Revisions", detail: "3-5" },
                { label: "Resolution", detail: "Full HD" },
                { label: "Storyboard", icon: <Check className="w-4 h-4" /> },
                { label: "Advanced Sound Design", icon: <Check className="w-4 h-4" /> },
                { label: "Rendering", icon: <Check className="w-4 h-4" /> },
            ],
            buttonText: "Send Request"
        },
        {
            value: "premium",
            label: "Premium (3000-5000$)",
            content: [
                { label: "Duration", detail: "up to 120 seconds" },
                { label: "Revisions", detail: "Unlimited" },
                { label: "Resolution", detail: "4K" },
                { label: "Storyboard", icon: <Check className="w-4 h-4" /> },
                { label: "Professional Sound Design", icon: <Check className="w-4 h-4" /> },
                { label: "Rendering", icon: <Check className="w-4 h-4" /> },
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
                    <p className='opacity-60 max-w-[500px] mt-4 mb-12'>Our clientele ranges from a new app startup to a multinational business wanting to revamp their website for our UI UX design services.</p>
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

            {/* Portfolio Section */}
            <div className='p-6 md:mt-28 sm:mt-18'>
                <section className='flex flex-col justify-left items-left mb-6'>
                    <div className='flex flex-col gap-2'>
                        <h2 className='sm:text-[24px] xl:text-[64px] font-semibold leading-tight'>Our {heroServiceData.title} Portfolio</h2>
                        <p className='max-w-[500px]'>Welcome to our collection of UI/UX Design Projects. At ZERO-ONE, we understand the importance of a seamless user experience and striking visual appeal.</p>
                    </div>
                </section>

                <div className="columns-1 sm:columns-1 md:columns-2 lg:columns-2 xl:columns-3 2xl:columns-4 gap-8 space-y-8 xl:mt-10 sm:mt-4">
                    {portfolioData.map((item, index) => (
                        <PortfolioCard
                            key={index}
                            name={item.name}
                            link={item.link}
                            image={item.image}
                            tags={item.tags}
                        />
                    ))}
                </div>
            </div>

            {/* Contact Form */}
            <div className='mt-32'>
                <ContactForm heading={true} />
            </div>
        </div>
    )
}

export default ServicePage