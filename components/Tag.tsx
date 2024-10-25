import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface TagProps {
    tagLink: string;
    tagName: string;
    className?: string // Add className as an optional prop
}

const Tag: React.FC<TagProps> = ({ tagLink, tagName, className }) => {
    return (
        <Link className={cn("bg-[#141DEA] p-2 px-4 text-white rounded-full w-fit text-[12px] flex items-center justify-center text-nowrap", className)} href={tagLink}>
            {tagName}
        </Link>
    )
}

export default Tag