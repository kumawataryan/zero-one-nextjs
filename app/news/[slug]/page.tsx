"use client"

import React from 'react'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import BlogHeroImage from "../../../public/Portfolio/p-2.png"

import { useState, useEffect } from "react"
import { Post } from "@/types"
import { useParams } from 'next/navigation'
import { getPostDetails } from "@/api/posts"
import "../../../css/download-description.css"


const NewsDetailPage = () => {

    const [postData, setPostData] = useState<Post | null>(null)
    // const [isLoading, setIsLoading] = useState(false)
    // const [error, setError] = useState<Error | null>(null)/
    const { slug } = useParams<{ slug: string }>()

    useEffect(() => {
        const fetchPostData = async () => {
            // setIsLoading(true)
            try {
                // console.log("ORIGINAL SLUG: ", slug)
                const postDetailRes = await getPostDetails(slug)

                // console.log("POST DETAILS: ", postDetailRes)
                const postData = await postDetailRes
                setPostData(postData)

                // console.log("POST DATA: ", postData)

            } catch (err) {
                // setError(err as Error)
                console.log(err)
            } finally {
                // setIsLoading(false)
                console.log("finished loading")
            }
        }
        fetchPostData()
    }, [])

    const postContent = postData?.content

    return (
        <div className='p-6 w-full flex flex-col items-center justify-center'>

            <div className='flex flex-col gap-0.5 items-start justify-center mt-[180px] xl:w-[1200px] sm:w-full'>
                <div className='flex gap-1 items-center'>
                    <Link href="/news" className='font-normal text-[15px]'>Blog</Link>
                    <ChevronRight className='w-4 h-4' />
                    <Link href="/news" className='font-normal text-[15px]'>{postData?.title}</Link>
                </div>

                <h1 className='xl:text-[48px] sm:text-[36px] font-semibold mt-10 xl:leading-[56px] sm:leading-[42px]'>{postData?.title}</h1>

                <div className='xl:mt-10 sm:mt-4 flex xl:flex-row sm:flex-col justify-between w-full xl:items-center sm:items-start sm:gap-8'>
                    <div className='flex gap-3 items-center'>
                        <Image src={BlogHeroImage} className='rounded-full w-16 h-16 object-cover' width={100} height={100} alt={postData?.title || ''}></Image>
                        <div className='flex flex-col gap-0.5'>
                            <p className='font-bold text-[18px]'>Aryan Kumawat</p>
                            <p className='text-[14px]'>02 Nov 2024 • {postData?.read_time} min read | {postData?.author}</p>
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

            <Image src={postData?.featured_image || ''} width={300} height={200} alt={postData?.title || ''} className='object-cover w-full xl:mt-16 sm:mt-10 xl:px-64 sm:px-0 sm:aspect-3/2 xl:aspect-16/9' unoptimized></Image>

            <div className='w-full xl:w-[1200px]'>
                {/* content */}
                <div
                    className="custom-content mt-20"
                    dangerouslySetInnerHTML={{ __html: postContent || '' }}
                />

                {/* post tags */}
                <div className="flex flex-wrap gap-1 mt-20">
                    {
                        postData?.tags.map((tag) => (
                            <div key={tag.name} className="border text-[15px] px-4 p-1 rounded-full w-fit">{tag?.name}</div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default NewsDetailPage