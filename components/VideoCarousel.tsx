"use client"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import VideoReview from "./VideoReview"

export function VideoCarousel() {

    return (
        <Carousel
            className="w-full mt-36"
            opts={{
                align: "start",
                loop: true,
            }}
        >
            <CarouselContent className="">
                {Array.from({ length: 10 }).map((_, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5">
                        <VideoReview />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}