// components/PortfolioCard.tsx
import React from 'react';
import Tag from '../Tag';
import { cn } from '@/lib/utils'; // Import the cn function
import Image from 'next/image';
import Link from 'next/link';

interface TagProps {
    tagLink: string;
    tagName: string;
    className?: string; // Optional className for custom styling
}

interface PortfolioCardProps {
    name: string;
    link: string;
    image: string;
    tags: TagProps[]; // Array of TagProps for multiple tags
    className?: string; // Optional className for custom styling
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
    image,
    tags,
    name,
    link,
    className,
}) => {
    return (
        <div className={cn("rounded-lg break-inside-avoid", className)}>
            <Link href={link}>
                <Image src={image} alt={name} className="w-full h-full object-cover rounded-md" width={500} height={500} unoptimized></Image>
            </Link>
            <div className="flex flex-col">
                <Link href={link}>
                    <h3 className="text-[16px] font-medium mt-3 uppercase">{name}</h3>
                </Link>
                <div className="mt-2 flex flex-wrap justify-left">
                    {tags.map((tag, index) => (
                        <Tag key={index} tagLink={tag.tagLink} tagName={tag.tagName} className="mr-1 uppercase bg-transparent border border-black p-0.5 px-2 text-black" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PortfolioCard;
