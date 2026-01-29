import ContactForm from '@/components/ContactForm'
import HeroService from '@/components/Hero/HeroService'
import PricingSection from '@/components/PricingSection'
import SubServiceCard from '@/components/Service/SubServiceCard'
import { Check } from 'lucide-react'
import React from 'react'

const ServicePage = () => {

    const heroServiceData = {
        title: 'Game Development',
        description: 'We offers comprehensive game development services, creating immersive and interactive experiences across platforms. From concept design to final deployment, we bring your gaming vision to life with our technical and creative expertise.',
        services: [
            'Game Concept Design',
            '3D & 2D Game Art',
            'Level Design',
            'Game Development',
            'Cross-Platform Integration',
            'AR/VR Game Development',
            'AI & Machine Learning Integration',
            'Sound Design & Music',
            'Quality Assurance Testing',
            'User Interface Design',
            'Multiplayer Development',
            'In-Game Economy Design',
            'Performance Optimization',
            'Live Game Support',
            'Backend & Cloud Services',
            'Post-Launch Updates',
            'Market Research',
            'Monetization Strategies'
        ],
        videoSrc: '/hero-video.mp4',
        stats: [
            { label: 'Games Developed', value: 45 },
            { label: 'Active Players', value: 200000 },
            { label: 'Platforms Supported', value: 10 },
            { label: 'Years of Experience', value: 8 },
        ],
    }
    
    const subServiceData = [
        {
            name: "Game Concept Design",
            short_information: "Craft unique game concepts, storylines, and characters to build an engaging and immersive player experience.",
            key_points: `Storyboarding
                         Character Development
                         Gameplay Mechanics
                         Level & Environment Design
                         Monetization Models
                         Player Experience Design`
        },
        {
            name: "3D & 2D Game Art",
            short_information: "Create high-quality 2D and 3D art assets that bring your game world, characters, and environment to life.",
            key_points: `Character Modeling
                         Environment Design
                         Animation & Rigging
                         Texturing & Shading
                         Lighting Design
                         VFX Design`
        },
        {
            name: "Game Development",
            short_information: "Develop engaging games with seamless performance, interactive features, and cross-platform compatibility.",
            key_points: `Unity & Unreal Development
                         Cross-Platform Integration
                         Multiplayer Implementation
                         AI & ML Integration
                         Real-Time Rendering
                         Backend & Cloud Services`
        },
        {
            name: "Quality Assurance Testing",
            short_information: "Ensure game stability and a bug-free player experience through rigorous testing across devices and platforms.",
            key_points: `Functional Testing
                         Compatibility Testing
                         Performance Optimization
                         Usability Testing
                         Multiplayer Stress Testing
                         Post-Launch Support`
        }
    ]
    
    const whyInvestData = [
        { text: 'Immersive Player Experiences' },
        { text: 'Broad Platform Compatibility' },
        { text: 'Reduced Time to Market' },
        { text: 'Optimized In-Game Monetization' },
        { text: 'Increased Player Retention' },
    ]
    
    const industriesAndTechnologiesData = {
        industries: [
            'Entertainment', 'Education', 'Healthcare', 'Simulation & Training', 'Sports', 'Adventure & RPG', 'Strategy Games', 'AR/VR'
        ],
        technologies: [
            'Unity', 'Unreal Engine', 'CryEngine', 'Cocos2d', 'Godot', 'Blender', '3ds Max', 'Substance Painter', 'Photoshop'
        ]
    }
},
        {
            name: "VR Racing Simulation",
            link: "/portfolio/vr-racing-simulation",
            image: "/Portfolio/p-2.png",
            tags: [
                { tagLink: '/portfolio/vr', tagName: 'VR' },
                { tagLink: '/portfolio/ongoing', tagName: 'Ongoing' }
            ]
        },
        {
            name: "Educational Puzzle Game",
            link: "/portfolio/educational-puzzle-game",
            image: "/Portfolio/p-3.png",
            tags: [
                { tagLink: '/portfolio/education', tagName: 'Education' },
                { tagLink: '/portfolio/completed', tagName: 'Completed' }
            ]
        }
    ]
    
    const pricingData = [
        {
            value: "basic",
            label: "Basic (5,000-15,000$)",
            content: [
                { label: "Game Scope", detail: "Single level, limited assets" },
                { label: "Platforms", detail: "Mobile only" },
                { label: "Graphics", detail: "2D" },
                { label: "QA Testing", icon: <Check className="w-4 h-4" /> },
                { label: "Sound Design", icon: <Check className="w-4 h-4" /> },
                { label: "Project Documentation", icon: <Check className="w-4 h-4" /> }
            ],
            buttonText: "Send Request"
        },
        {
            value: "standard",
            label: "Standard (15,000-50,000$)",
            content: [
                { label: "Game Scope", detail: "Multiple levels" },
                { label: "Platforms", detail: "Mobile & PC" },
                { label: "Graphics", detail: "2D or basic 3D" },
                { label: "QA Testing", icon: <Check className="w-4 h-4" /> },
                { label: "Sound & Music Design", icon: <Check className="w-4 h-4" /> },
                { label: "In-Game Monetization", icon: <Check className="w-4 h-4" /> }
            ],
            buttonText: "Send Request"
        },
        {
            value: "premium",
            label: "Premium (50,000-200,000$)",
            content: [
                { label: "Game Scope", detail: "Full-scale game" },
                { label: "Platforms", detail: "Mobile, PC & Console" },
                { label: "Graphics", detail: "High-quality 3D" },
                { label: "QA Testing", icon: <Check className="w-4 h-4" /> },
                { label: "Advanced Sound & Music", icon: <Check className="w-4 h-4" /> },
                { label: "Live Support", icon: <Check className="w-4 h-4" /> }
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
