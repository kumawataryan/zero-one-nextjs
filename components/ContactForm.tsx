"use client";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                toast({
                    title: "Error",
                    description: errorData.message || "There was an error sending your request. Please try again.",
                    duration: 3000,
                });
                return;
            }

            toast({
                title: "Email Sent!",
                description: "Your request has been sent successfully. We will contact you soon.",
                duration: 3000,
            });

            setFormData({ name: "", email: "", phone: "", service: "", budget: "", message: "" });
        } catch {
            toast({
                title: "Error",
                description: "There was an error sending your request. Please try again.",
                duration: 3000,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={cn('bg-[#DBE2EA] md:py-32 sm:py-24 w-full px-6', className)}>
            {heading && <h3 className="sm:text-[32px] xl:text-[64px] font-semibold xl:leading-[64px] sm:leading-[32px] md:mb-16 sm:mb-8 text-[#062330]">Custom Solutions <br />Await: Contact Us <br />Today</h3>}
            <Tabs defaultValue="form" className="flex xl:flex-row sm:flex-col md:gap-8 sm:gap-4 items-start">
                <TabsList className='flex flex-col sm:flex-wrap sm:items-start bg-transparent md:gap-3 sm:gap-2 bg-[#161616] sm:w-full sm:py-2 md:py-0 rounded-none xl:w-2/6'>
                    <TabsTrigger className='md:p-8 sm:p-4 md:px-10 sm:px-4 md:w-full sm:w-fit sm:text-[14px] xl:text-[16px] font-semibold bg-white/20 text-black' value="form">Fill out</TabsTrigger>
                    <TabsTrigger className='md:p-8 sm:p-4 md:px-10 sm:px-4 md:w-full sm:w-fit sm:text-[14px] xl:text-[16px] font-semibold bg-white/30 text-black' value="call">Schedule a call</TabsTrigger>
                    <TabsTrigger className='md:p-8 sm:p-4 md:px-10 sm:px-4 md:w-full sm:w-fit sm:text-[14px] xl:text-[16px] font-semibold bg-white/30 text-black' value="more">More way to Connect</TabsTrigger>
                </TabsList>
                <TabsContent value="form" className='top-0 w-full mt-0'>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                        <div className='flex md:flex-row sm:flex-col gap-4 w-full'>
                            {(["name", "email", "phone"] as (keyof typeof formData)[]).map((field, index) => (
                                <Input
                                    key={index}
                                    name={field}
                                    value={formData[field]}
                                    onChange={handleChange}
                                    className='border-[0.5px] border-white bg-white/20 md:h-16 sm:h-12 md:px-6 sm:px-4'
                                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                                    required={field !== "phone"}
                                />
                            ))}
                        </div>
                        <Textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className='border-[0.5px] border-white bg-white/20 h-16 md:p-6 sm:p-4'
                            placeholder='Describe your project (use **text** for bold)'
                            required
                        />
                        <div className='flex gap-4 w-full'>
                            <Select onValueChange={value => setFormData(prev => ({ ...prev, service: value }))}>
                                <SelectTrigger className='border-[0.5px] border-white md:h-16 sm:h-12 md:px-6 sm:px-4'>
                                    <SelectValue placeholder="Service*" className="sm:text-[12px]" />
                                </SelectTrigger>
                                <SelectContent>
                                    {["ui-ux-design", "ecommerce-development", "graphic-design", "digital-marketing", "game-development", "app-development", "startup-solutions", "3d-modelling-rendering", "maintenance-support", "logo-brand-identity", "packaging-design", "3d-animation", "software-development", "ai-for-business", "blockchain-crypto", "wordpress-development", "shopify-development", "social-media-marketing", "ecommerce-management", "lead-generation", "data-scraping", "marketing-strategy", "tech-consultation", "staff-augmentation", "blockchain-development", "ai-services"].map(service => (
                                        <SelectItem key={service} className='p-4 font-semibold' value={service}>{service.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <Select onValueChange={value => setFormData(prev => ({ ...prev, budget: value }))}>
                                <SelectTrigger className='border-[0.5px] border-white md:h-16 sm:h-12 md:px-6 sm:px-4'>
                                    <SelectValue placeholder="Budget (optional)" className="sm:text-[12px]" />
                                </SelectTrigger>
                                <SelectContent>
                                    {["$100-$500", "$1000-$2000", "$2000-$3000", "$3000-$5000", "$5000-above"].map(budget => (
                                        <SelectItem key={budget} className='p-4 font-semibold' value={budget}>{budget.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <Button disabled={loading} className="md:h-24 sm:h-16 mt-2 rounded-lg items-center uppercase md:text-[32px] sm:text-[18px] font-semibold md:pl-8 sm:pl-4 justify-between cursor-pointer" style={{ backgroundImage: 'url(/button-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            {loading ? <span className="loader">Sending...</span> : "Send Request"}
                            <div className='bg-[#141DEA] md:p-6 sm:p-4 rounded-lg flex items-center justify-center'>
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
                        <Link href='/' className='flex border-[0.5px] border-white bg-[#F5F5F5]/10 xl:h-20 sm:h-12 text-black px-6 rounded-md xl:w-[300px] sm:w-full items-center justify-center'>
                            <Phone />
                        </Link>
                        <Link href='/' className='flex border-[0.5px] border-white bg-[#F5F5F5]/10 xl:h-20 sm:h-12 text-black px-6 rounded-md w-[300px] xl:w-[300px] sm:w-full items-center justify-center'>
                            <Dribbble />
                        </Link>
                        <Link href='/' className='flex border-[0.5px] border-white bg-[#F5F5F5]/10 xl:h-20 sm:h-12 text-black px-6 rounded-md w-[300px] xl:w-[300px] sm:w-full items-center justify-center'>
                            <Map />
                        </Link>
                        <Link href='/' className='flex border-[0.5px] border-white bg-[#F5F5F5]/10 xl:h-20 sm:h-12 text-black px-6 rounded-md w-[300px] xl:w-[300px] sm:w-full items-center justify-center'>
                            <Linkedin />
                        </Link>
                        <Link href='/' className='flex border-[0.5px] border-white bg-[#F5F5F5]/10 xl:h-20 sm:h-12 text-black px-6 rounded-md w-[300px] xl:w-[300px] sm:w-full items-center justify-center'>
                            <Instagram />
                        </Link>
                        <Link href='/' className='flex border-[0.5px] border-white bg-[#F5F5F5]/10 xl:h-20 sm:h-12 text-black px-6 rounded-md w-[300px] xl:w-[300px] sm:w-full items-center justify-center'>
                            <Image src={BehanceIcon} width={24} height={24} alt="behance"></Image>
                        </Link>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default ContactForm;
