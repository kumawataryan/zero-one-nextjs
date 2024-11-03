import ContactForm from '@/components/ContactForm'
import HeroService from '@/components/Hero/HeroService'
import PortfolioCard from '@/components/Portfolio/PortfolioCard'
import PricingSection from '@/components/PricingSection'
import SubServiceCard from '@/components/Service/SubServiceCard'
import React from 'react'

const ServicePage = () => {

    const heroServiceData = {
        title: 'Software Development',
        description: 'Zero-One Agency specializes in custom software development services tailored to meet your unique business needs, ensuring robust, scalable, and high-performance solutions.',
        services: [
            'Custom Software Development',
            'Web Application Development',
            'Mobile Application Development',
            'Software Integration',
            'API Development',
            'Cloud Solutions',
            'Software Maintenance and Support',
            'DevOps Services',
            'Quality Assurance and Testing',
            'UI/UX Design for Software',
            'Legacy System Modernization',
            'Enterprise Software Solutions',
            'E-commerce Software Development',
            'Content Management Systems',
            'Data Analytics and Business Intelligence'
        ],
        videoSrc: '/hero-video.mp4',
        stats: [
            { label: 'Projects Delivered', value: 200 },
            { label: 'Clients Served', value: 150 },
            { label: 'Years of Experience', value: 10 },
            { label: 'Countries Covered', value: 30 },
        ],
    }
    
    const subServiceData = [
        {
            name: "Custom Software Development",
            short_information: "Develop tailor-made software solutions that fit your specific business requirements and challenges.",
            key_points: `Requirement Analysis
                         Agile Development Methodology
                         Scalability and Performance
                         Ongoing Support
                         User Training`
        },
        {
            name: "Web Application Development",
            short_information: "Create responsive and dynamic web applications to enhance your online presence and user engagement.",
            key_points: `Frontend Development
                         Backend Development
                         Full-Stack Solutions
                         Responsive Design
                         Database Management`
        },
        {
            name: "Mobile Application Development",
            short_information: "Design and develop mobile applications for both iOS and Android platforms that deliver a seamless user experience.",
            key_points: `Native and Hybrid Apps
                         Cross-Platform Development
                         User-Centric Design
                         App Store Optimization
                         Regular Updates and Maintenance`
        },
        {
            name: "API Development",
            short_information: "Build robust APIs to enable integration between different software systems and enhance functionality.",
            key_points: `RESTful and SOAP APIs
                         API Documentation
                         Security Protocols
                         Third-Party Integration
                         Performance Optimization`
        }
    ]
    
    const whyInvestData = [
        { text: 'Improved Efficiency and Productivity' },
        { text: 'Scalability to Support Growth' },
        { text: 'Competitive Advantage' },
        { text: 'Enhanced User Experience' },
        { text: 'Robust Security Measures' },
    ]
    
    const industriesAndTechnologiesData = {
        industries: [
            'Healthcare', 'Finance', 'Retail', 
            'Education', 'Travel', 'Technology', 
            'Telecommunications', 'Manufacturing', 'Logistics', 'Entertainment'
        ],
        technologies: [
            'Java', 'Python', 'JavaScript', 
            'C#', 'Ruby on Rails', 'Node.js', 
            'React', 'Angular', 'Django', 'AWS'
        ]
    }
    
    const portfolioData = [
        {
            name: "E-commerce Platform Development",
            link: "/portfolio/ecommerce-platform",
            image: "/Portfolio/p-1.png",
            tags: [
                { tagLink: '/portfolio/software-development', tagName: 'Software Development' },
                { tagLink: '/portfolio/completed', tagName: 'Completed' }
            ]
        },
        {
            name: "Mobile Banking App",
            link: "/portfolio/mobile-banking-app",
            image: "/Portfolio/p-2.png",
            tags: [
                { tagLink: '/portfolio/software-development', tagName: 'Software Development' },
                { tagLink: '/portfolio/completed', tagName: 'Completed' }
            ]
        },
        {
            name: "Healthcare Management System",
            link: "/portfolio/healthcare-system",
            image: "/Portfolio/p-3.png",
            tags: [
                { tagLink: '/portfolio/software-development', tagName: 'Software Development' },
                { tagLink: '/portfolio/completed', tagName: 'Completed' }
            ]
        }
    ]
    
    const pricingData = [
        {
            value: "basic",
            label: "Basic Software Package (500-2000$)",
            content: [
                { label: "Pages/Modules", detail: "Up to 3 modules" },
                { label: "Design Complexity", detail: "Basic UI" },
                { label: "Development Time", detail: "4-6 weeks" },
                { label: "Post-launch Support", detail: "1 month" },
            ],
            buttonText: "Send Request"
        },
        {
            value: "standard",
            label: "Standard Software Package (2000-5000$)",
            content: [
                { label: "Pages/Modules", detail: "Up to 6 modules" },
                { label: "Design Complexity", detail: "Custom UI" },
                { label: "Development Time", detail: "8-12 weeks" },
                { label: "Post-launch Support", detail: "3 months" },
            ],
            buttonText: "Send Request"
        },
        {
            value: "premium",
            label: "Premium Software Package (5000-10000$)",
            content: [
                { label: "Pages/Modules", detail: "Unlimited modules" },
                { label: "Design Complexity", detail: "Advanced UI" },
                { label: "Development Time", detail: "12-24 weeks" },
                { label: "Post-launch Support", detail: "6 months" },
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