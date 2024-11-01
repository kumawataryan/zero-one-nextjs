import React from 'react'
import Image from 'next/image'
import NewsImage from "../../../public/new-image.png"
import NewsCard from '@/components/News/NewsCard'
import { BLOGS } from "../../../Constants/index"

const NewsDetailPage = () => {
    return (
        <div>

            <Image src={NewsImage} width={100} height={100} alt='new-image' className='w-full h-[50vh] object-cover' unoptimized></Image>

            <div>
                <div className='xl:w-4/6 p-6 xl:mt-8 sm:mt-4'>
                    <h1 className='xl:text-[96px] sm:text-[36px] xl:leading-[96px] sm:leading-[48px] font-semibold sm:w-full'>Zero-One&apos;s dynamic site revamp selected as Site of the Day&apos; by AWWWARDS</h1>
                    <div className='mt-8'>
                        <p className='p-1 uppercase border-b border-black text-black w-fit'>21 AUG 2024</p>
                        <p className='p-1 uppercase border-b border-black cursor-pointer text-black w-fit'>Design</p>
                    </div>
                </div>
            </div>

            {/* Content here */}
            <div className='flex gap-8 w-full p-6'>

                {/* Content Index on the left */}
                <div className='w-1/5 bg-[#161616] p-10 text-white h-fit rounded-xl sticky top-32 sm:hidden xl:block'>
                    <h2 className='text-[24px] font-semibold mb-3'>Contents</h2>
                    <ul className='space-y-2'>
                        <li><a href="#introduction" className='text-white/60 hover:text-white text-[18px]' data-section="introduction">Introduction</a></li>
                        <li><a href="#gallery" className='text-white/60 hover:text-white text-[18px]' data-section="gallery">Gallery</a></li>
                        <li><a href="#video-presentation" className='text-white/60 hover:text-white text-[18px]' data-section="video-presentation">Video Presentation</a></li>
                        <li><a href="#conclusion" className='text-white/60 hover:text-white text-[18px]' data-section="conclusion">Conclusion</a></li>
                    </ul>
                </div>

                {/* content */}
                <div className='flex-1'>
                    {/* Introduction Section */}
                    <section id="introduction" className='mb-8'>
                        <h2 className='x:text-[36px] sm:text-[24px] font-bold mb-4'>Introduction</h2>
                        <p className='mb-4 text-[20px] text-black/80 leading-normal'>
                            We are thrilled to announce that Zero-One&apos;s dynamic site revamp has been selected as the Site of the Day&apos; by AWWWARDS. This recognition is a testament to our commitment to excellence in design and user experience. Our team worked tirelessly to create a seamless and aesthetically appealing website that not only meets the standards of modern web design but also pushes the boundaries.
                        </p>
                        <p className='mb-4 text-[20px] text-black/80 leading-normal'>
                            The journey to receiving this award has been an exciting one. From conceptualizing the design to implementing cutting-edge technologies, we ensured that every aspect of the site was meticulously crafted. The result is a dynamic, user-centered experience that reflects the creativity and expertise of our team. In this blog post, well dive into the details of the design process, showcase some of the sites most innovative features, and discuss what this recognition means for Zero-One.
                        </p>
                        <blockquote className='italic border-l-4 border-gray-300 pl-4'>
                            Excellence in design is not just about aesthetics, its about creating meaningful interactions.
                        </blockquote>
                    </section>

                    {/* Gallery Section */}
                    <section id="gallery" className='mb-8'>
                        <p className='mb-4 text-[20px] text-black/80 leading-normal'>
                            Below are some of the highlights from the sites visual design. Each image captures the unique design elements that contributed to the sites overall success. From color palettes to typography, these visuals showcase the care and attention to detail that went into crafting this experience.
                        </p>
                        <div className='grid grid-cols-2 gap-4 mt-4'>
                            <Image src="/portfolio/p-1.png" width={300} height={200} alt='Gallery Image 1' className='w-full h-full object-cover' unoptimized />
                            <Image src="/portfolio/p-2.png" width={300} height={200} alt='Gallery Image 2' className='w-full h-full object-cover' unoptimized />
                        </div>
                    </section>

                    {/* Video Presentation Section */}
                    <section id="video-presentation" className='mb-8'>
                        <p className='mb-4 text-[20px] text-black/80 leading-normal'>
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
                        <h2 className='x:text-[36px] sm:text-[24px] font-bold mb-4'>Conclusion</h2>
                        <p className='mb-4 text-[20px] text-black/80 leading-normal'>
                            We are incredibly proud of this achievement and look forward to continuing to push the boundaries of web design. Thank you to AWWWARDS for this honor, and to our team for their hard work and dedication. This recognition not only reflects the quality of the work we do but also motivates us to keep exploring new ideas, technologies, and creative solutions.
                        </p>
                        <p className='mb-4 text-[20px] text-black/80 leading-normal'>
                            As we move forward, we&apos;re excited to apply the same level of innovation and craftsmanship to future projects. This is just the beginning. Stay tuned for more updates as we continue to break new ground in the world of web design.
                        </p>
                    </section>
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