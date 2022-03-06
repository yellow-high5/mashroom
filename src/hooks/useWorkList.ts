import { graphql, useStaticQuery } from 'gatsby';

const useWorkList = () => {
  const data = useStaticQuery<Gatsby.WorkListQuery>(graphql`
    query WorkList {
      allMdx(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { fileAbsolutePath: { regex: "/content/works/" } }
      ) {
        edges {
          node {
            id
            frontmatter {
              date(formatString: "MM/DD YYYY")
              tag
              thumbnail
              title
            }
            slug
          }
        }
      }
    }
  `);
  return data.allMdx.edges;
};

export default useWorkList;
