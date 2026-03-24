import type { Metadata } from "next";
import React from 'react'
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
    title: "Business Solutions",
    description:
        "Explore digital solutions from 01 Agency designed to solve growth, product, and technology challenges.",
    path: "/solutions",
});

const SolutionsPage = () => {
    return (
        <div className='p-6 mb-24'>

            <div className='flex flex-col md:flex-row w-full justify-between mt-32 sm:gap-2'>
                <h1 className='sm:text-[32px] xl:text-[64px] font-semibold xl:leading-[64px] sm:leading-[32px]'>Solutions</h1>

                <p className='opacity-60 max-w-[500px] text-[20px] leading-tight mt-2'>At 01, we leverage a wide array of advanced technologies to deliver innovative solutions tailored to our clients needs.</p>
            </div>

        </div>
    )
}

export default SolutionsPage
