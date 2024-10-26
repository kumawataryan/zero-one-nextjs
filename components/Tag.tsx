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
        <Link className={cn("bg-[#141DEA] p-1 px-2 text-black rounded-full w-fit text-[10px] flex items-center justify-center text-nowrap", className)} href={tagLink}>
            {tagName}
        </Link>
    )
}

export default Tag