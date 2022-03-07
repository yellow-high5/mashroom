import theme from '@chakra-ui/gatsby-plugin/theme';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';
import Layout from 'components/layout';
import mdxComponents from 'components/mdx/mdx-components';
import WorkHeading from 'components/work/work-heading';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import { Helmet } from 'react-helmet';

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
        <MDXProvider components={mdxComponents}>
          <Box m={6} pb={32}>
            <WorkHeading frontmatter={data.mdx?.frontmatter} mb={12} />

            {data.mdx && <MDXRenderer>{data.mdx.body}</MDXRenderer>}
          </Box>
        </MDXProvider>
      </Layout>
    </ChakraProvider>
  );
};

export default WorkTemplate;
