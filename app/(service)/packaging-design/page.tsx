import ContactForm from '@/components/ContactForm'
import HeroService from '@/components/Hero/HeroService'
import PortfolioCard from '@/components/Portfolio/PortfolioCard'
import PricingSection from '@/components/PricingSection'
import SubServiceCard from '@/components/Service/SubServiceCard'
import { Check } from 'lucide-react'
import React from 'react'

const ServicePage = () => {

    const heroServiceData = {
        title: 'Packaging Design',
        description: 'At Zero-One Agency, we specialize in creating innovative and eye-catching packaging designs that not only protect your products but also enhance brand visibility and consumer appeal.',
        services: [
            'Product Packaging Design',
            'Label Design',
            'Sustainable Packaging Solutions',
            '3D Packaging Mockups',
            'Packaging Prototyping',
            'Market Research for Packaging',
            'Branding and Visual Identity',
            'Regulatory Compliance Assistance',
            'Unboxing Experience Design',
            'Material Selection',
            'Retail Packaging Strategy',
            'Point of Purchase Displays',
            'Consumer Testing and Feedback',
            'Graphic Design for Packaging',
            'Brand Storytelling through Packaging'
        ],
        videoSrc: '/hero-video.mp4',
        stats: [
            { label: 'Packaging Projects Completed', value: 300 },
            { label: 'Happy Clients', value: 200 },
            { label: 'Awards Won', value: 10 },
            { label: 'Years of Experience', value: 7 },
        ],
    }
    
    const subServiceData = [
        {
            name: "Product Packaging Design",
            short_information: "Design packaging solutions tailored to your product, ensuring functionality and aesthetic appeal.",
            key_points: `Custom Shape Design
                         Structural Design
                         Material Selection
                         Graphics and Branding
                         Consumer-Focused Design`
        },
        {
            name: "Sustainable Packaging Solutions",
            short_information: "Develop eco-friendly packaging options that reduce environmental impact while maintaining product integrity.",
            key_points: `Biodegradable Materials
                         Minimalist Design
                         Reusable Packaging
                         Sustainable Sourcing
                         Life Cycle Analysis`
        },
        {
            name: "3D Packaging Mockups",
            short_information: "Create realistic 3D renderings of your packaging designs for better visualization and presentation.",
            key_points: `Realistic Renderings
                         Virtual Reality Experience
                         Design Iterations
                         Client Presentations
                         Feedback Integration`
        },
        {
            name: "Brand Storytelling through Packaging",
            short_information: "Use packaging as a storytelling medium that communicates your brand's values and connects with consumers.",
            key_points: `Visual Branding Elements
                         Narrative Design
                         Emotional Appeal
                         Consistency Across Products
                         Customer Engagement`
        }
    ]
    
    const whyInvestData = [
        { text: 'Enhanced Brand Recognition' },
        { text: 'Increased Product Sales' },
        { text: 'Improved Shelf Appeal' },
        { text: 'Consumer Engagement' },
        { text: 'Sustainability Appeal' },
    ]
    
    const industriesAndTechnologiesData = {
        industries: [
            'Food and Beverage', 'Cosmetics', 'Consumer Electronics', 
            'Fashion', 'Pharmaceuticals', 'Home Goods', 
            'Toys', 'E-commerce', 'Beverage', 'Non-Profit'
        ],
        technologies: [
            'Adobe Illustrator', 'Adobe Photoshop', '3D Rendering Software', 
            'Structural Design Software', 'CAD Tools'
        ]
    }
    
    const portfolioData = [
        {
            name: "Eco-Friendly Beverage Packaging",
            link: "/portfolio/eco-beverage-packaging",
            image: "/portfolio/p-1.png",
            tags: [
                { tagLink: '/portfolio/packaging', tagName: 'Packaging' },
                { tagLink: '/portfolio/completed', tagName: 'Completed' }
            ]
        },
        {
            name: "Luxury Skincare Line Packaging",
            link: "/portfolio/luxury-skincare-packaging",
            image: "/portfolio/p-2.png",
            tags: [
                { tagLink: '/portfolio/packaging', tagName: 'Packaging' },
                { tagLink: '/portfolio/completed', tagName: 'Completed' }
            ]
        },
        {
            name: "Innovative Snack Packaging Design",
            link: "/portfolio/snack-packaging",
            image: "/portfolio/p-3.png",
            tags: [
                { tagLink: '/portfolio/packaging', tagName: 'Packaging' },
                { tagLink: '/portfolio/completed', tagName: 'Completed' }
            ]
        }
    ]
    
    const pricingData = [
        {
            value: "basic",
            label: "Basic Packaging Design Package (500-1500$)",
            content: [
                { label: "1 Product Packaging Design", detail: "Single product focus" },
                { label: "2 Conceptual Designs", detail: "Initial ideas provided" },
                { label: "1 Round of Revisions", detail: "Basic tweaks included" },
                { label: "Digital Mockups", icon: <Check className="w-4 h-4" /> },
            ],
            buttonText: "Send Request"
        },
        {
            value: "standard",
            label: "Standard Packaging Design Package (1500-3000$)",
            content: [
                { label: "Up to 3 Product Designs", detail: "Multiple product focus" },
                { label: "3 Conceptual Designs", detail: "Diverse design options" },
                { label: "2 Rounds of Revisions", icon: <Check className="w-4 h-4" /> },
                { label: "3D Mockups", icon: <Check className="w-4 h-4" /> },
                { label: "Material Consultation", icon: <Check className="w-4 h-4" /> },
            ],
            buttonText: "Send Request"
        },
        {
            value: "premium",
            label: "Premium Packaging Design Package (3000-5000$)",
            content: [
                { label: "Comprehensive Packaging Strategy", detail: "Holistic approach" },
                { label: "Up to 5 Product Designs", detail: "Broader range" },
                { label: "Unlimited Revisions", detail: "Flexibility for changes" },
                { label: "Sustainable Material Options", icon: <Check className="w-4 h-4" /> },
                { label: "Unboxing Experience Design", icon: <Check className="w-4 h-4" /> },
            ],
            buttonText: "Send Request"
        },
        {
            value: "custom",
            label: "Custom Packaging Solutions",
            content: [
                { label: "Tailored Design Solutions", detail: "Fully customized approach" },
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