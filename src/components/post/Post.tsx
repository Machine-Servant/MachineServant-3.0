import React from 'react';

import Image from 'gatsby-image';
import { ImageSharpFluidProps } from '../../@types/types';
import { Link } from 'gatsby';
import { ByLine } from '../by-line';

type PostProps = {
  frontmatter: {
    featuredImage: ImageSharpFluidProps;
    author: string;
    date: string;
    title: string;
  };
  timeToRead: number;
  excerpt: string;
  parent: {
    relativeDirectory: string;
  };
};

export const Post: React.FC<PostProps> = ({
  frontmatter: { featuredImage, title, author, date },
  timeToRead,
  excerpt,
  parent: { relativeDirectory },
}) => (
  <div className="flex flex-col max-w-3xl mx-4 mb-8 border border-gray-300 shadow-md md:mx-auto md:flex-row md:h-72">
    <div className="flex flex-1 md:w-5/12 h-60 md:h-auto">
      <Image
        className="w-full"
        fluid={featuredImage.childImageSharp.fluid}
        alt={title}
      />
    </div>
    <div className="md:w-7/12">
      <div className="flex flex-col h-full px-8 py-8">
        <div className="flex mb-8">
          <div className="flex flex-col">
            <span className="mb-2 text-xs">
              <ByLine author={author} />
            </span>
            <span className="text-xs">
              {date} &bull; {timeToRead} min
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-between h-full">
          <h2 className="text-xl font-medium">
            <Link
              className="transition-colors hover:text-gray-700 hover:underline"
              to={`/blog/${relativeDirectory}`}
            >
              {title}
            </Link>
          </h2>
          <p className="font-extralight">{excerpt}</p>
        </div>
      </div>
    </div>
  </div>
);
