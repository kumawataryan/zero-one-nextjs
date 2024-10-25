"use client"

import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

interface SubServiceCardProps {
    name: string;
    short_information: string;
    key_points: string;
}

const SubServiceCard: React.FC<SubServiceCardProps> = ({ name, short_information, key_points }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    // Split key points by newline and map to <li> elements
    const keyPointsArray = key_points.split('\n');

    return (
        <div
            className="border-b border-t p-4 py-10 relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="grid md:grid-cols-2 sm:grid-cols-1 justify-between items-center cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
                <div className="flex flex-col">
                    <h2 className="md:text-[24px] sm:text-[20px] font-semibold">{name}</h2>
                    {isExpanded && <p className='max-w-[500px] mt-5 opacity-60'>{short_information}</p>}
                </div>

                {isExpanded && (
                    <div className="mt-4">
                        <ul className="list-disc list-inside opacity-60">
                            {keyPointsArray.map((point, index) => (
                                <li key={index}>{point.trim()}</li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className='absolute md:right-8 sm:right-2'>
                    {isExpanded ? <Minus /> : <Plus />}
                </div>

                {
                    isHovered &&
                    <span className='h-full absolute w-0.5 left-0 bg-[#141DEA]'></span>
                }

            </div>
        </div>
    )
}

export default SubServiceCard

