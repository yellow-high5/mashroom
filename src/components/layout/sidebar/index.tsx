import { Box, BoxProps } from '@chakra-ui/react';
import AuthorIntro from 'components/layout/sidebar/author-intro';
import AuthorMusic from 'components/layout/sidebar/author-music';
import BlogTagList from 'components/layout/sidebar/blog-tag-list';
import React from 'react';

const Sidebar: React.FC<BoxProps> = (props) => {
  return (
    <Box textAlign="center" {...props}>
      <AuthorIntro mx={4} my={8} />
      <BlogTagList mx={4} my={16} />
      <AuthorMusic mx={4} my={16} />
    </Box>
  );
};

export default Sidebar;
