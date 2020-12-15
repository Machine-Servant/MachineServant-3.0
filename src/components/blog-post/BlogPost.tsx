import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import RehypeReact from 'rehype-react';
import { DiscussionEmbed } from 'disqus-react';

import { ImageSharpFluidProps } from '../../@types/types';
import { Layout } from '../../components/layout';
import { SEO } from '../../components/seo';

import { components, MainContent } from './styles';

type BlogPostProps = {
  data: {
    markdownRemark: {
      id: string;
      htmlAst: any;
      excerpt: string;
      parent: {
        id: string;
        relativeDirectory: string;
      };
      frontmatter: {
        author: string;
        date: string;
        fromNow: string;
        featuredImage: ImageSharpFluidProps;
        socialImage: {
          childImageSharp: {
            resize: {
              src: string;
              width: number;
              height: number;
            };
          };
        };
        keywords: string[];
        title: string;
        tags: string[];
      };
      timeToRead: number;
    };
  };
};

export const BlogPost: React.FC<BlogPostProps> = (props) => {
  // @ts-ignore
  const renderAst = new RehypeReact({
    createElement: React.createElement,
    // @ts-ignore
    components,
  }).Compiler;

  const {
    data: { markdownRemark: post },
  } = props;

  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_SHORTNAME || '',
    config: {
      identifier: post.parent.relativeDirectory,
      title: post.frontmatter.title,
    },
  };

  return (
    <Layout
      image={post.frontmatter.featuredImage.childImageSharp.fluid}
      imageAlt="temporary"
      isLargeImage
      content={
        <>
          <div className="container flex items-end justify-center h-full py-12 mx-auto">
            <div className="z-20 text-4xl font-bold text-center text-white uppercase">
              {post.frontmatter.title}
            </div>
          </div>
          <div className="absolute top-0 left-0 z-10 w-full h-full bg-gray-900 opacity-30" />
        </>
      }
    >
      <SEO
        title={post.frontmatter.title}
        description={post.excerpt.replace(/\\n/g, ' ')}
        image={post.frontmatter.socialImage.childImageSharp.resize}
        keywords={post.frontmatter.keywords}
        article
      />
      <MainContent>
        <div className="flex items-center mb-8 text-sm font-extralight">
          <FontAwesomeIcon className="mr-2" icon={faUserCircle} />{' '}
          {post.frontmatter.author}{' '}
          <FontAwesomeIcon className="mx-2" icon={faCrown} />
          <span className="mx-2">&bull;</span>
          <span className="">{post.frontmatter.date}</span>
          <span className="mx-2">&bull;</span>
          <span className="mr-2">{post.timeToRead} min read</span>
        </div>
        {
          // @ts-ignore
          renderAst(post.htmlAst)
        }
        <hr className="mb-8" />
        <DiscussionEmbed {...disqusConfig} />
      </MainContent>
    </Layout>
  );
};
