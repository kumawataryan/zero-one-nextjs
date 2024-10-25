"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from "./ui/button"
import { ArrowUpRight, Dribbble, Instagram, Linkedin, Map, Phone } from "lucide-react"
import Link from "next/link"
import BehanceIcon from "../public/icons/behance-icon.svg";
import Image from "next/image"


const ContactForm = () => {

    return (
        <div className='bg-[#161616] md:py-48 sm:py-24 w-full px-6'>
            <h3 className="uppercase text-white md:text-[64px] sm:text-[32px] font-semibold leading-tight md:mb-16 sm:mb-8">Custom Solutions <br />Await: Contact Us <br />Today</h3>
            <Tabs defaultValue="form" className="flex xl:flex-row sm:flex-col md:gap-8 sm:gap-4 items-start">
                <TabsList className='flex md:flex-col sm:flex-col sm:items-start bg-transparent md:gap-3 sm:gap-1 bg-[#161616] w-full sticky top-20 sm:py-2 md:py-0 rounded-none xl:w-1/5'>
                    <TabsTrigger className='md:p-6 sm:p-2 md:px-10 sm:px-4 md:w-full sm:w-fit text-[14px] font-semibold bg-white text-black' value="form">Fill out</TabsTrigger>
                    <TabsTrigger className='md:p-6 sm:p-2 md:px-10 sm:px-4 md:w-full sm:w-fit text-[14px] font-semibold bg-white text-black' value="call">Schedule a call</TabsTrigger>
                    <TabsTrigger className='md:p-6 sm:p-2 md:px-10 sm:px-4 md:w-full sm:w-fit text-[14px] font-semibold bg-white text-black' value="more">More way to Connect</TabsTrigger>
                </TabsList>
                <TabsContent value="form" className='top-0 w-full'>
                    <form action="" className='flex flex-col gap-4'>
                        <div className='flex md:flex-row sm:flex-col gap-4 w-full'>
                            <Input className='border-[0.5px] border-white bg-[#F5F5F5]/10 md:h-16 sm:h-12 text-white md:px-6 sm:px-4' placeholder='Name' required />
                            <Input className='border-[0.5px] border-white bg-[#F5F5F5]/10 md:h-16 sm:h-12 text-white md:px-6 sm:px-4' placeholder='Email*' required />
                            <Input className='border-[0.5px] border-white bg-[#F5F5F5]/10 md:h-16 sm:h-12 text-white md:px-6 sm:px-4' placeholder='Phone' />
                        </div>
                        <Textarea className='border-[0.5px] border-white bg-[#F5F5F5]/10 h-16 text-white md:p-6 sm:p-4' placeholder='Describe your project' required />

                        <div className='flex gap-4 w-full'>
                            <Select>
                                <SelectTrigger className='border-[0.5px] border-white bg-[#F5F5F5]/10 md:h-16 sm:h-12 text-white md:px-6 sm:px-4'>
                                    <SelectValue placeholder="Service*" className="sm:text-[12px]" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem className='p-4 font-semibold' value="ui-ux-design">UI/UX Design</SelectItem>
                                    <SelectItem className='p-4 font-semibold' value="ecommerce-development">Ecommerce Development</SelectItem>
                                    <SelectItem className='p-4 font-semibold' value="graphic-design">Graphic Design</SelectItem>
                                    <SelectItem className='p-4 font-semibold' value="digital-marketing">Digital Marketing</SelectItem>
                                    <SelectItem className='p-4 font-semibold' value="game-development">Game Development</SelectItem>
                                </SelectContent>
                            </Select>

                            <Select>
                                <SelectTrigger className='border-[0.5px] border-white bg-[#F5F5F5]/10 md:h-16 sm:h-12 text-white md:px-6 sm:px-4'>
                                    <SelectValue placeholder="Budget(optional)" className="sm:text-[12px]" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem className='p-4 font-semibold' value="100-500">100$-500$</SelectItem>
                                    <SelectItem className='p-4 font-semibold' value="1000-2000">1000$-2000$</SelectItem>
                                    <SelectItem className='p-4 font-semibold' value="2000-3000">2000$-3000$</SelectItem>
                                    <SelectItem className='p-4 font-semibold' value="3000-5000">3000$-5000$</SelectItem>
                                    <SelectItem className='p-4 font-semibold' value="5000-above">5000$-10000$(And Above)</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <Button className="md:h-24 sm:h-16 mt-2 rounded-lg border-white border items-center uppercase md:text-[32px] sm:text-[18px] font-semibold md:pl-8 sm:pl-4 justify-between cursor-pointer hover:bg-white hover:text-black">Send Reguest<div className='bg-[#141DEA] md:p-6 sm:p-4 rounded-lg flex items-center justify-center'><ArrowUpRight className='text-white w-20 h-20' /></div></Button>
                    </form>
                </TabsContent>
                <TabsContent value="call" className="w-full">
                    <iframe className="w-full h-[700px] rounded-lg" src="https://cal.com/aryan-kumawat-8uc2eo/15min"></iframe>
                </TabsContent>
                <TabsContent value="more">
                    <div className="flex flex-wrap gap-4">
                        <Link href='/' className='flex border-[0.5px] border-white bg-[#F5F5F5]/10 h-20 text-white px-6 rounded-md w-[300px] items-center justify-center'>
                            <Phone />
                        </Link>

                        <Link href='/' className='flex border-[0.5px] border-white bg-[#F5F5F5]/10 h-20 text-white px-6 rounded-md w-[300px] items-center justify-center'>
                            <Dribbble />
                        </Link>

                        <Link href='/' className='flex border-[0.5px] border-white bg-[#F5F5F5]/10 h-20 text-white px-6 rounded-md w-[300px] items-center justify-center'>
                            <Map />
                        </Link>

                        <Link href='/' className='flex border-[0.5px] border-white bg-[#F5F5F5]/10 h-20 text-white px-6 rounded-md w-[300px] items-center justify-center'>
                            <Linkedin />
                        </Link>

                        <Link href='/' className='flex border-[0.5px] border-white bg-[#F5F5F5]/10 h-20 text-white px-6 rounded-md w-[300px] items-center justify-center'>
                            <Instagram />
                        </Link>

                        <Link href='/' className='flex border-[0.5px] border-white bg-[#F5F5F5]/10 h-20 text-white px-6 rounded-md w-[300px] items-center justify-center'>
                            <Image src={BehanceIcon} width={24} height={24} alt="behance"></Image>
                        </Link>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default ContactForm