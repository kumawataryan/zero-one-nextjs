import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Case Studies",
    template: "%s | Case Studies | 01 Agency",
  },
  description:
    "Read 01 Agency case studies and project outcomes across industries.",
};

export default function CaseStudyLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
