'use client'

import ArrowButton from '@/components/Buttons/ArrowButton'
import HomeHero from '@/components/Hero/HomeHero'
import React from 'react'
import { SERVICES, BLOGS } from "../Constants/index"
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
    name: "Project Name 1",
    link: "/portfolio/project-name-1",
    image: "/portfolio/p-1.png",
    tags: ['Design', 'Ongoing', 'App Development']
  },
  {
    name: "Project Name 2",
    link: "/portfolio/project-name-2",
    image: "/portfolio/p-2.png",
    tags: ['Design', 'Ongoing', 'UI/UX Design']
  },
  {
    name: "Project Name 3",
    link: "/portfolio/project-name-3",
    image: "/portfolio/p-3.jpg",
    tags: ['Design', 'Ongoing', 'Ecommerce Development']
  },
  // Add more projects as needed...
];

const HomePage = () => {
  return (
    <div>

      <HomeHero />

      {/* Services Section */}
      <div className='p-6 md:mt-32 sm:mt-12'>
        <section className='flex justify-between items-center md:mb-8 sm:mb-12'>
          <h2 className='sm:text-[32px] xl:text-[64px] font-semibold leading-tight'>Our Services</h2>
          <ArrowButton ctaText='View All' link='/services' />
        </section>

        {SERVICES.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

      {/* Case Studies Section */}
      <div className='p-6 md:mt-36 sm:mt-12'>
        <h2 className='sm:text-[32px] xl:text-[64px] font-semibold leading-tight'>Zero-One <br />Case Studies</h2>
        <p className='opacity-60 max-w-[600px] mt-6 mb-12'>Explore the Zero-One Case Studies, showcasing our impactful projects. Formerly known as <span className='text-[#00C27B] opacity-100'>YouthSphere</span>, weve rebranded to Zero-One, reflecting our evolved vision and innovative approach.</p>

        <div className='grid gap-0'>
          {BLOGS.map((blog: { date: string; image: string; title: string; link: string }, index: React.Key | null | undefined) => (
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
      <div className='bg-[#141414] md:py-48 sm:py-24 md:mt-32 sm:mt-16 relative w-full'>
        <h3 className='sm:text-[64px] sm:leading-[64px] md:text-[128px] md:leading-[128px] font-bold text-white mx-6 z-0 absolute'>Our <br />Simplified <br />Process</h3>

        <div className='w-full grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 sm:px-4 md:px-16 xl:px-32 md:mt-52 sm:mt-24'>
          <div className='flex flex-col gap-2 left-6 z-10 p-2'>
            <p className='bg-gradient-to-r from-white/5 to-white/10 text-white p-2 px-4 rounded-lg backdrop-blur-md'>Backblog</p>
            <div className='bg-gradient-to-r from-white/5 to-white/10 text-white p-2 rounded-md backdrop-blur-md h-fill'>
              <div className='flex flex-col justify-between gap-16 bg-gradient-to-r from-white/1 to-white/5 p-4 rounded-lg backdrop-blur-md mb-2'>
                <h5 className='text-[18px] font-medium'>Research & Planning</h5>
                <p className='text-[14px] opacity-60 font-light'>Conduct market research, define user personas, and plan the project.</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-2 left-6 z-10 p-2'>
            <p className='bg-gradient-to-r from-white/5 to-white/10 text-white p-2 px-4 rounded-lg backdrop-blur-md'>To Do</p>
            <div className='bg-gradient-to-r from-white/5 to-white/10 text-white p-2 rounded-md backdrop-blur-md h-fill'>
              <div className='flex flex-col justify-between gap-16 bg-gradient-to-r from-white/1 to-white/5 p-4 rounded-lg backdrop-blur-md mb-2'>
                <h5 className='text-[18px] font-medium'>Wireframing & User Flow</h5>
                <p className='text-[14px] opacity-60 font-light'>Design wireframes and map out the user journey.</p>
              </div>

              <div className='flex flex-col justify-between gap-16 bg-gradient-to-r from-white/1 to-white/5 p-4 rounded-lg backdrop-blur-md mb-2'>
                <h5 className='text-[18px] font-medium'>Prototyping & Style Guide</h5>
                <p className='text-[14px] opacity-60 font-light'>Create a prototype and develop the visual style guide.</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-2 left-6 z-10 p-2'>
            <p className='bg-gradient-to-r from-white/5 to-white/10 text-white p-2 px-4 rounded-lg backdrop-blur-md'>In Progress</p>
            <div className='bg-gradient-to-r from-white/5 to-white/10 text-white p-2 rounded-md backdrop-blur-md h-fill'>
              <div className='flex flex-col justify-between gap-16 bg-gradient-to-r from-white/1 to-white/5 p-4 rounded-lg backdrop-blur-md mb-2'>
                <h5 className='text-[18px] font-medium'>Design Development</h5>
                <p className='text-[14px] opacity-60 font-light'>Create high-fidelity designs based on wireframes and style guides.</p>
              </div>
              <div className='flex flex-col justify-between gap-16 bg-gradient-to-r from-white/1 to-white/5 p-4 rounded-lg backdrop-blur-md mb-2'>
                <h5 className='text-[18px] font-medium'>User Testing</h5>
                <p className='text-[14px] opacity-60 font-light'>Conduct market research, define user personas, and plan the project.</p>
              </div>
              <div className='flex flex-col justify-between gap-16 bg-gradient-to-r from-white/1 to-white/5 p-4 rounded-lg backdrop-blur-md mb-2'>
                <h5 className='text-[18px] font-medium'>Iteration & Refinement</h5>
                <p className='text-[14px] opacity-60 font-light'>Make necessary adjustments based on testing and client feedback.</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-2 left-6 z-10 p-2'>
            <p className='bg-gradient-to-r from-white/5 to-white/10 text-white p-2 px-4 rounded-lg backdrop-blur-md'>Done</p>
            <div className='bg-gradient-to-r from-white/5 to-white/10 text-white p-2 rounded-md backdrop-blur-md h-fill'>
              <div className='flex flex-col justify-between gap-16 bg-gradient-to-r from-white/1 to-white/5 p-4 rounded-lg backdrop-blur-md mb-2'>
                <h5 className='text-[18px] font-medium'>Final Design Handoff</h5>
                <p className='text-[14px] opacity-60 font-light'>Deliver final designs and assets to the development team.</p>
              </div>
              <div className='flex flex-col justify-between gap-16 bg-gradient-to-r from-white/1 to-white/5 p-4 rounded-lg backdrop-blur-md mb-2'>
                <h5 className='text-[18px] font-medium'>Documentation & Support</h5>
                <p className='text-[14px] opacity-60 font-light'>Provide style guides, design systems, and ongoing support as needed.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Reviews */}
      <div className='bg-[#00C27B] p-6 md:py-32 sm:py-16'>

        <div className='flex md:flex-row sm:flex-col sm:gap-8 md:gap-0 justify-between w-full'>
          <h3 className='uppercase text-white md:text-[64px] sm:text-[32px] font-semibold'>Client Voices</h3>

          <div>
            <p className='text-white opacity-60 max-w-[500px] text-[14px]'>Weve proudly delivered 200 successful projects, each crafted with precision and passion. Our innovative tech solutions and exceptional design skills have transformed businesses and exceeded client expectations. Join us on this journey of excellence and see your vision come to life!</p>
          </div>
        </div>

        <VideoCarousel />
      </div>

      <HeroAbout />

      {/* Contact Form */}
      <ContactForm />

      {/* Faq section */}
      <FaqSection />

      <div className='mb-28'>
        <TechnologiesSection />
      </div>

    </div>
  )
}

export default HomePage