"use client";

import { CirclePause, CirclePlay } from "lucide-react";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

// Define props interface
interface VideoReviewProps {
    videoSrc: string;            // Video source URL
    reviewerName: string;        // Reviewer's name
    reviewerPosition: string;    // Reviewer's position
    reviewerCompany: string;     // Reviewer's company
    reviewText: string;          // Review content
    buttonColor?: string;        // Optional button color
    tags: string[];              // Dynamic tags list
}

export default function VideoReview({
    videoSrc,
    reviewerName,
    reviewerPosition,
    reviewerCompany,
    tags,                        // Include tags in props
}: VideoReviewProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });

    const handlePlayClick = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
                videoRef.current.muted = false;
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleMouseMove = (event: React.MouseEvent) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        setButtonPosition({ x, y });
    };

    return (
        <div
            className="bg-white relative aspect-9/16 max-w-[400px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
        >
            <div className="absolute inset-0 flex items-center justify-center">
                {!isPlaying && (
                    <button onClick={handlePlayClick} className="focus:outline-none z-10">
                        <CirclePlay size={48} className="text-white" />
                    </button>
                )}
                {isPlaying && isHovered && (
                    <motion.button
                        onClick={handlePlayClick}
                        className="focus:outline-none z-10"
                        style={{
                            position: 'absolute',
                            left: `${buttonPosition.x - 24}px`,
                            top: `${buttonPosition.y - 24}px`,
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <CirclePause size={48} className="text-white" />
                    </motion.button>
                )}
            </div>

            <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                src={videoSrc}
                muted
                loop
                playsInline
                controls={isPlaying && isHovered}
                id="backgroundVideo"
            ></video>

            {!isPlaying && (
                <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-r from-white/20 to-white/30 backdrop-blur-sm text-white w-full">
                    <div className="flex items-center mb-3">
                        <div className="flex space-x-1">
                            <div className="w-3 h-3 bg-[#062330]"></div>
                            <div className="w-3 h-3 bg-[#062330]"></div>
                            <div className="w-3 h-3 bg-[#062330]"></div>
                            <div className="w-3 h-3 bg-[#062330]"></div>
                            <div className="w-3 h-3 bg-[#062330]"></div>
                        </div>
                    </div>
                    <div className="mt-6">
                        <h3 className="text-[#062330] font-bold text-[16px]">{reviewerName}<span className="text-[12px] opacity-80">, {reviewerPosition}</span></h3>
                        <p className="text-[14px] text-[#062330] opacity-80">{reviewerCompany}</p>
                    </div>
                    <div className="flex flex-wrap mt-4 items-start gap-1">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="text-[12px] text-[#062330] border-[#062330] border px-3 py-1 rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
