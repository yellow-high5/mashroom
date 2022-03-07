import theme from '@chakra-ui/gatsby-plugin/theme';
import { Box, chakra, ChakraProvider, Heading, HStack, Icon, Text, VStack } from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';
import blogComponents from 'components/blog/blog-components';
import Layout from 'components/layout';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import { Helmet } from 'react-helmet';
import { getWorkIcon } from 'utils/format';

export const getWorkData = graphql`
  query WorkData($slug: String!) {
    mdx(id: { eq: $slug }) {
      id
      body
      frontmatter {
        title
        thumbnail
        date(formatString: "YYYY/MM/DD")
        tag
      }
      timeToRead
      headings(depth: h2) {
        value
      }
      wordCount {
        words
      }
    }
  }
`;

type Props = {
  data: Gatsby.WorkDataQuery;
};

const WorkTemplate: React.FC<Props> = ({ data }) => {
  return (
    <ChakraProvider theme={theme}>
      <Helmet title={data.mdx?.frontmatter?.title} />

      <Layout>
        <MDXProvider components={blogComponents}>
          <Box m={6} pb={32}>
            <VStack mb={12}>
              <HStack mb={4}>
                <Icon
                  boxSize={4}
                  as={getWorkIcon(data.mdx?.frontmatter?.tag?.[0] || '')}
                  cursor="pointer"
                />
                <Text fontSize="xs">
                  {data.mdx?.frontmatter?.tag}: {data.mdx?.frontmatter?.date}
                </Text>
              </HStack>
              <Heading size="lg" pb={4}>
                {data.mdx?.frontmatter?.title}
              </Heading>
              {data.mdx?.frontmatter?.thumbnail && (
                <chakra.img src={data.mdx?.frontmatter?.thumbnail} />
              )}
            </VStack>

            {data.mdx && <MDXRenderer>{data.mdx.body}</MDXRenderer>}
          </Box>
        </MDXProvider>
      </Layout>
    </ChakraProvider>
  );
};

export default WorkTemplate;
