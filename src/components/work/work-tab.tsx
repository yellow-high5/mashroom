import { Tab } from '@chakra-ui/react';
import React from 'react';

type Props = {
  name: string;
};

const WorkTab: React.FC<Props> = (props: Props) => {
  return (
    <Tab
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
      {props.name}
    </Tab>
  );
};

export default WorkTab;
