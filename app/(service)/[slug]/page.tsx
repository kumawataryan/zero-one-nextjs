import ContactForm from '@/components/ContactForm'
import HeroService from '@/components/Hero/HeroService'
import PortfolioCard from '@/components/Portfolio/PortfolioCard'
import PricingSection from '@/components/PricingSection'
import SubServiceCard from '@/components/Service/SubServiceCard'
import React from 'react'

const ServicePage = () => {
    return (
        <div>
            <HeroService />

            <div className='p-6 md:mt-32 sm:mt-12'>

                <div>
                    <h2 className='sm:text-[32px] xl:text-[64px] font-semibold leading-tight'>UI/UX Design Services</h2>
                    <p className='opacity-60 max-w-[500px] mt-4 mb-12'>Our clientele ranges from a new app startup to a multinational business wanting to revamp their website for our UI UX design services.</p>
                </div>

                <SubServiceCard
                    name="Pre MVP Concept"
                    short_information="Design initial design concepts and user flows to validate your idea and ensure a strong foundation before building your Minimum Viable Product (MVP)."
                    key_points={`Information Architecture
                        User Journey Mapping
                        Prototyping
                        Wireframing
                        Usability Testing
                        User Personas
                        Market Research`}
                />

                <SubServiceCard
                    name="UI/UX Design"
                    short_information="Create visually appealing and user-friendly interfaces that enhance user experience and engagement."
                    key_points={`User Research
                        Wireframing
                        Prototyping
                        Visual Design
                        Usability Testing
                        Interaction Design`}
                />

                <SubServiceCard
                    name="Redesign UI/UX"
                    short_information="Revamp existing designs to improve usability, aesthetics, and overall user satisfaction."
                    key_points={`Heuristic Evaluation
                        User Feedback Analysis
                        Redesign Prototyping
                        Visual Enhancements
                        Usability Testing
                        Implementation Support`}
                />

                <SubServiceCard
                    name="UI/UX Audit"
                    short_information="Conduct a thorough analysis of your current UI/UX to identify areas of improvement and provide actionable recommendations."
                    key_points={`Heuristic Evaluation
                        User Testing
                        Analytics Review
                        Competitive Analysis
                        Recommendations Report
                        Implementation Guidance`}
                />
            </div>


            {/* Service Flow */}
            <div className='bg-[#141414] md:py-48 sm:py-24 md:mt-32 sm:mt-16 relative w-full'>
                <h3 className='sm:text-[64px] sm:leading-[64px] md:text-[128px] md:leading-[128px] font-bold text-white mx-6 z-0 absolute'>Streamlined <br />UI/UX <br />Workflow</h3>

                <div className='w-full grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 sm:px-4 md:px-16 xl:px-32 md:mt-52 sm:mt-24'>
                    <div className='flex flex-col gap-2 left-6 z-10 p-2'>
                        <p className='bg-gradient-to-r from-white/5 to-white/10 text-white p-2 px-4 rounded-lg backdrop-blur-md'>Backlog</p>
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
                                <p className='text-[14px] opacity-60 font-light'>Conduct user testing to gather feedback and insights.</p>
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

            <div className='md:py-64 sm:py-28 grid md:grid-cols-2 sm:grid-cols-1 p-6 md:gap-32 sm:gap-16'>
                <section className='flex flex-col gap-6'>
                    <h4 className='md:text-[24px] sm:text-[18px] font-semibold'>Industries we are serving:</h4>
                    <ul className='flex flex-wrap gap-2'>
                        <li className='bg-[#F2F2F2] p-4 w-fit rounded-lg font-medium text-[18px]'>Healthcare</li>
                        <li className='bg-[#F2F2F2] p-4 w-fit rounded-lg font-medium text-[18px]'>Finance</li>
                        <li className='bg-[#F2F2F2] p-4 w-fit rounded-lg font-medium text-[18px]'>Real Estate</li>
                        <li className='bg-[#F2F2F2] p-4 w-fit rounded-lg font-medium text-[18px]'>Education</li>
                        <li className='bg-[#F2F2F2] p-4 w-fit rounded-lg font-medium text-[18px]'>Entertainment</li>
                        <li className='bg-[#F2F2F2] p-4 w-fit rounded-lg font-medium text-[18px]'>Travel</li>
                        <li className='bg-[#F2F2F2] p-4 w-fit rounded-lg font-medium text-[18px]'>Retail</li>
                        <li className='bg-[#F2F2F2] p-4 w-fit rounded-lg font-medium text-[18px]'>Food & Beverage</li>
                        <li className='bg-[#F2F2F2] p-4 w-fit rounded-lg font-medium text-[18px]'>Technology</li>
                        <li className='bg-[#F2F2F2] p-4 w-fit rounded-lg font-medium text-[18px]'>Non-Profit</li>
                    </ul>

                </section>

                <section className='flex flex-col gap-6'>

                    <h4 className='md:text-[24px] sm:text-[18px] font-semibold'>Technologies we are using:</h4>
                    <ul className='flex flex-wrap gap-2'>
                        <li className='bg-[#F2F2F2] p-4 w-fit rounded-lg font-medium text-[18px]'>Figma</li>
                        <li className='bg-[#F2F2F2] p-4 w-fit rounded-lg font-medium text-[18px]'>Sketch</li>
                        <li className='bg-[#F2F2F2] p-4 w-fit rounded-lg font-medium text-[18px]'>Adobe XD</li>
                        <li className='bg-[#F2F2F2] p-4 w-fit rounded-lg font-medium text-[18px]'>InVision</li>
                        <li className='bg-[#F2F2F2] p-4 w-fit rounded-lg font-medium text-[18px]'>Zeplin</li>
                        <li className='bg-[#F2F2F2] p-4 w-fit rounded-lg font-medium text-[18px]'>Marvel</li>
                    </ul>
                </section>

            </div>

            {/* Why Invest */}
            <div className='bg-[#141414] md:py-48 sm:py-24 w-full relative'>
                <h3 className='sm:text-[64px] sm:leading-[64px] md:text-[128px] md:leading-[128px] font-bold text-white mx-6 z-0 absolute'>Why Invest <br />in UI/UX <br />Design?</h3>

                <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-2 md:mt-[200px] sm:mt-[160px] md:w-2/3 sm:w-fit md:pl-80 sm:pl-6'>
                    <div className='bg-gradient-to-r from-white/5 to-white/10 text-white p-8 rounded-md backdrop-blur-md h-fill'>
                        <p className='md:text-[20px] sm:text-[16px] font-light'>Enhanced User Satisfaction</p>
                    </div>

                    <div className='bg-gradient-to-r from-white/5 to-white/10 text-white p-8 rounded-md backdrop-blur-md h-fill'>
                        <p className='md:text-[20px] sm:text-[16px] font-light'>Increased Conversion Rates</p>
                    </div>

                    <div className='bg-gradient-to-r from-white/5 to-white/10 text-white p-8 rounded-md backdrop-blur-md h-fill'>
                        <p className='md:text-[20px] sm:text-[16px] font-light'>Reduced Development Costs</p>
                    </div>

                    <div className='bg-gradient-to-r from-white/5 to-white/10 text-white p-8 rounded-md backdrop-blur-md h-fill'>
                        <p className='md:text-[20px] sm:text-[16px] font-light'>Boost User Engagement</p>
                    </div>

                    <div className='bg-gradient-to-r from-white/5 to-white/10 text-white p-8 rounded-md backdrop-blur-md h-fill'>
                        <p className='md:text-[20px] sm:text-[16px] font-light'>Improve Brand Loyalty</p>
                    </div>
                </div>
            </div>

            <PricingSection />


            {/* Portfolio Section */}
            <div className='p-6 md:mt-28 sm:mt-18'>
                <section className='flex flex-col justify-left items-left mb-6'>
                    <div className='flex flex-col gap-2'>
                        <h2 className='sm:text-[24px] xl:text-[64px] font-semibold leading-tight'>Our UI/UX Portfolio</h2>
                        <p className='max-w-[500px]'>Welcome to our collection of UI/UX Design Projects. At ZERO-ONE, we understand the importance of a seamless user experience and striking visual appeal.</p>
                    </div>
                </section>

                <div className="columns-1 sm:columns-1 md:columns-2 lg:columns-2 xl:columns-3 2xl:columns-4 gap-8 space-y-8 xl:mt-10 sm:mt-4">
                    <PortfolioCard
                        name="Project Name"
                        link="/portfolio/project-name"
                        image="/portfolio/p-1.png"
                        tags={[
                            { tagLink: '/portfolio/design', tagName: 'Design' },
                            { tagLink: '/portfolio/ongoing', tagName: 'Ongoing' }
                        ]}
                    />

                    <PortfolioCard
                        name="Project Name"
                        link="/portfolio/project-name"
                        image="/portfolio/p-2.png"
                        tags={[
                            { tagLink: '/portfolio/design', tagName: 'Design' },
                            { tagLink: '/portfolio/ongoing', tagName: 'Ongoing' }
                        ]}
                    />

                    <PortfolioCard
                        name="Project Name"
                        link="/portfolio/project-name"
                        image="/portfolio/p-3.jpg"
                        tags={[
                            { tagLink: '/portfolio/design', tagName: 'Design' },
                            { tagLink: '/portfolio/ongoing', tagName: 'Ongoing' }
                        ]}
                    />

                    <PortfolioCard
                        name="Project Name"
                        link="/portfolio/project-name"
                        image="/portfolio/p-2.png"
                        tags={[
                            { tagLink: '/portfolio/design', tagName: 'Design' },
                            { tagLink: '/portfolio/ongoing', tagName: 'Ongoing' }
                        ]}
                    />
                </div>
            </div>

            {/* Contact Form */}
            <div className='mt-32'>
                <ContactForm />
            </div>
        </div>
    )
}

export default ServicePage