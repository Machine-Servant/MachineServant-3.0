import { graphql } from 'gatsby';

import { BlogPost } from '../../components/blog-post';

export default BlogPost;

export const pageQuery = graphql`
  query($id: String) {
    markdownRemark(id: { eq: $id }) {
      id
      htmlAst
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
        fromNow: date(fromNow: true)
        featuredImage {
          childImageSharp {
            fluid(quality: 64) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        imageAlt
        imageCredits
        socialImage: featuredImage {
          childImageSharp {
            resize(width: 1200) {
              src
              width
              height
            }
          }
        }
        keywords
        title
        tags
      }
      timeToRead
    }
  }
`;
