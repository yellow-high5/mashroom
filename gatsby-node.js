const path = require('path');

// ファイルシステムAPIに置き換えれるかもしれない
// https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogTemplate = path.resolve('./src/components/blog/blog-template.tsx');

  const response = await graphql(`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "/content/blog/" } }) {
        edges {
          node {
            id
          }
        }
      }
    }
  `);

  response.data.allMdx.edges.forEach((edge) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.id}`,
      context: {
        slug: edge.node.id,
      },
    });
  });
};
