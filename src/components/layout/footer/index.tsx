import { Flex, FlexProps, Heading, Spacer, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { IoMoon, IoSunny } from 'react-icons/io5';

const Footer: React.FC<FlexProps> = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="nav"
      wrap="wrap"
      px={8}
      py={6}
      borderTop="1px"
      borderTopColor="gray.500"
      alignItems="center"
      {...props}
    >
      {colorMode === 'light' ? (
        <IoMoon onClick={toggleColorMode} cursor="pointer" color="yellow.200" />
      ) : (
        <IoSunny onClick={toggleColorMode} cursor="pointer" color="yellow.400" />
      )}
      <Spacer />

      <Heading fontSize="xs">2022 © m@shroom. m@sh All Rights Reserved.</Heading>
    </Flex>
  );
};

export default Footer;
