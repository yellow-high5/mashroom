import { Flex, FlexProps, Spacer, useColorModeValue } from '@chakra-ui/react';
import HeaderMenu from 'components/layout/header/header-menu';
import LogoLink from 'components/layout/header/logo-link';
import ScrollProgress from 'components/layout/header/scroll-progress';
import React from 'react';

type Props = {
  showScrollProgress?: boolean;
} & FlexProps;

const Header: React.FC<Props> = (props) => {
  const { showScrollProgress, ...flexProps } = props;

  const bg = useColorModeValue('#ffffff', '#001025');

  return (
    <Flex
      as="nav"
      position="fixed"
      w="100%"
      bg={bg}
      zIndex={9999}
      wrap="wrap"
      justifyContent="center"
    >
      <Flex
        flexGrow={1}
        maxW={{ sm: '62em' }}
        mb={2}
        borderBottom="1px"
        borderBottomColor="gray.500"
        {...flexProps}
      >
        <LogoLink />

        <Spacer />

        <HeaderMenu />
      </Flex>

      {showScrollProgress && <ScrollProgress />}
    </Flex>
  );
};

export default Header;
