import React from 'react'
import "../../css/download-description.css"

const TermsPage = () => {
    return (
        <div className='p-6 mb-24 w-full flex flex-col items-center justify-center'>

            <h1 className='sm:text-[32px] xl:text-[64px] font-semibold xl:leading-[64px] sm:leading-[32px] mt-36 w-full max-w-[800px] items-start'>Privacy Policy</h1>


            <div className='w-full mt-4'>
                {/* content */}
                <div className="flex items-center justify-center w-full mt-4">
                    <div
                        className="custom-content max-w-[800px]"
                        dangerouslySetInnerHTML={{
                            __html: `
                                        <p><strong>Effective Date:</strong> 05/01/2008</p>
                                        <p><strong>Last Updated:</strong> 02/12/2024</p>
                                        <p>At <strong>0101.agency</strong>, we prioritize the privacy and security of our clients' data. This Privacy Policy explains how we collect, use, store, and protect your personal and business information.</p>
                                        <hr>

                                        <h2><strong>1. Information We Collect</strong></h2>
                                        <p>We may collect the following types of information:</p>
                                        <ul>
                                            <li><strong>Personal Information:</strong> Name, email, phone number, and billing details.</li>
                                            <li><strong>Business Information:</strong> Company name, project details, and service requirements.</li>
                                            <li><strong>Technical Information:</strong> IP addresses, cookies, and analytics data to improve our services.</li>
                                        </ul>
                                        <hr>

                                        <h2><strong>2. How We Use Your Information</strong></h2>
                                        <p>We use collected data for:</p>
                                        <ul>
                                            <li>Providing and improving our services.</li>
                                            <li>Communicating project updates and support.</li>
                                            <li>Processing payments and invoices.</li>
                                            <li>Enhancing website performance and user experience.</li>
                                            <li>Legal and compliance purposes.</li>
                                        </ul>
                                        <hr>

                                        <h2><strong>3. Data Sharing & Third-Party Disclosure</strong></h2>
                                        <p>We do <strong>not</strong> sell or share your personal data with third parties, except in the following cases:</p>
                                        <ul>
                                            <li>When required by law or legal proceedings.</li>
                                            <li>With trusted partners for payment processing, analytics, or security enhancements.</li>
                                            <li>If necessary to fulfill contractual obligations.</li>
                                        </ul>
                                        <hr>

                                        <h2><strong>4. Data Security</strong></h2>
                                        <p>We implement strong security measures, including:</p>
                                        <ul>
                                            <li>Encrypted data storage and transfers.</li>
                                            <li>Access restrictions to sensitive information.</li>
                                            <li>Regular security audits and updates.</li>
                                        </ul>
                                        <hr>

                                        <h2><strong>5. Your Rights & Choices</strong></h2>
                                        <p>You have the right to:</p>
                                        <ul>
                                            <li>Request access to your stored data.</li>
                                            <li>Correct or update inaccurate information.</li>
                                            <li>Request deletion of your data, subject to legal and contractual obligations.</li>
                                            <li>Opt out of marketing communications.</li>
                                        </ul>
                                        <hr>

                                        <h2><strong>6. Cookies & Tracking Technologies</strong></h2>
                                        <p>Our website may use cookies to enhance user experience and analyze traffic. You can manage cookie preferences in your browser settings.</p>
                                        <hr>

                                        <h2><strong>7. GDPR & CCPA Compliance</strong></h2>
                                        <p>For users in the <strong>EU and California</strong>, we comply with <strong>GDPR and CCPA regulations</strong> regarding data collection, processing, and user rights.</p>
                                        <hr>

                                        <h2><strong>8. Data Retention</strong></h2>
                                        <p>We retain data only as long as necessary to provide services, comply with legal obligations, or enforce agreements.</p>
                                        <hr>

                                        <h2><strong>9. Changes to This Policy</strong></h2>
                                        <p>We may update this Privacy Policy periodically. Continued use of our services constitutes acceptance of any changes.</p>
                                        <hr>

                                        <p>For any questions or concerns about our Privacy Policy, please contact us at <strong>legal@0101.agency.</strong></p>
                                    `
                        }}
                    />
                </div>
            </div>

        </div>
    )
}

export default TermsPage