import ContactForm from '@/components/ContactForm'
import HeroService from '@/components/Hero/HeroService'
import PricingSection from '@/components/PricingSection'
import SubServiceCard from '@/components/Service/SubServiceCard'
import { Check } from 'lucide-react'
import React from 'react'

const ServicePage = () => {
    
    const heroServiceData = {
        title: 'AI Services',
        description: 'Our AI services are designed to help businesses leverage the power of artificial intelligence to drive innovation, efficiency, and growth.',
        services: [
            'AI Strategy Consulting',
            'Machine Learning Development',
            'Natural Language Processing',
            'Computer Vision Solutions',
            'Predictive Analytics',
            'AI Model Training',
            'AI Model Deployment',
            'AI Model Maintenance',
            'Data Engineering',
            'AI Integration',
            'AI Ethics and Governance',
            'AI Performance Optimization',
            'AI-driven Automation',
            'AI Research and Development',
            'Custom AI Solutions',
            'AI Workshops and Training'
        ],
        videoSrc: '/ai-services-video.mp4',
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
            short_information: "Develop a comprehensive AI strategy to align with your business goals and drive innovation.",
            key_points: `AI Roadmap
                       Business Alignment
                       Technology Assessment
                       Risk Management
                       ROI Analysis
                       Implementation Plan`
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
            name: "Natural Language Processing",
            short_information: "Implement NLP solutions to enhance communication and automate text-based tasks.",
            key_points: `Text Analysis
                       Sentiment Analysis
                       Chatbots
                       Language Translation
                       Text Summarization
                       Speech Recognition`
        },
        {
            name: "Computer Vision Solutions",
            short_information: "Leverage computer vision to analyze and interpret visual data for various applications.",
            key_points: `Image Recognition
                       Object Detection
                       Facial Recognition
                       Video Analysis
                       Augmented Reality
                       Quality Inspection`
        }
    ]
    
    const whyInvestData = [
        { text: 'Drive Innovation' },
        { text: 'Enhance Efficiency' },
        { text: 'Gain Competitive Advantage' },
        { text: 'Improve Decision Making' },
        { text: 'Automate Processes' },
    ]
    
    const industriesAndTechnologiesData = {
        industries: [
            'Healthcare', 'Finance', 'Retail', 'Manufacturing', 'Logistics',
            'Telecommunications', 'Energy', 'Automotive', 'Agriculture', 'Public Sector'
        ],
        technologies: [
            'TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn', 'OpenCV', 'NLTK'
        ]
    }
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
                { label: "Model Training", detail: "Basic" },
                { label: "Deployment", detail: "Basic" },
                { label: "Support", icon: <Check className="w-4 h-4" /> },
                { label: "Documentation", icon: <Check className="w-4 h-4" /> },
            ],
            buttonText: "Send Request"
        },
        {
            value: "standard",
            label: "Standard (5000-20000$)",
            content: [
                { label: "Consulting Hours", detail: "up to 50 hours" },
                { label: "Data Scientists", detail: "3-5" },
                { label: "Model Training", detail: "Advanced" },
                { label: "Deployment", detail: "Advanced" },
                { label: "Support", icon: <Check className="w-4 h-4" /> },
                { label: "Documentation", icon: <Check className="w-4 h-4" /> },
            ],
            buttonText: "Send Request"
        },
        {
            value: "enterprise",
            label: "Enterprise (20000-50000$)",
            content: [
                { label: "Consulting Hours", detail: "up to 100 hours" },
                { label: "Data Scientists", detail: "5-10" },
                { label: "Model Training", detail: "Expert" },
                { label: "Deployment", detail: "Expert" },
                { label: "Support", icon: <Check className="w-4 h-4" /> },
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
