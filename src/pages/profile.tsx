import {
  Box,
  Center,
  chakra,
  Heading,
  Icon,
  SlideFade,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import Layout from 'components/layout';
import LoveContent from 'components/profile/love-content';
import SkillContent from 'components/profile/skill-content';
import WhoContent from 'components/profile/who-content';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { IoHeart, IoPersonCircle, IoTerminal } from 'react-icons/io5';

const PROFILE_TAB = [
  { icon: IoPersonCircle, iconColor: 'white', title: '何者？', content: <WhoContent /> },
  { icon: IoTerminal, iconColor: 'black', title: 'スキル感', content: <SkillContent /> },
  { icon: IoHeart, iconColor: 'red', title: '好きです。', content: <LoveContent /> },
];

const ProfilePage = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const handleTabsChange = (index: number) => {
    setTabIndex(index);
  };

  return (
    <Layout>
      <Helmet title="プロフィール" />

      <SlideFade
        in
        transition={{
          enter: { delay: 0.4 },
          exit: { delay: 0.4 },
        }}
      >
        <Center>
          <Tabs
            align="center"
            variant="soft-rounded"
            isFitted
            colorScheme="yellow"
            w="100%"
            mx={4}
            index={tabIndex}
            onChange={handleTabsChange}
            display={{ base: 'none', md: 'block' }}
          >
            <Heading size="lg" py={12}>
              <chakra.span borderBottom="1px solid" paddingBottom={1}>
                {PROFILE_TAB[tabIndex].title}
              </chakra.span>
            </Heading>

            <TabList>
              {PROFILE_TAB.map((tab) => (
                <Tab
                  key={tab.title}
                  _selected={{
                    color: `${tab.iconColor}`,
                    bgGradient: 'linear(to-r, yellow.300, yellow.500)',
                  }}
                >
                  <Icon boxSize={6} as={tab.icon} />
                </Tab>
              ))}
            </TabList>

            <TabPanels>
              {PROFILE_TAB.map((tab) => (
                <TabPanel key={tab.title}>{tab.content}</TabPanel>
              ))}
            </TabPanels>
          </Tabs>

          <Box display={{ base: 'block', md: 'none' }}>
            {PROFILE_TAB.map((tab, index) => (
              <Box key={tab.title}>
                <Heading textAlign="center" size="lg" py={4}>
                  <chakra.span borderBottom="1px solid" paddingBottom={1}>
                    {PROFILE_TAB[index].title}
                  </chakra.span>
                </Heading>
                {tab.content}
              </Box>
            ))}
          </Box>
        </Center>
      </SlideFade>
    </Layout>
  );
};

export default ProfilePage;
