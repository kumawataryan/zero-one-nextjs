import ContactForm from '@/components/ContactForm'
import HeroService from '@/components/Hero/HeroService'
import PricingSection from '@/components/PricingSection'
import SubServiceCard from '@/components/Service/SubServiceCard'
import { Check } from 'lucide-react'
import React from 'react'

const ServicePage = () => {

    const heroServiceData = {
        title: 'Maintenance and Support',
        description: 'We provide reliable maintenance and support services to ensure the stability, security, and performance of your digital assets. Our team offers proactive monitoring, timely updates, and expert troubleshooting to keep your platforms running smoothly.',
        services: [
            'Website Performance Optimization',
            'Security Monitoring and Updates',
            'Content and Asset Updates',
            'Backup and Recovery Services',
            'Bug Fixes and Issue Resolution',
            'Platform and Plugin Updates',
            'Custom Feature Development',
            'User Experience Enhancements',
            'Technical Support',
            'Performance Reporting',
            'Compatibility Testing',
            'Database Optimization',
            'Server Management',
            'Training and Documentation',
            'Scalability Planning'
        ],
        videoSrc: '/maintenance-hero-video.mp4',
        stats: [
            { label: 'Incidents Resolved', value: 500 },
            { label: 'Systems Monitored', value: 200 },
            { label: 'Clients Supported', value: 150 },
            { label: 'Years of Experience', value: 8 },
        ],
    }
    
    const subServiceData = [
        {
            name: "Website Performance Optimization",
            short_information: "Optimize website speed and responsiveness to ensure a seamless user experience.",
            key_points: `Page Load Speed Optimization
                         Image and Asset Compression
                         Code Minification
                         Caching Improvements
                         Performance Tracking`
        },
        {
            name: "Security Monitoring and Updates",
            short_information: "Protect your digital assets with regular security checks and updates.",
            key_points: `Vulnerability Scanning
                         Malware Removal
                         SSL and Firewall Updates
                         Security Patches
                         Threat Detection and Alerts`
        },
        {
            name: "Backup and Recovery Services",
            short_information: "Secure your data with regular backups and reliable recovery options in case of data loss.",
            key_points: `Automated Backups
                         Data Restoration
                         Disaster Recovery Plans
                         Cloud Storage Solutions
                         Testing and Validation`
        },
        {
            name: "Content and Asset Updates",
            short_information: "Keep your website fresh and up-to-date with regular content and asset updates.",
            key_points: `Text and Image Updates
                         New Product Listings
                         Seasonal or Promotional Updates
                         Blog Posting and Management
                         Asset Optimization`
        }
    ]
    
    const whyInvestData = [
        { text: 'Enhanced Security and Reliability' },
        { text: 'Improved User Experience' },
        { text: 'Proactive Issue Prevention' },
        { text: 'Data Protection and Recovery' },
        { text: 'Scalable Support' },
    ]
    
    const industriesAndTechnologiesData = {
        industries: [
            'Retail', 'Healthcare', 'Finance', 
            'Education', 'Real Estate', 'E-commerce', 
            'Entertainment', 'Non-Profit', 'Technology', 'Travel'
        ],
        technologies: [
            'AWS', 'Microsoft Azure', 'Cloudflare', 
            'WordPress', 'Shopify', 'Google Analytics', 
            'Jira', 'Slack', 'MySQL', 'PHP', 'Node.js'
        ]
    }
    
    const pricingData = [
        {
            value: "basic",
            label: "Basic Maintenance Package (200-800$)",
            content: [
                { label: "Monthly Backups", icon: <Check className="w-4 h-4" /> },
                { label: "Security Patches", icon: <Check className="w-4 h-4" /> },
                { label: "Basic Performance Reports", icon: <Check className="w-4 h-4" /> },
                { label: "Email Support", icon: <Check className="w-4 h-4" /> },
            ],
            buttonText: "Send Request"
        },
        {
            value: "standard",
            label: "Standard Maintenance Package (800-1500$)",
            content: [
                { label: "Weekly Backups", icon: <Check className="w-4 h-4" /> },
                { label: "Performance Optimization", icon: <Check className="w-4 h-4" /> },
                { label: "Security Monitoring", icon: <Check className="w-4 h-4" /> },
                { label: "Phone Support", icon: <Check className="w-4 h-4" /> },
            ],
            buttonText: "Send Request"
        },
        {
            value: "premium",
            label: "Premium Maintenance Package (1500-3000$)",
            content: [
                { label: "Daily Backups", icon: <Check className="w-4 h-4" /> },
                { label: "Comprehensive Security Management", icon: <Check className="w-4 h-4" /> },
                { label: "Advanced Analytics", icon: <Check className="w-4 h-4" /> },
                { label: "24/7 Support", icon: <Check className="w-4 h-4" /> },
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


            {/* Contact Form */}
            <div className='mt-32'>
                <ContactForm heading={true} />
            </div>
        </div>
    )
}

export default ServicePage
