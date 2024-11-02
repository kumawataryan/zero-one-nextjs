import ContactForm from '@/components/ContactForm'
import HeroService from '@/components/Hero/HeroService'
import PortfolioCard from '@/components/Portfolio/PortfolioCard'
import PricingSection from '@/components/PricingSection'
import SubServiceCard from '@/components/Service/SubServiceCard'
import { Check } from 'lucide-react'
import React from 'react'

const ServicePage = () => {

    const heroServiceData = {
        title: 'Blockchain & Crypto Services',
        description: 'Our blockchain and crypto services are designed to help you navigate the complexities of blockchain technology and cryptocurrency markets.',
        services: [
            'Blockchain Development',
            'Smart Contract Development',
            'Crypto Wallet Development',
            'Decentralized Application (DApp) Development',
            'Tokenization',
            'Blockchain Consulting',
            'Crypto Exchange Development',
            'ICO & STO Services',
            'Blockchain Integration',
            'Blockchain Security',
            'Blockchain Maintenance',
            'Blockchain Testing',
            'Blockchain Auditing',
            'Cryptocurrency Payment Gateway',
            'Blockchain Training',
            'Blockchain Support',
            'Blockchain Marketing',
            'Blockchain Legal Services'
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
            name: "Blockchain Development",
            short_information: "Develop custom blockchain solutions tailored to your business needs.",
            key_points: `Custom Blockchain Development
                       Private Blockchain Development
                       Public Blockchain Development
                       Blockchain Integration
                       Blockchain Maintenance
                       Blockchain Testing`
        },
        {
            name: "Smart Contract Development",
            short_information: "Create secure and efficient smart contracts for various blockchain platforms.",
            key_points: `Smart Contract Development
                       Smart Contract Audit
                       Smart Contract Optimization
                       Smart Contract Deployment
                       Smart Contract Maintenance`
        },
        {
            name: "Crypto Wallet Development",
            short_information: "Develop secure and user-friendly crypto wallets for various cryptocurrencies.",
            key_points: `Multi-Currency Wallet Development
                       Mobile Wallet Development
                       Web Wallet Development
                       Desktop Wallet Development
                       Wallet Integration
                       Wallet Security`
        },
        {
            name: "Decentralized Application (DApp) Development",
            short_information: "Build decentralized applications (DApps) on various blockchain platforms.",
            key_points: `DApp Development
                       DApp Design
                       DApp Integration
                       DApp Maintenance
                       DApp Testing
                       DApp Security`
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
            'Finance', 'Healthcare', 'Supply Chain', 'Real Estate', 'Gaming',
            'Insurance', 'Energy', 'Retail', 'Government', 'Education'
        ],
        technologies: [
            'Ethereum', 'Hyperledger', 'Corda', 'EOS', 'Tron', 'Stellar'
        ]
    }
    
    const portfolioData = [
        {
            name: "Blockchain Project 1",
            link: "/portfolio/blockchain-project-1",
            image: "/portfolio/p-1.png",
            tags: [
                { tagLink: '/portfolio/blockchain', tagName: 'Blockchain' },
                { tagLink: '/portfolio/crypto', tagName: 'Crypto' },
            ]
        },
        {
            name: "Blockchain Project 2",
            link: "/portfolio/blockchain-project-2",
            image: "/portfolio/p-2.png",
            tags: [
                { tagLink: '/portfolio/blockchain', tagName: 'Blockchain' },
                { tagLink: '/portfolio/crypto', tagName: 'Crypto' }
            ]
        },
        {
            name: "Blockchain Project 3",
            link: "/portfolio/blockchain-project-3",
            image: "/portfolio/p-3.png",
            tags: [
                { tagLink: '/portfolio/blockchain', tagName: 'Blockchain' },
                { tagLink: '/portfolio/crypto', tagName: 'Crypto' }
            ]
        }
    ]
    
    const pricingData = [
        {
            value: "starter",
            label: "Starter (1000-5000$)",
            content: [
                { label: "Services", detail: "Basic Blockchain Development" },
                { label: "Consultation", detail: "1-2 hours" },
                { label: "Support", detail: "Email Support" },
                { label: "Deployment", icon: <Check className="w-4 h-4" /> },
                { label: "Maintenance", icon: <Check className="w-4 h-4" /> },
                { label: "Security Audit", icon: <Check className="w-4 h-4" /> },
            ],
            buttonText: "Send Request"
        },
        {
            value: "standard",
            label: "Standard (5000-20000$)",
            content: [
                { label: "Services", detail: "Advanced Blockchain Development" },
                { label: "Consultation", detail: "5-10 hours" },
                { label: "Support", detail: "Phone & Email Support" },
                { label: "Deployment", icon: <Check className="w-4 h-4" /> },
                { label: "Maintenance", icon: <Check className="w-4 h-4" /> },
                { label: "Security Audit", icon: <Check className="w-4 h-4" /> },
            ],
            buttonText: "Send Request"
        },
        {
            value: "premium",
            label: "Premium (20000-50000$)",
            content: [
                { label: "Services", detail: "Full Blockchain Solution" },
                { label: "Consultation", detail: "Unlimited hours" },
                { label: "Support", detail: "24/7 Support" },
                { label: "Deployment", icon: <Check className="w-4 h-4" /> },
                { label: "Maintenance", icon: <Check className="w-4 h-4" /> },
                { label: "Security Audit", icon: <Check className="w-4 h-4" /> },
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