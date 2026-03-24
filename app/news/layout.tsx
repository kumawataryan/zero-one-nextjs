import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "News",
    template: "%s | 01 Agency",
  },
  description:
    "Latest news, insights, and trends from 01 Agency on technology, product, and growth.",
};

export default function NewsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
