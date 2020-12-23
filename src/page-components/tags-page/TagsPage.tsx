import React from 'react';

import { graphql, Link, useStaticQuery } from 'gatsby';

import { Layout } from '../../components/layout';
import { SEO } from '../../components/seo';
import { Tag } from '../../components/tag';

export const TagsPage: React.FC = () => {
  const {
    allMarkdownRemark,
    blogImage,
  } = useStaticQuery<GatsbyTypes.TagsPageQueryQuery>(graphql`
    query TagsPageQuery {
      allMarkdownRemark(filter: { frontmatter: { published: { eq: true } } }) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
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

  const sortedTags = [...allMarkdownRemark.group].sort(
    (a, b) => b.totalCount - a.totalCount
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
      <div className="container flex flex-wrap items-center max-w-5xl pb-12 mx-auto justify-evenly lg:justify-between">
        {sortedTags.map((tag) => (
          <Tag value={tag.fieldValue!} count={tag.totalCount} />
        ))}
      </div>
    </Layout>
  );
};
