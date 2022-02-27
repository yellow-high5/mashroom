/* eslint-disable @typescript-eslint/no-explicit-any */
import { gql, useQuery } from '@apollo/client';
import { Box, Flex, Icon, Link, Text } from '@chakra-ui/react';
import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import { IoLogoGithub } from 'react-icons/io5';

const CONTRIBUTION_CALENDAR = gql`
  query ($userName: String!) {
    user(login: $userName) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
            }
          }
        }
      }
    }
  }
`;

const GithubCalendar = () => {
  const { loading, error, data } = useQuery(CONTRIBUTION_CALENDAR, {
    variables: { userName: 'yellow-high5' },
  });

  const calendar = data?.user.contributionsCollection.contributionCalendar.weeks.flatMap(
    (con: any) =>
      con.contributionDays.map((i: any) => ({ date: i.date, count: i.contributionCount })),
  );

  return (
    <Link href="https://github.com/yellow-high5" isExternal>
      <Box my={8}>
        <Flex alignItems="center" mb={4}>
          <Icon boxSize={6} as={IoLogoGithub} m={1} />
          <Text size="sm" m={1}>
            yellow-high5
          </Text>
        </Flex>
        {!loading && !error && calendar && (
          <CalendarHeatmap
            startDate={new Date(calendar[0].date)}
            endDate={new Date(calendar[calendar.length - 1].date)}
            values={calendar}
            classForValue={(value) => {
              if (!value) {
                return 'color-empty';
              }
              if (value.count > 4) {
                return `color-github-4`;
              }
              return `color-github-${value.count}`;
            }}
          />
        )}
      </Box>
    </Link>
  );
};

export default GithubCalendar;
