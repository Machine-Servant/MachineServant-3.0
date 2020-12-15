import { graphql } from 'gatsby';

import { BlogListPage } from '../components/blog-list-page';

export default BlogListPage;

export const pageQuery = graphql`
  query($tag: String) {
    posts: allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] }, published: { eq: true } } }
    ) {
      totalCount
      edges {
        node {
          id
          excerpt(pruneLength: 160)
          parent {
            ... on File {
              id
              relativeDirectory
            }
          }
          frontmatter {
            author
            date(formatString: "MMMM DD, YYYY")
            featuredImage {
              childImageSharp {
                fluid(quality: 64) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            title
            tags
          }
          timeToRead
        }
      }
    }
  }
`;
