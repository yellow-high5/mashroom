import { Flex, Spacer, Text } from '@chakra-ui/react';
import React from 'react';
// import { IoLogoGithub, IoSunny } from 'react-icons/io5';

const Footer = () => {
  return (
    <Flex
      as="nav"
      wrap="wrap"
      px={8}
      py={6}
      borderTop="1px solid #adadad"
      alignItems="center"
      // {...props}
    >
      {/* <Box display="flex" alignItems="center">
        <IoSunny />
        <IoLogoGithub />
      </Box> */}

      <Spacer />

      <Text>2022 © m@shroom. m@sh All Rights Reserved.</Text>
    </Flex>
  );
};

export default Footer;
