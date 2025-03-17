// "use client"

// import NewsCard from '@/components/News/NewsCard'
// import React from 'react'
// // import { BLOGS } from "../../Constants/index"
// import { ChevronLeft, ChevronRight, Plus } from 'lucide-react'

// import { useState, useEffect } from "react"
// import { useRouter } from 'next/navigation'
// import { Post } from '@/types'
// import { Button } from '@/components/ui/button'

// const NewsPage = () => {

//     const [posts, setPosts] = useState<Post[]>([])
//     const [page, setPage] = useState(1)
//     const [totalPages, setTotalPages] = useState(1)
//     const router = useRouter()

//     useEffect(() => {
//         fetchProducts()
//         updateUrl()
//     }, [page])

//     const fetchProducts = async () => {
//         const response = await fetch(`http://208.109.231.72:7000/api/blogs/?page=${page}`);
//         const data = await response.json()

//         console.log(data.results)

//         setPosts(data.results)
//         setTotalPages(Math.ceil(data.count / 24))
//     }

//     const nextPage = () => {
//         setPage(page + 1)
//     }

//     const prevPage = () => {
//         setPage(page - 1)
//     }

//     const updateUrl = () => {
//         router.push(`/news?page=${page}`)
//     }

//     // const featuredPosts = posts.filter(item => {
//     //     return item.is_featured == true
//     // })

//     return (
//         <div>

// {/* head */}
// <div className='p-6'>
//     <h1 className='text-[128px] font-bold leading-[128px] mt-28'>News</h1>
//     {/* categories */}
//     <ul className='flex space-x-4 mt-6 overflow-x-scroll text-nowrap'>
//         <li className='text-sm font-bold'>All <sup>54</sup></li>
//         <li className='text-sm font-normal hover:font-bold cursor-pointer'>Design <sup>12</sup></li>
//         <li className='text-sm font-normal hover:font-bold cursor-pointer'>Development <sup>12</sup></li>
//         <li className='text-sm font-normal hover:font-bold cursor-pointer'>Marketing <sup>9</sup></li>
//         <li className='text-sm font-normal hover:font-bold cursor-pointer'>Ai <sup>7</sup></li>
//         <li className='text-sm font-normal hover:font-bold cursor-pointer'>Fintech <sup>4</sup></li>
//         <li className='text-sm font-normal hover:font-bold cursor-pointer'>Business <sup>2</sup></li>
//     </ul>
// </div>

{/* <div className='px-6 mt-6 grid xl:grid-cols-4 lg:grid-cols-2 sm:grid-cols-1 gap-8 gap-y-12'>
    {posts.map(post => (
        <NewsCard
            key={post.id}
            title={post.title}
            image={post.featured_image}
            slug={post.slug}
            date={post.created_at}
        />
    ))} */}

// </div>

//             <div className='flex w-full items-center justify-center py-32'>
//                 <div className='flex gap-2 text-[28px] font-semibold p-10 px-20 items-center hover:bg-[#f4f4f4] hover:cursor-pointer rounded-lg'><Plus size={24} className='w-10 h-10' />Load More</div>
//             </div>


//             <div className='w-full flex justify-between items-center px-4 mt-4 hidden'>
//                 <div className='flex gap-2'>
//                     <Button className='gap-1 items-center text-[13px]' size="lg" onClick={prevPage} disabled={page === 1}><ChevronLeft className='w-4 h-4' />Prev</Button>
//                     <Button className='gap-1 items-center text-[13px]' size="lg" onClick={nextPage} disabled={page === totalPages}>Next<ChevronRight className='w-4 h-4' /></Button>
//                 </div>
//                 <p className='text-[#737373] text-[13px] font-bold'>Page: [{page}/{totalPages}]</p>
//             </div>


//         </div>
//     )
// }

// export default NewsPage

import { client } from "../appwrite";
import { Databases } from "appwrite";
import NewsCard from "@/components/News/NewsCard";

// Instantiate the Databases service
const db = new Databases(client);

export default async function NewsPage() {
    // Replace with your actual database and collection IDs
    const databaseId = "67a89e7a003a22f66b06";
    const collectionId = "67a89e88002322634591";

    // Fetch news articles from Appwrite
    const response = await db.listDocuments(databaseId, collectionId);
    const articles = response.documents;

    return (
        <div>
            {/* head */}
            <div className='p-6'>
                <h1 className='text-[128px] font-bold leading-[128px] mt-28'>News</h1>
            </div>

            <div className='px-6 grid xl:grid-cols-4 lg:grid-cols-2 sm:grid-cols-1 gap-8 gap-y-12'>
                {articles.map(article => (
                    <NewsCard
                        key={article.$id}
                        title={article.title}
                        image={article.imageUrl}
                        slug={article.slug}
                        date={article.publishedAt}
                    />
                ))}
            </div>
        </div>
    );
}
