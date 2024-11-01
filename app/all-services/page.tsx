"use client"

import ServiceCard from '@/components/Service/ServiceCard'
import { SERVICES } from '@/Constants'
import React from 'react'

const AllServicesPage = () => {
    return (
        <div className='p-6 mb-24'>

            <h1 className='xl:text-[128px] sm:text-[64px] font-bold leading-[128px] xl:mt-32 sm:mt-16 mb-12'>All Services</h1>

            {SERVICES.map((service, index) => (
                <ServiceCard key={index} {...service} />
            ))}
        </div>
    )
}

export default AllServicesPage