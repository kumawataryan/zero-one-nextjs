import React from 'react'
import "../../css/download-description.css"

const TermsPage = () => {
    return (
        <div className='p-6 mb-24 w-full flex flex-col items-center justify-center'>

            <h1 className='sm:text-[32px] xl:text-[64px] font-semibold xl:leading-[64px] sm:leading-[32px] mt-36 w-full max-w-[800px] items-start'>Terms</h1>


            <div className='w-full mt-4'>
                {/* content */}
                <div className="flex items-center justify-center w-full mt-4">
                    <div
                        className="custom-content max-w-[800px]"
                        dangerouslySetInnerHTML={{
                            __html: `
                                        <p><strong>Effective Date:</strong> 05/01/2008</p>
                                        <p><strong>Last Updated:</strong> 02/12/2024</p>

                                        <p>Welcome to <strong>0101.agency</strong>. By accessing or using our services, you agree to the following Terms and Conditions. Please read them carefully.</p>

                                        <hr>

                                        <h2><strong>1. Definitions</strong></h2>
                                        <ul>
                                            <li><strong>"Agency"</strong> refers to 0101.agency, its employees, contractors, and affiliates.</li>
                                            <li><strong>"Client"</strong> refers to any individual or entity engaging with our services.</li>
                                            <li><strong>"Services"</strong> include but are not limited to web development, marketing, SEO, software development, and consulting.</li>
                                            <li><strong>"Confidential Information"</strong> refers to any proprietary or sensitive data shared between both parties.</li>
                                        </ul>

                                        <hr>

                                        <h2><strong>2. Engagement & Scope of Work</strong></h2>
                                        <ul>
                                            <li>All projects, timelines, and deliverables will be outlined in a separate <strong>Memorandum of Understanding (MOU)</strong> before commencing work.</li>
                                            <li>The Agency will perform services as per the agreed-upon scope, timelines, and payment terms.</li>
                                            <li>Any modifications must be documented and mutually agreed upon in writing.</li>
                                        </ul>

                                        <hr>

                                        <h2><strong>3. Confidentiality & Non-Disclosure Agreement (NDA)</strong></h2>
                                        <ul>
                                            <li>Both parties agree to maintain the confidentiality of all shared information.</li>
                                            <li>The Client's data, project details, and proprietary information will not be disclosed to any third party without explicit consent.</li>
                                            <li>The NDA remains in effect for a period of [X] years from the completion of the project.</li>
                                        </ul>

                                        <hr>

                                        <h2><strong>4. Intellectual Property</strong></h2>
                                        <ul>
                                            <li>All intellectual property created during the project will be transferred to the Client upon final payment unless otherwise specified in the contract.</li>
                                            <li>The Agency retains the right to use generic and reusable components that do not contain the Client’s confidential information.</li>
                                            <li>Any third-party tools or software used will be subject to their respective End User License Agreements (EULA).</li>
                                        </ul>

                                        <hr>

                                        <h2><strong>5. End User License Agreement (EULA)</strong></h2>
                                        <ul>
                                            <li>If software or digital products are provided, the Client agrees to use them strictly for their intended purpose.</li>
                                            <li>Redistribution, modification, or resale of provided software without prior consent is prohibited.</li>
                                            <li>The Agency is not liable for misuse, unauthorized alterations, or external vulnerabilities introduced by third-party interactions.</li>
                                        </ul>

                                        <hr>

                                        <h2><strong>6. Payment Terms</strong></h2>
                                        <ul>
                                            <li>Payment terms will be defined in the project agreement or invoice.</li>
                                            <li>Late payments may incur penalties or result in project delays.</li>
                                            <li>All payments are non-refundable unless explicitly agreed upon.</li>
                                        </ul>

                                        <hr>

                                        <h2><strong>7. Liability & Indemnification</strong></h2>
                                        <ul>
                                            <li>The Agency is not liable for any indirect, incidental, or consequential damages arising from the use of its services.</li>
                                            <li>The Client agrees to indemnify the Agency against any legal claims resulting from misuse or third-party actions.</li>
                                        </ul>

                                        <hr>

                                        <h2><strong>8. Termination & Dispute Resolution</strong></h2>
                                        <ul>
                                            <li>Either party may terminate the agreement with a <strong>30-day written notice</strong>, provided obligations are met.</li>
                                            <li>Disputes will first be resolved through mediation. If unresolved, they will be settled under the jurisdiction of [Insert Location].</li>
                                        </ul>

                                        <hr>

                                        <h2><strong>9. Data Protection & Compliance</strong></h2>
                                        <ul>
                                            <li>The Agency follows strict <strong>GDPR, CCPA, and relevant data protection laws</strong> to ensure client data security.</li>
                                            <li>Any personal information collected will be handled in accordance with our <strong>Privacy Policy</strong>.</li>
                                        </ul>

                                        <hr>

                                        <h2><strong>10. Amendments & Updates</strong></h2>
                                        <ul>
                                            <li>The Agency reserves the right to update these terms at any time.</li>
                                            <li>Continued use of services constitutes acceptance of any changes.</li>
                                        </ul>

                                        <hr>

                                        <p>For any questions regarding these Terms & Conditions, please contact us at <strong>legal@0101.agency</strong></p>
                                    `
                        }}
                    />
                </div>
            </div>

        </div>
    )
}

export default TermsPage