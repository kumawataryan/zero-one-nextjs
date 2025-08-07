"use client"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"

import VideoReview from "./VideoReview"
import TextReview from "./TextReview"

type Review = {
    type: "video" | "text"
    videoSrc?: string
    imageSrc?: string
    reviewerName: string
    reviewerPosition: string
    reviewerCompany: string
    reviewText: string
    tags?: string[]
    buttonColor?: string
}

type VideoCarouselProps = {
    reviews?: Review[]
}

export function VideoCarousel({ reviews }: VideoCarouselProps) {
    const defaultReviews: Review[] = [
        // {
        //     type: "video",
        //     videoSrc: "video-testimonials-the-grove.mp4",
        //     reviewerName: "John D",
        //     reviewerPosition: "CTO",
        //     reviewerCompany: "The Grove",
        //     reviewText: "The team's expertise in technology and design has significantly boosted our business.",
        //     tags: ["App Design", "App Development", "Web Development", "Branding"],
        // },
        {
            type: "text",
            imageSrc: "client-images/client-4.png",
            reviewerName: "Hyundai App Team",
            reviewerPosition: "Digital Marketing Manager",
            reviewerCompany: "Hyundai Motor India",
            reviewText: "0101.agency's innovative solutions have elevated our mobile app's user experience. Their team understands our needs and provides the best strategies to drive engagement.",
            buttonColor: "#00C27B",
        },
        // {
        //     type: "video",
        //     videoSrc: "video-testimonials-hemp.mp4",
        //     reviewerName: "David K",
        //     reviewerPosition: "Creative Head",
        //     reviewerCompany: "USA Hemp",
        //     reviewText: "Their blend of innovative tech solutions and stunning design completely transformed our digital presence.",
        //     tags: ["App Design", "App Development", "Web Development", "Branding"],
        // },
        {
            type: "text",
            imageSrc: "client-images/anita-dongre.jpeg",
            reviewerName: "Anita Dongre",
            reviewerPosition: "Founder & Designer",
            reviewerCompany: "Anita Dongre Pvt. Ltd.",
            reviewText: "0101.agency has been a game-changer for our digital presence. Their creativity and attention to detail have helped us connect with our audience in ways we never thought possible.",
            buttonColor: "#FF5733",
        },
        {
            type: "text",
            imageSrc: "client-images/client-5.png",
            reviewerName: "JDA Team",
            reviewerPosition: "Project Manager",
            reviewerCompany: "Jaipur Development Authority",
            reviewText: "0101.agency has been instrumental in creating a seamless digital presence for our infrastructure projects. Their professionalism and expertise have made our campaigns successful.",
            buttonColor: "#FF5733",
        },
    ]

    const dataToRender = reviews && reviews.length > 0 ? reviews : defaultReviews

    return (
        <Carousel
            className="w-full mt-16"
            opts={{
                align: "start",
                loop: true,
            }}
        >
            <CarouselContent>
                {dataToRender.map((review, index) => (
                    <CarouselItem
                        key={index}
                        className="basis-[70vw] md:basis-1/2 xl:basis-1/4 2xl:basis-1/5 pr-8"
                    >
                        {review.type === "video" ? (
                            <VideoReview
                                videoSrc={review.videoSrc!}
                                reviewerName={review.reviewerName}
                                reviewerPosition={review.reviewerPosition}
                                reviewerCompany={review.reviewerCompany}
                                reviewText={review.reviewText}
                                tags={review.tags || []}
                            />
                        ) : (
                            <TextReview
                                imageSrc={review.imageSrc!}
                                reviewerName={review.reviewerName}
                                reviewerPosition={review.reviewerPosition}
                                reviewerCompany={review.reviewerCompany}
                                reviewText={review.reviewText}
                                buttonColor={review.buttonColor}
                            />
                        )}
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}
