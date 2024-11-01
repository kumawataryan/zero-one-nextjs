'use client'

import React, { useState, useRef } from 'react'
import { Headset, Menu, X } from 'lucide-react'
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
    <nav className='w-[98vw] p-4 md:px-10 sm:px-4 bg-gradient-to-r from-black/20 to-black/30 back fixed flex justify-between items-center rounded-xl mt-4 z-50 text-white'>
      {/* navbar left section */}
      <section className='flex items-center gap-2'>
        <Link href="/">
          <Image src="/zero-one-logo.svg" width={50} height={50} alt="zero-one-logo" className='w-10 h-10'/>
        </Link>
      </section>

      {/* navbar right section */}
      <section className='flex gap-8 items-center'>
        {/* links */}
        <ul className='flex space-x-5 sm:hidden xl:flex text-[14px]'>
          <li
            onMouseEnter={openServices}
            onMouseLeave={closeServices}
            className='cursor-pointer opacity-60 hover:opacity-90 text-white'
          >
            Services
          </li>
          <li
            onMouseEnter={openTechnologies}
            onMouseLeave={closeTechnologies}
            className='cursor-pointer opacity-60 hover:opacity-90 text-white'
          >
            Technologies
          </li>

          <li
            onMouseEnter={openSolutions}
            onMouseLeave={closeSolutions}
            className='cursor-pointer opacity-60 hover:opacity-90 text-white'
          >
            Solutions
          </li>

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
                <p className='font-normal uppercase text-white/70 text-[15px]'>Design & Branding</p>
                <ul className='flex flex-col gap-1.5 text-[15px]'>
                  <li className='text-white/40 hover:text-white/75'><Link href="ui-ux-design">UI/UX Design</Link></li>
                  <li className='text-white/40 hover:text-white/75'><Link href="graphic-design">Graphic Design</Link></li>
                  <li className='text-white/40 hover:text-white/75'><Link href="logo-brand-identity">Logo & Brand Identity</Link></li>
                  <li className='text-white/40 hover:text-white/75'><Link href="packaging-design">Packaging Design</Link></li>
                  <li className='text-white/40 hover:text-white/75'><Link href="3d-modelling-rendering">3D Modelling & Rendering</Link></li>
                  <li className='text-white/40 hover:text-white/75'><Link href="3d-animation">3D Animation</Link></li>
                </ul>
              </div>
              <div className='flex flex-col gap-2'>
                <p className='font-normal uppercase text-white/70 text-[15px]'>Development & Technology</p>
                <ul className='flex flex-col gap-1.5 text-[15px]'>
                  <li className='text-white/40 hover:text-white/75'><Link href="/software-development">Software Development</Link></li>
                  <li className='text-white/40 hover:text-white/75'><Link href="/ecommerce-development">Ecommerce Development</Link></li>
                  <li className='text-white/40 hover:text-white/75'><Link href="/game-development">Game Development</Link></li>
                  <li className='text-white/40 hover:text-white/75'><Link href="/blockchain-development">Blockchain Development</Link></li>
                  <li className='text-white/40 hover:text-white/75'><Link href="/ai-services">AI Services</Link></li>
                  <li className='text-white/40 hover:text-white/75'><Link href="/wordpress-development">Wordpress Development</Link></li>
                  <li className='text-white/40 hover:text-white/75'><Link href="/shopify-development">Shopify Development</Link></li>
                  <li className='text-white/40 hover:text-white/75'><Link href="/webflow-development">Webflow Development</Link></li>
                </ul>
              </div>
              <div className='flex flex-col gap-2'>
                <p className='font-normal uppercase text-white/70 text-[15px]'>Digital Marketing & Management</p>
                <ul className='flex flex-col gap-1.5 text-[15px]'>
                  <li className='text-white/40 hover:text-white/75'><Link href="/digital-marketing">Digital Marketing</Link></li>
                  <li className='text-white/40 hover:text-white/75'><Link href="/social-media-marketing">Social Media Marketing</Link></li>
                  <li className='text-white/40 hover:text-white/75'><Link href="/ecommerce-management">E-commerce Management</Link></li>
                  <li className='text-white/40 hover:text-white/75'><Link href="/lead-generation">Lead Generation</Link></li>
                  <li className='text-white/40 hover:text-white/75'><Link href="/marketing-strategy">Marketing Strategy</Link></li>
                </ul>
              </div>
              <div className='flex flex-col gap-2'>
                <p className='font-normal uppercase text-white/70 text-[15px]'>Consulting & Support</p>
                <ul className='flex flex-col gap-1.5 text-[15px]'>
                  <li className='text-white/40 hover:text-white/75'><Link href="/tech-consultation">Tech Consultation</Link></li>
                  <li className='text-white/40 hover:text-white/75'><Link href="/staff-augmentation">Staff Augmentation</Link></li>
                  <li className='text-white/40 hover:text-white/75'><Link href="/ai-for-business">AI for Business</Link></li>
                  <li className='text-white/40 hover:text-white/75'><Link href="/blockchain-crypto">Blockchain & Crypto</Link></li>
                </ul>
              </div>
              <div className='flex flex-col gap-2'>
                <p className='font-normal uppercase text-white/70 text-[15px]'>Data & Analytics</p>
                <ul className='flex flex-col gap-1.5 text-[15px]'>
                  <li className='text-white/40 hover:text-white/75'><Link href="/data-scraping">Data Scraping</Link></li>
                  <li className='text-white/40 hover:text-white/75'><Link href="/ai-for-business">AI for Business</Link></li>
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
              className='bg-gradient-to-r top-24 w-full left-0 absolute from-black/20 to-black/30 backdrop-blur-xl rounded-lg grid grid-cols-5 p-10 gap-16'
            >
              {/* Row 1 */}
              <div className='flex flex-col gap-2'>
                <p className='font-normal uppercase text-white/70 text-[15px]'>Design & Prototyping</p>
                <ul className='flex flex-col gap-1.5 text-[15px]'>
                  <li className='text-white/40 hover:text-white/75'>Figma</li>
                  <li className='text-white/40 hover:text-white/75'>Adobe Photoshop</li>
                  <li className='text-white/40 hover:text-white/75'>Adobe Illustrator</li>
                  <li className='text-white/40 hover:text-white/75'>Sketch</li>
                  <li className='text-white/40 hover:text-white/75'>InVision</li>
                </ul>
              </div>

              <div className='flex flex-col gap-2'>
                <p className='font-normal uppercase text-white/70 text-[15px]'>Development Frameworks</p>
                <ul className='flex flex-col gap-1.5 text-[15px]'>
                  <li className='text-white/40 hover:text-white/75'>React.js</li>
                  <li className='text-white/40 hover:text-white/75'>Angular</li>
                  <li className='text-white/40 hover:text-white/75'>Vue.js</li>
                  <li className='text-white/40 hover:text-white/75'>Node.js</li>
                  <li className='text-white/40 hover:text-white/75'>Django</li>
                </ul>
              </div>

              <div className='flex flex-col gap-2'>
                <p className='font-normal uppercase text-white/70 text-[15px]'>E-commerce Platforms</p>
                <ul className='flex flex-col gap-1.5 text-[15px]'>
                  <li className='text-white/40 hover:text-white/75'>Shopify</li>
                  <li className='text-white/40 hover:text-white/75'>WordPress</li>
                  <li className='text-white/40 hover:text-white/75'>WooCommerce</li>
                  <li className='text-white/40 hover:text-white/75'>Magento</li>
                  <li className='text-white/40 hover:text-white/75'>BigCommerce</li>
                </ul>
              </div>

              <div className='flex flex-col gap-2'>
                <p className='font-normal uppercase text-white/70 text-[15px]'>Marketing & Analytics</p>
                <ul className='flex flex-col gap-1.5 text-[15px]'>
                  <li className='text-white/40 hover:text-white/75'>Google Analytics</li>
                  <li className='text-white/40 hover:text-white/75'>Google Ads</li>
                  <li className='text-white/40 hover:text-white/75'>Facebook Ads</li>
                  <li className='text-white/40 hover:text-white/75'>HubSpot</li>
                  <li className='text-white/40 hover:text-white/75'>Mailchimp</li>
                </ul>
              </div>

              <div className='flex flex-col gap-2'>
                <p className='font-normal uppercase text-white/70 text-[15px]'>Cloud Services</p>
                <ul className='flex flex-col gap-1.5 text-[15px]'>
                  <li className='text-white/40 hover:text-white/75'>AWS</li>
                  <li className='text-white/40 hover:text-white/75'>Google Cloud</li>
                  <li className='text-white/40 hover:text-white/75'>Microsoft Azure</li>
                  <li className='text-white/40 hover:text-white/75'>Heroku</li>
                  <li className='text-white/40 hover:text-white/75'>DigitalOcean</li>
                </ul>
              </div>

              {/* Row 2 */}
              <div className='flex flex-col gap-2'>
                <p className='font-normal uppercase text-white/70 text-[15px]'>Content Management Systems</p>
                <ul className='flex flex-col gap-1.5 text-[15px]'>
                  <li className='text-white/40 hover:text-white/75'>Drupal</li>
                  <li className='text-white/40 hover:text-white/75'>Wix</li>
                  <li className='text-white/40 hover:text-white/75'>Squarespace</li>
                  <li className='text-white/40 hover:text-white/75'>Joomla</li>
                  <li className='text-white/40 hover:text-white/75'>Contentful</li>
                </ul>
              </div>

              <div className='flex flex-col gap-2'>
                <p className='font-normal uppercase text-white/70 text-[15px]'>DevOps & CI/CD Tools</p>
                <ul className='flex flex-col gap-1.5 text-[15px]'>
                  <li className='text-white/40 hover:text-white/75'>Docker</li>
                  <li className='text-white/40 hover:text-white/75'>Kubernetes</li>
                  <li className='text-white/40 hover:text-white/75'>Jenkins</li>
                  <li className='text-white/40 hover:text-white/75'>Travis CI</li>
                  <li className='text-white/40 hover:text-white/75'>CircleCI</li>
                </ul>
              </div>

              <div className='flex flex-col gap-2'>
                <p className='font-normal uppercase text-white/70 text-[15px]'>Blockchain Technologies</p>
                <ul className='flex flex-col gap-1.5 text-[15px]'>
                  <li className='text-white/40 hover:text-white/75'>Ethereum</li>
                  <li className='text-white/40 hover:text-white/75'>Hyperledger</li>
                  <li className='text-white/40 hover:text-white/75'>Solidity</li>
                  <li className='text-white/40 hover:text-white/75'>Ripple</li>
                  <li className='text-white/40 hover:text-white/75'>Binance Smart Chain</li>
                </ul>
              </div>

              <div className='flex flex-col gap-2'>
                <p className='font-normal uppercase text-white/70 text-[15px]'>AI & Machine Learning Tools</p>
                <ul className='flex flex-col gap-1.5 text-[15px]'>
                  <li className='text-white/40 hover:text-white/75'>TensorFlow</li>
                  <li className='text-white/40 hover:text-white/75'>PyTorch</li>
                  <li className='text-white/40 hover:text-white/75'>Scikit-Learn</li>
                  <li className='text-white/40 hover:text-white/75'>OpenAI</li>
                  <li className='text-white/40 hover:text-white/75'>Kaggle</li>
                </ul>
              </div>

              <div className='flex flex-col gap-2'>
                <p className='font-normal uppercase text-white/70 text-[15px]'>Project Management Tools</p>
                <ul className='flex flex-col gap-1.5 text-[15px]'>
                  <li className='text-white/40 hover:text-white/75'>Jira</li>
                  <li className='text-white/40 hover:text-white/75'>Trello</li>
                  <li className='text-white/40 hover:text-white/75'>Asana</li>
                  <li className='text-white/40 hover:text-white/75'>Slack</li>
                  <li className='text-white/40 hover:text-white/75'>Notion</li>
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
                <li className='text-white/40 hover:text-white/75'><Link href="/food-delivery-app">Food Delivery App</Link></li>
                <li className='text-white/40 hover:text-white/75'><Link href="/school-management-software">School Management Software</Link></li>
                <li className='text-white/40 hover:text-white/75'><Link href="/ecommerce-platform">E-commerce Platform</Link></li>
                <li className='text-white/40 hover:text-white/75'><Link href="/healthcare-management-system">Healthcare Management System</Link></li>
                <li className='text-white/40 hover:text-white/75'><Link href="/real-estate-portal">Real Estate Portal</Link></li>
                <li className='text-white/40 hover:text-white/75'><Link href="/travel-booking-system">Travel Booking System</Link></li>
                <li className='text-white/40 hover:text-white/75'><Link href="/online-learning-platform">Online Learning Platform</Link></li>
                <li className='text-white/40 hover:text-white/75'><Link href="/fitness-tracking-app">Fitness Tracking App</Link></li>
                <li className='text-white/40 hover:text-white/75'><Link href="/restaurant-reservation-system">Restaurant Reservation System</Link></li>
                <li className='text-white/40 hover:text-white/75'><Link href="/inventory-management-software">Inventory Management Software</Link></li>
              </ul>
            </div>
            <div className='flex flex-col gap-2'>
              <ul className='flex flex-col gap-1.5 text-[15px]'>
                <li className='text-white/40 hover:text-white/75'><Link href="/crm-software">CRM Software</Link></li>
                <li className='text-white/40 hover:text-white/75'><Link href="/hr-management-system">HR Management System</Link></li>
                <li className='text-white/40 hover:text-white/75'><Link href="/project-management-tool">Project Management Tool</Link></li>
                <li className='text-white/40 hover:text-white/75'><Link href="/event-management-software">Event Management Software</Link></li>
                <li className='text-white/40 hover:text-white/75'><Link href="/video-conferencing-app">Video Conferencing App</Link></li>
                <li className='text-white/40 hover:text-white/75'><Link href="/payment-gateway-integration">Payment Gateway Integration</Link></li>
                <li className='text-white/40 hover:text-white/75'><Link href="/logistics-management-system">Logistics Management System</Link></li>
                <li className='text-white/40 hover:text-white/75'><Link href="/appointment-scheduling-software">Appointment Scheduling Software</Link></li>
                <li className='text-white/40 hover:text-white/75'><Link href="/social-media-management-tool">Social Media Management Tool</Link></li>
                <li className='text-white/40 hover:text-white/75'><Link href="/customer-support-software">Customer Support Software</Link></li>
              </ul>
            </div>
            <div className='flex flex-col gap-2'>
              <ul className='flex flex-col gap-1.5 text-[15px]'>
                <li className='text-white/40 hover:text-white/75'><Link href="/financial-planning-software">Financial Planning Software</Link></li>
                <li className='text-white/40 hover:text-white/75'><Link href="/document-management-system">Document Management System</Link></li>
                <li className='text-white/40 hover:text-white/75'><Link href="/email-marketing-tool">Email Marketing Tool</Link></li>
                <li className='text-white/40 hover:text-white/75'><Link href="/survey-management-software">Survey Management Software</Link></li>
                <li className='text-white/40 hover:text-white/75'><Link href="/virtual-event-platform">Virtual Event Platform</Link></li>
                <li className='text-white/40 hover:text-white/75'><Link href="/property-management-software">Property Management Software</Link></li>
                <li className='text-white/40 hover:text-white/75'><Link href="/fleet-management-system">Fleet Management System</Link></li>
                <li className='text-white/40 hover:text-white/75'><Link href="/warehouse-management-software">Warehouse Management Software</Link></li>
                <li className='text-white/40 hover:text-white/75'><Link href="/online-banking-system">Online Banking System</Link></li>
                <li className='text-white/40 hover:text-white/75'><Link href="/telemedicine-platform">Telemedicine Platform</Link></li>
                <li className='text-white/40 hover:text-white/75'><Link href="/task-manager">Task Manager</Link></li>
                <li className='text-white/40 hover:text-white/75'><Link href="/data-scraping-tool">Data Scraping Tool</Link></li>
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
                <li className='text-white/40 hover:text-white/75'><Link href="/news">News</Link></li>
                <li className='text-white/40 hover:text-white/75'><Link href="/case-studies">Case Studies</Link></li>
              </ul>
            </div>
          </div>
        )}

        <div className='md:block xl:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </div>

        {
          isMenuOpen &&
          <div className='bg-gradient-to-r top-16 w-full left-0 absolute from-black/20 to-black/30 backdrop-blur-md rounded-lg p-6'>

            <ul className='flex flex-col gap-2'>
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

              <hr className='mt-2 opacity-40' />

              <Link href="/contact" className='relative rounded-lg bg-gradient-to-r from-black/20 to-black/30 backdrop-blur-md text-white flex gap-2 items-center justify-center text-[14px] p-5 uppercase group mt-2'>
                <Headset className='w-5 h-5 z-10' />
                <span className='z-10'>Free video consult</span>

                {/* Left to right fill animation */}
                <div className="absolute inset-0 bg-[#141DEA] rounded-md origin-left scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100 z-0"></div>
              </Link>
            </ul>

          </div>
        }

        <Link href="/contact" className='relative rounded-lg bg-gradient-to-r from-black/20 to-black/30 backdrop-blur-md text-white flex gap-2 items-center justify-center text-[14px] p-5 uppercase group sm:hidden xl:flex'>
          <Headset className='w-5 h-5 z-10' />
          <span className='z-10'>Free video consult</span>

          {/* Left to right fill animation */}
          <div className="absolute inset-0 bg-[#141DEA] rounded-md origin-left scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100 z-0"></div>
        </Link>

      </section>
    </nav>
  )
}

export default NavBar
