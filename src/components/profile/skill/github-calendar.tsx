import { gql, useQuery } from '@apollo/client';
import { Box, Flex, Heading, Icon, Link } from '@chakra-ui/react';
import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import { IoLogoGithub } from 'react-icons/io5';
import './github-calendar.css';

const contributionCalendarQuery = gql`
  query ContributionCalendar($userName: String!) {
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
  const { loading, error, data } = useQuery<Github.ContributionCalendarQuery>(
    contributionCalendarQuery,
    {
      variables: { userName: 'yellow-high5' },
    },
  );

  const calendar = data?.user?.contributionsCollection?.contributionCalendar?.weeks?.flatMap(
    (con) => con.contributionDays.map((i) => ({ date: i.date, count: i.contributionCount })),
  );

  return (
    <Link href="https://github.com/yellow-high5" isExternal>
      <Box my={8}>
        <Flex alignItems="center" mb={4}>
          <Icon boxSize={6} as={IoLogoGithub} m={1} />
          <Heading size="sm" fontWeight="bold" m={1}>
            github.com/yellow-high5
          </Heading>
        </Flex>
        {!loading && !error && calendar && (
          <CalendarHeatmap
            startDate={new Date(calendar[0].date)}
            endDate={new Date(calendar[calendar.length - 1].date)}
            values={calendar}
            classForValue={(value) => {
              if (value.count > 4) {
                return `color-scale-4`;
              }
              return `color-scale-${value.count}`;
            }}
          />
        )}
      </Box>
    </Link>
  );
};

export default GithubCalendar;
