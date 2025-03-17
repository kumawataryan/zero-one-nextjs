import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

const PortfolioDetailPage = () => {

  const projectData = {
    serviceHero: {
      servicesOffered: [
        { name: "Website Development", link: "/" },
        { name: "UI/UX Design", link: "/" },
        { name: "Content Strategy", link: "/" },
        { name: "Government Portal Optimization", link: "/" },
      ],
      date: "Ongoing",
      clientName: "Jaipur Development Authority (JDA)",
      shortInfo:
        "01 Agency partnered with Jaipur Development Authority (JDA) to design and develop a user-friendly and responsive website, enabling citizens to access important urban planning, infrastructure, and public service information in an efficient, organized, and transparent manner.",
    },
    task: {
      title: "Task",
      description:
        "01 Agency revamped JDA's website to improve access to public services, optimize the user experience, and ensure a transparent, easy-to-navigate platform for Jaipur’s residents, featuring urban development projects, service portals, and real-time updates.",
    },
    serviceDetails: [
      {
        title: "Website Development",
        description:
          "Developed a fully responsive, government-compliant website that allows citizens to access urban planning documents, apply for services, and stay updated on city infrastructure developments.",
      },
      {
        title: "UI/UX Design",
        description:
          "Created an intuitive design with easy navigation, ensuring citizens can quickly find the information they need, whether it's about urban projects, government services, or news about local developments.",
      },
      {
        title: "Content Strategy",
        description:
          "Curated a content strategy that focuses on making the website informative, easily accessible, and inclusive. This includes providing clear, concise information on government services and ongoing urban projects.",
      },
      {
        title: "Government Portal Optimization",
        description:
          "Optimized the online service portal for a seamless experience for residents to access e-services, pay taxes, view permits, and get real-time updates about government schemes and policies.",
      },
    ],
    galleryImages: [
      "/Portfolio/portfolio-jda.jpg",
    ],
    cta: {
      tagline: "Build a Smarter, More Accessible City with Technology",
      projectPrompt: "Want to streamline your government services online?",
      link: "/contact",
      description:
        "Partner with 01 Agency to create modern, user-friendly government portals. Improve access to essential services, optimize urban development communication, and engage citizens effectively through innovative web solutions.",
    },
  };  

  return (
    <div className="flex flex-col items-center justify-center w-full sm:px-4 xl:px-0">
      <div className="max-w-[1200px] w-full">

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

            <h1 className="xl:text-[60px] md:text-[40px] sm:text-[30px] font-bold leading-none mt-2 text-[15px]">
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

            <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 mt-16">
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
              width={800}
              height={800}
              className="h-full object-cover w-full"
              alt="/Portfolio/p-1.png"
              unoptimized
            />
          ))}
        </div>
      </div>

      {/* Static CTA */}
      <div className="w-full xl:pt-32 sm:pt-20 sm:px-4 xl:px-0 items-center justify-center mt-20 bg-[#DBE2EA] flex flex-col gap-0">
        <div className="max-w-[1200px] w-full text-[#062330]">
          <p className="uppercase">{projectData.cta.tagline}</p>
          <div className="flex sm:flex-col xl:flex-row sm:gap-4 xl:gap-0 justify-between border-b pb-4 border-[#062330] mt-4">
            <h2 className="sm:text-[32px] xl:text-[42px] font-semibold leading-tight">
              {projectData.cta.projectPrompt}
            </h2>
            <Link href={projectData.cta.link} className='relative rounded-lg bg-gradient-to-r bg-[#062330] text-white flex gap-2 items-center justify-center text-[14px] p-5 uppercase group w-fit'>
              <span className='z-10'>{projectData.cta.projectPrompt}</span>
              <div className="absolute inset-0 bg-[#141DEA] rounded-lg origin-left scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100 z-0"></div>
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
