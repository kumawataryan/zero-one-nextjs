import ContactForm from '@/components/ContactForm'
import HeroService from '@/components/Hero/HeroService'
import PricingSection from '@/components/PricingSection'
import SubServiceCard from '@/components/Service/SubServiceCard'
import { Check } from 'lucide-react'
import React from 'react'

const ServicePage = () => {

    const heroServiceData = {
        title: 'Data Scraping',
        description: 'Our data scraping services provide high-quality data extraction solutions tailored to collect, organize, and analyze large volumes of data efficiently and ethically.',
        services: [
            'Custom Web Scraping',
            'Data Extraction',
            'Data Cleaning',
            'API Integration',
            'Market Data Collection',
            'Price Monitoring',
            'Sentiment Analysis',
            'Competitor Analysis',
            'Lead Generation',
            'Content Aggregation',
            'Social Media Monitoring',
            'Product Data Collection',
            'News and Article Aggregation',
            'Real-Time Data Feeds',
            'Data Structuring',
            'Data Quality Assurance',
            'Report Generation'
        ],
        videoSrc: '/hero-video.mp4',
        stats: [
            { label: 'Projects Completed', value: 150 },
            { label: 'Happy Clients', value: 95 },
            { label: 'Industries Served', value: 20 },
            { label: 'Years of Experience', value: 10 },
        ],
    }
    
    const subServiceData = [
        {
            name: "Custom Web Scraping",
            short_information: "Develop custom scraping solutions to extract relevant data accurately and efficiently, tailored to meet your unique business needs.",
            key_points: `Custom Scripting
                         Targeted Data Extraction
                         Automated Scraping
                         Data Structuring
                         File Export Options
                         Ongoing Maintenance`
        },
        {
            name: "Data Cleaning",
            short_information: "Ensure data accuracy and quality with thorough data cleaning services to enhance usability and reliability.",
            key_points: `Error Detection
                         Data Standardization
                         Duplicate Removal
                         Data Transformation
                         Missing Value Handling
                         Quality Control`
        },
        {
            name: "Competitor Analysis",
            short_information: "Gather insights on competitors to inform strategy with real-time data and in-depth analysis.",
            key_points: `Market Data Collection
                         Price Monitoring
                         Trend Analysis
                         Product Comparison
                         Historical Data Tracking
                         Reporting & Insights`
        },
        {
            name: "Real-Time Data Feeds",
            short_information: "Implement continuous data scraping with real-time feeds to keep your data up-to-date and actionable.",
            key_points: `Real-Time Monitoring
                         Data Aggregation
                         API Integration
                         Scheduled Scraping
                         Quality Checks
                         Custom Reporting`
        }
    ]
    
    const whyInvestData = [
        { text: 'Data-Driven Decision Making' },
        { text: 'Enhanced Competitive Edge' },
        { text: 'Improved Data Quality' },
        { text: 'Optimized Market Research' },
        { text: 'Cost-Effective Insights' },
    ]
    
    const industriesAndTechnologiesData = {
        industries: [
            'E-commerce', 'Finance', 'Healthcare', 'Real Estate', 'Travel', 
            'Media', 'Retail', 'Technology', 'Education', 'Logistics'
        ],
        technologies: [
            'Python', 'Selenium', 'Scrapy', 'BeautifulSoup', 'Pandas', 'SQL'
        ]
    }
    
    const pricingData = [
        {
            value: "basic",
            label: "Basic (100-500$)",
            content: [
                { label: "Pages", detail: "up to 5 pages" },
                { label: "Data Points", detail: "limited to 10,000" },
                { label: "Frequency", detail: "One-time scrape" },
                { label: "Data Cleaning", icon: <Check className="w-4 h-4" /> },
                { label: "Report Export", icon: <Check className="w-4 h-4" /> },
                { label: "Customizable Format", icon: <Check className="w-4 h-4" /> },
            ],
            buttonText: "Request Service"
        },
        {
            value: "standard",
            label: "Standard (500-2000$)",
            content: [
                { label: "Pages", detail: "up to 20 pages" },
                { label: "Data Points", detail: "up to 100,000" },
                { label: "Frequency", detail: "Monthly scrapes" },
                { label: "Data Cleaning", icon: <Check className="w-4 h-4" /> },
                { label: "Automated Delivery", icon: <Check className="w-4 h-4" /> },
                { label: "Real-Time Monitoring", icon: <Check className="w-4 h-4" /> },
            ],
            buttonText: "Request Service"
        },
        {
            value: "premium",
            label: "Premium (2000-5000$)",
            content: [
                { label: "Pages", detail: "unlimited pages" },
                { label: "Data Points", detail: "up to 500,000" },
                { label: "Frequency", detail: "Weekly scrapes" },
                { label: "Custom Data Extraction", icon: <Check className="w-4 h-4" /> },
                { label: "API Integration", icon: <Check className="w-4 h-4" /> },
                { label: "Real-Time Alerts", icon: <Check className="w-4 h-4" /> },
            ],
            buttonText: "Request Service"
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
