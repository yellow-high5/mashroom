import { Center, Grid, GridItem, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import Layout from 'components/layout';
import WorkItem from 'components/work/work-item';
import React from 'react';
import { Helmet } from 'react-helmet';

const WORK_TAB = [
  { kind: 'All', number: 12 },
  { kind: 'Web', number: 4 },
  { kind: 'CG-Work', number: 7 },
  { kind: 'Illust', number: 1 },
];

const WorksPage = () => {
  return (
    <Layout>
      <Helmet title="作品" />

      <Center>
        <Tabs colorScheme="yellow" w="100%" mx={4}>
          <TabList>
            {WORK_TAB.map((tab) => (
              <Tab
                key={tab.kind}
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
                {tab.kind}
              </Tab>
            ))}
          </TabList>
          <TabPanels>
            {WORK_TAB.map((tab) => (
              <TabPanel key={tab.kind}>
                <Grid templateColumns="repeat(6, 1fr)" gap={4} pt={8} m="auto">
                  {Array(tab.number)
                    .fill('')
                    .map((_, i) => (
                      <GridItem key={i} colSpan={[3, 3, 3, 2]}>
                        <WorkItem />
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
