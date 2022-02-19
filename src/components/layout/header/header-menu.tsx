import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const HeaderMenu = () => {
  return (
    <Box
      // width={{ base: 'full', md: 'auto' }}
      // flexGrow={1}
      // mt={{ base: 4, md: 0 }}
      display="flex"
      alignItems="center"
    >
      <Text mr={4}>Blog</Text>
      <Text mr={4}>Works</Text>
      <Text mr={4}>Profile</Text>
    </Box>
  );
};

export default HeaderMenu;
