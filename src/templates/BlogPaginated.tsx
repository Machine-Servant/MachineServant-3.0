import { graphql } from 'gatsby';
import { BlogListPage } from '../components/blog-list-page';

export default BlogListPage;

export const pageQuery = graphql`
  query BlogQuery($skip: Int!, $limit: Int!) {
    posts: allMarkdownRemark(
      filter: { frontmatter: { published: { eq: true } } }
      limit: $limit
      skip: $skip
      sort: { fields: frontmatter___date, order: DESC }
    ) {
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
                fluid {
                  ...GatsbyImageSharpFluid
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
    tagsGroup: allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
