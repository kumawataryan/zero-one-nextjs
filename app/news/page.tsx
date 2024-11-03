import NewsCard from '@/components/News/NewsCard'
import React from 'react'
import { BLOGS } from "../../Constants/index"
import { Plus } from 'lucide-react'

const NewsPage = () => {
    return (
        <div>

            {/* head */}
            <div className='p-6'>
                <h1 className='text-[128px] font-bold leading-[128px] mt-28'>News</h1>
                {/* categories */}
                <ul className='flex space-x-4 mt-6 overflow-x-scroll text-nowrap'>
                    <li className='text-sm font-bold'>All <sup>54</sup></li>
                    <li className='text-sm font-normal hover:font-bold cursor-pointer'>Design <sup>12</sup></li>
                    <li className='text-sm font-normal hover:font-bold cursor-pointer'>Development <sup>12</sup></li>
                    <li className='text-sm font-normal hover:font-bold cursor-pointer'>Marketing <sup>9</sup></li>
                    <li className='text-sm font-normal hover:font-bold cursor-pointer'>Ai <sup>7</sup></li>
                    <li className='text-sm font-normal hover:font-bold cursor-pointer'>Fintech <sup>4</sup></li>
                    <li className='text-sm font-normal hover:font-bold cursor-pointer'>Business <sup>2</sup></li>
                </ul>
            </div>

            <div className='px-6 mt-6 grid xl:grid-cols-4 lg:grid-cols-2 sm:grid-cols-1 gap-8 gap-y-12'>
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

            <div className='flex w-full items-center justify-center py-32'>
                <div className='flex gap-2 text-[28px] font-semibold p-10 px-20 items-center hover:bg-[#f4f4f4] hover:cursor-pointer rounded-lg'><Plus size={24} className='w-10 h-10' />Load More</div>
            </div>


        </div>
    )
}

export default NewsPage