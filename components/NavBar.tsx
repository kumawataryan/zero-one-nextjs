'use client'

import React, { useState, useRef } from 'react'
import {
  BadgeCheck,
  Banknote,
  BarChart3,
  Blocks,
  Bot,
  BotMessageSquare,
  BrainCircuit,
  BrainCog,
  BriefcaseBusiness,
  Building2,
  Calendar,
  CalendarCheck,
  Camera,
  CloudCog,
  Code2,
  ClipboardList,
  CreditCard,
  DatabaseZap,
  Dumbbell,
  FileText,
  Gamepad2,
  Handshake,
  Headset,
  Hospital,
  Lightbulb,
  Mail,
  Megaphone,
  Menu,
  MessageSquare,
  MonitorSmartphone,
  Package,
  Paintbrush,
  Plane,
  Rocket,
  Route,
  School,
  ServerCog,
  Settings2,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Stethoscope,
  Target,
  Truck,
  Users,
  Utensils,
  Video,
  WandSparkles,
  Warehouse,
  Workflow,
  X,
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const aiMegaMenuItems = [
  {
    title: 'POC Development',
    description: 'Prove feasibility before scaling.',
    icon: Lightbulb,
  },
  {
    title: 'MVP Development',
    description: 'Launch core features in days.',
    icon: Rocket,
  },
  {
    title: 'AI Strategy & Roadmap',
    description: 'Prioritize high-ROI AI initiatives.',
    icon: Route,
  },
  {
    title: 'AI Consulting & Transformation',
    description: 'Scale AI faster with expert guidance.',
    icon: Handshake,
  },
  {
    title: 'AI Integration',
    description: 'Connect AI into your existing stack.',
    icon: Workflow,
  },
  {
    title: 'AI App Development',
    description: 'Create AI-native apps that scale.',
    icon: MonitorSmartphone,
  },
  {
    title: 'AI Agent Development',
    description: 'Build agents for repeatable work.',
    icon: Bot,
  },
  {
    title: 'AI Product Development',
    description: 'Design, build, and optimize AI products.',
    icon: Blocks,
  },
  {
    title: 'AI-Powered Software Development',
    description: 'Embed AI into real product workflows.',
    icon: BrainCircuit,
  },
  {
    title: 'AI Infrastructure and Cloud Deployment',
    description: 'Deploy secure, scalable AI systems.',
    icon: CloudCog,
  },
  {
    title: 'Mobile App Modernization',
    description: 'Upgrade legacy apps with AI-ready stacks.',
    icon: Smartphone,
  },
  {
    title: 'Backend Development',
    description: 'Build reliable APIs and data systems.',
    icon: ServerCog,
  },
  {
    title: 'Frontend Development',
    description: 'Ship polished interfaces faster.',
    icon: Code2,
  },
  {
    title: 'AI for Healthcare',
    description: 'Improve care ops with intelligent automation.',
    icon: Hospital,
  },
  {
    title: 'Voice Bots, Chatbots',
    description: 'Automate conversations that convert.',
    icon: BotMessageSquare,
  },
  {
    title: 'Automation & Intelligent Workflows',
    description: 'Reduce manual work and delays.',
    icon: Settings2,
  },
  {
    title: 'CRM & Business Tool Automation',
    description: 'Automate busywork across business tools.',
    icon: Workflow,
  },
  {
    title: 'AI Automation for Ecommerce',
    description: 'Streamline support, inventory, and sales.',
    icon: ShoppingCart,
  },
  {
    title: 'AI Sales Automation',
    description: 'Automate outreach and follow-ups.',
    icon: Target,
  },
  {
    title: 'AI Marketing Automation',
    description: 'Run sharper campaigns with less effort.',
    icon: Megaphone,
  },
  {
    title: 'AI-Driven Data Engineering & Analytics',
    description: 'Turn data into faster decisions.',
    icon: DatabaseZap,
  },
  {
    title: 'AI Model Fine-Tuning & Training',
    description: 'Customize models for your use case.',
    icon: BrainCog,
  },
  {
    title: 'Early-Stage Startup Support',
    description: 'Validate, plan, and launch smarter.',
    icon: BadgeCheck,
  },
  {
    title: 'AI Content Generation',
    description: 'Scale content without slowing teams.',
    icon: WandSparkles,
  },
  {
    title: 'AI Advertising Solutions',
    description: 'Launch better ads across key channels.',
    icon: BarChart3,
  },
  {
    title: 'AI Product Photography',
    description: 'Create cleaner product visuals faster.',
    icon: Camera,
  },
  {
    title: 'AI Product Videos',
    description: 'Produce demos and ads with AI.',
    icon: Video,
  },
];

const aiMegaMenuColumns = [
  aiMegaMenuItems.slice(0, 5),
  aiMegaMenuItems.slice(5, 13),
  aiMegaMenuItems.slice(13, 20),
  aiMegaMenuItems.slice(20),
];

const serviceMegaMenuGroups = [
  {
    title: 'Technology',
    items: [
      { title: 'MVP Development', icon: Rocket },
      { title: 'Tech Consulting', icon: Handshake, href: '/tech-consultation' },
      { title: 'Redesign and Upgrade', icon: WandSparkles },
      { title: 'Mobile and Wearables Development', icon: Smartphone },
      { title: 'Application Modernization', icon: ServerCog },
      { title: 'E-Commerce Solutions', icon: ShoppingCart },
      { title: 'Cloud and Infrastructure', icon: CloudCog },
      { title: 'Agile Implementation', icon: Workflow },
      { title: 'Design and UX Led Websites', icon: MonitorSmartphone },
      { title: 'Blockchain Development', icon: Blocks, href: '/blockchain-development' },
      { title: 'Game Development', icon: Gamepad2, href: '/game-development' },
      { title: 'Emerging Tech Integration', icon: BrainCircuit },
      { title: 'Maintenance and Support', icon: Settings2 },
      { title: 'Dedicated Dev Teams', icon: Users },
    ],
  },
  {
    title: 'Growth',
    items: [
      { title: 'Local Digital Marketing', icon: Megaphone, href: '/digital-marketing' },
      { title: 'Social and Influencer Marketing', icon: Users, href: '/social-media-marketing' },
      { title: 'E-Commerce Advertising', icon: ShoppingCart },
      { title: 'Conversion Rate Optimization', icon: Target },
      { title: 'Google and Meta Ads for Growth', icon: BarChart3 },
      { title: 'User Retention Strategy', icon: Handshake },
      { title: 'Data and Experimentation', icon: DatabaseZap },
    ],
  },
  {
    title: 'Design',
    items: [
      { title: 'UI/UX Design', icon: MonitorSmartphone, href: '/ui-ux-design' },
      { title: 'Product Prototyping', icon: Lightbulb },
      { title: 'Brand Identity and Redesign', icon: BadgeCheck, href: '/logo-brand-identity' },
      { title: 'Packaging Design', icon: Package, href: '/packaging-design' },
      { title: '3D and Animation', icon: Video, href: '/3d-animation' },
      { title: 'Photography', icon: Camera },
      { title: 'Design Systems', icon: Paintbrush },
    ],
  },
  {
    title: 'Strategy',
    items: [
      { title: 'Digital Transformation Strategy', icon: Route },
      { title: 'Product Strategy', icon: Rocket },
      { title: 'Technical Audit', icon: BrainCog },
      { title: 'Market Research', icon: BarChart3 },
      { title: 'Marketing Strategy', icon: Megaphone, href: '/marketing-strategy' },
    ],
  },
];

const solutionMegaMenuGroups = [
  {
    title: 'On-Demand Apps',
    items: [
      { title: 'Food Delivery App', description: 'Manage ordering and delivery.', href: '/solutions', icon: Utensils },
      { title: 'School Management Software', description: 'Simplify learning operations.', href: '/solutions', icon: School },
      { title: 'E-commerce Platform', description: 'Build commerce engines that scale.', href: '/solutions', icon: ShoppingCart },
      { title: 'Healthcare Management System', description: 'Digitize patient workflows.', href: '/solutions', icon: Hospital },
      { title: 'Real Estate Portal', description: 'List, search, and convert faster.', href: '/solutions', icon: Building2 },
      { title: 'Travel Booking System', description: 'Create smoother booking flows.', href: '/solutions', icon: Plane },
      { title: 'Online Learning Platform', description: 'Deliver courses and progress.', href: '/solutions', icon: School },
      { title: 'Fitness Tracking App', description: 'Track goals and habits.', href: '/solutions', icon: Dumbbell },
      { title: 'Restaurant Reservation System', description: 'Fill tables with smarter booking.', href: '/solutions', icon: CalendarCheck },
      { title: 'Inventory Management Software', description: 'Control stock and fulfillment.', href: '/solutions', icon: Package },
    ],
  },
  {
    title: 'Business Software',
    items: [
      { title: 'CRM Software', description: 'Centralize customer data.', href: '/solutions', icon: Users },
      { title: 'HR Management System', description: 'Automate people operations.', href: '/solutions', icon: BriefcaseBusiness },
      { title: 'Project Management Tool', description: 'Track work and delivery.', href: '/solutions', icon: ClipboardList },
      { title: 'Event Management Software', description: 'Plan events with less admin.', href: '/solutions', icon: CalendarCheck },
      { title: 'Video Conferencing App', description: 'Connect teams and customers.', href: '/solutions', icon: Video },
      { title: 'Payment Gateway Integration', description: 'Accept payments securely.', href: '/solutions', icon: CreditCard },
      { title: 'Logistics Management System', description: 'Plan routes and dispatch faster.', href: '/solutions', icon: Truck },
      { title: 'Appointment Scheduling Software', description: 'Automate bookings and reminders.', href: '/solutions', icon: CalendarCheck },
      { title: 'Social Media Management Tool', description: 'Plan content and engagement.', href: '/solutions', icon: Megaphone },
      { title: 'Customer Support Software', description: 'Resolve tickets faster.', href: '/solutions', icon: MessageSquare },
    ],
  },
  {
    title: 'Operations Platforms',
    items: [
      { title: 'Financial Planning Software', description: 'Forecast budgets and performance.', href: '/solutions', icon: Banknote },
      { title: 'Document Management System', description: 'Organize files and approvals.', href: '/solutions', icon: FileText },
      { title: 'Email Marketing Tool', description: 'Send campaigns that convert.', href: '/solutions', icon: Mail },
      { title: 'Survey Management Software', description: 'Collect useful customer feedback.', href: '/solutions', icon: ClipboardList },
      { title: 'Virtual Event Platform', description: 'Host digital events at scale.', href: '/solutions', icon: Video },
      { title: 'Property Management Software', description: 'Manage properties and tenants.', href: '/solutions', icon: Building2 },
      { title: 'Fleet Management System', description: 'Track vehicles, routes, and costs.', href: '/solutions', icon: Truck },
      { title: 'Warehouse Management Software', description: 'Optimize storage and dispatch.', href: '/solutions', icon: Warehouse },
      { title: 'Online Banking System', description: 'Build secure banking workflows.', href: '/solutions', icon: Banknote },
      { title: 'Telemedicine Platform', description: 'Deliver virtual care securely.', href: '/solutions', icon: Stethoscope },
      { title: 'Task Manager', description: 'Keep teams aligned on work.', href: '/solutions', icon: ClipboardList },
      { title: 'Data Scraping Tool', description: 'Capture structured web data.', href: '/solutions', icon: DatabaseZap },
    ],
  },
];

const industryMegaMenuItems = [
  { title: 'Healthcare', href: '/solutions', icon: Hospital },
  { title: 'Ecommerce & Retail', href: '/solutions', icon: ShoppingCart },
  { title: 'Fintech & Banking', href: '/solutions', icon: Banknote },
  { title: 'Real Estate', href: '/solutions', icon: Building2 },
  { title: 'Education & EdTech', href: '/solutions', icon: School },
  { title: 'Travel & Hospitality', href: '/solutions', icon: Plane },
  { title: 'Food & Restaurants', href: '/solutions', icon: Utensils },
  { title: 'Fitness & Wellness', href: '/solutions', icon: Dumbbell },
  { title: 'Logistics & Transportation', href: '/solutions', icon: Truck },
  { title: 'Manufacturing', href: '/solutions', icon: Warehouse },
  { title: 'SaaS & Software', href: '/solutions', icon: ServerCog },
  { title: 'Automotive', href: '/solutions', icon: Settings2 },
  { title: 'Media & Entertainment', href: '/solutions', icon: Video },
  { title: 'Gaming', href: '/solutions', icon: Gamepad2 },
  { title: 'Construction', href: '/solutions', icon: Building2 },
  { title: 'Insurance', href: '/solutions', icon: BadgeCheck },
  { title: 'Legal', href: '/solutions', icon: FileText },
  { title: 'Recruitment & HR', href: '/solutions', icon: BriefcaseBusiness },
  { title: 'Beauty & Fashion', href: '/solutions', icon: Paintbrush },
  { title: 'Events', href: '/solutions', icon: CalendarCheck },
  { title: 'Telecom', href: '/solutions', icon: Smartphone },
  { title: 'Energy & Utilities', href: '/solutions', icon: Workflow },
  { title: 'Nonprofits', href: '/solutions', icon: Handshake },
  { title: 'Government', href: '/solutions', icon: ClipboardList },
];

const faviconUrl = (domain: string) => `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;

const technologyMegaMenuSections = [
  {
    title: 'Technologies',
    groups: [
      {
        title: 'Modern Web & Runtime',
        items: [
          { title: 'Next.js', domain: 'nextjs.org' },
          { title: 'React.js', domain: 'react.dev' },
          { title: 'Python', domain: 'python.org' },
          { title: 'Node.js', domain: 'nodejs.org' },
          { title: 'Django', domain: 'djangoproject.com' },
          { title: 'Azure', domain: 'azure.microsoft.com' },
          { title: 'Flutter', domain: 'flutter.dev' },
          { title: 'Expo', domain: 'expo.dev' },
          { title: 'React Native', domain: 'reactnative.dev' },
          { title: 'Android', domain: 'android.com' },
        ],
      },
      {
        title: 'Backend, Data & CMS',
        items: [
          { title: 'Supabase', domain: 'supabase.com' },
          { title: 'Firebase', domain: 'firebase.google.com' },
          { title: 'PostgreSQL', domain: 'postgresql.org' },
          { title: 'MongoDB', domain: 'mongodb.com' },
          { title: 'Shopify', domain: 'shopify.com' },
          { title: 'WordPress', domain: 'wordpress.org' },
          { title: 'WooCommerce', domain: 'woocommerce.com' },
          { title: 'Magento', domain: 'magento.com' },
          { title: 'Sanity', domain: 'sanity.io' },
          { title: 'Payload CMS', domain: 'payloadcms.com' }
        ],
      },
      {
        title: 'Cloud, AI & Vector',
        items: [
          { title: 'Vercel', domain: 'vercel.com' },
          { title: 'Cloudflare', domain: 'cloudflare.com' },
          { title: 'AWS', domain: 'aws.amazon.com' },
          { title: 'Google Cloud', domain: 'cloud.google.com' },
          { title: 'OpenAI', domain: 'openai.com' },
          { title: 'Anthropic', domain: 'anthropic.com' },
        ],
      },
    ],
  },
  {
    title: 'Tools',
    groups: [
      {
        title: 'Product & Design',
        items: [
          { title: 'Figma', domain: 'figma.com' },
          { title: 'Framer', domain: 'framer.com' },
          { title: 'Webflow', domain: 'webflow.com' },
          { title: 'Notion', domain: 'notion.so' },
          { title: 'Twilio', domain: 'twilio.com' },
          { title: 'n8n', domain: 'n8n.io' },
          { title: 'Make', domain: 'make.com' },
          { title: 'Zapier', domain: 'zapier.com' }
        ],
      },
      {
        title: 'Growth & Analytics',
        items: [
          { title: 'Google Analytics 4', domain: 'analytics.google.com' },
          { title: 'HubSpot', domain: 'hubspot.com' },
          { title: 'Meta Ads', domain: 'facebook.com' },
          { title: 'Google Ads', domain: 'ads.google.com' }
        ],
      },
      {
        title: 'AI Coding & Collaboration',
        items: [
          { title: 'Cursor', domain: 'cursor.com' },
          { title: 'Claude/Claude Code', domain: 'claude.ai' },
          { title: 'Codex', domain: 'openai.com' },
          { title: 'Lovable', domain: 'lovable.dev' },
          { title: 'Bolt', domain: 'bolt.new' },
          { title: 'v0', domain: 'v0.dev' },
          { title: 'Ollama', domain: 'ollama.com' }
        ],
      },
      {
        title: 'DevOps & Delivery',
        items: [
          { title: 'GitHub', domain: 'github.com' },
          { title: 'Docker', domain: 'docker.com' },
          { title: 'Kubernetes', domain: 'kubernetes.io' },
        ],
      },
    ],
  },
];

const [technologyMegaMenuSection, toolsMegaMenuSection] = technologyMegaMenuSections;
const technologyMegaMenuItems = technologyMegaMenuSection.groups.flatMap((group) => group.items);
const toolsMegaMenuItems = toolsMegaMenuSection.groups.flatMap((group) => group.items);

const whoWeServeItems = [
  {
    title: 'Agencies',
    description: 'Scale delivery with white-label execution.',
    href: '/contact',
    icon: Users,
  },
  {
    title: 'Enterprise',
    description: 'Build secure systems for complex teams.',
    href: '/contact',
    icon: Building2,
  },
  {
    title: 'Startups',
    description: 'Validate, launch, and iterate faster.',
    href: '/contact',
    icon: Rocket,
  },
];

const megaMenuIconTileClass = 'mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white/[0.08] ring-1 ring-white/10 transition-colors group-hover:bg-white/[0.12]';
const megaMenuIconClass = 'h-5 w-5 text-white/85 transition-colors group-hover:text-white';

const TechnologyFavicon = ({ domain, title }: { domain: string; title: string }) => (
  <span className='mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white'>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src={faviconUrl(domain)}
      alt={`${title}`}
      loading="lazy"
      className='h-5 w-5 rounded-sm'
    />
  </span>
);

const FilledDropdownChevron = ({ open }: { open: boolean }) => (
  <span aria-hidden="true" className='inline-flex h-3 w-3 shrink-0 items-center justify-center text-white/80'>
    <span className={`h-0 w-0 border-x-[4px] border-x-transparent ${open ? 'border-b-[5px] border-b-current' : 'border-t-[5px] border-t-current'}`} />
  </span>
);

const FilledSideChevron = ({ direction }: { direction: 'left' | 'right' }) => (
  <span aria-hidden="true" className='inline-flex h-4 w-4 shrink-0 items-center justify-center text-current'>
    <span className={`h-0 w-0 border-y-[5px] border-y-transparent ${direction === 'left' ? 'border-r-[6px] border-r-current' : 'border-l-[6px] border-l-current'}`} />
  </span>
);

type MobileSection = 'ai' | 'services' | 'technologies' | 'tools' | 'solutions' | 'industries' | 'we-serve';

const mobileSectionTitles: Record<MobileSection, string> = {
  ai: 'AI',
  services: 'Services',
  technologies: 'Technologies',
  tools: 'Tools',
  solutions: 'Solutions',
  industries: 'Industries',
  'we-serve': 'We Serve',
};

const NavBar = () => {

  const [aiOpen, setAiOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [technologiesOpen, setTechnologiesOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [whoWeServeOpen, setWhoWeServeOpen] = useState(false);
  const aiTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const technologiesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const toolsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const solutionsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const industriesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const whoWeServeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [isScheduleCallHovered, setIsScheduleCallHovered] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileActiveSection, setMobileActiveSection] = useState<MobileSection | null>(null);

  const navLinkClass = 'cursor-pointer opacity-60 hover:opacity-90 text-white transition-opacity';
  const megaMenuClass = 'absolute left-0 top-full mt-3 z-[60] w-full max-h-[calc(100vh-8rem)] overflow-y-auto rounded-xl border border-white/10 bg-black p-8 shadow-2xl backdrop-blur-xl';
  const mobileDrilldownButtonClass = 'flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-[16px] text-white/85 transition-colors hover:bg-white/[0.06] hover:text-white';
  const mobileMenuItemClass = 'group flex items-center gap-2.5 rounded-md px-2 py-2 text-left text-white/75 transition-colors hover:bg-white/[0.06] hover:text-white';

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setMobileActiveSection(null);
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen((currentMenuState) => !currentMenuState);
    setMobileActiveSection(null);
  };

  const renderMobileDrilldownButton = (section: MobileSection, content: React.ReactNode) => (
    <li className='w-full'>
      <button
        type="button"
        aria-label={`Open ${mobileSectionTitles[section]} menu`}
        className={mobileDrilldownButtonClass}
        onClick={() => setMobileActiveSection(section)}
      >
        <span>{content}</span>
        <span className='text-white/70'>
          <FilledSideChevron direction="right" />
        </span>
      </button>
    </li>
  );

  const openAI = () => {
    if (aiTimeoutRef.current) {
      clearTimeout(aiTimeoutRef.current);
    }
    setAiOpen(true);
    setServicesOpen(false);
    setTechnologiesOpen(false);
    setToolsOpen(false);
    setSolutionsOpen(false);
    setIndustriesOpen(false);
    setWhoWeServeOpen(false);
  };

  const closeAI = () => {
    aiTimeoutRef.current = setTimeout(() => {
      setAiOpen(false);
    }, 200);
  };

  const openServices = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
    }
    setAiOpen(false);
    setServicesOpen(true);
    setTechnologiesOpen(false);
    setToolsOpen(false);
    setSolutionsOpen(false);
    setIndustriesOpen(false);
    setWhoWeServeOpen(false);
  };

  const closeServices = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 200);
  };

  const openTechnologies = () => {
    if (technologiesTimeoutRef.current) {
      clearTimeout(technologiesTimeoutRef.current);
    }
    setAiOpen(false);
    setTechnologiesOpen(true);
    setToolsOpen(false);
    setServicesOpen(false);
    setSolutionsOpen(false);
    setIndustriesOpen(false);
    setWhoWeServeOpen(false);
  };

  const closeTechnologies = () => {
    technologiesTimeoutRef.current = setTimeout(() => {
      setTechnologiesOpen(false);
    }, 200);
  };

  const openTools = () => {
    if (toolsTimeoutRef.current) {
      clearTimeout(toolsTimeoutRef.current);
    }
    setAiOpen(false);
    setToolsOpen(true);
    setTechnologiesOpen(false);
    setServicesOpen(false);
    setSolutionsOpen(false);
    setIndustriesOpen(false);
    setWhoWeServeOpen(false);
  };

  const closeTools = () => {
    toolsTimeoutRef.current = setTimeout(() => {
      setToolsOpen(false);
    }, 200);
  };

  const openSolutions = () => {
    if (solutionsTimeoutRef.current) {
      clearTimeout(solutionsTimeoutRef.current);
    }
    setAiOpen(false);
    setSolutionsOpen(true);
    setServicesOpen(false);
    setTechnologiesOpen(false);
    setToolsOpen(false);
    setIndustriesOpen(false);
    setWhoWeServeOpen(false);
  };

  const closeSolutions = () => {
    solutionsTimeoutRef.current = setTimeout(() => {
      setSolutionsOpen(false);
    }, 200);
  };

  const openIndustries = () => {
    if (industriesTimeoutRef.current) {
      clearTimeout(industriesTimeoutRef.current);
    }
    setAiOpen(false);
    setIndustriesOpen(true);
    setServicesOpen(false);
    setTechnologiesOpen(false);
    setToolsOpen(false);
    setSolutionsOpen(false);
    setWhoWeServeOpen(false);
  };

  const closeIndustries = () => {
    industriesTimeoutRef.current = setTimeout(() => {
      setIndustriesOpen(false);
    }, 200);
  };

  const openWhoWeServe = () => {
    if (whoWeServeTimeoutRef.current) {
      clearTimeout(whoWeServeTimeoutRef.current);
    }
    setWhoWeServeOpen(true);
    setAiOpen(false);
    setServicesOpen(false);
    setTechnologiesOpen(false);
    setToolsOpen(false);
    setSolutionsOpen(false);
    setIndustriesOpen(false);
  };

  const closeWhoWeServe = () => {
    whoWeServeTimeoutRef.current = setTimeout(() => {
      setWhoWeServeOpen(false);
    }, 200);
  };

  const cancelClose = (dropdown: string) => {
    if (dropdown === 'ai' && aiTimeoutRef.current) {
      clearTimeout(aiTimeoutRef.current);
    } else if (dropdown === 'services' && servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
    } else if (dropdown === 'technologies' && technologiesTimeoutRef.current) {
      clearTimeout(technologiesTimeoutRef.current);
    } else if (dropdown === 'tools' && toolsTimeoutRef.current) {
      clearTimeout(toolsTimeoutRef.current);
    } else if (dropdown === 'solutions' && solutionsTimeoutRef.current) {
      clearTimeout(solutionsTimeoutRef.current);
    } else if (dropdown === 'industries' && industriesTimeoutRef.current) {
      clearTimeout(industriesTimeoutRef.current);
    } else if (dropdown === 'who-we-serve' && whoWeServeTimeoutRef.current) {
      clearTimeout(whoWeServeTimeoutRef.current);
    }
  };

  return (
    <nav className='xl:w-[98vw] sm:w-[96vw] p-3 md:px-6 sm:px-4 bg-gradient-to-r from-black/60 backdrop-blur-2xl to-black/90 back fixed flex justify-between items-center rounded-xl mt-4 z-50 text-white'>
      {/* navbar left section */}
      <section className='flex items-center gap-2'>
        <Link href="/">
          <Image src="/zero-one-logo.svg" width={50} height={50} alt="zero-one-logo" unoptimized className='w-16 h-16' />
        </Link>
      </section>

      {/* navbar right section */}
      <section className='flex sm:gap-0 xl:gap-8 items-center'>
        {/* links */}
        <ul className='flex items-center gap-5 sm:hidden xl:flex text-[16px]'>
          <li
            onMouseEnter={openAI}
            onMouseLeave={closeAI}
          >
            <button
              type="button"
              aria-expanded={aiOpen}
              className={`${navLinkClass} flex items-center gap-1.5`}
            >
              <Sparkles className='w-4 h-4 text-white' />
              AI
              <FilledDropdownChevron open={aiOpen} />
            </button>
          </li>

          <li
            onMouseEnter={openServices}
            onMouseLeave={closeServices}
          >
            <Link href="/all-services" className={`${navLinkClass} flex items-center gap-1.5`}>
              Services
              <FilledDropdownChevron open={servicesOpen} />
            </Link>
          </li>

          <li
            onMouseEnter={openTechnologies}
            onMouseLeave={closeTechnologies}
          >
            <button
              type="button"
              aria-expanded={technologiesOpen}
              className={`${navLinkClass} flex items-center gap-1.5`}
            >
              Technologies
              <FilledDropdownChevron open={technologiesOpen} />
            </button>
          </li>

          <li
            onMouseEnter={openTools}
            onMouseLeave={closeTools}
          >
            <button
              type="button"
              aria-expanded={toolsOpen}
              className={`${navLinkClass} flex items-center gap-1.5`}
            >
              Tools
              <FilledDropdownChevron open={toolsOpen} />
            </button>
          </li>

          <li
            onMouseEnter={openSolutions}
            onMouseLeave={closeSolutions}
          >
            <Link href="/solutions" className={`${navLinkClass} flex items-center gap-1.5`}>
              Solutions
              <FilledDropdownChevron open={solutionsOpen} />
            </Link>
          </li>

          <li
            onMouseEnter={openIndustries}
            onMouseLeave={closeIndustries}
          >
            <button type="button" className={`${navLinkClass} flex items-center gap-1.5`}>
              Industries
              <FilledDropdownChevron open={industriesOpen} />
            </button>
          </li>

          <li
            onMouseEnter={openWhoWeServe}
            onMouseLeave={closeWhoWeServe}
            className='relative'
          >
            <button type="button" className={`${navLinkClass} flex items-center gap-1.5`}>
              We Serve
              <FilledDropdownChevron open={whoWeServeOpen} />
            </button>
            {whoWeServeOpen && (
              <div
                onMouseEnter={() => cancelClose('who-we-serve')}
                onMouseLeave={closeWhoWeServe}
                className="absolute left-1/2 top-[calc(100%+2.75rem)] z-[60] w-[320px] -translate-x-1/2 rounded-xl bg-black p-4 shadow-2xl before:absolute before:-top-11 before:left-0 before:h-11 before:w-full before:content-['']"
              >
                <ul className='flex flex-col gap-1.5 text-[15px]'>
                  {whoWeServeItems.map(({ title, description, href, icon: Icon }) => (
                    <li key={title}>
                      <Link
                        href={href}
                        className='group flex gap-2.5 rounded-md px-2 py-2 text-white/75 transition-colors hover:bg-white/[0.06] hover:text-white'
                      >
                        <span className={megaMenuIconTileClass}>
                          <Icon className={megaMenuIconClass} />
                        </span>
                        <span className='min-w-0'>
                          <span className='block text-[14px] font-medium leading-tight text-white/80 transition-colors group-hover:text-white'>{title}</span>
                          <span className='mt-0.5 block text-[12px] leading-snug text-white/45 transition-colors group-hover:text-white/65'>{description}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>

          {/* <li className='cursor-pointer opacity-60 hover:opacity-90 text-white'>
            Resources
          </li> */}

          <li>
            <Link href="/portfolio" className={navLinkClass}>Portfolio</Link>
          </li>

          <li>
            <Link href="/about" className={navLinkClass}>About Us</Link>
          </li>

          {/* <Link href="/contact">
            <li className='cursor-pointer opacity-60 hover:opacity-90 text-white'>Contact us</li>
          </Link> */}
        </ul>

        {/* AI mega menu */}
        {aiOpen && (
          <div
            onMouseEnter={() => cancelClose('ai')}
            onMouseLeave={closeAI}
            className={`${megaMenuClass} grid grid-cols-[repeat(4,minmax(0,1fr))_340px] gap-7 max-[1440px]:grid-cols-4 max-[1440px]:gap-y-5 2xl:grid-cols-[repeat(4,minmax(0,1fr))_460px]`}
          >
            <div className='col-span-4 flex flex-col gap-5'>
              <div className='grid grid-cols-4 gap-7'>
                {aiMegaMenuColumns.map((column, index) => (
                  <ul key={`ai-column-${index}`} className={`flex flex-col text-[15px] ${index >= 1 ? 'gap-1' : 'gap-2'}`}>
                    {column.map(({ title, description, icon: Icon }) => (
                      <li key={title}>
                        <div
                          className={`group flex gap-2.5 rounded-md px-2 py-1.5 text-white/75 transition-colors hover:bg-white/[0.06] hover:text-white ${index >= 1 ? 'items-center' : ''}`}
                        >
                          <span className={megaMenuIconTileClass}>
                            <Icon className={megaMenuIconClass} />
                          </span>
                          <span className='min-w-0'>
                            <span className='block text-[14px] font-medium leading-tight text-white/80 transition-colors group-hover:text-white'>{title}</span>
                            {index === 0 && (
                              <span className='mt-0.5 block text-[12px] leading-snug text-white/45 transition-colors group-hover:text-white/65'>{description}</span>
                            )}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>

            <aside className='relative min-h-[430px] overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] max-[1440px]:col-span-4 max-[1440px]:min-h-[170px] 2xl:min-h-[520px]'>
              <Image
                src="/hire-team.jpg"
                fill
                sizes="(min-width: 1536px) 460px, (max-width: 1440px) 100vw, 340px"
                alt="Team collaborating"
                className='object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/10 max-[1440px]:bg-gradient-to-r max-[1440px]:from-black max-[1440px]:via-black/75 max-[1440px]:to-black/20' />
              <div className='relative z-10 flex h-full min-h-[430px] flex-col justify-end gap-4 p-5 max-[1440px]:min-h-[170px] max-[1440px]:flex-row max-[1440px]:items-end max-[1440px]:justify-end max-[1440px]:gap-5 2xl:min-h-[520px] 2xl:p-6'>
                <div className='flex flex-col gap-2 max-[1440px]:flex-row max-[1440px]:items-center'>
                  <Link
                    href="/contact"
                    className='whitespace-nowrap rounded-md bg-[#141DEA] px-4 py-3 text-center text-[13px] font-medium uppercase text-white shadow-[0_14px_30px_rgba(20,29,234,0.28)] transition-colors hover:bg-[#1118c5]'
                  >
                    Hire AI Developers
                  </Link>
                  <Link
                    href="/contact"
                    className='whitespace-nowrap rounded-md border border-white/45 bg-black/25 px-4 py-3 text-center text-[13px] font-medium uppercase text-white transition-colors hover:border-white hover:bg-white/10'
                  >
                    Dedicated Development Team
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        )}

        {/* services dropdown */}
        {
          servicesOpen && (
            <div
              onMouseEnter={() => cancelClose('services')}
              onMouseLeave={closeServices}
              className={`${megaMenuClass} flex flex-col gap-5`}
            >
              <div className='grid grid-cols-4 gap-7'>
                {serviceMegaMenuGroups.map((group) => (
                  <div key={group.title}>
                    <ul className='flex flex-col gap-1 text-[15px]'>
                      {group.items.map(({ title, href, icon: Icon }) => (
                        <li key={title}>
                          {href ? (
                            <Link
                              href={href}
                              className='group flex items-center gap-2.5 rounded-md px-2 py-1 text-white/75 transition-colors hover:bg-white/[0.06] hover:text-white'
                            >
                              <span className={megaMenuIconTileClass}>
                                <Icon className={megaMenuIconClass} />
                              </span>
                              <span className='min-w-0'>
                                <span className='block text-[14px] font-medium leading-tight text-white/80 transition-colors group-hover:text-white'>{title}</span>
                              </span>
                            </Link>
                          ) : (
                            <div className='group flex items-center gap-2.5 rounded-md px-2 py-1 text-white/75 transition-colors hover:bg-white/[0.06] hover:text-white'>
                              <span className={megaMenuIconTileClass}>
                                <Icon className={megaMenuIconClass} />
                              </span>
                              <span className='min-w-0'>
                                <span className='block text-[14px] font-medium leading-tight text-white/80 transition-colors group-hover:text-white'>{title}</span>
                              </span>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )
        }

        {/* technologies dropdown */}
        {
          technologiesOpen && (
            <div
              onMouseEnter={() => cancelClose('technologies')}
              onMouseLeave={closeTechnologies}
              className={`${megaMenuClass} flex flex-col gap-5`}
            >
              <ul className='grid grid-cols-4 gap-x-7 gap-y-1.5 text-[15px] 2xl:grid-cols-5'>
                {technologyMegaMenuItems.map(({ title, domain }) => (
                  <li key={title}>
                    <div className='group flex items-center gap-2 rounded-md px-2 py-1 text-white/75 transition-colors hover:bg-white/[0.06] hover:text-white'>
                      <TechnologyFavicon domain={domain} title={title} />
                      <span className='min-w-0 truncate text-[13px] font-medium leading-tight text-white/80 transition-colors group-hover:text-white'>{title}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )
        }

        {/* tools dropdown */}
        {
          toolsOpen && (
            <div
              onMouseEnter={() => cancelClose('tools')}
              onMouseLeave={closeTools}
              className={`${megaMenuClass} flex flex-col gap-5`}
            >
              <ul className='grid grid-cols-4 gap-x-7 gap-y-1.5 text-[15px] 2xl:grid-cols-5'>
                {toolsMegaMenuItems.map(({ title, domain }) => (
                  <li key={title}>
                    <div className='group flex items-center gap-2 rounded-md px-2 py-1 text-white/75 transition-colors hover:bg-white/[0.06] hover:text-white'>
                      <TechnologyFavicon domain={domain} title={title} />
                      <span className='min-w-0 truncate text-[13px] font-medium leading-tight text-white/80 transition-colors group-hover:text-white'>{title}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )
        }

        {/* solutions dropdown */}
        {solutionsOpen && (
          <div
            onMouseEnter={() => cancelClose('solutions')}
            onMouseLeave={closeSolutions}
            className={`${megaMenuClass} flex flex-col gap-5`}
          >
            <div className='grid grid-cols-4 gap-7'>
              {solutionMegaMenuGroups.map((group) => (
                <div key={group.title}>
                  <ul className='flex flex-col gap-1 text-[15px]'>
                    {group.items.map(({ title, href, icon: Icon }) => (
                      <li key={title}>
                        <Link
                          href={href}
                          className='group flex items-center gap-2.5 rounded-md px-2 py-1 text-white/75 transition-colors hover:bg-white/[0.06] hover:text-white'
                        >
                          <span className={megaMenuIconTileClass}>
                            <Icon className={megaMenuIconClass} />
                          </span>
                          <span className='min-w-0'>
                            <span className='block text-[14px] font-medium leading-tight text-white/80 transition-colors group-hover:text-white'>{title}</span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className='h-full'>
                <div className='h-full overflow-hidden rounded-lg bg-white/[0.04]'>
                  <Image
                    src="/footer-bot.png"
                    width={640}
                    height={420}
                    alt="Bot footer"
                    className='h-full w-full object-cover'
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* industries dropdown */}
        {industriesOpen && (
          <div
            onMouseEnter={() => cancelClose('industries')}
            onMouseLeave={closeIndustries}
            className={`${megaMenuClass} flex flex-col gap-5`}
          >
            <ul className='grid grid-cols-4 gap-x-7 gap-y-1 text-[15px] 2xl:grid-cols-5'>
              {industryMegaMenuItems.map(({ title, icon: Icon }) => (
                <li key={title}>
                  <div
                    className='group flex items-center gap-2.5 rounded-md px-2 py-1 text-white/75 transition-colors hover:bg-white/[0.06] hover:text-white'
                  >
                    <span className={megaMenuIconTileClass}>
                      <Icon className={megaMenuIconClass} />
                    </span>
                    <span className='min-w-0'>
                      <span className='block text-[14px] font-medium leading-tight text-white/80 transition-colors group-hover:text-white'>{title}</span>
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className='md:block xl:hidden' onClick={toggleMobileMenu}>
          {isMenuOpen ? <X className='w-10 h-10' /> : <Menu className='w-10 h-10' />}
        </div>

        {
          isMenuOpen &&
          <div className='absolute left-0 top-28 max-h-[calc(100vh-8rem)] w-full overflow-y-auto rounded-lg bg-black p-4 backdrop-blur-xl'>
            {mobileActiveSection ? (
              <div className='flex flex-col gap-3 pt-2'>
                <button
                  type="button"
                  className='flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-[15px] text-white/75 transition-colors hover:bg-white/[0.06] hover:text-white'
                  onClick={() => setMobileActiveSection(null)}
                >
                  <FilledSideChevron direction="left" />
                  <span className='font-medium text-white/85'>{mobileSectionTitles[mobileActiveSection]}</span>
                </button>

                {mobileActiveSection === 'ai' && (
                  <ul className='flex flex-col gap-1'>
                    {aiMegaMenuItems.map(({ title, icon: Icon }) => (
                      <li key={title}>
                        <div className={mobileMenuItemClass}>
                          <span className={megaMenuIconTileClass}>
                            <Icon className={megaMenuIconClass} />
                          </span>
                          <span className='min-w-0 text-[14px] font-medium leading-tight text-white/80 transition-colors group-hover:text-white'>{title}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}

                {mobileActiveSection === 'services' && (
                  <ul className='flex flex-col gap-1'>
                    {serviceMegaMenuGroups.flatMap((group) => group.items).map(({ title, href, icon: Icon }) => (
                      <li key={title}>
                        {href ? (
                          <Link href={href} onClick={closeMobileMenu} className={mobileMenuItemClass}>
                            <span className={megaMenuIconTileClass}>
                              <Icon className={megaMenuIconClass} />
                            </span>
                            <span className='min-w-0 text-[14px] font-medium leading-tight text-white/80 transition-colors group-hover:text-white'>{title}</span>
                          </Link>
                        ) : (
                          <div className={mobileMenuItemClass}>
                            <span className={megaMenuIconTileClass}>
                              <Icon className={megaMenuIconClass} />
                            </span>
                            <span className='min-w-0 text-[14px] font-medium leading-tight text-white/80 transition-colors group-hover:text-white'>{title}</span>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                )}

                {mobileActiveSection === 'technologies' && (
                  <ul className='grid grid-cols-1 gap-1'>
                    {technologyMegaMenuItems.map(({ title, domain }) => (
                      <li key={title}>
                        <div className={mobileMenuItemClass}>
                          <TechnologyFavicon domain={domain} title={title} />
                          <span className='min-w-0 text-[14px] font-medium leading-tight text-white/80 transition-colors group-hover:text-white'>{title}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}

                {mobileActiveSection === 'tools' && (
                  <ul className='grid grid-cols-1 gap-1'>
                    {toolsMegaMenuItems.map(({ title, domain }) => (
                      <li key={title}>
                        <div className={mobileMenuItemClass}>
                          <TechnologyFavicon domain={domain} title={title} />
                          <span className='min-w-0 text-[14px] font-medium leading-tight text-white/80 transition-colors group-hover:text-white'>{title}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}

                {mobileActiveSection === 'solutions' && (
                  <ul className='flex flex-col gap-1'>
                    {solutionMegaMenuGroups.flatMap((group) => group.items).map(({ title, href, icon: Icon }) => (
                      <li key={title}>
                        <Link href={href} onClick={closeMobileMenu} className={mobileMenuItemClass}>
                          <span className={megaMenuIconTileClass}>
                            <Icon className={megaMenuIconClass} />
                          </span>
                          <span className='min-w-0 text-[14px] font-medium leading-tight text-white/80 transition-colors group-hover:text-white'>{title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}

                {mobileActiveSection === 'industries' && (
                  <ul className='flex flex-col gap-1'>
                    {industryMegaMenuItems.map(({ title, icon: Icon }) => (
                      <li key={title}>
                        <div className={mobileMenuItemClass}>
                          <span className={megaMenuIconTileClass}>
                            <Icon className={megaMenuIconClass} />
                          </span>
                          <span className='min-w-0 text-[14px] font-medium leading-tight text-white/80 transition-colors group-hover:text-white'>{title}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}

                {mobileActiveSection === 'we-serve' && (
                  <ul className='flex flex-col gap-1'>
                    {whoWeServeItems.map(({ title, description, href, icon: Icon }) => (
                      <li key={title}>
                        <Link href={href} onClick={closeMobileMenu} className={mobileMenuItemClass}>
                          <span className={megaMenuIconTileClass}>
                            <Icon className={megaMenuIconClass} />
                          </span>
                          <span className='min-w-0'>
                            <span className='block text-[14px] font-medium leading-tight text-white/80 transition-colors group-hover:text-white'>{title}</span>
                            <span className='mt-0.5 block text-[12px] leading-snug text-white/45 transition-colors group-hover:text-white/65'>{description}</span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <ul className='flex flex-col items-stretch gap-1 pt-2'>
                {renderMobileDrilldownButton(
                  'ai',
                  <span className='flex items-center gap-1.5'>
                    <Sparkles className='h-4 w-4 text-white' />
                    AI
                  </span>
                )}

                {renderMobileDrilldownButton('services', 'Services')}
                {renderMobileDrilldownButton('technologies', 'Technologies')}
                {renderMobileDrilldownButton('tools', 'Tools')}
                {renderMobileDrilldownButton('solutions', 'Solutions')}
                {renderMobileDrilldownButton('industries', 'Industries')}
                {renderMobileDrilldownButton('we-serve', 'We Serve')}

                {/* <li>
                  <Link href="/news" onClick={closeMobileMenu} className='block rounded-md px-3 py-3 text-[16px] text-white/85 transition-colors hover:bg-white/[0.06] hover:text-white'>Resources</Link>
                </li> */}

                <li>
                  <Link href="/portfolio" onClick={closeMobileMenu} className='block rounded-md px-3 py-3 text-[16px] text-white/85 transition-colors hover:bg-white/[0.06] hover:text-white'>Portfolio</Link>
                </li>

                {/* <li>
                  <Link href="/contact" onClick={closeMobileMenu} className='block rounded-md px-3 py-3 text-[16px] text-white/85 transition-colors hover:bg-white/[0.06] hover:text-white'>Contact us</Link>
                </li> */}

                <li>
                  <Link href="/about" onClick={closeMobileMenu} className='block rounded-md px-3 py-3 text-[16px] text-white/85 transition-colors hover:bg-white/[0.06] hover:text-white'>About Us</Link>
                </li>

                <li className='flex w-full flex-col gap-1.5 pt-4'>
                  <Link href="/contact" onClick={closeMobileMenu} className='relative overflow-hidden rounded-lg border border-white bg-gradient-to-r from-black/20 to-black/30 backdrop-blur-md text-white flex gap-2 items-center justify-center text-[14px] p-5 uppercase group xl:hidden sm:flex'>
                    <Headset className='w-5 h-5 z-10' />
                    <span className='z-10'>Talk to us</span>

                    {/* Left to right fill animation */}
                    <div className="absolute inset-0 bg-[#141DEA] rounded-md origin-left scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100 z-0"></div>
                  </Link>

                  <Link
                    href="/contact"
                    onClick={closeMobileMenu}
                    className='relative overflow-hidden rounded-lg border border-white bg-gradient-to-r from-black/20 to-black/30 backdrop-blur-md text-white flex gap-2 items-center justify-center text-[14px] p-5 uppercase group xl:hidden sm:flex'
                  >
                    <Calendar className='w-5 h-5 z-10' />
                    <span className='z-10'>Schedule a Call</span>
                    {/* Left to right fill animation */}
                    <div className="absolute inset-0 bg-[#141DEA] rounded-md origin-left scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100 z-0"></div>
                  </Link>
                </li>
              </ul>
            )}
          </div>
        }

        <div className='flex gap-1.5'>
          <Link href="/contact" className='relative overflow-hidden rounded-lg border border-white bg-gradient-to-r from-black/20 to-black/30 backdrop-blur-md text-white flex gap-2 items-center justify-center text-[14px] p-5 uppercase group sm:hidden xl:flex'>
            <Headset className='w-5 h-5 z-10' />
            <span className='z-10'>Talk to us</span>

            {/* Left to right fill animation */}
            <div className="absolute inset-0 bg-[#141DEA] rounded-md origin-left scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100 z-0"></div>
          </Link>

          <Link
            onMouseEnter={() => setIsScheduleCallHovered(true)}
            onMouseLeave={() => setIsScheduleCallHovered(false)}
            href="/contact"
            className='relative overflow-hidden rounded-lg border border-white bg-gradient-to-r from-black/20 to-black/30 backdrop-blur-md text-white flex gap-2 items-center justify-center text-[14px] p-5 uppercase group sm:hidden xl:flex'
          >
            <Calendar className='w-5 h-5 z-10' />

            {
              isScheduleCallHovered &&
              <span className='z-10'>Schedule a Call</span>
            }

            {/* Left to right fill animation */}
            <div className="absolute inset-0 bg-[#141DEA] rounded-md origin-left scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100 z-0"></div>
          </Link>
        </div>


      </section>
    </nav>
  )
}

export default NavBar
