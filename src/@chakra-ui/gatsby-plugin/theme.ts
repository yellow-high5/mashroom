import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const theme = extendTheme({
  // colors: {
  //   primary: 'rebeccapurple',
  // },
  config,
});

export default theme;
