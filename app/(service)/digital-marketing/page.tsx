import ContactForm from '@/components/ContactForm'
import HeroService from '@/components/Hero/HeroService'
import PortfolioCard from '@/components/Portfolio/PortfolioCard'
import PricingSection from '@/components/PricingSection'
import SubServiceCard from '@/components/Service/SubServiceCard'
import { Check } from 'lucide-react'
import React from 'react'

const ServicePage = () => {

    const heroServiceData = {
        title: 'Digital Marketing',
        description: 'Zero-One Agency’s digital marketing services empower your brand with data-driven strategies to maximize online visibility, engagement, and conversions across all digital channels.',
        services: [
            'Search Engine Optimization (SEO)',
            'Social Media Marketing',
            'Content Marketing',
            'Pay-Per-Click Advertising (PPC)',
            'Email Marketing',
            'Influencer Marketing',
            'Conversion Rate Optimization (CRO)',
            'Affiliate Marketing',
            'Brand Strategy',
            'Online Reputation Management (ORM)',
            'Analytics and Reporting',
            'Video Marketing',
            'Market Research',
            'Local SEO',
            'E-commerce Marketing',
            'Competitor Analysis'
        ],
        videoSrc: '/hero-video.mp4',
        stats: [
            { label: 'Clients Served', value: 200 },
            { label: 'Campaigns Launched', value: 500 },
            { label: 'Industries Served', value: 15 },
            { label: 'Years of Experience', value: 10 },
        ],
    }

    const subServiceData = [
        {
            name: "Search Engine Optimization (SEO)",
            short_information: "Improve your website’s visibility on search engines to drive organic traffic and rank higher for relevant keywords.",
            key_points: `Keyword Research
                         On-Page Optimization
                         Technical SEO
                         Link Building
                         Local SEO
                         Analytics & Reporting`
        },
        {
            name: "Social Media Marketing",
            short_information: "Engage and grow your audience on social media with tailored strategies across various platforms.",
            key_points: `Content Creation
                         Platform Management
                         Audience Engagement
                         Paid Social Campaigns
                         Influencer Partnerships
                         Analytics & Insights`
        },
        {
            name: "Content Marketing",
            short_information: "Develop high-quality, engaging content to drive traffic, build authority, and enhance customer loyalty.",
            key_points: `Content Strategy
                         Blog Writing
                         SEO Content
                         Video Content
                         Infographics
                         Content Distribution`
        },
        {
            name: "Pay-Per-Click Advertising (PPC)",
            short_information: "Maximize ROI with targeted PPC campaigns across search engines and social media platforms.",
            key_points: `Keyword Strategy
                         Ad Creation
                         Campaign Management
                         Conversion Tracking
                         Retargeting
                         Performance Optimization`
        }
    ]

    const whyInvestData = [
        { text: 'Boost Brand Visibility' },
        { text: 'Increase Customer Engagement' },
        { text: 'Drive Website Traffic' },
        { text: 'Generate Quality Leads' },
        { text: 'Achieve Higher ROI' },
    ]

    const industriesAndTechnologiesData = {
        industries: [
            'Retail', 'Healthcare', 'Finance', 'Real Estate', 'Technology',
            'Education', 'Travel', 'Food & Beverage', 'Entertainment', 'E-commerce'
        ],
        technologies: [
            'Google Analytics', 'HubSpot', 'Hootsuite', 'Mailchimp', 'Facebook Ads Manager', 'SEMrush'
        ]
    }

    const portfolioData = [
        {
            name: "E-commerce SEO Strategy",
            link: "/portfolio/ecommerce-seo-strategy",
            image: "/portfolio/p-1.png",
            tags: [
                { tagLink: '/portfolio/seo', tagName: 'SEO' },
                { tagLink: '/portfolio/completed', tagName: 'Completed' }
            ]
        },
        {
            name: "Social Media Growth Campaign",
            link: "/portfolio/social-media-growth",
            image: "/portfolio/p-2.png",
            tags: [
                { tagLink: '/portfolio/social-media', tagName: 'Social Media' },
                { tagLink: '/portfolio/ongoing', tagName: 'Ongoing' }
            ]
        },
        {
            name: "PPC Campaign for Tech Startup",
            link: "/portfolio/ppc-tech-startup",
            image: "/portfolio/p-3.png",
            tags: [
                { tagLink: '/portfolio/ppc', tagName: 'PPC' },
                { tagLink: '/portfolio/completed', tagName: 'Completed' }
            ]
        }
    ]

    const pricingData = [
        {
            value: "basic",
            label: "Basic (500-1000$)",
            content: [
                { label: "Channels", detail: "Up to 2 channels" },
                { label: "SEO Optimizations", detail: "Basic setup" },
                { label: "Content Pieces", detail: "Up to 5" },
                { label: "Monthly Report", icon: <Check className="w-4 h-4" /> },
                { label: "Campaign Setup", icon: <Check className="w-4 h-4" /> },
            ],
            buttonText: "Request Service"
        },
        {
            value: "standard",
            label: "Standard (1000-3000$)",
            content: [
                { label: "Channels", detail: "Up to 4 channels" },
                { label: "SEO Optimizations", detail: "Comprehensive SEO" },
                { label: "Content Pieces", detail: "Up to 10" },
                { label: "Bi-Weekly Report", icon: <Check className="w-4 h-4" /> },
                { label: "Campaign Management", icon: <Check className="w-4 h-4" /> },
            ],
            buttonText: "Request Service"
        },
        {
            value: "premium",
            label: "Premium (3000-7000$)",
            content: [
                { label: "Channels", detail: "Up to 6 channels" },
                { label: "SEO Optimizations", detail: "Advanced SEO & PPC" },
                { label: "Content Pieces", detail: "Up to 15" },
                { label: "Weekly Report", icon: <Check className="w-4 h-4" /> },
                { label: "Custom Strategies", icon: <Check className="w-4 h-4" /> },
            ],
            buttonText: "Request Service"
        },
        {
            value: "custom",
            label: "Custom",
            content: [
                { label: "Channels", detail: "Based on requirements" },
                { label: "SEO Optimizations", detail: "Custom solutions" },
                { label: "Content Pieces", detail: "Unlimited" },
                { label: "Dedicated Account Manager", icon: <Check className="w-4 h-4" /> },
                { label: "Full Campaign Management", icon: <Check className="w-4 h-4" /> },
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
            <div className='bg-[#141414] md:py-48 sm:py-24 w-full sm:mt-18 xl:mt-32 flex gap-24 px-6'>
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