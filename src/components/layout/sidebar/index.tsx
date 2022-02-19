import { Box } from '@chakra-ui/react';
import ArticleTagList from 'components/layout/sidebar/article-tag-list';
import AuthorMusic from 'components/layout/sidebar/author-music';
import React from 'react';
import AuthorIntro from './author-intro';

const Sidebar = () => {
  return (
    <Box textAlign="center">
      <AuthorIntro />
      <ArticleTagList />
      <AuthorMusic />
    </Box>
  );
};

export default Sidebar;
