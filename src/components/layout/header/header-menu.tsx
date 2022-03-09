import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Icon,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import Navigation from 'components/layout/header/navigation';
import React from 'react';
import { IoCloseOutline, IoMenuOutline } from 'react-icons/io5';

const HeaderMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const bgColor = useColorModeValue('#ffffff', '#001025');

  const mobileIcon = isOpen ? (
    <Icon boxSize={8} as={IoCloseOutline} cursor="pointer" onClick={onClose} />
  ) : (
    <Icon boxSize={8} as={IoMenuOutline} cursor="pointer" onClick={onOpen} />
  );

  return isMobile ? (
    <>
      <Box display="flex" alignItems="center" mr={2}>
        {mobileIcon}
      </Box>
      <Drawer isOpen={isOpen && !!isMobile} onClose={onClose} placement="top">
        <DrawerOverlay>
          <DrawerContent bg={bgColor}>
            <DrawerBody>
              <Navigation />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  ) : (
    <Navigation display="flex" />
  );
};

export default HeaderMenu;
