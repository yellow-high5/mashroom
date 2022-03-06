import { graphql, useStaticQuery } from 'gatsby';

const useWorkTabList = () => {
  const data = useStaticQuery<Gatsby.WorkTabListQuery>(graphql`
    query WorkTabList {
      allMdx(filter: { fileAbsolutePath: { regex: "/content/works/" } }) {
        distinct(field: frontmatter___tag)
      }
    }
  `);
  return data.allMdx.distinct;
};

export default useWorkTabList;
