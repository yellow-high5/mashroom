import { graphql, useStaticQuery } from 'gatsby';

const useTagList = () => {
  const data = useStaticQuery<Gatsby.TagListQuery>(graphql`
    query TagList {
      allMdx {
        distinct(field: frontmatter___tag)
      }
    }
  `);
  return data.allMdx.distinct;
};

export default useTagList;
