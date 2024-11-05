import TechnologyCardVarient from '@/components/TechnologyVarient';
import React from 'react'

const TechnologiesPage = () => {

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
        <div className='p-6 mb-24'>

            <div className='flex w-full justify-between mt-32'>
                <h1 className='xl:text-[98px] sm:text-[48px] leading-tight'>Technologies</h1>
                <p className='opacity-60 max-w-[500px] text-[20px] leading-tight mt-2'>At Zero One, we leverage a wide array of advanced technologies to deliver innovative solutions tailored to our clients needs.</p>
            </div>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4 mt-12'>
                {technologiesData.map((tech, index) => (
                    <TechnologyCardVarient
                        key={index}
                        image={tech.image}
                        name={tech.name}
                        services={tech.services}
                    />
                ))}
            </div>



        </div>
    )
}

export default TechnologiesPage