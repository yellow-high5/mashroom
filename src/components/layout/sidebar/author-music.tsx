import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

const AuthorMusic = () => {
  return (
    <Flex flexDir="column" alignItems="center" m={4}>
      <Text fontWeight="bold" mb={4}>
        ミュージック
      </Text>
      <iframe
        width="200"
        height="320"
        src="https://www.youtube.com/embed/amQZKaeEyv0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Flex>
  );
};

export default AuthorMusic;
