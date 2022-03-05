import { Center, Grid, GridItem } from '@chakra-ui/react';
import BlogCard from 'components/blog/blog-card';
import Layout from 'components/layout';
import { useBlogList } from 'hooks';
import React from 'react';

const IndexPage = () => {
  //const limit = useBreakpointValue({ base: 7, lg: 6 });

  const blogList = useBlogList();

  return (
    <Layout>
      <Center>
        <Grid templateColumns="repeat(2, 1fr)" gap={4} pt={8} m="auto">
          {blogList.map((item, index) => (
            <GridItem key={`${index}`} colSpan={[2, 2, 2, 1]}>
              <BlogCard
                slug={item.node.id}
                title={item.node.frontmatter?.title}
                tag={item.node.frontmatter?.tag}
                thumbnail={item.node.frontmatter?.thumbnail}
                date={item.node.frontmatter?.date}
              />
            </GridItem>
          ))}
        </Grid>
      </Center>
    </Layout>
  );
};

export default IndexPage;
