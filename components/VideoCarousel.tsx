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
    isLogo?: boolean
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
            reviewerName: "Hyundai Team",
            reviewerPosition: "Infotainment Product Lead",
            reviewerCompany: "Hyundai Motor India",
            reviewText: "The timeline was tight and our engineering requirements were very specific. They worked directly with our team for months without needing constant follow-up. Infotainment response time improved by 40% and the firmware update dashboard has reduced a lot of back and forth for us.",
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
            reviewText: "Our old platform was not able to handle the volume of products we carry. The migration happened without any disruption to our customers, which was very important for us. Pages load 30% faster, cart drop-offs came down by 40%, and conversions went up by 25% in three months. The billing system they built for our stores has also been helpful — in-store purchases went up 20% once everything was connected.",
            buttonColor: "#FF5733",
        },
        {
            type: "text",
            imageSrc: "client-images/client-5.png",
            reviewerName: "JDA",
            reviewerPosition: "Project Manager",
            reviewerCompany: "Jaipur Development Authority",
            reviewText: "We had a defined scope and specific departmental requirements. The team delivered on time and the website has been well received. Most common services are now online — permits, payments, project status updates — which has reduced footfall at our offices considerably.",
            buttonColor: "#062330",
        },
        {
            type: "text",
            imageSrc: "client-images/haldiram.png",
            reviewerName: "Haldiram's",
            reviewerPosition: "Corporate Gifting Head",
            reviewerCompany: "Haldiram's",
            reviewText: "For Diwali we needed gift packaging that looked premium but still felt like Haldiram's. The team understood this without much explanation. The 3D previews helped our corporate clients confirm orders faster without needing physical samples first. The response from companies was very good and sales crossed what we had expected.",
            buttonColor: "#E8721C",
            isLogo: true,
        },
        {
            type: "text",
            imageSrc: "client-images/my-protein.png",
            reviewerName: "MyProtein",
            reviewerPosition: "Head of E-commerce",
            reviewerCompany: "MyProtein",
            reviewText: "Managing product images for 100+ SKUs was a constant problem — expensive shoots, inconsistent results, and delays every time we launched a new variant. The 3D models they built have made the whole process much simpler. Any label or packaging change can be done without scheduling a new shoot. It has saved us a lot of time and cost both.",
            buttonColor: "#000000",
            isLogo: true,
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
                                isLogo={review.isLogo}
                            />
                        )}
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}
