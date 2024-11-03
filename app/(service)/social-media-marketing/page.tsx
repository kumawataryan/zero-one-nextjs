import ContactForm from '@/components/ContactForm'
import HeroService from '@/components/Hero/HeroService'
import PortfolioCard from '@/components/Portfolio/PortfolioCard'
import PricingSection from '@/components/PricingSection'
import SubServiceCard from '@/components/Service/SubServiceCard'
import { Check } from 'lucide-react'
import React from 'react'

const ServicePage = () => {

    const heroServiceData = {
        title: 'Social Media Marketing',
        description: 'Zero-One Agency provides comprehensive social media marketing solutions aimed at building brand visibility, engaging audiences, and driving conversions through tailored, multi-platform strategies.',
        services: [
            'Social Media Strategy Development',
            'Content Creation and Management',
            'Social Media Advertising',
            'Community Engagement',
            'Analytics and Reporting',
            'Brand Monitoring',
            'Influencer Partnerships',
            'Campaign Management',
            'Profile Optimization',
            'Customer Engagement Strategies',
            'Social Media Audits',
            'Crisis Management',
            'Social Listening',
            'Training and Workshops',
            'Cross-Platform Campaigns'
        ],
        videoSrc: '/hero-video.mp4',
        stats: [
            { label: 'Campaigns Executed', value: 150 },
            { label: 'Followers Gained', value: 10000 },
            { label: 'Clients Served', value: 120 },
            { label: 'Years of Experience', value: 6 },
        ],
    }
    
    const subServiceData = [
        {
            name: "Social Media Strategy Development",
            short_information: "Develop a unique social media strategy that aligns with business goals and audience preferences.",
            key_points: `Audience Research
                         Competitor Analysis
                         Platform Selection
                         Content Strategy Planning
                         KPI Definition`
        },
        {
            name: "Content Creation and Management",
            short_information: "Craft engaging content and manage posting schedules to boost audience engagement.",
            key_points: `Visual Content Creation
                         Copywriting
                         Post Scheduling
                         Content Calendar Development
                         Engagement Tracking`
        },
        {
            name: "Social Media Advertising",
            short_information: "Execute targeted ad campaigns on platforms like Facebook, Instagram, and LinkedIn to maximize reach and conversions.",
            key_points: `Ad Creative Development
                         Target Audience Segmentation
                         Budget Optimization
                         Performance Tracking
                         A/B Testing`
        },
        {
            name: "Analytics and Reporting",
            short_information: "Analyze and report on campaign performance to provide insights and refine strategies.",
            key_points: `Performance Metrics Analysis
                         Monthly Reporting
                         Actionable Insights
                         ROI Calculation
                         Competitor Benchmarking`
        }
    ]
    
    const whyInvestData = [
        { text: 'Enhanced Brand Awareness' },
        { text: 'Increased Website Traffic' },
        { text: 'Improved Customer Engagement' },
        { text: 'Data-Driven Insights' },
        { text: 'Competitive Market Edge' },
    ]
    
    const industriesAndTechnologiesData = {
        industries: [
            'Retail', 'Technology', 'Healthcare', 
            'Education', 'Finance', 'Travel', 
            'Entertainment', 'Real Estate', 'Food & Beverage', 'Non-Profit'
        ],
        technologies: [
            'Facebook Ads', 'Instagram', 'Twitter', 
            'LinkedIn', 'Pinterest', 'Hootsuite', 
            'Buffer', 'Canva', 'Google Analytics'
        ]
    }
    
    const portfolioData = [
        {
            name: "Fashion Brand Campaign",
            link: "/portfolio/fashion-campaign",
            image: "/Portfolio/p-1.png",
            tags: [
                { tagLink: '/portfolio/social-media', tagName: 'Social Media' },
                { tagLink: '/portfolio/completed', tagName: 'Completed' }
            ]
        },
        {
            name: "Tech Product Launch",
            link: "/portfolio/tech-launch",
            image: "/Portfolio/p-2.png",
            tags: [
                { tagLink: '/portfolio/social-media', tagName: 'Social Media' },
                { tagLink: '/portfolio/completed', tagName: 'Completed' }
            ]
        },
        {
            name: "Health Awareness Campaign",
            link: "/portfolio/health-campaign",
            image: "/Portfolio/p-3.png",
            tags: [
                { tagLink: '/portfolio/social-media', tagName: 'Social Media' },
                { tagLink: '/portfolio/completed', tagName: 'Completed' }
            ]
        }
    ]
    
    const pricingData = [
        {
            value: "basic",
            label: "Basic Social Media Package (300-1000$)",
            content: [
                { label: "Profile Setup", detail: "Up to 2 platforms" },
                { label: "Monthly Content Calendar", icon: <Check className="w-4 h-4" /> },
                { label: "Engagement Monitoring", icon: <Check className="w-4 h-4" /> },
                { label: "Basic Analytics Report", icon: <Check className="w-4 h-4" /> },
            ],
            buttonText: "Send Request"
        },
        {
            value: "standard",
            label: "Standard Social Media Package (1000-3000$)",
            content: [
                { label: "Profile Optimization", detail: "Up to 4 platforms" },
                { label: "Content Creation and Management", icon: <Check className="w-4 h-4" /> },
                { label: "Monthly Analytics Reports", icon: <Check className="w-4 h-4" /> },
                { label: "Ad Campaign Management", icon: <Check className="w-4 h-4" /> },
            ],
            buttonText: "Send Request"
        },
        {
            value: "premium",
            label: "Premium Social Media Package (3000-6000$)",
            content: [
                { label: "Comprehensive Strategy Development", detail: "Customized to your needs" },
                { label: "Cross-Platform Campaigns", icon: <Check className="w-4 h-4" /> },
                { label: "Full Engagement Management", icon: <Check className="w-4 h-4" /> },
                { label: "Advanced Analytics & Insights", icon: <Check className="w-4 h-4" /> },
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