import ContactForm from '@/components/ContactForm'
import HeroService from '@/components/Hero/HeroService'
import PortfolioCard from '@/components/Portfolio/PortfolioCard'
import PricingSection from '@/components/PricingSection'
import SubServiceCard from '@/components/Service/SubServiceCard'
import { Check } from 'lucide-react'
import React from 'react'

const ServicePage = () => {

    const heroServiceData = {
        title: 'Tech Consultation',
        description: 'Zero-One Agency offers expert tech consultation services to guide businesses through their digital transformation and technology adoption journeys.',
        services: [
            'IT Strategy Development',
            'Technology Assessment',
            'Cloud Solutions Consultation',
            'Cybersecurity Assessment',
            'Software Development Consultation',
            'Technology Roadmapping',
            'Digital Transformation Strategy',
            'Vendor Selection and Management',
            'Data Management and Analytics',
            'IT Infrastructure Planning',
            'Regulatory Compliance Guidance',
            'Change Management',
            'Agile and DevOps Consultation',
            'Cost Optimization Strategies',
            'Ongoing Support and Advisory'
        ],
        videoSrc: '/hero-video.mp4',
        stats: [
            { label: 'Projects Consulted', value: 150 },
            { label: 'Industries Served', value: 20 },
            { label: 'Years of Experience', value: 12 },
            { label: 'Satisfied Clients', value: 95 },
        ],
    }
    
    const subServiceData = [
        {
            name: "IT Strategy Development",
            short_information: "Create a comprehensive IT strategy aligned with your business goals to enhance operational efficiency and support growth.",
            key_points: `Vision and Mission Alignment
                         IT Governance Framework
                         Risk Management
                         Budgeting and Resource Allocation
                         Performance Metrics`
        },
        {
            name: "Technology Assessment",
            short_information: "Evaluate current technologies and systems to identify areas for improvement and ensure optimal performance.",
            key_points: `System Performance Evaluation
                         Gap Analysis
                         Recommendations for Upgrades
                         Cost-Benefit Analysis
                         Future-Proofing Strategies`
        },
        {
            name: "Cloud Solutions Consultation",
            short_information: "Guide your organization through cloud adoption, ensuring scalable and secure solutions tailored to your needs.",
            key_points: `Cloud Strategy Development
                         Migration Planning
                         Security Best Practices
                         Cost Management
                         Vendor Negotiations`
        },
        {
            name: "Cybersecurity Assessment",
            short_information: "Conduct a thorough cybersecurity review to identify vulnerabilities and implement robust security measures.",
            key_points: `Risk Assessment
                         Threat Analysis
                         Security Policies Development
                         Incident Response Planning
                         Employee Training`
        }
    ]
    
    const whyInvestData = [
        { text: 'Access to Industry Experts' },
        { text: 'Tailored Solutions for Your Needs' },
        { text: 'Improved Operational Efficiency' },
        { text: 'Risk Mitigation and Compliance' },
        { text: 'Enhanced Technology ROI' },
    ]
    
    const industriesAndTechnologiesData = {
        industries: [
            'Finance', 'Healthcare', 'E-commerce', 
            'Education', 'Retail', 'Manufacturing',
            'Technology', 'Telecommunications', 'Non-Profit'
        ],
        technologies: [
            'Cloud Computing', 'AI & Machine Learning', 
            'Data Analytics', 'Blockchain', 'Cybersecurity', 
            'IoT', 'DevOps', 'Big Data', 'CRM Solutions'
        ]
    }
    
    const portfolioData = [
        {
            name: "Finance Transformation Project",
            link: "/portfolio/finance-transformation",
            image: "/portfolio/p-1.png",
            tags: [
                { tagLink: '/portfolio/tech-consultation', tagName: 'Tech Consultation' },
                { tagLink: '/portfolio/completed', tagName: 'Completed' }
            ]
        },
        {
            name: "Healthcare IT Strategy",
            link: "/portfolio/healthcare-it",
            image: "/portfolio/p-2.png",
            tags: [
                { tagLink: '/portfolio/tech-consultation', tagName: 'Tech Consultation' },
                { tagLink: '/portfolio/completed', tagName: 'Completed' }
            ]
        },
    ]
    
    const pricingData = [
        {
            value: "basic",
            label: "Basic Consultation Package",
            content: [
                { label: "Duration", detail: "1-2 weeks" },
                { label: "Consulting Hours", detail: "5 hours" },
                { label: "Technology Assessment", icon: <Check className="w-4 h-4" /> },
                { label: "Basic Recommendations Report", icon: <Check className="w-4 h-4" /> },
            ],
            buttonText: "Send Request"
        },
        {
            value: "standard",
            label: "Standard Consultation Package",
            content: [
                { label: "Duration", detail: "2-4 weeks" },
                { label: "Consulting Hours", detail: "10 hours" },
                { label: "Technology Assessment", icon: <Check className="w-4 h-4" /> },
                { label: "Detailed Recommendations Report", icon: <Check className="w-4 h-4" /> },
                { label: "Follow-up Session", icon: <Check className="w-4 h-4" /> },
            ],
            buttonText: "Send Request"
        },
        {
            value: "premium",
            label: "Premium Consultation Package",
            content: [
                { label: "Duration", detail: "1-3 months" },
                { label: "Consulting Hours", detail: "20 hours" },
                { label: "Comprehensive Technology Assessment", icon: <Check className="w-4 h-4" /> },
                { label: "Tailored Recommendations", icon: <Check className="w-4 h-4" /> },
                { label: "Ongoing Support", icon: <Check className="w-4 h-4" /> },
            ],
            buttonText: "Send Request"
        },
        {
            value: "custom",
            label: "Custom Tech Consultation",
            content: [
                { label: "Tailored Solutions", detail: "Based on specific needs" },
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