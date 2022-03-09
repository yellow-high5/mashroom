import { extendTheme } from '@chakra-ui/react';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';
import { Dict } from '@chakra-ui/utils';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const shadows = {
  outline: 'none',
};

const styles = {
  global: (props: Dict | StyleFunctionProps) => ({
    body: {
      bg: mode('#ffffff', '#001025')(props),
    },
    hr: {
      my: 16,
    },
  }),
};

const theme = extendTheme({
  config,
  shadows,
  styles,
});

export default theme;
