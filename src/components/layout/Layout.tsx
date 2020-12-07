import React from 'react';

import { FluidObject } from 'gatsby-image';

import { Header } from '../header';
import { Footer } from '../footer';

import { HeaderImage } from './styles';

type LayoutProps = {
  image?: FluidObject;
  imageAlt?: string;
  isLargeImage?: boolean;
  content: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({
  image,
  imageAlt,
  isLargeImage = false,
  content,
  children,
}) => (
  <main>
    <Header />
    {image ? (
      <div className="relative mb-4">
        <HeaderImage
          fluid={image}
          alt={imageAlt}
          imgStyle={{ objectFit: 'cover' }}
          isLargeImage
        />
        <div className="top-0 left-0 flex-col justify-center hidden w-full h-full text-white shadow-xl sm:absolute sm:flex">
          {content}
        </div>
        <div className="container p-4 mx-auto shadow-sm sm:hidden bg-purple-heart-100">
          {content}
        </div>
      </div>
    ) : null}
    {children}
    <Footer />
  </main>
);
