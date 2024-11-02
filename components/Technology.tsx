import React from 'react'
import Image from 'next/image'

interface TechnologyCardProps {
    image: string;
    name: string;
    services: string[];
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({ image, name, services }) => {
    return (
        <div className='bg-[#FAFAFA] p-4 flex flex-col justify-between h-64 w-[300px] rounded-lg'>
            <Image src={image} width={70} height={70} alt={name} className='w-20 h-20'></Image>
            <div className='flex  flex-col gap-1'>
                <h6 className='font-semibold text-[16px]'>{name}</h6>
                <ul className='flex flex-col -gap-0.5'>
                    {services.map((service, index) => (
                        <li key={index} className='text-[14px] leading-[22px] opacity-60'>{service}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TechnologyCard