import ContactForm from '@/components/ContactForm'
import HeroService from '@/components/Hero/HeroService'
import PortfolioCard from '@/components/Portfolio/PortfolioCard'
import PricingSection from '@/components/PricingSection'
import SubServiceCard from '@/components/Service/SubServiceCard'
import { Check } from 'lucide-react'
import React from 'react'

const ServicePage = () => {

    const heroServiceData = {
        title: 'UI/UX Design',
        description: 'Our {heroServiceData.title} are tailored to create visually appealing and user-friendly interfaces that enhance user experience and engagement.',
        services: [
            'Pre MVP Concept',
            'UI/UX Design',
            'Redesign UI/UX',
            'UI/UX Audit',
            'User Research',
            'Wireframing',
            'Prototyping',
            'Visual Design',
            'Usability Testing',
            'Interaction Design',
            'Information Architecture',
            'User Journey Mapping',
            'Market Research',
            'Heuristic Evaluation',
            'User Feedback Analysis',
            'Analytics Review',
            'Competitive Analysis',
            'Recommendations Report'
        ],
        videoSrc: '/hero-video.mp4',
        stats: [
            { label: 'Projects Completed', value: 120 },
            { label: 'Happy Clients', value: 85 },
            { label: 'Awards Won', value: 15 },
            { label: 'Years of Experience', value: 8 },
        ],
    }
    
    const subServiceData = [
        {
            name: "Pre MVP Concept",
            short_information: "Design initial design concepts and user flows to validate your idea and ensure a strong foundation before building your Minimum Viable Product (MVP).",
            key_points: `Information Architecture
                       User Journey Mapping
                       Prototyping
                       Wireframing
                       Usability Testing
                       User Personas
                       Market Research`
        },
        {
            name: "UI/UX Design",
            short_information: "Create visually appealing and user-friendly interfaces that enhance user experience and engagement.",
            key_points: `User Research
                       Wireframing
                       Prototyping
                       Visual Design
                       Usability Testing
                       Interaction Design`
        },
        {
            name: "Redesign UI/UX",
            short_information: "Revamp existing designs to improve usability, aesthetics, and overall user satisfaction.",
            key_points: `Heuristic Evaluation
                       User Feedback Analysis
                       Redesign Prototyping
                       Visual Enhancements
                       Usability Testing
                       Implementation Support`
        },
        {
            name: "UI/UX Audit",
            short_information: "Conduct a thorough analysis of your current UI/UX to identify areas of improvement and provide actionable recommendations.",
            key_points: `Heuristic Evaluation
                       User Testing
                       Analytics Review
                       Competitive Analysis
                       Recommendations Report
                       Implementation Guidance`
        }
    ]
    
    const whyInvestData = [
        { text: 'Enhanced User Satisfaction' },
        { text: 'Increased Conversion Rates' },
        { text: 'Reduced Development Costs' },
        { text: 'Boost User Engagement' },
        { text: 'Improve Brand Loyalty' },
    ]
    
    const industriesAndTechnologiesData = {
        industries: [
            'Healthcare', 'Finance', 'Real Estate', 'Education', 'Entertainment',
            'Travel', 'Retail', 'Food & Beverage', 'Technology', 'Non-Profit'
        ],
        technologies: [
            'Figma', 'Sketch', 'Adobe XD', 'InVision', 'Zeplin', 'Marvel'
        ]
    }
    
    const portfolioData = [
        {
            name: "Project Name",
            link: "/portfolio/project-name",
            image: "/portfolio/p-1.png",
            tags: [
                { tagLink: '/portfolio/design', tagName: 'Design' },
                { tagLink: '/portfolio/ongoing', tagName: 'Ongoing' },
                { tagLink: '/portfolio/ongoing', tagName: 'Ongoing' },
            ]
        },
        {
            name: "Project Name",
            link: "/portfolio/project-name",
            image: "/portfolio/p-2.png",
            tags: [
                { tagLink: '/portfolio/design', tagName: 'Design' },
                { tagLink: '/portfolio/ongoing', tagName: 'Ongoing' }
            ]
        },
        {
            name: "Project Name",
            link: "/portfolio/project-name",
            image: "/portfolio/p-3.jpg",
            tags: [
                { tagLink: '/portfolio/design', tagName: 'Design' },
                { tagLink: '/portfolio/ongoing', tagName: 'Ongoing' }
            ]
        },
        {
            name: "Project Name",
            link: "/portfolio/project-name",
            image: "/portfolio/p-2.png",
            tags: [
                { tagLink: '/portfolio/design', tagName: 'Design' },
                { tagLink: '/portfolio/ongoing', tagName: 'Ongoing' }
            ]
        }
    ]
    
    const pricingData = [
        {
            value: "starter",
            label: "Starter (100-500$)",
            content: [
                { label: "Pages", detail: "up to 10 pages" },
                { label: "Designers", detail: "at most 1-3" },
                { label: "Iterations", detail: "1-3 or more until satisfied" },
                { label: "User flow", detail: "1" },
                { label: "Ready for development", icon: <Check className="w-4 h-4" /> },
                { label: "Branding Elements", icon: <Check className="w-4 h-4" /> },
                { label: "Custom Illustrations & Graphics", icon: <Check className="w-4 h-4" /> },
                { label: "Accessibility testing", icon: <Check className="w-4 h-4" /> },
                { label: "Usability testing", icon: <Check className="w-4 h-4" /> },
                { label: "Well documented", icon: <Check className="w-4 h-4" /> },
            ],
            buttonText: "Send Request"
        },
        {
            value: "standard",
            label: "Standard (500-2000$)",
            content: [
                { label: "Pages", detail: "up to 10 pages" },
                { label: "Designers", detail: "at most 5-6" },
                { label: "Iterations", detail: "4-5 or more until satisfied" },
                { label: "User flow", detail: "1" },
                { label: "Ready for development", icon: <Check className="w-4 h-4" /> },
                { label: "Branding Elements", icon: <Check className="w-4 h-4" /> },
                { label: "Custom Illustrations & Graphics", icon: <Check className="w-4 h-4" /> },
                { label: "Accessibility testing", icon: <Check className="w-4 h-4" /> },
                { label: "Usability testing", icon: <Check className="w-4 h-4" /> },
                { label: "Well documented", icon: <Check className="w-4 h-4" /> },
            ],
            buttonText: "Send Request"
        },
        {
            value: "redesign",
            label: "Redesign (500-2000$)",
            content: [
                { label: "Pages", detail: "up to 10 pages" },
                { label: "Designers", detail: "at most 10-20" },
                { label: "Iterations", detail: "10-15 or more until satisfied" },
                { label: "User flow", detail: "1" },
                { label: "Ready for development", icon: <Check className="w-4 h-4" /> },
                { label: "Branding Elements", icon: <Check className="w-4 h-4" /> },
                { label: "Custom Illustrations & Graphics", icon: <Check className="w-4 h-4" /> },
                { label: "Accessibility testing", icon: <Check className="w-4 h-4" /> },
                { label: "Usability testing", icon: <Check className="w-4 h-4" /> },
                { label: "Well documented", icon: <Check className="w-4 h-4" /> },
            ],
            buttonText: "Send Request"
        },
        {
            value: "custom",
            label: "Custom",
            content: [
                { label: "Pages", detail: "up to 10 pages" },
                { label: "Designers", detail: "at most 5-6" },
                { label: "Iterations", detail: "4-5 or more until satisfied" },
                { label: "User flow", detail: "1" },
                { label: "Ready for development", icon: <Check className="w-4 h-4" /> },
                { label: "Branding Elements", icon: <Check className="w-4 h-4" /> },
                { label: "Custom Illustrations & Graphics", icon: <Check className="w-4 h-4" /> },
                { label: "Accessibility testing", icon: <Check className="w-4 h-4" /> },
                { label: "Usability testing", icon: <Check className="w-4 h-4" /> },
                { label: "Well documented", icon: <Check className="w-4 h-4" /> },
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
                    <h2 className='sm:text-[32px] xl:text-[64px] font-semibold leading-tight'>{heroServiceData.title}</h2>
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
            <div className='bg-[#141414] md:py-48 sm:py-24 w-full relative mt-36 sm:mt-18'>
                <h3 className='sm:text-[64px] sm:leading-[64px] md:text-[128px] md:leading-[128px] font-bold text-white mx-6 z-0 absolute'>
                    Why Invest <br />in {heroServiceData.title}?
                </h3>

                <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-2 md:mt-[200px] sm:mt-[160px] md:w-2/3 sm:w-fit md:pl-80 sm:pl-6'>
                    {whyInvestData.map((benefit, index) => (
                        <div key={index} className='bg-gradient-to-r from-white/5 to-white/10 text-white p-8 rounded-md backdrop-blur-md h-fill'>
                            <p className='md:text-[20px] sm:text-[16px] font-light'>{benefit.text}</p>
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
                <ContactForm />
            </div>
        </div>
    )
}

export default ServicePage