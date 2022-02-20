import { Box, Flex, FlexProps, Text } from '@chakra-ui/react';
import SideHeading from 'components/common/side-heading';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const AuthorIntro: React.FC<FlexProps> = (props) => {
  return (
    <Flex flexDir="column" alignItems="center" {...props}>
      <SideHeading>ライター</SideHeading>
      <Flex flexDir={{ md: 'column' }} alignItems="center">
        <StaticImage
          layout="fixed"
          src="../../../assets/avatar.jpeg"
          width={180}
          quality={95}
          alt="avatar"
        />
        <Box ml={{ base: 6, md: 0 }}>
          <Text fontWeight="bold" mt={4} mb={2}>
            yellow-high5
          </Text>
          <Text fontSize="xs" lineHeight="8">
            # モダンWeb研究者 ⚡️ <br /> # ウィスキー 愛好家 🥃 <br /> # ただの釣り好き 🎣
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default AuthorIntro;
