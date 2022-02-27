import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Box } from '@chakra-ui/react';
import GithubCalendar from 'components/profile/skill/github-calendar';
import GithubLanguageMap from 'components/profile/skill/github-language-map';
import React from 'react';
import 'react-calendar-heatmap/dist/styles.css';

const SkillContent = () => {
  const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    headers: { authorization: `Bearer ${process.env.GATSBY_GITHUB_PERSONAL_ACCESS_TOKEN}` },
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Box p={8}>
        <GithubLanguageMap />
        <GithubCalendar />
      </Box>
    </ApolloProvider>
  );
};

export default SkillContent;
