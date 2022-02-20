import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Icon,
  Stack,
  Text,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { IoCloseOutline, IoMenuOutline } from 'react-icons/io5';

const HeaderMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const breakpoint = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <Box display={{ base: 'flex', md: 'none' }} alignItems="center" mr={2}>
        {isOpen ? (
          <Icon boxSize={8} as={IoCloseOutline} cursor="pointer" onClick={onClose} />
        ) : (
          <Icon boxSize={8} as={IoMenuOutline} cursor="pointer" onClick={onOpen} />
        )}
      </Box>
      <Drawer isOpen={isOpen && !!breakpoint} onClose={onClose} placement="top">
        <DrawerOverlay display={{ base: 'flex', md: 'none' }}>
          <DrawerContent>
            <DrawerBody>
              <Stack direction={'column'} width="full" mt={24}>
                <Text fontWeight="bold" py={4}>
                  Blog
                </Text>
                <Text fontWeight="bold" py={4}>
                  Works
                </Text>
                <Text fontWeight="bold" py={4}>
                  Profile
                </Text>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
      <Stack
        direction="row"
        display={{ base: 'none', md: 'flex' }}
        width="auto"
        alignItems="center"
        justifyContent="space-around"
        minW="360px"
        mt={4}
      >
        <Text fontWeight="bold" mx={4}>
          Blog
        </Text>
        <Text fontWeight="bold" mx={4}>
          Works
        </Text>
        <Text fontWeight="bold" mx={4}>
          Profile
        </Text>
      </Stack>
    </>
  );
};

export default HeaderMenu;
