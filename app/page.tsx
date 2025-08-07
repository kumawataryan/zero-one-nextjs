'use client'

import ArrowButton from '@/components/Buttons/ArrowButton'
import HomeHero from '@/components/Hero/HomeHero'
import React from 'react'
import { SERVICES, CASE_STUDIES } from "../Constants/index"
import ServiceCard from '@/components/Service/ServiceCard'
import ContactForm from '@/components/ContactForm'
import FaqSection from '@/components/FaqSection'
import TechnologiesSection from '@/components/TechnologiesSection'
import HeroAbout from '@/components/Hero/HeroAbout'

import { VideoCarousel } from '@/components/VideoCarousel'
import CaseStudies from '@/components/News/CaseStudies'
import PortfolioSection from '@/components/PortfolioSection'

const projects = [
  {
    name: "Hyundai App",
    link: "/portfolio/hyundai",
    image: "/Portfolio/portfolio-hyundai.jpg",
    tags: ['Design', 'App Development', 'Completed']
  },
  {
    name: "Fortis Blog",
    link: "/portfolio/fortis",
    image: "/Portfolio/portfolio-fortis.jpg",
    tags: ['Design', 'SEO', 'UI/UX Design', 'Website', 'Completed']
  },
  {
    name: "Ashok Leyland App",
    link: "/portfolio/ashok-leyland",
    image: "/Portfolio/portfolio-ashok-leyland.jpg",
    tags: ['Design', 'Completed', 'App Development']
  },
  {
    name: "JDA (Jaipur Development Authority)",
    link: "/portfolio/jda",
    image: "/Portfolio/portfolio-jda.jpg",
    tags: ['Design', 'App Development', 'Completed']
  },
  {
    name: "PC Jewellers",
    link: "/portfolio/pc-jewellers",
    image: "/Portfolio/portfolio-pcj.jpg",
    tags: ['Design', 'SEO', 'UI/UX Design', 'Website', 'Completed']
  },
  {
    name: "Surana Jewellers",
    link: "/portfolio/surana-jewellers",
    image: "/Portfolio/portfolio-surana-jewellers.jpg",
    tags: ['Design', 'Completed', 'App Development']
  },
  {
    name: "My Protein",
    link: "/portfolio/my-protein",
    image: "/Portfolio/portfolio-my-protein.jpg",
    tags: ['Design', 'SEO', 'UI/UX Design', 'Website', 'Completed']
  },
  {
    name: "Haldiram",
    link: "/portfolio/haldiram",
    image: "/Portfolio/portfolio-haldiram.jpg",
    tags: ['Design', 'SEO', 'UI/UX Design', 'Website', 'Completed']
  }
];

const HomePage = () => {
  return (
    <div>

      <HomeHero />

      <div className='w-full flex xl:flex-row sm:flex-col p-6 py-24 xl:gap-0 sm:gap-8'>
        <p className='uppercase w-4/6 xl:text-[18px] sm:text-[14px] text-[#062330] font-semibold'>About us</p>

        <div className='flex flex-col'>
          <h2 className='md:text-[36px] sm:text-[28px] font-semibold leading-tight text-[#062330]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Founded in 2009 as Youthsphere and now rebranded to Zero One, we are a full-cycle digital agency supporting startups and small businesses. With over 200 successful projects, we deliver comprehensive digital solutions designed to elevate our clients impact and growth.</h2>
          <div className='xl:ml-64 sm:ml-0 mt-12 xl:flex xl:flex-row sm:grid sm:grid-cols-2 xl:flex-nowrap xl:gap-32 sm:gap-8'>
            <div className='flex flex-col gap-1'>
              <p className='xl:text-[52px] sm:text-[28px] font-bold text-[#062330] xl:leading-[52px] sm:leading-[32px]'>15</p>
              <p className='opacity-60 text-black text-[14px]'>Years of experience</p>
            </div>

            <div className='flex flex-col gap-1'>
              <p className='xl:text-[52px] sm:text-[28px] font-bold text-[#062330] xl:leading-[52px] sm:leading-[32px]'>117</p>
              <p className='opacity-60 text-black text-[14px]'>Projects delivered</p>
            </div>

            <div className='flex flex-col gap-1'>
              <p className='xl:text-[52px] sm:text-[28px] font-bold text-[#062330] xl:leading-[52px] sm:leading-[32px]'>112</p>
              <p className='opacity-60 text-black text-[14px]'>Satisfied clients.</p>
            </div>

            <div className='flex flex-col gap-1'>
              <p className='xl:text-[52px] sm:text-[28px] font-bold text-[#062330] xl:leading-[52px] sm:leading-[32px]'>0</p>
              <p className='opacity-60 text-black text-[14px]'>Days without a creative crises.</p>
            </div>

          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className='p-6'>
        <section className='flex justify-between items-center md:mb-8 sm:mb-12'>
          <h2 className='sm:text-[32px] xl:text-[64px] font-semibold xl:leading-[64px] sm:leading-[32px]'>Services</h2>
          <ArrowButton ctaText='View All' link='/services' />
        </section>

        {SERVICES.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

      {/* Case Studies Section */}
      <div className='p-6 md:mt-36 sm:mt-12'>
        <h2 className='sm:text-[32px] xl:text-[64px] font-semibold xl:leading-[64px] sm:leading-[32px]'>Case Studies</h2>
        <p className='opacity-60 max-w-[600px] mt-4 mb-12 text-[20px]'>Explore the Zero-One Case Studies, showcasing our impactful projects. Formerly known as YouthSphere, weve rebranded to Zero-One, reflecting our evolved vision and innovative approach.</p>

        <div className='grid sm:gap-y-12 xl:gap-0'>
          {CASE_STUDIES.map((blog: { date: string; image: string; title: string; link: string }, index: React.Key | null | undefined) => (
            <CaseStudies
              key={index}
              date={blog.date}
              image={blog.image}
              title={blog.title}
              link={blog.link}
            />
          ))}
        </div>
      </div>

      {/* Portfolio Section */}
      <div className='p-6 md:mt-28 sm:mt-12'>
        <PortfolioSection projects={projects} />
      </div>


      {/* Process section ui */}
      <div
        className='bg-[#141414] md:py-28 sm:py-24 md:mt-32 sm:mt-16 w-full'
        style={{
          backgroundImage: 'url(/process-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h3 className='sm:text-[32px] xl:text-[64px] font-semibold xl:leading-[64px] sm:leading-[32px] text-white p-6'>
          Process
        </h3>
        <div className='w-full grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 sm:px-4 xl:p-6 sm:gap-8 xl:gap-8'>
          <div className='flex flex-col gap-2 left-6 z-10'>
            <p className='bg-gradient-to-r from-white/5 to-white/10 text-white p-4 px-6 rounded-lg backdrop-blur-md text-[18px] border-white'>
              Discovery
            </p>
            <div className='bg-gradient-to-r bg-transparent h-fill'>
              <div className='flex flex-col justify-between gap-20 bg-gradient-to-r from-white/10 to-white/5 text-white p-6 rounded-lg backdrop-blur-md mb-2'>
                <h5 className='text-[18px] font-medium'>Research & Consultation</h5>
                <p className='text-[14px] opacity-60 font-light'>
                  Understand your business needs and gather key insights to shape project goals.
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-2 left-6 z-10'>
            <p className='bg-gradient-to-r from-white/5 to-white/10 text-white p-4 px-6 rounded-lg backdrop-blur-md text-[18px] border-white'>
              Planning
            </p>
            <div className='bg-gradient-to-r bg-transparent h-fill'>
              <div className='flex flex-col justify-between gap-20 bg-gradient-to-r from-white/10 to-white/5 text-white p-6 rounded-lg backdrop-blur-md mb-2'>
                <h5 className='text-[18px] font-medium'>Concept & Strategy</h5>
                <p className='text-[14px] opacity-60 font-light'>
                  Develop initial concepts and craft a strategic roadmap tailored to your service.
                </p>
              </div>
              <div className='flex flex-col justify-between gap-20 bg-gradient-to-r from-white/10 to-white/5 text-white p-6 rounded-lg backdrop-blur-md mb-2'>
                <h5 className='text-[18px] font-medium'>Planning & Blueprint</h5>
                <p className='text-[14px] opacity-60 font-light'>
                  Define detailed plans, timelines, and milestones for a smooth execution.
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-2 left-6 z-10'>
            <p className='bg-gradient-to-r from-white/5 to-white/10 text-white p-4 px-6 rounded-lg backdrop-blur-md text-[18px] border-white'>
              Execution
            </p>
            <div className='bg-gradient-to-r bg-transparent h-fill'>
              <div className='flex flex-col justify-between gap-20 bg-gradient-to-r from-white/10 to-white/5 text-white p-6 rounded-lg backdrop-blur-md mb-2'>
                <h5 className='text-[18px] font-medium'>Design & Development</h5>
                <p className='text-[14px] opacity-60 font-light'>
                  Transform plans into actionable designs and begin the development process.
                </p>
              </div>
              <div className='flex flex-col justify-between gap-20 bg-gradient-to-r from-white/10 to-white/5 text-white p-6 rounded-lg backdrop-blur-md mb-2'>
                <h5 className='text-[18px] font-medium'>Testing & Iteration</h5>
                <p className='text-[14px] opacity-60 font-light'>
                  Refine the solution through rigorous testing and iterative improvements.
                </p>
              </div>
              <div className='flex flex-col justify-between gap-20 bg-gradient-to-r from-white/10 to-white/5 text-white p-6 rounded-lg backdrop-blur-md mb-2'>
                <h5 className='text-[18px] font-medium'>Quality Assurance</h5>
                <p className='text-[14px] opacity-60 font-light'>
                  Ensure optimal performance and adherence to quality standards.
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-2 left-6 z-10'>
            <p className='bg-gradient-to-r from-white/5 to-white/10 text-white p-4 px-6 rounded-lg backdrop-blur-md text-[18px] border-white'>
              Delivery
            </p>
            <div className='bg-gradient-to-r bg-transparent h-fill'>
              <div className='flex flex-col justify-between gap-20 bg-gradient-to-r from-white/10 to-white/5 text-white p-6 rounded-lg backdrop-blur-md mb-2'>
                <h5 className='text-[18px] font-medium'>Final Delivery</h5>
                <p className='text-[14px] opacity-60 font-light'>
                  Hand over the completed project along with all the necessary assets.
                </p>
              </div>
              <div className='flex flex-col justify-between gap-20 bg-gradient-to-r from-white/10 to-white/5 text-white p-6 rounded-lg backdrop-blur-md mb-2'>
                <h5 className='text-[18px] font-medium'>Post-Launch Support</h5>
                <p className='text-[14px] opacity-60 font-light'>
                  Provide ongoing support and documentation to ensure long-term success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Reviews */}
      <div className='bg-white p-6 md:py-36 sm:py-24'>

        <div className='flex md:flex-row sm:flex-col sm:gap-8 md:gap-0 justify-between w-full'>

          <div>
            <h3 className='sm:text-[32px] xl:text-[64px] font-semibold xl:leading-[64px] sm:leading-[32px] text-[#062330]'>Testimonials</h3>
          </div>

          <div>
            <p className='text-[#062330] uppercase font-light max-w-[600px] text-[18px] leading-normal'>We have proudly delivered 200 successful projects, each crafted with precision and passion.</p>
          </div>
        </div>

        <VideoCarousel />
      </div>

      <HeroAbout />

      {/* Contact Form */}
      <ContactForm heading={true} />

      {/* Faq section */}
      <FaqSection />

      <div className='mb-28'>
        <TechnologiesSection />
      </div>

    </div>
  )
}

export default HomePage