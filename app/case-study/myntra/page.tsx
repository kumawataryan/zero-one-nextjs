import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import "../../../css/download-description.css"

const CaseStudyPage = () => {
    const caseStudyData = {
        hero: {
            clientName: "Myntra",
        },
        clientLogo: "/client-images/myntra.png", // Adjust the path as needed
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
                                    <p><strong>Client:</strong> Myntra<br><strong>Industry:</strong> E-commerce (Fashion & Lifestyle)<br><strong>Duration:</strong> 18 Months<br><strong>Ad Platforms:</strong> Meta Ads, Google Display & Text Ads<br><strong>Monthly Budget:</strong> $100K</p>
                                    <h3><strong>Overview</strong></h3>
                                    <p>In 2018, Myntra partnered with 01 Agency to optimize and scale their digital advertising campaigns across Meta Ads and Google Ads. At the start of the project, Myntra faced significant challenges in ad performance, ROI, and creative quality. Our mission was to improve their conversion rates, boost sales, increase traffic, enhance customer retention, and streamline campaign management.</p>
                                    <h3><strong>Challenges Faced</strong></h3>
                                    <ol>
                                        <li><p><strong>Low ROAS (Return on Ad Spend):</strong> Despite a $100K monthly budget, the revenue generated from ads was below expectations, yielding an inefficient ROAS.</p></li>
                                        <li><p><strong>Poor Creative Assets:</strong> Myntra's existing ad creatives and email templates were underperforming, lacking engagement and brand consistency.</p></li>
                                        <li><p><strong>Ineffective Campaign Structuring:</strong> The campaigns were not optimized for targeting, segmentation, or conversion tracking.</p></li>
                                        <li><p><strong>High CPA (Cost Per Acquisition):</strong> The cost to acquire new customers was significantly higher than the industry benchmark.</p></li>
                                        <li><p><strong>Lack of Retargeting & Retention Strategies:</strong> Myntra had limited audience retention and retargeting tactics in place.</p></li>
                                        <li><p><strong>Complex Campaign Management:</strong> Handling 100+ campaigns daily without automation made tracking and reporting cumbersome.</p></li>
                                    </ol>
                                    <h3><strong>Our Approach & Solutions</strong></h3>
                                    <h4><strong>1. Meta Ads Optimization:</strong></h4>
                                    <ul>
                                        <li><p><strong>Advanced Audience Targeting:</strong> We segmented audiences based on user behavior, interests, purchase history, and demographics.</p></li>
                                        <li><p><strong>Lookalike Audiences:</strong> Created high-performing lookalike audiences to scale campaigns efficiently.</p></li>
                                        <li><p><strong>Dynamic Product Ads (DPA):</strong> Implemented DPA to serve personalized ads based on user engagement with Myntra's website and app.</p></li>
                                        <li><p><strong>Creative Overhaul:</strong> Designed high-quality, engaging visuals and copy optimized for conversions.</p></li>
                                        <li><p><strong>A/B Testing:</strong> Conducted A/B testing on creatives, ad copies, and CTA buttons to find the best-performing variants.</p></li>
                                    </ul>
                                    <h4><strong>2. Google Ads Optimization:</strong></h4>
                                    <ul>
                                        <li><p><strong>Google Search & Display Campaigns:</strong> Optimized text and display ads for maximum click-through rate (CTR) and conversion.</p></li>
                                        <li><p><strong>Responsive Search Ads (RSA):</strong> Implemented RSAs to adapt ad copy dynamically based on user searches.</p></li>
                                        <li><p><strong>Performance Max Campaigns:</strong> Leveraged AI-driven campaigns to maximize ad placements across Google's inventory.</p></li>
                                        <li><p><strong>Smart Bidding Strategies:</strong> Utilized Target CPA and ROAS bidding to improve efficiency.</p></li>
                                        <li><p><strong>Retargeting & Display Remarketing:</strong> Set up advanced remarketing campaigns to re-engage users and drive conversions.</p></li>
                                    </ul>
                                    <h4><strong>3. Email Marketing & Automation:</strong></h4>
                                    <ul>
                                        <li><p><strong>Personalized Email Templates:</strong> Redesigned Myntra's email campaigns to improve engagement and conversion.</p></li>
                                        <li><p><strong>Automated Workflows:</strong> Integrated automation to trigger personalized emails based on user behavior.</p></li>
                                        <li><p><strong>Abandoned Cart Recovery:</strong> Implemented strategies to bring back lost customers and increase purchase completion.</p></li>
                                    </ul>
                                    <h4><strong>4. Performance Tracking & Reporting:</strong></h4>
                                    <ul>
                                        <li><p><strong>Comprehensive Dashboard:</strong> Developed an easy-to-manage reporting system for real-time performance tracking.</p></li>
                                        <li><p><strong>Automated Reports:</strong> Set up automated weekly reports highlighting key performance indicators (KPIs).</p></li>
                                        <li><p><strong>Attribution Model Analysis:</strong> Implemented data-driven attribution to optimize ad spend allocation.</p></li>
                                    </ul>
                                    <h3><strong>Tools & Technologies Used</strong></h3>
                                    <ul>
                                        <li><p><strong>Ad Optimization:</strong> Facebook Ads Manager, Google Ads, Google Analytics, Google Tag Manager</p></li>
                                        <li><p><strong>Creative & Copywriting:</strong> Adobe Photoshop, Adobe Illustrator, Canva, Figma, Copy.ai</p></li>
                                        <li><p><strong>Automation & Tracking:</strong> HubSpot, Klaviyo, Mailchimp, Google Data Studio</p></li>
                                        <li><p><strong>Performance Analysis:</strong> Google Looker Studio, Hotjar, SEMrush, Ahrefs</p></li>
                                    </ul>
                                    <h3><strong>Results & Impact</strong></h3>
                                    <ul>
                                        <li><p><strong>ROAS Improvement:</strong> Achieved a 3x+ return on ad spend.</p></li>
                                        <li><p><strong>Conversion Rate Optimization:</strong> Boosted conversions through data-driven strategies and high-performing creatives.</p></li>
                                        <li><p><strong>Cost Efficiency:</strong> Reduced CPA while increasing sales and customer retention.</p></li>
                                        <li><p><strong>Scalability:</strong> Successfully managed and optimized 100+ campaigns daily with structured automation.</p></li>
                                    </ul>
                                    <p>By leveraging advanced advertising techniques, high-quality creatives, and strategic campaign management, 01 Agency transformed Myntra's digital advertising performance. Our holistic approach not only optimized their ad spend but also improved customer engagement and long-term retention. This project stands as a testament to the power of data-driven marketing and innovative ad strategies.</p>
                                    <p><strong>Ready to Scale Your Business?</strong><br>Partner with 01 Agency to unlock the full potential of your digital advertising campaigns. Contact us today!</p>
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
