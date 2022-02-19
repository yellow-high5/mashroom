import { Flex, Tag, Text } from '@chakra-ui/react';
import React from 'react';

const ArticleTagList = () => {
  return (
    <Flex flexDir="column" alignItems="center" m={4}>
      <Text fontWeight="bold" mb={4}>
        記事タグ
      </Text>
      <Flex wrap="wrap" justifyContent="center">
        {[
          'Web開発',
          'サーバーサイド',
          'インフラ構築',
          '実装ネタ帳',
          'コラム',
          'ANGLAB',
          'CG活',
        ].map((name) => (
          <Tag key={name} size="sm" variant="solid" m={1}>
            {name}
          </Tag>
        ))}
      </Flex>
    </Flex>
  );
};

export default ArticleTagList;
