"use client"

import React from 'react';
import PortfolioSection from '@/components/PortfolioSection';

const projects = [
    {
        name: "Hundai App",
        link: "/portfolio/hundai-app",
        image: "/portfolio/p-1.png",
        tags: ['Design', 'App Development']
    },
    {
        name: "Fortis Blog",
        link: "/portfolio/fortis-blog",
        image: "/portfolio/p-2.png",
        tags: ['Design', 'SEO', 'UI/UX Design', 'Website']
    },
    {
        name: "Ashok Leyland App",
        link: "/portfolio/ashok-leyland-app",
        image: "/portfolio/p-3.png",
        tags: ['Design', 'Ongoing', 'App Development']
    },
    {
        name: "JDA (Jaipur Development Authority)",
        link: "/portfolio/jda",
        image: "/portfolio/p-1.png",
        tags: ['Design', 'App Development']
    },
    {
        name: "PC Jewellers",
        link: "/portfolio/pc-jewellers",
        image: "/portfolio/p-2.png",
        tags: ['Design', 'SEO', 'UI/UX Design', 'Website']
    },
    {
        name: "Motisons Jewellers",
        link: "/portfolio/motisons-jewellers",
        image: "/portfolio/p-3.png",
        tags: ['Design', 'Ongoing', 'App Development']
    },
    {
        name: "Sorana Jewellers",
        link: "/portfolio/sorana-jewellers",
        image: "/portfolio/p-1.png",
        tags: ['Design', 'App Development']
    },
    {
        name: "Anita Dongre",
        link: "/portfolio/anita-dongre",
        image: "/portfolio/p-2.png",
        tags: ['Design', 'SEO', 'UI/UX Design', 'Website']
    }
];

const PortfolioPage = () => {
    return (
        <div className='p-6 md:mt-28 sm:mt-12'>
            <PortfolioSection projects={projects} />
        </div>
    );
};

export default PortfolioPage;
