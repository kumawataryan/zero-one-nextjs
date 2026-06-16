import {
  BarChart3,
  Check,
  CheckCircle,
  CreditCard,
  FileText,
  Headset,
  LayoutDashboard,
  MessageCircle,
  MoveRight,
  Package,
  Phone,
  Rocket,
  Search,
  Settings,
  Share2,
  ShoppingCart,
  Smartphone,
  Store,
  Tags,
  Truck,
  UserCheck,
  X,
  Zap,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { VideoCarousel } from "@/components/VideoCarousel"
import HeroVideoPlayer from "@/components/HeroVideoPlayer"
import { PortfolioScroller } from "@/components/PortfolioScroller"
import { buildMetadata } from "@/lib/seo"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import ContactFormCompact from "@/components/ContactFormCompact"

export const metadata: Metadata = buildMetadata({
  title: "Shopify Development Services | High-Converting Shopify Stores for D2C Brands",
  description:
    "Launch a fast, mobile-friendly Shopify store built to sell. We handle design, setup, products, payments, shipping, apps, SEO, and conversion optimization for Indian and global brands.",
  path: "/shopify-18k-landing",
  image: "/utsav-fashion.png",
  keywords: [
    "Shopify development India",
    "Shopify store setup",
    "Shopify website design",
    "Shopify ecommerce development",
    "D2C Shopify store",
    "Shopify experts India",
    "Shopify theme customization",
    "Shopify product page design",
    "Shopify SEO",
  ],
})

type Review = {
  type: "text" | "video"
  imageSrc: string
  reviewerName: string
  reviewerPosition: string
  reviewerCompany: string
  reviewText: string
  buttonColor: string
}

const shopifyReviews: Review[] = [
  {
    type: "text",
    imageSrc: "https://placehold.co/96x96/00C27B/FFFFFF?text=A",
    reviewerName: "Aarav Mehta",
    reviewerPosition: "Founder",
    reviewerCompany: "Streetwear Brand, Mumbai",
    reviewText:
      "Our Shopify store finally looks like a real brand. The mobile experience is clean, products are easy to browse, and checkout feels smooth.",
    buttonColor: "#00C27B",
  },
  {
    type: "text",
    imageSrc: "https://placehold.co/96x96/141DEA/FFFFFF?text=R",
    reviewerName: "Ritika Jain",
    reviewerPosition: "Owner",
    reviewerCompany: "Skincare Store, Delhi",
    reviewText:
      "They handled everything from product uploads to payment setup. I did not have to figure out Shopify on my own.",
    buttonColor: "#141DEA",
  },
  {
    type: "text",
    imageSrc: "https://placehold.co/96x96/FF9F43/FFFFFF?text=K",
    reviewerName: "Karan Shah",
    reviewerPosition: "D2C Founder",
    reviewerCompany: "Home Decor Brand, Ahmedabad",
    reviewText:
      "The new product pages look much better and customers understand the offer faster. The store feels premium now.",
    buttonColor: "#FF9F43",
  },
  {
    type: "text",
    imageSrc: "https://placehold.co/96x96/FF6B6B/FFFFFF?text=M",
    reviewerName: "Megha Kapoor",
    reviewerPosition: "Boutique Owner",
    reviewerCompany: "Fashion Store, Jaipur",
    reviewText:
      "I was selling only on Instagram before. Now I have a proper Shopify store where customers can browse and order easily.",
    buttonColor: "#FF6B6B",
  },
  {
    type: "text",
    imageSrc: "https://placehold.co/96x96/6C5CE7/FFFFFF?text=N",
    reviewerName: "Nikhil Rao",
    reviewerPosition: "Ecommerce Manager",
    reviewerCompany: "Accessories Brand, Bengaluru",
    reviewText:
      "Clean design, quick setup, and practical guidance after launch. Exactly what we needed.",
    buttonColor: "#6C5CE7",
  },
]

const faqs = [
  {
    question: "Can you build a complete Shopify store from scratch?",
    answer:
      "Yes. We handle setup, design, products, payments, shipping, apps, and launch support.",
  },
  {
    question: "Do I need a Shopify subscription?",
    answer:
      "Yes. Shopify billing is paid directly to Shopify. We help with setup and configuration.",
  },
  {
    question: "Can you upload my products?",
    answer:
      "Yes. We can upload products, images, pricing, descriptions, variants, and categories.",
  },
  {
    question: "Can you redesign an existing Shopify store?",
    answer:
      "Yes. We improve design, UX, speed, product pages, collections, and conversion flow.",
  },
  {
    question: "Will my Shopify store be mobile-friendly?",
    answer: "Absolutely. Every store is designed mobile-first.",
  },
  {
    question: "Can you integrate payment gateways?",
    answer:
      "Yes. We can configure Razorpay, PayPal, COD, Shopify Payments where available, and other supported options.",
  },
  {
    question: "Do you provide support after launch?",
    answer: "Yes. We provide post-launch guidance and support.",
  },
]

const clientLogos = [
  { src: "/client-images/hyundai.png", alt: "Hyundai" },
  { src: "/client-images/anita-dongre.jpg", alt: "Anita Dongre" },
  { src: "/client-images/haldiram.png", alt: "Haldiram" },
  { src: "/client-images/fortis.png", alt: "Fortis" },
  { src: "/client-images/myntra.png", alt: "Myntra" },
  { src: "/client-images/my-protein.png", alt: "Myprotein" },
]

const portfolioItems = [
  {
    name: "Bombay Shaving Company",
    image: "https://placehold.co/900x620/F0F0F0/F0F0F0/png",
  },
  {
    name: "The House of Rare",
    image: "https://placehold.co/900x620/F0F0F0/F0F0F0/png",
  },
  {
    name: "Vahdam",
    image: "https://placehold.co/900x620/F0F0F0/F0F0F0/png",
  },
  {
    name: "Lakme India",
    image: "https://placehold.co/900x620/F0F0F0/F0F0F0/png",
  },
  {
    name: "mcaffeine",
    image: "https://placehold.co/900x620/F0F0F0/F0F0F0/png",
  },
  {
    name: "Heads up for Tails",
    image: "https://placehold.co/900x620/F0F0F0/F0F0F0/png",
  },
  {
    name: "Aachho Ethinic",
    image: "https://placehold.co/900x620/F0F0F0/F0F0F0/png",
  },
]

const Shopify18KLanding = () => {
  return (
    <div className="flex items-center justify-center w-full flex-col pb-28">
      {/* Hero Section */}
      <section className="w-full max-w-[1728px] xl:my-48 sm:my-40 flex flex-col lg:flex-row items-center justify-center lg:py-0 mx-auto px-4">
        <div className="w-full lg:w-1/2 text-left lg:text-left">
          <div className="mb-6 rounded-xl bg-[#F0F0F0] border border-black/10 px-4 py-2 text-[13px] sm:text-[15px] font-bold w-full sm:w-fit">
            🛒 Shopify Stores Built for Sales | ⚡ Fast Launch | 🇮🇳 For D2C & Ecommerce Brands
          </div>

          <h1 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[80px] font-black leading-[100%]">
            Launch a Shopify Store That Looks Premium,{" "}
            <span className="text-[#141DEA]">Loads Fast</span>, and{" "}
            <span className="text-[#00C27B]">Sells.</span>
          </h1>

          <p className="mt-4 sm:mt-6 text-[16px] sm:text-[18px] font-bold opacity-60 max-w-3xl">
            From store setup to checkout - we handle everything. Want to sell online without dealing with themes, apps, payments, shipping, or technical setup? We build complete Shopify stores that look professional, work flawlessly on mobile, and help customers buy with confidence.
          </p>

          <div className="flex flex-col md:flex-row mt-6 w-full justify-start gap-3">
            <Link href="#contact" className="w-full md:w-fit rounded-lg bg-black border-2 border-black text-white flex gap-2 items-center justify-center text-[14px] sm:text-[16px] p-4 sm:p-5 uppercase font-extrabold tracking-wide shadow-lg">
              <Phone className="w-5 h-5" />
              <span>Book a Free Call</span>
            </Link>
            <Link href="#pricing" className="w-full md:w-fit rounded-lg bg-white border-2 border-black text-black flex gap-2 items-center justify-center text-[14px] sm:text-[16px] p-4 sm:p-5 uppercase font-extrabold tracking-wide">
              <FileText className="w-5 h-5" />
              <span>Get a Free Quote</span>
            </Link>
          </div>

          <div className="flex flex-wrap gap-2 mt-6 sm:mt-8 justify-start max-w-3xl">
            <p className="p-2 bg-[#F0F0F0] rounded-xl text-[14px] sm:text-[16px] px-4">🛍️ Custom Shopify Store Design</p>
            <p className="p-2 bg-[#F0F0F0] rounded-xl text-[14px] sm:text-[16px] px-4">💳 Payment Gateway Setup</p>
            <p className="p-2 bg-[#F0F0F0] rounded-xl text-[14px] sm:text-[16px] px-4">📦 Product & Shipping Setup</p>
            <p className="p-2 bg-[#F0F0F0] rounded-xl text-[14px] sm:text-[16px] px-4">⚡ Speed + SEO Optimized</p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 mt-12 lg:mt-0 relative flex justify-center items-center px-2 sm:px-4">
          <div className="relative w-full max-w-[800px]">
            <div className="relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-500 aspect-[3/2]">
              <HeroVideoPlayer image="/footer-bot.png" video="YOUR_VIDEO_ID" />
            </div>

            <div className="absolute z-20 -top-6 -right-6 bg-[#00C27B] text-white rounded-2xl p-4 shadow-xl transform -rotate-12 hover:rotate-0 transition-transform duration-300">
              <div className="text-xl sm:text-2xl font-bold">Shopify</div>
              <div className="text-sm opacity-90">Ready</div>
            </div>

            <div className="absolute z-20 -bottom-6 -left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/50 transform rotate-6 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#00C27B] rounded-full animate-pulse"></div>
                <span className="font-semibold text-gray-700 text-sm sm:text-base">Launch in 7-14 Days</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="w-full bg-white py-10 sm:py-12">
        <div className="max-w-[1728px] mx-auto px-4">
          <p className="text-center text-[12px] sm:text-[13px] uppercase tracking-[0.2em] font-extrabold text-black/50 mb-6">
            Trusted by brands we have worked with
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {clientLogos.map((logo) => (
              <div
                key={logo.alt}
                className="h-24 sm:h-28 rounded-xl bg-[#F7F7F7] flex items-center justify-center px-5"
              >
                <Image
                  src={logo.src}
                  alt={`${logo.alt} logo`}
                  width={220}
                  height={140}
                  className="max-h-20 w-full object-contain grayscale opacity-75 transition-all duration-200 hover:grayscale-0 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1728px] mx-auto px-4 text-center">
          <Badge className="bg-[#141DEA] text-white px-6 py-2 text-lg font-semibold rounded-full mb-6 sm:text-[14px] md:text-[16px]">
            ⭐ Stores Built for Real Businesses
          </Badge>
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-black text-black leading-[100%] mb-4">
            Real Shopify Stores. <br />
            <span className="text-[#00C27B]">Real Business Owners.</span>
          </h2>
          <p className="text-[16px] sm:text-[18px] font-bold opacity-60 max-w-3xl mx-auto">
            From fashion brands to skincare stores, we help businesses launch professional ecommerce experiences without the usual complexity.
          </p>
          <PortfolioScroller items={portfolioItems} />
          {/* <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-10">
            {["Mobile Optimized", "Shopify Experts", "SEO Ready", "Fast Loading", "Secure Checkout"].map((trustBadge) => (
              <div key={trustBadge} className="bg-[#F0F0F0] rounded-xl px-4 py-3 font-bold text-[14px] sm:text-[16px] flex items-center justify-center gap-2">
                <Check className="w-5 h-5 text-[#00C27B]" />
                <span>{trustBadge}</span>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 relative w-full bg-[#f0f0f0]">
        <div className="flex flex-col items-center justify-center">
          <div className="text-center mb-6">
            <Badge className="bg-gradient-to-r from-[#141DEA] to-[#00C27B] text-white p-4 text-[18px] font-semibold mb-6 border-none rounded-full sm:text-[14px] md:text-[16px]">
              🔥 Built for Conversions, Not Just Looks
            </Badge>
            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-black mb-2 text-black leading-[100%]">
              Everything Needed to{" "}
              <span className="bg-[#00C27B] bg-clip-text text-transparent">Launch & Sell Online</span>
            </h2>
            <p className="mt-2 text-[16px] sm:text-[18px] font-bold opacity-60 max-w-3xl mx-auto">
              No piecing together freelancers. No technical confusion. We handle the complete Shopify setup from start to launch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 max-w-[1728px] items-center justify-center mb-12 px-4">
            {[
              { text: "Custom Shopify Store Design", icon: Store },
              { text: "Mobile-First Ecommerce Layout", icon: Smartphone },
              { text: "Homepage, Collection & Product Pages", icon: LayoutDashboard },
              { text: "Product Upload & Catalog Setup", icon: Package },
              { text: "Payment Gateway Integration", icon: CreditCard },
              { text: "Shipping Configuration", icon: Truck },
              { text: "Cart & Checkout Optimization", icon: ShoppingCart },
              { text: "Essential Shopify Apps Setup", icon: Settings },
              { text: "Basic Shopify SEO Setup", icon: Search },
              { text: "Speed Optimization", icon: Zap },
              { text: "WhatsApp Integration", icon: Phone },
              { text: "Social Media Integration", icon: Share2 },
              { text: "Coupon & Discount Setup", icon: Tags },
              { text: "Order Management Guidance", icon: UserCheck },
              { text: "Post-Launch Support", icon: Headset },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-2 sm:p-4 pr-4 sm:pr-8 text-center flex gap-2 sm:gap-3 items-center justify-left lg:text-[18px] sm:text-[16px] font-medium shadow-sm hover:shadow-lg transition-shadow duration-200"
              >
                <div className="bg-[#F0F0F0] flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-md">
                  <feature.icon className="text-black w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                </div>
                <p className="font-bold text-left">{feature.text}</p>
              </div>
            ))}
          </div>

          <Link href="#contact" className="rounded-lg bg-[#141DEA] text-white flex gap-2 items-center justify-center text-[14px] sm:text-[16px] p-4 sm:p-5 uppercase font-bold">
            <MoveRight className="w-5 h-5" />
            <span>Start My Shopify Store</span>
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-24 bg-gradient-to-b from-white to-[#F6F7FF]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <Badge className="bg-[#141DEA] text-white px-6 py-2 text-lg font-semibold rounded-full mb-6 sm:text-[14px] md:text-[16px]">
              ⚡ Simple Shopify Launch Process
            </Badge>
            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-black text-black leading-[100%] mb-4">
              Launch Your Store in 3 Simple Steps
            </h2>
            <p className="text-[16px] sm:text-[18px] font-bold opacity-60 max-w-3xl mx-auto">
              A clear process from brand brief to live store, without confusing technical steps.
            </p>
          </div>

          <div className="relative mt-12">
            <div className="hidden md:block absolute left-[18%] right-[18%] top-14 h-[2px] bg-gradient-to-r from-[#141DEA]/20 via-[#141DEA] to-[#00C27B]"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
              <div className="rounded-2xl border border-black/10 p-6 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 relative">
                <div className="flex items-center justify-between">
                  <p className="text-[12px] uppercase font-extrabold tracking-[0.2em] text-[#141DEA]">Step 01</p>
                  <span className="bg-[#141DEA]/10 text-[#141DEA] w-11 h-11 rounded-xl flex items-center justify-center">
                    <UserCheck className="w-5 h-5" />
                  </span>
                </div>
                <h3 className="text-[24px] font-black mt-4 leading-tight">Share Your Store Details</h3>
                <p className="mt-2 text-[16px] opacity-70">Tell us about your products, categories, pricing, shipping needs, and brand preferences.</p>
                <div className="mt-6 rounded-lg bg-[#F6F7FF] px-3 py-2 text-[13px] font-bold w-fit">~10 Minutes</div>
              </div>

              <div className="rounded-2xl border border-black/10 p-6 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 relative">
                <div className="flex items-center justify-between">
                  <p className="text-[12px] uppercase font-extrabold tracking-[0.2em] text-[#141DEA]">Step 02</p>
                  <span className="bg-[#141DEA]/10 text-[#141DEA] w-11 h-11 rounded-xl flex items-center justify-center">
                    <LayoutDashboard className="w-5 h-5" />
                  </span>
                </div>
                <h3 className="text-[24px] font-black mt-4 leading-tight">We Design & Build Your Store</h3>
                <p className="mt-2 text-[16px] opacity-70">We create your storefront, set up products, configure payments, shipping, pages, and apps.</p>
                <div className="mt-6 rounded-lg bg-[#F6F7FF] px-3 py-2 text-[13px] font-bold w-fit">7-10 Days</div>
              </div>

              <div className="rounded-2xl border border-black/10 p-6 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 relative">
                <div className="flex items-center justify-between">
                  <p className="text-[12px] uppercase font-extrabold tracking-[0.2em] text-[#141DEA]">Step 03</p>
                  <span className="bg-[#00C27B]/15 text-[#00C27B] w-11 h-11 rounded-xl flex items-center justify-center">
                    <Rocket className="w-5 h-5" />
                  </span>
                </div>
                <h3 className="text-[24px] font-black mt-4 leading-tight">Review, Test & Launch</h3>
                <p className="mt-2 text-[16px] opacity-70">We test the mobile experience, checkout flow, and store functionality before going live.</p>
                <div className="mt-6 rounded-lg bg-[#EFFFF8] px-3 py-2 text-[13px] font-bold w-fit text-[#00A86B]">Launch Ready</div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-[14px] sm:text-[16px] font-bold text-[#141DEA]">
              No coding required. No technical headaches. Just a Shopify store ready to sell.
            </p>
          </div>
        </div>
      </section>

      {/* Shopify Comparison */}
      <section
        className="bg-[#141414] py-40 sm:py-20 sm:px-0 lg:py-24 w-full"
        style={{
          backgroundImage: "url(/process-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="lg:px-12 sm:px-4 relative z-10 flex items-center justify-center flex-col">
          <div className="text-center mb-10">
            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-black mb-4 text-white leading-[100%]">
              Why Our <span className="bg-[#00C27B] bg-clip-text text-transparent">Shopify Stores</span> Work Better
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-white">
              Complete setup, cleaner shopping flow, and fewer launch headaches.
            </p>
          </div>

          <div className="lg:hidden space-y-6">
            {[
              { feature: "Store Setup", agency: { value: "Only theme installation", positive: false }, us: { value: "Complete Shopify setup", positive: true } },
              { feature: "Mobile Experience", agency: { value: "Basic responsiveness", positive: false }, us: { value: "Mobile-first shopping flow", positive: true } },
              { feature: "Product Pages", agency: { value: "Standard template pages", positive: false }, us: { value: "Conversion-focused layouts", positive: true } },
              { feature: "Payments & Shipping", agency: { value: "Often extra scope", positive: false }, us: { value: "Configured in launch setup", positive: true } },
              { feature: "SEO Setup", agency: { value: "Frequently skipped", positive: false }, us: { value: "Basic Shopify SEO included", positive: true } },
              { feature: "Post-Launch Help", agency: { value: "Limited handoff", positive: false }, us: { value: "Guidance after launch", positive: true } },
            ].map((row, index) => (
              <Card key={index} className="bg-white/80 border border-gray-200 w-full">
                <CardContent className="pt-4">
                  <h3 className="font-bold text-base sm:text-lg mb-4 text-gray-900">{row.feature}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col items-center">
                      <div className="bg-[#f0f0f0] flex items-center justify-center w-10 h-10 rounded-md mb-2">
                        {row.agency.positive ? (
                          <Check className="text-[#00C27B] w-6 h-6" />
                        ) : (
                          <X className="text-red-400 w-6 h-6" />
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mb-1">Typical Freelancer</p>
                      <p className="text-gray-700 font-medium text-sm sm:text-base text-center">{row.agency.value}</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-[#f0f0f0] flex items-center justify-center w-10 h-10 rounded-md mb-2">
                        {row.us.positive ? (
                          <Check className="text-[#00C27B] w-6 h-6" />
                        ) : (
                          <X className="text-red-400 w-6 h-6" />
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mb-1">0101.agency</p>
                      <p className="text-gray-700 font-semibold text-sm sm:text-base text-center">{row.us.value}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="hidden lg:block bg-white/80 rounded-2xl border border-gray-200 overflow-hidden max-w-7xl w-full">
            <div className="grid grid-cols-3 bg-[#f0f0f0] rounded-t-2xl">
              <div className="py-5 px-4 text-left font-bold text-lg text-gray-700">Features</div>
              <div className="py-5 px-4 text-left font-bold text-lg text-gray-700">Typical Freelancer</div>
              <div className="py-5 px-4 text-left font-bold text-lg text-[#141DEA]">0101.agency</div>
            </div>
            <div className="p-4 pt-4">
              {[
                { feature: "Store Setup", agency: { value: "Only theme installation", positive: false }, us: { value: "Complete Shopify setup", positive: true } },
                { feature: "Mobile Experience", agency: { value: "Basic responsiveness", positive: false }, us: { value: "Mobile-first shopping flow", positive: true } },
                { feature: "Product Pages", agency: { value: "Standard template pages", positive: false }, us: { value: "Conversion-focused layouts", positive: true } },
                { feature: "Payments & Shipping", agency: { value: "Often extra scope", positive: false }, us: { value: "Configured in launch setup", positive: true } },
                { feature: "SEO Setup", agency: { value: "Frequently skipped", positive: false }, us: { value: "Basic Shopify SEO included", positive: true } },
                { feature: "Post-Launch Help", agency: { value: "Limited handoff", positive: false }, us: { value: "Guidance after launch", positive: true } },
              ].map((row, idx) => (
                <div className="grid grid-cols-3 items-center py-2" key={idx}>
                  <div className="text-base font-extrabold text-gray-900 text-left px-4">{row.feature}</div>
                  <div className="flex items-center gap-3 text-left px-4">
                    <span className="bg-[#f0f0f0] flex items-center justify-center w-10 h-10 rounded-md">
                      {row.agency.positive ? (
                        <Check className="text-[#00C27B] w-6 h-6" />
                      ) : (
                        <X className="text-red-400 w-6 h-6" />
                      )}
                    </span>
                    <span className="text-gray-700 font-medium text-base">{row.agency.value}</span>
                  </div>
                  <div className="flex items-center gap-3 text-left px-4">
                    <span className="bg-[#f0f0f0] flex items-center justify-center w-10 h-10 rounded-md">
                      {row.us.positive ? (
                        <Check className="text-[#00C27B] w-6 h-6" />
                      ) : (
                        <X className="text-red-400 w-6 h-6" />
                      )}
                    </span>
                    <span className="text-gray-900 font-semibold text-base">{row.us.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12 w-full flex items-center justify-center">
            <Link
              href="#contact"
              className="relative rounded-lg bg-[#141DEA] text-white flex gap-2 items-center justify-center text-sm sm:text-base md:text-lg p-4 sm:p-5 uppercase font-bold w-fit"
            >
              <MoveRight className="w-5 h-5 z-10" />
              <span className="z-10">Build My Shopify Store</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Who is this for */}
      <section className="py-24 w-full max-w-[1728px] items-center justify-center flex flex-col">
        <div>
          <div className="text-center mb-4">
            <Badge className="bg-[#1500FE] text-white px-6 text-lg font-semibold rounded-full mb-6 sm:text-[14px] md:text-[16px]">
              💡 Perfect For Ecommerce Brands
            </Badge>
            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-black mb-2 text-black leading-[100%]">
              Built for Businesses{" "}
              <span className="bg-[#1500FE] bg-clip-text text-transparent">Ready to Sell Online</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 max-w-[1728px] items-center justify-center mb-12 px-4 mt-8">
            {[
              { icon: "👕", text: "Fashion Brands" },
              { icon: "💍", text: "Jewellery Stores" },
              { icon: "💄", text: "Beauty Brands" },
              { icon: "🧴", text: "Skincare Brands" },
              { icon: "🏠", text: "Home Decor Stores" },
              { icon: "🍪", text: "Food & Snack Brands" },
              { icon: "🏋️", text: "Fitness Products" },
              { icon: "🎧", text: "Electronics Stores" },
              { icon: "🎁", text: "Gift Shops" },
              { icon: "🖨️", text: "Print-on-Demand Brands" },
              { icon: "🧶", text: "Handmade Products" },
              { icon: "🚀", text: "D2C Startups" },
              { icon: "📱", text: "Instagram Sellers" },
              { icon: "📦", text: "Amazon Sellers" },
              { icon: "🏪", text: "Local Retail Stores" },
              { icon: "⭐", text: "Premium Product Brands" },
              { icon: "👗", text: "Clothing Boutiques" },
              { icon: "👟", text: "Footwear Brands" },
              { icon: "👜", text: "Accessories Stores" },
              { icon: "🎯", text: "Niche Ecommerce Brands" },
            ].map((business, index) => (
              <div
                key={index}
                className="bg-[#F0F0F0] rounded-xl md:p-10 sm:p-4 text-center flex gap-3 items-center justify-center"
              >
                <div className="lg:text-[20px] sm:text-[18px]">{business.icon}</div>
                <div className="lg:text-[18px] sm:text-[16px] font-medium text-gray-700">{business.text}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center px-4">
          <div className="inline-block rounded-2xl bg-gradient-to-br from-black via-[#18181b] to-[#23272f] text-white shadow-2xl">
            <div className="p-4 flex flex-row items-center gap-4">
              <span className="flex items-center justify-center w-16 h-16 rounded-md bg-emerald-500/20">
                <CheckCircle className="w-8 h-8 text-[#00C27B]" />
              </span>
              <div className="flex flex-col">
                <h3 className="text-[20px] font-extrabold">No Shopify Experience Needed</h3>
                <p className="text-[14px] opacity-50 max-w-md">
                  You do not need to understand themes, apps, payments, shipping, or checkout settings. We set it up and guide you after launch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="w-full py-24 flex flex-col items-center justify-center bg-white">
        <div className="text-center item mb-10 w-full max-w-[1728px] px-4">
          <Badge className="bg-[#1500FE] text-white px-6 text-lg font-semibold rounded-full mb-6 sm:text-[14px] md:text-[16px]">
            💰 Shopify Development Plans
          </Badge>
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-black mb-2 text-black leading-[100%]">
            Choose the Right <span className="text-[#00C27B]">Shopify Package</span>
          </h2>
          <p className="mt-2 text-[16px] sm:text-[18px] font-bold opacity-60 max-w-7xl mx-auto">
            Whether you are launching a new store or improving an existing one, we have a solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8 w-full max-w-[1728px] px-4 mb-8">
          {[
            {
              icon: MessageCircle,
              title: "Free Call",
              price: "₹0",
              description: "Perfect if you are evaluating Shopify for your business.",
              cta: "Book Free Call",
              highlighted: false,
              features: ["Business Consultation", "Store Strategy", "Shopify Recommendations", "Project Roadmap", "Pricing Estimate"],
            },
            {
              icon: Store,
              title: "Shopify Starter Store",
              price: "₹18K",
              description: "Best for startups and businesses launching online.",
              cta: "Get Free Quote",
              highlighted: false,
              features: ["Shopify Setup", "Theme Customization", "Homepage Design", "Product Setup", "Payment Setup", "Shipping Setup", "Mobile Optimization", "Basic SEO"],
            },
            {
              icon: BarChart3,
              title: "Shopify Growth Store",
              price: "₹50K",
              description: "For growing brands focused on better conversions.",
              cta: "Get Free Quote",
              highlighted: true,
              features: ["Everything in Starter", "Advanced Homepage Sections", "Enhanced Product Pages", "Conversion-Focused Layout", "Additional Integrations", "Expanded Catalog Setup", "Advanced Customization"],
            },
            {
              icon: Rocket,
              title: "Shopify Scale Store",
              price: "₹2L-3L",
              description: "For established brands requiring advanced functionality.",
              cta: "Book Call",
              highlighted: false,
              features: ["Custom Shopify Development", "Advanced Integrations", "Automation Workflows", "Custom Features", "Scalable Architecture", "Ongoing Support Options"],
            },
          ].map((plan) => (
            <div
              key={plan.title}
              className={`relative rounded-2xl shadow-lg flex flex-col items-start p-5 sm:p-6 w-full overflow-hidden ${
                plan.highlighted ? "bg-[#141DEA] text-white" : "bg-white border border-black/10"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-4 right-4 bg-[#00C27B] text-white rounded-full px-3 py-1 text-[12px] font-extrabold">
                  Recommended
                </div>
              )}
              <div className="flex items-center gap-3 bg-[#f0f0f0] rounded-xl px-5 py-4 mb-4 w-full">
                <span className="bg-white rounded-lg p-2 flex items-center justify-center">
                  <plan.icon className="w-7 h-7 text-[#141DEA]" />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-[#141DEA] text-left">{plan.title}</h3>
                  <div className="text-xl font-extrabold text-black text-left">{plan.price}</div>
                </div>
              </div>
              <p className={`text-[15px] font-bold mb-4 ${plan.highlighted ? "text-white/70" : "opacity-60"}`}>
                {plan.description}
              </p>
              <ul className="w-full mb-6 space-y-3 text-left flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className={`flex items-center gap-3 text-[15px] font-medium ${plan.highlighted ? "text-white" : "text-black"}`}>
                    <span className="bg-[#f0f0f0] flex items-center justify-center w-9 h-9 rounded-md flex-shrink-0">
                      <Check className="text-[#00C27B] w-5 h-5" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="#contact"
                className={`rounded-lg flex gap-2 items-center justify-center text-[14px] p-4 uppercase font-bold w-full text-center transition-colors ${
                  plan.highlighted ? "bg-white text-[#141DEA]" : "bg-[#141DEA] text-white"
                }`}
              >
                <MoveRight className="w-5 h-5" />
                <span>{plan.cta}</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 w-full bg-[#F0F0F0]">
        <div className="px-6">
          <div className="text-center mb-8">
            <Badge className="bg-[#1500FE] text-white px-6 py-2 text-lg font-semibold rounded-full mb-6 sm:text-[14px] md:text-[16px] text-nowrap">
              💬 Stores Built for Real Businesses
            </Badge>

            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-black text-black mb-6 leading-[100%]">
              What Ecommerce <br />
              <span className="text-[#00C27B]">Brands Say</span>
            </h2>
          </div>
          <VideoCarousel reviews={shopifyReviews} />
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full max-w-7xl flex items-center justify-center flex-col py-24 sm:px-4 lg:px-0">
        <div className="text-center mb-12">
          <Badge className="bg-[#1500FE] text-white px-6 py-2 text-lg font-semibold rounded-full mb-6 sm:text-[14px] md:text-[16px]">
            ❓ Frequently Asked Questions
          </Badge>
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-black mb-2 text-black leading-[100%]">
            Shopify Questions, <br />
            <span className="text-[#1500FE]"> Clear Answers</span>
          </h2>
        </div>
        <Accordion type="multiple" defaultValue={["item-1", "item-2"]} className="border rounded-lg w-full">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index + 1}`} key={index}>
              <AccordionTrigger className="lg:text-[18px] sm:text-[16px]">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-[16px]">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Contact Section */}
      <section className="w-full flex items-center justify-center bg-[#DBE2EA] flex-col py-24" id="contact">
        <div className="text-center mb-12 px-4">
          <Badge className="bg-[#1500FE] text-white px-6 py-2 text-lg font-semibold rounded-full mb-6 sm:text-[14px] md:text-[16px]">
            🚀 Let&apos;s Build Your Store
          </Badge>
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-black mb-2 text-black leading-[100%]">
            Ready to Launch
            <span className="text-[#1500FE]"> Your Shopify Store?</span>
          </h2>
          <p className="mt-4 text-[16px] sm:text-[18px] font-bold opacity-60 max-w-3xl mx-auto">
            Get expert guidance, transparent pricing, and a Shopify store designed to help you sell online with confidence.
          </p>
        </div>

        <ContactFormCompact
          className="max-w-7xl"
          plans={[
            "New Shopify Store",
            "Shopify Store Redesign",
            "Shopify Speed Optimization",
            "Shopify Product Page Improvement",
          ]}
        />
      </section>

      {/* Floating WhatsApp Button */}
      <Link
        href="https://wa.me/919999152530"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-4 z-[90] bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-105 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </Link>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-[95] bg-black text-white border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-bold text-[14px] sm:text-[16px] text-center sm:text-left">
            Launch Your Shopify Store - Get a Free Consultation
          </p>
          <Link
            href="https://wa.me/919999152530"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-black font-extrabold px-4 py-2 rounded-lg text-[13px] sm:text-[14px]"
          >
            Chat on WhatsApp
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Shopify18KLanding
