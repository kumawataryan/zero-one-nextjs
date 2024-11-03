import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import BottomBar from "@/components/BottomBar";
// import { Inter } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster"
import localFont from 'next/font/local'
const violet = localFont({ src: "../public/fonts/violet.ttf" })
// const geist = localFont({ src: "../public/fonts/geist.ttf" })
// const nohemi = localFont({ src: "../public/fonts/nohemi.ttf" })

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Zero One Agency",
  description: "At 01, we build high-performance digital products powered by advanced tech and thoughtful design, driving innovation with a unique, opposite perspective.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={violet.className}
      >
        <div className="flex justify-center">
          <NavBar />
        </div>
        {children}
        <BottomBar />
        <Toaster />
      </body>
    </html>
  );
}
