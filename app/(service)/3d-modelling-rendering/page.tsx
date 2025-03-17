import ContactForm from '@/components/ContactForm'
import HeroService from '@/components/Hero/HeroService'
import PortfolioCard from '@/components/Portfolio/PortfolioCard'
import PricingSection from '@/components/PricingSection'
import SubServiceCard from '@/components/Service/SubServiceCard'
import { Check } from 'lucide-react'
import React from 'react'

const ServicePage = () => {

    const heroServiceData = {
        title: '3D Modelling & Rendering',
        description: 'Our 3D modelling and rendering services bring your ideas to life with stunning visuals and realistic representations.',
        services: [
            'Architectural Visualization',
            'Product Rendering',
            '3D Animation',
            'Interior Design',
            'Exterior Design',
            'Virtual Staging',
            '3D Floor Plans',
            'Augmented Reality',
            'Virtual Reality',
            '3D Printing',
            'Character Modelling',
            'Environment Modelling',
            'Texturing',
            'Lighting',
            'Rigging',
            'Compositing',
            'Post-Production',
            'Consultation'
        ],
        videoSrc: '/3d-hero-video.mp4',
        stats: [
            { label: 'Projects Completed', value: 150 },
            { label: 'Happy Clients', value: 100 },
            { label: 'Awards Won', value: 20 },
            { label: 'Years of Experience', value: 10 },
        ],
    }
    
    const subServiceData = [
        {
            name: "Architectural Visualization",
            short_information: "Create realistic 3D visualizations of architectural designs to help clients and stakeholders visualize the final product.",
            key_points: `Exterior Rendering
                       Interior Rendering
                       3D Floor Plans
                       Virtual Staging
                       Walkthrough Animations
                       Aerial Views`
        },
        {
            name: "Product Rendering",
            short_information: "Generate high-quality 3D renderings of products for marketing, prototyping, and presentation purposes.",
            key_points: `Photorealistic Rendering
                       360-Degree Views
                       Exploded Views
                       Material and Texture Customization
                       Animation`
        },
        {
            name: "3D Animation",
            short_information: "Create engaging 3D animations for various applications, including marketing, education, and entertainment.",
            key_points: `Character Animation
                       Product Animation
                       Architectural Walkthroughs
                       Motion Graphics
                       Visual Effects`
        },
        {
            name: "Virtual Reality",
            short_information: "Develop immersive VR experiences for architectural visualization, product demonstrations, and interactive training.",
            key_points: `VR Walkthroughs
                       Interactive VR Experiences
                       VR Training Simulations
                       VR Product Demos
                       VR Game Development`
        }
    ]
    
    const whyInvestData = [
        { text: 'Enhanced Visualization' },
        { text: 'Improved Client Communication' },
        { text: 'Faster Decision Making' },
        { text: 'Cost-Effective Prototyping' },
        { text: 'Increased Engagement' },
    ]
    
    const industriesAndTechnologiesData = {
        industries: [
            'Architecture', 'Real Estate', 'Manufacturing', 'Automotive', 'Entertainment',
            'Healthcare', 'Education', 'Retail', 'Advertising', 'Gaming'
        ],
        technologies: [
            'Blender', '3ds Max', 'Maya', 'Cinema 4D', 'SketchUp', 'ZBrush'
        ]
    }
    
    const portfolioData = [
        {
            name: "Modern Villa",
            link: "/portfolio/modern-villa",
            image: "/Portfolio/p-1.png",
            tags: [
                { tagLink: '/portfolio/architecture', tagName: 'Architecture' },
                { tagLink: '/portfolio/exterior', tagName: 'Exterior' },
            ]
        },
        {
            name: "Product Showcase",
            link: "/portfolio/product-showcase",
            image: "/Portfolio/p-2.png",
            tags: [
                { tagLink: '/portfolio/product', tagName: 'Product' },
                { tagLink: '/portfolio/rendering', tagName: 'Rendering' }
            ]
        },
        {
            name: "Character Animation",
            link: "/portfolio/character-animation",
            image: "/Portfolio/p-3.png",
            tags: [
                { tagLink: '/portfolio/animation', tagName: 'Animation' },
                { tagLink: '/portfolio/character', tagName: 'Character' }
            ]
        },
        {
            name: "Virtual Reality Tour",
            link: "/portfolio/vr-tour",
            image: "/Portfolio/p-1.png",
            tags: [
                { tagLink: '/portfolio/vr', tagName: 'VR' },
                { tagLink: '/portfolio/interactive', tagName: 'Interactive' }
            ]
        }
    ]
    
    const pricingData = [
        {
            value: "basic",
            label: "Basic (500-1000$)",
            content: [
                { label: "Renderings", detail: "up to 5 renderings" },
                { label: "Revisions", detail: "1-2 revisions" },
                { label: "Delivery Time", detail: "1-2 weeks" },
                { label: "Consultation", icon: <Check className="w-4 h-4" /> },
                { label: "High-Resolution Images", icon: <Check className="w-4 h-4" /> },
                { label: "Basic Texturing", icon: <Check className="w-4 h-4" /> },
            ],
            buttonText: "Send Request"
        },
        {
            value: "standard",
            label: "Standard (1000-3000$)",
            content: [
                { label: "Renderings", detail: "up to 10 renderings" },
                { label: "Revisions", detail: "3-5 revisions" },
                { label: "Delivery Time", detail: "2-4 weeks" },
                { label: "Consultation", icon: <Check className="w-4 h-4" /> },
                { label: "High-Resolution Images", icon: <Check className="w-4 h-4" /> },
                { label: "Advanced Texturing", icon: <Check className="w-4 h-4" /> },
                { label: "Lighting Setup", icon: <Check className="w-4 h-4" /> },
            ],
            buttonText: "Send Request"
        },
        {
            value: "premium",
            label: "Premium (3000-5000$)",
            content: [
                { label: "Renderings", detail: "up to 20 renderings" },
                { label: "Revisions", detail: "unlimited revisions" },
                { label: "Delivery Time", detail: "4-6 weeks" },
                { label: "Consultation", icon: <Check className="w-4 h-4" /> },
                { label: "High-Resolution Images", icon: <Check className="w-4 h-4" /> },
                { label: "Photorealistic Texturing", icon: <Check className="w-4 h-4" /> },
                { label: "Lighting Setup", icon: <Check className="w-4 h-4" /> },
                { label: "Animation", icon: <Check className="w-4 h-4" /> },
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