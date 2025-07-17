"use client";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";
import { cn } from "../lib/utils";

interface ContactFormCompactProps {
    className?: string;
    plans: string[];
}

const ContactFormCompact = ({ className, plans }: ContactFormCompactProps) => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        plan: "",
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

            setFormData({ name: "", email: "", phone: "", plan: "", message: "" });
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
        <div className={cn('w-full px-6', className)}>
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
                <div className='flex gap-4 w-full'>
                    <Select onValueChange={value => setFormData(prev => ({ ...prev, service: value }))}>
                        <SelectTrigger className='border-[0.5px] border-white md:h-16 sm:h-12 md:px-6 sm:px-4'>
                            <SelectValue placeholder="Choose Your Plan*" className="sm:text-[12px]" />
                        </SelectTrigger>
                        <SelectContent>
                            {plans.map(plan => (
                                <SelectItem key={plan} className='p-4 font-semibold' value={plan}>
                                    {plan.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className='border-[0.5px] border-white bg-white/20 h-16 md:p-6 sm:p-4'
                    placeholder='Describe your project (use **text** for bold)'
                    required
                />
                <Button disabled={loading} className="md:h-24 sm:h-16 mt-2 rounded-lg items-center uppercase md:text-[32px] sm:text-[18px] font-semibold md:pl-8 sm:pl-4 justify-between cursor-pointer" style={{ backgroundImage: 'url(/button-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    {loading ? <span className="loader">Sending...</span> : "Send Request"}
                    <div className='bg-[#141DEA] md:p-6 sm:p-4 rounded-lg flex items-center justify-center'>
                        <ArrowUpRight className='text-white w-20 h-20' />
                    </div>
                </Button>
            </form>
        </div>
    );
};

export default ContactFormCompact;
