import { Stack, StackProps, Text } from '@chakra-ui/react';
import { Link } from 'gatsby';
import React from 'react';

const Navigation: React.FC<StackProps> = (props: StackProps) => {
  return (
    <Stack
      direction={{ base: 'column', md: 'row' }}
      display="block"
      width="auto"
      alignItems="center"
      justifyContent="space-around"
      minW="360px"
      mt={{ base: 24, md: 4 }}
      {...props}
    >
      <Link to="/">
        <Text
          fontWeight="bold"
          mx={4}
          py={{ base: 4, md: 0 }}
          _hover={{ color: 'yellow.400', textDecoration: 'underline' }}
        >
          Blog
        </Text>
      </Link>
      <Link to="/works">
        <Text
          fontWeight="bold"
          mx={4}
          py={{ base: 4, md: 0 }}
          _hover={{ color: 'yellow.400', textDecoration: 'underline' }}
        >
          Works
        </Text>
      </Link>
      <Link to="/profile">
        <Text
          fontWeight="bold"
          mx={4}
          py={{ base: 4, md: 0 }}
          _hover={{ color: 'yellow.400', textDecoration: 'underline' }}
        >
          Profile
        </Text>
      </Link>
    </Stack>
  );
};

export default Navigation;
