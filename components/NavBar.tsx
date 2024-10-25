'use client'

import React, { useState, useRef } from 'react'
import { Button } from './ui/button'
import { Headset, Menu, X } from 'lucide-react'
import Link from 'next/link'

const NavBar = () => {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [technologiesOpen, setTechnologiesOpen] = useState(false)

  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const technologiesTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
              className='bg-gradient-to-r top-24 w-full left-0 absolute from-white/60 to-white/70 backdrop-blur-md rounded-lg grid grid-cols-5 p-8'
            >

              <div className='flex flex-col gap-4'>
                <p className='font-bold uppercase'>Design & Branding</p>
                <ul>
                  <li><Link href="ui-ux-design">UI/UX Design</Link></li>
                  <li><Link href="graphic-design">Graphic Design</Link></li>
                  <li><Link href="logo-brand-identity">Logo & Brand Identity</Link></li>
                  <li><Link href="packaging-design">Packaging Design</Link></li>
                  <li><Link href="3d-modelling-rendering">3D Modelling & Rendering</Link></li>
                  <li><Link href="3d-animation">3D Animation</Link></li>
                </ul>
              </div>
              <div className='flex flex-col gap-4'>
                <p className='font-bold uppercase'>Development & Technology</p>
                <ul>
                  <li><Link href="/software-development">Software Development</Link></li>
                  <li><Link href="/ecommerce-development">Ecommerce Development</Link></li>
                  <li><Link href="/game-development">Game Development</Link></li>
                  <li><Link href="/blockchain-development">Blockchain Development</Link></li>
                  <li><Link href="/ai-services">AI Services</Link></li>
                  <li><Link href="/wordpress-development">Wordpress Development</Link></li>
                  <li><Link href="/shopify-development">Shopify Development</Link></li>
                </ul>
              </div>
              <div className='flex flex-col gap-4'>
                <p className='font-bold uppercase'>Digital Marketing & Management</p>
                <ul>
                  <li><Link href="/digital-marketing">Digital Marketing</Link></li>
                  <li><Link href="/social-media-marketing">Social Media Marketing</Link></li>
                  <li><Link href="/ecommerce-management">E-commerce Management</Link></li>
                  <li><Link href="/lead-generation">Lead Generation</Link></li>
                  <li><Link href="/marketing-strategy">Marketing Strategy</Link></li>
                </ul>
              </div>
              <div className='flex flex-col gap-4'>
                <p className='font-bold uppercase'>Consulting & Support</p>
                <ul>
                  <li><Link href="/tech-consultation">Tech Consultation</Link></li>
                  <li><Link href="/maintenance-support">Maintenance & Support</Link></li>
                  <li><Link href="/staff-augmentation">Staff Augmentation</Link></li>
                  <li><Link href="/ai-for-business">AI for Business</Link></li>
                  <li><Link href="/blockchain-crypto">Blockchain & Crypto</Link></li>
                </ul>
              </div>
              <div className='flex flex-col gap-4'>
                <p className='font-bold uppercase'>Data & Analytics</p>
                <ul>
                  <li><Link href="/data-scraping">Data Scraping</Link></li>
                  <li><Link href="/ai-for-business">AI for Business</Link></li>
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
              className='bg-gradient-to-r top-24 w-full left-0 absolute from-white/60 to-white/70 backdrop-blur-md rounded-lg grid grid-cols-5 p-8 gap-16'
            >
              {/* Row 1 */}
              <div className='flex flex-col gap-4'>
                <p className='font-bold uppercase'>Design & Prototyping</p>
                <ul>
                  <li>Figma</li>
                  <li>Adobe Photoshop</li>
                  <li>Adobe Illustrator</li>
                  <li>Sketch</li>
                  <li>InVision</li>
                </ul>
              </div>

              <div className='flex flex-col gap-4'>
                <p className='font-bold uppercase'>Development Frameworks</p>
                <ul>
                  <li>React.js</li>
                  <li>Angular</li>
                  <li>Vue.js</li>
                  <li>Node.js</li>
                  <li>Django</li>
                </ul>
              </div>

              <div className='flex flex-col gap-4'>
                <p className='font-bold uppercase'>E-commerce Platforms</p>
                <ul>
                  <li>Shopify</li>
                  <li>WordPress</li>
                  <li>WooCommerce</li>
                  <li>Magento</li>
                  <li>BigCommerce</li>
                </ul>
              </div>

              <div className='flex flex-col gap-4'>
                <p className='font-bold uppercase'>Marketing & Analytics</p>
                <ul>
                  <li>Google Analytics</li>
                  <li>Google Ads</li>
                  <li>Facebook Ads</li>
                  <li>HubSpot</li>
                  <li>Mailchimp</li>
                </ul>
              </div>

              <div className='flex flex-col gap-4'>
                <p className='font-bold uppercase'>Cloud Services</p>
                <ul>
                  <li>AWS</li>
                  <li>Google Cloud</li>
                  <li>Microsoft Azure</li>
                  <li>Heroku</li>
                  <li>DigitalOcean</li>
                </ul>
              </div>

              {/* Row 2 */}
              <div className='flex flex-col gap-4'>
                <p className='font-bold uppercase'>Content Management Systems</p>
                <ul>
                  <li>Drupal</li>
                  <li>Wix</li>
                  <li>Squarespace</li>
                  <li>Joomla</li>
                  <li>Contentful</li>
                </ul>
              </div>

              <div className='flex flex-col gap-4'>
                <p className='font-bold uppercase'>DevOps & CI/CD Tools</p>
                <ul>
                  <li>Docker</li>
                  <li>Kubernetes</li>
                  <li>Jenkins</li>
                  <li>Travis CI</li>
                  <li>CircleCI</li>
                </ul>
              </div>

              <div className='flex flex-col gap-4'>
                <p className='font-bold uppercase'>Blockchain Technologies</p>
                <ul>
                  <li>Ethereum</li>
                  <li>Hyperledger</li>
                  <li>Solidity</li>
                  <li>Ripple</li>
                  <li>Binance Smart Chain</li>
                </ul>
              </div>

              <div className='flex flex-col gap-4'>
                <p className='font-bold uppercase'>AI & Machine Learning Tools</p>
                <ul>
                  <li>TensorFlow</li>
                  <li>PyTorch</li>
                  <li>Scikit-Learn</li>
                  <li>OpenAI</li>
                  <li>Kaggle</li>
                </ul>
              </div>

              <div className='flex flex-col gap-4'>
                <p className='font-bold uppercase'>Project Management Tools</p>
                <ul>
                  <li>Jira</li>
                  <li>Trello</li>
                  <li>Asana</li>
                  <li>Slack</li>
                  <li>Notion</li>
                </ul>
              </div>

            </div>
          )
        }

        <div className='md:block xl:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </div>

        {
          isMenuOpen &&
          <div className='bg-gradient-to-r top-16 w-full left-0 absolute from-white/60 to-white/70 backdrop-blur-md rounded-lg p-6'>

            <ul className='flex flex-col gap-4'>
              <Link href="/services" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
              
              <Link href="/about" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <li className='cursor-pointer'>About us</li>
              </Link>
            </ul>

          </div>
        }

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
