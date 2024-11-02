"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';


interface NewsCardProps {
    date: string;
    image: string;
    title: string;
    link: string;
}

const CaseStudies: React.FC<NewsCardProps> = ({ date, image, title, link }) => {
    // State to manage hover state
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link href={link} className='cursor-pointer'>
            <div
                className='border-t border-black grid xl:grid-cols-3 sm:grid-cols-1 justify-center w-full py-4 items-top relative gap-4'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <p className='uppercase font-medium'>{date}</p>

                <div className='flex sm:flex-col xl:flex-row gap-4 xl:items-center sm:items-start'>
                    <Image src={image} alt={title} width={300} height={200} unoptimized className='w-full md:w-auto aspect-3/2 xl:max-w-[200px] sm:w-full' />

                    <Link href={link} className='cursor-pointer'>
                        <h3 className='sm:text-[18px] sm:leading-[27px] xl:text-[20px] font-medium xl:leading-[30px] w-full xl:max-w-[500px] xl:min-w-[500px]'>{title}</h3>
                    </Link>
                </div>

                <ArrowUpRight
                    className={`w-8 h-8 absolute right-4 top-4 rounded-full p-2 ${isHovered ? 'bg-black text-white' : 'border border-black text-black'}`}
                />
            </div>
        </Link>
    );
}

export default CaseStudies;
