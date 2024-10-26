import ContactForm from '@/components/ContactForm'
import HeroService from '@/components/Hero/HeroService'
import PortfolioCard from '@/components/Portfolio/PortfolioCard'
import PricingSection from '@/components/PricingSection'
import SubServiceCard from '@/components/Service/SubServiceCard'
import { Check } from 'lucide-react'
import React from 'react'

const ServicePage = () => {

    const heroServiceData = {
        title: 'Marketing Strategy',
        description: 'Zero-One Agency specializes in crafting comprehensive marketing strategies that align with your business goals. Our data-driven approach ensures that your marketing efforts effectively reach your target audience and drive measurable results.',
        services: [
            'Market Research',
            'Competitor Analysis',
            'Target Audience Identification',
            'Brand Positioning',
            'Content Strategy',
            'Digital Marketing Strategy',
            'Social Media Strategy',
            'SEO Strategy',
            'Email Marketing Campaigns',
            'Performance Measurement',
            'Marketing Budget Planning',
            'Campaign Development',
            'Brand Messaging',
            'Channel Strategy',
            'Partnership Development',
            'Influencer Marketing',
            'Customer Journey Mapping'
        ],
        videoSrc: '/hero-video.mp4',
        stats: [
            { label: 'Strategies Developed', value: 200 },
            { label: 'Successful Campaigns', value: 150 },
            { label: 'Clients Served', value: 100 },
            { label: 'Years of Experience', value: 8 },
        ],
    }
    
    const subServiceData = [
        {
            name: "Market Research",
            short_information: "Conduct in-depth market research to understand industry trends and consumer behaviors, helping inform your marketing strategy.",
            key_points: `Survey Design
                         Data Analysis
                         Industry Reports
                         Focus Groups
                         Insights Generation`
        },
        {
            name: "Digital Marketing Strategy",
            short_information: "Develop a robust digital marketing strategy that encompasses SEO, social media, content marketing, and online advertising.",
            key_points: `SEO Optimization
                         Social Media Campaigns
                         Content Creation
                         PPC Advertising
                         Analytics and Reporting`
        },
        {
            name: "Campaign Development",
            short_information: "Create and execute marketing campaigns that resonate with your audience and drive engagement and conversions.",
            key_points: `Creative Concepting
                         Multi-Channel Strategies
                         Budget Allocation
                         Performance Tracking
                         Campaign Optimization`
        },
        {
            name: "Customer Journey Mapping",
            short_information: "Map out the customer journey to identify key touchpoints and opportunities for engagement at each stage.",
            key_points: `Touchpoint Analysis
                         Pain Point Identification
                         Engagement Strategies
                         Feedback Loops
                         Journey Optimization`
        }
    ]
    
    const whyInvestData = [
        { text: 'Informed Decision Making' },
        { text: 'Maximized Marketing ROI' },
        { text: 'Enhanced Customer Understanding' },
        { text: 'Improved Brand Awareness' },
        { text: 'Strategic Resource Allocation' },
    ]
    
    const industriesAndTechnologiesData = {
        industries: [
            'E-commerce', 'Technology', 'Healthcare', 'Finance', 
            'Education', 'Entertainment', 'Travel', 'Retail', 'Non-Profit', 'Real Estate'
        ],
        technologies: [
            'Google Analytics', 'HubSpot', 'SEMrush', 'Mailchimp', 'Hootsuite', 'Trello'
        ]
    }
    
    const portfolioData = [
        {
            name: "Marketing Strategy for E-commerce Brand",
            link: "/portfolio/ecommerce-marketing-strategy",
            image: "/portfolio/strategy-1.png",
            tags: [
                { tagLink: '/portfolio/strategy', tagName: 'Strategy' },
                { tagLink: '/portfolio/completed', tagName: 'Completed' }
            ]
        },
        {
            name: "Digital Marketing Strategy for Tech Startup",
            link: "/portfolio/tech-startup-marketing",
            image: "/portfolio/strategy-2.png",
            tags: [
                { tagLink: '/portfolio/digital-marketing', tagName: 'Digital Marketing' },
                { tagLink: '/portfolio/completed', tagName: 'Completed' }
            ]
        },
        {
            name: "Content Marketing Strategy for Non-Profit",
            link: "/portfolio/non-profit-content-strategy",
            image: "/portfolio/strategy-3.jpg",
            tags: [
                { tagLink: '/portfolio/content-marketing', tagName: 'Content Marketing' },
                { tagLink: '/portfolio/completed', tagName: 'Completed' }
            ]
        }
    ]
    
    const pricingData = [
        {
            value: "basic",
            label: "Basic Strategy Package (500-1500$)",
            content: [
                { label: "Market Research", detail: "Basic insights" },
                { label: "1 Target Audience Profile", detail: "Detailed persona" },
                { label: "Social Media Recommendations", detail: "2 platforms" },
                { label: "Basic Reporting", icon: <Check className="w-4 h-4" /> },
            ],
            buttonText: "Send Request"
        },
        {
            value: "standard",
            label: "Standard Marketing Package (1500-5000$)",
            content: [
                { label: "Comprehensive Market Research", detail: "In-depth insights" },
                { label: "3 Target Audience Profiles", detail: "Detailed personas" },
                { label: "Digital Marketing Strategy", icon: <Check className="w-4 h-4" /> },
                { label: "Email Marketing Plan", icon: <Check className="w-4 h-4" /> },
                { label: "Performance Metrics Plan", icon: <Check className="w-4 h-4" /> },
            ],
            buttonText: "Send Request"
        },
        {
            value: "premium",
            label: "Premium Marketing Strategy Package (5000-10000$)",
            content: [
                { label: "Full Market Analysis", detail: "Comprehensive research" },
                { label: "Unlimited Target Audience Profiles", detail: "Multiple personas" },
                { label: "Complete Digital Strategy", icon: <Check className="w-4 h-4" /> },
                { label: "Campaign Development & Execution", icon: <Check className="w-4 h-4" /> },
                { label: "Ongoing Consultation & Reporting", icon: <Check className="w-4 h-4" /> },
            ],
            buttonText: "Send Request"
        },
        {
            value: "custom",
            label: "Custom Marketing Solutions",
            content: [
                { label: "Tailored Strategy Development", detail: "Fully customized approach" },
                { label: "Consultation and Support", icon: <Check className="w-4 h-4" /> },
                { label: "Pricing Based on Scope", detail: "Contact for a quote" },
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