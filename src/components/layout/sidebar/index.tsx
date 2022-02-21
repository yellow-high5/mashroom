import { Box, BoxProps } from '@chakra-ui/react';
import ArticleTagList from 'components/layout/sidebar/article-tag-list';
import AuthorMusic from 'components/layout/sidebar/author-music';
import React from 'react';
import AuthorIntro from './author-intro';

const Sidebar: React.FC<BoxProps> = (props) => {
  return (
    <Box textAlign="center" {...props}>
      <AuthorIntro mx={4} my={8} />
      <ArticleTagList mx={4} my={16} />
      <AuthorMusic mx={4} my={16} />
    </Box>
  );
};

export default Sidebar;
