import ContactForm from '@/components/ContactForm'
import HeroAbout from '@/components/Hero/HeroAbout'
import Team from '@/components/Team'
import { VideoCarousel } from '@/components/VideoCarousel'
import React from 'react'

const AboutPage = () => {
    return (
        <div>
            <HeroAbout />

            <div className='p-6 xl:py-24 sm:py-12'>
                <h1 className='xl:text-[96px] sm:text-[48px] font-medium xl:leading-[96px] sm:leading-[48px] w-3/5'>
                    CRAFTING REMARKABLE AND EXCITING DIGITAL JOURNEYS
                </h1>

                <hr className='mt-12' />

                <div className='mt-12'>

                    <div className='w-full flex items-end justify-end'>
                        <p className='xl:max-w-[500px] sm:w-full opacity-60'>
                            At our core, we blend technological expertise, innovative design, and creative excellence to deliver bespoke solutions. Our team is dedicated to turning your vision into reality, ensuring that every project is tailored to meet your unique needs and drive your success. Join us in pioneering the future of technology and design.
                        </p>
                    </div>

                    <div className='bg-gradient-to-r from-white/5 to-white/10 rounded-lg mt-20 flex xl:flex-row sm:flex-col justify-between sm:gap-10'>
                        <section className='flex gap-2 items-top'>
                            <h5 className='text-[62px] leading-[62px] font-bold'>10+</h5>
                            <p className='opacity-50 text-[12px] leading-tight max-w-[150px]'>years of experience.</p>
                        </section>

                        <section className='flex gap-2 items-top'>
                            <h5 className='text-[62px] leading-[62px] font-bold'>117</h5>
                            <p className='opacity-50 text-[12px] leading-tight max-w-[150px]'>completed projects.</p>
                        </section>

                        <section className='flex gap-2 items-top'>
                            <h5 className='text-[62px] leading-[62px] font-bold'>7</h5>
                            <p className='opacity-50 text-[12px] leading-tight max-w-[150px]'>satisfied clients.</p>
                        </section>

                        <section className='flex gap-2 items-top'>
                            <h5 className='text-[62px] leading-[62px] font-bold'>0</h5>
                            <p className='opacity-50 text-[12px] leading-tight max-w-[150px]'>days without a creative crises.</p>
                        </section>
                    </div>

                </div>

            </div>

            <Team />

            {/* Video Reviews */}
            <div className='bg-[#00C27B] p-6 py-32'>

                <div className='flex md:flex-row sm:flex-col sm:gap-8 md:gap-0 justify-between w-full'>
                    <h3 className='sm:text-[32px] xl:text-[64px] font-semibold xl:leading-[64px] sm:leading-[32px] text-white'>Client Voices</h3>

                    <div>
                        <p className='text-white opacity-60 max-w-[500px] text-[18px]'>We have proudly delivered 200 successful projects, each crafted with precision and passion. Our innovative tech solutions and exceptional design skills have transformed businesses and exceeded client expectations. Join us on this journey of excellence and see your vision come to life!</p>
                    </div>
                </div>

                <VideoCarousel />

            </div>


            {/* Contact Form */}
            <ContactForm heading={true} />
        </div>
    )
}

export default AboutPage