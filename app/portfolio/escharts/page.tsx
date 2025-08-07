import ContactForm from '@/components/ContactForm';
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const PortfolioDetailPage = () => {

    const projectData = {
        serviceHero: {
            servicesOffered: [
                { name: "Web App Development", link: "/" },
                { name: "Data Engineering & Analytics", link: "/" },
                { name: "Backend Architecture", link: "/" },
            ],
            date: "Completed",
            clientName: "Esports Charts",
            shortInfo:
                "Designed and developed Esports Charts—a powerful data-driven analytics platform for the esports industry. The platform delivers real-time and historical insights, viewership metrics, and enterprise-grade tools such as forecasting, sponsorship valuation, and API integration, serving as a core analytics hub for global esports tournaments.",
        },
        task: {
            title: "Task",
            description:
                "Built Esports Charts from the ground up, focusing on a scalable architecture, real-time data processing, intuitive UI, and analytics features tailored for tournament organizers, teams, and sponsors.",
        },
        serviceDetails: [
            {
                title: "Web App Development",
                description:
                    "Developed an intuitive frontend with React to visualize complex data, enabling users to explore tournaments, track real-time metrics, and compare performance across games and timeframes.",
            },
            {
                title: "Data Engineering & Analytics",
                description:
                    "Implemented robust data pipelines for ingesting, processing, and analyzing esports viewership and performance data. Enabled historical tracking, audience behavior insights, and custom analytics reports.",
            },
            {
                title: "Backend Architecture",
                description:
                    "Built a scalable backend using Node.js and Python, supported by PostgreSQL, Redis, and Docker on AWS. Ensured high availability and performance across millions of data points.",
            },
            {
                title: "Enterprise Features & API Access",
                description:
                    "Integrated business-critical capabilities such as forecasting tools, sponsorship valuation modules, and secure API endpoints for enterprise clients and partners.",
            },
        ],
        galleryImages: [
            "/Portfolio/portfolio-esports-charts.jpg",
        ],
        cta: {
            tagline: "Power Esports with Real-Time Analytics",
            projectPrompt: "Looking to build a scalable analytics platform?",
            link: "/contact",
            description:
                "Get in touch to develop intelligent, data-driven platforms tailored to your domain—featuring real-time analytics, clean UX, and enterprise-ready architecture.",
        },
    };


    return (
        <div className="flex flex-col items-center justify-center w-full sm:px-4 xl:px-0">
            <div className="max-w-[1200px] w-full">

                {/* Service Hero */}
                <div className="flex flex-col xl:flex-row xl:gap-24 sm:gap-16 xl:pt-64 sm:pt-40 justify-between w-full">

                    {/* Service Hero Left */}
                    <div>
                        <h1 className="xl:text-[60px] md:text-[40px] sm:text-[30px] font-bold leading-none mt-2 text-[15px] text-nowrap">
                            {projectData.serviceHero.clientName}
                        </h1>

                        <p className="sm:w-full xl:max-w-[750px] mt-5 font-light leading-relaxed opacity-75">
                            {projectData.serviceHero.shortInfo}
                        </p>

                        <div className="flex mt-6 flex-col gap-2">
                            {projectData.serviceHero.servicesOffered.map((service, index) => (
                                <span key={index}>
                                    <Link href={service.link} className='bg-black text-white p-2 rounded-full gap-1 gap-y-2 text-[14px] px-4'>
                                        {service.name}
                                    </Link>
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Service Hero Right */}
                    <div>
                        <p className="font-semibold">{projectData.task.title}</p>
                        <p className="sm:w-full xl:max-w-[750px] mt-2 font-semibold">
                            {projectData.task.description}
                        </p>

                        <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 mt-16">
                            {projectData.serviceDetails.map((detail, index) => (
                                <div key={index} className="py-4 border-t border-[#737373]">
                                    <p className="font-medium">{detail.title}</p>
                                    <p className="font-normal text-black/85 leading-6 mt-1.5 text-[15px]">
                                        {detail.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <Link href="https://escharts.com/" className="font-bold text-[15px] flex gap-2 items-center mt-4 hover:bg-[#F2F2F2] p-2 w-fit rounded-md leading-[16px] hover:text-[#141DEA] group transition-all duration-500 ease-in-out">
                            Open Project <ArrowRight className="w-5 h-5 transition-transform duration-200 ease-in-out group-hover:translate-x-1 -translate-x-1" />
                        </Link>
                    </div>
                </div>

                {/* Gallery */}
                <div className="xl:mt-16 sm:mt-8 w-full flex flex-col gap-1">
                    {projectData.galleryImages.map((src, index) => (
                        <Image
                            key={index}
                            src="/es-charts.png"
                            width={800}
                            height={800}
                            className="object-cover w-full"
                            alt="Portfolio Image"
                            unoptimized
                        />
                    ))}
                </div>
            </div>

            {/* Static CTA */}
            <div className="w-full xl:pt-32 sm:pt-20 sm:px-4 xl:px-0 items-center justify-center mt-20 bg-[#DBE2EA] flex flex-col gap-0">
                <div className="max-w-[1200px] w-full text-[#062330]">
                    <p className="uppercase">{projectData.cta.tagline}</p>
                    <div className="flex sm:flex-col xl:flex-row sm:gap-4 xl:gap-0 justify-between border-b pb-4 border-[#062330] mt-4">
                        <h2 className="sm:text-[32px] xl:text-[42px] font-semibold leading-tight">
                            {projectData.cta.projectPrompt}
                        </h2>
                        <Link href={projectData.cta.link} className='relative rounded-lg bg-gradient-to-r bg-[#062330] text-white flex gap-2 items-center justify-center text-[14px] p-5 uppercase group w-fit'>
                            <span className='z-10'>{projectData.cta.projectPrompt}</span>
                            <div className="absolute inset-0 bg-[#141DEA] rounded-lg origin-left scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100 z-0"></div>
                        </Link>
                    </div>
                    <p className="sm:w-full xl:max-w-[600px] mt-5 font-light leading-relaxed opacity-75">
                        {projectData.cta.description}
                    </p>
                </div>
                <ContactForm className="max-w-[1600px] w-full px-0 py-0" heading={false} />
            </div>
        </div>
    )
}

export default PortfolioDetailPage