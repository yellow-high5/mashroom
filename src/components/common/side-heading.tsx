import { Heading, HeadingProps } from '@chakra-ui/react';
import React from 'react';

const SideHeading: React.FC<HeadingProps> = (props) => {
  return (
    <Heading
      size="xs"
      width="100%"
      display="flex"
      mb={4}
      _before={{
        alignSelf: 'center',
        bg: 'gray.200',
        content: '"\\a0"',
        height: '1px',
        flexGrow: 1,
        mr: 4,
      }}
      _after={{
        alignSelf: 'center',
        bg: 'gray.200',
        content: '"\\a0"',
        height: '1px',
        flexGrow: 1,
        ml: 4,
      }}
      {...props}
    />
  );
};

export default SideHeading;
