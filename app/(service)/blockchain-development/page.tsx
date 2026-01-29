import ContactForm from '@/components/ContactForm'
import HeroService from '@/components/Hero/HeroService'
import PricingSection from '@/components/PricingSection'
import SubServiceCard from '@/components/Service/SubServiceCard'
import { Check } from 'lucide-react'
import React from 'react'

const ServicePage = () => {

    const heroServiceData = {
        title: 'Blockchain Development',
        description: 'Our blockchain development services are designed to create secure, scalable, and innovative blockchain solutions that drive business transformation.',
        services: [
            'Blockchain Consulting',
            'Smart Contract Development',
            'Decentralized Application (DApp) Development',
            'Blockchain Integration',
            'Tokenization',
            'Blockchain Security',
            'Private Blockchain Development',
            'Blockchain Maintenance',
            'Blockchain Wallet Development',
            'Blockchain Supply Chain Solutions',
            'Blockchain Identity Management',
            'Blockchain for Finance',
            'Blockchain for Healthcare',
            'Blockchain for Real Estate',
            'Blockchain for Education',
            'Blockchain for Gaming',
            'Blockchain for IoT',
            'Blockchain for Voting Systems'
        ],
        videoSrc: '/blockchain-hero-video.mp4',
        stats: [
            { label: 'Projects Completed', value: 150 },
            { label: 'Happy Clients', value: 100 },
            { label: 'Awards Won', value: 20 },
            { label: 'Years of Experience', value: 10 },
        ],
    }

    const subServiceData = [
        {
            name: "Blockchain Consulting",
            short_information: "Expert guidance to help you understand the potential of blockchain technology and how it can benefit your business.",
            key_points: `Feasibility Analysis
                       Use Case Identification
                       Technology Selection
                       Strategy Development
                       Proof of Concept
                       Roadmap Creation`
        },
        {
            name: "Smart Contract Development",
            short_information: "Develop secure and efficient smart contracts to automate processes and transactions on the blockchain.",
            key_points: `Smart Contract Design
                       Smart Contract Auditing
                       Smart Contract Optimization
                       Deployment and Testing
                       Integration with DApps
                       Security Best Practices`
        },
        {
            name: "Decentralized Application (DApp) Development",
            short_information: "Build decentralized applications that leverage the power of blockchain for enhanced security and transparency.",
            key_points: `DApp Architecture
                       Frontend and Backend Development
                       Smart Contract Integration
                       User Interface Design
                       Testing and Deployment
                       Maintenance and Support`
        },
        {
            name: "Blockchain Integration",
            short_information: "Integrate blockchain technology into your existing systems to enhance security, transparency, and efficiency.",
            key_points: `System Analysis
                       API Development
                       Middleware Integration
                       Data Migration
                       Security Enhancements
                       Performance Optimization`
        }
    ]

    const whyInvestData = [
        { text: 'Enhanced Security' },
        { text: 'Increased Transparency' },
        { text: 'Reduced Costs' },
        { text: 'Improved Efficiency' },
        { text: 'Greater Trust' },
    ]

    const industriesAndTechnologiesData = {
        industries: [
            'Finance', 'Healthcare', 'Real Estate', 'Supply Chain', 'Education',
            'Gaming', 'Retail', 'Government', 'Energy', 'Telecommunications'
        ],
        technologies: [
            'Ethereum', 'Hyperledger', 'Corda', 'Quorum', 'Stellar', 'EOSIO'
        ]
    }
},
        {
            name: "Blockchain Project 2",
            link: "/portfolio/blockchain-project-2",
            image: "/Portfolio/p-2.png",
            tags: [
                { tagLink: '/portfolio/blockchain', tagName: 'Blockchain' },
                { tagLink: '/portfolio/healthcare', tagName: 'Healthcare' }
            ]
        },
        {
            name: "Blockchain Project 3",
            link: "/portfolio/blockchain-project-3",
            image: "/Portfolio/p-3.png",
            tags: [
                { tagLink: '/portfolio/blockchain', tagName: 'Blockchain' },
                { tagLink: '/portfolio/real-estate', tagName: 'Real Estate' }
            ]
        }
    ]

    const pricingData = [
        {
            value: "starter",
            label: "Starter (1000-5000$)",
            content: [
                { label: "Consultation Hours", detail: "up to 20 hours" },
                { label: "Developers", detail: "1-3" },
                { label: "Smart Contracts", detail: "1-2" },
                { label: "DApp Development", detail: "Basic" },
                { label: "Integration", icon: <Check className="w-4 h-4" /> },
                { label: "Security Audit", icon: <Check className="w-4 h-4" /> },
                { label: "Maintenance", icon: <Check className="w-4 h-4" /> },
                { label: "Documentation", icon: <Check className="w-4 h-4" /> },
            ],
            buttonText: "Send Request"
        },
        {
            value: "standard",
            label: "Standard (5000-20000$)",
            content: [
                { label: "Consultation Hours", detail: "up to 50 hours" },
                { label: "Developers", detail: "3-5" },
                { label: "Smart Contracts", detail: "3-5" },
                { label: "DApp Development", detail: "Intermediate" },
                { label: "Integration", icon: <Check className="w-4 h-4" /> },
                { label: "Security Audit", icon: <Check className="w-4 h-4" /> },
                { label: "Maintenance", icon: <Check className="w-4 h-4" /> },
                { label: "Documentation", icon: <Check className="w-4 h-4" /> },
            ],
            buttonText: "Send Request"
        },
        {
            value: "enterprise",
            label: "Enterprise (20000-50000$)",
            content: [
                { label: "Consultation Hours", detail: "up to 100 hours" },
                { label: "Developers", detail: "5-10" },
                { label: "Smart Contracts", detail: "5-10" },
                { label: "DApp Development", detail: "Advanced" },
                { label: "Integration", icon: <Check className="w-4 h-4" /> },
                { label: "Security Audit", icon: <Check className="w-4 h-4" /> },
                { label: "Maintenance", icon: <Check className="w-4 h-4" /> },
                { label: "Documentation", icon: <Check className="w-4 h-4" /> },
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
