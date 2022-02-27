import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { IoCodeSlashOutline } from 'react-icons/io5';
import { Cell, Legend, Pie, PieChart } from 'recharts';

const GithubLanguageMap = () => {
  const data = [
    { name: 'Typescript', value: 400 },
    { name: 'Go', value: 300 },
    { name: 'Javascript', value: 300 },
    { name: 'Rust', value: 200 },
  ];
  const COLORS = ['#2b7489', '#00add8', '#f1e05a', '#dea584'];

  return (
    <Box my={4}>
      <Flex alignItems="center" mb={4}>
        <Icon boxSize={6} as={IoCodeSlashOutline} m={1} />
        <Text size="sm" m={1}>
          プログラミング言語
        </Text>
      </Flex>
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          cx={120}
          cy={150}
          innerRadius={60}
          outerRadius={120}
          paddingAngle={4}
          stroke="#eee"
          strokeWidth={4}
          dataKey="value"
        >
          {data.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend
          layout="vertical"
          verticalAlign="middle"
          align="right"
          iconType="circle"
          // content={(props) =>
          //   props.payload?.map((entry) => <li key={entry.value}>{entry.value}</li>)
          // }
        />
      </PieChart>
    </Box>
  );
};

export default GithubLanguageMap;
