import { HStack, Icon, Spacer, StackProps, Text, VStack } from '@chakra-ui/react';
import mdxComponents from 'components/mdx/mdx-components';
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
      <mdxComponents.h1>{frontmatter?.title}</mdxComponents.h1>
    </VStack>
  );
};

export default BlogHeading;
