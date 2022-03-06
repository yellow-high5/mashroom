import {
  Box,
  BoxProps,
  Code,
  CodeProps,
  Divider,
  DividerProps,
  Heading,
  HeadingProps,
  HStack,
  Icon,
  Image,
  ImageProps,
  Link,
  LinkProps,
  ListItem,
  ListItemProps,
  ListProps,
  OrderedList,
  Table,
  TableProps,
  Td,
  Text,
  TextProps,
  Th,
  Tr,
  UnorderedList,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { tomorrowNightBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { getFileIcon } from 'utils/format';

const Wrapper: React.FC<BoxProps> = (props) => {
  return <Box {...props} />;
};

const Paragraph: React.FC<TextProps> = (props) => {
  return <Text fontSize="0.9rem" lineHeight={2.4} {...props} />;
};

const Heading1: React.FC<HeadingProps> = (props) => {
  return <Heading as="h1" fontSize="1.75rem" lineHeight={1.8} {...props} />;
};

const Heading2: React.FC<HeadingProps> = (props) => {
  return (
    <Heading
      as="h2"
      id={props.children as string}
      fontSize="1.25rem"
      lineHeight={1.8}
      borderLeft="0.5rem solid"
      pl={4}
      py={2}
      mt={20}
      mb={6}
      {...props}
    />
  );
};

const Heading3: React.FC<HeadingProps> = (props) => {
  return <Heading as="h3" fontSize="1.125rem" lineHeight={1.8} my={6} {...props} />;
};

const Heading4: React.FC<HeadingProps> = (props) => {
  return <Heading as="h4" fontSize="1rem" lineHeight={1.8} my={6} {...props} />;
};

const Heading5: React.FC<HeadingProps> = (props) => {
  return <Heading as="h5" fontSize="0.95rem" lineHeight={1.8} my={6} {...props} />;
};

const Heading6: React.FC<HeadingProps> = (props) => {
  return <Heading as="h6" fontSize="0.925rem" lineHeight={1.8} my={6} {...props} />;
};

const ThematicBreak: React.FC = () => {
  return (
    <>
      <br />
      <br />
      <br />
    </>
  );
};

const BlockQuote: React.FC<BoxProps> = (props) => {
  const bgColor = useColorModeValue('gray.100', 'gray.700');
  const borderColor = useColorModeValue('yellow.500', 'yellow.400');
  return (
    <Box
      borderLeft="12px solid"
      borderColor={borderColor}
      borderRadius={8}
      boxShadow="1px 1px 4px #E2E8F0"
      bgColor={bgColor}
      p={4}
      mx={4}
      my={8}
      {...props}
    />
  );
};

const ListText: React.FC<ListProps> = (props) => {
  return <UnorderedList spacing={4} my={4} pl={4} {...props} />;
};

const OrderedListText: React.FC<ListProps> = (props) => {
  return <OrderedList spacing={4} my={4} pl={4} {...props} />;
};

const ListItemText: React.FC<ListItemProps> = (props) => {
  return <ListItem fontSize="0.875rem" lineHeight={2} {...props} />;
};

const TableContent: React.FC<TableProps> = (props) => {
  return <Table size="sm" fontSize="0.75rem" lineHeight={2} my={12} {...props} />;
};

const Pre: React.FC<BoxProps> = (props) => {
  return <Box my={8} {...props} />;
};

const CodeContent: React.FC<CodeProps> = ({ className, ...props }) => {
  const match = /language-(\w+)/.exec(className || '');
  const language = match ? match[1] : undefined;
  const fileIcon = getFileIcon(language);
  const fileName = className?.split(':')?.[1];

  return (
    <Box>
      {fileName && (
        <HStack
          alignItems="center"
          ml={2}
          py={2}
          px={4}
          bgColor="#09192e"
          borderBottom="1px"
          maxW="fit-content"
        >
          {fileIcon && <Icon color="white" boxSize={4} as={fileIcon} mr={1} />}
          <Text color="white" fontSize="0.75rem">
            {fileName}
          </Text>
        </HStack>
      )}
      <SyntaxHighlighter
        language={language}
        style={tomorrowNightBlue}
        customStyle={{
          fontSize: '0.75rem',
          lineHeight: 2,
          background: '#09192e',
          borderRadius: 8,
          padding: 12,
        }}
        {...props}
      />
    </Box>
  );
};

const InlineCode: React.FC<CodeProps> = (props) => {
  return <Code fontSize="0.75rem" fontWeight={600} px={2} mx={1} {...props} />;
};

const Break: React.FC<DividerProps> = (props) => {
  return <Divider {...props} />;
};

const LinkText: React.FC<LinkProps> = (props) => {
  const linkColor = useColorModeValue('yellow.500', 'yellow.400');
  return <Link color={linkColor} isExternal {...props} />;
};

const ImageContent: React.FC<ImageProps> = (props) => {
  return (
    <Image
      my={8}
      objectFit="cover"
      // fallback
      fallbackSrc="https://via.placeholder.com/480x160?Text=NoImage"
      {...props}
    />
  );
};

export default {
  wrapper: Wrapper,
  p: Paragraph,
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: Heading5,
  h6: Heading6,
  thematicBreak: ThematicBreak,
  blockquote: BlockQuote,
  ul: ListText,
  ol: OrderedListText,
  li: ListItemText,
  table: TableContent,
  tr: Tr,
  th: Th,
  td: Td,
  pre: Pre,
  code: CodeContent,
  inlineCode: InlineCode,
  hr: Break,
  a: LinkText,
  img: ImageContent,
};
