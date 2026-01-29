import ContactForm from '@/components/ContactForm'
import HeroService from '@/components/Hero/HeroService'
import PortfolioCard from '@/components/Portfolio/PortfolioCard'
import PricingSection from '@/components/PricingSection'
import SubServiceCard from '@/components/Service/SubServiceCard'
import { Check } from 'lucide-react'
import React from 'react'


const ServicePage = () => {

    const heroServiceData = {
        title: 'WordPress Development',
        description: 'Specializes in WordPress development services, creating customized websites that are user-friendly, secure, and optimized for performance.',
        services: [
            'Custom WordPress Theme Development',
            'Plugin Development',
            'WooCommerce Integration',
            'Website Migration',
            'Performance Optimization',
            'WordPress Security Enhancements',
            'SEO Optimization',
            'Responsive Design',
            'Maintenance and Support',
            'Content Management Training',
            'E-commerce Solutions',
            'Multisite Configuration',
            'API Integrations',
            'Website Audits',
            'Backup Solutions'
        ],
        videoSrc: '/hero-video.mp4',
        stats: [
            { label: 'Websites Developed', value: 250 },
            { label: 'Happy Clients', value: 200 },
            { label: 'Years of Experience', value: 10 },
            { label: 'Support Tickets Resolved', value: 500 },
        ],
    }

    const subServiceData = [
        {
            name: "Custom WordPress Theme Development",
            short_information: "Design and develop custom WordPress themes tailored to your brand's identity and functionality requirements.",
            key_points: `Unique Design Concepts
                         Responsive Layouts
                         Cross-Browser Compatibility
                         Theme Customization Options
                         SEO-Friendly Structure`
        },
        {
            name: "Plugin Development",
            short_information: "Create custom plugins that extend the functionality of your WordPress site to meet specific business needs.",
            key_points: `Custom Features Development
                         Integration with Third-Party Services
                         Security Best Practices
                         Performance Optimization
                         Ongoing Support`
        },
        {
            name: "WooCommerce Integration",
            short_information: "Set up and customize WooCommerce for your online store, ensuring a seamless shopping experience for your customers.",
            key_points: `Product Management
                         Payment Gateway Integration
                         Shipping Configuration
                         User Experience Optimization
                         Performance Enhancements`
        },
        {
            name: "Website Migration",
            short_information: "Safely migrate your existing website to WordPress with minimal downtime and data loss.",
            key_points: `Comprehensive Site Backup
                         Data Transfer and Validation
                         DNS Configuration
                         Post-Migration Support
                         SEO Maintenance`
        }
    ]

    const whyInvestData = [
        { text: 'Scalable and Flexible Solutions' },
        { text: 'User-Friendly Interface' },
        { text: 'SEO-Friendly Architecture' },
        { text: 'Robust Security Features' },
        { text: 'Strong Community Support' },
    ]

    const industriesAndTechnologiesData = {
        industries: [
            'E-commerce', 'Education', 'Healthcare',
            'Real Estate', 'Entertainment', 'Blogging',
            'Non-Profit', 'Corporate', 'Technology'
        ],
        technologies: [
            'PHP', 'JavaScript', 'HTML5',
            'CSS3', 'MySQL', 'REST API',
            'WooCommerce', 'Elementor', 'Yoast SEO'
        ]
    }

    const portfolioData = [
        {
            name: "E-commerce Store Development",
            link: "/portfolio/ecommerce-store",
            image: "/Portfolio/p-1.png",
            tags: [
                { tagLink: '/portfolio/wordpress-development', tagName: 'WordPress Development' },
                { tagLink: '/portfolio/completed', tagName: 'Completed' }
            ]
        },
        {
            name: "Corporate Website Launch",
            link: "/portfolio/corporate-website",
            image: "/Portfolio/p-2.png",
            tags: [
                { tagLink: '/portfolio/wordpress-development', tagName: 'WordPress Development' },
                { tagLink: '/portfolio/completed', tagName: 'Completed' }
            ]
        },
        {
            name: "Blogging Platform Setup",
            link: "/portfolio/blog-platform",
            image: "/Portfolio/p-3.png",
            tags: [
                { tagLink: '/portfolio/wordpress-development', tagName: 'WordPress Development' },
                { tagLink: '/portfolio/completed', tagName: 'Completed' }
            ]
        }
    ]

    const pricingData = [
        {
            value: "basic",
            label: "Basic WordPress Package",
            content: [
                { label: "Pages", detail: "up to 5 pages" },
                { label: "Custom Theme", detail: "Pre-made theme customization" },
                { label: "Basic SEO Setup", icon: <Check className="w-4 h-4" /> },
                { label: "Security Plugins", icon: <Check className="w-4 h-4" /> },
                { label: "Responsive Design", icon: <Check className="w-4 h-4" /> },
            ],
            buttonText: "Send Request"
        },
        {
            value: "standard",
            label: "Standard WordPress Package",
            content: [
                { label: "Pages", detail: "up to 10 pages" },
                { label: "Custom Theme", detail: "Custom theme development" },
                { label: "E-commerce Setup", icon: <Check className="w-4 h-4" /> },
                { label: "Advanced SEO Setup", icon: <Check className="w-4 h-4" /> },
                { label: "Performance Optimization", icon: <Check className="w-4 h-4" /> },
            ],
            buttonText: "Send Request"
        },
        {
            value: "premium",
            label: "Premium WordPress Package",
            content: [
                { label: "Pages", detail: "up to 20 pages" },
                { label: "Custom Theme", detail: "Bespoke theme development" },
                { label: "Plugin Development", icon: <Check className="w-4 h-4" /> },
                { label: "Full E-commerce Features", icon: <Check className="w-4 h-4" /> },
                { label: "Ongoing Support", icon: <Check className="w-4 h-4" /> },
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

            {/*
            Portfolio Section
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
            */}

            {/* Contact Form */}
            <div className='mt-32'>
                <ContactForm heading={true} />
            </div>
        </div>
    )
}

export default ServicePage