import React from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

interface ArrowButtonProps {
    ctaText: string;
    link: string;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ ctaText, link }) => {
    return (
        <Link href={link} className='md:p-2 sm:p-1 border rounded-full flex gap-2 items-center md:text-[15px] sm:text-[12px] hover:bg-[#141DEA] hover:text-white'>
            {ctaText}
            <div className='bg-[#141DEA] p-1 rounded-full flex items-center justify-center'><ArrowUpRight className='text-white' /></div>
        </Link>
    )
}

export default ArrowButton