import React from 'react';

import Image, { FluidObject } from 'gatsby-image';

import { ColorOptions } from '../../../../@types/types';
import { MainContent, TextSection } from './styles';

type ServiceCardType = {
  title: string;
  image: FluidObject;
  highlightColor: ColorOptions;
};

export const ServiceCard: React.FC<ServiceCardType> = ({
  children,
  title,
  image,
  highlightColor,
}) => (
  <MainContent className="mb-4 lg:mb-0 lg:flex lg:flex-col">
    <div className="flex flex-col w-full lg:w-auto lg:flex-1 lg:h-32">
      <div className="lg:mb-2">
        <Image className="lg:max-h-40" fluid={image} alt={title} />
      </div>
      <TextSection
        className="justify-between flex-1 text-center bg-gray-200"
        highlightColor={highlightColor}
      >
        <span className="inline-block pt-8 text-xl uppercase justify-self-start">
          {title}
        </span>
        <p className="p-6">{children}</p>
      </TextSection>
    </div>
  </MainContent>
);
