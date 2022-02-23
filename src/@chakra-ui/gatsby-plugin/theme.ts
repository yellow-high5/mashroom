import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const shadows = {
  outline: 'none',
};

const theme = extendTheme({
  config,
  shadows,
});

export default theme;
