import ContactForm from '@/components/ContactForm'
import HeroService from '@/components/Hero/HeroService'
import PortfolioCard from '@/components/Portfolio/PortfolioCard'
import PricingSection from '@/components/PricingSection'
import SubServiceCard from '@/components/Service/SubServiceCard'
import { Check } from 'lucide-react'
import React from 'react'

const ServicePage = () => {
    const heroServiceData = {
        title: 'AI for Business',
        description: 'Our AI for Business services are designed to leverage artificial intelligence to drive innovation, efficiency, and growth in your organization.',
        services: [
            'AI Strategy Consulting',
            'Machine Learning Development',
            'Data Analysis & Visualization',
            'Natural Language Processing',
            'Computer Vision',
            'Predictive Analytics',
            'AI Model Deployment',
            'AI Integration',
            'AI Maintenance & Support',
            'Custom AI Solutions',
            'AI Training & Workshops',
            'AI Ethics & Governance',
            'AI-driven Automation',
            'AI for Customer Service',
            'AI for Marketing',
            'AI for Finance',
            'AI for Healthcare',
            'AI for Manufacturing'
        ],
        videoSrc: '/ai-business-video.mp4',
        stats: [
            { label: 'Projects Completed', value: 150 },
            { label: 'Happy Clients', value: 100 },
            { label: 'Awards Won', value: 20 },
            { label: 'Years of Experience', value: 10 },
        ],
    }
    
    const subServiceData = [
        {
            name: "AI Strategy Consulting",
            short_information: "Develop a comprehensive AI strategy tailored to your business needs and goals.",
            key_points: `Business Analysis
                       AI Roadmap
                       Technology Assessment
                       Implementation Plan
                       Risk Management
                       ROI Analysis`
        },
        {
            name: "Machine Learning Development",
            short_information: "Build and deploy machine learning models to solve complex business problems.",
            key_points: `Data Collection
                       Model Training
                       Model Evaluation
                       Model Deployment
                       Performance Monitoring
                       Continuous Improvement`
        },
        {
            name: "Data Analysis & Visualization",
            short_information: "Analyze and visualize data to uncover insights and drive data-driven decision making.",
            key_points: `Data Cleaning
                       Data Transformation
                       Exploratory Data Analysis
                       Data Visualization
                       Dashboard Development
                       Reporting`
        },
        {
            name: "Natural Language Processing",
            short_information: "Implement NLP solutions to process and understand human language.",
            key_points: `Text Processing
                       Sentiment Analysis
                       Named Entity Recognition
                       Language Translation
                       Chatbots
                       Voice Assistants`
        }
    ]
    
    const whyInvestData = [
        { text: 'Enhanced Decision Making' },
        { text: 'Increased Efficiency' },
        { text: 'Cost Savings' },
        { text: 'Competitive Advantage' },
        { text: 'Improved Customer Experience' },
    ]
    
    const industriesAndTechnologiesData = {
        industries: [
            'Healthcare', 'Finance', 'Retail', 'Manufacturing', 'Telecommunications',
            'Energy', 'Transportation', 'Education', 'Government', 'Entertainment'
        ],
        technologies: [
            'TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'Pandas', 'NumPy'
        ]
    }
    
    const portfolioData = [
        {
            name: "AI Project 1",
            link: "/portfolio/ai-project-1",
            image: "/Portfolio/p-1.png",
            tags: [
                { tagLink: '/portfolio/ai', tagName: 'AI' },
                { tagLink: '/portfolio/completed', tagName: 'Completed' },
            ]
        },
        {
            name: "AI Project 2",
            link: "/portfolio/ai-project-2",
            image: "/Portfolio/p-2.png",
            tags: [
                { tagLink: '/portfolio/ai', tagName: 'AI' },
                { tagLink: '/portfolio/ongoing', tagName: 'Ongoing' }
            ]
        },
        {
            name: "AI Project 3",
            link: "/portfolio/ai-project-3",
            image: "/Portfolio/p-3.png",
            tags: [
                { tagLink: '/portfolio/ai', tagName: 'AI' },
                { tagLink: '/portfolio/completed', tagName: 'Completed' }
            ]
        },
        {
            name: "AI Project 4",
            link: "/portfolio/ai-project-4",
            image: "/Portfolio/p-1.png",
            tags: [
                { tagLink: '/portfolio/ai', tagName: 'AI' },
                { tagLink: '/portfolio/ongoing', tagName: 'Ongoing' }
            ]
        }
    ]
    
    const pricingData = [
        {
            value: "starter",
            label: "Starter (1000-5000$)",
            content: [
                { label: "Consulting Hours", detail: "up to 20 hours" },
                { label: "Data Scientists", detail: "1-2" },
                { label: "Model Development", detail: "Basic" },
                { label: "Support", detail: "Email Support" },
                { label: "Documentation", icon: <Check className="w-4 h-4" /> },
                { label: "Basic Training", icon: <Check className="w-4 h-4" /> },
            ],
            buttonText: "Send Request"
        },
        {
            value: "standard",
            label: "Standard (5000-20000$)",
            content: [
                { label: "Consulting Hours", detail: "up to 50 hours" },
                { label: "Data Scientists", detail: "3-5" },
                { label: "Model Development", detail: "Advanced" },
                { label: "Support", detail: "Phone & Email Support" },
                { label: "Documentation", icon: <Check className="w-4 h-4" /> },
                { label: "Advanced Training", icon: <Check className="w-4 h-4" /> },
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