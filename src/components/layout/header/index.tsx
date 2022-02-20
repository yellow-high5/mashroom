import { Flex, FlexProps, Spacer, useColorModeValue } from '@chakra-ui/react';
import HeaderMenu from 'components/layout/header/header-menu';
import LogoLink from 'components/layout/header/logo-link';
import React from 'react';

const Header: React.FC<FlexProps> = (props) => {
  const bg = useColorModeValue('white', 'gray.800');

  return (
    <Flex
      as="nav"
      position="fixed"
      w="100%"
      bg={bg}
      zIndex={9999}
      wrap="wrap"
      px={4}
      py={2}
      borderBottom="1px"
      borderBottomColor="gray.500"
      justifyContent="center"
      {...props}
    >
      <Flex flexGrow={1} maxW="62em">
        <LogoLink />

        <Spacer />

        <HeaderMenu />
      </Flex>
    </Flex>
  );
};

export default Header;
