"use client";

import React, { useState } from "react";
import Tag from "../Tag";
import Image from "next/image";
import Link from "next/link";

interface Client {
  image: string; // Single image string for each client
}

interface Tag {
  link: string;
  name: string;
}

interface ServiceCardProps {
  name: string;
  link: string;
  short_information: string;
  tools: Client[];
  tags: Tag[];
  isInitiallyExpanded?: boolean; // New prop to indicate initial expansion state
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  name,
  link,
  short_information,
  tools,
  tags,
  isInitiallyExpanded = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(isInitiallyExpanded);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="border-t border-black flex flex-col w-full md:py-4 sm:py-4 relative p-3">
      <div
        className="flex sm:flex-col md:flex-row sm:gap-2 justify-between md:items-center sm:items-start cursor-pointer"
        onClick={toggleExpand}
      >
        <Link href={link} className="md:text-[22px] sm:text-[18px] text-nowrap font-medium relative z-10">
          {name}
        </Link>
        <div className="flex gap-1 flex-wrap justify-end relative z-10">
          {tools.map((client, index) => (
            <Image
              key={index}
              src={client.image}
              width={50}
              height={50}
              alt="tools"
              className="aspect-square object-cover w-[50px] h-[50px] sm:w-[50px] sm:h-[50px] md:w-[50px] md:h-[50px]"
              unoptimized
            />
          ))}
        </div>
      </div>

      {isExpanded && (
        <div className="flex flex-col py-4 md:mb-10">
          <p className="opacity-60 max-w-full md:max-w-[600px] mt-4 text-[16px]">
            {short_information}
          </p>

          <div className="flex flex-wrap gap-1 mt-6">
            {tags.map((tag, index) => (
              <Tag className="text-white p-2 px-4 font-medium" key={index} tagLink={tag.link} tagName={tag.name} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
