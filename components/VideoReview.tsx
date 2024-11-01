"use client";

import { CirclePause, CirclePlay } from "lucide-react";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

// Define props interface
interface VideoReviewProps {
    videoSrc: string;            // Video source URL
    reviewerName: string;        // Reviewer's name
    reviewerPosition: string;    // Reviewer's position
    reviewText: string;          // Review content
    buttonColor?: string;        // Optional button color
    overlayOpacity?: number;     // Optional overlay opacity
}

export default function VideoReview({
    videoSrc,
    reviewerName,
    reviewerPosition,
    reviewText,
    overlayOpacity = 0.4,
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
                        <CirclePlay size={48} className="text-[#00C27B]" />
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
                        <CirclePause size={48} className="text-[#00C27B]" />
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

            <div className="absolute top-0 left-0 w-full h-full bg-black" style={{ opacity: overlayOpacity }}></div>

            {!isPlaying && (
                <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-r from-black/20 to-black/30 backdrop-blur-md text-white">
                    <div className="flex items-center mb-3">
                        <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-white"></div>
                            <div className="w-2 h-2 bg-white"></div>
                            <div className="w-2 h-2 bg-white"></div>
                            <div className="w-2 h-2 bg-white"></div>
                            <div className="w-2 h-2 bg-white"></div>
                        </div>
                    </div>
                    <h3 className="text-[14px] font-bold mb-2 opacity-70">
                        {reviewerName}, {reviewerPosition}
                    </h3>
                    <p className="opacity-30 text-[12px] font-light">
                        {reviewText}
                    </p>
                </div>
            )}
        </div>
    );
}
