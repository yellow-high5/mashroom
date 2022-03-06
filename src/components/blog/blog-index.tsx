import {
  Box,
  BoxProps,
  chakra,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
} from '@chakra-ui/react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import React from 'react';
import { IoLinkOutline } from 'react-icons/io5';

type Props = {
  frontmatter?: Gatsby.MdxFrontmatter | null;
  headings?: (Gatsby.MdxHeadingMdx | null)[] | null;
} & BoxProps;

const BlogIndex: React.FC<Props> = (props: Props) => {
  const { frontmatter, headings, ...boxProps } = props;

  return (
    <Box
      // mt={4}
      // ml={4}
      // p={4}
      // display={{ base: 'none', md: 'block' }}
      // position="fixed"
      // top={!showHeader ? 0 : undefined}
      {...boxProps}
    >
      {frontmatter?.thumbnail && (
        <chakra.img src={frontmatter.thumbnail} width="240px" mb={6} borderRadius={4} />
      )}
      <Box ml={4}>
        <Heading size="sm">Index</Heading>
        <List mt={4} spacing={4}>
          {headings?.map((heading, index) => (
            <ListItem key={`index-${index}`}>
              <Flex>
                <ListIcon as={IoLinkOutline} />
                <AnchorLink to={`#${heading?.value}`}>
                  <Text fontSize="xs" _hover={{ color: 'yellow.400' }}>
                    {heading?.value}
                  </Text>
                </AnchorLink>
              </Flex>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default BlogIndex;
