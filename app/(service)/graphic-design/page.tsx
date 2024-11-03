import ContactForm from '@/components/ContactForm'
import HeroService from '@/components/Hero/HeroService'
import PortfolioCard from '@/components/Portfolio/PortfolioCard'
import PricingSection from '@/components/PricingSection'
import SubServiceCard from '@/components/Service/SubServiceCard'
import { Check } from 'lucide-react'
import React from 'react'

const ServicePage = () => {
    
    const heroServiceData = {
        title: 'Graphic Design',
        description: 'Zero-One Agency offers expert graphic design services to help brands visually communicate and connect with their audiences. From branding to marketing collateral, we create compelling designs that reflect your unique identity and engage your audience effectively.',
        services: [
            'Logo Design',
            'Brand Identity',
            'Marketing Collateral',
            'Social Media Graphics',
            'Packaging Design',
            'Illustrations',
            'Infographic Design',
            'Presentation Design',
            'Print Design',
            'Website Graphics',
            'Typography Design',
            'Motion Graphics',
            'Photo Editing & Retouching',
            'Banner Ads',
            'Business Card Design',
            'Brochure & Flyer Design',
            'Poster & Billboard Design',
            'Icon & UI Design'
        ],
        videoSrc: '/hero-video.mp4',
        stats: [
            { label: 'Projects Completed', value: 250 },
            { label: 'Satisfied Clients', value: 200 },
            { label: 'Awards Won', value: 20 },
            { label: 'Years of Experience', value: 10 },
        ],
    }
    
    const subServiceData = [
        {
            name: "Logo Design",
            short_information: "Create a memorable and impactful logo that represents your brand’s values and mission.",
            key_points: `Custom Logo Concepts
                         Brand Strategy Alignment
                         Color Theory Application
                         Font & Typography Selection
                         Brand Guidelines Creation
                         Multiple Iterations & Revisions`
        },
        {
            name: "Brand Identity",
            short_information: "Develop a cohesive visual identity that strengthens your brand’s presence across all platforms.",
            key_points: `Brand Logo & Color Palette
                         Typography Selection
                         Brand Voice & Tone Guide
                         Iconography & Imagery
                         Stationery & Merchandise Design
                         Comprehensive Brand Guidelines`
        },
        {
            name: "Marketing Collateral",
            short_information: "Design effective marketing materials to promote your brand and engage your audience.",
            key_points: `Brochure & Flyer Design
                         Business Card Design
                         Print & Digital Ads
                         Banner & Poster Design
                         Presentation Templates
                         Visual Consistency Check`
        },
        {
            name: "Social Media Graphics",
            short_information: "Create visually engaging social media content to boost your online presence and brand awareness.",
            key_points: `Custom Templates
                         Platform-Specific Sizing
                         Story Highlights & Icons
                         Branded Visual Elements
                         Image Editing & Enhancement
                         Content Consistency`
        }
    ]
    
    const whyInvestData = [
        { text: 'Enhanced Brand Recognition' },
        { text: 'Increased Engagement' },
        { text: 'Improved Professionalism' },
        { text: 'Consistent Visual Identity' },
        { text: 'Higher Conversion Rates' },
    ]
    
    const industriesAndTechnologiesData = {
        industries: [
            'Retail', 'Healthcare', 'Education', 'Real Estate', 'Technology',
            'Hospitality', 'Fashion', 'Food & Beverage', 'Finance', 'Entertainment'
        ],
        technologies: [
            'Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'Canva', 'CorelDRAW', 'Affinity Designer', 'Sketch'
        ]
    }
    
    const portfolioData = [
        {
            name: "Brand Identity for Tech Startup",
            link: "/portfolio/tech-startup-branding",
            image: "/Portfolio/p-1.png",
            tags: [
                { tagLink: '/portfolio/branding', tagName: 'Branding' },
                { tagLink: '/portfolio/completed', tagName: 'Completed' }
            ]
        },
        {
            name: "Social Media Campaign for Fashion Brand",
            link: "/portfolio/fashion-social-media",
            image: "/Portfolio/p-2.png",
            tags: [
                { tagLink: '/portfolio/social-media', tagName: 'Social Media' },
                { tagLink: '/portfolio/ongoing', tagName: 'Ongoing' }
            ]
        },
        {
            name: "Event Poster for Music Festival",
            link: "/portfolio/music-festival-poster",
            image: "/Portfolio/p-3.png",
            tags: [
                { tagLink: '/portfolio/print', tagName: 'Print' },
                { tagLink: '/portfolio/completed', tagName: 'Completed' }
            ]
        }
    ]
    
    const pricingData = [
        {
            value: "basic",
            label: "Basic (100-500$)",
            content: [
                { label: "Design Scope", detail: "1-2 concepts" },
                { label: "Deliverables", detail: "Digital & Print-ready files" },
                { label: "Logo & Branding", icon: <Check className="w-4 h-4" /> },
                { label: "Social Media Graphics", icon: <Check className="w-4 h-4" /> },
                { label: "1 Revision", detail: "Limited revisions" },
                { label: "Well Documented", icon: <Check className="w-4 h-4" /> },
            ],
            buttonText: "Send Request"
        },
        {
            value: "standard",
            label: "Standard (500-2000$)",
            content: [
                { label: "Design Scope", detail: "Up to 5 concepts" },
                { label: "Deliverables", detail: "High-resolution & vector files" },
                { label: "Logo & Brand Guidelines", icon: <Check className="w-4 h-4" /> },
                { label: "Marketing Collateral", icon: <Check className="w-4 h-4" /> },
                { label: "3 Revisions", detail: "Up to 3 revisions" },
                { label: "Consistent Visuals", icon: <Check className="w-4 h-4" /> },
            ],
            buttonText: "Send Request"
        },
        {
            value: "premium",
            label: "Premium (2000-5000$)",
            content: [
                { label: "Design Scope", detail: "Comprehensive visual identity" },
                { label: "Deliverables", detail: "Full branding suite" },
                { label: "Logo, Branding & Guidelines", icon: <Check className="w-4 h-4" /> },
                { label: "Extensive Marketing Collateral", icon: <Check className="w-4 h-4" /> },
                { label: "Unlimited Revisions", detail: "As needed" },
                { label: "Dedicated Designer", icon: <Check className="w-4 h-4" /> },
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