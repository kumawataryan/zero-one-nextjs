"use client"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"

import VideoReview from "./VideoReview"
import TextReview from "./TextReview"

export function VideoCarousel() {

    return (
        <Carousel
            className="w-full mt-16"
            opts={{
                align: "start",
                loop: true,
            }}
        >
            <CarouselContent className="">
                <CarouselItem className="sm:basis-1/2 md:basis-1/3 xl:basis-1/5">
                    <VideoReview
                        videoSrc="video-review.mp4"
                        reviewerName="John D"
                        reviewerPosition="CTO"
                        reviewerCompany="Enterprise Solutions"
                        reviewText="The team's expertise in technology and design has significantly boosted our business."
                        tags={["App Design", "App Development", "Web Development", "Branding"]}
                    />
                </CarouselItem>

                <CarouselItem className="sm:basis-1/2 md:basis-1/3 xl:basis-1/5">
                    <VideoReview
                        videoSrc="video-review.mp4"
                        reviewerName="Michael T"
                        reviewerPosition="CEO"
                        reviewerCompany="Enterprise Solutions"
                        reviewText="Their technical expertise and creative solutions have been invaluable to our startup."
                        tags={["App Design", "App Development", "Web Development", "Branding"]}
                    />
                </CarouselItem>

                <CarouselItem className="sm:basis-1/2 md:basis-1/3 xl:basis-1/5">
                    <TextReview
                        imageSrc="/team/anchal.jpeg"
                        reviewerName="Sarah W"
                        reviewerPosition="Operations Manager"
                        reviewerCompany="Enterprise Solutions"
                        reviewText="The team's innovative approach has greatly improved our operational efficiency."
                        buttonColor="#FF5733" // Optional custom button color
                    />
                </CarouselItem>

                <CarouselItem className="sm:basis-1/2 md:basis-1/3 xl:basis-1/5">
                    <VideoReview
                        videoSrc="video-review.mp4"
                        reviewerName="David K"
                        reviewerPosition="Lead Developer"
                        reviewerCompany="Enterprise Solutions"
                        reviewText="Their blend of innovative tech solutions and stunning design completely transformed our digital presence."
                        tags={["App Design", "App Development", "Web Development", "Branding"]}
                    />
                </CarouselItem>

                <CarouselItem className="sm:basis-1/2 md:basis-1/3 xl:basis-1/5">
                    <TextReview
                        imageSrc="/team/anchal.jpeg"
                        reviewerName="Alice B"
                        reviewerPosition="Product Manager"
                        reviewerCompany="Tech Corp"
                        reviewText="The innovative solutions provided by the team have streamlined our product development process."
                    />
                </CarouselItem>

                <CarouselItem className="sm:basis-1/2 md:basis-1/3 xl:basis-1/5">
                    <TextReview
                        imageSrc="/team/anchal.jpeg"
                        reviewerName="Jane S"
                        reviewerPosition="Marketing Head"
                        reviewerCompany="Creative Agency"
                        reviewText="Their creative approach and technical skills have greatly enhanced our marketing efforts."
                    />
                </CarouselItem>
            </CarouselContent>

            {/* <CarouselPrevious />
            <CarouselNext /> */}
        </Carousel>
    )
}