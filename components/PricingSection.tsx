"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "./ui/button"
import { Check } from "lucide-react"



const PricingSection = () => {
    return (
        <div className='md:py-32 sm:py-16 w-full px-6'>
            <h3 className="uppercase md:text-[64px] sm:text-[32px] font-semibold leading-tight md:mb-16 sm:mb-8">Choose a plan, <br />place your order</h3>
            <Tabs defaultValue="starter" className="flex xl:flex-row sm:flex-col md:gap-8 sm:gap-4 items-start">
                <TabsList className='flex md:flex-col sm:flex-col sm:items-start bg-white md:gap-3 sm:gap-1 w-full overflow-x-scroll sticky top-20 sm:py-2 md:py-0 rounded-none xl:w-1/5'>
                    <TabsTrigger className='md:p-6 sm:p-2 md:px-10 sm:px-4 md:w-full sm:w-fit text-[14px] font-semibold bg-[#F7F7F7] text-black' value="starter">Starter (100-500$)</TabsTrigger>
                    <TabsTrigger className='md:p-6 sm:p-2 md:px-10 sm:px-4 md:w-full sm:w-fit text-[14px] font-semibold bg-[#F7F7F7] text-black' value="standard">Standard (500-2000$)</TabsTrigger>
                    <TabsTrigger className='md:p-6 sm:p-2 md:px-10 sm:px-4 md:w-full sm:w-fit text-[14px] font-semibold bg-[#F7F7F7] text-black' value="redesign">Redesign (500-2000$)</TabsTrigger>
                    <TabsTrigger className='md:p-6 sm:p-2 md:px-10 sm:px-4 md:w-full sm:w-fit text-[14px] font-semibold bg-[#F7F7F7] text-black' value="custom">Custom</TabsTrigger>
                </TabsList>

                <TabsContent value="starter" className='top-0 w-full'>
                    <div className="w-full mx-auto p-10 bg-[#FAFAFA] rounded-lg">
                        <div className="grid grid-cols-1 gap-4">
                            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                                <span>Pages</span>
                                <span className="text-gray-500">up to 10 pages</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                                <span>Designers</span>
                                <span className="text-gray-500">at most 1-3</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                                <span>Iterations</span>
                                <span className="text-gray-500">1-3 or more until satisfied</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                                <span>User flow</span>
                                <span className="text-gray-500">1</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                                <span>Ready for development</span>
                                <Check className="w-4 h-4" />
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                                <span>Branding Elements</span>
                                <Check className="w-4 h-4" />
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                                <span>Custom Illustrations & Graphics</span>
                                <Check className="w-4 h-4" />
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                                <span>Accessibility testing</span>
                                <Check className="w-4 h-4" />
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                                <span>Usability testing</span>
                                <Check className="w-4 h-4" />
                            </div>
                            <div className="flex justify-between items-center pb-4">
                                <span>Well documented</span>
                                <Check className="w-4 h-4" />
                            </div>
                        </div>
                        <Button className="md:h-20 sm:h-10 mt-2 rounded-lg border-white border items-center uppercase md:text-[24px] sm:text-[18px] font-medium md:pl-8 sm:pl-4 justify-center cursor-pointer hover:bg-[#141DEA] w-full">Send Reguest</Button>
                    </div>
                </TabsContent>

                <TabsContent value="standard" className="w-full">
                    <div className="w-full mx-auto p-10 bg-[#FAFAFA] rounded-lg">
                        <div className="grid grid-cols-1 gap-4">
                            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                                <span>Pages</span>
                                <span className="text-gray-500">up to 10 pages</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                                <span>Designers</span>
                                <span className="text-gray-500">at most 5-6</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                                <span>Iterations</span>
                                <span className="text-gray-500">4-5 or more until satisfied</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                                <span>User flow</span>
                                <span className="text-gray-500">1</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                                <span>Ready for development</span>
                                <Check className="w-4 h-4" />
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                                <span>Branding Elements</span>
                                <Check className="w-4 h-4" />
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                                <span>Custom Illustrations & Graphics</span>
                                <Check className="w-4 h-4" />
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                                <span>Accessibility testing</span>
                                <Check className="w-4 h-4" />
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                                <span>Usability testing</span>
                                <Check className="w-4 h-4" />
                            </div>
                            <div className="flex justify-between items-center pb-4">
                                <span>Well documented</span>
                                <Check className="w-4 h-4" />
                            </div>
                        </div>
                        <Button className="md:h-20 sm:h-10 mt-2 rounded-lg border-white border items-center uppercase md:text-[24px] sm:text-[18px] font-medium md:pl-8 sm:pl-4 justify-center cursor-pointer hover:bg-[#141DEA] w-full">Send Reguest</Button>
                    </div>
                </TabsContent>

                <TabsContent value="redesign" className="w-full">
                    <div className="w-full mx-auto p-10 bg-[#FAFAFA] rounded-lg">
                        <div className="grid grid-cols-1 gap-4">
                            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                                <span>Pages</span>
                                <span className="text-gray-500">up to 10 pages</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                                <span>Designers</span>
                                <span className="text-gray-500">at most 10-20</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                                <span>Iterations</span>
                                <span className="text-gray-500">10-15 or more until satisfied</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                                <span>User flow</span>
                                <span className="text-gray-500">1</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                                <span>Ready for development</span>
                                <Check className="w-4 h-4" />
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                                <span>Branding Elements</span>
                                <Check className="w-4 h-4" />
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                                <span>Custom Illustrations & Graphics</span>
                                <Check className="w-4 h-4" />
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                                <span>Accessibility testing</span>
                                <Check className="w-4 h-4" />
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                                <span>Usability testing</span>
                                <Check className="w-4 h-4" />
                            </div>
                            <div className="flex justify-between items-center pb-4">
                                <span>Well documented</span>
                                <Check className="w-4 h-4" />
                            </div>
                        </div>
                        <Button className="md:h-20 sm:h-10 mt-2 rounded-lg border-white border items-center uppercase md:text-[24px] sm:text-[18px] font-medium md:pl-8 sm:pl-4 justify-center cursor-pointer hover:bg-[#141DEA] w-full">Send Reguest</Button>
                    </div>
                </TabsContent>

                <TabsContent value="custom" className="w-full">
                    <div className="w-full mx-auto p-10 bg-[#FAFAFA] rounded-lg">
                        <div className="grid grid-cols-1 gap-4">
                            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                                <span>Pages</span>
                                <span className="text-gray-500">up to 10 pages</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                                <span>Designers</span>
                                <span className="text-gray-500">at most 5-6</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                                <span>Iterations</span>
                                <span className="text-gray-500">4-5 or more until satisfied</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                                <span>User flow</span>
                                <span className="text-gray-500">1</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                                <span>Ready for development</span>
                                <Check className="w-4 h-4" />
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                                <span>Branding Elements</span>
                                <Check className="w-4 h-4" />
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                                <span>Custom Illustrations & Graphics</span>
                                <Check className="w-4 h-4" />
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                                <span>Accessibility testing</span>
                                <Check className="w-4 h-4" />
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                                <span>Usability testing</span>
                                <Check className="w-4 h-4" />
                            </div>
                            <div className="flex justify-between items-center pb-4">
                                <span>Well documented</span>
                                <Check className="w-4 h-4" />
                            </div>
                            <Button className="md:h-20 sm:h-10 mt-2 rounded-lg border-white border items-center uppercase md:text-[24px] sm:text-[18px] font-medium md:pl-8 sm:pl-4 justify-center cursor-pointer hover:bg-[#141DEA] w-full">Contact Us</Button>
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default PricingSection