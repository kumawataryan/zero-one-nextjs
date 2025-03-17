import ContactForm from '@/components/ContactForm'
import HeroService from '@/components/Hero/HeroService'
import PortfolioCard from '@/components/Portfolio/PortfolioCard'
import PricingSection from '@/components/PricingSection'
import SubServiceCard from '@/components/Service/SubServiceCard'
import { Check } from 'lucide-react'
import React from 'react'

const ServicePage = () => {

    const heroServiceData = {
        title: 'Lead Generation',
        description: 'Zero-One Agency specializes in effective lead generation strategies to drive quality leads for your business. From targeted outreach to advanced analytics, we deliver campaigns designed to convert and scale your customer base.',
        services: [
            'B2B Lead Generation',
            'B2C Lead Generation',
            'Email Marketing Campaigns',
            'Content Marketing',
            'Social Media Outreach',
            'Paid Advertising',
            'Search Engine Optimization (SEO)',
            'Landing Page Optimization',
            'Sales Funnel Development',
            'Lead Scoring & Nurturing',
            'CRM Integration',
            'Analytics & Reporting',
            'A/B Testing',
            'Retargeting Campaigns',
            'Audience Segmentation',
            'Competitor Analysis',
            'Market Research',
            'Cold Outreach'
        ],
        videoSrc: '/hero-video.mp4',
        stats: [
            { label: 'Leads Generated', value: 5000 },
            { label: 'Satisfied Clients', value: 200 },
            { label: 'Industries Served', value: 15 },
            { label: 'Years of Experience', value: 8 },
        ],
    }
    
    const subServiceData = [
        {
            name: "B2B Lead Generation",
            short_information: "Develop and execute strategies to attract high-value business leads tailored to your industry and target audience.",
            key_points: `Account-Based Marketing (ABM)
                         LinkedIn Outreach
                         Content Marketing
                         Email Campaigns
                         Lead Scoring & Nurturing
                         CRM Integration`
        },
        {
            name: "B2C Lead Generation",
            short_information: "Drive targeted consumer leads through data-driven campaigns and audience segmentation.",
            key_points: `SEO & Content Marketing
                         Paid Social Media Ads
                         Retargeting Strategies
                         Landing Page Optimization
                         A/B Testing
                         Customer Persona Development`
        },
        {
            name: "Email Marketing Campaigns",
            short_information: "Create and manage email campaigns designed to convert prospects into loyal customers.",
            key_points: `Audience Segmentation
                         Personalized Email Sequences
                         Automated Drip Campaigns
                         A/B Testing
                         Analytics & Reporting
                         CRM Integration`
        },
        {
            name: "Landing Page Optimization",
            short_information: "Optimize landing pages to increase lead capture rates and improve overall conversion rates.",
            key_points: `A/B Testing
                         CTA Optimization
                         UX/UI Design Enhancements
                         SEO Best Practices
                         Mobile Responsiveness
                         Analytics & Heatmaps`
        }
    ]
    
    const whyInvestData = [
        { text: 'Increased Lead Quality' },
        { text: 'Higher Conversion Rates' },
        { text: 'Improved ROI' },
        { text: 'Enhanced Customer Insights' },
        { text: 'Scalable Lead Generation' },
    ]
    
    const industriesAndTechnologiesData = {
        industries: [
            'Technology', 'Finance', 'Healthcare', 'Education', 'Real Estate',
            'Retail', 'E-commerce', 'Hospitality', 'Manufacturing', 'Non-Profit'
        ],
        technologies: [
            'HubSpot', 'Salesforce', 'LinkedIn Sales Navigator', 'Mailchimp', 'Google Analytics', 'Facebook Ads Manager', 'Marketo'
        ]
    }
    
    const portfolioData = [
        {
            name: "Lead Generation Campaign for SaaS Company",
            link: "/portfolio/saas-lead-gen",
            image: "/Portfolio/p-1.png",
            tags: [
                { tagLink: '/portfolio/b2b', tagName: 'B2B' },
                { tagLink: '/portfolio/completed', tagName: 'Completed' }
            ]
        },
        {
            name: "Email Marketing for E-commerce Brand",
            link: "/portfolio/ecommerce-email",
            image: "/Portfolio/p-2.png",
            tags: [
                { tagLink: '/portfolio/b2c', tagName: 'B2C' },
                { tagLink: '/portfolio/ongoing', tagName: 'Ongoing' }
            ]
        },
        {
            name: "Social Media Lead Gen for Real Estate",
            link: "/portfolio/real-estate-social",
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
            label: "Basic (300-1000$)",
            content: [
                { label: "Lead Targeting", detail: "B2B or B2C" },
                { label: "Campaign Types", detail: "Email or Social Media" },
                { label: "Analytics & Reporting", icon: <Check className="w-4 h-4" /> },
                { label: "Lead Nurturing", icon: <Check className="w-4 h-4" /> },
                { label: "1-2 Revisions", detail: "Initial setup adjustments" },
                { label: "CRM Integration", icon: <Check className="w-4 h-4" /> },
            ],
            buttonText: "Send Request"
        },
        {
            value: "standard",
            label: "Standard (1000-3000$)",
            content: [
                { label: "Lead Targeting", detail: "Multi-channel approach" },
                { label: "Campaign Types", detail: "Email, Social Media, or Paid Ads" },
                { label: "Advanced Analytics", icon: <Check className="w-4 h-4" /> },
                { label: "Landing Page Optimization", icon: <Check className="w-4 h-4" /> },
                { label: "4-5 Revisions", detail: "Performance-focused adjustments" },
                { label: "Dedicated Lead Nurturing", icon: <Check className="w-4 h-4" /> },
            ],
            buttonText: "Send Request"
        },
        {
            value: "premium",
            label: "Premium (3000-7000$)",
            content: [
                { label: "Lead Targeting", detail: "Customized for high-value leads" },
                { label: "Campaign Types", detail: "Email, Social Media, Paid Ads, SEO" },
                { label: "Advanced Analytics & Insights", icon: <Check className="w-4 h-4" /> },
                { label: "Sales Funnel Development", icon: <Check className="w-4 h-4" /> },
                { label: "Unlimited Revisions", detail: "Ongoing optimization" },
                { label: "Strategic Consultation", icon: <Check className="w-4 h-4" /> },
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