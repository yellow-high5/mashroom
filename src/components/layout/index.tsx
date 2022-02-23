import theme from '@chakra-ui/gatsby-plugin/theme';
import { ChakraProvider, Grid, GridItem } from '@chakra-ui/react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import Footer from 'components/layout/footer';
import Header from 'components/layout/header';
import Sidebar from 'components/layout/sidebar';
import React, { useState } from 'react';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const [showHeader, setShowHeader] = useState(true);
  useScrollPosition(({ prevPos, currPos }) => {
    const visible = currPos.y > prevPos.y;
    setShowHeader(visible);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Header display={showHeader ? 'block' : 'none'} />

      <Grid templateColumns="repeat(4, 1fr)" gap={4} maxW="62em" pt={28} m="auto">
        <GridItem colSpan={[4, 4, 3, 3]}>{children}</GridItem>
        <GridItem colSpan={[4, 4, 1, 1]}>
          <Sidebar />
        </GridItem>
      </Grid>

      <Footer />
    </ChakraProvider>
  );
};

export default Layout;
