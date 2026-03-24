import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/utils";
import { fetchNewsArticleBySlug, fetchNewsSlugs } from "@/lib/news";
import { absoluteUrl, buildMetadata, SITE_NAME } from "@/lib/seo";
import "../../../css/download-description.css";

interface Params {
  params: Promise<{ slug: string }>;
}

export const revalidate = 3600;
export const dynamicParams = true;

function toExcerpt(content: string | undefined, fallback = ""): string {
  if (!content) {
    return fallback;
  }

  const plainText = content.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  return plainText.slice(0, 160);
}

export async function generateStaticParams() {
  const slugs = await fetchNewsSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const article = await fetchNewsArticleBySlug(slug);

  if (!article) {
    return buildMetadata({
      title: "Article Not Found",
      description: "The requested article could not be found.",
      path: `/news/${slug}`,
      noIndex: true,
    });
  }

  const title = `${article.title} | News`;
  const description = toExcerpt(
    article.content,
    "Read this article from 01 Agency."
  );
  const path = `/news/${article.slug}`;
  const image = article.imageUrl ?? "/blogs/blog-image-1.png";

  return {
    ...buildMetadata({
      title,
      description,
      path,
      image,
      type: "article",
    }),
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: SITE_NAME,
      locale: "en_US",
      type: "article",
      publishedTime: article.publishedAt,
      authors: article.author ? [article.author] : undefined,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
  };
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params;
  const article = await fetchNewsArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const articleUrl = absoluteUrl(`/news/${article.slug}`);
  const encodedArticleUrl = encodeURIComponent(articleUrl);
  const articleDescription = toExcerpt(
    article.content,
    "Read this article from 01 Agency."
  );

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: articleDescription,
    image: article.imageUrl ? [article.imageUrl] : undefined,
    author: {
      "@type": "Person",
      name: article.author ?? SITE_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/zero-one-logo.svg"),
      },
    },
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    mainEntityOfPage: articleUrl,
  };

  return (
    <div className="p-6 w-full flex flex-col items-center justify-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <div className="flex flex-col gap-0.5 items-start justify-center mt-[180px] xl:w-[800px] sm:w-full">
        <Link
          href="/news"
          className="font-normal text-[15px] opacity-50 hover:opacity-100"
        >
          Blog
        </Link>

        <h1 className="xl:text-[48px] sm:text-[36px] font-semibold mt-6 xl:leading-[56px] sm:leading-[42px]">
          {article.title}
        </h1>

        <div className="xl:mt-6 sm:mt-4 flex xl:flex-row sm:flex-col justify-between w-full xl:items-center sm:items-start sm:gap-8">
          <div className="flex gap-3 items-center">
            <Image
              src={article.imageUrl ?? "/blogs/blog-image-1.png"}
              className="rounded-full w-16 h-16 object-cover"
              width={100}
              height={100}
              alt={article.title}
              unoptimized
            />
            <div className="flex flex-col gap-0.5">
              <p className="font-bold text-[18px]">
                {article.author ?? SITE_NAME}
              </p>
              <p className="text-[14px]">
                {formatDate(article.publishedAt ?? new Date().toISOString())} •{" "}
                {article.readTime ?? 5} min read
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <Link
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodedArticleUrl}`}
              target="_blank"
              className="flex items-center gap-1 p-1.5 bg-[#00C27B]/20 rounded-full"
            >
              <Image
                src="/icons/facebook.svg"
                width={24}
                height={24}
                alt="Share on Facebook"
              />
            </Link>
            <Link
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedArticleUrl}`}
              target="_blank"
              className="flex items-center gap-1 p-1.5 bg-[#00C27B]/20 rounded-full"
            >
              <Image
                src="/icons/linkedin.svg"
                width={24}
                height={24}
                alt="Share on LinkedIn"
              />
            </Link>
            <Link
              href={`https://twitter.com/intent/tweet?url=${encodedArticleUrl}`}
              target="_blank"
              className="flex items-center gap-1 p-1.5 bg-[#00C27B]/20 rounded-full"
            >
              <Image
                src="/icons/twitter.svg"
                width={24}
                height={24}
                alt="Share on X"
              />
            </Link>
          </div>
        </div>
      </div>

      <Image
        src={article.imageUrl ?? "/blogs/blog-image-1.png"}
        width={1000}
        height={1000}
        alt={article.title}
        className="xl:mt-12 sm:mt-10 xl:px-64 sm:px-0 w-full sm:aspect-3/2 xl:aspect-16/9 object-cover"
        unoptimized
      />

      <div className="w-full xl:w-[800px] mt-12">
        <div
          className="custom-content"
          dangerouslySetInnerHTML={{ __html: article.content || "" }}
        />
      </div>
    </div>
  );
}
