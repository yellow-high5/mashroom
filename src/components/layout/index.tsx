import { Button, ChakraProvider } from '@chakra-ui/react';
import Footer from 'components/layout/footer';
import Header from 'components/layout/header';
import Sidebar from 'components/layout/sidebar';
import React from 'react';

const Layout = () => {
  return (
    <ChakraProvider>
      <Header />
      <Sidebar />
      <Footer />
      <Button onClick={() => alert('say, hello')}>hello</Button>
    </ChakraProvider>
  );
};

export default Layout;
