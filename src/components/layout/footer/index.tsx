import { Flex, FlexProps, Heading, Link, Spacer, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { IoGitBranch, IoMoon, IoSunny } from 'react-icons/io5';

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
      justifyContent="center"
      alignItems="center"
      {...props}
    >
      <Flex flexGrow={1} maxW="62em" alignItems="center">
        {colorMode === 'light' ? (
          <IoSunny onClick={toggleColorMode} cursor="pointer" />
        ) : (
          <IoMoon onClick={toggleColorMode} cursor="pointer" />
        )}
        <Spacer />

        <Heading fontSize="xs" mr={1}>
          2022 designed & written by m@sh.
        </Heading>
        <Link href="https://github.com/yellow-high5" isExternal>
          <IoGitBranch cursor="pointer" />
        </Link>
      </Flex>
    </Flex>
  );
};

export default Footer;
