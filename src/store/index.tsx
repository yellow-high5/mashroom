import theme from '@chakra-ui/gatsby-plugin/theme';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { SearchBlogProvider } from 'store/serach-blog-store';

type Props = {
  children: React.ReactNode;
};

const AppProvider: React.FC<Props> = (props: Props) => {
  return (
    <ChakraProvider theme={theme}>
      <SearchBlogProvider>{props.children}</SearchBlogProvider>
    </ChakraProvider>
  );
};

export default AppProvider;
