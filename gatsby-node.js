const path = require('path');
const { kebabCase } = require('lodash');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const BlogPaginated = path.resolve('src/templates/BlogPaginated.tsx');
  const TaggedPosts = path.resolve('src/templates/TaggedPosts.tsx');

  const result = await graphql(`
    query GatsbyNodeQuery {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        edges {
          node {
            id
          }
        }
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }

  const postsPerPage = 5;
  const numPages = Math.ceil(
    result.data.allMarkdownRemark.edges.length / postsPerPage
  );
  Array.from({ length: numPages }).forEach((_item, i) => {
    const paginatedPath = i === 0 ? '/blog' : `/blog/${i + 1}`;
    createPage({
      path: paginatedPath,
      component: BlogPaginated,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
        totalCount: result.data.allMarkdownRemark.edges.length,
        paginated: true,
        renderTagList: true,
      },
    });
    console.info(`Created blog pagination page: ${paginatedPath}`);
  });

  result.data.allMarkdownRemark.group.forEach((tag) => {
    const value = kebabCase(tag.fieldValue);
    const taggedPostPath = `/tag/${value}`;
    createPage({
      path: taggedPostPath,
      component: TaggedPosts,
      context: {
        tag: tag.fieldValue,
      },
    });
    console.info(`Created tagged posts page: ${taggedPostPath}`);
  });
};
