import React from 'react';

import Image, { FluidObject } from 'gatsby-image';

import { MainContent } from './styles';

type ServiceCardType = {
  title: string;
  image: FluidObject;
};

export const ServiceCard: React.FC<ServiceCardType> = ({
  children,
  title,
  image,
}) => (
  <MainContent className="mb-4 lg:mb-0 lg:flex lg:max-h-72">
    <div className="w-full lg:w-auto lg:flex-1 lg:h-full">
      <div className="lg:mb-2">
        <Image className="lg:max-h-40" fluid={image} alt={title} />
      </div>
      <div className="flex flex-col h-full text-center bg-gray-200 justify-evenly">
        <span className="inline-block pt-8 text-xl uppercase justify-self-start">
          {title}
        </span>
        <p className="p-6">{children}</p>
      </div>
    </div>
  </MainContent>
);
