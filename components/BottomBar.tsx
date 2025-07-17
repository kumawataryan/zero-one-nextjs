import Link from "next/link";
import Image from 'next/image'


const BottomBar = () => {
    return (
        <div className="flex items-center justify-between w-full my-6">
            <footer className="mx-4 flex flex-col lg:flex-row justify-between items-center gap-4 w-full">

                {/* Footer Left */}
                <section className="w-full lg:w-1/3 bg-black text-white h-auto lg:h-96 rounded-lg p-4 sm:p-4 md:p-6 lg:p-8 flex flex-col justify-between" style={{ backgroundImage: 'url(/footer-bot.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <section>
                        <Link href="/">
                            <Image src="/zero-one-logo.svg" width={50} height={50} alt="zero-one-logo" unoptimized className='w-16 h-16' />
                        </Link>                    </section>
                    <p className="opacity-60 leading-tight font-light sm:pt-24 pt-0 max-w-[500px]">
                        We are not a regular studio - We deliver the best design, code, and marketing at affordable rates. For serious projects, ask for a quote or schedule a meeting.
                    </p>
                </section>

                {/* Footer Right */}
                <section className="w-full lg:w-2/3 bg-black text-white h-auto lg:h-96 rounded-lg p-4 sm:p-4 md:p-6 lg:p-8 flex flex-col justify-between" style={{ backgroundImage: 'url(/footer-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Quick Links */}
                        <div className="flex flex-col gap-4">
                            <p className="font-bold text-md">Quick Links</p>
                            <div className="flex flex-col gap-2 text-sm">
                                <Link href="/" className="opacity-60 hover:opacity-100">Home</Link>
                                <Link href="/about" className="opacity-60 hover:opacity-100">About us</Link>
                                <Link href="/portfolio" className="opacity-60 hover:opacity-100">Portfolio</Link>
                                <Link href="/contact" className="opacity-60 hover:opacity-100">Contact</Link>
                                <Link href="/privacy-policy" className="opacity-60 hover:opacity-100">Privacy Policy</Link>
                                <Link href="/terms" className="opacity-60 hover:opacity-100">Terms & Conditions</Link>
                            </div>
                        </div>

                        {/* Services */}
                        <div className="flex flex-col gap-4">
                            <p className="font-bold text-md">Our Services</p>
                            <div className="flex flex-col gap-2 text-sm">
                                <Link href="/website-development" className="opacity-60 hover:opacity-100">Website Development</Link>
                                <Link href="/app-development" className="opacity-60 hover:opacity-100">App Development</Link>
                                <Link href="/digital-marketing" className="opacity-60 hover:opacity-100">Digital Marketing</Link>
                            </div>
                        </div>

                        {/* Contact */}
                        <div className="flex flex-col gap-4">
                            <p className="font-bold text-md">Contact</p>
                            <div className="flex flex-col gap-2 text-sm">
                                <Link href="mailto:support@zeroone.com" className="opacity-60 hover:opacity-100">support@zeroone.com</Link>
                                <Link href="tel:+80888889334" className="opacity-60 hover:opacity-100">+80 888 889 334</Link>
                                <Link href="/discovery-call" className="opacity-60 hover:opacity-100">Book a free discovery call</Link>
                            </div>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="mt-8">
                        <hr className="opacity-60" />
                        <div className="pt-4 flex justify-between items-center">
                            <p className="text-sm opacity-60">©ZERO-ONE 2024. All rights reserved.</p>
                            <p className="text-2xl font-extrabold uppercase bg-gradient-to-r inline-block text-transparent bg-clip-text from-white/10 to-white/100">
                                2012 - 25
                            </p>
                        </div>
                    </div>
                </section>
            </footer>
        </div>
    );
};

export default BottomBar;
