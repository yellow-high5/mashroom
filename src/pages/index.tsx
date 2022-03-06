import { Center } from '@chakra-ui/react';
import BlogCardGrid from 'components/blog/blog-card-grid';
import Layout from 'components/layout';
import React from 'react';
import { Helmet } from 'react-helmet';

type LocationState = {
  key: string;
  state?: { tag?: string };
};

const IndexPage: React.FC<{ location?: LocationState }> = ({ location }) => {
  return (
    <Layout>
      <Helmet title="m@shroom" />

      <Center display="block">
        <BlogCardGrid initialTag={location?.state?.tag} />
      </Center>
    </Layout>
  );
};

export default IndexPage;
