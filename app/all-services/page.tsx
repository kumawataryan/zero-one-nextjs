"use client"

import ServiceCard from '@/components/Service/ServiceCard'
import { SERVICES } from '@/Constants'
import React from 'react'

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