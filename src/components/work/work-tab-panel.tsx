import { Grid, GridItem, TabPanel, TabPanelProps } from '@chakra-ui/react';
import WorkItem from 'components/work/work-item';
import { useWorkList } from 'hooks';
import React from 'react';

type Props = {
  tab?: string;
} & TabPanelProps;

const WorkTabPanel: React.FC<Props> = (props: Props) => {
  const { tab, ...tabPanelProps } = props;

  const workList = useWorkList();
  return (
    <TabPanel {...tabPanelProps}>
      <Grid templateColumns="repeat(6, 1fr)" gap={4} pt={8} m="auto">
        {workList
          .filter((work) => (tab ? work.node.frontmatter?.tag?.includes(tab) : true))
          .map((work, j) => (
            <GridItem key={j} colSpan={[3, 3, 3, 2]}>
              <WorkItem slug={work.node.id} frontmatter={work.node.frontmatter} />
            </GridItem>
          ))}
      </Grid>
    </TabPanel>
  );
};

export default WorkTabPanel;
