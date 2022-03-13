import { gql, useQuery } from '@apollo/client';
import { Box, chakra, Flex, Heading, Icon, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { IoCodeSlashOutline } from 'react-icons/io5';
import { Cell, Legend, Pie, PieChart } from 'recharts';

const languageStatsQuery = gql`
  query LanguageStats {
    user(login: "yellow-high5") {
      repositories(isFork: false, privacy: PUBLIC, last: 10) {
        nodes {
          name
          languages(first: 5, orderBy: { field: SIZE, direction: DESC }) {
            edges {
              size
              node {
                name
                color
              }
            }
          }
        }
      }
    }
  }
`;

const GithubLanguageStats = () => {
  const fontColor = useColorModeValue('gray.800', 'white');

  const { loading, error, data } = useQuery<Github.LanguageStatsQuery>(languageStatsQuery);

  const languageMap = data?.user?.repositories?.nodes
    ?.flatMap((node) => node?.languages?.edges)
    .reduce((stats, key) => {
      if (key) {
        if (stats[key.node.name]) {
          stats[key.node.name].size += key.size;
        } else {
          stats[key.node.name] = { color: key.node.color || undefined, size: key.size };
        }
      }
      return stats;
    }, {} as { [key: string]: { color?: string; size: number } });
  const languages =
    languageMap &&
    Object.entries(languageMap)
      .map(([key, value]) => ({
        name: key,
        color: value.color,
        size: value.size,
      }))
      .sort((a, b) => b.size - a.size)
      .slice(0, 5);

  return (
    <Box my={4}>
      <Flex alignItems="center" mb={4}>
        <Icon boxSize={6} as={IoCodeSlashOutline} m={1} />
        <Heading size="sm" fontWeight={'bold'} m={1}>
          プログラミング言語
        </Heading>
      </Flex>

      {!loading && !error && languages && (
        <PieChart width={320} height={240}>
          <Pie
            data={languages}
            dataKey="size"
            cx={96}
            cy={120}
            innerRadius={48}
            outerRadius={96}
            paddingAngle={4}
            stroke="#eee"
            strokeWidth={4}
            isAnimationActive={false}
          >
            {languages.map((language, index) => (
              <Cell key={`cell-${index}`} fill={language.color} />
            ))}
          </Pie>
          <Legend
            layout="vertical"
            align="right"
            iconType="circle"
            formatter={(value) => (
              <chakra.span color={fontColor} fontWeight="bold" fontSize={12}>
                {value}
              </chakra.span>
            )}
          />
        </PieChart>
      )}
    </Box>
  );
};

export default GithubLanguageStats;
