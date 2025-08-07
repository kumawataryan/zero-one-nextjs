import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

const PortfolioDetailPage = () => {

    const projectData = {
        serviceHero: {
            servicesOffered: [
                { name: "AI & Machine Learning Solutions", link: "/" },
                { name: "Web & Mobile App Development", link: "/" },
                { name: "Backend Development", link: "/" },
            ],
            date: "Completed",
            clientName: "NerdyTips",
            shortInfo:
                "Designed and developed NerdyTips, a cross-platform AI-powered football predictions platform offering accurate betting insights across 160+ global leagues. The solution includes a proprietary AI engine, responsive web app, and native mobile apps for Android and iOS—supporting real-time predictions, user subscriptions, and monetization through in-app purchases.",
        },
        task: {
            title: "Task",
            description:
                "Built an end-to-end football predictions platform powered by proprietary AI, delivering high-accuracy betting insights via responsive web and native mobile apps. Handled backend systems, data pipelines, model integration, and monetization features.",
        },
        serviceDetails: [
            {
                title: "AI & Machine Learning Solutions",
                description:
                    "Developed NT 4.0, a custom AI engine built in Java using deep learning and reinforcement learning. It processes thousands of match-level data points—like team form, injuries, fatigue, and historical stats—to deliver predictions with over 75% accuracy.",
            },
            {
                title: "Web & Mobile App Development",
                description:
                    "Created a user-friendly web interface for browsing daily predictions, stats, and league insights. Built native mobile apps for Android and iOS, offering fast performance, in-app upgrades, and offline access—all while ensuring full user privacy.",
            },
            {
                title: "Backend Development",
                description:
                    "Engineered a robust backend to handle real-time match data, subscription management, and AI prediction delivery via REST APIs. Supported scalable usage across web and mobile platforms with secure data handling and performance monitoring.",
            },
            {
                title: "Subscription & Monetization",
                description:
                    "Implemented tiered subscription models across platforms, including premium upgrades via in-app purchases. Enabled exclusive content like extended predictions and 'Bet of the Day' features to drive revenue growth.",
            },
        ],
        galleryImages: [
            "/nerdytips.png",
        ],
        cta: {
            tagline: "Build Smarter Sports Platforms with AI",
            projectPrompt: "Planning to launch an AI-driven prediction or analytics platform?",
            link: "/contact",
            description:
                "Let's work together to develop intelligent, monetizable platforms that combine real-time data, AI capabilities, and seamless cross-platform user experiences.",
        },
    };



    return (
        <div className="flex flex-col items-center justify-center w-full sm:px-4 xl:px-0">
            <div className="max-w-[1200px] w-full">

                {/* Service Hero */}
                <div className="flex flex-col xl:flex-row xl:gap-24 sm:gap-16 xl:pt-64 sm:pt-40 justify-between w-full">

                    {/* Service Hero Left */}
                    <div>
                        <h1 className="xl:text-[60px] md:text-[40px] sm:text-[30px] font-bold leading-none mt-2 text-[15px] text-nowrap">
                            {projectData.serviceHero.clientName}
                        </h1>

                        <p className="sm:w-full xl:max-w-[750px] mt-5 font-light leading-relaxed opacity-75">
                            {projectData.serviceHero.shortInfo}
                        </p>

                        <div className="flex mt-6 flex-col gap-2">
                            {projectData.serviceHero.servicesOffered.map((service, index) => (
                                <span key={index}>
                                    <Link href={service.link} className='bg-black text-white p-2 rounded-full gap-1 gap-y-2 text-[14px] px-4'>
                                        {service.name}
                                    </Link>
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Service Hero Right */}
                    <div>
                        <p className="font-semibold">{projectData.task.title}</p>
                        <p className="sm:w-full xl:max-w-[750px] mt-2 font-semibold">
                            {projectData.task.description}
                        </p>

                        <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 mt-16">
                            {projectData.serviceDetails.map((detail, index) => (
                                <div key={index} className="py-4 border-t border-[#737373]">
                                    <p className="font-medium">{detail.title}</p>
                                    <p className="font-normal text-black/85 leading-6 mt-1.5 text-[15px]">
                                        {detail.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <Link href="https://nerdytips.com/" className="font-bold text-[15px] flex gap-2 items-center mt-4 hover:bg-[#F2F2F2] p-2 w-fit rounded-md leading-[16px] hover:text-[#141DEA] group transition-all duration-500 ease-in-out">
                            Open Project <ArrowRight className="w-5 h-5 transition-transform duration-200 ease-in-out group-hover:translate-x-1 -translate-x-1" />
                        </Link>
                    </div>
                </div>

                {/* Gallery */}
                <div className="xl:mt-16 sm:mt-8 w-full flex flex-col gap-1">
                    {projectData.galleryImages.map((src, index) => (
                        <Image
                            key={index}
                            src={src}
                            width={800}
                            height={800}
                            className="object-cover w-full aspect-3/2"
                            alt="Portfolio Image"
                            unoptimized
                        />
                    ))}
                </div>
            </div>

            {/* Static CTA */}
            <div className="w-full xl:pt-32 sm:pt-20 sm:px-4 xl:px-0 items-center justify-center mt-20 bg-[#DBE2EA] flex flex-col gap-0">
                <div className="max-w-[1200px] w-full text-[#062330]">
                    <p className="uppercase">{projectData.cta.tagline}</p>
                    <div className="flex sm:flex-col xl:flex-row sm:gap-4 xl:gap-0 justify-between border-b pb-4 border-[#062330] mt-4">
                        <h2 className="sm:text-[32px] xl:text-[42px] font-semibold leading-tight">
                            {projectData.cta.projectPrompt}
                        </h2>
                        <Link href={projectData.cta.link} className='relative rounded-lg bg-gradient-to-r bg-[#062330] text-white flex gap-2 items-center justify-center text-[14px] p-5 uppercase group w-fit'>
                            <span className='z-10'>{projectData.cta.projectPrompt}</span>
                            <div className="absolute inset-0 bg-[#141DEA] rounded-lg origin-left scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100 z-0"></div>
                        </Link>
                    </div>
                    <p className="sm:w-full xl:max-w-[600px] mt-5 font-light leading-relaxed opacity-75">
                        {projectData.cta.description}
                    </p>
                </div>
                <ContactForm className="max-w-[1600px] w-full px-0 py-0" heading={false} />
            </div>
        </div>
    );
};

export default PortfolioDetailPage;