import NewsCard from '@/components/News/NewsCard'
import React from 'react'
import { BLOGS } from "../../Constants/index"
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

const NewsPage = () => {
    return (
        <div>

            {/* head */}
            <div className='p-6'>
                <h1 className='text-[128px] font-bold leading-[128px] mt-28'>News</h1>
                {/* categories */}
                <ul className='flex space-x-4 mt-2 overflow-x-scroll text-nowrap'>
                    <li className='text-sm font-bold'>All <sup>54</sup></li>
                    <li className='text-sm font-normal hover:font-bold cursor-pointer'>Design <sup>12</sup></li>
                    <li className='text-sm font-normal hover:font-bold cursor-pointer'>Development <sup>12</sup></li>
                    <li className='text-sm font-normal hover:font-bold cursor-pointer'>Marketing <sup>9</sup></li>
                    <li className='text-sm font-normal hover:font-bold cursor-pointer'>Ai <sup>7</sup></li>
                    <li className='text-sm font-normal hover:font-bold cursor-pointer'>Fintech <sup>4</sup></li>
                    <li className='text-sm font-normal hover:font-bold cursor-pointer'>Business <sup>2</sup></li>
                </ul>
            </div>

            <div className='p-6 mt-8'>
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

            <div className='flex w-full items-center justify-center py-16'>
                <Button variant="ghost" className='flex gap-2 text-[20px] font-semibold p-10'><Plus size={24} className='w-8 h-8' />Load More</Button>
            </div>


        </div>
    )
}

export default NewsPage