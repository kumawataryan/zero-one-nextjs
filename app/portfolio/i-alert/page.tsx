import ContactForm from '@/components/ContactForm';
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const PortfolioDetailPage = () => {

    const projectData = {
        serviceHero: {
          servicesOffered: [
            { name: "Mobile & Web App Development", link: "/" },
            { name: "Fleet Management Solutions", link: "/" },
          ],
          date: "Completed",
          clientName: "i-ALERT App",
          shortInfo:
            "Developed and currently manage two essential internal mobile apps for Ashok Leyland, including i-ALERT—a powerful fleet telematics tool offering real-time diagnostics, usage trends, alerts, and service scheduling. The solution supports 11,000+ employees and plays a key role in the company's digital transformation journey.",
        },
        task: {
          title: "Task",
          description:
            "Built a robust, user-centric telematics platform integrated with Ashok Leyland’s internal systems to provide actionable insights, improve vehicle uptime, and enable smarter fleet operations across the organization.",
        },
        serviceDetails: [
          {
            title: "Mobile & Web App Development",
            description:
              "Designed and launched i-ALERT with a modern, intuitive interface and two-click access to critical vehicle health data, alerts, and service history.",
          },
          {
            title: "Fleet Management Solutions",
            description:
              "Integrated real-time tracking, predictive diagnostics, and centralized maintenance tools to optimize fleet efficiency and reduce operational downtime.",
          },
          {
            title: "Data-Driven Operational Intelligence",
            description:
              "Leveraged smart sensor data to generate insights for proactive decision-making, ensuring better planning and reduced disruptions in fleet usage.",
          },
          {
            title: "Enterprise Enablement",
            description:
              "Deployed across Ashok Leyland’s workforce, the solution supports over 11,000 employees in monitoring and managing vehicle performance and compliance.",
          },
        ],
        galleryImages: [
          "/ashok-leyland.png",
        ],
        cta: {
          tagline: "Revolutionize Your Fleet Management",
          projectPrompt: "Looking for an efficient fleet management system?",
          link: "/contact",
          description:
            "Streamline your fleet operations with mobile and web solutions, telematics tools, and real-time analytics built for scale and performance.",
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

                        <Link href="https://play.google.com/store/apps/details?id=com.al.ialert" className="font-bold text-[15px] flex gap-2 items-center mt-4 hover:bg-[#F2F2F2] p-2 w-fit rounded-md leading-[16px] hover:text-[#141DEA] group transition-all duration-500 ease-in-out">
                            Open Project <ArrowRight className="w-5 h-5 transition-transform duration-200 ease-in-out group-hover:translate-x-1 -translate-x-1" />
                        </Link>
                    </div>
                </div>

                {/* Gallery */}
                <div className="xl:mt-16 sm:mt-8 w-full flex flex-col gap-1">
                    {projectData.galleryImages.map((src, index) => (
                        <Image
                            key={index}
                            src={src}
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