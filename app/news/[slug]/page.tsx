import { client } from "../../appwrite";
import { Databases, Query } from "appwrite";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from '@/lib/utils';
import "../../../css/download-description.css"

// Instantiate the Databases service
const db = new Databases(client);

interface Params {
  params: Promise<{ slug: string }>;
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params;
  const databaseId = "67a89e7a003a22f66b06";
    const collectionId = "67a89e88002322634591";

    // Fetch articles where the 'slug' field matches the provided slug
    const response = await db.listDocuments(
        databaseId,
        collectionId,
        [
            Query.equal("slug", slug)
        ]
    );

    // Assuming 'response.documents' contains the matching documents
    const article = response.documents.length > 0 ? response.documents[0] : null;

    if (!article) {
        // Handle the case where no article is found
        return <div>Article not found</div>;
    }

    return (
        <div className='p-6 w-full flex flex-col items-center justify-center'>

            <div className='flex flex-col gap-0.5 items-start justify-center mt-[180px] xl:w-[800px] sm:w-full'>

                <Link href="/news" className='font-normal text-[15px] opacity-50 hover:opacity-100'>Blog</Link>

                <h1 className='xl:text-[48px] sm:text-[36px] font-semibold mt-6 xl:leading-[56px] sm:leading-[42px]'>{article?.title}</h1>

                <div className='xl:mt-6 sm:mt-4 flex xl:flex-row sm:flex-col justify-between w-full xl:items-center sm:items-start sm:gap-8'>
                    <div className='flex gap-3 items-center'>
                        <Image src={article.imageUrl} className='rounded-full w-16 h-16 object-cover' width={100} height={100} alt={article?.title || ''}></Image>
                        <div className='flex flex-col gap-0.5'>
                            <p className='font-bold text-[18px]'>{article.author}</p>
                            <p className='text-[14px]'>{formatDate(article.publishedAt)} • {article?.readTime} min read</p>
                        </div>
                    </div>

                    <div className='flex gap-2'>
                        <Link href={`https://www.facebook.com/sharer/sharer.php?u=https://www.0101.agency/news/${article.slug}`} target="_blank" className='flex items-center gap-1 p-1.5 bg-[#00C27B]/20 rounded-full'>
                            <Image src="/icons/facebook.svg" width={24} height={24} alt="Facebook Icon" />
                        </Link>
                        <Link href={`https://www.linkedin.com/shareArticle?mini=true&url=https://www.0101.agency/news/${article.slug}`} target="_blank" className='flex items-center gap-1 p-1.5 bg-[#00C27B]/20 rounded-full'>
                            <Image src="/icons/linkedin.svg" width={24} height={24} alt="LinkedIn Icon" />
                        </Link>
                        <Link href={`https://twitter.com/intent/tweet?url=https://www.0101.agency/news/${article.slug}`} target="_blank" className='flex items-center gap-1 p-1.5 bg-[#00C27B]/20 rounded-full'>
                            <Image src="/icons/twitter.svg" width={24} height={24} alt="Twitter Icon" />
                        </Link>
                    </div>

                </div>
            </div>

            <Image src={article?.imageUrl || ''} width={1000} height={1000} alt={article?.title || ''} className='xl:mt-12 sm:mt-10 xl:px-64 sm:px-0 w-full sm:aspect-3/2 xl:aspect-16/9 object-cover' unoptimized></Image>

            <div className='w-full xl:w-[800px] mt-12'>

                {/* content */}
                <div
                    className="custom-content"
                    dangerouslySetInnerHTML={{ __html: article.content || '' }}
                />
            </div>
        </div>
    );
}
