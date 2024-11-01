import ContactForm from '@/components/ContactForm'
import HeroService from '@/components/Hero/HeroService'
import PortfolioCard from '@/components/Portfolio/PortfolioCard'
import PricingSection from '@/components/PricingSection'
import SubServiceCard from '@/components/Service/SubServiceCard'
import { Check } from 'lucide-react'
import React from 'react'


const ServicePage = () => {

    const heroServiceData = {
        title: 'Webflow Development',
        description: 'Zero-One Agency specializes in Webflow development to create stunning, responsive websites with seamless user experiences. Our team delivers end-to-end solutions that include custom design, advanced functionality, and performance optimization.',
        services: [
            'Custom Webflow Website Design',
            'Responsive Design and Development',
            'CMS Integration',
            'SEO Optimization',
            'Custom Animations and Interactions',
            'E-commerce Solutions',
            'Landing Page Creation',
            'Third-Party Integrations',
            'Performance Optimization',
            'Content Management Training',
            'Website Maintenance and Updates',
            'Data Migration to Webflow',
            'Custom Code Integration',
            'Hosting and Domain Setup',
            'Analytics Setup and Tracking'
        ],
        videoSrc: '/webflow-hero-video.mp4',
        stats: [
            { label: 'Websites Launched', value: 100 },
            { label: 'Projects Completed', value: 130 },
            { label: 'Happy Clients', value: 120 },
            { label: 'Years of Webflow Expertise', value: 5 },
        ],
    }
    
    const subServiceData = [
        {
            name: "Custom Webflow Website Design",
            short_information: "Design a unique Webflow website tailored to your brand and optimized for your audience.",
            key_points: `User-Centric Design
                         Brand-Aligned Aesthetics
                         Responsive Layouts
                         Design Prototyping
                         Iterative Feedback`
        },
        {
            name: "CMS Integration",
            short_information: "Integrate Webflow CMS for easy content management and updating, tailored to your business needs.",
            key_points: `Custom CMS Collections
                         Dynamic Content Setup
                         Blogging Integration
                         Product Catalogs
                         User-Friendly Editing`
        },
        {
            name: "SEO Optimization",
            short_information: "Optimize your Webflow website for search engines to improve visibility and drive organic traffic.",
            key_points: `On-Page SEO
                         Meta Tags and Descriptions
                         Image Optimization
                         Alt Text Implementation
                         SEO Audits and Reporting`
        },
        {
            name: "E-commerce Solutions",
            short_information: "Build a fully functional e-commerce store on Webflow, designed to maximize sales and offer a smooth user experience.",
            key_points: `Product Listings and Categories
                         Cart and Checkout Setup
                         Payment Gateway Integration
                         Inventory Management
                         E-commerce Analytics`
        }
    ]
    
    const whyInvestData = [
        { text: 'Flexible, Scalable Design' },
        { text: 'Seamless User Experience' },
        { text: 'Easily Editable Content' },
        { text: 'Enhanced SEO Capabilities' },
        { text: 'Fast Deployment' },
    ]
    
    const industriesAndTechnologiesData = {
        industries: [
            'Retail', 'Technology', 'Healthcare', 
            'Finance', 'Education', 'Real Estate', 
            'E-commerce', 'Non-Profit', 'Entertainment', 'Food & Beverage'
        ],
        technologies: [
            'Webflow CMS', 'Zapier', 'Airtable', 
            'Google Analytics', 'Stripe', 'PayPal', 
            'Figma', 'Google Optimize', 'Hotjar', 'SEO Tools'
        ]
    }
    
    const portfolioData = [
        {
            name: "Creative Agency Website",
            link: "/portfolio/creative-agency",
            image: "/portfolio/p-1.png",
            tags: [
                { tagLink: '/portfolio/webflow', tagName: 'Webflow' },
                { tagLink: '/portfolio/completed', tagName: 'Completed' }
            ]
        },
        {
            name: "Tech Startup Platform",
            link: "/portfolio/tech-startup",
            image: "/portfolio/p-2.png",
            tags: [
                { tagLink: '/portfolio/webflow', tagName: 'Webflow' },
                { tagLink: '/portfolio/completed', tagName: 'Completed' }
            ]
        },
        {
            name: "E-commerce Store for Fashion Brand",
            link: "/portfolio/fashion-store",
            image: "/portfolio/p-2.png",
            tags: [
                { tagLink: '/portfolio/webflow', tagName: 'Webflow' },
                { tagLink: '/portfolio/completed', tagName: 'Completed' }
            ]
        }
    ]
    
    const pricingData = [
        {
            value: "basic",
            label: "Basic Webflow Package (1000-3000$)",
            content: [
                { label: "Custom Homepage Design", icon: <Check className="w-4 h-4" /> },
                { label: "Responsive Layouts", icon: <Check className="w-4 h-4" /> },
                { label: "Basic SEO Setup", icon: <Check className="w-4 h-4" /> },
                { label: "CMS Integration", icon: <Check className="w-4 h-4" /> },
            ],
            buttonText: "Send Request"
        },
        {
            value: "standard",
            label: "Standard Webflow Package (3000-6000$)",
            content: [
                { label: "Custom Design for Up to 5 Pages", icon: <Check className="w-4 h-4" /> },
                { label: "Advanced Animations", icon: <Check className="w-4 h-4" /> },
                { label: "SEO Optimization", icon: <Check className="w-4 h-4" /> },
                { label: "Content Management System", icon: <Check className="w-4 h-4" /> },
            ],
            buttonText: "Send Request"
        },
        {
            value: "premium",
            label: "Premium Webflow Package (6000-10000$)",
            content: [
                { label: "Complete Custom Design", icon: <Check className="w-4 h-4" /> },
                { label: "E-commerce Functionality", icon: <Check className="w-4 h-4" /> },
                { label: "Third-Party Integrations", icon: <Check className="w-4 h-4" /> },
                { label: "Advanced SEO and Analytics", icon: <Check className="w-4 h-4" /> },
            ],
            buttonText: "Send Request"
        },
        {
            value: "custom",
            label: "Custom Webflow Solutions",
            content: [
                { label: "Tailored Design & Development", detail: "Based on specific needs" },
                { label: "Custom Integrations and Features", icon: <Check className="w-4 h-4" /> },
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