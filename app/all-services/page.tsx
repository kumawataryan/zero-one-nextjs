import type { Metadata } from "next";
import ServiceCard from '@/components/Service/ServiceCard'
import { SERVICES } from '@/Constants'
import React from 'react'
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
    title: "All Digital Services",
    description:
        "Explore 01 Agency services across design, development, AI, marketing, and growth.",
    path: "/all-services",
});

const AllServicesPage = () => {
    return (
        <div className='p-6 mb-24'>

            <h1 className='sm:text-[32px] xl:text-[64px] font-semibold xl:leading-[64px] sm:leading-[32px] mt-40 mb-12'>All Services</h1>


            {SERVICES.map((service, index) => (
                <ServiceCard key={index} {...service} />
            ))}
        </div>
    )
}

export default AllServicesPage
