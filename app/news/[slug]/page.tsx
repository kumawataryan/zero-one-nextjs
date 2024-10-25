import React from 'react'
import Image from 'next/image'
import NewsImage from "../../../public/new-image.png"
import NewsCard from '@/components/News/NewsCard'
import { BLOGS } from "../../../constants/index"

const NewsDetailPage = () => {
    return (
        <div>

            <div className='flex gap-2 flex-col relative sm:mt-24 sm:p-6'>
                <h1 className='xl:absolute xl:text-[96px] sm:text-[32px] xl:leading-[96px] md:leading-[32px] font-semibold xl:w-4/6 sm:w-full bottom-0 right-0'>Zero-One&apos;s dynamic site revamp selected as Site of the Day&apos; by AWWWARDS</h1>
                <Image src={NewsImage} width={100} height={100} alt='new-image' className='xl:w-4/6 sm:w-full sm:mt-6' unoptimized></Image>
                <div className='xl:p-6'>
                    <p className='p-1 uppercase border-b border-black text-black w-fit'>21 AUG 2024</p>
                    <p className='p-1 uppercase border-b border-black cursor-pointer text-black w-fit'>Design</p>
                </div>
            </div>

            {/* Content here */}
            <div className='flex gap-8 xl:mt-48 sm:mt-8 sm:w-full md:w-3/4'>
                <div className='flex-1 p-6'>
                    {/* Introduction Section */}
                    <section id="introduction" className='mb-8'>
                        <h2 className='text-xl font-bold mb-4'>Introduction</h2>
                        <p className='mb-4'>
                            We are thrilled to announce that Zero-One&apos;s dynamic site revamp has been selected as the Site of the Day&apos; by AWWWARDS. This recognition is a testament to our commitment to excellence in design and user experience. Our team worked tirelessly to create a seamless and aesthetically appealing website that not only meets the standards of modern web design but also pushes the boundaries.
                        </p>
                        <p className='mb-4'>
                            The journey to receiving this award has been an exciting one. From conceptualizing the design to implementing cutting-edge technologies, we ensured that every aspect of the site was meticulously crafted. The result is a dynamic, user-centered experience that reflects the creativity and expertise of our team. In this blog post, well dive into the details of the design process, showcase some of the sites most innovative features, and discuss what this recognition means for Zero-One.
                        </p>
                        <blockquote className='italic border-l-4 border-gray-300 pl-4'>
                            Excellence in design is not just about aesthetics, its about creating meaningful interactions.
                        </blockquote>
                    </section>

                    {/* Gallery Section */}
                    <section id="gallery" className='mb-8'>
                        <p className='mb-4'>
                            Below are some of the highlights from the sites visual design. Each image captures the unique design elements that contributed to the sites overall success. From color palettes to typography, these visuals showcase the care and attention to detail that went into crafting this experience.
                        </p>
                        <div className='grid grid-cols-2 gap-4'>
                            <Image src="/portfolio/p-1.png" width={300} height={200} alt='Gallery Image 1' className='w-full h-full object-cover' unoptimized />
                            <Image src="/portfolio/p-2.png" width={300} height={200} alt='Gallery Image 2' className='w-full h-full object-cover' unoptimized />
                            <Image src="/portfolio/p-1.png" width={300} height={200} alt='Gallery Image 1' className='w-full h-full object-cover' unoptimized />
                            <Image src="/portfolio/p-3.jpg" width={300} height={200} alt='Gallery Image 1' className='w-full h-full object-cover' unoptimized />
                        </div>
                    </section>

                    {/* Video Presentation Section */}
                    <section id="video-presentation" className='mb-8'>
                        <p className='mb-4'>
                            To truly appreciate the sites interactive features and smooth animations, weve put together a video presentation. This video showcases how the different elements come together to create an engaging and immersive experience. Watch below to see the site in action:
                        </p>
                        <div className='mb-4'>
                            <video controls className='w-full'>
                                <source src="/about-video.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </section>

                    {/* Conclusion Section */}
                    <section id="conclusion" className='mb-8'>
                        <h2 className='text-xl font-bold mb-4'>Conclusion</h2>
                        <p>
                            We are incredibly proud of this achievement and look forward to continuing to push the boundaries of web design. Thank you to AWWWARDS for this honor, and to our team for their hard work and dedication. This recognition not only reflects the quality of the work we do but also motivates us to keep exploring new ideas, technologies, and creative solutions.
                        </p>
                        <p className='mt-4'>
                            As we move forward, we&apos;re excited to apply the same level of innovation and craftsmanship to future projects. This is just the beginning. Stay tuned for more updates as we continue to break new ground in the world of web design.
                        </p>
                    </section>
                </div>

                <div className='w-1/4 sticky top-0 p-6 hidden'>
                    <ul className='list-disc list-inside space-y-4 text-lg'>
                        <li>
                            <a
                                href="#introduction"
                                className='text-blue-500 hover:underline transition duration-300 ease-in-out transform hover:scale-105 focus:text-indigo-700'
                            >
                                Introduction
                            </a>
                        </li>
                        <li>
                            <a
                                href="#gallery"
                                className='text-blue-500 hover:underline transition duration-300 ease-in-out transform hover:scale-105 focus:text-indigo-700'
                            >
                                Gallery
                            </a>
                        </li>
                        <li>
                            <a
                                href="#video-presentation"
                                className='text-blue-500 hover:underline transition duration-300 ease-in-out transform hover:scale-105 focus:text-indigo-700'
                            >
                                Video Presentation
                            </a>
                        </li>
                        <li>
                            <a
                                href="#conclusion"
                                className='text-blue-500 hover:underline transition duration-300 ease-in-out transform hover:scale-105 focus:text-indigo-700'
                            >
                                Conclusion
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='p-6 pt-28 mt-8 bg-[#F2F2F2]'>
                <h1 className='text-[64px] leading-[64px] font-semibold w-4/6 mb-20'>Similar News</h1>
                {BLOGS.map((blog: { date: string; image: string; title: string; link: string }, index: React.Key | null | undefined) => (
                    <NewsCard
                        key={index}
                        date={blog.date}
                        image={blog.image}
                        title={blog.title}
                        link={blog.link}
                    />
                ))}
            </div>


        </div>
    )
}

export default NewsDetailPage