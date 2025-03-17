"use client"

import React from 'react';
import PortfolioSection from '@/components/PortfolioSection';

const projects = [
    {
      name: "Hyundai App",
      link: "/portfolio/hyundai",
      image: "/Portfolio/portfolio-hyundai.jpg",
      tags: ['Design', 'App Development']
    },
    {
      name: "Fortis Blog",
      link: "/portfolio/fortis",
      image: "/Portfolio/portfolio-fortis.jpg",
      tags: ['Design', 'SEO', 'UI/UX Design', 'Website']
    },
    {
      name: "Ashok Leyland App",
      link: "/portfolio/ashok-leyland",
      image: "/Portfolio/portfolio-ashok-leyland.jpg",
      tags: ['Design', 'Ongoing', 'App Development']
    },
    {
      name: "JDA (Jaipur Development Authority)",
      link: "/portfolio/jda",
      image: "/Portfolio/portfolio-jda.jpg",
      tags: ['Design', 'App Development']
    },
    {
      name: "PC Jewellers",
      link: "/portfolio/pc-jewellers",
      image: "/Portfolio/portfolio-pcj.jpg",
      tags: ['Design', 'SEO', 'UI/UX Design', 'Website']
    },
    {
      name: "Surana Jewellers",
      link: "/portfolio/surana-jewellers",
      image: "/Portfolio/portfolio-surana-jewellers.jpg",
      tags: ['Design', 'Ongoing', 'App Development']
    },
    {
      name: "My Protein",
      link: "/portfolio/my-protein",
      image: "/Portfolio/portfolio-my-protein.jpg",
      tags: ['Design', 'SEO', 'UI/UX Design', 'Website']
    },
    {
      name: "Haldiram",
      link: "/portfolio/haldiram",
      image: "/Portfolio/portfolio-haldiram.jpg",
      tags: ['Design', 'SEO', 'UI/UX Design', 'Website']
    }
  ];

const PortfolioPage = () => {
    return (
        <div className='p-6 md:mt-28 sm:mt-28'>
            <PortfolioSection projects={projects} />
        </div>
    );
};

export default PortfolioPage;
