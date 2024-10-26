"use client"

import { Headset, Phone, VideoIcon } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const HomeHero = () => {
    return (
        <div className='w-full h-screen relative bg-[#0D0F1A]'>
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="/hero-video.mp4" type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-75"></div>

            {/* Content */}
            <div className="relative z-10 flex justify-center items-center h-full">
                <h1 className="xl:text-[80px] 2xl:text-[120px] md:text-[60px] sm:text-[48px] font-medium text-white leading-none absolute xl:bottom-6 sm:bottom-24 left-6">
                    full cycle — <br />digital agency
                </h1>

                <div className="flex gap-2 xl:text-[16px] xl:leading-[16px] sm:text-[12px] sm:leading-[12px] sm:flex-col xl:flex-row max-w-1/4">
                    <Link href="/" className="cursor-pointer p-4 px-7 hover:border border-white text-white rounded-full bg-gradient-to-r from-black/20 to-black/30 backdrop-blur-md w-fit">AI</Link>
                    <Link href="/" className="cursor-pointer p-4 px-7 hover:border border-white text-white rounded-full bg-gradient-to-r from-black/20 to-black/30 backdrop-blur-md w-fit">Startup</Link>
                    <Link href="/" className="cursor-pointer p-4 px-7 hover:border border-white text-white rounded-full bg-gradient-to-r from-black/20 to-black/30 backdrop-blur-md w-fit">UI/UX</Link>
                    <Link href="/" className="cursor-pointer p-4 px-7 hover:border border-white text-white rounded-full bg-gradient-to-r from-black/20 to-black/30 backdrop-blur-md w-fit">Python</Link>
                    <Link href="/" className="cursor-pointer p-4 px-7 hover:border border-white text-white rounded-full bg-gradient-to-r from-black/20 to-black/30 backdrop-blur-md w-fit">React</Link>
                    <Link href="/" className="cursor-pointer p-4 px-7 hover:border border-white text-white rounded-full bg-gradient-to-r from-black/20 to-black/30 backdrop-blur-md w-fit">App</Link>
                    <Link href="/" className="cursor-pointer p-4 px-7 hover:border border-white text-white rounded-full bg-gradient-to-r from-black/20 to-black/30 backdrop-blur-md w-fit">Website</Link>
                    <Link href="/" className="cursor-pointer p-4 px-7 hover:border border-white text-white rounded-full bg-gradient-to-r from-black/20 to-black/30 backdrop-blur-md w-fit">Digital Marketing</Link>
                    <Link href="/" className="cursor-pointer p-4 px-7 hover:border border-white text-white rounded-full bg-gradient-to-r from-black/20 to-black/30 backdrop-blur-md w-fit">Leads</Link>
                    <Link href="/" className="cursor-pointer p-4 px-7 hover:border border-white text-white rounded-full bg-gradient-to-r from-black/20 to-black/30 backdrop-blur-md w-fit">E-commerce</Link>
                </div>

                <motion.div
                    whileHover={{ scale: 1.7 }}
                    className="rounded-full bg-gradient-to-r from-black/30 to-black/40 backdrop-blur-md border-[0.1px] border-white/50 hover:border-none fixed z-50 bottom-6 p-1 gap-0.5 sm:hidden md:flex"
                >
                    <Link href="/contact" className="hover:bg-white/25 p-1.5 rounded-full"><Headset className="w-3.5 h-3.5 text-white/75" /></Link>
                    <Link href="/contact" className="hover:bg-white/25 p-1.5 rounded-full"><Phone className="w-3.5 h-3.5 text-white/75" /></Link>
                    <Link href="/contact" className="hover:bg-white/25 p-1.5 rounded-full"><VideoIcon className="w-3.5 h-3.5 text-white/75" /></Link>
                </motion.div>

            </div>
        </div>
    )
}

export default HomeHero