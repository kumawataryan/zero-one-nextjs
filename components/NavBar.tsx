'use client'

import React, { useState, useRef } from 'react'
import { Calendar, Headset, Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'


const NavBar = () => {

  const [servicesOpen, setServicesOpen] = useState(false);
  const [technologiesOpen, setTechnologiesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const technologiesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const solutionsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const resourcesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [isScheduleCallHovered, setIsScheduleCallHovered] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openServices = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
    }
    setServicesOpen(true);
    setTechnologiesOpen(false);
    setSolutionsOpen(false);
    setResourcesOpen(false);
  };

  const closeServices = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 200); // 2 second delay before closing
  };

  const openTechnologies = () => {
    if (technologiesTimeoutRef.current) {
      clearTimeout(technologiesTimeoutRef.current);
    }
    setTechnologiesOpen(true);
    setServicesOpen(false);
    setSolutionsOpen(false);
    setResourcesOpen(false);
  };

  const closeTechnologies = () => {
    technologiesTimeoutRef.current = setTimeout(() => {
      setTechnologiesOpen(false);
    }, 200);
  };

  const openSolutions = () => {
    if (solutionsTimeoutRef.current) {
      clearTimeout(solutionsTimeoutRef.current);
    }
    setSolutionsOpen(true);
    setServicesOpen(false);
    setTechnologiesOpen(false);
    setResourcesOpen(false);
  };

  const closeSolutions = () => {
    solutionsTimeoutRef.current = setTimeout(() => {
      setSolutionsOpen(false);
    }, 200);
  };

  const openResources = () => {
    if (resourcesTimeoutRef.current) {
      clearTimeout(resourcesTimeoutRef.current);
    }
    setResourcesOpen(true);
    setServicesOpen(false);
    setTechnologiesOpen(false);
    setSolutionsOpen(false);
  };

  const closeResources = () => {
    resourcesTimeoutRef.current = setTimeout(() => {
      setResourcesOpen(false);
    }, 200);
  };

  const cancelClose = (dropdown: string) => {
    if (dropdown === 'services' && servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
    } else if (dropdown === 'technologies' && technologiesTimeoutRef.current) {
      clearTimeout(technologiesTimeoutRef.current);
    } else if (dropdown === 'solutions' && solutionsTimeoutRef.current) {
      clearTimeout(solutionsTimeoutRef.current);
    } else if (dropdown === 'resources' && resourcesTimeoutRef.current) {
      clearTimeout(resourcesTimeoutRef.current);
    }
  };

  return (
    <nav className='xl:w-[98vw] sm:w-[96vw] p-3 md:px-6 sm:px-4 bg-gradient-to-r from-black/20 to-black/30 back fixed flex justify-between items-center rounded-xl mt-4 z-50 text-white'>
      {/* navbar left section */}
      <section className='flex items-center gap-2'>
        <Link href="/">
          <Image src="/zero-one-logo.svg" width={50} height={50} alt="zero-one-logo" unoptimized className='w-16 h-16' />
        </Link>
      </section>

      {/* navbar right section */}
      <section className='flex sm:gap-0 xl:gap-8 items-center'>
        {/* links */}
        <ul className='flex space-x-5 sm:hidden xl:flex text-[16px]'>
          <Link
            href="/all-services"
            onMouseEnter={openServices}
            onMouseLeave={closeServices}
            className='cursor-pointer opacity-60 hover:opacity-90 text-white'
          >
            Services
          </Link>
          <Link
            href="/technologies"
            onMouseEnter={openTechnologies}
            onMouseLeave={closeTechnologies}
            className='cursor-pointer opacity-60 hover:opacity-90 text-white'
          >
            Technologies
          </Link>

          <Link
            href="/solutions"
            onMouseEnter={openSolutions}
            onMouseLeave={closeSolutions}
            className='cursor-pointer opacity-60 hover:opacity-90 text-white'
          >
            Solutions
          </Link>

          <li
            onMouseEnter={openResources}
            onMouseLeave={closeResources}
            className='cursor-pointer opacity-60 hover:opacity-90 text-white'
          >
            Resources
          </li>

          <Link href="/portfolio">
            <li className='cursor-pointer opacity-60 hover:opacity-90 text-white'>Portfolio</li>
          </Link>

          <Link href="/about">
            <li className='cursor-pointer opacity-60 hover:opacity-90 text-white'>About us</li>
          </Link>

          <Link href="/contact">
            <li className='cursor-pointer opacity-60 hover:opacity-90 text-white'>Contact us</li>
          </Link>
        </ul>

        {/* services dropdown */}
        {
          servicesOpen && (
            <div
              onMouseEnter={() => cancelClose('services')}
              onMouseLeave={closeServices}
              className='absolute top-24 left-0 w-full bg-gradient-to-r from-black/20 to-black/30 backdrop-blur-xl rounded-lg grid grid-cols-5 p-10'
            >

              <div className='flex flex-col gap-2'>
                <p className='font-normal uppercase text-white/50 text-[15px]'>Design & Branding</p>
                <ul className='flex flex-col gap-1.5 text-[15px]'>
                  <li className='text-white/75 hover:text-white text-[16px]'><Link href="ui-ux-design">UI/UX Design</Link></li>
                  <li className='text-white/75 hover:text-white text-[16px]'><Link href="graphic-design">Graphic Design</Link></li>
                  <li className='text-white/75 hover:text-white text-[16px]'><Link href="logo-brand-identity">Logo & Brand Identity</Link></li>
                  <li className='text-white/75 hover:text-white text-[16px]'><Link href="packaging-design">Packaging Design</Link></li>
                  <li className='text-white/75 hover:text-white text-[16px]'><Link href="3d-modelling-rendering">3D Modelling & Rendering</Link></li>
                  <li className='text-white/75 hover:text-white text-[16px]'><Link href="3d-animation">3D Animation</Link></li>
                </ul>
              </div>
              <div className='flex flex-col gap-2'>
                <p className='font-normal uppercase text-white/50 text-[15px]'>Development & Technology</p>
                <ul className='flex flex-col gap-1.5 text-[15px]'>
                  <li className='text-white/75 hover:text-white text-[16px]'><Link href="/software-development">Software Development</Link></li>
                  <li className='text-white/75 hover:text-white text-[16px]'><Link href="/ecommerce-development">Ecommerce Development</Link></li>
                  <li className='text-white/75 hover:text-white text-[16px]'><Link href="/game-development">Game Development</Link></li>
                  <li className='text-white/75 hover:text-white text-[16px]'><Link href="/blockchain-development">Blockchain Development</Link></li>
                  <li className='text-white/75 hover:text-white text-[16px]'><Link href="/ai-services">AI Services</Link></li>
                  <li className='text-white/75 hover:text-white text-[16px]'><Link href="/wordpress-development">Wordpress Development</Link></li>
                  <li className='text-white/75 hover:text-white text-[16px]'><Link href="/shopify-development">Shopify Development</Link></li>
                  <li className='text-white/75 hover:text-white text-[16px]'><Link href="/webflow-development">Webflow Development</Link></li>
                </ul>
              </div>
              <div className='flex flex-col gap-2'>
                <p className='font-normal uppercase text-white/50 text-[15px]'>Digital Marketing & Management</p>
                <ul className='flex flex-col gap-1.5 text-[15px]'>
                  <li className='text-white/75 hover:text-white text-[16px]'><Link href="/digital-marketing">Digital Marketing</Link></li>
                  <li className='text-white/75 hover:text-white text-[16px]'><Link href="/social-media-marketing">Social Media Marketing</Link></li>
                  <li className='text-white/75 hover:text-white text-[16px]'><Link href="/ecommerce-management">E-commerce Management</Link></li>
                  <li className='text-white/75 hover:text-white text-[16px]'><Link href="/lead-generation">Lead Generation</Link></li>
                  <li className='text-white/75 hover:text-white text-[16px]'><Link href="/marketing-strategy">Marketing Strategy</Link></li>
                </ul>
              </div>
              <div className='flex flex-col gap-2'>
                <p className='font-normal uppercase text-white/50 text-[15px]'>Consulting & Support</p>
                <ul className='flex flex-col gap-1.5 text-[15px]'>
                  <li className='text-white/75 hover:text-white text-[16px]'><Link href="/tech-consultation">Tech Consultation</Link></li>
                  <li className='text-white/75 hover:text-white text-[16px]'><Link href="/staff-augmentation">Staff Augmentation</Link></li>
                  <li className='text-white/75 hover:text-white text-[16px]'><Link href="/ai-for-business">AI for Business</Link></li>
                  <li className='text-white/75 hover:text-white text-[16px]'><Link href="/blockchain-crypto">Blockchain & Crypto</Link></li>
                </ul>
              </div>
              <div className='flex flex-col gap-2'>
                <p className='font-normal uppercase text-white/50 text-[15px]'>Data & Analytics</p>
                <ul className='flex flex-col gap-1.5 text-[15px]'>
                  <li className='text-white/75 hover:text-white text-[16px]'><Link href="/data-scraping">Data Scraping</Link></li>
                  <li className='text-white/75 hover:text-white text-[16px]'><Link href="/ai-for-business">AI for Business</Link></li>
                </ul>
              </div>

            </div>
          )
        }

        {/* technologies dropdown */}
        {
          technologiesOpen && (
            <div
              onMouseEnter={() => cancelClose('technologies')}
              onMouseLeave={closeTechnologies}
              className='bg-gradient-to-r top-24 w-full left-0 absolute from-black/20 to-black/30 backdrop-blur-xl rounded-lg grid grid-cols-5 p-10 gap-10'
            >
              {/* Row 1 */}
              <div className='flex flex-col gap-2'>
                <p className='font-normal uppercase text-white/50 text-[15px]'>Design & Prototyping</p>
                <ul className='flex flex-col gap-1.5 text-[15px]'>
                  <li className='text-white/75 hover:text-white text-[16px]'>Figma</li>
                  <li className='text-white/75 hover:text-white text-[16px]'>Adobe Photoshop</li>
                  <li className='text-white/75 hover:text-white text-[16px]'>Adobe Illustrator</li>
                  <li className='text-white/75 hover:text-white text-[16px]'>Sketch</li>
                  <li className='text-white/75 hover:text-white text-[16px]'>InVision</li>
                </ul>
              </div>

              <div className='flex flex-col gap-2'>
                <p className='font-normal uppercase text-white/50 text-[15px]'>Development Frameworks</p>
                <ul className='flex flex-col gap-1.5 text-[15px]'>
                  <li className='text-white/75 hover:text-white text-[16px]'>React.js</li>
                  <li className='text-white/75 hover:text-white text-[16px]'>Angular</li>
                  <li className='text-white/75 hover:text-white text-[16px]'>Vue.js</li>
                  <li className='text-white/75 hover:text-white text-[16px]'>Node.js</li>
                  <li className='text-white/75 hover:text-white text-[16px]'>Django</li>
                </ul>
              </div>

              <div className='flex flex-col gap-2'>
                <p className='font-normal uppercase text-white/50 text-[15px]'>E-commerce Platforms</p>
                <ul className='flex flex-col gap-1.5 text-[15px]'>
                  <li className='text-white/75 hover:text-white text-[16px]'>Shopify</li>
                  <li className='text-white/75 hover:text-white text-[16px]'>WordPress</li>
                  <li className='text-white/75 hover:text-white text-[16px]'>WooCommerce</li>
                  <li className='text-white/75 hover:text-white text-[16px]'>Magento</li>
                  <li className='text-white/75 hover:text-white text-[16px]'>BigCommerce</li>
                </ul>
              </div>

              <div className='flex flex-col gap-2'>
                <p className='font-normal uppercase text-white/50 text-[15px]'>Marketing & Analytics</p>
                <ul className='flex flex-col gap-1.5 text-[15px]'>
                  <li className='text-white/75 hover:text-white text-[16px]'>Google Analytics</li>
                  <li className='text-white/75 hover:text-white text-[16px]'>Google Ads</li>
                  <li className='text-white/75 hover:text-white text-[16px]'>Facebook Ads</li>
                  <li className='text-white/75 hover:text-white text-[16px]'>HubSpot</li>
                  <li className='text-white/75 hover:text-white text-[16px]'>Mailchimp</li>
                </ul>
              </div>

              <div className='flex flex-col gap-2'>
                <p className='font-normal uppercase text-white/50 text-[15px]'>Cloud Services</p>
                <ul className='flex flex-col gap-1.5 text-[15px]'>
                  <li className='text-white/75 hover:text-white text-[16px]'>AWS</li>
                  <li className='text-white/75 hover:text-white text-[16px]'>Google Cloud</li>
                  <li className='text-white/75 hover:text-white text-[16px]'>Microsoft Azure</li>
                  <li className='text-white/75 hover:text-white text-[16px]'>Heroku</li>
                  <li className='text-white/75 hover:text-white text-[16px]'>DigitalOcean</li>
                </ul>
              </div>

              {/* Row 2 */}
              <div className='flex flex-col gap-2'>
                <p className='font-normal uppercase text-white/50 text-[15px]'>Content Management Systems</p>
                <ul className='flex flex-col gap-1.5 text-[15px]'>
                  <li className='text-white/75 hover:text-white text-[16px]'>Drupal</li>
                  <li className='text-white/75 hover:text-white text-[16px]'>Wix</li>
                  <li className='text-white/75 hover:text-white text-[16px]'>Squarespace</li>
                  <li className='text-white/75 hover:text-white text-[16px]'>Joomla</li>
                  <li className='text-white/75 hover:text-white text-[16px]'>Contentful</li>
                </ul>
              </div>

              <div className='flex flex-col gap-2'>
                <p className='font-normal uppercase text-white/50 text-[15px]'>DevOps & CI/CD Tools</p>
                <ul className='flex flex-col gap-1.5 text-[15px]'>
                  <li className='text-white/75 hover:text-white text-[16px]'>Docker</li>
                  <li className='text-white/75 hover:text-white text-[16px]'>Kubernetes</li>
                  <li className='text-white/75 hover:text-white text-[16px]'>Jenkins</li>
                  <li className='text-white/75 hover:text-white text-[16px]'>Travis CI</li>
                  <li className='text-white/75 hover:text-white text-[16px]'>CircleCI</li>
                </ul>
              </div>

              <div className='flex flex-col gap-2'>
                <p className='font-normal uppercase text-white/50 text-[15px]'>Blockchain Technologies</p>
                <ul className='flex flex-col gap-1.5 text-[15px]'>
                  <li className='text-white/75 hover:text-white text-[16px]'>Ethereum</li>
                  <li className='text-white/75 hover:text-white text-[16px]'>Hyperledger</li>
                  <li className='text-white/75 hover:text-white text-[16px]'>Solidity</li>
                  <li className='text-white/75 hover:text-white text-[16px]'>Ripple</li>
                  <li className='text-white/75 hover:text-white text-[16px]'>Binance Smart Chain</li>
                </ul>
              </div>

              <div className='flex flex-col gap-2'>
                <p className='font-normal uppercase text-white/50 text-[15px]'>AI & Machine Learning Tools</p>
                <ul className='flex flex-col gap-1.5 text-[15px]'>
                  <li className='text-white/75 hover:text-white text-[16px]'>TensorFlow</li>
                  <li className='text-white/75 hover:text-white text-[16px]'>PyTorch</li>
                  <li className='text-white/75 hover:text-white text-[16px]'>Scikit-Learn</li>
                  <li className='text-white/75 hover:text-white text-[16px]'>OpenAI</li>
                  <li className='text-white/75 hover:text-white text-[16px]'>Kaggle</li>
                </ul>
              </div>

              <div className='flex flex-col gap-2'>
                <p className='font-normal uppercase text-white/50 text-[15px]'>Project Management Tools</p>
                <ul className='flex flex-col gap-1.5 text-[15px]'>
                  <li className='text-white/75 hover:text-white text-[16px]'>Jira</li>
                  <li className='text-white/75 hover:text-white text-[16px]'>Trello</li>
                  <li className='text-white/75 hover:text-white text-[16px]'>Asana</li>
                  <li className='text-white/75 hover:text-white text-[16px]'>Slack</li>
                  <li className='text-white/75 hover:text-white text-[16px]'>Notion</li>
                </ul>
              </div>

            </div>
          )
        }

        {/* solutions dropdown */}
        {solutionsOpen && (
          <div
            onMouseEnter={() => cancelClose('solutions')}
            onMouseLeave={closeSolutions}
            className='bg-gradient-to-r top-24 w-full left-0 absolute from-black/20 to-black/30 backdrop-blur-xl rounded-lg grid grid-cols-3 p-8'
          >
            <div className='flex flex-col gap-2'>
              <ul className='flex flex-col gap-1.5 text-[15px]'>
                <li className='text-white/75 hover:text-white text-[16px]'><Link href="/">Food Delivery App</Link></li>
                <li className='text-white/75 hover:text-white text-[16px]'><Link href="/">School Management Software</Link></li>
                <li className='text-white/75 hover:text-white text-[16px]'><Link href="/">E-commerce Platform</Link></li>
                <li className='text-white/75 hover:text-white text-[16px]'><Link href="/">Healthcare Management System</Link></li>
                <li className='text-white/75 hover:text-white text-[16px]'><Link href="/">Real Estate Portal</Link></li>
                <li className='text-white/75 hover:text-white text-[16px]'><Link href="/">Travel Booking System</Link></li>
                <li className='text-white/75 hover:text-white text-[16px]'><Link href="/">Online Learning Platform</Link></li>
                <li className='text-white/75 hover:text-white text-[16px]'><Link href="/">Fitness Tracking App</Link></li>
                <li className='text-white/75 hover:text-white text-[16px]'><Link href="/">Restaurant Reservation System</Link></li>
                <li className='text-white/75 hover:text-white text-[16px]'><Link href="/">Inventory Management Software</Link></li>
              </ul>
            </div>
            <div className='flex flex-col gap-2'>
              <ul className='flex flex-col gap-1.5 text-[15px]'>
                <li className='text-white/75 hover:text-white text-[16px]'><Link href="/">CRM Software</Link></li>
                <li className='text-white/75 hover:text-white text-[16px]'><Link href="/">HR Management System</Link></li>
                <li className='text-white/75 hover:text-white text-[16px]'><Link href="/">Project Management Tool</Link></li>
                <li className='text-white/75 hover:text-white text-[16px]'><Link href="/">Event Management Software</Link></li>
                <li className='text-white/75 hover:text-white text-[16px]'><Link href="/">Video Conferencing App</Link></li>
                <li className='text-white/75 hover:text-white text-[16px]'><Link href="/">Payment Gateway Integration</Link></li>
                <li className='text-white/75 hover:text-white text-[16px]'><Link href="/">Logistics Management System</Link></li>
                <li className='text-white/75 hover:text-white text-[16px]'><Link href="/">Appointment Scheduling Software</Link></li>
                <li className='text-white/75 hover:text-white text-[16px]'><Link href="/">Social Media Management Tool</Link></li>
                <li className='text-white/75 hover:text-white text-[16px]'><Link href="/">Customer Support Software</Link></li>
              </ul>
            </div>
            <div className='flex flex-col gap-2'>
              <ul className='flex flex-col gap-1.5 text-[15px]'>
                <li className='text-white/75 hover:text-white text-[16px]'><Link href="/">Financial Planning Software</Link></li>
                <li className='text-white/75 hover:text-white text-[16px]'><Link href="/">Document Management System</Link></li>
                <li className='text-white/75 hover:text-white text-[16px]'><Link href="/">Email Marketing Tool</Link></li>
                <li className='text-white/75 hover:text-white text-[16px]'><Link href="/">Survey Management Software</Link></li>
                <li className='text-white/75 hover:text-white text-[16px]'><Link href="/">Virtual Event Platform</Link></li>
                <li className='text-white/75 hover:text-white text-[16px]'><Link href="/">Property Management Software</Link></li>
                <li className='text-white/75 hover:text-white text-[16px]'><Link href="/">Fleet Management System</Link></li>
                <li className='text-white/75 hover:text-white text-[16px]'><Link href="/">Warehouse Management Software</Link></li>
                <li className='text-white/75 hover:text-white text-[16px]'><Link href="/">Online Banking System</Link></li>
                <li className='text-white/75 hover:text-white text-[16px]'><Link href="/">Telemedicine Platform</Link></li>
                <li className='text-white/75 hover:text-white text-[16px]'><Link href="/">Task Manager</Link></li>
                <li className='text-white/75 hover:text-white text-[16px]'><Link href="/">Data Scraping Tool</Link></li>
              </ul>
            </div>
          </div>
        )}

        {/* resources dropdown */}
        {resourcesOpen && (
          <div
            onMouseEnter={() => cancelClose('resources')}
            onMouseLeave={closeResources}
            className='bg-gradient-to-r top-24 w-[300px] ml-[250px] absolute from-black/20 to-black/30 backdrop-blur-xl rounded-lg grid grid-cols-2 p-8'
          >
            <div className='flex flex-col gap-2'>
              <ul className='flex flex-col gap-1.5 text-[15px]'>
                <li className='text-white/75 hover:text-white text-[16px]'><Link href="/news">News</Link></li>
                <li className='text-white/75 hover:text-white text-[16px]'><Link href="/">Case Studies</Link></li>
              </ul>
            </div>
          </div>
        )}

        <div className='md:block xl:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className='w-10 h-10' /> : <Menu className='w-10 h-10' />}
        </div>

        {
          isMenuOpen &&
          <div className='bg-gradient-to-r top-28 w-full left-0 absolute from-black/20 to-black/30 backdrop-blur-xl rounded-lg p-6'>

            <ul className='flex flex-col items-center gap-3 text-[18px] pt-4'>
              <Link href="/all-services" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <li className='cursor-pointer'>Services</li>
              </Link>

              <Link href="/technologies" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <li className='cursor-pointer'>Technologies</li>
              </Link>

              <Link href="/solutions" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <li className='cursor-pointer0'>Solutions</li>
              </Link>

              <Link href="/news" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <li className='cursor-pointer'>Resources</li>
              </Link>

              <Link href="/portfolio" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <li className='cursor-pointer'>Portfolio</li>
              </Link>

              <Link href="/contact" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <li className='cursor-pointer'>Contact us</li>
              </Link>

              <Link href="/about" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <li className='cursor-pointer'>About us</li>
              </Link>

              <div className='flex gap-1.5 flex-col mt-4 w-full'>
                <Link href="/contact" className='relative rounded-lg bg-gradient-to-r from-black/20 to-black/30 backdrop-blur-md text-white flex gap-2 items-center justify-center text-[14px] p-5 uppercase group xl:hidden sm:flex'>
                  <Headset className='w-5 h-5 z-10' />
                  <span className='z-10'>Talk to us</span>

                  {/* Left to right fill animation */}
                  <div className="absolute inset-0 bg-[#141DEA] rounded-md origin-left scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100 z-0"></div>
                </Link>

                <Link
                  href="/contact"
                  className='relative rounded-lg bg-gradient-to-r from-black/20 to-black/30 backdrop-blur-md text-white flex gap-2 items-center justify-center text-[14px] p-5 uppercase group xl:hidden sm:flex'
                >
                  <Calendar className='w-5 h-5 z-10' />
                  <span className='z-10'>Schedule a Call</span>
                  {/* Left to right fill animation */}
                  <div className="absolute inset-0 bg-[#141DEA] rounded-md origin-left scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100 z-0"></div>
                </Link>
              </div>
            </ul>

          </div>
        }

        <div className='flex gap-1.5'>
          <Link href="/contact" className='relative rounded-lg bg-gradient-to-r from-black/20 to-black/30 backdrop-blur-md text-white flex gap-2 items-center justify-center text-[14px] p-5 uppercase group sm:hidden xl:flex'>
            <Headset className='w-5 h-5 z-10' />
            <span className='z-10'>Talk to us</span>

            {/* Left to right fill animation */}
            <div className="absolute inset-0 bg-[#141DEA] rounded-md origin-left scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100 z-0"></div>
          </Link>

          <Link
            onMouseEnter={() => setIsScheduleCallHovered(true)}
            onMouseLeave={() => setIsScheduleCallHovered(false)}
            href="/contact"
            className='relative rounded-lg bg-gradient-to-r from-black/20 to-black/30 backdrop-blur-md text-white flex gap-2 items-center justify-center text-[14px] p-5 uppercase group sm:hidden xl:flex'
          >
            <Calendar className='w-5 h-5 z-10' />

            {
              isScheduleCallHovered &&
              <span className='z-10'>Schedule a Call</span>
            }

            {/* Left to right fill animation */}
            <div className="absolute inset-0 bg-[#141DEA] rounded-md origin-left scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100 z-0"></div>
          </Link>
        </div>


      </section>
    </nav>
  )
}

export default NavBar
