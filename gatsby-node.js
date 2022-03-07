const path = require('path');

// ファイルシステムAPIに置き換えれるかもしれない
// https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogTemplate = path.resolve('./src/components/blog/blog-template.tsx');

  const blogList = await graphql(`
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
  blogList.data.allMdx.edges.forEach((edge) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.id}`,
      context: {
        slug: edge.node.id,
      },
    });
  });

  const workTemplate = path.resolve('./src/components/work/work-template.tsx');
  const workList = await graphql(`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "/content/works/" } }) {
        edges {
          node {
            id
          }
        }
      }
    }
  `);
  workList.data.allMdx.edges.forEach((edge) => {
    createPage({
      component: workTemplate,
      path: `/works/${edge.node.id}`,
      context: {
        slug: edge.node.id,
      },
    });
  });
};
