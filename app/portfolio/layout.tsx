import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Portfolio",
    template: "%s | Portfolio | 01 Agency",
  },
  description:
    "Browse portfolio work delivered by 01 Agency across digital products, apps, and growth.",
};

export default function PortfolioLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
