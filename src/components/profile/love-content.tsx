import { Box, chakra, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { Helmet } from 'react-helmet';

const LoveContent: React.FC = () => {
  return (
    <Box p={4}>
      <Box p={2}>
        <Heading size="md" my={6}>
          ビール と ウィスキー 🌾
        </Heading>
        <Text fontSize="sm" my={6}>
          家でも外でもちびちびクラフトビールやスコッチを中心に飲んでます。
        </Text>
        <chakra.a
          href="https://www.pinterest.jp/yellowhigh5/whisky/"
          data-pin-do="embedBoard"
          data-pin-board-width="280"
          data-pin-scale-height="240"
        />
      </Box>

      <Box p={2}>
        <Heading size="md" my={6}>
          釣り 🎣
        </Heading>
        <Text fontSize="sm" my={6}>
          相模湾、東京湾をメインでやってます。船舶免許も持ってます。
        </Text>
        <chakra.a
          href="https://www.pinterest.jp/yellowhigh5/angler/"
          data-pin-do="embedBoard"
          data-pin-board-width="280"
          data-pin-scale-height="240"
        />
      </Box>
      <Helmet>
        <script async defer src="//assets.pinterest.com/js/pinit.js" />
      </Helmet>
    </Box>
  );
};

export default LoveContent;
