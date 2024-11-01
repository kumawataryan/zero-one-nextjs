import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";



const PortfolioDetailPage = () => {

  const projectData = {
    serviceHero: {
      servicesOffered: [
        { name: "SEO", link: "/" },
        { name: "UI-UX Design", link: "/" },
      ],
      date: "June 3, 2023",
      clientName: "Hyundai",
      shortInfo:
        "The Hyundai app, developed by Zero-One Agency, is a cutting-edge mobile solution designed to elevate the Hyundai customer experience. The app provides seamless access to Hyundai's latest vehicle information, service bookings, and maintenance reminders, along with a range of innovative features tailored to enhance user engagement.",
    },
    task: {
      title: "Task",
      description:
        "Zero-One Agency developed a user-centric mobile app for Hyundai, focusing on real-time navigation, remote vehicle monitoring, and streamlined service management.",
    },
    serviceDetails: [
      {
        title: "Strategy",
        description: "Brand Strategy, UX Strategy",
      },
      {
        title: "Design",
        description: "UI/UX Design, Art Direction",
      },
      {
        title: "Client",
        description: "Hyundai",
      },
    ],
    galleryImages: [
      "/portfolio/hundai-1.png",
      "/portfolio/hundai-1.png",
      "/portfolio/hundai-1.png",
      "/portfolio/hundai-1.png",
    ],
    cta: {
      tagline: "Let's Collaborate",
      projectPrompt: "Got a project?",
      link: "/contact",
      description:
        "We are passionate creatives who are excited about unique ideas and help fin-tech companies to create amazing identities by crafting top-notch UI/UX design.",
    },
  };


  return (
    <div className="flex flex-col items-center justify-center w-full sm:px-4 xl:px-0">
      <div className="max-w-[1600px] w-full">

        {/* Service Hero */}
        <div className="flex flex-col xl:flex-row xl:gap-24 sm:gap-16 xl:pt-64 sm:pt-40 justify-between w-full">

          {/* Service Hero Left */}
          <div>
            <div className="flex gap-1">
                  {projectData.serviceHero.servicesOffered.map((service, index) => (
                  <span key={index}>
                    <Link className="hover:underline" href={service.link}>
                    {service.name}
                    </Link>
                    {index < projectData.serviceHero.servicesOffered.length - 1 && ', '}
                  </span>
                  ))}
              <span className="font-black text-[#141DEA] px-0.5">.</span>
              <p>{projectData.serviceHero.date}</p>
            </div>

            <h1 className="xl:text-[80px] md:text-[60px] sm:text-[40px] font-bold leading-none mt-2 text-[15px]">
              {projectData.serviceHero.clientName}
            </h1>

            <p className="sm:w-full xl:max-w-[750px] mt-5 font-light leading-relaxed opacity-75">
              {projectData.serviceHero.shortInfo}
            </p>
          </div>

          {/* Service Hero Right */}
          <div>
            <p className="font-semibold">{projectData.task.title}</p>
            <p className="sm:w-full xl:max-w-[750px] mt-2 font-semibold">
              {projectData.task.description}
            </p>

            <div className="flex gap-10 mt-5">
              {projectData.serviceDetails.map((detail, index) => (
                <div key={index} className="py-4 border-t border-[#737373]">
                  <p className="font-medium">{detail.title}</p>
                  <p className="font-normal text-black/85 leading-6 mt-1.5 text-[15px]">
                    {detail.description}
                  </p>
                </div>
              ))}
            </div>

            <Link href="/" className="font-bold text-[15px] flex gap-2 items-center mt-4 hover:bg-[#F2F2F2] p-2 w-fit rounded-md leading-[16px] hover:text-[#141DEA] group transition-all duration-500 ease-in-out">
              Open Project <ArrowRight className="w-5 h-5 transition-transform duration-200 ease-in-out group-hover:translate-x-1 -translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Gallery */}
        <div className="xl:mt-16 sm:mt-8 w-full flex flex-col gap-1">
          {projectData.galleryImages.map((src, index) => (
            <Image
              key={index}
              src={src}
              width={500}
              height={500}
              className="aspect-3/2 object-cover w-full"
              alt={`hyundai-portfolio-${index + 1}`}
              unoptimized
            />
          ))}
        </div>
      </div>

      {/* Static CTA */}
      <div className="w-full xl:pt-32 sm:pt-20 sm:px-4 xl:px-0 items-center justify-center mt-20 bg-[#161616] flex flex-col gap-0">
        <div className="max-w-[1600px] w-full text-white">
          <p className="uppercase">{projectData.cta.tagline}</p>
          <div className="flex sm:flex-col xl:flex-row sm:gap-4 xl:gap-0 justify-between border-b pb-4 border-white mt-4">
            <h2 className="sm:text-[32px] xl:text-[42px] font-semibold leading-tight">
              {projectData.cta.projectPrompt}
            </h2>
            <Link href={projectData.cta.link} className='relative rounded-lg bg-gradient-to-r from-black/20 to-black/30 backdrop-blur-md text-white flex gap-2 items-center justify-center text-[14px] p-5 uppercase group w-fit'>
              <span className='z-10'>{projectData.cta.projectPrompt}</span>
              <div className="absolute inset-0 bg-[#141DEA] rounded-md origin-left scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100 z-0"></div>
            </Link>
          </div>
          <p className="sm:w-full xl:max-w-[600px] mt-5 font-light leading-relaxed opacity-75">
            {projectData.cta.description}
          </p>
        </div>
        <ContactForm className="max-w-[1600px] w-full px-0 py-0" heading={false} />
      </div>
    </div>
  );
};

export default PortfolioDetailPage;
