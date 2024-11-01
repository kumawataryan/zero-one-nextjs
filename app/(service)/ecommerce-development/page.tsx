import ContactForm from '@/components/ContactForm'
import HeroService from '@/components/Hero/HeroService'
import PortfolioCard from '@/components/Portfolio/PortfolioCard'
import PricingSection from '@/components/PricingSection'
import SubServiceCard from '@/components/Service/SubServiceCard'
import { Check } from 'lucide-react'
import React from 'react'

const ServicePage = () => {

    const heroServiceData = {
        title: 'E-commerce Development',
        description: 'Zero-One Agency’s e-commerce development services are tailored to build dynamic, scalable, and feature-rich online stores that offer seamless shopping experiences, drive sales, and boost brand loyalty.',
        services: [
            'E-commerce Website Development',
            'Custom Store Design',
            'Mobile Commerce Solutions',
            'Shopping Cart Development',
            'Payment Gateway Integration',
            'Inventory Management System',
            'Multi-language & Multi-currency Support',
            'Marketplace Integration',
            'Product Management',
            'E-commerce SEO',
            'Data Migration & Support',
            'Analytics & Reporting',
            'Third-party API Integration',
            'Custom Plugin Development',
            'UI/UX Optimization',
            'Performance Optimization',
            'Security Enhancements',
            'Maintenance & Support'
        ],
        videoSrc: '/hero-video.mp4',
        stats: [
            { label: 'Stores Launched', value: 150 },
            { label: 'Active Clients', value: 100 },
            { label: 'Integrations Completed', value: 250 },
            { label: 'Years of Experience', value: 10 },
        ],
    }
    
    const subServiceData = [
        {
            name: "E-commerce Website Development",
            short_information: "Design and develop custom e-commerce websites tailored to meet your business needs and provide a smooth shopping experience.",
            key_points: `Responsive Design
                         Custom Store Layouts
                         Product Catalog Management
                         Payment Integration
                         Inventory Management
                         SEO-Friendly Architecture`
        },
        {
            name: "Mobile Commerce Solutions",
            short_information: "Optimize your e-commerce store for mobile devices to reach a wider audience and enhance the mobile shopping experience.",
            key_points: `Mobile-Friendly Design
                         Progressive Web Apps (PWAs)
                         Native App Integration
                         Fast Load Times
                         In-App Payment Integration
                         Responsive Checkout`
        },
        {
            name: "Payment Gateway Integration",
            short_information: "Seamlessly integrate various payment gateways for secure and convenient transactions.",
            key_points: `Multiple Payment Options
                         Secure Payment Processing
                         PCI Compliance
                         Fraud Detection & Prevention
                         Wallet Integration
                         Recurring Billing Support`
        },
        {
            name: "Performance Optimization",
            short_information: "Enhance the performance of your e-commerce store to ensure faster load times and higher user engagement.",
            key_points: `Code Optimization
                         Image Compression
                         Lazy Loading
                         Server-Side Improvements
                         Cache Management
                         Enhanced User Experience`
        }
    ]
    
    const whyInvestData = [
        { text: 'Drive Higher Conversions' },
        { text: 'Expand Customer Reach' },
        { text: 'Enhance User Experience' },
        { text: 'Streamline Operations' },
        { text: 'Boost Customer Loyalty' },
    ]
    
    const industriesAndTechnologiesData = {
        industries: [
            'Fashion', 'Electronics', 'Home & Decor', 'Beauty & Health', 'Sports',
            'Automotive', 'Food & Beverage', 'Books', 'Toys & Games', 'Jewelry'
        ],
        technologies: [
            'Shopify', 'WooCommerce', 'Magento', 'BigCommerce', 'OpenCart', 'PrestaShop'
        ]
    }
    
    const portfolioData = [
        {
            name: "Fashion E-commerce Store",
            link: "/portfolio/fashion-ecommerce-store",
            image: "/portfolio/p-1.png",
            tags: [
                { tagLink: '/portfolio/development', tagName: 'Development' },
                { tagLink: '/portfolio/completed', tagName: 'Completed' }
            ]
        },
        {
            name: "Electronics Marketplace",
            link: "/portfolio/electronics-marketplace",
            image: "/portfolio/p-2.png",
            tags: [
                { tagLink: '/portfolio/development', tagName: 'Development' },
                { tagLink: '/portfolio/ongoing', tagName: 'Ongoing' }
            ]
        },
        {
            name: "Mobile Commerce Optimization",
            link: "/portfolio/mobile-commerce-optimization",
            image: "/portfolio/p-3.png",
            tags: [
                { tagLink: '/portfolio/optimization', tagName: 'Optimization' },
                { tagLink: '/portfolio/completed', tagName: 'Completed' }
            ]
        }
    ]
    
    const pricingData = [
        {
            value: "basic",
            label: "Basic (1000-3000$)",
            content: [
                { label: "Store Pages", detail: "Up to 10 pages" },
                { label: "Payment Gateway", detail: "Basic Integration" },
                { label: "Product Listings", detail: "Up to 100" },
                { label: "Basic SEO Setup", icon: <Check className="w-4 h-4" /> },
                { label: "Responsive Design", icon: <Check className="w-4 h-4" /> },
                { label: "Maintenance Support", icon: <Check className="w-4 h-4" /> }
            ],
            buttonText: "Send Request"
        },
        {
            value: "standard",
            label: "Standard (3000-7000$)",
            content: [
                { label: "Store Pages", detail: "Up to 20 pages" },
                { label: "Payment Gateway", detail: "Advanced Integration" },
                { label: "Product Listings", detail: "Up to 500" },
                { label: "Advanced SEO Setup", icon: <Check className="w-4 h-4" /> },
                { label: "Mobile Optimization", icon: <Check className="w-4 h-4" /> },
                { label: "Technical Support", icon: <Check className="w-4 h-4" /> }
            ],
            buttonText: "Send Request"
        },
        {
            value: "premium",
            label: "Premium (7000-15000$)",
            content: [
                { label: "Store Pages", detail: "Unlimited pages" },
                { label: "Payment Gateway", detail: "Multi-Gateway Integration" },
                { label: "Product Listings", detail: "Unlimited" },
                { label: "Comprehensive SEO", icon: <Check className="w-4 h-4" /> },
                { label: "Mobile App Integration", icon: <Check className="w-4 h-4" /> },
                { label: "Priority Support", icon: <Check className="w-4 h-4" /> }
            ],
            buttonText: "Send Request"
        },
        {
            value: "custom",
            label: "Custom",
            content: [
                { label: "Store Pages", detail: "Customized as per needs" },
                { label: "Payment Gateway", detail: "Customized options" },
                { label: "Product Listings", detail: "Unlimited" },
                { label: "Custom Integrations", icon: <Check className="w-4 h-4" /> },
                { label: "Enhanced Security", icon: <Check className="w-4 h-4" /> },
                { label: "Dedicated Account Manager", icon: <Check className="w-4 h-4" /> }
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