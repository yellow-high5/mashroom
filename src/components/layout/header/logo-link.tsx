import { Box, Link, useColorMode } from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

export const sitePageQuery = graphql`
  query SitePage {
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
`;

const LogoLink = () => {
  const { colorMode } = useColorMode();

  const { site, allFile } = useStaticQuery<Gatsby.SitePageQuery>(sitePageQuery);

  const logoLight = getImage(allFile?.nodes?.[0].childrenImageSharp?.[0]?.gatsbyImageData);
  const logoDark = getImage(allFile?.nodes?.[1].childrenImageSharp?.[0]?.gatsbyImageData);

  return (
    <Link href={site?.siteMetadata?.siteUrl || undefined}>
      <Box>
        {logoLight && logoDark && (
          <GatsbyImage
            image={colorMode === 'light' ? logoLight : logoDark}
            alt="m@shroom logo title"
          />
        )}
      </Box>
    </Link>
  );
};

export default LogoLink;
