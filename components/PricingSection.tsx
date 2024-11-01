"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "./ui/button"

interface TabItem {
    value: string;
    label: string;
    content: { label: string; detail?: string; icon?: JSX.Element }[];
    buttonText: string;
}

interface PricingSectionProps {
    tabData: TabItem[];
}

const PricingSection: React.FC<PricingSectionProps> = ({ tabData }) => {
    return (
        <div className='md:py-32 sm:py-16 w-full px-6 bg-[#141414]'>
            <h3 className="uppercase md:text-[64px] sm:text-[32px] font-semibold leading-tight md:mb-16 sm:mb-8 text-white">Choose a plan, <br />place your order</h3>
            <Tabs defaultValue={tabData[0].value} className="flex xl:flex-row sm:flex-col md:gap-8 sm:gap-4 items-start">
                <TabsList className='flex md:flex-col sm:flex-col sm:items-start bg-transparent md:gap-3 sm:gap-1 w-full overflow-x-scroll sm:py-2 md:py-0 rounded-none xl:w-2/6'>
                    {tabData.map(tab => (
                        <TabsTrigger key={tab.value} className='md:p-8 sm:p-2 md:px-10 sm:px-4 md:w-full sm:w-fit sm:text-[14px] xl:text-[16px] font-semibold bg-[#F7F7F7] text-black' value={tab.value}>
                            {tab.label}
                        </TabsTrigger>
                    ))}
                </TabsList>

                {tabData.map(tab => (
                    <TabsContent key={tab.value} value={tab.value} className='top-0 w-full'>
                        <div className="w-full mx-auto p-10 bg-[#FAFAFA] rounded-lg">
                            <div className="grid grid-cols-1 gap-4">
                                {tab.content.map((item, index) => (
                                    <div key={index} className="flex justify-between items-center border-b border-gray-200 pb-4">
                                        <span>{item.label}</span>
                                        {item.detail ? <span className="text-gray-500">{item.detail}</span> : item.icon}
                                    </div>
                                ))}
                            </div>
                            <Button className="md:h-20 sm:h-10 mt-2 rounded-lg border-white border items-center uppercase md:text-[24px] sm:text-[18px] font-medium md:pl-8 sm:pl-4 justify-center cursor-pointer hover:bg-[#141DEA] w-full">
                                {tab.buttonText}
                            </Button>
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    )
}

export default PricingSection