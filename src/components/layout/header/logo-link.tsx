import { Box } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const LogoLink = () => {
  return (
    <Box>
      <StaticImage
        layout="fixed"
        formats={['auto', 'webp', 'avif']}
        src="../../../assets/logo-title.png"
        width={240}
        height={80}
        quality={95}
        alt="m@shroom logo title"
      />
    </Box>
  );
};

export default LogoLink;
