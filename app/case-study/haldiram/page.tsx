import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import "../../../css/download-description.css"

const CaseStudyPage = () => {
    const caseStudyData = {
        hero: {
            clientName: "Haldiram's Corporate Gift Box Packaging",
        },
        clientLogo: "/client-images/haldiram.png", // Adjust the path as needed
        cta: {
            tagline: "Let's Collaborate",
            projectPrompt: "Got a project?",
            link: "/contact",
            description:
                "We are passionate creatives excited by unique ideas. Our team helps forward-thinking brands like Myntra craft engaging experiences through exceptional UX/UI design.",
        },
    };

    return (
        <div className="flex flex-col items-center justify-center w-full sm:px-4 xl:px-0">
            <div className="max-w-[800px] w-full">
                <div className="flex flex-col xl:flex-row xl:gap-24 sm:gap-16 xl:pt-56 sm:pt-40 justify-between w-full">
                    <div>
                        <Image
                            src={caseStudyData.clientLogo}
                            width={300}
                            height={300}
                            alt={`${caseStudyData.hero.clientName} Logo`}
                            unoptimized
                            className="rounded-xl w-28 object-cover border aspect-3/2"
                        />

                        <h1 className="xl:text-[60px] md:text-[40px] sm:text-[20px] font-bold leading-none mt-8 text-[15px]">
                            {caseStudyData.hero.clientName}
                        </h1>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center w-full mt-4">
                <div
                    className="custom-content max-w-[800px]"
                    dangerouslySetInnerHTML={{
                        __html: `
                                    <p><strong>Case Study: Haldiram's Corporate Gift Box Packaging</strong></p>
                                    <p><strong>Client:</strong> Haldiram's (Leading Indian Snack & Sweets Brand)</p>
                                    <p><strong>Objective:</strong> To design a premium, minimalistic corporate gift packaging for Haldiram’s Diwali gifting initiative. The packaging needed to complement Haldiram’s existing product branding while maintaining a distinct, high-end gift appeal. Additionally, 3D models, 3D mockups, and a dedicated landing page were developed to facilitate corporate bulk orders.</p>

                                    <hr>

                                    <h3><strong>Project Scope:</strong></h3>
                                    <ul>
                                        <li>
                                            <p><strong>Custom Packaging Design:</strong></p>
                                            <ul>
                                                <li>
                                                    <p>Created a sleek, minimalistic design that resonated with Haldiram’s brand but retained a unique premium gifting appeal.</p>
                                                </li>
                                                <li>
                                                    <p>Ensured consistency with existing product aesthetics without direct replication.</p>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <p><strong>3D Modeling & Mockups:</strong></p>
                                            <ul>
                                                <li>
                                                    <p>Designed detailed 3D models and mockups of the corporate gift boxes for marketing and presentation purposes.</p>
                                                </li>
                                                <li>
                                                    <p>Allowed corporate clients to visualize the packaging before placing bulk orders.</p>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <p><strong>Landing Page Development:</strong></p>
                                            <ul>
                                                <li>
                                                    <p>Developed a user-friendly landing page showcasing the corporate gift packs.</p>
                                                </li>
                                                <li>
                                                    <p>Integrated an easy inquiry and ordering system for corporate clients.</p>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>

                                    <hr>

                                    <h3><strong>Corporate Gifting Strategy:</strong></h3>
                                    <p>Haldiram’s aimed to launch a specialized corporate gifting product line, focusing on event-specific and festive gifting for large corporations. The Diwali gifting campaign targeted 1000+ top companies, allowing them to purchase customized gift packs for employees and clients, complete with personalized message cards.</p>

                                    <hr>

                                    <h3><strong>Results & Impact:</strong></h3>
                                    <ul>
                                        <li>
                                            <p><strong>Sales & Revenue:</strong></p>
                                            <ul>
                                                <li>
                                                    <p>Over <strong>$10 million in sales</strong> generated through the Diwali corporate gifting initiative.</p>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <p><strong>Brand Enhancement:</strong></p>
                                            <ul>
                                                <li>
                                                    <p>Strengthened Haldiram’s brand positioning in the premium gifting market.</p>
                                                </li>
                                                <li>
                                                    <p>Enhanced corporate relationships by offering a sophisticated, customizable gifting solution.</p>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <p><strong>Operational Efficiency:</strong></p>
                                            <ul>
                                                <li>
                                                    <p>The 3D mockups streamlined corporate decision-making, reducing back-and-forth design revisions.</p>
                                                </li>
                                                <li>
                                                    <p>The landing page simplified bulk ordering, improving the overall customer experience.</p>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>

                                    <hr>

                                    <p>By delivering a high-quality, customized corporate gifting solution, Haldiram’s successfully launched its corporate gifting product line. The minimalistic yet premium packaging, combined with 3D visualization and a digital ordering experience, contributed to a seamless and highly profitable campaign. This initiative set the foundation for future corporate gifting solutions tailored for events and special occasions.</p>
                                `
                    }}
                />
            </div>


            {/* Static CTA */}
            <div className="w-full xl:pt-32 sm:pt-20 sm:px-4 xl:px-0 items-center justify-center mt-20 bg-[#DBE2EA] flex flex-col gap-0">
                <div className="max-w-[1600px] w-full text-[#062330]">
                    <p className="uppercase">{caseStudyData.cta.tagline}</p>
                    <div className="flex sm:flex-col xl:flex-row sm:gap-4 xl:gap-0 justify-between border-b pb-4 border-[#062330] mt-4">
                        <h2 className="sm:text-[32px] xl:text-[42px] font-semibold leading-tight">
                            {caseStudyData.cta.projectPrompt}
                        </h2>
                        <Link
                            href={caseStudyData.cta.link}
                            className="relative rounded-lg bg-gradient-to-r bg-[#062330] text-white flex gap-2 items-center justify-center text-[14px] p-5 uppercase group w-fit"
                        >
                            <span className="z-10">{caseStudyData.cta.projectPrompt}</span>
                            <div className="absolute inset-0 bg-[#141DEA] rounded-lg origin-left scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100 z-0"></div>
                        </Link>
                    </div>
                    <p className="sm:w-full xl:max-w-[600px] mt-5 font-light leading-relaxed opacity-75">
                        {caseStudyData.cta.description}
                    </p>
                </div>
                <ContactForm className="max-w-[1600px] w-full px-0 py-0" heading={false} />
            </div>
        </div>
    );
};

export default CaseStudyPage;
