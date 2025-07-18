import { ArrowRight, CheckCircle, Headset, MoveRight, Phone, Check, MapPin, Smartphone, Zap, Shield, Rocket, Timer, UserCheck, MessageCircle, Search, Share2, Newspaper, LayoutDashboard, BadgeCheck, Repeat, X, ShoppingCart, Calendar } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from "@/components/ui/badge"
import { VideoCarousel } from '@/components/VideoCarousel'
import HeroVideoPlayer from '@/components/HeroVideoPlayer'

export const generateMetadata = async () => ({
  title: "Website Development Under 6K | Affordable Websites for Indian SMBs",
  description: "Get a stunning, mobile-friendly website for just ₹6000. Fast delivery, SEO-optimized, and perfect for Indian small businesses. No hidden charges. Launch your business online today!",
  openGraph: {
    title: "Website Development Under 6K | Affordable Websites for Indian SMBs",
    description: "Get a stunning, mobile-friendly website for just ₹6000. Fast delivery, SEO-optimized, and perfect for Indian small businesses. No hidden charges. Launch your business online today!",
    url: "https://www.0101.agency/wd-6k-landing",
    siteName: "Zero One Agency",
    images: [
      {
        url: "/footer-bot.png", // or a more relevant OG image
        width: 1200,
        height: 630,
        alt: "Affordable Website for Indian SMBs",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development Under 5K | Affordable Websites for Indian SMBs",
    description: "Get a stunning, mobile-friendly website for just ₹6000. Fast delivery, SEO-optimized, and perfect for Indian small businesses. No hidden charges. Launch your business online today!",
    images: ["/footer-bot.png"],
  },
  keywords: [
    "affordable website india",
    "website under 6000",
    "small business website",
    "website development india",
    "SEO website cheap",
    "fast website delivery",
    "mobile friendly website",
    "zero one agency"
  ],
});

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import ContactFormCompact from '@/components/ContactFormCompact'

type Review = {
  type: "text" | "video"
  imageSrc: string
  reviewerName: string
  reviewerPosition: string
  reviewerCompany: string
  reviewText: string
  buttonColor: string
}

const affordableWebsiteReviews: Review[] = [
  {
    type: "text",
    imageSrc: "https://placehold.co/96x96/FF6B6B/FFFFFF?text=N",
    reviewerName: "Nidhi Sharma",
    reviewerPosition: "Salon Owner",
    reviewerCompany: "Jaipur",
    reviewText:
      "Can't believe I got such a clean, professional site for just ₹6000! My salon bookings increased by 40%.",
    buttonColor: "#FF6B6B",
  },
  {
    type: "text",
    imageSrc: "https://placehold.co/96x96/3366FF/FFFFFF?text=S",
    reviewerName: "Sanjay Kumar",
    reviewerPosition: "Tuition Coach",
    reviewerCompany: "Delhi",
    reviewText:
      "No BS, no delays. They delivered exactly what they promised – fast and it looks amazing. Highly recommended!",
    buttonColor: "#3366FF",
  },
  {
    type: "text",
    imageSrc: "https://placehold.co/96x96/00B894/FFFFFF?text=F",
    reviewerName: "Firoz Ahmed",
    reviewerPosition: "Business Consultant",
    reviewerCompany: "Mumbai",
    reviewText:
      "I paid ₹18k to another agency earlier and this ₹6000 website is actually better than that. Incredible value!",
    buttonColor: "#00B894",
  },
  {
    type: "text",
    imageSrc: "https://placehold.co/96x96/FF9F43/FFFFFF?text=P",
    reviewerName: "Priya Verma",
    reviewerPosition: "Boutique Owner",
    reviewerCompany: "Lucknow",
    reviewText:
      "My boutique finally has a digital presence thanks to this team. It’s stylish, mobile-friendly, and super affordable!",
    buttonColor: "#FF9F43",
  },
  {
    type: "text",
    imageSrc: "https://placehold.co/96x96/6C5CE7/FFFFFF?text=R",
    reviewerName: "Rohit Singh",
    reviewerPosition: "Freelance Photographer",
    reviewerCompany: "Chandigarh",
    reviewText:
      "As someone not very tech-savvy, I was surprised how easy and fast it was. ₹6000 well spent!",
    buttonColor: "#6C5CE7",
  },
]

const faqs = [
  {
    question: "Why is the website only ₹6000? Is this legit?",
    answer:
      "Yes, it’s completely legit. We use an efficient process tailored for Indian small businesses, avoiding unnecessary agency overheads. You get a high-quality site without inflated pricing.",
  },
  {
    question: "Can I use my own domain and hosting?",
    answer:
      "Yes. If you already have a domain and/or hosting, we’ll connect your new website to them at no extra cost.",
  },
  {
    question: "What if I don’t have content or images?",
    answer:
      "No worries! We can help with basic content writing and create a clean, text-based logo if you don’t have one. You can always update the site later too.",
  },
  {
    question: "Can I add more pages or features later?",
    answer:
      "Yes, you can request additional pages or advanced features later for a small extra cost. We're flexible to grow with your business.",
  },
  {
    question: "Can I request a refund if I change my mind?",
    answer:
      "Since we start work quickly, refunds aren’t guaranteed once design work begins — but we’re always open to solving any concerns you have.",
  },
];


const WebsiteDevelopment6K = () => {

  return (
    <div className='flex items-center justify-center w-full flex-col'>

      {/* Hero Section */}
      <section className="w-full max-w-[1728px] xl:my-48 sm:my-40 flex flex-col lg:flex-row items-center justify-center lg:py-0 mx-auto px-4">
        {/* Hero Left */}
        <div className="w-full lg:w-1/2 text-left lg:text-left">
          <h1 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[80px] font-black leading-[100%]">
            Get a Stunning <br />
            <span className="text-[#141DEA]">Website</span> in <br />
            just <span className="text-[#00C27B]">6000/-</span>
          </h1>

          <p className="mt-4 sm:mt-6 text-[16px] sm:text-[18px] font-bold opacity-60">
            No Website Yet? Your Competitors Are Ahead. <br />
            Get Yours Now for 6000/– All-Inclusive.
          </p>

          <div className="flex md:flex-row sm:flex-col gap-4 mt-6 w-full justify-start">
            <Link href="#contact" className="rounded-lg bg-[#141DEA] text-white flex gap-2 items-center justify-center text-[14px] sm:text-[16px] p-4 sm:p-5 uppercase font-bold">
              <MoveRight className="w-5 h-5" />
              <span>Get My Website 6000/-</span>
            </Link>

            <Link href="#contact" className="rounded-lg border-2 border-[#141DEA] text-[#141DEA] flex gap-2 items-center justify-center text-[14px] sm:text-[16px] p-4 sm:p-5 uppercase font-bold">
              <Calendar className="w-5 h-5" />
              <span>Talk to a Expert</span>
            </Link>
          </div>

          <div className="flex flex-wrap gap-2 mt-6 sm:mt-8 justify-start max-w-3xl">
            <p className="p-2 bg-[#F0F0F0] rounded-xl text-[14px] sm:text-[16px] px-4">📱 100% Mobile-Friendly</p>
            <p className="p-2 bg-[#F0F0F0] rounded-xl text-[14px] sm:text-[16px] px-4">💬 WhatsApp Chat Enabled</p>
            <p className="p-2 bg-[#F0F0F0] rounded-xl text-[14px] sm:text-[16px] px-4">⚡ Delivered in 3–5 Days</p>
            <p className="p-2 bg-[#F0F0F0] rounded-xl text-[14px] sm:text-[16px] px-4">🔍 SEO Boosted</p>
          </div>
        </div>

        {/* Hero Right */}
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0 relative flex justify-center items-center px-2 sm:px-4">
          <div className="relative w-full max-w-[800px]">
            {/* 3:2 Aspect Ratio Container */}
              <div className="relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-500 aspect-[3/2]">
                <HeroVideoPlayer image="/footer-bot.png" video="YOUR_VIDEO_ID" />
              </div>

            {/* Floating Badges */}
            <div className="absolute z-20 -top-6 -right-6 bg-[#00C27B] text-white rounded-2xl p-4 shadow-xl transform -rotate-12 hover:rotate-0 transition-transform duration-300">
              <div className="text-xl sm:text-2xl font-bold">6000/-</div>
              <div className="text-sm opacity-90">Only!</div>
            </div>

            <div className="absolute z-20 -bottom-6 -left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/50 transform rotate-6 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#00C27B] rounded-full animate-pulse"></div>
                <span className="font-semibold text-gray-700 text-sm sm:text-base">Live in 3–5 Days</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 relative w-full bg-[#f0f0f0]">
        <div className='flex flex-col items-center justify-center'>
          {/* Section Header */}
          <div className="text-center mb-6">
            <Badge className="bg-gradient-to-r from-[#141DEA] to-[#00C27B] text-white p-4 text-[18px] font-semibold mb-6 border-none rounded-full sm:text-[14px] md:text-[16px]">
              🔥 Actual Value: ₹20,000+ 💥 You Pay: ₹6000 Only
            </Badge>
            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-black mb-2 text-black leading-[100%]">
              What You Get for{" "}
              <span className="bg-[#00C27B] bg-clip-text text-transparent">6000/-</span>
            </h2>
            <p className="mt-2 text-[16px] sm:text-[18px] font-bold opacity-60">Everything You Need. Nothing You Don’t.</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 max-w-[1728px] items-center justify-center mb-12 px-4'>
            {[
              { text: 'Custom-designed 1–5 page website', icon: LayoutDashboard },
              { text: 'Mobile & SEO-friendly', icon: Smartphone },
              { text: 'Contact form', icon: MessageCircle },
              { text: 'Fast loading & secure', icon: Zap },
              { text: 'Delivered in 7 days', icon: Timer },
              { text: '100% ownership', icon: UserCheck },
              { text: 'WhatsApp Chat Integration', icon: Phone },
              { text: 'Basic On-Page SEO', icon: Search },
              { text: 'Social Media Links', icon: Share2 },
              { text: 'Blog/News Section (Optional)', icon: Newspaper },
              { text: 'Easy-to-Use Admin Panel', icon: LayoutDashboard },
              { text: '1 Year Free Support', icon: Headset },
              { text: 'No Hidden Charges', icon: BadgeCheck },
              { text: 'Unlimited Revisions (First 7 Days)', icon: Repeat },
            ].map((feature, idx) => (
              <div
                key={idx}
                className='bg-white rounded-xl p-2 sm:p-4 pr-4 sm:pr-8 text-center flex gap-2 sm:gap-3 items-center justify-left lg:text-[18px] sm:text-[16px] font-medium shadow-sm hover:shadow-lg transition-shadow duration-200'
              >
                <div className='bg-[#F0F0F0] flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-md'>
                  <feature.icon className='text-black w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0' />
                </div>
                <p className='font-bold text-nowrap'>{feature.text}</p>
              </div>
            ))}
          </div>

          <Link href="#contact" className="rounded-lg bg-[#141DEA] text-white flex gap-2 items-center justify-center text-[14px] sm:text-[16px] p-4 sm:p-5 uppercase font-bold">
            <MoveRight className="w-5 h-5" />
            <span>Build My Website in 6000/-</span>
          </Link>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="w-full py-24 flex flex-col items-center justify-center">
        <div className="text-center mb-10">
          <Badge className="bg-[#1500FE] text-white px-6 text-lg font-semibold rounded-full mb-6 sm:text-[14px] md:text-[16px]">
            Portfolio
          </Badge>
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-black mb-2 text-black leading-[100%]">
            Websites Built for <br /> <span className='text-[#00C27B]'>Indian SMBs</span>
          </h2>
          <p className="mt-2 text-[16px] sm:text-[18px] font-bold opacity-60 max-w-xl mx-auto">
            From local stores to growing service providers, here are some of the websites we’ve recently launched — fast, affordable, and custom to each client’s needs.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full max-w-7xl px-4 mb-12">
          {/* Portfolio Items */}
          {[
            {
              name: 'Shivam Hardware',
              type: 'Local Retail Store',
              city: 'Pune',
              link: '#',
            },
            {
              name: 'GreenLeaf Nursery',
              type: 'Plant Nursery',
              city: 'Ahmedabad',
              link: '#',
            },
            {
              name: 'FitPro Gym',
              type: 'Fitness Studio',
              city: 'Hyderabad',
              link: '#',
            },
            {
              name: 'Tasty Spoon Café',
              type: 'Café & Bakery',
              city: 'Bengaluru',
              link: '#',
            },
            {
              name: 'Elite Interior Works',
              type: 'Interior Design Services',
              city: 'Delhi NCR',
              link: '#',
            },
            {
              name: 'Sunrise Dental Care',
              type: 'Dental Clinic',
              city: 'Jaipur',
              link: '#',
            },
            {
              name: 'ClickPix Studio',
              type: 'Photography & Videography',
              city: 'Mumbai',
              link: '#',
            },
            {
              name: 'City Cab Rentals',
              type: 'Taxi & Travel Services',
              city: 'Lucknow',
              link: '#',
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl flex flex-col overflow-hidden group">
              <div className="relative w-full h-fit flex items-center justify-center aspect-3/2 bg-[#F7F7FA]">
                <Image
                  src={`https://placehold.co/400x300?text=${encodeURIComponent(item.name.replace(/ /g, '+'))}`}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  width={500}
                  height={500}
                />
                <span className="absolute top-2 right-2 border-black border text-[13px] font-semibold px-2.5 py-1.5 rounded-full shadow-none leading-none">
                  {item.type}
                </span>
                <Link href={item.link} className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                  <span className="bg-[#141DEA] backdrop-blur-xl text-white font-semibold text-sm p-2 px-4 rounded-full shadow-none flex gap-1.5 items-center justify-center"><ArrowRight className='w-4 h-4' /> View Site</span>
                </Link>
              </div>
              <div className="flex-1 flex flex-col p-4 gap-1.5">
                <Link href={item.link} className="block w-fit" tabIndex={-1}>
                  <h3 className="text-[18px] font-semibold text-gray-900 mb-0.5 truncate cursor-pointer">
                    {item.name}
                  </h3>
                </Link>
                <div className="text-[14px] text-gray-500 flex items-center gap-2">
                  <MapPin className="w-8 h-8 text-gray-500 bg-[#f0f0f0] p-2 rounded-md" />
                  <span>{item.city}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex md:flex-row sm:flex-col items-center gap-4 mt-2">
          <Link href="#contact" className="rounded-lg bg-[#141DEA] text-white flex gap-2 items-center justify-center text-[16px] p-5 uppercase font-bold shadow-lg hover:bg-[#0e15b7] transition-colors w-full max-w-md text-center">
            <MoveRight className="w-5 h-5" />
            <span className='text-nowrap'>I Want a Site Like This</span>
          </Link>
          <Link href="#contact" className="rounded-lg border-2 border-[#141DEA] text-[#141DEA] flex gap-2 items-center justify-center text-[16px] p-5 uppercase font-bold bg-white w-full max-w-md text-center">
            <ArrowRight className="w-5 h-5" />
            <span>Get Online in 5 Days</span>
          </Link>
        </div>
      </section>

      {/* Price Comparison */}
      <section
        className='bg-[#141414] py-40 sm:py-20 sm:px-0 lg:py-24 w-full'
        style={{
          backgroundImage: 'url(/process-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="lg:px-12 sm:px-4 relative z-10 flex items-center justify-center flex-col">
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-black mb-4 text-white leading-[100%]">
              Why Our <span className="bg-[#00C27B] bg-clip-text text-transparent">6000/-</span> Website
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-white">
              Beats ₹50,000 Agency Projects
            </p>
          </div>

          {/* Responsive Comparison Cards for Mobile */}
          <div className="lg:hidden space-y-6">
            {[
              { feature: "Design Time", agency: { value: "2–3 Weeks", positive: false }, us: { value: "3–5 Days", positive: true } },
              { feature: "Mobile Responsiveness", agency: { value: "Not Guaranteed", positive: false }, us: { value: "Always Included", positive: true } },
              { feature: "WhatsApp Integration", agency: { value: "Extra ₹1500", positive: false }, us: { value: "FREE", positive: true } },
              { feature: "SEO Optimization", agency: { value: "Add-On Charges", positive: false }, us: { value: "Included", positive: true } },
              { feature: "Page Speed Optimization", agency: { value: "Extra Fee", positive: false }, us: { value: "FREE", positive: true } },
              { feature: "Ownership & Control", agency: { value: "Hidden Contracts", positive: false }, us: { value: "100% Yours", positive: true } },
            ].map((row, index) => (
              <Card key={index} className="bg-white/80 border border-gray-200 w-full">
                <CardContent className='pt-4'>
                  <h3 className="font-bold text-base sm:text-lg mb-4 text-gray-900">{row.feature}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`bg-[#f0f0f0] flex items-center justify-center w-10 h-10 rounded-md mb-2`}>
                        {row.agency.positive ? (
                          <Check className="text-[#00C27B] w-6 h-6" />
                        ) : (
                          <X className="text-red-400 w-6 h-6" />
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mb-1">Typical Agency</p>
                      <p className="text-gray-700 font-medium text-sm sm:text-base text-center">{row.agency.value}</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className={`bg-[#f0f0f0] flex items-center justify-center w-10 h-10 rounded-md mb-2`}>
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

          {/* Desktop Table */}
          <div className="hidden lg:block bg-white/80 rounded-2xl border border-gray-200 overflow-hidden max-w-7xl w-full">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-[#f0f0f0] rounded-t-2xl">
              <div className="py-5 px-4 text-left font-bold text-lg text-gray-700">Features</div>
              <div className="py-5 px-4 text-left font-bold text-lg text-gray-700">Typical Agency</div>
              <div className="py-5 px-4 text-left font-bold text-lg text-[#141DEA]">0101.agency</div>
            </div>
            <div className="p-4 pt-4">
              {[
                {
                  feature: "Design Time",
                  agency: { value: "2–3 Weeks", positive: false },
                  us: { value: "3–5 Days", positive: true },
                },
                {
                  feature: "Mobile Responsiveness",
                  agency: { value: "Not Guaranteed", positive: false },
                  us: { value: "Always Included", positive: true },
                },
                {
                  feature: "WhatsApp Integration",
                  agency: { value: "Extra ₹1500", positive: false },
                  us: { value: "FREE", positive: true },
                },
                {
                  feature: "SEO Optimization",
                  agency: { value: "Add-On Charges", positive: false },
                  us: { value: "Included", positive: true },
                },
                {
                  feature: "Page Speed Optimization",
                  agency: { value: "Extra Fee", positive: false },
                  us: { value: "FREE", positive: true },
                },
                {
                  feature: "Ownership & Control",
                  agency: { value: "Hidden Contracts", positive: false },
                  us: { value: "100% Yours", positive: true },
                },
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


          {/* CTA */}
          <div className="text-center mt-12 w-full flex items-center justify-center">
            <Link
              href="#contact"
              className='relative rounded-lg bg-[#141DEA] text-white flex gap-2 items-center justify-center text-sm sm:text-base md:text-lg p-4 sm:p-5 uppercase font-bold w-fit'
            >
              <MoveRight className='w-5 h-5 z-10' />
              <span className='z-10'>Book My Website Now</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Who is this for */}
      <section className="py-24 w-full max-w-[1728px] items-center justify-center flex flex-col">

        <div>

          <div className="text-center mb-4">
            <Badge className="bg-[#1500FE] text-white px-6 text-lg font-semibold rounded-full mb-6 sm:text-[14px] md:text-[16px]">
              💡 Perfect For You
            </Badge>
            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-black mb-2 text-black leading-[100%]">
              Who Is This{" "}
              <span className="bg-[#1500FE] bg-clip-text text-transparent">For?</span>
            </h2>
          </div>

          {/* Compact Grid with 20+ Businesses */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 max-w-[1728px] items-center justify-center mb-12 px-4 mt-8">
            {[
              { icon: "🏪", text: "Restaurants" },
              { icon: "💇", text: "Salons" },
              { icon: "🏥", text: "Clinics" },
              { icon: "🏋️", text: "Gyms" },
              { icon: "📚", text: "Tutors" },
              { icon: "🎨", text: "Designers" },
              { icon: "📸", text: "Photographers" },
              { icon: "✍️", text: "Writers" },
              { icon: "🚀", text: "Startups" },
              { icon: "💼", text: "Consultants" },
              { icon: "🔧", text: "Mechanics" },
              { icon: "⚡", text: "Electricians" },
              { icon: "🔨", text: "Plumbers" },
              { icon: "🛒", text: "Retail Shops" },
              { icon: "🍕", text: "Food Delivery" },
              { icon: "🏠", text: "Real Estate" },
              { icon: "📱", text: "YouTubers" },
              { icon: "🎙️", text: "Podcasters" },
              { icon: "💻", text: "Freelancers" },
              { icon: "🎯", text: "Coaches" },
              { icon: "🧘", text: "Yoga Studios" },
              { icon: "🐕", text: "Pet Services" },
              { icon: "🚗", text: "Car Services" },
              { icon: "📖", text: "Bloggers" },
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

        {/* Emphasis Message */}
        <div className="flex justify-center">
          <div className="inline-block rounded-2xl bg-gradient-to-br from-black via-[#18181b] to-[#23272f] text-white shadow-2xl">
            <div className="p-4 flex flex-row items-center gap-4">

              {/* Icon */}
              <span className="flex items-center justify-center w-16 h-16 rounded-md bg-emerald-500/20">
                <CheckCircle className="w-8 h-8 text-[#00C27B]" />
              </span>

              {/* Text Content */}
              <div className="flex flex-col">
                <h3 className="text-[20px] font-extrabold">No Tech Skills Required</h3>
                <p className="text-[14px] opacity-50 max-w-md">
                  You <strong className="text-white font-bold">do NOT</strong> need any tech skills. We handle everything.
                </p>
              </div>

            </div>
          </div>
        </div>


      </section>

      {/* Mobile First Section */}
      <section
        className="py-16 sm:py-24 text-white relative w-full overflow-x-hidden"
        style={{
          backgroundImage: 'url(/process-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="px-2 sm:px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center max-w-7xl mx-auto w-full">
            {/* Left - Phone Mockup */}
            <div className="relative flex justify-center w-full">
              <div className="relative w-full flex justify-center">
                {/* Phone Frame */}
                <div className="w-full max-w-[320px] sm:max-w-xs aspect-[9/16] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2rem] sm:rounded-[3rem] p-1.5 sm:p-2 shadow-2xl mx-auto relative">
                  {/* Floating Speed Indicator - moved outside white phone area */}
                  <div className="absolute -top-4 -right-4 bg-[#00C27B] rounded-2xl p-2 sm:p-3 shadow-xl min-w-[48px] z-20">
                    <div className="text-center">
                      <div className="text-base sm:text-xl font-bold">2s</div>
                      <div className="text-xs sm:text-sm opacity-90">Load Time</div>
                    </div>
                  </div>
                  <div className="w-full h-full bg-white rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden relative">
                    <Image
                      src="https://placehold.co/400x800"
                      alt="Mobile website"
                      width={400}
                      height={800}
                      className="w-full h-full object-cover"
                    />
                    {/* Phone Details */}
                    <div className="absolute top-3 sm:top-6 left-1/2 transform -translate-x-1/2 w-12 sm:w-20 h-1 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Content */}
            <div className="space-y-4 w-full max-w-xl mx-auto">
              <div>
              <Badge className="bg-[#1500FE] text-white px-6 text-lg font-semibold rounded-full mb-6 sm:text-[14px] md:text-[16px]">
              📱 Mobile-First
                </Badge>
                <h2 className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[64px] font-black text-white leading-[110%] mb-6 sm:mb-8">
                  100% Mobile-First &{" "}
                  <span className="bg-gradient-to-r inline-block text-transparent bg-clip-text from-white/10 to-white">
                    Lightning Fast
                  </span>
                </h2>
              </div>
              <div className="space-y-3 sm:space-y-4">
                {[
                  { icon: Smartphone, text: "Perfect on every device", desc: "Responsive design that adapts" },
                  { icon: Zap, text: "Loads in under 2 seconds", desc: "Optimized for speed" },
                  { icon: Shield, text: "Google PageSpeed Score 90+", desc: "Performance guaranteed" },
                  { icon: Rocket, text: "Low bounce rate = More conversions", desc: "Better user experience" },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 sm:gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-2 sm:p-3 border border-white/10"
                  >
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-xl flex items-center justify-center">
                      <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[16px] sm:text-[18px]">{feature.text}</h3>
                      <p className="text-white opacity-50 text-[14px] sm:text-[16px]">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Performance Meter */}
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl shadow-md mb-8 sm:mb-10">
                <CardContent className='pt-4'>
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-[18px] text-white leading-[100%]">PageSpeed Score</h2>
                    <span className="text-xl sm:text-3xl font-bold text-green-400">91/100</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2 sm:h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-red-500 via-orange-400 to-green-500 h-2 sm:h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: "91%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-300 mt-2">
                    <span>Poor</span>
                    <span>Excellent</span>
                  </div>
                </CardContent>
              </Card>
              <Link href="#contact" className="rounded-lg bg-white text-black flex gap-2 items-center justify-center text-[13px] sm:text-[16px] p-3 sm:p-5 uppercase font-bold w-fit">
                <MoveRight className="w-5 h-5" />
                <span>Build My Website for 6000/-</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Comparison Section */}
      <section className="w-full py-24 flex flex-col items-center justify-center bg-white">
        <div className="text-center item mb-10 w-full max-w-7xl px-4">
          <Badge className="bg-[#1500FE] text-white px-6 text-lg font-semibold rounded-full mb-6 sm:text-[14px] md:text-[16px]">
            Compare Plans
          </Badge>
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-black mb-2 text-black leading-[100%]">
            Choose Your <span className="text-[#00C27B]">Website Plan</span>
          </h2>
          <p className="mt-2 text-[16px] sm:text-[18px] font-bold opacity-60 max-w-7xl">
            Pick the perfect plan for your business needs. <br />Simple, transparent pricing.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl px-4 mb-8">
          {/* 6000 Plan */}
          <div className="bg-white rounded-2xl shadow-lg flex flex-col items-start p-4 w-full">
            <div className="flex items-center gap-3 bg-[#f0f0f0] rounded-xl px-5 py-4 mb-4 w-full">
              <span className="bg-white rounded-lg p-2 flex items-center justify-center"><LayoutDashboard className="w-7 h-7 text-[#141DEA]" /></span>
              <div>
                <h3 className="text-xl font-bold text-[#141DEA] text-left">Basic Website</h3>
                <div className="text-2xl font-extrabold text-black text-left">6000/-</div>
              </div>
            </div>
            <ul className="w-full mb-2 space-y-3 text-left">
              <li className="flex items-center gap-3 text-[16px] font-medium">
                <span className="bg-[#f0f0f0] flex items-center justify-center w-10 h-10 rounded-md"><Check className="text-[#00C27B] w-6 h-6" /></span> 1–5 Custom Pages
              </li>
              <li className="flex items-center gap-3 text-[16px] font-medium">
                <span className="bg-[#f0f0f0] flex items-center justify-center w-10 h-10 rounded-md"><Check className="text-[#00C27B] w-6 h-6" /></span> Mobile & SEO Friendly
              </li>
              <li className="flex items-center gap-3 text-[16px] font-medium">
                <span className="bg-[#f0f0f0] flex items-center justify-center w-10 h-10 rounded-md"><Check className="text-[#00C27B] w-6 h-6" /></span> WhatsApp Chat Integration
              </li>
              <li className="flex items-center gap-3 text-[16px] font-medium">
                <span className="bg-[#f0f0f0] flex items-center justify-center w-10 h-10 rounded-md"><Check className="text-[#00C27B] w-6 h-6" /></span> Contact Form
              </li>
              <li className="flex items-center gap-3 text-[16px] font-medium">
                <span className="bg-[#f0f0f0] flex items-center justify-center w-10 h-10 rounded-md"><Check className="text-[#00C27B] w-6 h-6" /></span> Admin Panel
              </li>
              <li className="flex items-center gap-3 text-[16px] font-medium">
                <span className="bg-[#f0f0f0] flex items-center justify-center w-10 h-10 rounded-md"><Check className="text-[#00C27B] w-6 h-6" /></span> 1 Year Free Support
              </li>
              <li className="flex items-center gap-3 text-[16px] font-medium opacity-60">
                <span className="bg-[#f0f0f0] flex items-center justify-center w-10 h-10 rounded-md"><X className="text-red-400 w-6 h-6" /></span> E-commerce Functionality
              </li>
            </ul>
          </div>
          {/* 8000 Plan */}
          <div className="relative rounded-2xl shadow-lg flex flex-col items-start p-4 w-full overflow-hidden bg-[#141DEA]">
            <div className="relative z-10 w-full">
              <div className="flex items-center gap-3 bg-[#f0f0f0] rounded-xl px-5 py-4 mb-4 w-full">
                <span className="bg-white rounded-lg p-2 flex items-center justify-center"><ShoppingCart className="w-7 h-7 text-[#141DEA]" /></span>
                <div>
                  <h3 className="text-xl font-bold text-[#141DEA] text-left">E-commerce Website</h3>
                  <div className="text-2xl font-extrabold text-black text-left">@8000/-</div>
                </div>
              </div>
              <ul className="w-full mb-2 space-y-3 text-left">
                <li className="flex items-center gap-3 text-[16px] font-medium text-white">
                  <span className="bg-[#f0f0f0] flex items-center justify-center w-10 h-10 rounded-md"><Check className="text-[#00C27B] w-6 h-6" /></span> 1–10 Custom Pages
                </li>
                <li className="flex items-center gap-3 text-[16px] font-medium text-white">
                  <span className="bg-[#f0f0f0] flex items-center justify-center w-10 h-10 rounded-md"><Check className="text-[#00C27B] w-6 h-6" /></span> Mobile & SEO Friendly
                </li>
                <li className="flex items-center gap-3 text-[16px] font-medium text-white">
                  <span className="bg-[#f0f0f0] flex items-center justify-center w-10 h-10 rounded-md"><Check className="text-[#00C27B] w-6 h-6" /></span> WhatsApp Chat Integration
                </li>
                <li className="flex items-center gap-3 text-[16px] font-medium text-white">
                  <span className="bg-[#f0f0f0] flex items-center justify-center w-10 h-10 rounded-md"><Check className="text-[#00C27B] w-6 h-6" /></span> Contact Form
                </li>
                <li className="flex items-center gap-3 text-[16px] font-medium text-white">
                  <span className="bg-[#f0f0f0] flex items-center justify-center w-10 h-10 rounded-md"><Check className="text-[#00C27B] w-6 h-6" /></span> Admin Panel
                </li>
                <li className="flex items-center gap-3 text-[16px] font-medium text-white">
                  <span className="bg-[#f0f0f0] flex items-center justify-center w-10 h-10 rounded-md"><Check className="text-[#00C27B] w-6 h-6" /></span> 1 Year Free Support
                </li>
                <li className="flex items-center gap-3 text-[16px] font-medium text-white">
                  <span className="bg-[#f0f0f0] flex items-center justify-center w-10 h-10 rounded-md"><Check className="text-[#00C27B] w-6 h-6" /></span> E-commerce Functionality
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* CTAs below cards */}
        <div className="flex flex-col md:flex-row gap-4 w-full max-w-5xl px-4">
          <Link href="#contact" className="rounded-lg bg-[#141DEA] text-white flex gap-2 items-center justify-center text-[16px] p-4 uppercase font-bold w-full md:w-1/2 text-center shadow-lg hover:bg-[#0e15b7] transition-colors">
            <MoveRight className="w-5 h-5" />
            <span>Get Basic Website</span>
          </Link>
          <Link href="#contact" className="rounded-lg bg-white text-[#141DEA] flex gap-2 items-center justify-center text-[16px] p-4 uppercase font-bold w-full md:w-1/2 text-center shadow-lg hover:bg-[#f0f0f0] transition-colors">
            <MoveRight className="w-5 h-5" />
            <span>Get E-commerce Website</span>
          </Link>
        </div>
      </section>

      {/* Testimonials - Modern Cards */}
      <section className="py-24 w-full bg-[#F0F0F0]">
        <div className="px-6">
          <div className="text-center mb-8">

            <Badge className="bg-[#1500FE] text-white px-6 py-2 text-lg font-semibold rounded-full mb-6 sm:text-[14px] md:text-[16px] text-nowrap">
              💬 Real feedback from real businesses
            </Badge>

            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-black text-black mb-6 leading-[100%]">
              What Our <br />
              <span className="text-[#00C27B]">
                Happy Clients
              </span>{" "}
              Say
            </h2>
          </div>
          <VideoCarousel reviews={affordableWebsiteReviews} />
        </div>
      </section>

      {/* Faq section */}
      <section className='w-full max-w-7xl flex items-center justify-center flex-col py-24 sm:px-4 lg:px-0'>
        <div className="text-center mb-12">
          <Badge className="bg-[#1500FE] text-white px-6 py-2 text-lg font-semibold rounded-full mb-6 sm:text-[14px] md:text-[16px]">
            ❓ Got Questions?
          </Badge>
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-black mb-2 text-black leading-[100%]">
            Quick Questions, <br />
            <span className="text-[#1500FE]"> Clear Answers</span>
          </h2>
        </div>
        <Accordion type="single" collapsible className="border rounded-lg w-full">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index + 1}`} key={index}>
              <AccordionTrigger className='lg:text-[18px] sm:text-[16px]'>{faq.question}</AccordionTrigger>
              <AccordionContent className='text-[16px]'>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>


      {/* Contact Section */}
      <section className='w-full flex items-center justify-center bg-[#DBE2EA] flex-col py-24' id='contact'>

        <div className="text-center mb-12">
          <Badge className="bg-[#1500FE] text-white px-6 py-2 text-lg font-semibold rounded-full mb-6 sm:text-[14px] md:text-[16px]">
            🚀 Let’s Get Started
          </Badge>
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-black mb-2 text-black leading-[100%]">
            Ready for
            <span className="text-[#1500FE]"> Your Website?</span>
          </h2>
        </div>

        <ContactFormCompact className='max-w-7xl' plans={["Company Website", "Ecommerce Website"]} />
      </section>
    </div>
  )
}

export default WebsiteDevelopment6K