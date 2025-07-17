"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const FaqSection = () => {
    return (
        <div className='md:py-32 sm:py-24 w-full px-6'>
            <h3 className="uppercase md:text-[64px] sm:text-[32px] font-semibold leading-tight md:mb-16 sm:mb-8">FAQs</h3>
            <Tabs defaultValue="faq-clients" className="flex xl:flex-row sm:flex-col md:gap-8 sm:gap-4 items-start">
                <TabsList className='flex md:flex-col sm:flex-col sm:flex-wrap sm:items-start bg-white md:gap-3 sm:gap-1 w-full overflow-x-scroll sm:py-2 md:py-0 rounded-none xl:w-2/6'>
                    <TabsTrigger className='md:p-8 sm:p-4 md:px-10 sm:px-4 md:w-full sm:w-fit sm:text-[14px] xl:text-[16px] font-semibold bg-[#F7F7F7] text-black' value="faq-clients">For Clients</TabsTrigger>
                    <TabsTrigger className='md:p-8 sm:p-4 md:px-10 sm:px-4 md:w-full sm:w-fit sm:text-[14px] xl:text-[16px] font-semibold bg-[#F7F7F7] text-black' value="faq-company">For Companies</TabsTrigger>
                    <TabsTrigger className='md:p-8 sm:p-4 md:px-10 sm:px-4 md:w-full sm:w-fit sm:text-[14px] xl:text-[16px] font-semibold bg-[#F7F7F7] text-black' value="faq-support">Support</TabsTrigger>
                </TabsList>

                <TabsContent value="faq-clients" className='top-0 w-full'>
                    <Accordion type="single" collapsible className="border rounded-lg">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>What types of digital products do you specialize in?</AccordionTrigger>
                            <AccordionContent>
                                We focus on creating high-performance web and mobile applications, e-commerce platforms, and custom software solutions, all powered by cutting-edge technology and intentional design.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                            <AccordionTrigger>What is your approach to project management and client collaboration?</AccordionTrigger>
                            <AccordionContent>
                                Our process involves close collaboration with clients at each project stage. We use agile methodologies to ensure flexibility, regular updates, and clear communication, with each project milestone centered around delivering measurable results.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                            <AccordionTrigger>How long does it typically take to complete a project?</AccordionTrigger>
                            <AccordionContent>
                                Timelines vary depending on project complexity and scope. However, we aim for efficient delivery without compromising quality, often completing smaller projects within 4-8 weeks, while larger-scale projects may take several months.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </TabsContent>

                <TabsContent value="faq-company" className="w-full">
                    <Accordion type="single" collapsible className="border rounded-lg">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>How do you handle intellectual property (IP) rights?</AccordionTrigger>
                            <AccordionContent>
                                Upon project completion and payment, we transfer full IP rights to the client, ensuring you have complete control over your product.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                            <AccordionTrigger>Do you offer post-launch support?</AccordionTrigger>
                            <AccordionContent>
                                Yes, we provide a range of post-launch services, including maintenance, updates, and ongoing optimization to keep your digital product performing at its best.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                            <AccordionTrigger>What technologies do you use?</AccordionTrigger>
                            <AccordionContent>
                                Our team is skilled in a range of modern technologies, including React, Node.js, Python, and various cloud platforms, allowing us to select the best tools for each unique project.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </TabsContent>

                <TabsContent value="faq-support" className="w-full">
                    <Accordion type="single" collapsible className="border rounded-lg">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>How do I contact support if I encounter an issue?</AccordionTrigger>
                            <AccordionContent>
                                You can reach our support team via email or our online support portal. We strive to respond to all inquiries within 24 hours.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                            <AccordionTrigger>What is your policy on data privacy?</AccordionTrigger>
                            <AccordionContent>
                                Data privacy is a top priority for us. We comply with all relevant data protection regulations and implement strong security measures to safeguard your information.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                            <AccordionTrigger>Do you offer training or documentation post-project?</AccordionTrigger>
                            <AccordionContent>
                                Yes, we provide comprehensive documentation and, if needed, training sessions to ensure your team can effectively use and manage the product.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default FaqSection