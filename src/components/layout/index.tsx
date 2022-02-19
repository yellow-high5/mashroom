import { Center, ChakraProvider, Grid, GridItem } from '@chakra-ui/react';
import Footer from 'components/layout/footer';
import Header from 'components/layout/header';
import Sidebar from 'components/layout/sidebar';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <ChakraProvider>
      <Header />
      <Grid templateColumns="repeat(4, 1fr)" gap={4} pt={28}>
        <GridItem colSpan={3}>
          <Center height="100vh">{children}</Center>
        </GridItem>
        <GridItem colSpan={1}>
          <Sidebar />
        </GridItem>
      </Grid>
      <Footer />
    </ChakraProvider>
  );
};

export default Layout;
