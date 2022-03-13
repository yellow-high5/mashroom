import { Link, useBreakpointValue, useColorMode } from '@chakra-ui/react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useLogoLink } from 'hooks';
import React from 'react';

const LogoLink = () => {
  const { colorMode } = useColorMode();

  const { allFile } = useLogoLink();

  const logoLight = getImage(allFile?.nodes?.[0].childrenImageSharp?.[0]?.gatsbyImageData);
  const logoDark = getImage(allFile?.nodes?.[1].childrenImageSharp?.[0]?.gatsbyImageData);

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Link href={`${process.env.GATSBY_SITE_URL}`}>
      {/* <AspectRatio ratio={3 / 1}> */}
      {logoLight && logoDark && (
        <GatsbyImage
          image={colorMode === 'light' ? logoLight : logoDark}
          alt="m@shroom logo"
          objectFit="contain"
          imgStyle={{ width: isMobile ? 180 : 240 }}
        />
      )}
      {/* </AspectRatio> */}
    </Link>
  );
};

export default LogoLink;
