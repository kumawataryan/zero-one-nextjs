"use client"

import React from 'react';
import PortfolioSection from '@/components/PortfolioSection';

const projects = [
    {
        name: "Project Name 1",
        link: "/portfolio/project-name-1",
        image: "/portfolio/p-1.png",
        tags: ['Design', 'Ongoing', 'App Development']
    },
    {
        name: "Project Name 2",
        link: "/portfolio/project-name-2",
        image: "/portfolio/p-2.png",
        tags: ['Design', 'Ongoing', 'UI/UX Design']
    },
    {
        name: "Project Name 3",
        link: "/portfolio/project-name-3",
        image: "/portfolio/p-3.jpg",
        tags: ['Design', 'Ongoing', 'Ecommerce Development']
    },
    // Add more projects as needed...
];

const PortfolioPage = () => {
    return (
        <div className='p-6 md:mt-28 sm:mt-12'>
            <PortfolioSection projects={projects} />
        </div>
    );
};

export default PortfolioPage;
