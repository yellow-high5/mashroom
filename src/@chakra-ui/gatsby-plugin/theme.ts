import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const shadows = {
  outline: 'none',
};

const styles = {
  global: {
    hr: {
      my: 16,
    },
  },
};

const theme = extendTheme({
  config,
  shadows,
  styles,
});

export default theme;
