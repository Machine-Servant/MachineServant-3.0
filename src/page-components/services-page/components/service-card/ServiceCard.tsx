import React from 'react';

import { FluidObject } from 'gatsby-image';
import Image from 'gatsby-image';

type ServiceCardProps = {
  title: string;
  image: FluidObject;
  imageAlt: string;
  orientation: 'left' | 'right';
};

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  image,
  imageAlt,
  orientation,
  children,
}) => (
  <div className="flex flex-col max-w-5xl mx-auto mb-8 sm:flex-row md:h-auto lg:h-96">
    {orientation === 'left' && (
      <Image className="w-full sm:w-3/5" fluid={image} alt={imageAlt} />
    )}
    <div className="w-full px-6 py-12 bg-gray-100 sm:w-2/5">
      <h2 className="mb-12 text-3xl font-medium uppercase">{title}</h2>
      <p className="text-lg leading-relaxed">{children}</p>
    </div>
    {orientation === 'right' && (
      <Image className="w-full sm:w-3/5" fluid={image} alt={imageAlt} />
    )}
  </div>
);
