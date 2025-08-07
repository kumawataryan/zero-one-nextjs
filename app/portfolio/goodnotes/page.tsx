import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

const PortfolioDetailPage = () => {

    const projectData = {
        serviceHero: {
            servicesOffered: [
                { name: "Mobile App Development", link: "/" },
                { name: "Productivity & EdTech Tools", link: "/" },
            ],
            date: "Completed",
            clientName: "GoodNotes",
            shortInfo:
                "Contributed to the development of GoodNotes for Android—a robust note-taking and PDF annotation app. Focused on delivering smooth handwriting input, document organization, and stylus compatibility across a wide range of Android devices.",
        },
        task: {
            title: "Task",
            description:
                "Built key features for the Android version of GoodNotes, including PDF support, stylus input, document management, and a responsive UI optimized for tablets and phones alike.",
        },
        serviceDetails: [
            {
                title: "Handwriting & Stylus Integration",
                description:
                    "Implemented smooth, natural handwriting input with full stylus support to mimic the experience of writing on paper—ideal for note-taking, sketching, and marking up documents.",
            },
            {
                title: "PDF Viewing & Annotation",
                description:
                    "Enabled seamless PDF import, navigation, and markup tools—allowing users to highlight, underline, draw, and annotate with ease.",
            },
            {
                title: "Document Organization",
                description:
                    "Built intuitive tools for organizing notebooks, folders, and documents—supporting drag-and-drop and a file system familiar to productivity users.",
            },
            {
                title: "Cross-Device Compatibility",
                description:
                    "Optimized app performance and UI scaling across Android phones and tablets of varying screen sizes and hardware capabilities.",
            },
        ],
        galleryImages: [
            "/goodnotes.png",
        ],
        cta: {
            tagline: "Create Powerful Productivity Apps for Android",
            projectPrompt: "Bringing a note-taking or document app to Android?",
            link: "/contact",
            description:
                "Let’s collaborate on feature-rich productivity tools with intuitive UI, smooth input, and device-wide compatibility tailored for Android users.",
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

                        <Link href="https://play.google.com/store/apps/details?id=com.goodnotes.android.app" className="font-bold text-[15px] flex gap-2 items-center mt-4 hover:bg-[#F2F2F2] p-2 w-fit rounded-md leading-[16px] hover:text-[#141DEA] group transition-all duration-500 ease-in-out">
                            Android App <ArrowRight className="w-5 h-5 transition-transform duration-200 ease-in-out group-hover:translate-x-1 -translate-x-1" />
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