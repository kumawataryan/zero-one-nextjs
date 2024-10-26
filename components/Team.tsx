'use client'

import { useState, useRef } from "react";
import Image from "next/image";
import { CirclePlay } from "lucide-react";

export default function Team() {
    const [hoveredMember, setHoveredMember] = useState<TeamMember | null>(null);
    const audioRef = useRef<HTMLAudioElement>(null);

    interface TeamMember {
        name: string;
        role: string;
        imageSrc: string;
        audioSrc: string;
    }

    const teamMembers: TeamMember[] = [
        {
            name: "Lakshya",
            role: "Engineering Manager",
            imageSrc: "/team/lakshya.png",
            audioSrc: "/team-audio/lakshya.mp3",
        },
        {
            name: "Anchal",
            role: "Senior UI/UX Designer",
            imageSrc: "/team/anchal.jpeg",
            audioSrc: "/team-audio/anchal.mp3",
        },
        {
            name: "Rajat",
            role: "Design Lead",
            imageSrc: "/team/rajat.png",
            audioSrc: "/team-audio/rajat.mp3",
        },
        {
            name: "Aryan",
            role: "UI/UX Designer",
            imageSrc: "/team/aryan.jpeg",
            audioSrc: "/team-audio/aryan.mp3",
        },
        {
            name: "Mansi",
            role: "3D Rendering & Modelling",
            imageSrc: "/team/mansi.jpeg",
            audioSrc: "/team-audio/mansi.mp3",
        },
    ];

    const handleMouseEnter = (member: TeamMember) => {
        setHoveredMember(member);
        if (audioRef.current) {
            audioRef.current.src = member.audioSrc;
            audioRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        setHoveredMember(null);
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    };

    return (
        <div className="flex flex-col items-start py-32 bg-black text-white relative">
            {teamMembers.map((member) => (
                <div
                    key={member.name}
                    className="relative py-12 border-t border-b p-6 w-full flex gap-2 group hover:bg-white hover:text-black"
                    onMouseEnter={() => handleMouseEnter(member)}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="flex gap-2 items-start">
                        <h3 className="text-[28px] font-bold uppercase cursor-pointer leading-[28px]">
                            {member.name}
                        </h3>
                        <p className="text-[12px] text-gray-400 uppercase">[{member.role}]</p>
                    </div>

                    {/* Image and Icon shown on hover - centered within the card */}
                    {hoveredMember?.name === member.name && (
                        <>
                            <div className="absolute inset-0 flex justify-center items-center">
                                <Image
                                    src={member.imageSrc}
                                    alt={member.name}
                                    className="object-cover aspect-9/16 z-40 min-w-[140px]"
                                    width={120}
                                    height={120}
                                    unoptimized
                                />
                            </div>

                            {/* Show CirclePlay icon on hovered member card only */}
                            <CirclePlay className="absolute right-6 z-40 text-black" />
                            
                        </>
                    )}
                </div>
            ))}

            <audio ref={audioRef}></audio>
        </div>
    );
}