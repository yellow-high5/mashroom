import { Button, HStack, Spacer } from '@chakra-ui/react';
import React from 'react';
import { IoCaretBackCircle, IoCaretForwardCircle } from 'react-icons/io5';

type Props = {
  page: number;
  onChange: (page: number) => void;
  skip: number;
  total: number;
};

const BlogPageChanger: React.FC<Props> = (props: Props) => {
  const { page, onChange, skip, total } = props;

  return (
    <HStack p={8}>
      <Button
        leftIcon={<IoCaretBackCircle />}
        size="sm"
        variant="link"
        onClick={() => onChange(page - 1)}
        display={page === 0 ? 'none' : 'block'}
      >
        前のページ
      </Button>

      <Spacer />

      <Button
        rightIcon={<IoCaretForwardCircle />}
        size="sm"
        variant="link"
        onClick={() => onChange(page + 1)}
        display={(page + 1) * skip >= total ? 'none' : 'block'}
      >
        次のページ
      </Button>
    </HStack>
  );
};

export default BlogPageChanger;
