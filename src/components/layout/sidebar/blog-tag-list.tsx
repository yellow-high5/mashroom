import { Flex, FlexProps, Tag, Text } from '@chakra-ui/react';
import SideHeading from 'components/common/side-heading';
import { navigate } from 'gatsby';
import { useBlogTagList } from 'hooks';
import React, { useContext } from 'react';
import { SearchBlogContext } from 'store/serach-blog-store';

const BlogTagList: React.FC<FlexProps> = (props) => {
  const tagList = useBlogTagList();

  const { state, dispatch } = useContext(SearchBlogContext);

  const isSelected = (name: string): boolean => {
    return state.tag === name;
  };

  const handleClick = (name: string) => {
    navigate('/', { state: { tag: name } });
    if (isSelected(name)) {
      dispatch({ type: 'clear' });
      return;
    }
    dispatch({ type: 'filter', tag: name });
  };

  return (
    <Flex flexDir="column" alignItems="center" {...props}>
      <SideHeading>記事タグ</SideHeading>
      <Flex wrap="wrap" justifyContent="center">
        {tagList.map((name) => (
          <Tag
            key={name}
            size="sm"
            variant="outline"
            m={1}
            p={2}
            cursor="pointer"
            bg={isSelected(name) ? 'gray.500' : undefined}
            color={isSelected(name) ? 'white' : undefined}
            _hover={{ bg: 'gray.500', color: 'white' }}
            onClick={() => handleClick(name)}
          >
            <Text fontWeight="bold">{name}</Text>
          </Tag>
        ))}
      </Flex>
    </Flex>
  );
};

export default BlogTagList;
