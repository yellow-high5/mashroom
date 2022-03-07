import { Box, Heading, HStack, Icon, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { IoHelpCircle } from 'react-icons/io5';

const INTERVIEW_LIST = [
  { question: '職業は？', answer: 'エンジニアやってます。' },
  { question: 'どの世代？', answer: '1995年生まれ。ゆとり世代末期。' },
  { question: '出身は？', answer: '兵庫県宝塚出身。今は東京。' },
  { question: '趣味は？', answer: '釣り、ウィスキー、湯巡り' },
  { question: 'あなたを表す言葉は？', answer: '楽観的、愚直、たまに神経質' },
  {
    question: '座右の銘は？',
    answer: '人生で選択するすべてはどこかでつながる',
  },
];

const WhoContent = () => {
  return (
    <Box p={8}>
      {INTERVIEW_LIST.map((item, i) => (
        <Stack key={i} mb={16} w="100%">
          <HStack mb={2}>
            <Icon boxSize={4} as={IoHelpCircle} />
            <Text>{item.question}</Text>
          </HStack>
          <Box w="100%">
            <Heading
              size="sm"
              position="relative"
              p={4}
              borderRadius={16}
              border="2px solid"
              _before={{
                content: "''",
                position: 'absolute',
                display: 'block',
                right: '10%',
                bottom: '-0.8em',
                borderTop: '0.8em solid',
                borderX: '0.8em solid transparent',
              }}
            >
              {item.answer}
            </Heading>
          </Box>
        </Stack>
      ))}
    </Box>
  );
};

export default WhoContent;
