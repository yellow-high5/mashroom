import {
  Box,
  Heading,
  HStack,
  Icon,
  LinkBox,
  LinkOverlay,
  SlideFade,
  Tag,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { IoTimeOutline } from 'react-icons/io5';

const BlogCard = () => {
  const article = {
    thumbnail: '../../assets/thumbnail-sample.png',
    title: 'ANGLab -カワハギ攻略への道-',
    tag: 'ANGLAB',
  };
  const grayColor = useColorModeValue('gray.800', 'gray.200');

  return (
    <SlideFade
      in
      transition={{
        enter: { delay: 0.4 },
        exit: { delay: 0.4 },
      }}
    >
      <LinkBox
        as="article"
        maxW={{
          base: 'md',
          lg: 'xs',
        }}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        cursor="pointer"
        _hover={{ borderColor: grayColor }}
        display={{
          base: 'flex',
          lg: 'block',
        }}
        alignItems="center"
      >
        <Box position="relative">
          <StaticImage src="../../assets/thumbnail-sample.png" alt={article.title} />
          <HStack
            position="absolute"
            top={1}
            left={2}
            wrap="wrap"
            display={{ base: 'none', lg: 'block' }}
          >
            <Tag size="sm" variant="solid" border="1px solid white" px={2} py={1} m={1}>
              <Text fontSize="small" fontWeight="bold">
                {article.tag}
              </Text>
            </Tag>
          </HStack>
        </Box>

        <Box p={{ base: 3, lg: 6 }}>
          <HStack>
            <HStack>
              <Icon boxSize={4} as={IoTimeOutline} cursor="pointer" />
              <Text fontSize="xs">12/01 2021</Text>
            </HStack>
          </HStack>

          <Box>
            <Link to="/profile">
              <LinkOverlay>
                <Heading
                  mt={2}
                  fontSize="md"
                  fontWeight="semibold"
                  lineHeight="tight"
                  as="h4"
                  isTruncated
                  _hover={{ color: 'yellow.400' }}
                  _before={{
                    bg: grayColor,
                    content: '"\\a0"',
                    height: '0.5px',
                    flexGrow: 1,
                    mr: 2,
                  }}
                >
                  {article.title}
                </Heading>
              </LinkOverlay>
            </Link>
          </Box>

          <HStack wrap="wrap">
            <Tag
              size="sm"
              variant="solid"
              border="1px solid white"
              px={2}
              py={1}
              m={1}
              display={{ base: 'block', lg: 'none' }}
            >
              <Text fontSize="x-small" fontWeight="bold">
                {article.tag}
              </Text>
            </Tag>
          </HStack>
        </Box>
      </LinkBox>
    </SlideFade>
  );
};

export default BlogCard;
