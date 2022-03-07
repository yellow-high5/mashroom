import {
  AspectRatio,
  Box,
  BoxProps,
  chakra,
  ScaleFade,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'gatsby';
import React from 'react';

type Props = { slug?: string | null; frontmatter?: Gatsby.MdxFrontmatter | null } & BoxProps;

const WorkItem: React.FC<Props> = (props: Props) => {
  const { slug, frontmatter } = props;

  const shadowColor = useColorModeValue('black', 'white');

  return (
    <ScaleFade
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
        <Link to={`/works/${slug}`} role="group">
          {frontmatter?.thumbnail && (
            <AspectRatio
              ratio={1}
              cursor="pointer"
              w={180}
              _groupHover={{
                opacity: 0.5,
                borderRadius: '50%',
                boxShadow: `1px 1px 4px ${shadowColor}`,
              }}
            >
              <chakra.img
                src={frontmatter.thumbnail}
                alt={frontmatter?.title}
                width={240}
                borderRadius="50%"
                overflow="hidden"
              />
            </AspectRatio>
          )}
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
              fontWeight="bold"
              lineHeight="tight"
              textAlign="center"
              p={4}
            >
              {frontmatter?.title}
            </Text>
            <Text fontSize="xs" textAlign="center">
              {frontmatter?.tag}
            </Text>
          </Box>
        </Link>
      </Box>
    </ScaleFade>
  );
};

export default WorkItem;
