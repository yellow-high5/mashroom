import { Grid, GridItem } from '@chakra-ui/react';
import { Analytics } from '@vercel/analytics/react';
import Footer from 'components/layout/footer';
import Header from 'components/layout/header';
import Sidebar from 'components/layout/sidebar';
import { useScrollToggleHeader } from 'hooks';
import React from 'react';
import AppProvider from 'store';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const [hideHeader] = useScrollToggleHeader();

  return (
    <AppProvider>
      <Analytics />
      <Header isHide={hideHeader} />

      <Grid templateColumns="repeat(4, 1fr)" gap={4} maxW="62em" pt={28} m="auto">
        <GridItem colSpan={[4, 4, 3, 3]}>{children}</GridItem>
        <GridItem colSpan={[4, 4, 1, 1]}>
          <Sidebar />
        </GridItem>
      </Grid>

      <Footer />
    </AppProvider>
  );
};

export default Layout;
