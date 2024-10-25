import { ArrowDown } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const HeroService = () => {
    return (
        <div className='w-full xl:h-screen bg-[#0D0F1A] grid xl:grid-cols-2 sm:grid-cols-1 justify-between items-center p-6 gap-12 sm:pt-40'>

            {/* section left */}
            <section>
                <h1 className='xl:text-[80px] 2xl:text-[120px] md:text-[60px] sm:text-[40px] font-medium text-white leading-none'>UI-UX Design</h1>
                <p className='text-opacity-50 text-white xl:mt-8 sm:mt-6 xl:w-3/4 sm:w-full sm:text-[14px] xl:text-[18px]'>At Zero One Agency, we specialize in providing exceptional UI/UX design services tailored to meet your business needs. At Zero One Agency, we specialize in providing exceptional UI/UX design services tailored to meet your business needs.</p>

                <div className='grid xl:grid-cols-2 sm:grid-cols-1 gap-10 gap-y-0 xl:mt-12 sm:mt-6'>
                    <p className='text-opacity-25 text-white xl:text-[16px] sm:text-[14px] border-b border-white/25 py-3'>Wire framing & Prototyping</p>
                    <p className='text-opacity-25 text-white xl:text-[16px] sm:text-[14px] border-b border-white/25 py-3'>Pre MVP Concept Design</p>
                    <p className='text-opacity-25 text-white xl:text-[16px] sm:text-[14px] border-b border-white/25 py-3'>Web Design</p>
                    <p className='text-opacity-25 text-white xl:text-[16px] sm:text-[14px] border-b border-white/25 py-3'>Responsive Design</p>
                    <p className='text-opacity-25 text-white xl:text-[16px] sm:text-[14px] border-b border-white/25 py-3'>iOS App Design</p>
                    <p className='text-opacity-25 text-white xl:text-[16px] sm:text-[14px] border-b border-white/25 py-3'>Ui/UX Redesign</p>
                    <p className='text-opacity-25 text-white xl:text-[16px] sm:text-[14px] border-b border-white/25 py-3'>Android App Design</p>
                    <p className='text-opacity-25 text-white xl:text-[16px] sm:text-[14px] border-b border-white/25 py-3'>SAAS Product Design</p>
                    <p className='text-opacity-25 text-white xl:text-[16px] sm:text-[14px] border-b border-white/25 py-3'>Dashboard Design</p>
                    <p className='text-opacity-25 text-white xl:text-[16px] sm:text-[14px] border-b border-white/25 py-3'>UI/UX Design Consulting</p>
                    <p className='text-opacity-25 text-white xl:text-[16px] sm:text-[14px] border-b border-white/25 py-3'>Desktop App Design</p>
                </div>

                <Link href="/" className='bg-[#141DEA] flex text-white uppercase rounded-lg items-center p-6 gap-3 px-10 font-medium w-fit xl:mt-16 sm:mt-12 text-[20px]'>
                    ORDER YOUR CONCEPT
                    <ArrowDown className='bg-white text-black rounded-full p-2 w-10 h-10' />
                </Link>
            </section>

            {/* section right */}
            <section>

                <video
                    autoPlay
                    loop
                    muted
                    className="object-cover w-full rounded-lg"
                >
                    <source src="/about-video.mp4" type="video/mp4" />
                </video>

                <div className='bg-gradient-to-r from-white/5 to-white/10 rounded-lg p-6 px-10 mt-4 flex sm:flex-col xl:flex-row sm:gap-2 justify-between'>
                    <section className='flex gap-3 items-center text-white'>
                        <h5 className='text-[40px] font-semibold'>23</h5>
                        <p className='opacity-50 text-[12px] leading-tight max-w-[150px]'>projects delivered in ui/ux design.</p>
                    </section>

                    <section className='flex gap-3 items-center text-white'>
                        <h5 className='text-[40px] font-semibold'>16</h5>
                        <p className='opacity-50 text-[12px] leading-tight max-w-[150px]'>clients in ui/ux Design.</p>
                    </section>

                    <section className='flex gap-3 items-center text-white'>
                        <h5 className='text-[40px] font-semibold'>7</h5>
                        <p className='opacity-50 text-[12px] leading-tight max-w-[150px]'>years of experience in ui/ux design.</p>
                    </section>
                </div>

            </section>

        </div>
    )
}

export default HeroService