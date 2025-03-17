import ContactForm from '@/components/ContactForm'
import HeroService from '@/components/Hero/HeroService'
import PortfolioCard from '@/components/Portfolio/PortfolioCard'
import PricingSection from '@/components/PricingSection'
import SubServiceCard from '@/components/Service/SubServiceCard'
import { Check } from 'lucide-react'
import React from 'react'

const ServicePage = () => {
    const heroServiceData = {
        title: 'E-commerce Management',
        description: 'Our e-commerce management services offer end-to-end support to optimize, maintain, and scale your online store efficiently, ensuring smooth operations and maximizing revenue potential.',
        services: [
            'Inventory Management',
            'Order Processing',
            'Customer Support Services',
            'Product Listing Optimization',
            'Pricing & Discount Management',
            'Sales & Revenue Reporting',
            'Multi-Channel Management',
            'Catalog Management',
            'Returns & Refund Management',
            'Performance Analytics',
            'SEO & Content Management',
            'Product Data Entry',
            'Warehouse Coordination',
            'Customer Loyalty Programs',
            'Third-Party Integration',
            'Promotion & Campaign Management',
            'Supply Chain Coordination',
            'Security & Fraud Prevention'
        ],
        videoSrc: '/hero-video.mp4',
        stats: [
            { label: 'Stores Managed', value: 80 },
            { label: 'Orders Processed Daily', value: 2000 },
            { label: 'Products Optimized', value: 50000 },
            { label: 'Years of Experience', value: 8 },
        ],
    }
    
    const subServiceData = [
        {
            name: "Inventory Management",
            short_information: "Track and manage inventory levels to ensure product availability and optimize storage costs.",
            key_points: `Real-Time Inventory Tracking
                         Stock Alerts & Reordering
                         Supplier Coordination
                         Inventory Reporting
                         Warehouse Integration
                         Loss Prevention`
        },
        {
            name: "Order Processing",
            short_information: "Streamline order fulfillment to ensure timely and accurate deliveries for improved customer satisfaction.",
            key_points: `Automated Order Processing
                         Shipping Coordination
                         Real-Time Tracking
                         Returns & Refunds Management
                         Order Status Notifications
                         Customer Support Integration`
        },
        {
            name: "Product Listing Optimization",
            short_information: "Optimize product listings for searchability, relevance, and conversions to drive higher sales.",
            key_points: `SEO Optimization
                         Keyword-Rich Descriptions
                         High-Quality Imagery
                         Category Management
                         Performance Tracking
                         Competitive Analysis`
        },
        {
            name: "Customer Support Services",
            short_information: "Provide responsive and reliable support to ensure customer satisfaction and loyalty.",
            key_points: `24/7 Support
                         Multichannel Support (Email, Chat, Phone)
                         FAQ & Knowledge Base
                         Returns & Refunds Support
                         Issue Resolution
                         Loyalty Program Assistance`
        }
    ]
    
    const whyInvestData = [
        { text: 'Enhanced Operational Efficiency' },
        { text: 'Improved Customer Satisfaction' },
        { text: 'Reduced Operational Costs' },
        { text: 'Boosted Sales Performance' },
        { text: 'Strengthened Brand Loyalty' },
    ]
    
    const industriesAndTechnologiesData = {
        industries: [
            'Fashion & Apparel', 'Electronics', 'Home & Garden', 'Beauty & Personal Care', 
            'Automotive', 'Food & Beverage', 'Health & Wellness', 'Toys & Games'
        ],
        technologies: [
            'Shopify Plus', 'Magento', 'WooCommerce', 'BigCommerce', 'Netsuite', 'Salesforce Commerce Cloud'
        ]
    }
    
    const portfolioData = [
        {
            name: "Global Electronics Store",
            link: "/portfolio/global-electronics-store",
            image: "/Portfolio/p-1.png",
            tags: [
                { tagLink: '/portfolio/management', tagName: 'Management' },
                { tagLink: '/portfolio/ongoing', tagName: 'Ongoing' }
            ]
        },
        {
            name: "Luxury Fashion Boutique",
            link: "/portfolio/luxury-fashion-boutique",
            image: "/Portfolio/p-2.png",
            tags: [
                { tagLink: '/portfolio/optimization', tagName: 'Optimization' },
                { tagLink: '/portfolio/completed', tagName: 'Completed' }
            ]
        },
        {
            name: "Online Home Goods Store",
            link: "/portfolio/home-goods-store",
            image: "/Portfolio/p-3.png",
            tags: [
                { tagLink: '/portfolio/integration', tagName: 'Integration' },
                { tagLink: '/portfolio/ongoing', tagName: 'Ongoing' }
            ]
        }
    ]
    
    const pricingData = [
        {
            value: "basic",
            label: "Basic (500-1500$)",
            content: [
                { label: "Product Listings", detail: "Up to 100 listings" },
                { label: "Inventory Management", detail: "Basic tracking" },
                { label: "Order Management", detail: "Automated order processing" },
                { label: "SEO Optimization", icon: <Check className="w-4 h-4" /> },
                { label: "Customer Support", icon: <Check className="w-4 h-4" /> },
                { label: "Monthly Reports", icon: <Check className="w-4 h-4" /> }
            ],
            buttonText: "Send Request"
        },
        {
            value: "standard",
            label: "Standard (1500-4000$)",
            content: [
                { label: "Product Listings", detail: "Up to 500 listings" },
                { label: "Inventory Management", detail: "Advanced tracking" },
                { label: "Order Management", detail: "Advanced order processing" },
                { label: "SEO Optimization", icon: <Check className="w-4 h-4" /> },
                { label: "Customer Support", icon: <Check className="w-4 h-4" /> },
                { label: "Detailed Reports", icon: <Check className="w-4 h-4" /> }
            ],
            buttonText: "Send Request"
        },
        {
            value: "premium",
            label: "Premium (4000-8000$)",
            content: [
                { label: "Product Listings", detail: "Unlimited listings" },
                { label: "Inventory Management", detail: "Real-time tracking" },
                { label: "Order Management", detail: "Customized order processing" },
                { label: "SEO Optimization", icon: <Check className="w-4 h-4" /> },
                { label: "Priority Customer Support", icon: <Check className="w-4 h-4" /> },
                { label: "Performance Analytics", icon: <Check className="w-4 h-4" /> }
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