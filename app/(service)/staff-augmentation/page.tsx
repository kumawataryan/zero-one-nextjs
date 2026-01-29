import ContactForm from '@/components/ContactForm'
import HeroService from '@/components/Hero/HeroService'
import PricingSection from '@/components/PricingSection'
import SubServiceCard from '@/components/Service/SubServiceCard'
import React from 'react'


const ServicePage = () => {

    const heroServiceData = {
        title: 'Staff Augmentation',
        description: 'We provide flexible staff augmentation services to help businesses scale their teams quickly and efficiently with top-tier talent.',
        services: [
            'IT Staff Augmentation',
            'Project-Based Staffing',
            'Dedicated Development Teams',
            'Remote Staff Augmentation',
            'Onsite Staffing Solutions',
            'Technical Support Staff',
            'Quality Assurance Specialists',
            'UI/UX Designers',
            'DevOps Engineers',
            'Data Analysts',
            'Business Analysts',
            'Project Managers',
            'Cloud Specialists',
            'Cybersecurity Experts',
            'Software Developers',
            'Training and Onboarding'
        ],
        videoSrc: '/hero-video.mp4',
        stats: [
            { label: 'Clients Served', value: 120 },
            { label: 'Successful Placements', value: 300 },
            { label: 'Years of Experience', value: 10 },
            { label: 'Industries Covered', value: 15 },
        ],
    }
    
    const subServiceData = [
        {
            name: "IT Staff Augmentation",
            short_information: "Quickly fill in technical roles with skilled IT professionals who can contribute immediately to your projects.",
            key_points: `Scalable Talent Solutions
                         Access to a Global Talent Pool
                         Flexibility in Hiring
                         Quick Onboarding
                         Skill-Specific Staffing`
        },
        {
            name: "Dedicated Development Teams",
            short_information: "Establish dedicated teams that work exclusively on your projects, ensuring focused attention and expertise.",
            key_points: `Full Control Over Team Composition
                         Direct Communication with Team Members
                         Agile Development Practices
                         Ongoing Support and Maintenance
                         Cost-Effective Solutions`
        },
        {
            name: "Remote Staff Augmentation",
            short_information: "Leverage remote professionals to enhance your team's capabilities while reducing overhead costs.",
            key_points: `Access to Global Talent
                         Increased Flexibility
                         Diverse Skill Sets
                         Remote Collaboration Tools
                         Time Zone Alignment`
        },
        {
            name: "Project-Based Staffing",
            short_information: "Bring in experts for specific projects to ensure timely delivery and high-quality results.",
            key_points: `Expertise for Critical Projects
                         Reduced Time-to-Hire
                         Customized Team Structure
                         Performance-Based Engagements
                         Focused Project Execution`
        }
    ]
    
    const whyInvestData = [
        { text: 'Access to Specialized Skills' },
        { text: 'Faster Recruitment Process' },
        { text: 'Cost Efficiency' },
        { text: 'Increased Flexibility' },
        { text: 'Reduced Time-to-Market' },
    ]
    
    const industriesAndTechnologiesData = {
        industries: [
            'Technology', 'Finance', 'Healthcare',
            'Retail', 'Telecommunications', 'Education',
            'Manufacturing', 'Logistics', 'Entertainment', 'Non-Profit'
        ],
        technologies: [
            'Java', 'Python', 'JavaScript',
            'C#', 'Ruby', 'PHP',
            'React', 'Angular', 'Node.js', 'AWS', 'Azure'
        ]
    }
},
        {
            name: "Healthcare IT Support",
            link: "/portfolio/healthcare-support",
            image: "/Portfolio/p-2.png",
            tags: [
                { tagLink: '/portfolio/staff-augmentation', tagName: 'Staff Augmentation' },
                { tagLink: '/portfolio/completed', tagName: 'Completed' }
            ]
        },
        {
            name: "Finance Software Development Team",
            link: "/portfolio/finance-development",
            image: "/Portfolio/p-3.png",
            tags: [
                { tagLink: '/portfolio/staff-augmentation', tagName: 'Staff Augmentation' },
                { tagLink: '/portfolio/completed', tagName: 'Completed' }
            ]
        }
    ]
    
    const pricingData = [
        {
            value: "basic",
            label: "Basic Staff Augmentation Package",
            content: [
                { label: "Duration", detail: "1-3 months" },
                { label: "Team Size", detail: "1-2 specialists" },
                { label: "Skill Level", detail: "Mid-Level" },
                { label: "Remote Support", detail: "Included" },
            ],
            buttonText: "Send Request"
        },
        {
            value: "standard",
            label: "Standard Staff Augmentation Package",
            content: [
                { label: "Duration", detail: "3-6 months" },
                { label: "Team Size", detail: "3-5 specialists" },
                { label: "Skill Level", detail: "Senior Level" },
                { label: "Remote Support", detail: "Included" },
            ],
            buttonText: "Send Request"
        },
        {
            value: "premium",
            label: "Premium Staff Augmentation Package",
            content: [
                { label: "Duration", detail: "6+ months" },
                { label: "Team Size", detail: "5+ specialists" },
                { label: "Skill Level", detail: "Experts" },
                { label: "Remote Support", detail: "Included" },
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
