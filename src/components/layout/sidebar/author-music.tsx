import { AspectRatio, Flex, FlexProps } from '@chakra-ui/react';
import SideHeading from 'components/common/side-heading';
import React from 'react';

const AuthorMusic: React.FC<FlexProps> = (props) => {
  return (
    <Flex flexDir="column" alignItems="center" {...props}>
      <SideHeading>ミュージック</SideHeading>
      <AspectRatio ratio={{ base: 16 / 9, md: 9 / 16 }} w={{ base: 360, md: 240 }}>
        <iframe
          src="https://www.youtube.com/embed/Kcp4dy8tJP0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </AspectRatio>
    </Flex>
  );
};

export default AuthorMusic;
