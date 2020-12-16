import React from 'react';

import { Link } from 'gatsby';
import Image, { FluidObject } from 'gatsby-image';

import { ImageWrapper, MainContent } from './styles';

type TestimonialProps = {
  image: FluidObject;
  imageOrientation: 'left' | 'right';
  name: string;
  company: string;
  link?: string;
};

export const Testimonial: React.FC<TestimonialProps> = ({
  image,
  imageOrientation,
  name,
  company,
  link,
  children,
}) => (
  <MainContent className="flex flex-col max-w-4xl mx-auto mb-12 sm:flex-row">
    {imageOrientation === 'left' && (
      <ImageWrapper imageOrientation={imageOrientation}>
        <Image fluid={image} alt={name} />
      </ImageWrapper>
    )}
    <div className="flex flex-col justify-between px-4 sm:px-0">
      <p className="mb-8 sm:mb-0">{children}</p>
      <div className="text-lg">
        <span>{name}</span>,{' '}
        {link ? (
          <Link
            to={link}
            className="italic underline"
            rel="nooreferrer"
            target="_blank"
          >
            {company}
          </Link>
        ) : (
          <span className="italic">{company}</span>
        )}
      </div>
    </div>
    {imageOrientation === 'right' && (
      <ImageWrapper imageOrientation={imageOrientation}>
        <Image fluid={image} alt={name} />
      </ImageWrapper>
    )}
  </MainContent>
);
