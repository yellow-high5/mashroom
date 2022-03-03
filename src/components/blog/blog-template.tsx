import theme from '@chakra-ui/gatsby-plugin/theme';
import {
  Box,
  chakra,
  ChakraProvider,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { Paragraph } from 'components/blog/blog-components';
import Footer from 'components/layout/footer';
import Header from 'components/layout/header';
import dayjs from 'dayjs';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React, { useState } from 'react';
import { IoStopwatchOutline, IoTimeOutline } from 'react-icons/io5';

export const getBlogData = graphql`
  query BlogData($slug: String!) {
    mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        title
        thumbnail
        date
      }
    }
  }
`;

type Props = {
  data: Gatsby.BlogDataQuery;
};

const BlogTemplate: React.FC<Props> = ({ data }) => {
  const [showHeader, setShowHeader] = useState(true);
  useScrollPosition(({ prevPos, currPos }) => {
    const visible = currPos.y > prevPos.y;
    setShowHeader(visible);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Header display={showHeader ? 'flex' : 'none'} />

      <Grid templateColumns="repeat(4, 1fr)" gap={4} maxW="62em" pt={28} m="auto">
        <GridItem colSpan={[4, 4, 3, 3]}>
          <MDXProvider
            components={{
              p: Paragraph,
            }}
          >
            <Box m={6}>
              <VStack mb={6}>
                <HStack mb={2}>
                  <HStack>
                    <Icon boxSize={4} as={IoTimeOutline} cursor="pointer" />
                    <Text fontSize="xs">
                      {dayjs(data.mdx?.frontmatter?.date).format('YYYY/MM/DD')}
                    </Text>
                  </HStack>
                  <Spacer />
                  <HStack>
                    <Icon boxSize={4} as={IoStopwatchOutline} cursor="pointer" />
                    <Text fontSize="xs">12min</Text>
                  </HStack>
                </HStack>
                <Heading size="lg" pl={4}>
                  {data.mdx?.frontmatter?.title}
                </Heading>
              </VStack>

              {data.mdx && <MDXRenderer>{data.mdx.body}</MDXRenderer>}
            </Box>
          </MDXProvider>
        </GridItem>
        <GridItem colSpan={[4, 4, 1, 1]}>
          <Box mt={4} p={4}>
            <Heading mb={6} size="sm">
              Index
            </Heading>
            {data.mdx?.frontmatter?.thumbnail && (
              <chakra.img src={data.mdx.frontmatter.thumbnail} width="100%" />
            )}
          </Box>
        </GridItem>
      </Grid>

      <Footer />
    </ChakraProvider>
  );
};

export default BlogTemplate;
