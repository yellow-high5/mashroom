import { Flex, Spacer } from '@chakra-ui/react';
import HeaderMenu from 'components/layout/header/header-menu';
import LogoLink from 'components/layout/header/logo-link';
import React from 'react';

const Header = () => {
  return (
    <Flex
      as="nav"
      position="fixed"
      w="100%"
      bg="white"
      zIndex={9999}
      wrap="wrap"
      p={4}
      borderBottom="1px solid #adadad"
      // {...props}
    >
      <LogoLink />

      <Spacer />

      <HeaderMenu />
    </Flex>
  );
};

export default Header;
