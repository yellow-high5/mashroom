import { Center, Grid, GridItem, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import Layout from 'components/layout';
import WorkItem from 'components/work/work-item';
import { useWorkList, useWorkTabList } from 'hooks';
import React from 'react';
import { Helmet } from 'react-helmet';

const WorksPage = () => {
  const workList = useWorkList();
  const workTabList = useWorkTabList();

  return (
    <Layout>
      <Helmet title="m@shroom" />

      <Center>
        <Tabs colorScheme="yellow" w="100%" mx={4}>
          <TabList>
            {workTabList.map((tab, i) => (
              <Tab
                key={i}
                fontWeight="bold"
                _active={{
                  bgColor: 'none',
                }}
                _selected={{
                  bgGradient: 'linear(to-r, yellow.300, yellow.500)',
                  bgClip: 'text',
                  borderColor: 'yellow.400',
                }}
              >
                {tab}
              </Tab>
            ))}
          </TabList>
          <TabPanels>
            {workTabList.map((tab, i) => (
              <TabPanel key={i}>
                <Grid templateColumns="repeat(6, 1fr)" gap={4} pt={8} m="auto">
                  {workList
                    .filter((work) => work.node.frontmatter?.tag?.includes(tab))
                    .map((work, j) => (
                      <GridItem key={j} colSpan={[3, 3, 3, 2]}>
                        <WorkItem slug={work.node.id} frontmatter={work.node.frontmatter} />
                      </GridItem>
                    ))}
                </Grid>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Center>
    </Layout>
  );
};

export default WorksPage;
