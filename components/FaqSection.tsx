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
        <div className='md:py-60 sm:py-24 w-full px-6'>
            <h3 className="uppercase md:text-[64px] sm:text-[32px] font-semibold leading-tight md:mb-16 sm:mb-8">FAQs</h3>
            <Tabs defaultValue="faq-clients" className="flex xl:flex-row sm:flex-col md:gap-8 sm:gap-4 items-start">
                <TabsList className='flex md:flex-col sm:flex-col sm:items-start bg-white md:gap-3 sm:gap-1 w-full overflow-x-scroll sm:py-2 md:py-0 rounded-none xl:w-2/6'>
                    <TabsTrigger className='md:p-8 sm:p-2 md:px-10 sm:px-4 md:w-full sm:w-fit sm:text-[14px] xl:text-[16px] font-semibold bg-[#F7F7F7] text-black' value="faq-clients">For clients</TabsTrigger>
                    <TabsTrigger className='md:p-8 sm:p-2 md:px-10 sm:px-4 md:w-full sm:w-fit sm:text-[14px] xl:text-[16px] font-semibold bg-[#F7F7F7] text-black' value="faq-company">For companies</TabsTrigger>
                    <TabsTrigger className='md:p-8 sm:p-2 md:px-10 sm:px-4 md:w-full sm:w-fit sm:text-[14px] xl:text-[16px] font-semibold bg-[#F7F7F7] text-black' value="faq-support">Support</TabsTrigger>
                </TabsList>

                <TabsContent value="faq-clients" className='top-0 w-full'>

                    <Accordion type="single" collapsible className="border rounded-lg">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>How can you help with legal issues related to digital products?</AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>

                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>What is the process for consulting with you?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>How do you handle intellectual property rights for digital products?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Can you assist with cybersecurity legal issues?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1" className="border-b-0">
                                <AccordionTrigger>How can you help with legal issues related to digital products?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </Accordion>
                </TabsContent>

                <TabsContent value="faq-company" className="w-full">
                    <Accordion type="single" collapsible className="border rounded-lg">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>How can you help with legal issues related to digital products?</AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>

                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>What is the process for consulting with you?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Can you assist with cybersecurity legal issues?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1" className="border-b-0">
                                <AccordionTrigger>How can you help with legal issues related to digital products?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </Accordion>
                </TabsContent>

                <TabsContent value="faq-support" className="w-full">
                    <Accordion type="single" collapsible className="border rounded-lg">
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>What is the process for consulting with you?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>How do you handle intellectual property rights for digital products?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Can you assist with cybersecurity legal issues?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1" className="border-b-0">
                                <AccordionTrigger>How can you help with legal issues related to digital products?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </Accordion>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default FaqSection