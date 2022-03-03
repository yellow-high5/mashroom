import { Text, TextProps } from '@chakra-ui/react';
import React from 'react';

export const Paragraph: React.FC<TextProps> = (props) => {
  return <Text fontSize="0.9rem" lineHeight={2.4} {...props} />;
};
