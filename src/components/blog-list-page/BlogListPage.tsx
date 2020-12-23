import React from 'react';

import { graphql, Link, useStaticQuery } from 'gatsby';

import { ImageSharpFluidProps, TagsGroupProps } from '../../@types/types';
import { Layout } from '../layout';
import { SEO } from '../seo';
import { Post } from '../post';
import { Tag } from '../tag';

type PostProps = {
  id: string;
  excerpt: string;
  parent: {
    id: string;
    relativeDirectory: string;
  };
  frontmatter: {
    author: string;
    date: string;
    featuredImage: ImageSharpFluidProps;
    title: string;
    tags: string;
  };
  timeToRead: number;
};

type BlogListPageProps = {
  data: {
    posts: {
      edges: {
        node: PostProps;
      }[];
    };
    tagsGroup: {
      group: TagsGroupProps[];
    };
  };
  pageContext: {
    limit?: number;
    skip?: number;
    numPages?: number;
    currentPage?: number;
    totalCount?: number;
    paginated?: boolean;
    renderTagList?: boolean;
    tag?: string;
  };
};

export const BlogListPage: React.FC<BlogListPageProps> = ({
  data,
  pageContext,
}) => {
  const {
    blogImage,
  } = useStaticQuery<GatsbyTypes.BlogPageListPageQueryQuery>(graphql`
    query BlogPageListPageQuery {
      blogImage: file(relativePath: { eq: "blog.jpg" }) {
        childImageSharp {
          fluid(quality: 64) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  if (!blogImage?.childImageSharp?.fluid) {
    throw Error('GraphQL query returned empty results');
  }

  const { edges: posts } = data.posts;
  const {
    currentPage,
    numPages,
    paginated = false,
    renderTagList = false,
    tag,
  } = pageContext;

  const canGoBack = paginated && currentPage && currentPage > 1;
  const backPath =
    canGoBack && currentPage
      ? currentPage - 1 === 1
        ? `/blog`
        : `/blog/${currentPage - 1}`
      : null;

  const canGoNext =
    paginated && currentPage && numPages && currentPage < numPages;
  const nextPath = currentPage && canGoNext ? `/blog/${currentPage + 1}` : null;

  const sortedTags = renderTagList
    ? [...data.tagsGroup.group].sort(
        (a: TagsGroupProps, b: TagsGroupProps) => b.totalCount - a.totalCount
      )
    : [];

  return (
    <Layout
      image={blogImage.childImageSharp.fluid}
      imageAlt="Blog spelled out in titles"
    >
      <SEO
        title="Blog"
        description="Ideas, discoveries, and technical musings from machineservant.com"
      />
      {tag && (
        <>
          <h1 className="mt-12 mb-4 text-3xl font-medium text-center">
            All posts tagged <pre className="inline">#{tag}</pre>
          </h1>
          <div className="text-center">
            <Link className="underline" to="/blog">
              Back to all posts
            </Link>
          </div>
        </>
      )}
      {renderTagList && (
        <div className="container flex flex-wrap items-center max-w-5xl mx-auto mt-12 justify-evenly">
          {sortedTags.slice(0, 5).map(({ fieldValue, totalCount }) => (
            <Tag key={fieldValue} value={fieldValue} count={totalCount} />
          ))}
          <Link to="/tags" className="px-4 py-2 mx-4 mb-4 text-xs underline">
            View all tags
          </Link>
        </div>
      )}
      <div className="container pt-8 pb-12 mx-auto lg:py-12">
        {posts.map(({ node: post }) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
      {paginated && (
        <div className="container max-w-5xl mx-auto mb-12">
          <div className="flex justify-around lg:justify-between">
            {backPath ? (
              <Link
                className="w-32 px-4 py-2 text-lg text-center text-white bg-lochmara-500"
                to={backPath}
              >
                Back
              </Link>
            ) : (
              <div />
            )}
            {nextPath ? (
              <Link
                className="w-32 px-4 py-2 text-lg text-center text-white bg-lochmara-500"
                to={nextPath}
              >
                Next
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      )}
    </Layout>
  );
};
