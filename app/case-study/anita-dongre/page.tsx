import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import "../../../css/download-description.css"

const CaseStudyPage = () => {
    const caseStudyData = {
        hero: {
            clientName: "Anita Dongre's E-commerce Transformation",
        },
        clientLogo: "/client-images/anita-dongre.jpg", // Adjust the path as needed
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
                                    <p dir="ltr"><span>Case Study: Anita Dongre's E-commerce Transformation</span></p>
                                    <p dir="ltr"><span>Client:</span><span> Anita Dongre (Luxury Fashion Brand)</span></p>
                                    <p dir="ltr"><span>Objective:</span><span> To build a robust, scalable, and high-performance e-commerce platform for Anita Dongre, starting with Shopify and later migrating to Salesforce Commerce Cloud (SFCC) for better flexibility, customization, and omnichannel capabilities. Additionally, a customized Point of Sale (POS) system was developed for physical store integration.</span></p>
                                    
                                    <h3 dir="ltr"><span>Project Phases:</span></h3>
                                    <h4 dir="ltr"><span>1. Initial Setup on Shopify</span></h4>
                                    <ul>
                                        <li dir="ltr">
                                            <p dir="ltr"><span>Shopify was used as the initial platform for rapid deployment and cost-effectiveness.</span></p>
                                        </li>
                                        <li dir="ltr">
                                            <p dir="ltr"><span>Standard themes and plugins were customized to align with Anita Dongre’s luxury branding.</span></p>
                                        </li>
                                        <li dir="ltr">
                                            <p dir="ltr"><span>Integrated basic inventory management, payment gateways, and customer engagement tools.</span></p>
                                        </li>
                                        <li dir="ltr">
                                            <p dir="ltr"><span>Challenges: Shopify’s limitations in handling high SKU counts, complex promotions, and omnichannel integration led to the need for a more scalable solution.</span></p>
                                        </li>
                                    </ul>
                                    <h4 dir="ltr"><span>2. Migration to Salesforce Commerce Cloud (SFCC)</span></h4>
                                    <ul>
                                        <li dir="ltr">
                                            <p dir="ltr"><span>Key Reasons for Migration:</span></p>
                                            <ul>
                                                <li dir="ltr">
                                                    <p dir="ltr"><span>Advanced customization and scalability.</span></p>
                                                </li>
                                                <li dir="ltr">
                                                    <p dir="ltr"><span>Better omnichannel experience across online and offline stores.</span></p>
                                                </li>
                                                <li dir="ltr">
                                                    <p dir="ltr"><span>Superior AI-driven personalization and merchandising.</span></p>
                                                </li>
                                            </ul>
                                        </li>
                                        <li dir="ltr">
                                            <p dir="ltr"><span>Migration Process:</span></p>
                                            <ul>
                                                <li dir="ltr">
                                                    <p dir="ltr"><span>Data migration from Shopify to SFCC, including products, orders, customer data, and historical transactions.</span></p>
                                                </li>
                                                <li dir="ltr">
                                                    <p dir="ltr"><span>Redesigning the UI/UX to enhance customer experience.</span></p>
                                                </li>
                                                <li dir="ltr">
                                                    <p dir="ltr"><span>Customizing SFCC’s promotional engine to match Anita Dongre’s seasonal sales and loyalty programs.</span></p>
                                                </li>
                                                <li dir="ltr">
                                                    <p dir="ltr"><span>Integration with warehouse management, logistics, and third-party services.</span></p>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    
                                    <h3 dir="ltr"><span>Comparison: Salesforce Commerce Cloud vs. Shopify</span></h3>
                                    <p dir="ltr"><span>Salesforce Commerce Cloud provides a more flexible and scalable solution compared to Shopify, particularly for enterprise-level businesses. While Shopify is excellent for small to mid-sized brands due to its ease of use and cost-effectiveness, it lacks deep customization options and advanced features required for complex e-commerce operations.</span></p>
                                    <p dir="ltr"><span>SFCC allows extensive customization, enabling businesses to tailor the platform to their unique needs, whereas Shopify is more dependent on third-party apps for additional functionality. The AI-driven personalization and merchandising in SFCC (via Einstein AI) provide more sophisticated product recommendations compared to Shopify’s basic personalization options.</span></p>
                                    <p dir="ltr"><span>For businesses operating both online and offline stores, SFCC offers a seamless omnichannel experience with real-time inventory synchronization, advanced promotional tools, and personalized customer interactions, whereas Shopify requires additional third-party integrations to achieve similar capabilities. SFCC also enables more advanced checkout customization, multi-currency support, and real-time inventory tracking, making it an ideal solution for brands looking for enterprise-grade features.</span></p>
                                    
                                    <h3 dir="ltr"><span>3. Custom Point of Sale (POS) System</span></h3>
                                    <ul>
                                        <li dir="ltr">
                                            <p dir="ltr"><span>Objective:</span><span> Unify online and offline sales data, streamline in-store checkout, and enhance customer engagement.</span></p>
                                        </li>
                                        <li dir="ltr">
                                            <p dir="ltr"><span>Features:</span></p>
                                            <ul>
                                                <li dir="ltr">
                                                    <p dir="ltr"><span>Integrated with Salesforce Commerce Cloud for real-time inventory updates.</span></p>
                                                </li>
                                                <li dir="ltr">
                                                    <p dir="ltr"><span>Customer purchase history accessible across online and offline stores.</span></p>
                                                </li>
                                                <li dir="ltr">
                                                    <p dir="ltr"><span>QR-based checkouts and digital invoices.</span></p>
                                                </li>
                                                <li dir="ltr">
                                                    <p dir="ltr"><span>AI-powered personalized product recommendations for in-store customers.</span></p>
                                                </li>
                                                <li dir="ltr">
                                                    <p dir="ltr"><span>Seamless return and exchange management across all sales channels.</span></p>
                                                </li>
                                                <li dir="ltr">
                                                    <p dir="ltr"><span>Employee management and in-store analytics for better decision-making.</span></p>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    
                                    <h3 dir="ltr"><span>Results &amp; Impact</span></h3>
                                    <ul>
                                        <li dir="ltr">
                                            <p dir="ltr"><span>Enhanced Customer Experience:</span></p>
                                            <ul>
                                                <li dir="ltr">
                                                    <p dir="ltr"><span>30% faster page loads post-migration.</span></p>
                                                </li>
                                                <li dir="ltr">
                                                    <p dir="ltr"><span>Improved product discovery with AI-driven recommendations.</span></p>
                                                </li>
                                            </ul>
                                        </li>
                                        <li dir="ltr">
                                            <p dir="ltr"><span>Operational Efficiency:</span></p>
                                            <ul>
                                                <li dir="ltr">
                                                    <p dir="ltr"><span>40% reduction in cart abandonment due to improved checkout flow.</span></p>
                                                </li>
                                                <li dir="ltr">
                                                    <p dir="ltr"><span>Real-time inventory management reduced out-of-stock issues by 50%.</span></p>
                                                </li>
                                            </ul>
                                        </li>
                                        <li dir="ltr">
                                            <p dir="ltr"><span>Revenue Growth:</span></p>
                                            <ul>
                                                <li dir="ltr">
                                                    <p dir="ltr"><span>25% increase in conversion rates.</span></p>
                                                </li>
                                                <li dir="ltr">
                                                    <p dir="ltr"><span>Seamless omnichannel shopping led to a 20% boost in in-store purchases.</span></p>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    
                                    <p><br></p>
                                    <p dir="ltr"><span>Migrating Anita Dongre’s website from Shopify to Salesforce Commerce Cloud significantly improved the brand’s e-commerce capabilities, enabling seamless omnichannel retailing, better inventory management, and a personalized shopping experience. The customized POS system further strengthened in-store operations, ensuring data-driven decision-making and enhanced customer satisfaction.</span></p>
                                    <p dir="ltr"><span>This transformation showcases how leveraging enterprise-grade e-commerce solutions can drive growth, efficiency, and a superior customer experience.</span></p>
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
