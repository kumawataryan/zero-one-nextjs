import React from 'react'

const HeroAbout = () => {
    return (
        <div className='w-full h-[50vh] relative bg-[#0D0F1A]'>
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-[50vh] object-cover"
            >
                <source src="/about-video.mp4" type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-[50vh] bg-black opacity-25"></div>

            {/* Content */}
            <div className="absolute z-10 md:left-20 sm:left-6 bottom-0 flex sm:flex-col md:flex-row gap-2">
                <section className='bg-[#DBE2EA] flex p-6 flex-col text-[#062330]'>
                    <h5 className='md:text-[24px] font-semibold'>11+</h5>
                    <p className='opacity-40 text-[14px]'>years driving growth.</p>
                </section>

                <section className='bg-[#DBE2EA] flex p-6 flex-col text-[#062330]'>
                    <h5 className='md:text-[24px] font-semibold'>456</h5>
                    <p className='opacity-40 text-[14px]'>projects delivered till now.</p>
                </section>
            </div>
        </div>)
}

export default HeroAbout