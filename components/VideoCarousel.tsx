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
            className="w-full mt-10"
            opts={{
                align: "start",
                loop: true,
            }}
        >
            <CarouselContent className="">
                {Array.from({ length: 10 }).map((_, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5">
                        <VideoReview
                            videoSrc="video-review.mp4"
                            reviewerName="Emma R."
                            reviewerPosition="CEO (Tech Innovations)"
                            reviewText="Their blend of innovative tech solutions and stunning design completely transformed our digital presence."
                            buttonColor="#FF5733" // Optional custom button color
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}