import { Center, TabList, TabPanels, Tabs } from '@chakra-ui/react';
import Layout from 'components/layout';
import WorkTab from 'components/work/work-tab';
import WorkTabPanel from 'components/work/work-tab-panel';
import { useWorkTabList } from 'hooks';
import React from 'react';
import { Helmet } from 'react-helmet';

const WorksPage = () => {
  const workTabList = useWorkTabList();

  return (
    <Layout>
      <Helmet title="m@shroom" />

      <Center>
        <Tabs colorScheme="yellow" w="100%" mx={4}>
          <TabList>
            <WorkTab name="All" />
            {workTabList.map((tab, i) => (
              <WorkTab key={i} name={tab} />
            ))}
          </TabList>
          <TabPanels>
            <WorkTabPanel />
            {workTabList.map((tab, i) => (
              <WorkTabPanel key={i} tab={tab} />
            ))}
          </TabPanels>
        </Tabs>
      </Center>
    </Layout>
  );
};

export default WorksPage;
