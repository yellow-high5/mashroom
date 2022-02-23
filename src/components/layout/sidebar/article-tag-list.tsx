import { Flex, FlexProps, Tag, Text } from '@chakra-ui/react';
import SideHeading from 'components/common/side-heading';
import React from 'react';

const ArticleTagList: React.FC<FlexProps> = (props) => {
  return (
    <Flex flexDir="column" alignItems="center" {...props}>
      <SideHeading>記事タグ</SideHeading>
      <Flex wrap="wrap" justifyContent="center">
        {[
          'Web開発',
          'サーバーサイド',
          'インフラ構築',
          '創作ネタ帳',
          'コラム',
          'ANGLAB',
          'CG活',
        ].map((name) => (
          <Tag
            key={name}
            size="sm"
            variant="outline"
            m={1}
            p={2}
            cursor="pointer"
            _hover={{ bg: 'gray.500', color: 'white' }}
          >
            <Text fontWeight="bold">{name}</Text>
          </Tag>
        ))}
      </Flex>
    </Flex>
  );
};

export default ArticleTagList;
