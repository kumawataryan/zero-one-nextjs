import React from 'react'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import BlogHeroImage from "../../../public/Portfolio/p-2.png"

const NewsDetailPage = () => {
    return (
        <div className='p-6 w-full flex flex-col items-center justify-center'>

            <div className='flex flex-col gap-0.5 items-start justify-center mt-[180px] w-[1200px]'>
                <div className='flex gap-1 items-center'>
                    <Link href="/news" className='font-normal text-[15px]'>Blog</Link>
                    <ChevronRight className='w-4 h-4' />
                    <Link href="/news" className='font-normal text-[15px]'>Ai</Link>
                </div>

                <h1 className='text-[48px] font-semibold mt-10 leading-[48px]'>Zero One Agency Debuts Next-Gen AI Solutions</h1>

                <div className='mt-10 flex justify-between w-full items-center'>
                    <div className='flex gap-3 items-center'>
                        <Image src={BlogHeroImage} className='rounded-full w-16 h-16 object-cover' width={100} height={100} alt='blog author image'></Image>
                        <div className='flex flex-col gap-0.5'>
                            <p className='font-bold text-[18px]'>Aryan Kumawat</p>
                            <p className='text-[14px]'>02 Nov 2024 • 5 min read</p>
                        </div>
                    </div>

                    <div className='flex gap-2'>
                        <Link href="https://zeroone.agency/news/zero-one-agency-debuts-next-gen-ai-solutions" target="_blank" rel="noopener noreferrer" className='flex items-center gap-1 p-1.5 bg-[#00C27B]/20 rounded-full'>
                            <Image src="/icons/share-link.svg" width={24} height={24} alt="Share Link Icon" />
                        </Link>
                        <Link href="https://www.facebook.com/sharer/sharer.php?u=https://zeroone.agency/news/zero-one-agency-debuts-next-gen-ai-solutions" target="_blank" rel="noopener noreferrer" className='flex items-center gap-1 p-1.5 bg-[#00C27B]/20 rounded-full' >
                            <Image src="/icons/facebook.svg" width={24} height={24} alt="Facebook Icon" />
                        </Link>
                        <Link href="https://www.linkedin.com/shareArticle?mini=true&url=https://zeroone.agency/news/zero-one-agency-debuts-next-gen-ai-solutions" target="_blank" rel="noopener noreferrer" className='flex items-center gap-1 p-1.5 bg-[#00C27B]/20 rounded-full'>
                            <Image src="/icons/linkedin.svg" width={24} height={24} alt="LinkedIn Icon" />
                        </Link>
                        <Link href="https://twitter.com/intent/tweet?url=https://zeroone.agency/news/zero-one-agency-debuts-next-gen-ai-solutions" target="_blank" rel="noopener noreferrer" className='flex items-center gap-1 p-1.5 bg-[#00C27B]/20 rounded-full'>
                            <Image src="/icons/twitter.svg" width={24} height={24} alt="Twitter Icon" />
                        </Link>
                    </div>

                </div>
            </div>

            <Image src={BlogHeroImage} width={300} height={200} alt='blog-hero-image' className='aspect-16/9 object-cover w-full mt-16 px-64' unoptimized></Image>

            {/* content */}
            <div className='flex-1 px-64 mt-24'>
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
    )
}

export default NewsDetailPage