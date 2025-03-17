import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import "../../../css/download-description.css"

const CaseStudyPage = () => {
    const caseStudyData = {
        hero: {
            clientName: "Revolutionizing Fleet Management for Ashok Leyland",
        },
        clientLogo: "/client-images/ashok-leyland.png", // Adjust the path as needed
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
                                    <p><strong>Client:</strong>Ashok Leyland</p>
                                    <p><strong>Industry:</strong> Automotive (Heavy Vehicles & Transportation)</p>
                                    <p><strong>Scope: </strong>2000+ Heavy Vehicles Across India</p>
                                    <p><strong>Technology Stack: </strong>Java, SQL, HTML, Angular, Android, iOS</p>
                                    <p><strong></strong>Hosting:AWS</p>

                                    <h2>Overview</h2>
                                    <p>Ashok Leyland, a leading manufacturer of trucks and buses in India, faced significant challenges in managing its extensive fleet of over 2000 heavy vehicles. 
                                    The company struggled with timely maintenance, fuel theft, fraudulent reimbursement claims, and inefficient tracking of vehicle locations and repairs. 
                                    To address these issues, 01 Agency developed a comprehensive digital solution comprising a <strong>Mobile App, Web App, and a Centralized Dashboard</strong>, along with 
                                    <strong>pre-installed mobile devices</strong> in vehicles to enhance real-time monitoring and fleet efficiency.</p>

                                    <h2>Challenges Faced</h2>
                                    <ul>
                                        <li><strong>Fuel Fraud & False Reimbursement Claims:</strong> Drivers were manipulating fuel receipts and submitting fraudulent claims.</li>
                                        <li><strong>Unoptimized Vehicle Maintenance:</strong> Delayed repairs and inconsistent servicing schedules led to increased downtime.</li>
                                        <li><strong>Geo-Tracking & Route Optimization Issues:</strong> Difficulty in locating nearby service stations and optimizing routes.</li>
                                        <li><strong>Lack of Driver Performance Monitoring:</strong> No system to reward efficient drivers or penalize non-compliance.</li>
                                        <li><strong>Inefficient Fleet Management:</strong> Managing repairs, spare parts, and vendor coordination was time-consuming.</li>
                                        <li><strong>Scalability Issues:</strong> Manual tracking of 2000+ vehicles was inefficient and costly.</li>
                                    </ul>

                                    <h2>Our Solution</h2>

                                    <h3>1. Mobile & Web App Development</h3>
                                    <ul>
                                        <li>Built a <strong>driver and manager app</strong> for seamless tracking and reporting.</li>
                                        <li>Enabled real-time <strong>geo-location tracking</strong> for vehicles and fuel stations.</li>
                                        <li>Integrated a <strong>fuel management system</strong> to track fuel consumption.</li>
                                        <li>Designed an intuitive <strong>dashboard</strong> for vehicle health monitoring.</li>
                                    </ul>

                                    <h3>2. Pre-Installed Smart Devices</h3>
                                    <ul>
                                        <li>Installed <strong>customized mobile devices</strong> in trucks and buses.</li>
                                        <li>Optimized devices for <strong>low-latency GPS tracking</strong>.</li>
                                        <li>Integrated an <strong>alert system</strong> for critical vehicle issues.</li>
                                    </ul>

                                    <h3>3. Advanced Fleet Maintenance & Quality Control</h3>
                                    <ul>
                                        <li>Automated <strong>repair and maintenance scheduling</strong>.</li>
                                        <li>Streamlined tracking of <strong>spare parts and accident reports</strong>.</li>
                                        <li>Enabled <strong>third-party vendor coordination</strong> for servicing.</li>
                                    </ul>

                                    <h3>4. Fraud Prevention & Fuel Management</h3>
                                    <ul>
                                        <li>Integrated <strong>fuel tracking sensors</strong> for accurate fuel data.</li>
                                        <li>Developed an <strong>AI-powered fraud detection system</strong>.</li>
                                        <li>Allowed <strong>digital fuel receipts</strong> to prevent fraudulent claims.</li>
                                    </ul>

                                    <h3>5. Driver Performance & Rewards System</h3>
                                    <ul>
                                        <li>Introduced <strong>driver monitoring metrics</strong> for tracking performance.</li>
                                        <li>Established a <strong>driver reward system</strong> to incentivize efficiency.</li>
                                        <li>Implemented a <strong>penalty system</strong> for reckless driving.</li>
                                    </ul>

                                    <h3>6. Scalable & Efficient Management System</h3>
                                    <ul>
                                        <li>Designed a <strong>centralized dashboard</strong> for efficient fleet management.</li>
                                        <li>Provided <strong>real-time analytics and reports</strong> for decision-making.</li>
                                        <li>Ensured seamless integration with <strong>third-party vendors</strong>.</li>
                                    </ul>

                                    <h2>Technology Stack & Hosting</h2>
                                    <ul>
                                        <li><strong>Frontend:</strong> Angular, HTML</li>
                                        <li><strong>Backend:</strong> Java, SQL</li>
                                        <li><strong>Mobile Development:</strong> Android (Java/Kotlin), iOS (Swift)</li>
                                        <li><strong>Cloud Hosting:</strong> AWS</li>
                                    </ul>
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
