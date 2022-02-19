import { Flex, Text } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const AuthorIntro = () => {
  return (
    <Flex flexDir="column" alignItems="center" m={4}>
      <Text fontWeight="bold" mb={4}>
        ライター
      </Text>
      <StaticImage
        layout="fixed"
        formats={['auto', 'webp', 'avif']}
        src="../../../assets/avatar.jpeg"
        width={180}
        quality={95}
        alt="m@shroom logo title"
      />
      <Text fontWeight="bold" mt={4} mb={2}>
        yellow-high5
      </Text>
      <Text># モダンWeb研究者 ⚡️</Text>
      <Text># ウィスキー 愛好家 🥃 </Text>
      <Text># ただの釣り好き 🎣</Text>
    </Flex>
  );
};

export default AuthorIntro;
