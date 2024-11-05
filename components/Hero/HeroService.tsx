import { ArrowDown } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface HeroServiceProps {
    title: string;
    description: string;
    services: string[];
    videoSrc: string;
    stats: { value: number; label: string }[];
}

const HeroService: React.FC<HeroServiceProps> = ({ title, description, services, videoSrc, stats }) => {
    return (
        <div className='w-full bg-[#0D0F1A] grid xl:grid-cols-2 sm:grid-cols-1 justify-between items-center p-6 gap-12 py-40'>

            {/* section left */}
            <section>
                <h1 className='xl:text-[80px] md:text-[60px] sm:text-[40px] font-bold text-white leading-none'>{title}</h1>
                <p className='text-opacity-50 text-white xl:mt-6 sm:mt-6 xl:w-3/4 sm:w-full text-[20px] xl:max-w-[550px]'>{description}</p>

                {/* o=show on mobile only */}
                <video
                    autoPlay
                    loop
                    muted
                    className="object-cover w-full rounded-lg aspect-3/2 lg:hidden sm:block mt-8"
                >
                    <source src={videoSrc} type="video/mp4" />
                </video>

                <Link href="/" className='bg-[#141DEA] flex text-white uppercase rounded-lg items-center justify-center p-4 gap-3 px-8 font-medium xl:mt-12 sm:mt-6 text-[20px] lg:hidden sm:flex w-full'>
                    ORDER YOUR CONCEPT
                    <ArrowDown className='bg-white text-black rounded-full p-2 w-10 h-10' />
                </Link>

                <div className='grid xl:grid-cols-2 sm:grid-cols-1 gap-10 gap-y-0 xl:mt-6 sm:mt-4'>
                    {services.map((service, index) => (
                        <p key={index} className='text-opacity-50 text-white text-[18px] border-b border-white/50 py-3'>{service}</p>
                    ))}
                </div>

                <Link href="/" className='bg-[#141DEA] flex text-white uppercase rounded-lg items-center p-4 gap-3 px-8 font-medium w-fit xl:mt-12 sm:mt-6 text-[20px] lg:flex sm:hidden'>
                    ORDER YOUR CONCEPT
                    <ArrowDown className='bg-white text-black rounded-full p-2 w-10 h-10' />
                </Link>
            </section>

            {/* section right */}
            <section>

                <video
                    autoPlay
                    loop
                    muted
                    className="object-cover w-full rounded-lg aspect-3/2 lg:block sm:hidden"
                >
                    <source src={videoSrc} type="video/mp4" />
                </video>

                <div className='bg-gradient-to-r from-white/5 to-white/10 rounded-lg p-6 px-10 mt-4 flex sm:flex-col xl:flex-row sm:gap-2 justify-between'>
                    {stats.map((stat, index) => (
                        <section key={index} className='flex gap-3 items-center text-white'>
                            <h5 className='text-[40px] font-semibold'>{stat.value}</h5>
                            <p className='opacity-50 text-[12px] leading-tight max-w-[150px]'>{stat.label}</p>
                        </section>
                    ))}
                </div>

            </section>

        </div>
    )
}

export default HeroService
