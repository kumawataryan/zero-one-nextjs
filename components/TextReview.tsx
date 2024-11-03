"use client";

import Image from "next/image";

// Define props interface
interface TextReviewProps {
    imageSrc: string;            // Video source URL
    reviewerName: string;        // Reviewer's name
    reviewerPosition: string;    // Reviewer's position
    reviewerCompany: string;     // Reviewer's company
    reviewText: string;          // Review content
    buttonColor?: string;        // Optional button color
    overlayOpacity?: number;     // Optional overlay opacity
}

export default function TextReview({
    imageSrc,
    reviewerName,
    reviewerPosition,
    reviewerCompany,
    reviewText,
}: TextReviewProps) {

    return (
        <div
            className="bg-[#1500FE] relative aspect-9/16 max-w-[400px] p-6 flex justify-between flex-col"
        >
            <div>
                <div className="flex items-center mt-6">
                    <div className="flex space-x-1">
                        <div className="w-3 h-3 bg-white"></div>
                        <div className="w-3 h-3 bg-white"></div>
                        <div className="w-3 h-3 bg-white"></div>
                        <div className="w-3 h-3 bg-white"></div>
                        <div className="w-3 h-3 bg-white"></div>
                    </div>
                </div>

                <p className="text-white/80 mt-8 leading-normal font-normal">{reviewText}</p>
            </div>

            <div>
                <div className="flex items-center gap-3.5">
                    <Image
                        src={imageSrc}
                        alt={reviewerName}
                        width={40}
                        height={40}
                        className="rounded-full w-16 h-16"
                        unoptimized
                    />
                    <div>
                        <h3 className="text-white font-bold text-[16px]">{reviewerName}<span className="text-[12px] opacity-60">, {reviewerPosition}</span></h3>
                        <p className="text-[14px] text-white opacity-60">{reviewerCompany}</p>
                    </div>
                </div>
            </div>

            {/* <h3 className="text-[14px] font-bold mb-2 opacity-70">
                {reviewerName}, {reviewerPosition}
            </h3>
            <p className="opacity-30 text-[12px] font-light">
                {reviewText}
            </p> */}
        </div>
    );
}
