import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  BadgeCheck,
  Check,
  CheckCircle,
  Code2,
  Compass,
  LineChart,
  MoveRight,
  Rocket,
  Shield,
  Sparkles,
  Target,
  Timer,
  Users,
  Wrench,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import ContactFormCompact from '@/components/ContactFormCompact'

export const generateMetadata = async () => ({
  title: 'MVP Development | Launch Fast with Zero One Agency',
  description:
    'Validate your idea, ship a lean MVP, and start learning from real users. Product strategy, UX, and engineering aligned for speed and clarity.',
  openGraph: {
    title: 'MVP Development | Launch Fast with Zero One Agency',
    description:
      'Validate your idea, ship a lean MVP, and start learning from real users. Product strategy, UX, and engineering aligned for speed and clarity.',
    url: 'https://www.0101.agency/mvp-development',
    siteName: 'Zero One Agency',
    images: [
      {
        url: '/footer-bot.png',
        width: 1200,
        height: 630,
        alt: 'MVP development for startups',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MVP Development | Launch Fast with Zero One Agency',
    description:
      'Validate your idea, ship a lean MVP, and start learning from real users. Product strategy, UX, and engineering aligned for speed and clarity.',
    images: ['/footer-bot.png'],
  },
  keywords: [
    'mvp development',
    'startup mvp',
    'rapid prototyping',
    'product discovery sprint',
    'ux ui for startups',
    'build measure learn',
    'lean product',
    'zero one agency',
  ],
})

type FeatureItem = {
  title: string
  description: string
  icon: typeof Rocket
}

type ProcessStep = {
  title: string
  description: string
  icon: typeof Rocket
}

const outcomes: FeatureItem[] = [
  {
    title: 'Investor-ready demo',
    description: 'A clear narrative, clickable flows, and a product story investors can grasp fast.',
    icon: Sparkles,
  },
  {
    title: 'Real-user validation',
    description: 'Ship the smallest valuable set and learn what users actually pay for.',
    icon: Target,
  },
  {
    title: 'Conversion-ready UX',
    description: 'Core journeys designed to move users from first click to first value.',
    icon: LineChart,
  },
]

const deliverables = [
  'Product strategy + MVP scope',
  'User flows + clickable prototype',
  'Design system + UI kit',
  'Core web or mobile app build',
  'Authentication + onboarding',
  'Payments or subscriptions (if needed)',
  'Analytics + event tracking',
  'Admin panel / CMS basics',
  'QA + pre-launch checklist',
  'Launch-ready hosting setup',
  'Post-launch iteration plan',
  'Documentation + handover',
]

const process: ProcessStep[] = [
  {
    title: 'Discovery Sprint',
    description: 'Clarify goals, risks, success metrics, and the smallest viable roadmap.',
    icon: Compass,
  },
  {
    title: 'Prototype & UX',
    description: 'Map journeys, validate assumptions, and lock a conversion-first design.',
    icon: Users,
  },
  {
    title: 'Build in Sprints',
    description: 'Incremental development with weekly demos and real-time feedback.',
    icon: Code2,
  },
  {
    title: 'Test & Launch',
    description: 'QA, performance, and release planning so you ship with confidence.',
    icon: Shield,
  },
  {
    title: 'Measure & Improve',
    description: 'Analytics + insights to guide the next iteration and growth loop.',
    icon: LineChart,
  },
]

const engagementModels = [
  {
    title: 'Fixed-Scope MVP',
    description: 'Clear deliverables, defined timeline, and a launch-ready product.',
    icon: BadgeCheck,
  },
  {
    title: 'Sprint-Based Build',
    description: 'Flexible priorities, weekly planning, and quick pivots as you learn.',
    icon: Timer,
  },
  {
    title: 'Dedicated Product Pod',
    description: 'A focused team of product, design, and engineering on your roadmap.',
    icon: Wrench,
  },
]

const faqs = [
  {
    question: 'How long does an MVP usually take?',
    answer:
      'Most MVPs ship in 6–10 weeks depending on scope, integrations, and platform. We align on a weekly milestone plan before kickoff.',
  },
  {
    question: 'Can you help refine my idea before building?',
    answer:
      'Yes. We start with discovery to validate the idea, define the smallest viable scope, and prioritize features that drive learning.',
  },
  {
    question: 'Do you build both web and mobile MVPs?',
    answer:
      'We do. We choose the fastest path to validate the product: responsive web, native app, or cross-platform build.',
  },
  {
    question: 'What happens after launch?',
    answer:
      'We monitor metrics, collect feedback, and iterate. You can continue with sprint support or transition in-house.',
  },
  {
    question: 'Will I own the code and IP?',
    answer:
      'Yes. You get full ownership, repository access, and complete documentation at handover.',
  },
]

const techStack = [
  'Next.js / React',
  'Node.js / NestJS',
  'React Native',
  'Firebase / Supabase',
  'PostgreSQL',
  'AWS / Vercel',
  'Stripe / Razorpay',
  'PostHog / Mixpanel',
]

const MVPDevelopmentLanding = () => {
  return (
    <div className="flex items-center justify-center w-full flex-col">
      {/* Hero Section */}
      <section
        className="w-full py-24 lg:py-32"
        style={{
          backgroundImage: 'url(/gradient-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-[1728px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 text-left">
            <Badge className="bg-black text-white px-4 py-2 text-sm font-semibold rounded-full mb-6">
              🚀 MVP Development for Founders
            </Badge>
            <h1 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[72px] font-black leading-[100%] text-black">
              Launch a <span className="text-[#141DEA]">Focused MVP</span> in weeks,
              not months.
            </h1>
            <p className="mt-6 text-[16px] sm:text-[18px] font-semibold text-black/70 max-w-xl">
              We help founders validate ideas fast, build only what matters, and
              ship a product users actually want.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              {[
                '6–10 week timelines',
                'Product + UX + Engineering',
                'Weekly demo checkpoints',
                'Analytics baked in',
              ].map((item) => (
                <span
                  key={item}
                  className="bg-white/80 backdrop-blur text-black text-sm font-medium px-4 py-2 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                href="#contact"
                className="rounded-lg bg-[#141DEA] text-white flex gap-2 items-center justify-center text-[14px] sm:text-[16px] p-4 uppercase font-bold"
              >
                <MoveRight className="w-5 h-5" />
                <span>Book MVP Strategy Call</span>
              </Link>
              <Link
                href="#contact"
                className="rounded-lg border-2 border-black text-black flex gap-2 items-center justify-center text-[14px] sm:text-[16px] p-4 uppercase font-bold"
              >
                <ArrowRight className="w-5 h-5" />
                <span>Get My MVP Estimate</span>
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-[520px]">
              <div className="rounded-3xl border border-black/10 bg-white/80 backdrop-blur p-6 shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#141DEA] flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-black/60">Launch Window</p>
                    <p className="text-xl font-bold text-black">6–10 Weeks</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="rounded-2xl bg-[#F0F0F0] p-4">
                    <p className="text-black/60">Iterations</p>
                    <p className="text-lg font-bold text-black">Weekly</p>
                  </div>
                  <div className="rounded-2xl bg-[#F0F0F0] p-4">
                    <p className="text-black/60">Core Features</p>
                    <p className="text-lg font-bold text-black">Prioritized</p>
                  </div>
                  <div className="rounded-2xl bg-[#F0F0F0] p-4">
                    <p className="text-black/60">Tracking</p>
                    <p className="text-lg font-bold text-black">Analytics</p>
                  </div>
                  <div className="rounded-2xl bg-[#F0F0F0] p-4">
                    <p className="text-black/60">Ownership</p>
                    <p className="text-lg font-bold text-black">100%</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl px-4 py-3 shadow-xl border border-black/10 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#00C27B]" />
                <span className="text-sm font-semibold text-black">
                  Validate before you scale
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="w-full bg-white py-24">
        <div className="max-w-[1728px] mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="bg-[#141DEA] text-white px-6 py-2 text-sm font-semibold rounded-full mb-4">
              MVP Outcomes
            </Badge>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[56px] font-black text-black leading-[110%]">
              Build once, learn fast, and iterate smarter.
            </h2>
            <p className="mt-4 text-[16px] sm:text-[18px] text-black/60 max-w-2xl mx-auto">
              We focus on outcomes that reduce risk and prove traction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {outcomes.map((item) => (
              <Card key={item.title} className="border border-black/10 shadow-sm">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#F0F0F0] flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                  <p className="text-black/60">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="w-full py-24 bg-[#F7F7FA]">
        <div className="max-w-[1728px] mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="bg-black text-white px-6 py-2 text-sm font-semibold rounded-full mb-4">
              What You Get
            </Badge>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[56px] font-black text-black leading-[110%]">
              Everything needed to launch a credible MVP.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {deliverables.map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl p-4 flex items-center gap-3 shadow-sm border border-black/5"
              >
                <span className="w-10 h-10 rounded-xl bg-[#F0F0F0] flex items-center justify-center">
                  <Check className="w-5 h-5 text-[#00C27B]" />
                </span>
                <span className="font-semibold text-black">{item}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Link
              href="#contact"
              className="rounded-lg bg-[#141DEA] text-white flex gap-2 items-center justify-center text-[14px] sm:text-[16px] p-4 uppercase font-bold"
            >
              <MoveRight className="w-5 h-5" />
              <span>Start My MVP</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        className="w-full py-24"
        style={{
          backgroundImage: 'url(/process-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-[1728px] mx-auto px-6">
          <div className="text-center mb-12 text-white">
            <Badge className="bg-white/10 text-white px-6 py-2 text-sm font-semibold rounded-full mb-4">
              Our MVP Process
            </Badge>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[56px] font-black leading-[110%]">
              A structured path from idea to launch.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {process.map((step) => (
              <Card key={step.title} className="bg-white/90 border border-white/40">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-2xl bg-black/5 flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">{step.title}</h3>
                  <p className="text-black/60">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Link
              href="#contact"
              className="rounded-lg bg-white text-black flex gap-2 items-center justify-center text-[14px] sm:text-[16px] p-4 uppercase font-bold"
            >
              <MoveRight className="w-5 h-5" />
              <span>Plan My MVP Roadmap</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-[1728px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-[#141DEA] text-white px-6 py-2 text-sm font-semibold rounded-full mb-4">
                Tech Stack
              </Badge>
              <h2 className="text-[32px] sm:text-[40px] lg:text-[56px] font-black text-black leading-[110%]">
                Modern, scalable, and MVP-ready.
              </h2>
              <p className="mt-4 text-[16px] sm:text-[18px] text-black/60 max-w-xl">
                We pick the fastest stack for validation today and scale tomorrow.
                Your product stays flexible as traction grows.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {techStack.map((tech) => (
                <div
                  key={tech}
                  className="rounded-2xl bg-[#F0F0F0] px-4 py-3 text-sm font-semibold text-black"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="w-full py-24 bg-[#F7F7FA]">
        <div className="max-w-[1728px] mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="bg-black text-white px-6 py-2 text-sm font-semibold rounded-full mb-4">
              Engagement Models
            </Badge>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[56px] font-black text-black leading-[110%]">
              Choose the collaboration style that fits your stage.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {engagementModels.map((model) => (
              <Card key={model.title} className="border border-black/10 shadow-sm">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#F0F0F0] flex items-center justify-center mb-4">
                    <model.icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">{model.title}</h3>
                  <p className="text-black/60">{model.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Validation Section */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-[1728px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/footer-bot.png"
                alt="MVP planning board"
                width={1200}
                height={800}
                className="rounded-3xl shadow-2xl border border-black/10"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl px-4 py-3 shadow-xl border border-black/10 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#00C27B]" />
                <span className="text-sm font-semibold text-black">Launch with clarity</span>
              </div>
            </div>
            <div>
              <Badge className="bg-[#141DEA] text-white px-6 py-2 text-sm font-semibold rounded-full mb-4">
                MVP Clarity
              </Badge>
              <h2 className="text-[32px] sm:text-[40px] lg:text-[56px] font-black text-black leading-[110%]">
                Cut scope. Increase learning.
              </h2>
              <p className="mt-4 text-[16px] sm:text-[18px] text-black/60">
                We help you say no to distractions and build the smallest product
                that proves value. That means faster launches, real metrics, and
                smarter roadmap decisions.
              </p>
              <div className="mt-6 space-y-4">
                {[
                  'Feature prioritization workshops',
                  'Risks mapped before development',
                  'Launch checklist + go-to-market guidance',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-[#F0F0F0] flex items-center justify-center">
                      <Check className="w-5 h-5 text-[#00C27B]" />
                    </span>
                    <span className="font-semibold text-black">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="#contact"
                  className="rounded-lg bg-black text-white flex gap-2 items-center justify-center text-[14px] sm:text-[16px] p-4 uppercase font-bold w-fit"
                >
                  <MoveRight className="w-5 h-5" />
                  <span>Validate My MVP</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 w-full bg-[#F0F0F0]">
        <div className="max-w-[1728px] mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="bg-black text-white px-6 py-2 text-sm font-semibold rounded-full mb-4">
              Founder Feedback
            </Badge>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[56px] font-black text-black leading-[110%]">
              Trusted by teams moving fast.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  'They translated a messy idea into a clear MVP and shipped in under two months.',
                name: 'Aarav Mehta',
                role: 'Fintech Founder',
              },
              {
                quote:
                  'Weekly demos kept us aligned and the first users onboarded within days of launch.',
                name: 'Sanya Rao',
                role: 'Product Lead, HealthTech',
              },
              {
                quote:
                  'We avoided wasting six months by validating our core feature with real customers.',
                name: 'Rishi Kapoor',
                role: 'B2B SaaS Founder',
              },
            ].map((item) => (
              <Card key={item.name} className="border border-black/10 shadow-sm">
                <CardContent className="pt-6">
                  <p className="text-black/70 mb-4">“{item.quote}”</p>
                  <p className="font-bold text-black">{item.name}</p>
                  <p className="text-sm text-black/50">{item.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full max-w-6xl flex items-center justify-center flex-col py-24 px-6">
        <div className="text-center mb-12">
          <Badge className="bg-[#141DEA] text-white px-6 py-2 text-sm font-semibold rounded-full mb-4">
            FAQ
          </Badge>
          <h2 className="text-[32px] sm:text-[40px] lg:text-[56px] font-black text-black leading-[110%]">
            Questions founders ask before building.
          </h2>
        </div>
        <Accordion type="single" collapsible className="border rounded-lg w-full">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index + 1}`} key={faq.question}>
              <AccordionTrigger className="text-left text-[16px] sm:text-[18px]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[15px] sm:text-[16px] text-black/70">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Contact */}
      <section className="w-full flex items-center justify-center bg-[#DBE2EA] flex-col py-24" id="contact">
        <div className="text-center mb-12 px-6">
          <Badge className="bg-black text-white px-6 py-2 text-sm font-semibold rounded-full mb-4">
            Let’s Build
          </Badge>
          <h2 className="text-[32px] sm:text-[40px] lg:text-[56px] font-black text-black leading-[110%]">
            Ready to ship your MVP?
          </h2>
          <p className="mt-4 text-[16px] sm:text-[18px] text-black/60">
            Share your idea and we’ll map the fastest path to market.
          </p>
        </div>
        <ContactFormCompact
          className="max-w-7xl"
          plans={['MVP Starter', 'MVP + Growth', 'Dedicated Product Pod']}
        />
      </section>
    </div>
  )
}

export default MVPDevelopmentLanding
