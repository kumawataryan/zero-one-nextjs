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
                <CarouselItem className="sm:basis-1/1 md:basis-1/2 xl:basis-1/4 2xl:basis-1/5">
                    <VideoReview
                        videoSrc="video-testimonials-the-grove.mp4"
                        reviewerName="John D"
                        reviewerPosition="CTO"
                        reviewerCompany="The Grove"
                        reviewText="The team's expertise in technology and design has significantly boosted our business."
                        tags={["App Design", "App Development", "Web Development", "Branding"]}
                    />
                </CarouselItem>

                <CarouselItem className="sm:basis-1/1 md:basis-1/2 xl:basis-1/4 2xl:basis-1/5">
                    <TextReview
                        imageSrc="client-images/client-4.png"
                        reviewerName="Hyundai App Team"
                        reviewerPosition="Digital Marketing Manager"
                        reviewerCompany="Hyundai Motor India"
                        reviewText="0101.agency's innovative solutions have elevated our mobile app's user experience. Their team understands our needs and provides the best strategies to drive engagement."
                        buttonColor="#00C27B" // Optional custom button color
                    />
                </CarouselItem>

                <CarouselItem className="sm:basis-1/1 md:basis-1/2 xl:basis-1/4 2xl:basis-1/5">
                    <VideoReview
                        videoSrc="video-testimonials-hemp.mp4"
                        reviewerName="David K"
                        reviewerPosition="Creative Head"
                        reviewerCompany="USA Hemp"
                        reviewText="Their blend of innovative tech solutions and stunning design completely transformed our digital presence."
                        tags={["App Design", "App Development", "Web Development", "Branding"]}
                    />
                </CarouselItem>

                <CarouselItem className="sm:basis-1/1 md:basis-1/2 xl:basis-1/4 2xl:basis-1/5">
                    <TextReview
                        imageSrc="client-images/anita-dongre.jpeg"
                        reviewerName="Anita Dongre"
                        reviewerPosition="Founder & Designer"
                        reviewerCompany="Anita Dongre Pvt. Ltd."
                        reviewText="0101.agency has been a game-changer for our digital presence. Their creativity and attention to detail have helped us connect with our audience in ways we never thought possible."
                        buttonColor="#FF5733" // Optional custom button color
                    />
                </CarouselItem>

                <CarouselItem className="sm:basis-1/1 md:basis-1/2 xl:basis-1/4 2xl:basis-1/5">
                    <TextReview
                        imageSrc="client-images/client-5.png"
                        reviewerName="JDA Team"
                        reviewerPosition="Project Manager"
                        reviewerCompany="Jaipur Development Authority"
                        reviewText="0101.agency has been instrumental in creating a seamless digital presence for our infrastructure projects. Their professionalism and expertise have made our campaigns successful."
                        buttonColor="#FF5733" // Optional custom button color
                    />
                </CarouselItem>

            </CarouselContent>

            {/* <CarouselPrevious />
            <CarouselNext /> */}
        </Carousel>
    )
}