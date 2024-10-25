'use client'

import React, { useState, useRef } from 'react'
import { Button } from './ui/button'
import { Headset, Menu } from 'lucide-react'
import Link from 'next/link'

const NavBar = () => {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [technologiesOpen, setTechnologiesOpen] = useState(false)

  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const technologiesTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const openServices = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current)
    }
    setServicesOpen(true)
    setTechnologiesOpen(false)
  }

  const closeServices = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false)
    }, 200) // 2 second delay before closing
  }

  const openTechnologies = () => {
    if (technologiesTimeoutRef.current) {
      clearTimeout(technologiesTimeoutRef.current)
    }
    setTechnologiesOpen(true)
    setServicesOpen(false)
  }

  const closeTechnologies = () => {
    technologiesTimeoutRef.current = setTimeout(() => {
      setTechnologiesOpen(false)
    }, 200) // 2 second delay before closing
  }

  const cancelClose = (dropdown: string) => {
    if (dropdown === 'services' && servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current)
    } else if (dropdown === 'technologies' && technologiesTimeoutRef.current) {
      clearTimeout(technologiesTimeoutRef.current)
    }
  }

  return (
    <nav className='w-[98vw] p-4 md:px-10 sm:px-4 bg-gradient-to-r from-white/60 to-white/70 fixed backdrop-blur-md flex justify-between items-center rounded-lg mt-4 z-50'>
      {/* navbar left section */}
      <section className='flex items-center gap-2'>
        <Link href="/">
          <p className='font-bold md:text-[28px] sm:text-[16px]'>ZERO-ONE</p>
        </Link>
      </section>

      {/* navbar right section */}
      <section className='flex gap-8 items-center'>
        {/* links */}
        <ul className='flex space-x-5 sm:hidden xl:flex'>
          <li
            onMouseEnter={openServices}
            onMouseLeave={closeServices}
            className='cursor-pointer opacity-60 hover:opacity-90'
          >
            Services
          </li>
          <li
            onMouseEnter={openTechnologies}
            onMouseLeave={closeTechnologies}
            className='cursor-pointer opacity-60 hover:opacity-90'
          >
            Technologies
          </li>
          <li className='cursor-pointer opacity-60 hover:opacity-90'>Solutions</li>

          <Link href="/news">
            <li className='cursor-pointer opacity-60 hover:opacity-90'>Resources</li>
          </Link>

          <Link href="/about">
            <li className='cursor-pointer opacity-60 hover:opacity-90'>About us</li>
          </Link>
        </ul>

        {/* services dropdown */}
        {
          servicesOpen && (
            <div
              onMouseEnter={() => cancelClose('services')}
              onMouseLeave={closeServices}
              className='bg-gradient-to-r h-[50vh] top-24 w-full left-0 absolute from-white/60 to-white/70 backdrop-blur-md rounded-lg'
            >
              {/* <Tabs defaultValue="design" className="flex p-2 gap-2 w-full h-full">

                <TabsList className='flex flex-col w-1/4 gap-2 bg-transparent justify-start items-start'>
                  <TabsTrigger className='h-1/3 w-full p-4 from-white/60 to-white/70 backdrop-blur-md rounded-md uppercase text-[16px]' value="design">Design</TabsTrigger>
                  <TabsTrigger className='h-1/3 w-full p-4 from-white/60 to-white/70 backdrop-blur-md rounded-md uppercase text-[16px]' value="development">Development</TabsTrigger>
                  <TabsTrigger className='h-1/3 w-full p-4 from-white/60 to-white/70 backdrop-blur-md rounded-md uppercase text-[16px]' value="marketing">Marketing</TabsTrigger>
                </TabsList>

                <TabsContent value="design" className='from-white/60 to-white/70 backdrop-blur-md rounded-md mt-0 grid grid-cols-4 p-2 gap-2'>
                  <Link className='p-2 bg-[#f2f2f2] rounded-md' href='/ui-ux-design'>UI/UX Design</Link>
                  <Link className='p-2 bg-[#f2f2f2] rounded-md' href='/graphic-design'>Graphic Design</Link>
                  <Link className='p-2 bg-[#f2f2f2] rounded-md' href='/logo-brand-identity'>Logo & Brand Identity</Link>
                  <Link className='p-2 bg-[#f2f2f2] rounded-md' href='/packaging-design'>Packaging Design</Link>
                  <Link className='p-2 bg-[#f2f2f2] rounded-md' href='/3d-modelling-rendering'>3D Modelling & Rendering</Link>
                  <Link className='p-2 bg-[#f2f2f2] rounded-md' href='/3d-animation'>3D Animation</Link>
                  <Link className='p-2 bg-[#f2f2f2] rounded-md' href='/web-design'>Web Design</Link>
                  <Link className='p-2 bg-[#f2f2f2] rounded-md' href='/motion-graphics'>Motion Graphics</Link>
                  <Link className='p-2 bg-[#f2f2f2] rounded-md' href='/mobile-app-design'>Mobile App Design</Link>
                </TabsContent>

                <TabsContent value="development" className="from-white/60 to-white/70 backdrop-blur-md rounded-md mt-0 grid grid-cols-4 p-2 gap-2">
                  <Link className='p-2 bg-[#f2f2f2] rounded-md' href='/web-development'>Web Development</Link>
                  <Link className='p-2 bg-[#f2f2f2] rounded-md' href='/mobile-development'>Mobile Development</Link>
                  <Link className='p-2 bg-[#f2f2f2] rounded-md' href='/ecommerce-development'>E-commerce Development</Link>
                  <Link className='p-2 bg-[#f2f2f2] rounded-md' href='/cms-development'>CMS Development</Link>
                  <Link className='p-2 bg-[#f2f2f2] rounded-md' href='/custom-software-development'>Custom Software Development</Link>
                  <Link className='p-2 bg-[#f2f2f2] rounded-md' href='/api-integration'>API Integration</Link>
                  <Link className='p-2 bg-[#f2f2f2] rounded-md' href='/cloud-computing'>Cloud Computing</Link>
                  <Link className='p-2 bg-[#f2f2f2] rounded-md' href='/devops'>DevOps</Link>
                  <Link className='p-2 bg-[#f2f2f2] rounded-md' href='/blockchain-development'>Blockchain Development</Link>
                </TabsContent>

                <TabsContent value="marketing" className='from-white/60 to-white/70 backdrop-blur-md rounded-md mt-0 grid grid-cols-4 p-2 gap-2'>
                  <Link className='p-2 bg-[#f2f2f2] rounded-md' href='/seo'>SEO</Link>
                  <Link className='p-2 bg-[#f2f2f2] rounded-md' href='/content-marketing'>Content Marketing</Link>
                  <Link className='p-2 bg-[#f2f2f2] rounded-md' href='/social-media-marketing'>Social Media Marketing</Link>
                  <Link className='p-2 bg-[#f2f2f2] rounded-md' href='/email-marketing'>Email Marketing</Link>
                  <Link className='p-2 bg-[#f2f2f2] rounded-md' href='/ppc'>PPC</Link>
                  <Link className='p-2 bg-[#f2f2f2] rounded-md' href='/affiliate-marketing'>Affiliate Marketing</Link>
                  <Link className='p-2 bg-[#f2f2f2] rounded-md' href='/influencer-marketing'>Influencer Marketing</Link>
                  <Link className='p-2 bg-[#f2f2f2] rounded-md' href='/video-marketing'>Video Marketing</Link>
                  <Link className='p-2 bg-[#f2f2f2] rounded-md' href='/pr'>PR</Link>
                </TabsContent>
              </Tabs> */}
            </div>
          )
        }

        {/* technologies dropdown */}
        {
          technologiesOpen && (
            <div
              onMouseEnter={() => cancelClose('technologies')}
              onMouseLeave={closeTechnologies}
              className='bg-gradient-to-r h-[50vh] top-24 w-full left-0 absolute from-white/60 to-white/70 backdrop-blur-md rounded-lg'
            >
              Technologies Menu
            </div>
          )
        }

        <Menu className='md:block xl:hidden' />
        <Button variant="default" className='h-14 sm:hidden md:hidden xl:flex gap-3'>
          <p className='text-left text-[16px] font-medium leading-none'>Free consultation <br />
            <span className='opacity-60 text-[12px] leading-none font-light'>Lakshya(Founder)</span>
          </p>
          <div className='bg-white/70 p-2.5 rounded-md flex items-center justify-center'>
            <Headset className='text-black' />
          </div>
        </Button>
      </section>
    </nav>
  )
}

export default NavBar
