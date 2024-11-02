import React from 'react'
import TechnologyCard from './Technology'

const TechnologiesSection = () => {

    const technologiesData = [
        {
            image: '/technologies/t-1.png',
            name: 'Magento',
            services: [
                'E-commerce Development',
                'Custom Modules',
                'Theme Design',
            ],
        },
        {
            image: '/technologies/t-2.png',
            name: 'Unity',
            services: [
                'Game Development',
                '3D Animation',
                'AR/VR Solutions',
            ],
        },
        {
            image: '/technologies/t-3.png',
            name: 'Shopify',
            services: [
                'Store Setup',
                'Theme Customization',
                'App Integration',
            ],
        },
        {
            image: '/technologies/t-4.png',
            name: 'Figma',
            services: [
                'UI/UX Design',
                'Prototyping',
                'Design Systems',
            ],
        },
        {
            image: '/technologies/t-5.png',
            name: 'Blender',
            services: [
                '3D Modeling',
                'Animation',
                'Rendering',
            ],
        },
        {
            image: '/technologies/t-6.png',
            name: 'Photoshop',
            services: [
                'Graphic Design',
                'Photo Editing',
                'Mockups',
            ],
        },
        {
            image: '/technologies/t-7.png',
            name: 'After Effects',
            services: [
                'Motion Graphics',
                'Video Editing',
                'VFX',
            ],
        },
        {
            image: '/technologies/t-8.png',
            name: 'Autodesk',
            services: [
                '3D Modeling',
                'Visualization',
                'Product Design',
            ],
        },
        {
            image: '/technologies/t-9.png',
            name: 'Solidity',
            services: [
                'Smart Contracts',
                'Blockchain Apps',
                'Token Creation',
            ],
        },
        {
            image: '/technologies/t-10.png',
            name: 'Django',
            services: [
                'Web Apps',
                'API Development',
                'Backend Support',
            ],
        },
        {
            image: '/technologies/t-11.png',
            name: 'Framer',
            services: [
                'Prototyping',
                'Interactive Designs',
                'UI Testing',
            ],
        },
        {
            image: '/technologies/t-12.png',
            name: 'Webflow',
            services: [
                'Responsive Design',
                'CMS Development',
                'SEO Optimization',
            ],
        },
    ];


    return (
        <div>
            <div className="flex overflow-hidden mb-4">
                <div className="flex animate-loop-scroll space-x-4">
                    {technologiesData.map((tech, index) => (
                        <TechnologyCard
                            key={index}
                            image={tech.image}
                            name={tech.name}
                            services={tech.services}
                        />
                    ))}
                </div>

                <div className="flex animate-loop-scroll space-x-4 ml-4">
                    {technologiesData.map((tech, index) => (
                        <TechnologyCard
                            key={index}
                            image={tech.image}
                            name={tech.name}
                            services={tech.services}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TechnologiesSection