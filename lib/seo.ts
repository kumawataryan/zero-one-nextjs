import type { Metadata } from "next";

export const SITE_NAME = "01 Agency";
export const DEFAULT_DESCRIPTION =
  "01 Agency builds high-performance digital products, websites, mobile apps, and growth systems for startups and businesses.";
export const DEFAULT_OG_IMAGE = "/new-image.png";

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.0101.agency";

export const SITE_URL = rawSiteUrl.startsWith("http")
  ? rawSiteUrl
  : `https://${rawSiteUrl}`;

export const DEFAULT_KEYWORDS = [
  "digital agency",
  "website development",
  "app development",
  "UI UX design",
  "SEO services",
  "branding",
  "AI services",
  "01 Agency",
];

export function absoluteUrl(path = "/"): string {
  return new URL(path, SITE_URL).toString();
}

type BuildMetadataInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  keywords?: string[];
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  keywords = DEFAULT_KEYWORDS,
  noIndex = false,
}: BuildMetadataInput): Metadata {
  const url = path ? absoluteUrl(path) : SITE_URL;

  return {
    title,
    description,
    keywords,
    alternates: path
      ? {
          canonical: path,
        }
      : undefined,
    openGraph: {
      title,
      description,
      siteName: SITE_NAME,
      locale: "en_US",
      type,
      url,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : undefined,
  };
}
