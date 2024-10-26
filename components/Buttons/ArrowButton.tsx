import React from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { LucideIcon } from 'lucide-react'
import { cn } from '../../lib/utils';  // Import your cn utility

interface ArrowButtonProps {
    ctaText: string;
    link: string;
    icon?: LucideIcon;  // Optional icon prop
    className?: string;  // Optional custom class name
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ ctaText, link, icon: Icon = ArrowUpRight, className }) => {

    const [isHovered, setIsHovered] = React.useState(false)


    return (
        <Link
            href={link}
            className={cn(
                'relative overflow-hidden md:p-2 sm:p-1 border rounded-full flex gap-2 items-center md:text-[15px] sm:text-[12px] hover:text-white group',
                className  // Allow passing custom class names
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseDown={() => setIsHovered(false)}
        >
            <span className="relative z-10 flex items-center gap-2">
                <p className='pl-2'>{ctaText}</p>

                <div className={`${isHovered ? "bg-[#141DEA] text-white" : "bg-[#ffffff] text-black"} p-1 rounded-full flex items-center justify-center`}>
                    <Icon /> {/* Use the conditional icon */}
                </div>
            </span>
            {/* Left to right fill animation */}
            <div className="absolute inset-0 bg-[#141DEA] rounded-full origin-left scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100"></div>
        </Link>
    )
}

export default ArrowButton
