import { Box, chakra, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const LoveContent = () => {
  return (
    <Box p={4}>
      <Box p={2}>
        <Heading size="md" my={6}>
          ウィスキー🥃
        </Heading>
        <Text my={6}>家でも外でもちびちびスコッチを中心に飲んでます。</Text>
        <chakra.a
          href="https://www.pinterest.jp/yellowhigh5/whisky/"
          data-pin-do="embedBoard"
          data-pin-board-width="280"
          data-pin-scale-height="240"
        />
      </Box>

      <Box p={2}>
        <Heading size="md" my={6}>
          釣り🎣
        </Heading>
        <Text my={6}>相模湾、東京湾をメインでやってます。船舶免許も持ってます。</Text>
        <chakra.a
          href="https://www.pinterest.jp/yellowhigh5/angler/"
          data-pin-do="embedBoard"
          data-pin-board-width="280"
          data-pin-scale-height="240"
        />
      </Box>
    </Box>
  );
};

export default LoveContent;
