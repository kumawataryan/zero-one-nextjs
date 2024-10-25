import { ArrowDown } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const HeroService2 = () => {
    return (
        <div className='w-full h-[75vh] bg-[#0D0F1A] grid grid-cols-2 justify-between items-center p-6 relative'>

            <video
                autoPlay
                loop
                muted
                className="object-cover w-full rounded-lg absolute top-0 left-0 h-[75vh]"
            >
                <source src="/about-video.mp4" type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-[75vh] bg-black opacity-75"></div>

            <h1 className='xl:text-[80px] 2xl:text-[120px] md:text-[60px] sm:text-[40px] font-medium text-white leading-none absolute p-6 bottom-6'>UI-UX Design</h1>

            <div className='absolute grid grid-cols-2 gap-10 gap-y-0 mt-8 right-6'>
                <p className='text-opacity-50 text-white text-[16px] border-b border-white/50 py-3'>Wire framing & Prototyping</p>
                <p className='text-opacity-50 text-white text-[16px] border-b border-white/50 py-3'>Pre MVP Concept Design</p>
                <p className='text-opacity-50 text-white text-[16px] border-b border-white/50 py-3'>Web Design</p>
                <p className='text-opacity-50 text-white text-[16px] border-b border-white/50 py-3'>Responsive Design</p>
                <p className='text-opacity-50 text-white text-[16px] border-b border-white/50 py-3'>iOS App Design</p>
                <p className='text-opacity-50 text-white text-[16px] border-b border-white/50 py-3'>Ui/UX Redesign</p>
                <p className='text-opacity-50 text-white text-[16px] border-b border-white/50 py-3'>Android App Design</p>
                <p className='text-opacity-50 text-white text-[16px] border-b border-white/50 py-3'>SAAS Product Design</p>
                <p className='text-opacity-50 text-white text-[16px] border-b border-white/50 py-3'>Dashboard Design</p>
                <p className='text-opacity-50 text-white text-[16px] border-b border-white/50 py-3'>UI/UX Design Consulting</p>
                <p className='text-opacity-50 text-white text-[16px] border-b border-white/50 py-3'>Desktop App Design</p>
            </div>

            <Link href="/" className='bg-[#141DEA] flex text-white uppercase rounded-lg items-center p-6 gap-3 px-10 font-medium w-fit mt-16 text-[20px] absolute right-6 bottom-6'>
                ORDER YOUR CONCEPT
                <ArrowDown className='bg-white text-black rounded-full p-2 w-10 h-10' />
            </Link>


        </div>
    )
}

export default HeroService2