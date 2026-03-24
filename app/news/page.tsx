import type { Metadata } from "next";
import NewsCard from "@/components/News/NewsCard";
import { fetchNewsArticles } from "@/lib/news";
import { buildMetadata } from "@/lib/seo";

export const revalidate = 3600;

export const metadata: Metadata = buildMetadata({
  title: "News and Insights",
  description:
    "Read the latest updates, technology insights, and digital growth articles from 01 Agency.",
  path: "/news",
});

export default async function NewsPage() {
  const articles = await fetchNewsArticles();

  return (
    <div>
      <div className="p-6">
        <h1 className="text-[128px] font-bold leading-[128px] mt-28">News</h1>
      </div>

      <div className="px-6 grid xl:grid-cols-4 lg:grid-cols-2 sm:grid-cols-1 gap-8 gap-y-12">
        {articles.map((article) => (
          <NewsCard
            key={article.$id}
            title={article.title}
            image={article.imageUrl ?? "/blogs/blog-image-1.png"}
            slug={article.slug}
            date={article.publishedAt ?? new Date().toISOString()}
          />
        ))}
      </div>
    </div>
  );
}
