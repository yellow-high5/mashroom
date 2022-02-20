import { Box, useColorMode } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const LogoLink = () => {
  const { colorMode } = useColorMode();

  return (
    <Box>
      {colorMode === 'light' ? (
        <StaticImage
          layout="fixed"
          formats={['auto', 'webp', 'avif']}
          src={'../../../assets/logo-title-light.png'}
          width={240}
          height={80}
          quality={95}
          alt="m@shroom logo title"
        />
      ) : (
        <StaticImage
          layout="fixed"
          formats={['auto', 'webp', 'avif']}
          src={'../../../assets/logo-title-dark.png'}
          width={240}
          height={80}
          quality={95}
          alt="m@shroom logo title"
        />
      )}
    </Box>
  );
};

export default LogoLink;
