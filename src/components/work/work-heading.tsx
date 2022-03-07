import { chakra, HStack, Icon, StackProps, Text, VStack } from '@chakra-ui/react';
import mdxComponents from 'components/mdx/mdx-components';
import React from 'react';
import { getWorkIcon } from 'utils/format';

type Props = {
  frontmatter?: Gatsby.MdxFrontmatter | null;
} & StackProps;

const WorkHeading: React.FC<Props> = (props: Props) => {
  const { frontmatter, ...vstackProps } = props;

  return (
    <VStack {...vstackProps}>
      <HStack mb={4}>
        <Icon boxSize={4} as={getWorkIcon(frontmatter?.tag?.[0] || '')} cursor="pointer" />
        <Text fontSize="xs">
          {frontmatter?.tag}: {frontmatter?.date}
        </Text>
      </HStack>
      <mdxComponents.h1 pb={4}>{frontmatter?.title}</mdxComponents.h1>
      {frontmatter?.thumbnail && <chakra.img src={frontmatter?.thumbnail} />}
    </VStack>
  );
};

export default WorkHeading;
