import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react';
import BlogCard from 'components/blog/blog-card';
import BlogPageChanger from 'components/blog/blog-page-changer';
import { navigate } from 'gatsby';
import { useBlogList } from 'hooks';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { SearchBlogContext } from 'store/serach-blog-store';

type Props = {
  initialTag?: string;
};

const BlogCardGrid: React.FC<Props> = (props: Props) => {
  const blogList = useBlogList();

  const [page, setPage] = useState(0);
  const skip = 8;

  const isMobile = useBreakpointValue({ base: true, sm: false });

  const { dispatch, state } = useContext(SearchBlogContext);
  useEffect(() => {
    if (props.initialTag) {
      dispatch({ type: 'filter', tag: props.initialTag });
    } else {
      dispatch({ type: 'clear' });
    }
  }, [props.initialTag]);
  const filterTag = state.tag;

  const filteredBlogList = useMemo(() => {
    setPage(0);
    if (!filterTag) {
      return blogList;
    }
    return blogList.filter((item) => item.node.frontmatter?.tag?.includes(filterTag));
  }, [filterTag]);
  const total = filteredBlogList.length;

  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      gap={{ base: 1, sm: 4 }}
      m={'auto'}
      pt={{ base: 4, sm: 8 }}
    >
      {filterTag && (
        <GridItem colSpan={2} mb={4}>
          <Flex justifyContent="center">
            <Heading size="sm" textAlign="center">{`🔍 記事タグ: "${filterTag}"`}</Heading>
            <IconButton
              aria-label="clear"
              icon={<Icon as={IoCloseOutline} />}
              variant="link"
              onClick={() => {
                dispatch({ type: 'clear' });
                navigate('/');
              }}
            />
          </Flex>
        </GridItem>
      )}
      {isMobile
        ? filteredBlogList.map((item, index) => (
            <GridItem key={`${index}`} colSpan={[2, 2, 2, 1]} justifyContent="center">
              <BlogCard
                slug={item.node.id}
                title={item.node.frontmatter?.title}
                tag={item.node.frontmatter?.tag}
                thumbnail={item.node.frontmatter?.thumbnail}
                date={item.node.frontmatter?.date}
              />
            </GridItem>
          ))
        : filteredBlogList.slice(page * skip, (page + 1) * skip).map((item, index) => (
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
      {!isMobile && (
        <GridItem colSpan={2}>
          <BlogPageChanger page={page} onChange={setPage} skip={skip} total={total} />
        </GridItem>
      )}
    </Grid>
  );
};

export default BlogCardGrid;
