import { AspectRatio, Box, SlideFade, Text } from '@chakra-ui/react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const WorkItem = () => {
  const work = {
    thumbnail: '',
    title: 'ミスドセット',
    kind: 'CG-Work',
  };

  return (
    <SlideFade
      in
      transition={{
        enter: { delay: 0.4 },
        exit: { delay: 0.4 },
      }}
    >
      <Box
        w="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        overflow="hidden"
        p={{ base: 2, lg: 4 }}
        position="relative"
      >
        <Link to="/profile" role="group">
          <AspectRatio
            ratio={1}
            cursor="pointer"
            w={180}
            _groupHover={{
              opacity: 0.5,
            }}
          >
            <StaticImage
              src="../../assets/sample-work-thumbnail.png"
              alt={work.title}
              style={{ borderRadius: '50%', overflow: 'hidden' }}
            />
          </AspectRatio>
          <Box
            w="100%"
            top="50%"
            left="0%"
            transform="translateY(-50%)"
            position="absolute"
            display="none"
            _groupHover={{
              display: 'block',
            }}
          >
            <Text
              fontSize="sm"
              fontStyle="italic"
              fontWeight="semibold"
              lineHeight="tight"
              textAlign="center"
              p={4}
            >
              {work.title}
            </Text>
            <Text fontSize="xs" textAlign="center">
              {work.kind}
            </Text>
          </Box>
        </Link>
      </Box>
    </SlideFade>
  );
};

export default WorkItem;
