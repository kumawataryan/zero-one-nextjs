"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useRef } from "react"

type PortfolioItem = {
  name: string
  image: string
}

type PortfolioScrollerProps = {
  items: PortfolioItem[]
}

export function PortfolioScroller({ items }: PortfolioScrollerProps) {
  const scrollerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    const scroller = scrollerRef.current
    if (!scroller) return

    scroller.scrollBy({
      left: direction === "left" ? -scroller.clientWidth * 0.8 : scroller.clientWidth * 0.8,
      behavior: "smooth",
    })
  }

  return (
    <div className="mt-10 w-full">
      <div
        ref={scrollerRef}
        className="flex gap-4 overflow-x-auto scroll-smooth pb-4 text-left [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <div
            key={item.name}
            className="shrink-0 basis-[78vw] sm:basis-[44vw] md:basis-[31vw] lg:basis-[23vw] xl:basis-[calc((100%_-_5rem)/4.5)]"
          >
            <div className="relative h-[220px] overflow-hidden rounded-md bg-[#F0F0F0]">
              <Image
                src={item.image}
                alt={`${item.name} placeholder portfolio preview`}
                fill
                unoptimized
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-[16px] font-medium mt-3 uppercase">{item.name}</h3>
              <div className="mt-2 flex flex-wrap justify-left gap-1">
                <span className="uppercase bg-transparent border border-black p-0.5 px-2 text-black text-[12px]">
                  Shopify
                </span>
                <span className="uppercase bg-transparent border border-black p-0.5 px-2 text-black text-[12px]">
                  Ecommerce
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
            <div className="mb-4 mt-8 flex justify-center gap-2">
        <button
          type="button"
          onClick={() => scroll("left")}
          className="h-11 w-11 rounded-full bg-black text-white flex items-center justify-center"
          aria-label="Scroll portfolio left"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => scroll("right")}
          className="h-11 w-11 rounded-full bg-black text-white flex items-center justify-center"
          aria-label="Scroll portfolio right"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
