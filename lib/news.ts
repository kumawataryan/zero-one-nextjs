import { Databases, Query } from "appwrite";
import { client } from "@/app/appwrite";

const NEWS_DATABASE_ID =
  process.env.APPWRITE_NEWS_DATABASE_ID ?? "67a89e7a003a22f66b06";
const NEWS_COLLECTION_ID =
  process.env.APPWRITE_NEWS_COLLECTION_ID ?? "67a89e88002322634591";

const db = new Databases(client);

export type NewsArticle = {
  $id: string;
  title: string;
  slug: string;
  imageUrl?: string;
  author?: string;
  content?: string;
  readTime?: number;
  publishedAt?: string;
};

export async function fetchNewsArticles(limit = 100): Promise<NewsArticle[]> {
  try {
    const response = await db.listDocuments(NEWS_DATABASE_ID, NEWS_COLLECTION_ID, [
      Query.limit(limit),
      Query.orderDesc("publishedAt"),
    ]);

    return response.documents as unknown as NewsArticle[];
  } catch {
    return [];
  }
}

export async function fetchNewsArticleBySlug(
  slug: string
): Promise<NewsArticle | null> {
  try {
    const response = await db.listDocuments(NEWS_DATABASE_ID, NEWS_COLLECTION_ID, [
      Query.equal("slug", slug),
      Query.limit(1),
    ]);

    return (response.documents[0] as unknown as NewsArticle) ?? null;
  } catch {
    return null;
  }
}

export async function fetchNewsSlugs(): Promise<string[]> {
  const articles = await fetchNewsArticles(500);
  return articles
    .map((article) => article.slug)
    .filter((slug): slug is string => Boolean(slug));
}
