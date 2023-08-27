import MotionDiv from '@chakra-ui/motion-div';
import { useScroll, useSpring } from 'framer-motion';
import React from 'react';

const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <MotionDiv
      h={2}
      bgGradient="linear(to-r, yellow.300, yellow.500)"
      pos="fixed"
      transformOrigin={0}
      top={0}
      left={0}
      right={0}
      style={{
        scaleX,
      }}
      zIndex={10000}
    />
  );
};

export default ScrollProgress;
