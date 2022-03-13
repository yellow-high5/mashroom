import {
  AspectRatio,
  chakra,
  Heading,
  HStack,
  Icon,
  Spacer,
  StackProps,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { IoStopwatchOutline, IoTimeOutline } from 'react-icons/io5';
import { getMinutesToRead } from 'utils/format';

type Props = {
  frontmatter?: Gatsby.MdxFrontmatter | null;
  wordCount?: Gatsby.MdxWordCount | null;
} & StackProps;

const BlogHeading: React.FC<Props> = (props: Props) => {
  const { frontmatter, wordCount, ...vstackProps } = props;

  return (
    <VStack {...vstackProps}>
      <HStack mb={4}>
        <HStack>
          <Icon boxSize={4} as={IoTimeOutline} cursor="pointer" />
          <Text fontSize="xs">{frontmatter?.date}</Text>
        </HStack>
        <Spacer />
        <HStack>
          <Icon boxSize={4} as={IoStopwatchOutline} cursor="pointer" />
          <Text fontSize="xs">{getMinutesToRead(wordCount?.words)}</Text>
        </HStack>
      </HStack>
      <Heading fontSize={{ base: '1.375rem', md: '1.75rem' }} pb={4}>
        {frontmatter?.title}
      </Heading>
      <AspectRatio minW="100%" ratio={16 / 9} display={{ base: 'block', md: 'none' }}>
        {frontmatter?.thumbnail && <chakra.img src={frontmatter.thumbnail} alt="thumbnail" />}
      </AspectRatio>
    </VStack>
  );
};

export default BlogHeading;
