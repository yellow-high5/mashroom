import {
  Box,
  chakra,
  Heading,
  HStack,
  Icon,
  SlideFade,
  Tag,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'gatsby';
import React from 'react';
import { IoTimeOutline } from 'react-icons/io5';

type Props = {
  slug?: string | null;
  title?: string;
  thumbnail?: string | null;
  tag?: (string | null)[] | null;
  date?: string | null;
};

const BlogCard: React.FC<Props> = (props: Props) => {
  const { slug, title, thumbnail, tag, date } = props;

  const grayColor = useColorModeValue('gray.800', 'gray.200');
  const shadowColor = useColorModeValue('rgba(0,0,0,.25)', 'rgb(255, 255, 255, .25)');

  return (
    <SlideFade
      in
      transition={{
        enter: { delay: 0.4 },
        exit: { delay: 0.4 },
      }}
    >
      <Link to={`/blog/${slug}`} role="group">
        <Box
          as="article"
          maxW={{
            base: 'md',
            lg: 'xs',
          }}
          m="auto"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          cursor="pointer"
          _hover={{ boxShadow: `1px 1px 4px ${shadowColor}` }}
          display={{
            base: 'flex',
            lg: 'block',
          }}
          alignItems="center"
        >
          <Box position="relative">
            {/* 画像がない場合は大体を用意しておく */}
            {thumbnail && <chakra.img src={thumbnail} alt="thumbnail" />}
            <HStack
              display={{ base: 'none', lg: 'flex' }}
              position="absolute"
              top={1}
              left={2}
              wrap="wrap"
            >
              {tag?.map((t, i) => (
                <Tag key={i} size="sm" variant="solid" border="1px solid white" px={2} py={1} m={1}>
                  <Text fontSize="small" fontWeight="bold">
                    {t}
                  </Text>
                </Tag>
              ))}
            </HStack>
          </Box>

          <Box p={{ base: 3, lg: 6 }}>
            <HStack>
              <HStack>
                <Icon boxSize={4} as={IoTimeOutline} cursor="pointer" />
                <Text fontSize="xs">{date}</Text>
              </HStack>
            </HStack>

            <Box>
              <Heading
                w={240}
                mt={2}
                fontSize="md"
                fontWeight="semibold"
                lineHeight="tight"
                as="h4"
                isTruncated
                _groupHover={{
                  bgGradient: 'linear(to-r, yellow.300, yellow.500)',
                  bgClip: 'text',
                }}
                _before={{
                  bg: grayColor,
                  content: '"\\a0"',
                  height: '0.5px',
                  flexGrow: 1,
                  mr: 2,
                }}
              >
                {title}
              </Heading>
            </Box>

            <HStack wrap="wrap">
              {tag?.map((t, i) => (
                <Tag
                  key={i}
                  display={{ base: 'flex', lg: 'none' }}
                  size="sm"
                  variant="solid"
                  border="1px solid white"
                  px={2}
                  py={1}
                  m={1}
                >
                  <Text fontSize="x-small" fontWeight="bold">
                    {t}
                  </Text>
                </Tag>
              ))}
            </HStack>
          </Box>
        </Box>
      </Link>
    </SlideFade>
  );
};

export default BlogCard;
