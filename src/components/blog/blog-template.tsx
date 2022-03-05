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
import blogComponents from 'components/blog/blog-components';
import Footer from 'components/layout/footer';
import Header from 'components/layout/header';
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
        date(formatString: "YYYY/MM/DD")
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
        <GridItem colSpan={[4, 4, 3, 3]} pb={32}>
          <MDXProvider components={blogComponents}>
            <Box m={6}>
              <VStack mb={12}>
                <HStack mb={4}>
                  <HStack>
                    <Icon boxSize={4} as={IoTimeOutline} cursor="pointer" />
                    <Text fontSize="xs">{data.mdx?.frontmatter?.date}</Text>
                  </HStack>
                  <Spacer />
                  <HStack>
                    <Icon boxSize={4} as={IoStopwatchOutline} cursor="pointer" />
                    <Text fontSize="xs">12min</Text>
                  </HStack>
                </HStack>
                <blogComponents.h1>{data.mdx?.frontmatter?.title}</blogComponents.h1>
              </VStack>

              {data.mdx && <MDXRenderer>{data.mdx.body}</MDXRenderer>}
            </Box>
          </MDXProvider>
        </GridItem>
        <GridItem colSpan={[4, 4, 1, 1]}>
          <Box mt={4} p={4} display={{ base: 'none', md: 'block' }}>
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
