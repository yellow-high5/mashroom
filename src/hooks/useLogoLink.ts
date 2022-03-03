import { graphql, useStaticQuery } from 'gatsby';

const useLogoLink = () => {
  return useStaticQuery<Gatsby.LogoLinkQuery>(graphql`
    query LogoLink {
      allFile(
        filter: { relativePath: { in: ["logo-title-light.png", "logo-title-dark.png"] } }
        sort: { fields: relativePath, order: DESC }
      ) {
        nodes {
          childrenImageSharp {
            gatsbyImageData(width: 240, height: 80, quality: 95, layout: FIXED)
          }
        }
      }
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `);
};

export default useLogoLink;
