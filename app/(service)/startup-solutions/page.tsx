import ContactForm from '@/components/ContactForm'
import HeroService from '@/components/Hero/HeroService'
import PortfolioCard from '@/components/Portfolio/PortfolioCard'
import PricingSection from '@/components/PricingSection'
import SubServiceCard from '@/components/Service/SubServiceCard'
import { Check } from 'lucide-react'
import React from 'react'


const ServicePage = () => {

    const heroServiceData = {
        title: 'Startup Solutions',
        description: 'We are offering comprehensive startup solutions tailored to empower new ventures with strategic guidance, technology development, and marketing support.',
        services: [
            'Business Model Development',
            'Market Research',
            'Brand Identity Creation',
            'UI/UX Design',
            'Web Development',
            'Mobile App Development',
            'Digital Marketing',
            'Funding Strategy',
            'Pitch Deck Preparation',
            'Sales Strategy',
            'Customer Acquisition',
            'Ongoing Support and Maintenance',
            'Product Launch Strategy',
            'Mentorship and Consulting',
            'Legal and Compliance Services'
        ],
        videoSrc: '/hero-video.mp4',
        stats: [
            { label: 'Startups Launched', value: 50 },
            { label: 'Successful Funding Rounds', value: 30 },
            { label: 'Years of Experience', value: 10 },
            { label: 'Satisfied Clients', value: 90 },
        ],
    }
    
    const subServiceData = [
        {
            name: "Business Model Development",
            short_information: "Craft a sustainable business model that outlines how your startup will generate revenue and deliver value.",
            key_points: `Value Proposition
                         Customer Segments
                         Revenue Streams
                         Cost Structure
                         Competitive Analysis`
        },
        {
            name: "Market Research",
            short_information: "Conduct in-depth market analysis to identify opportunities, target audiences, and industry trends.",
            key_points: `Industry Analysis
                         Customer Insights
                         Competitor Analysis
                         Market Size Estimation
                         Trend Forecasting`
        },
        {
            name: "Brand Identity Creation",
            short_information: "Develop a strong brand identity that resonates with your target audience and sets you apart from competitors.",
            key_points: `Logo Design
                         Brand Guidelines
                         Voice and Tone
                         Visual Identity
                         Messaging Strategy`
        },
        {
            name: "Product Launch Strategy",
            short_information: "Create a comprehensive strategy to effectively launch your product to the market and generate buzz.",
            key_points: `Go-To-Market Strategy
                         Marketing Campaigns
                         Launch Timeline
                         Target Audience Engagement
                         Performance Metrics`
        }
    ]
    
    const whyInvestData = [
        { text: 'Access to Expert Guidance' },
        { text: 'Tailored Solutions for Startups' },
        { text: 'Faster Time-to-Market' },
        { text: 'Improved Funding Opportunities' },
        { text: 'Increased Market Visibility' },
    ]
    
    const industriesAndTechnologiesData = {
        industries: [
            'Technology', 'Healthcare', 'Finance',
            'E-commerce', 'Education', 'Travel',
            'Real Estate', 'Entertainment', 'Food & Beverage'
        ],
        technologies: [
            'React', 'Node.js', 'Python',
            'Ruby on Rails', 'Java', 'Swift',
            'WordPress', 'Shopify', 'AWS', 'Azure'
        ]
    }
    
    const portfolioData = [
        {
            name: "HealthTech Startup",
            link: "/portfolio/healthtech",
            image: "/Portfolio/p-1.png",
            tags: [
                { tagLink: '/portfolio/startup-solutions', tagName: 'Startup Solutions' },
                { tagLink: '/portfolio/completed', tagName: 'Completed' }
            ]
        },
        {
            name: "E-commerce Platform",
            link: "/portfolio/ecommerce",
            image: "/Portfolio/p-2.png",
            tags: [
                { tagLink: '/portfolio/startup-solutions', tagName: 'Startup Solutions' },
                { tagLink: '/portfolio/completed', tagName: 'Completed' }
            ]
        },
    ]
    
    const pricingData = [
        {
            value: "basic",
            label: "Basic Startup Package",
            content: [
                { label: "Duration", detail: "1-3 months" },
                { label: "Consulting Hours", detail: "5 hours per month" },
                { label: "Market Research", detail: "Basic Analysis" },
                { label: "Business Model Development", icon: <Check className="w-4 h-4" /> },
            ],
            buttonText: "Send Request"
        },
        {
            value: "standard",
            label: "Standard Startup Package",
            content: [
                { label: "Duration", detail: "3-6 months" },
                { label: "Consulting Hours", detail: "10 hours per month" },
                { label: "Market Research", detail: "Comprehensive Analysis" },
                { label: "Business Model Development", icon: <Check className="w-4 h-4" /> },
                { label: "Brand Identity Creation", icon: <Check className="w-4 h-4" /> },
            ],
            buttonText: "Send Request"
        },
        {
            value: "premium",
            label: "Premium Startup Package",
            content: [
                { label: "Duration", detail: "6+ months" },
                { label: "Consulting Hours", detail: "20 hours per month" },
                { label: "Market Research", detail: "In-Depth Analysis" },
                { label: "Business Model Development", icon: <Check className="w-4 h-4" /> },
                { label: "Brand Identity Creation", icon: <Check className="w-4 h-4" /> },
                { label: "Product Launch Strategy", icon: <Check className="w-4 h-4" /> },
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