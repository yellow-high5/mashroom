import { chakra } from '@chakra-ui/react';
import { isValidMotionProp, motion } from 'framer-motion';

const MotionDiv = chakra(motion.div, {
  shouldForwardProp: isValidMotionProp,
});

export default MotionDiv;
