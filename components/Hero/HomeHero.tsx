"use client"

import { Headset, Phone, VideoIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"

const HomeHero = () => {
    const terms = ["design", "development", "marketing"];
    const [index, setIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [showreelPosition, setShowreelPosition] = useState({ x: 0, y: 0 });
    const [isPlayReelHoveredOverTags, setIsPlayReelHoveredOverTags] = useState(false);

    const handleMouseMove = (event: React.MouseEvent) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        setShowreelPosition({ x, y });
    };

    // Typing effect for displayed text
    useEffect(() => {
        const currentTerm = terms[index];
        let timer: NodeJS.Timeout;

        if (!isDeleting && displayedText !== currentTerm) {
            timer = setTimeout(() => {
                setDisplayedText(currentTerm.slice(0, displayedText.length + 1));
            }, 100);
        } else if (isDeleting && displayedText.length > 0) {
            timer = setTimeout(() => {
                setDisplayedText(currentTerm.slice(0, displayedText.length - 1));
            }, 50);
        } else if (!isDeleting && displayedText === currentTerm) {
            timer = setTimeout(() => setIsDeleting(true), 2000);
        }

        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, index, terms]);

    // Handle index change after text deletion
    useEffect(() => {
        if (isDeleting && displayedText === "") {
            setIsDeleting(false);
            setIndex((prevIndex) => (prevIndex + 1) % terms.length);
        }
    }, [isDeleting, displayedText, terms.length]);

    return (
        <div
            className="w-full h-screen relative bg-[#0D0F1A]"
            onMouseMove={handleMouseMove} // Add onMouseMove handler
        >
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover aspect-3/2"
            >
                <source src="/hero-video.mp4" type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

            {/* Content */}
            <div className="relative z-10 flex justify-left items-center h-full">
                <div className="xl:px-6 sm:px-3 flex justify-between items-start">

                    {
                        !isPlayReelHoveredOverTags &&
                        <Dialog>
                            <DialogTrigger>
                                <motion.p
                                    style={{
                                        position: 'absolute',
                                        left: `${showreelPosition.x}px`, // Remove offset to align with cursor
                                        top: `${showreelPosition.y}px`, // Remove offset to align with cursor
                                    }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="uppercase flex gap-1.5 items-center text-[14px] text-white hover:cursor-pointer z-10 sm:hidden xl:flex"
                                >
                                    <Image src="/icons/play.svg" width={24} height={24} alt="play-icon" className="w-6 h-6" unoptimized />
                                    Play Showreel
                                </motion.p>
                            </DialogTrigger>
                            <DialogContent className="bg-transparent border-none items-center justify-center">
                                <video className="aspect-3/2 w-full xl:min-w-[1000px] sm:min-w-[300px]" autoPlay controls loop preload="none">
                                    <source src="/hero-video.mp4" type="video/mp4" />
                                </video>
                            </DialogContent>
                        </Dialog>
                    }

                    <h1 className="absolute xl:top-64 sm:top-52 xl:right-6 sm:right-0 sm:p-4 xl:text-[35px] sm:text-[22px] uppercase font-normal text-white leading-tight md:w-2/3 xl:w-1/3 sm:w-full">
                        At 01, we build high-performance digital products powered by advanced tech and thoughtful design, driving innovation with a unique, opposite perspective.
                    </h1>

                    {/* <Dialog>
                        <DialogTrigger>
                            <motion.p
                                className="uppercase flex gap-1.5 items-center text-[14px] text-white hover:cursor-pointer z-10 sm:flex xl:hidden mt-8"
                            >
                                <Image src="/icons/play.svg" width={24} height={24} alt="play-icon" className="w-6 h-6" unoptimized />
                                Play Showreel
                            </motion.p>
                        </DialogTrigger>
                        <DialogContent className="bg-transparent border-none items-center justify-center">
                            <video className="aspect-3/2 w-full xl:min-w-[1000px] sm:min-w-[300px]" autoPlay controls loop preload="none">
                                <source src="/hero-video.mp4" type="video/mp4" />
                            </video>
                        </DialogContent>
                    </Dialog> */}


                </div>

                <div
                    onMouseEnter={() => setIsPlayReelHoveredOverTags(true)}
                    onMouseLeave={() => setIsPlayReelHoveredOverTags(false)}
                    className="absolute flex gap-2 xl:text-[18px] xl:leading-[16px] sm:flex-wrap xl:flex-row sm:bottom-4 xl:m-6 sm:m-4 max-w-[700px] items-left justify-left sm:mb-20 xl:mb-0"
                >
                    {/* Links */}
                    {["AI", "Startup", "UI/UX", "Python", "React", "App", "Website", "Digital Marketing", "Leads", "E-commerce"].map((text) => (
                        <Link key={text} href="/" className="cursor-pointer xl:p-7 sm:p-4 xl:px-11 sm:px-8 hover:border border-white text-white rounded-full bg-gradient-to-r from-black/20 to-black/30 backdrop-blur-sm w-fit">{text}</Link>
                    ))}
                </div>

                <motion.div
                    whileHover={{ scale: 1.7 }}
                    className="rounded-full bg-gradient-to-r from-black/30 to-black/40 backdrop-blur-sm border-[0.1px] border-white/50 hover:border-none fixed z-50 bottom-6 p-1 gap-0.5 sm:hidden md:flex xl:hidden"
                >
                    <Link href="/contact" className="hover:bg-white/25 p-1.5 rounded-full"><Headset className="w-3.5 h-3.5 text-white/75" /></Link>
                    <Link href="/contact" className="hover:bg-white/25 p-1.5 rounded-full"><Phone className="w-3.5 h-3.5 text-white/75" /></Link>
                    <Link href="/contact" className="hover:bg-white/25 p-1.5 rounded-full"><VideoIcon className="w-3.5 h-3.5 text-white/75" /></Link>
                </motion.div>
            </div>
        </div>
    );
};

export default HomeHero;
