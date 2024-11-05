"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';

interface NewsCardProps {
    date: Date;
    image: string;
    title: string;
    slug: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ date, image, title, slug }) => {
    return (
        <Link href={`/news/${slug}`} className='cursor-pointer flex flex-col gap-4 relative'>
            <Image src={image} alt={title} width={300} height={200} unoptimized className='w-full aspect-3/2 object-cover' />
            <p className='text-[12px] absolute p-1 px-2 top-0 right-0 bg-black text-white'>{formatDate(date)}</p>
            <h3 className='text-[20px] font-semibold leading-[30px] w-5/6'>{title}</h3>
        </Link>
    );
}

export default NewsCard;
