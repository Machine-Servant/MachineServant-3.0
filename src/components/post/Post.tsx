import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Image from 'gatsby-image';
import { ImageSharpFluidProps } from '../../@types/types';
import { Link } from 'gatsby';

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
  <div className="flex max-w-3xl mx-auto mb-8 border border-gray-300 h-72">
    <div className="flex flex-1 w-5/12">
      <Image
        className="w-full"
        fluid={featuredImage.childImageSharp.fluid}
        alt={title}
      />
    </div>
    <div className="w-7/12">
      <div className="flex flex-col h-full px-8 py-8">
        <div className="flex mb-8">
          <div className="flex flex-col">
            <span className="mb-2 text-xs">
              <FontAwesomeIcon icon={faUserCircle} /> {author}{' '}
              <FontAwesomeIcon icon={faCrown} />
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