import ContactForm from '@/components/ContactForm'
import HeroService from '@/components/Hero/HeroService'
import PortfolioCard from '@/components/Portfolio/PortfolioCard'
import PricingSection from '@/components/PricingSection'
import SubServiceCard from '@/components/Service/SubServiceCard'
import { Check } from 'lucide-react'
import React from 'react'

const ServicePage = () => {

    const heroServiceData = {
        title: 'Shopify Development',
        description: 'Zero-One Agency offers comprehensive Shopify development services to build, customize, and optimize your eCommerce store for enhanced user experience, engagement, and conversions.',
        services: [
            'Custom Shopify Theme Development',
            'Store Setup and Configuration',
            'Shopify App Integration',
            'Conversion Rate Optimization',
            'Performance Optimization',
            'Responsive Design',
            'Custom Checkout Development',
            'Product Page Optimization',
            'Third-Party Integrations',
            'SEO for eCommerce',
            'Ongoing Maintenance and Support',
            'Store Migration',
            'Payment Gateway Integration',
            'Inventory Management Solutions',
            'Training and Support'
        ],
        videoSrc: '/shopify-hero-video.mp4',
        stats: [
            { label: 'Stores Built', value: 200 },
            { label: 'Products Sold', value: 50000 },
            { label: 'Clients Served', value: 130 },
            { label: 'Years of Experience', value: 6 },
        ],
    }
    
    const subServiceData = [
        {
            name: "Custom Shopify Theme Development",
            short_information: "Create a unique Shopify theme that reflects your brand and delivers an outstanding user experience.",
            key_points: `Bespoke Design
                         Mobile Optimization
                         Theme Customization
                         Branding and Identity Integration
                         User Experience (UX) Enhancement`
        },
        {
            name: "Store Setup and Configuration",
            short_information: "Set up your Shopify store with all essential configurations, including payments, shipping, and tax settings.",
            key_points: `Initial Setup
                         Payment and Shipping Configuration
                         Product Catalog Setup
                         Store Navigation and Menus
                         Essential App Installation`
        },
        {
            name: "Shopify App Integration",
            short_information: "Integrate third-party apps to enhance store functionality, from marketing tools to customer service enhancements.",
            key_points: `App Recommendations
                         Installation and Configuration
                         Custom App Integrations
                         API Integrations
                         Testing and Optimization`
        },
        {
            name: "Conversion Rate Optimization",
            short_information: "Optimize your Shopify store to increase conversions and drive more sales.",
            key_points: `Conversion Funnel Analysis
                         A/B Testing
                         User Behavior Tracking
                         Page Load Optimization
                         Personalization Strategies`
        }
    ]
    
    const whyInvestData = [
        { text: 'Enhanced Online Store Functionality' },
        { text: 'Improved User Experience' },
        { text: 'Increased Sales Conversions' },
        { text: 'Mobile-Friendly Design' },
        { text: 'Competitive Edge in eCommerce' },
    ]
    
    const industriesAndTechnologiesData = {
        industries: [
            'Retail', 'Fashion', 'Healthcare', 
            'Electronics', 'Food & Beverage', 'Home Goods', 
            'Beauty and Wellness', 'Education', 'Sports', 'Non-Profit'
        ],
        technologies: [
            'Shopify', 'Shopify Plus', 'Klaviyo', 
            'ReCharge', 'MailChimp', 'Google Analytics', 
            'Hotjar', 'Yotpo', 'Shopify Flow', 'Zapier'
        ]
    }
    
    const portfolioData = [
        {
            name: "Fashion Store Redesign",
            link: "/portfolio/fashion-store",
            image: "/portfolio/p-1.png",
            tags: [
                { tagLink: '/portfolio/shopify', tagName: 'Shopify' },
                { tagLink: '/portfolio/completed', tagName: 'Completed' }
            ]
        },
        {
            name: "Electronics eCommerce Store",
            link: "/portfolio/electronics-store",
            image: "/portfolio/p-2.png",
            tags: [
                { tagLink: '/portfolio/shopify', tagName: 'Shopify' },
                { tagLink: '/portfolio/completed', tagName: 'Completed' }
            ]
        },
        {
            name: "Health & Wellness Product Store",
            link: "/portfolio/health-wellness",
            image: "/portfolio/p-3.png",
            tags: [
                { tagLink: '/portfolio/shopify', tagName: 'Shopify' },
                { tagLink: '/portfolio/completed', tagName: 'Completed' }
            ]
        }
    ]
    
    const pricingData = [
        {
            value: "basic",
            label: "Basic Shopify Package (500-2000$)",
            content: [
                { label: "Store Setup", detail: "Up to 50 products" },
                { label: "Theme Installation", icon: <Check className="w-4 h-4" /> },
                { label: "Basic SEO Configuration", icon: <Check className="w-4 h-4" /> },
                { label: "Essential Apps Setup", icon: <Check className="w-4 h-4" /> },
            ],
            buttonText: "Send Request"
        },
        {
            value: "standard",
            label: "Standard Shopify Package (2000-5000$)",
            content: [
                { label: "Custom Theme Customization", detail: "Up to 100 products" },
                { label: "Conversion Rate Optimization", icon: <Check className="w-4 h-4" /> },
                { label: "Monthly Analytics Reports", icon: <Check className="w-4 h-4" /> },
                { label: "Advanced App Integrations", icon: <Check className="w-4 h-4" /> },
            ],
            buttonText: "Send Request"
        },
        {
            value: "premium",
            label: "Premium Shopify Package (5000-10000$)",
            content: [
                { label: "Custom Theme Development", detail: "Fully tailored to brand" },
                { label: "Advanced eCommerce Strategies", icon: <Check className="w-4 h-4" /> },
                { label: "Full Performance Optimization", icon: <Check className="w-4 h-4" /> },
                { label: "Dedicated Account Manager", icon: <Check className="w-4 h-4" /> },
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