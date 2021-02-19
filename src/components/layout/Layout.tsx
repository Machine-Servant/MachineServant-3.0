import React from 'react';

import { FluidObject } from 'gatsby-image';

import { Header } from '../header';
import { Footer } from '../footer';

import { HeaderImage } from './styles';

type LayoutProps = {
  image?: FluidObject;
  imageAlt?: string;
  imageCredits?: string;
  isLargeImage?: boolean;
  content?: React.ReactNode;
  darken?: boolean;
};

export const Layout: React.FC<LayoutProps> = ({
  image,
  imageAlt,
  imageCredits,
  isLargeImage = false,
  content,
  darken = false,
  children,
}) => (
  <main className="font-light font-raleway">
    <Header />
    {image ? (
      <div className="relative">
        <HeaderImage
          fluid={image}
          alt={imageAlt}
          imgStyle={{ objectFit: 'cover' }}
          isLargeImage={isLargeImage}
        />
        {content && (
          <>
            <div className="top-0 left-0 z-20 flex-col justify-center hidden w-full h-full text-white shadow-xl sm:absolute sm:flex">
              {content}
              {imageCredits && (
                <div className="mb-4 ml-4 text-sm">{imageCredits}</div>
              )}
            </div>
            {darken && (
              <div className="absolute top-0 left-0 z-10 w-full h-full bg-gray-900 opacity-30" />
            )}
          </>
        )}
      </div>
    ) : null}
    {children}
    <Footer />
  </main>
);
