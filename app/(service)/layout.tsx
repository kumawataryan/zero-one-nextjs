import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Services",
    template: "%s | Services | 01 Agency",
  },
  description:
    "Explore 01 Agency services across design, engineering, AI, and growth marketing.",
};

export default function ServicesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
