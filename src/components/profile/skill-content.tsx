import { Box } from '@chakra-ui/react';
import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
// import useSWR from 'swr';

const SkillContent = () => {
  // const fetcher = (url: string): Promise<any> => {
  //   return fetch(`https://api.github.com/${url}`, {
  //     headers: {
  //       Accept: 'application/vnd.github.v3+json',
  //     },
  //   }).then((response) => response.json());
  // };
  // const { data: commits, error: commitsError } = useSWR('commits/yellow-high5', fetcher);

  return (
    <Box p={8}>
      {/* <Box my={8}>{JSON.stringify(commits, null, 2)}</Box> */}
      <Box my={8}>
        <CalendarHeatmap
          startDate={new Date('2022-01-01')}
          endDate={new Date('2022-12-31')}
          values={[
            { date: '2022-01-01', count: 12 },
            { date: '2022-01-22', count: 122 },
            { date: '2022-01-30', count: 38 },
            // ...and so on
          ]}
        />
      </Box>
    </Box>
  );
};

export default SkillContent;
