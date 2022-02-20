import theme from '@chakra-ui/gatsby-plugin/theme';
import { Center, ChakraProvider, Grid, GridItem, SlideFade } from '@chakra-ui/react';
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
      <SlideFade
        in={showHeader}
        transition={{
          enter: { delay: 0.2 },
          exit: { delay: 0.2 },
        }}
      >
        <Header />
      </SlideFade>
      <Grid templateColumns="repeat(4, 1fr)" gap={4} pt={28}>
        <GridItem colSpan={[4, 4, 3, 3]}>
          <Center height="100vh">{children}</Center>
        </GridItem>
        <GridItem colSpan={[4, 4, 1, 1]}>
          <Sidebar />
        </GridItem>
      </Grid>
      <Footer />
    </ChakraProvider>
  );
};

export default Layout;
