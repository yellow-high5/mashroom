import { Center, Grid, GridItem, useBreakpointValue } from '@chakra-ui/react';
import BlogCard from 'components/blog/blog-card';
import Layout from 'components/layout';
import React from 'react';

const IndexPage = () => {
  const article_page_size = useBreakpointValue({ base: 7, lg: 6 });

  return (
    <Layout>
      <Center>
        <Grid templateColumns="repeat(2, 1fr)" gap={4} pt={8} m="auto">
          {Array(article_page_size)
            .fill('')
            .map((_, i) => (
              <GridItem key={i} colSpan={[2, 2, 2, 1]}>
                <BlogCard />
              </GridItem>
            ))}
        </Grid>
      </Center>
    </Layout>
  );
};

export default IndexPage;
