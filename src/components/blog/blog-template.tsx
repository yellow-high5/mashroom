import theme from '@chakra-ui/gatsby-plugin/theme';
import { Box, ChakraProvider, Grid, GridItem } from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import BlogHeading from 'components/blog/blog-heading';
import BlogIndex from 'components/blog/blog-index';
import Footer from 'components/layout/footer';
import Header from 'components/layout/header';
import AuthorIntro from 'components/layout/sidebar/author-intro';
import mdxComponents from 'components/mdx/mdx-components';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

export const getBlogData = graphql`
  query BlogData($slug: String!) {
    mdx(id: { eq: $slug }) {
      id
      body
      frontmatter {
        title
        thumbnail
        date(formatString: "YYYY/MM/DD")
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
  data: Gatsby.BlogDataQuery;
};

const BlogTemplate: React.FC<Props> = ({ data }) => {
  const [hideHeader, setHideHeader] = useState(false);
  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y > -20) {
      setHideHeader(false);
      return;
    }
    const hidden = currPos.y < prevPos.y;
    setHideHeader(hidden);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Helmet title={data.mdx?.frontmatter?.title} />

      <Header isHide={hideHeader} showScrollProgress />

      <Grid templateColumns="repeat(4, 1fr)" gap={4} maxW="62em" pt={28} m="auto">
        <GridItem colSpan={[4, 4, 3, 3]}>
          <MDXProvider components={mdxComponents}>
            <Box m={{ base: 3, sm: 6 }} pb={32}>
              <BlogHeading
                frontmatter={data.mdx?.frontmatter}
                wordCount={data.mdx?.wordCount}
                mb={12}
              />

              {data.mdx && <MDXRenderer>{data.mdx.body}</MDXRenderer>}
            </Box>
          </MDXProvider>
          <AuthorIntro mx={4} mb={16} isFlex />
        </GridItem>
        <GridItem colSpan={[4, 4, 1, 1]}>
          <BlogIndex
            slug={data.mdx?.id}
            frontmatter={data.mdx?.frontmatter}
            headings={data.mdx?.headings}
            mx={4}
            my={4}
            p={4}
            display={{ base: 'none', md: 'block' }}
            position="fixed"
            top={hideHeader ? 0 : undefined}
          />
        </GridItem>
      </Grid>

      <Footer />
    </ChakraProvider>
  );
};

export default BlogTemplate;
