import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

const PortfolioDetailPage = () => {

  const projectData = {
    serviceHero: {
      servicesOffered: [
        { name: "E-commerce Website Development", link: "/" },
        { name: "UX/UI Design", link: "/" },
        { name: "Product Visualization", link: "/" },
        { name: "Brand Strategy", link: "/" },
      ],
      date: "Ongoing",
      clientName: "PC Jewellers",
      shortInfo:
        "01 Agency partnered with PC Jewellers to enhance their online presence with a custom-designed e-commerce website. The project focused on improving user experience, product visualization, and integrating a smooth, secure online shopping journey for customers across India.",
    },
    task: {
      title: "Task",
      description:
        "01 Agency developed a modern, user-friendly e-commerce website for PC Jewellers, incorporating advanced product visualization, a seamless shopping experience, and enhanced brand representation online.",
    },
    serviceDetails: [
      {
        title: "E-commerce Website Development",
        description:
          "Developed a fully responsive e-commerce platform with secure payment gateways and a user-friendly interface for an optimized shopping experience across desktop and mobile devices.",
      },
      {
        title: "UX/UI Design",
        description:
          "Created a sleek and intuitive design, ensuring easy navigation, fast loading times, and a seamless browsing experience for customers looking to explore a wide variety of jewellery collections.",
      },
      {
        title: "Product Visualization",
        description:
          "Integrated high-quality 3D product visualizations to allow customers to see jewellery pieces from all angles, enhancing their online shopping experience and increasing conversions.",
      }
    ],
    galleryImages: [
      "/Portfolio/portfolio-pcj.jpg",
    ],
    cta: {
      tagline: "Transform Your Online Jewelry Store",
      projectPrompt: "Ready to upgrade your e-commerce experience?",
      link: "/contact",
      description:
        "Partner with 01 Agency to create an engaging and secure online shopping platform for your jewellery business. Enhance user experience, boost sales, and showcase your products with precision.",
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
              className="object-cover w-full aspect-3/2"
              alt="Portfolio Image"
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
