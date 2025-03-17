import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import "../../../css/download-description.css"

const CaseStudyPage = () => {
    const caseStudyData = {
        hero: {
            clientName: "Optimizing MyProtein's Product Imagery with 3D Models & Mockups",
        },
        clientLogo: "/client-images/my-protein.png", // Adjust the path as needed
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
                                    <p><strong>Client:</strong> MyProtein<br><strong>Industry:</strong> Nutrition & Supplements<br><strong>Scope:</strong> 100+ Nutrition & Supplement SKUs<br><strong>Technologies Used:</strong> Blender, 3ds Max, KeyShot, Photoshop, Illustrator</p>
                                    <h3><strong>Overview</strong></h3>
                                    <p>MyProtein, a leading brand in the nutrition and supplement industry, faced significant challenges in managing high-quality product images for its e-commerce website and retail platforms. With over <strong>100+ SKUs</strong>, including isolates, jars, bags, pouches, and bottles, the company struggled with <strong>costly product photography, slow product upload times, and inconsistent imagery across multiple platforms</strong>.</p>
                                    <p>To solve these issues, 01 Agency developed <strong>high-precision 3D models and mockups</strong>, revolutionizing MyProtein’s product visualization process. This <strong>eliminated the need for expensive photography</strong>, <strong>ensured consistent branding</strong>, and <strong>streamlined their design workflow</strong> across multiple sales channels like Amazon and other e-commerce websites.</p>
                                    <h3><strong>Challenges Faced</strong></h3>
                                    <ol>
                                        <li>
                                            <p><strong>High Photography Costs:</strong> MyProtein spent over <strong>$10,000 per month</strong> on professional product photography.</p>
                                        </li>
                                        <li>
                                            <p><strong>Inconsistent Product Imagery:</strong> Variations in lighting, angles, and backgrounds led to inconsistencies across platforms.</p>
                                        </li>
                                        <li>
                                            <p><strong>Slow Product Upload Times:</strong> The need for frequent reshoots delayed product launches and updates on e-commerce sites.</p>
                                        </li>
                                        <li>
                                            <p><strong>Human Errors in Image Selection:</strong> Manual image selection led to <strong>95% errors</strong> in choosing the right product visuals.</p>
                                        </li>
                                        <li>
                                            <p><strong>Inefficient Design Workflow:</strong> Lack of an automated solution for resizing and exporting images for different platforms.</p>
                                        </li>
                                        <li>
                                            <p><strong>Expensive Banner Designs:</strong> Custom banner creation was time-consuming and costly, reducing efficiency.</p>
                                        </li>
                                    </ol>
                                    <h3><strong>Our Solutions</strong></h3>
                                    <h4><strong>1. 3D Model & Mockup Development</strong></h4>
                                    <ul>
                                        <li>
                                            <p>Designed highly detailed <strong>3D models of MyProtein’s product SKUs</strong>, ensuring realistic textures, lighting, and branding.</p>
                                        </li>
                                        <li>
                                            <p>Developed a library of <strong>customizable mockups</strong> for jars, bags, pouches, and bottles.</p>
                                        </li>
                                        <li>
                                            <p>Ensured all mockups were <strong>consistent in style and scale</strong>, eliminating discrepancies in product presentation.</p>
                                        </li>
                                    </ul>
                                    <h4><strong>2. Cost-Effective Product Visualization</strong></h4>
                                    <ul>
                                        <li>
                                            <p><strong>Replaced traditional product photography</strong> with hyper-realistic 3D renders, saving <strong>$10,000+ per month</strong>.</p>
                                        </li>
                                        <li>
                                            <p>Provided <strong>transparent 3D mockups</strong>, reducing the cost of banner design by <strong>80%</strong>.</p>
                                        </li>
                                        <li>
                                            <p>Allowed easy <strong>color, label, and texture modifications</strong> without the need for reshoots.</p>
                                        </li>
                                    </ul>
                                    <h4><strong>3. Automated Image Export System</strong></h4>
                                    <ul>
                                        <li>
                                            <p>Created <strong>Photoshop actions</strong> to automate image export for <strong>10+ platforms</strong> in various sizes and ratios.</p>
                                        </li>
                                        <li>
                                            <p>Designed a one-click export system that <strong>automatically resizes and organizes images</strong> into folders.</p>
                                        </li>
                                        <li>
                                            <p>Reduced the time required for image processing and export by <strong>90%</strong>.</p>
                                        </li>
                                    </ul>
                                    <h4><strong>4. Accelerated Product Uploads & Market Expansion</strong></h4>
                                    <ul>
                                        <li>
                                            <p>Optimized images for <strong>Amazon, MyProtein’s website, and other e-commerce platforms</strong>, enhancing upload efficiency.</p>
                                        </li>
                                        <li>
                                            <p>Ensured that images met platform-specific requirements, improving visibility and conversion rates.</p>
                                        </li>
                                        <li>
                                            <p>Reduced <strong>human error by 95%</strong> in selecting the right product visuals.</p>
                                        </li>
                                    </ul>
                                    <h3><strong>Technology Stack & Tools Used</strong></h3>
                                    <ul>
                                        <li>
                                            <p><strong>3D Modeling & Rendering:</strong> Blender, 3ds Max, KeyShot</p>
                                        </li>
                                        <li>
                                            <p><strong>Image Editing & Automation:</strong> Photoshop, Illustrator</p>
                                        </li>
                                        <li>
                                            <p><strong>Workflow Optimization:</strong> Custom Photoshop actions for bulk processing</p>
                                        </li>
                                    </ul>
                                    <h3><strong>Results & Impact</strong></h3>
                                    <ul>
                                        <li>
                                            <p><strong>$10,000+ Monthly Savings:</strong> Eliminated traditional product photography costs.</p>
                                        </li>
                                        <li>
                                            <p><strong>80% Reduction in Banner Design Costs:</strong> Transparent 3D mockups replaced custom photography.</p>
                                        </li>
                                        <li>
                                            <p><strong>95% Error Reduction:</strong> Automated image selection improved accuracy across platforms.</p>
                                        </li>
                                        <li>
                                            <p><strong>90% Faster Image Processing & Export:</strong> One-click Photoshop actions streamlined workflow.</p>
                                        </li>
                                        <li>
                                            <p><strong>Improved Product Upload Speed:</strong> Faster listing on Amazon and other e-commerce platforms.</p>
                                        </li>
                                    </ul>
                                    <p>01 Agency successfully transformed MyProtein’s <strong>product visualization strategy</strong>, optimizing costs, efficiency, and consistency across multiple e-commerce channels. By replacing photography with <strong>high-quality 3D models</strong>, automating the image export process, and enhancing banner design workflows, we provided a scalable and cost-effective solution that improved MyProtein’s branding and market presence.</p>
                                    <p><strong>Want to streamline your product imagery and cut costs?</strong><br>Contact 01 Agency today for <strong>custom 3D mockups and automated design solutions</strong> tailored to your brand!</p>
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
