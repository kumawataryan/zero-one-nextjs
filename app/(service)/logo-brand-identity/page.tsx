import ContactForm from '@/components/ContactForm'
import HeroService from '@/components/Hero/HeroService'
import PortfolioCard from '@/components/Portfolio/PortfolioCard'
import PricingSection from '@/components/PricingSection'
import SubServiceCard from '@/components/Service/SubServiceCard'
import { Check } from 'lucide-react'
import React from 'react'

const ServicePage = () => {

    const heroServiceData = {
        title: 'Logo and Brand Identity',
        description: 'At Zero-One Agency, we create unique and memorable logos and brand identities that resonate with your target audience. Our comprehensive branding services are designed to establish a strong visual presence and communicate your brand’s core values effectively.',
        services: [
            'Logo Design',
            'Brand Strategy Development',
            'Visual Identity Design',
            'Brand Guidelines',
            'Business Card Design',
            'Stationery Design',
            'Social Media Branding',
            'Packaging Design',
            'Website Branding',
            'Brand Refresh',
            'Typography Selection',
            'Color Palette Development',
            'Icon Design',
            'Brand Messaging',
            'Competitive Analysis',
            'Market Research',
            'Visual Asset Creation'
        ],
        videoSrc: '/hero-video.mp4',
        stats: [
            { label: 'Logos Designed', value: 300 },
            { label: 'Happy Clients', value: 150 },
            { label: 'Branding Projects Completed', value: 200 },
            { label: 'Years of Experience', value: 8 },
        ],
    }
    
    const subServiceData = [
        {
            name: "Logo Design",
            short_information: "Craft unique and impactful logos that embody your brand’s essence and stand out in the marketplace.",
            key_points: `Concept Development
                         Typography Selection
                         Color Theory
                         Versatile File Formats
                         Brand Recognition`
        },
        {
            name: "Brand Strategy Development",
            short_information: "Create a strategic roadmap for your brand that aligns with your business goals and resonates with your target audience.",
            key_points: `Market Research
                         Audience Segmentation
                         Competitive Analysis
                         Value Proposition
                         Brand Positioning`
        },
        {
            name: "Visual Identity Design",
            short_information: "Develop a cohesive visual identity that reflects your brand’s personality and enhances recognition.",
            key_points: `Color Palette Development
                         Typography Selection
                         Iconography
                         Visual Elements
                         Brand Cohesion`
        },
        {
            name: "Brand Guidelines",
            short_information: "Establish comprehensive brand guidelines that ensure consistent branding across all platforms and mediums.",
            key_points: `Logo Usage
                         Color Specifications
                         Typography Rules
                         Imagery Guidelines
                         Tone of Voice`
        }
    ]
    
    const whyInvestData = [
        { text: 'Builds Brand Recognition' },
        { text: 'Enhances Customer Loyalty' },
        { text: 'Establishes Professionalism' },
        { text: 'Differentiates from Competitors' },
        { text: 'Increases Market Value' },
    ]
    
    const industriesAndTechnologiesData = {
        industries: [
            'Technology', 'Fashion', 'Food & Beverage', 'Health & Wellness', 
            'Real Estate', 'Non-Profit', 'E-commerce', 'Education', 'Finance', 'Entertainment'
        ],
        technologies: [
            'Adobe Illustrator', 'Photoshop', 'InDesign', 'CorelDRAW', 'Canva', 'Figma'
        ]
    }
    
    const portfolioData = [
        {
            name: "Logo Design for Tech Startup",
            link: "/portfolio/tech-startup-logo",
            image: "/portfolio/p-1.png",
            tags: [
                { tagLink: '/portfolio/logo-design', tagName: 'Logo Design' },
                { tagLink: '/portfolio/completed', tagName: 'Completed' }
            ]
        },
        {
            name: "Brand Identity for Fashion Brand",
            link: "/portfolio/fashion-brand-identity",
            image: "/portfolio/p-2.png",
            tags: [
                { tagLink: '/portfolio/branding', tagName: 'Branding' },
                { tagLink: '/portfolio/completed', tagName: 'Completed' }
            ]
        },
        {
            name: "Visual Identity for Food & Beverage Company",
            link: "/portfolio/food-beverage-identity",
            image: "/portfolio/p-3.png",
            tags: [
                { tagLink: '/portfolio/visual-identity', tagName: 'Visual Identity' },
                { tagLink: '/portfolio/completed', tagName: 'Completed' }
            ]
        }
    ]
    
    const pricingData = [
        {
            value: "basic",
            label: "Basic Logo Package (300-800$)",
            content: [
                { label: "Logo Concepts", detail: "3 initial concepts" },
                { label: "Revisions", detail: "Up to 2 revisions" },
                { label: "File Formats", detail: "PNG, JPG" },
                { label: "Color Variations", detail: "1 version" },
                { label: "Basic Brand Guidelines", icon: <Check className="w-4 h-4" /> },
            ],
            buttonText: "Send Request"
        },
        {
            value: "standard",
            label: "Standard Brand Package (800-2000$)",
            content: [
                { label: "Logo Concepts", detail: "5 initial concepts" },
                { label: "Revisions", detail: "Up to 4 revisions" },
                { label: "File Formats", detail: "PNG, JPG, SVG" },
                { label: "Color Variations", detail: "2 versions" },
                { label: "Comprehensive Brand Guidelines", icon: <Check className="w-4 h-4" /> },
                { label: "Business Card Design", icon: <Check className="w-4 h-4" /> },
            ],
            buttonText: "Send Request"
        },
        {
            value: "premium",
            label: "Premium Branding Package (2000-5000$)",
            content: [
                { label: "Logo Concepts", detail: "Unlimited concepts" },
                { label: "Revisions", detail: "Unlimited revisions" },
                { label: "File Formats", detail: "All formats" },
                { label: "Color Variations", detail: "Unlimited versions" },
                { label: "In-depth Brand Strategy", icon: <Check className="w-4 h-4" /> },
                { label: "Full Stationery Suite", icon: <Check className="w-4 h-4" /> },
                { label: "Social Media Branding Kit", icon: <Check className="w-4 h-4" /> },
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