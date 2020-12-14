import React from 'react';

import { graphql, Link, useStaticQuery } from 'gatsby';

import { ImageSharpFluidProps, TagsGroupProps } from '../../@types/types';
import { Layout } from '../../components/layout';
import { SEO } from '../../components/seo';
import { Tag } from '../../components/tag';

type TagsPageQueryProps = {
  allMarkdownRemark: {
    group: TagsGroupProps[];
  };
  blogImage: ImageSharpFluidProps;
};

export const TagsPage: React.FC = () => {
  const {
    allMarkdownRemark,
    blogImage,
  } = useStaticQuery<TagsPageQueryProps>(graphql`
    query TagsPageQuery {
      allMarkdownRemark(filter: { frontmatter: { published: { eq: true } } }) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
      blogImage: file(relativePath: { eq: "blog.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const sortedTags = [...allMarkdownRemark.group].sort(
    (a: TagsGroupProps, b: TagsGroupProps) => b.totalCount - a.totalCount
  );

  return (
    <Layout
      image={blogImage.childImageSharp.fluid}
      imageAlt="Blog spelled out in tiles."
    >
      <SEO title="Post tags" description="All the tags for all the posts" />
      <h1 className="my-12 text-3xl font-medium text-center">
        All tags for all posts
      </h1>
      <div className="max-w-5xl mx-auto mb-12 text-center">
        <Link className="underline" to="/blog">
          Back to blog list page
        </Link>
      </div>
      <div className="container flex flex-wrap items-center justify-between max-w-5xl pb-12 mx-auto">
        {sortedTags.map((tag) => (
          <Tag value={tag.fieldValue} count={tag.totalCount} />
        ))}
      </div>
    </Layout>
  );
};
