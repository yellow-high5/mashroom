import { graphql, useStaticQuery } from 'gatsby';

const useBlogTagList = () => {
  const data = useStaticQuery<Gatsby.BlogTagListQuery>(graphql`
    query BlogTagList {
      allMdx(filter: { fileAbsolutePath: { regex: "/content/blog/" } }) {
        distinct(field: frontmatter___tag)
      }
    }
  `);
  return data.allMdx.distinct;
};

export default useBlogTagList;
