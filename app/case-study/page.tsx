import CaseStudies from '@/components/News/CaseStudies';
import { CASE_STUDIES } from '@/Constants';
import React from 'react'

const CaseStudiesPage = () => {
    return (
        <div className='p-6 mb-24'>

            <div className='flex flex-col md:flex-row w-full justify-between mt-40 sm:gap-2'>
                <h1 className='sm:text-[32px] xl:text-[64px] font-semibold xl:leading-[64px] sm:leading-[32px]'>Case Studies</h1>

                <p className='opacity-60 max-w-[500px] text-[20px] leading-tight mt-2'>Explore our case studies to see how we’ve helped businesses achieve growth through innovative solutions. Each project highlights our strategic approach, technical expertise, and dedication to delivering measurable results for our clients.</p>
            </div>

            <div className='grid sm:gap-y-12 xl:gap-0 mt-20'>
                {CASE_STUDIES.map((blog: { date: string; image: string; title: string; link: string }, index: React.Key | null | undefined) => (
                    <CaseStudies
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

export default CaseStudiesPage