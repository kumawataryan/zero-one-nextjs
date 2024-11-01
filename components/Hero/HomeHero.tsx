"use client"

import { Headset, Phone, VideoIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HomeHero = () => {
    const terms = ["design", "development", "marketing"];
    const [index, setIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    // Typing effect for displayed text
    useEffect(() => {
        const currentTerm = terms[index];
        let timer: NodeJS.Timeout;

        if (!isDeleting && displayedText !== currentTerm) {
            // Typing phase
            timer = setTimeout(() => {
                setDisplayedText(currentTerm.slice(0, displayedText.length + 1));
            }, 100); // Typing speed
        } else if (isDeleting && displayedText.length > 0) {
            // Deleting phase
            timer = setTimeout(() => {
                setDisplayedText(currentTerm.slice(0, displayedText.length - 1));
            }, 50); // Deleting speed
        } else if (!isDeleting && displayedText === currentTerm) {
            // Pause at full text
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
        <div className="w-full h-screen relative bg-[#0D0F1A]">
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
            <div className="relative z-10 flex justify-center items-center h-full">
                <h1 className="xl:text-[80px] 2xl:text-[120px] md:text-[60px] sm:text-[48px] font-medium text-white leading-none absolute xl:bottom-6 sm:bottom-24 left-6 text-white/25">
                    full cycle — <br />digital agency <br />

                    {/* Container for animated text with minimum height */}
                    <span className="transition-opacity duration-500 ease-in-out text-white" style={{ minHeight: "1em", display: "inline-block" }}>
                        {displayedText || (
                            <span className="opacity-0">{terms[index]}</span> /* Hidden placeholder */
                        )}
                    </span>
                </h1>

                <div className="flex gap-2 xl:text-[18px] xl:leading-[16px] sm:text-[12px] sm:leading-[12px] sm:flex-wrap xl:flex-row sm:top-24 sm:pl-2 max-w-[700px] items-center justify-center">
                    {/* Links */}
                    <Link href="/" className="cursor-pointer p-7 px-11 hover:border border-white text-white rounded-full bg-gradient-to-r from-black/20 to-black/30 backdrop-blur-sm w-fit">AI</Link>
                    <Link href="/" className="cursor-pointer p-7 px-11 hover:border border-white text-white rounded-full bg-gradient-to-r from-black/20 to-black/30 backdrop-blur-sm w-fit">Startup</Link>
                    <Link href="/" className="cursor-pointer p-7 px-11 hover:border border-white text-white rounded-full bg-gradient-to-r from-black/20 to-black/30 backdrop-blur-sm w-fit">UI/UX</Link>
                    <Link href="/" className="cursor-pointer p-7 px-11 hover:border border-white text-white rounded-full bg-gradient-to-r from-black/20 to-black/30 backdrop-blur-sm w-fit">Python</Link>
                    <Link href="/" className="cursor-pointer p-7 px-11 hover:border border-white text-white rounded-full bg-gradient-to-r from-black/20 to-black/30 backdrop-blur-sm w-fit">React</Link>
                    <Link href="/" className="cursor-pointer p-7 px-11 hover:border border-white text-white rounded-full bg-gradient-to-r from-black/20 to-black/30 backdrop-blur-sm w-fit">App</Link>
                    <Link href="/" className="cursor-pointer p-7 px-11 hover:border border-white text-white rounded-full bg-gradient-to-r from-black/20 to-black/30 backdrop-blur-sm w-fit">Website</Link>
                    <Link href="/" className="cursor-pointer p-7 px-11 hover:border border-white text-white rounded-full bg-gradient-to-r from-black/20 to-black/30 backdrop-blur-sm w-fit">Digital Marketing</Link>
                    <Link href="/" className="cursor-pointer p-7 px-11 hover:border border-white text-white rounded-full bg-gradient-to-r from-black/20 to-black/30 backdrop-blur-sm w-fit">Leads</Link>
                    <Link href="/" className="cursor-pointer p-7 px-11 hover:border border-white text-white rounded-full bg-gradient-to-r from-black/20 to-black/30 backdrop-blur-sm w-fit">E-commerce</Link>
                </div>

                <motion.div
                    whileHover={{ scale: 1.7 }}
                    className="rounded-full bg-gradient-to-r from-black/30 to-black/40 backdrop-blur-sm border-[0.1px] border-white/50 hover:border-none fixed z-50 bottom-6 p-1 gap-0.5 sm:hidden md:flex"
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
