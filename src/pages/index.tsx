import { Center, Grid, GridItem } from '@chakra-ui/react';
import BlogCard from 'components/blog/blog-card';
import PageChanger from 'components/common/page-changer';
import Layout from 'components/layout';
import { useBlogList } from 'hooks';
import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';

const IndexPage = () => {
  //const limit = useBreakpointValue({ base: 7, lg: 6 });

  const blogList = useBlogList();

  const [filterTag] = useState();
  const filteredBlogList = useMemo(() => {
    if (!filterTag) {
      return blogList;
    }
    return blogList.filter((item) => item.node.frontmatter?.tag?.includes(filterTag));
  }, []);

  const total = filteredBlogList.length;
  const [page, setPage] = useState(0);
  const skip = 6;

  return (
    <Layout>
      <Helmet title="m@shroom" />

      <Center display="block">
        <Grid templateColumns="repeat(2, 1fr)" gap={4} pt={8} m="auto">
          {filteredBlogList.slice(page * skip, (page + 1) * skip).map((item, index) => (
            <GridItem key={`${index}`} colSpan={[2, 2, 2, 1]} justifyContent="center">
              <BlogCard
                slug={item.node.id}
                title={item.node.frontmatter?.title}
                tag={item.node.frontmatter?.tag}
                thumbnail={item.node.frontmatter?.thumbnail}
                date={item.node.frontmatter?.date}
              />
            </GridItem>
          ))}
          <GridItem colSpan={2} mt={12}>
            <PageChanger page={page} onChange={setPage} skip={skip} total={total} />
          </GridItem>
        </Grid>
      </Center>
    </Layout>
  );
};

export default IndexPage;
