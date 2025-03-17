import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import "../../../css/download-description.css"

const CaseStudyPage = () => {
    const caseStudyData = {
        hero: {
            clientName: "Enhancing Hyundai India's Infotainment System with UI/UX and 3D Modeling Solutions",
        },
        clientLogo: "/client-images/hyundai.png", // Adjust the path as needed
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
                                    <p><strong>Client:</strong> Hyundai India<br><strong>Industry:</strong> Automotive (Car Infotainment & Manufacturing)<br><strong>Duration:</strong> 8+ Months<br><strong>Scope:</strong> UI/UX Design, Firmware Management System, 3D Modeling & Rendering</p>
                                    <h3><strong>Overview</strong></h3>
                                    <p>Hyundai India, a leading automotive brand, sought to improve the <strong>UI/UX of their car infotainment system</strong> to ensure a seamless, responsive, and error-free user experience. Additionally, they required a <strong>centralized system to manage firmware and software updates</strong> efficiently. To meet these needs, 01 Agency collaborated with Hyundai’s internal team to deliver a <strong>modernized UI/UX</strong>, a <strong>robust update management solution</strong>, and <strong>detailed 3D models</strong> of infotainment devices and Hyundai car models, including Exter, Creta, i20, and i10.</p>
                                    <h3><strong>Challenges Faced</strong></h3>
                                    <ol>
                                        <li><p><strong>Outdated UI/UX:</strong> The existing infotainment system lacked a modern, user-friendly interface.</p></li>
                                        <li><p><strong>Inconsistent Performance:</strong> Errors and sluggish responses led to a suboptimal user experience.</p></li>
                                        <li><p><strong>Firmware & Software Update Issues:</strong> Hyundai needed an <strong>automated, centralized system</strong> to manage over-the-air (OTA) firmware updates efficiently.</p></li>
                                        <li><p><strong>3D Model Accuracy for Manufacturing:</strong> Hyundai required <strong>precise 3D models and CAD files</strong> for infotainment devices and full vehicle designs.</p></li>
                                        <li><p><strong>Cross-Team Collaboration:</strong> Seamless coordination with Hyundai’s internal team was crucial for design integration and system compatibility.</p></li>
                                    </ol>
                                    <h3><strong>Our Solutions</strong></h3>
                                    <h4><strong>1. UI/UX Enhancement for Infotainment System</strong></h4>
                                    <ul>
                                        <li><p>Designed a <strong>modern, responsive UI</strong> for Hyundai’s infotainment system.</p></li>
                                        <li><p>Created a <strong>minimalist, intuitive interface</strong> with easy navigation and seamless touch interactions.</p></li>
                                        <li><p>Conducted extensive <strong>usability testing</strong> to refine the experience for drivers and passengers.</p></li>
                                        <li><p>Integrated <strong>real-time feedback loops</strong> to ensure ongoing performance optimization.</p></li>
                                    </ul>
                                    <h4><strong>2. Centralized Firmware Update Management System</strong></h4>
                                    <ul>
                                        <li><p>Developed an <strong>OTA (Over-the-Air) update system</strong> for easy firmware and software management.</p></li>
                                        <li><p>Built a <strong>centralized dashboard</strong> for Hyundai’s tech team to <strong>monitor, push, and manage updates</strong> remotely.</p></li>
                                        <li><p>Integrated a <strong>real-time error detection system</strong> to ensure smooth updates without disruptions.</p></li>
                                    </ul>
                                    <h4><strong>3. 3D Modeling & CAD File Development for Infotainment Devices</strong></h4>
                                    <ul>
                                        <li><p>Created <strong>high-precision 3D models</strong> for Hyundai’s infotainment devices, ensuring manufacturability.</p></li>
                                        <li><p>Provided <strong>CAD files optimized for production</strong>, helping Hyundai’s engineers with seamless implementation.</p></li>
                                        <li><p>Delivered <strong>detailed 3D renderings</strong> for Hyundai’s marketing and R&D teams.</p></li>
                                    </ul>
                                    <h4><strong>4. Full Car 3D Modeling & Rendering</strong></h4>
                                    <ul>
                                        <li><p>Modeled and rendered <strong>Hyundai’s top car models</strong> (Exter, Creta, i20, i10) in high resolution.</p></li>
                                        <li><p>Provided <strong>interactive 3D visualizations</strong> for Hyundai’s design and engineering teams.</p></li>
                                        <li><p>Ensured <strong>manufacturing accuracy</strong> by refining designs based on engineering feedback.</p></li>
                                    </ul>
                                    <h3><strong>Technology Stack & Tools Used</strong></h3>
                                    <ul>
                                        <li><p><strong>UI/UX Design:</strong> Figma, Adobe XD, Sketch</p></li>
                                        <li><p><strong>3D Modeling & Rendering:</strong> Blender, Autodesk Maya, SolidWorks, KeyShot</p></li>
                                        <li><p><strong>Firmware & Update Management:</strong> AWS IoT, Python, C++, Embedded Systems Development</p></li>
                                        <li><p><strong>Performance & Usability Testing:</strong> Selenium, Appium, Firebase Crashlytics</p></li>
                                    </ul>
                                    <h3><strong>Results & Impact</strong></h3>
                                    <ul>
                                        <li><p><strong>40% Improvement in System Responsiveness:</strong> Optimized UI/UX led to a faster and smoother infotainment experience.</p></li>
                                        <li><p><strong>Error-Free Firmware Updates:</strong> Automated update management reduced software failures.</p></li>
                                        <li><p><strong>Seamless Integration:</strong> Hyundai’s tech team easily integrated our UI/UX improvements into production models.</p></li>
                                        <li><p><strong>High-Quality 3D Models for Manufacturing:</strong> Accurate CAD files and renderings accelerated product development and marketing.</p></li>
                                    </ul>
                                    <h3><strong>Conclusion</strong></h3>
                                    <p>01 Agency successfully transformed Hyundai India’s infotainment system by delivering a modern UI/UX, an efficient firmware update system, and high-quality 3D models. Our collaborative approach with Hyundai’s internal team ensured seamless execution and product integration, reinforcing Hyundai’s commitment to innovation and user experience excellence.</p>
                                    <p><strong>Looking to Upgrade Your Automotive Tech?</strong><br>Partner with 01 Agency to create cutting-edge UI/UX, 3D models, and firmware solutions tailored to your needs. Contact us today!</p>
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
