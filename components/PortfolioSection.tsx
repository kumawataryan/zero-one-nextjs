// PortfolioSection.jsx
import React, { useState } from 'react';
import PortfolioCard from '@/components/Portfolio/PortfolioCard';

const tagsList = [
    { tagName: "All" },
    { tagName: "Ongoing" },
    { tagName: "Completed" },
    { tagName: "Design" },
    { tagName: "Development" },
    { tagName: "Marketing" },
];

interface Project {
    name: string;
    link: string;
    image: string;
    tags: string[];
}

interface PortfolioSectionProps {
    projects: Project[];
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ projects }) => {
    const [selectedTag, setSelectedTag] = useState<string>('All');

    const handleTagClick = (tagName: string) => {
        setSelectedTag(tagName);
    };

    const filteredProjects = selectedTag === 'All'
        ? projects
        : projects.filter((project: Project) => project.tags.includes(selectedTag));

    return (
        <section className='flex flex-col justify-left items-left mb-6'>
            <div className='flex justify-between'>
                <h2 className='sm:text-[32px] xl:text-[64px] font-semibold xl:leading-[64px] sm:leading-[32px]'>Portfolio</h2>
            </div>
            <div className='flex gap-1 mt-4 xl:flex-wrap sm:flex-nowrap sm:overflow-x-scroll'>
                {tagsList.map((tag, index) => (
                    <div
                        key={index}
                        className={`uppercase text-nowrap leading-[12px] text-[12px] px-4 p-3 rounded-full cursor-pointer ${selectedTag === tag.tagName ? 'bg-black text-white' : 'bg-transparent border border-black text-black'}`}
                        onClick={() => handleTagClick(tag.tagName)} // Set selected tag on click
                    >
                        {tag.tagName}
                    </div>
                ))}
            </div>

            <div className="columns-1 sm:columns-1 md:columns-2 lg:columns-2 xl:columns-3 2xl:columns-4 gap-8 space-y-8 xl:mt-10 sm:mt-4">
                {filteredProjects.map((project: Project, index: number) => (
                    <PortfolioCard
                        key={index}
                        name={project.name}
                        link={project.link}
                        image={project.image}
                        tags={project.tags.map((tag: string) => ({ tagLink: `/portfolio/${tag.toLowerCase().replace(/\s+/g, '-')}`, tagName: tag }))}
                    />
                ))}
            </div>
        </section>
    );
};

export default PortfolioSection;
