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

const NewsCard: React.FC<NewsCardProps> = ({ date, image, title, link }) => {
    // State to manage hover state
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className='border-t border-black md:grid grid-cols-3 w-full py-6 justify-between items-top relative sm:flex sm:flex-col sm:gap-4'
            // Event handlers to update hover state
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <p className='uppercase font-medium'>{date}</p>

            <div className='flex flex-col gap-4 md:items-left'>
                <Image src={image} alt={title} width={300} height={200} unoptimized className='sm:w-full md:w-full aspect-3/2 max-w-[300px]' />

                <Link href={link} className='cursor-pointer'>
                    <h3 className='xl:text-[20px] sm:text-[16px] font-semibold leading-normal w-full'>{title}</h3>
                </Link>
            </div>

            <ArrowUpRight
                className={`w-8 h-8 absolute right-4 top-4 rounded-full p-2 ${isHovered ? 'bg-black text-white' : 'border border-black text-black'
                    }`}
            />
        </div>
    );
}

export default NewsCard;
