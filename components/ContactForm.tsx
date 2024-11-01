"use client";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";
import { ArrowUpRight, Dribbble, Instagram, Linkedin, Map, Phone } from "lucide-react";
import Link from "next/link";
import BehanceIcon from "../public/icons/behance-icon.svg";
import Image from "next/image";
import { cn } from "../lib/utils";

interface ContactFormProps {
    className?: string;
    heading?: boolean;
}

const ContactForm = ({ className, heading }: ContactFormProps) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        budget: "",
        message: "",
    });
    const [loading, setLoading] = useState(false); // To manage loading state
    const { toast } = useToast(); // Using the toast function

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true); // Start loading

        // Prepare the message including the phone, service, and budget
        const messageWithDetails = `
            ${formData.message}
        `;

        const dataToSend = {
            ...formData,
            message: messageWithDetails // Update the message to include additional details
        };

        try {
            const response = await fetch("http://localhost:3000/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataToSend), // Use the updated data
            });

            if (response.ok) {
                toast({
                    title: "Email Sent!",
                    description: "Your request has been sent successfully. We will contact you soon.",
                    duration: 3000,
                });
                setFormData({ name: "", email: "", phone: "", service: "", budget: "", message: "" }); // Reset form
            } else {
                toast({
                    title: "Error",
                    description: "There was an error sending your request. Please try again.",
                    duration: 3000,
                });
            }
        } catch {
            toast({
                title: "Error",
                description: "There was an error sending your request. Please try again.",
                duration: 3000,
            });
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <div className={cn('bg-[#161616] md:py-32 sm:py-24 w-full px-6', className)}>
            {
                heading &&
                <h3 className="uppercase text-white md:text-[64px] sm:text-[32px] font-semibold leading-tight md:mb-16 sm:mb-8">Custom Solutions <br />Await: Contact Us <br />Today</h3>
            }
            <Tabs defaultValue="form" className="flex xl:flex-row sm:flex-col md:gap-8 sm:gap-4 items-start">
                <TabsList className='flex md:flex-col sm:flex-col sm:items-start bg-transparent md:gap-3 sm:gap-1 bg-[#161616] w-full sm:py-2 md:py-0 rounded-none xl:w-2/6'>
                    <TabsTrigger className='md:p-8 sm:p-2 md:px-10 sm:px-4 md:w-full sm:w-fit sm:text-[14px] xl:text-[16px] font-semibold bg-[#F7F7F7] text-black' value="form">Fill out</TabsTrigger>
                    <TabsTrigger className='md:p-8 sm:p-2 md:px-10 sm:px-4 md:w-full sm:w-fit sm:text-[14px] xl:text-[16px] font-semibold bg-[#F7F7F7] text-black' value="call">Schedule a call</TabsTrigger>
                    <TabsTrigger className='md:p-8 sm:p-2 md:px-10 sm:px-4 md:w-full sm:w-fit sm:text-[14px] xl:text-[16px] font-semibold bg-[#F7F7F7] text-black' value="more">More way to Connect</TabsTrigger>
                </TabsList>
                <TabsContent value="form" className='top-0 w-full'>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                        <div className='flex md:flex-row sm:flex-col gap-4 w-full'>
                            <Input
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className='border-[0.5px] border-white bg-[#F5F5F5]/10 md:h-16 sm:h-12 md:px-6 sm:px-4'
                                placeholder='Name'
                                required
                            />
                            <Input
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                className='border-[0.5px] border-white bg-[#F5F5F5]/10 md:h-16 sm:h-12 md:px-6 sm:px-4'
                                placeholder='Email*'
                                required
                            />
                            <Input
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className='border-[0.5px] border-white bg-[#F5F5F5]/10 md:h-16 sm:h-12 md:px-6 sm:px-4'
                                placeholder='Phone'
                            />
                        </div>
                        <Textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className='border-[0.5px] border-white bg-[#F5F5F5]/10 h-16 md:p-6 sm:p-4'
                            placeholder='Describe your project (use **text** for bold)'
                            required
                        />
                        <div className='flex gap-4 w-full'>
                            <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, service: value }))}>
                                <SelectTrigger className='border-[0.5px] border-white bg-[#F5F5F5]/10 md:h-16 sm:h-12 md:px-6 sm:px-4'>
                                    <SelectValue placeholder="Service*" className="sm:text-[12px]" />
                                </SelectTrigger>
                                <SelectContent>
                                    {["ui-ux-design", "ecommerce-development", "graphic-design", "digital-marketing", "game-development", "app-development", "startup-solutions", "3d-modelling-rendering", "maintenance-support", "logo-brand-identity", "packaging-design", "3d-animation", "software-development", "ai-for-business", "blockchain-crypto", "wordpress-development", "shopify-development", "social-media-marketing", "ecommerce-management", "lead-generation", "data-scraping", "marketing-strategy", "tech-consultation", "staff-augmentation", "blockchain-development", "ai-services"].map(service => (
                                        <SelectItem key={service} className='p-4 font-semibold' value={service}>{service.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, budget: value }))}>
                                <SelectTrigger className='border-[0.5px] border-white bg-[#F5F5F5]/10 md:h-16 sm:h-12 md:px-6 sm:px-4'>
                                    <SelectValue placeholder="Budget (optional)" className="sm:text-[12px]" /> {/* Updated placeholder */}
                                </SelectTrigger>
                                <SelectContent>
                                    {["$100-$500", "$1000-$2000", "$2000-$3000", "$3000-$5000", "$5000-above"].map(budget => (
                                        <SelectItem key={budget} className='p-4 font-semibold' value={budget}>{budget.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <Button disabled={loading} className="md:h-24 sm:h-16 mt-2 rounded-lg border-white border items-center uppercase md:text-[32px] sm:text-[18px] font-semibold md:pl-8 sm:pl-4 justify-between cursor-pointer hover:bg-white hover:text-black">
                            {loading ? (
                                <span className="loader">Sending...</span>
                            ) : (
                                "Send Request"
                            )}
                            <div
                                className='bg-[#141DEA] md:p-6 sm:p-4 rounded-lg flex items-center justify-center'>
                                <ArrowUpRight className='text-white w-20 h-20' />
                            </div>
                        </Button>

                    </form>
                </TabsContent>
                <TabsContent value="call" className="w-full">
                    <iframe className="w-full h-[700px] rounded-lg" src="https://cal.com/aryan-kumawat-8uc2eo/15min"></iframe>
                </TabsContent>
                <TabsContent value="more">
                    <div className="flex flex-wrap gap-4">
                        <Link href='/' className='flex border-[0.5px] border-white bg-[#F5F5F5]/10 xl:h-20 sm:h-12 text-white px-6 rounded-md xl:w-[300px] sm:w-full items-center justify-center'>
                            <Phone />
                        </Link>
                        <Link href='/' className='flex border-[0.5px] border-white bg-[#F5F5F5]/10 xl:h-20 sm:h-12 text-white px-6 rounded-md w-[300px] xl:w-[300px] sm:w-full items-center justify-center'>
                            <Dribbble />
                        </Link>
                        <Link href='/' className='flex border-[0.5px] border-white bg-[#F5F5F5]/10 xl:h-20 sm:h-12 text-white px-6 rounded-md w-[300px] xl:w-[300px] sm:w-full items-center justify-center'>
                            <Map />
                        </Link>
                        <Link href='/' className='flex border-[0.5px] border-white bg-[#F5F5F5]/10 xl:h-20 sm:h-12 text-white px-6 rounded-md w-[300px] xl:w-[300px] sm:w-full items-center justify-center'>
                            <Linkedin />
                        </Link>
                        <Link href='/' className='flex border-[0.5px] border-white bg-[#F5F5F5]/10 xl:h-20 sm:h-12 text-white px-6 rounded-md w-[300px] xl:w-[300px] sm:w-full items-center justify-center'>
                            <Instagram />
                        </Link>
                        <Link href='/' className='flex border-[0.5px] border-white bg-[#F5F5F5]/10 xl:h-20 sm:h-12 text-white px-6 rounded-md w-[300px] xl:w-[300px] sm:w-full items-center justify-center'>
                            <Image src={BehanceIcon} width={24} height={24} alt="behance"></Image>
                        </Link>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default ContactForm;
