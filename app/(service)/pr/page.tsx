import ContactForm from '@/components/ContactForm'
import HeroService from '@/components/Hero/HeroService'
import PortfolioCard from '@/components/Portfolio/PortfolioCard'
import PricingSection from '@/components/PricingSection'
import SubServiceCard from '@/components/Service/SubServiceCard'
import { Check } from 'lucide-react'
import React from 'react'

const ServicePage = () => {

    const heroServiceData = {
        title: 'Press Release Services',
        description: 'At Zero-One Agency, we specialize in crafting compelling press releases that effectively communicate your brand’s news and stories to the media, helping you reach your target audience and achieve maximum visibility.',
        services: [
            'Press Release Writing',
            'Media Distribution',
            'SEO Optimization',
            'Target Audience Identification',
            'Follow-Up Engagement',
            'Crisis Communication',
            'Content Strategy',
            'Media Outreach',
            'Performance Tracking',
            'Analytics and Reporting',
            'Social Media Integration',
            'Brand Messaging',
            'Stakeholder Communication',
            'News Monitoring',
            'Reputation Management'
        ],
        videoSrc: '/hero-video.mp4',
        stats: [
            { label: 'Press Releases Distributed', value: 300 },
            { label: 'Successful Media Engagements', value: 200 },
            { label: 'Positive Media Mentions', value: 500 },
            { label: 'Years of Experience', value: 10 },
        ],
    }
    
    const subServiceData = [
        {
            name: "Press Release Writing",
            short_information: "Craft compelling press releases that effectively convey your brand’s news and stories to the media.",
            key_points: `Newsworthy Content
                         Target Audience Identification
                         SEO Optimization
                         Distribution Strategy
                         Follow-Up Engagement`
        },
        {
            name: "Media Distribution",
            short_information: "Distribute your press release to targeted media outlets and journalists for maximum exposure.",
            key_points: `Media List Creation
                         Targeted Outreach
                         Distribution Platforms
                         Tracking Engagement
                         Reporting Results`
        },
        {
            name: "SEO Optimization",
            short_information: "Enhance your press release with SEO strategies to improve visibility in search engines.",
            key_points: `Keyword Research
                         Meta Tags Creation
                         Link Building
                         Content Structuring
                         Performance Monitoring`
        },
        {
            name: "Crisis Communication",
            short_information: "Develop strategies to effectively communicate during a crisis and maintain brand integrity.",
            key_points: `Crisis Communication Plan
                         Rapid Response Strategies
                         Media Training
                         Stakeholder Communication
                         Post-Crisis Analysis`
        }
    ]
    
    const whyInvestData = [
        { text: 'Increased Media Visibility' },
        { text: 'Enhanced Brand Recognition' },
        { text: 'Effective Message Delivery' },
        { text: 'Improved Audience Engagement' },
        { text: 'Strengthened Online Presence' },
    ]
    
    const industriesAndTechnologiesData = {
        industries: [
            'Technology', 'Healthcare', 'Finance', 
            'Consumer Goods', 'Entertainment', 'Non-Profit', 
            'Education', 'Travel', 'Real Estate', 'E-commerce'
        ],
        technologies: [
            'Press Release Distribution Tools', 'SEO Tools', 
            'Media Monitoring Software', 'Analytics Software'
        ]
    }
    
    const portfolioData = [
        {
            name: "Tech Product Launch Press Release",
            link: "/portfolio/tech-launch",
            image: "/portfolio/p-1.png",
            tags: [
                { tagLink: '/portfolio/pr', tagName: 'Press Release' },
                { tagLink: '/portfolio/completed', tagName: 'Completed' }
            ]
        },
        {
            name: "Crisis Communication Press Release",
            link: "/portfolio/crisis-management",
            image: "/portfolio/p-2.png",
            tags: [
                { tagLink: '/portfolio/pr', tagName: 'Press Release' },
                { tagLink: '/portfolio/completed', tagName: 'Completed' }
            ]
        },
        {
            name: "Community Engagement Press Release",
            link: "/portfolio/community-engagement",
            image: "/portfolio/p-3.png",
            tags: [
                { tagLink: '/portfolio/pr', tagName: 'Press Release' },
                { tagLink: '/portfolio/completed', tagName: 'Completed' }
            ]
        }
    ]
    
    const pricingData = [
        {
            value: "basic",
            label: "Basic Press Release Package (1000-3000$)",
            content: [
                { label: "Press Release Writing", detail: "1 press release" },
                { label: "Media Distribution", detail: "Targeted media list" },
                { label: "Basic SEO Optimization", icon: <Check className="w-4 h-4" /> },
                { label: "Monthly Reporting", icon: <Check className="w-4 h-4" /> },
            ],
            buttonText: "Send Request"
        },
        {
            value: "standard",
            label: "Standard Press Release Package (3000-6000$)",
            content: [
                { label: "3 Press Releases", detail: "Over 3 months" },
                { label: "SEO Optimization", icon: <Check className="w-4 h-4" /> },
                { label: "Crisis Communication Plan", icon: <Check className="w-4 h-4" /> },
                { label: "Quarterly Analytics Reports", icon: <Check className="w-4 h-4" /> },
            ],
            buttonText: "Send Request"
        },
        {
            value: "premium",
            label: "Premium Press Release Package (6000-12000$)",
            content: [
                { label: "Comprehensive Press Release Strategy", detail: "Custom approach" },
                { label: "Unlimited Press Releases", detail: "As needed" },
                { label: "Media Outreach Support", icon: <Check className="w-4 h-4" /> },
                { label: "Analytics and Reporting", icon: <Check className="w-4 h-4" /> },
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