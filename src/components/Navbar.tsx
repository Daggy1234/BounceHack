/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'
import * as Scroll from 'react-scroll'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Image,
  Button,
  useColorModeValue,
  useDisclosure,
  Text,
  Flex,
  Link,
  VisuallyHidden,
  chakra,
  HStack,
  Box,
  IconButton,
  VStack,
  CloseButton,
  useBreakpointValue,
} from '@chakra-ui/react'

import { AiOutlineMenu } from 'react-icons/ai'
import ColorModeSwitcher from './ColorModeSwitcher'
import { Logo } from './Logo'

export default function Navbar() {
  const bg = useColorModeValue('white', 'gray.800')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const ubp = useBreakpointValue({
    base: 'base',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
  })
  console.log(ubp)
  const { scroller } = Scroll
  return (
    <chakra.header bg={bg} w="full" px={{ base: 2, sm: 4 }} py={4}>
      <Flex alignItems="center" justifyContent="space-between" mx="auto">
        <Flex>
          <chakra.a
            href="/"
            title="Choc Home Page"
            display="flex"
            alignItems="center"
          >
            <Logo
              h={{ base: '10vmin', md: '5vmin', lg: '8vmin', xl: '10vmin' }}
            />
            <Image
              ml={3}
              h={{ base: '10vmin', md: '5vmin', lg: '8vmin', xl: '10vmin' }}
              src="/samiksha.png"
              alt="Samiksha"
            />
            <Image
              ml={3}
              h={{ base: '10vmin', md: '5vmin', lg: '8vmin', xl: '10vmin' }}
              src="/mais.jpg"
              alt="MAIS"
            />
          </chakra.a>
        </Flex>
        <HStack display="flex" alignItems="center" spacing={1}>
          <HStack
            spacing={1}
            mr={1}
            color="brand.500"
            display={{ base: 'none', md: 'inline-flex' }}
          >
            <Button
              onClick={() => {
                scroller.scrollTo('about', {
                  duration: 1500,
                  delay: 100,
                  smooth: true,
                })
              }}
              variant="ghost"
            >
              About
            </Button>

            <Button
              variant="ghost"
              onClick={() => {
                scroller.scrollTo('tracks', {
                  duration: 1500,
                  delay: 100,
                  smooth: true,
                })
              }}
            >
              Tracks
            </Button>
            <Button
              onClick={() => {
                scroller.scrollTo('sponsors', {
                  duration: 1500,
                  delay: 100,
                  smooth: true,
                })
              }}
              variant="ghost"
            >
              Sponsors
            </Button>
            <Button
              onClick={() => {
                scroller.scrollTo('faq', {
                  duration: 1500,
                  delay: 100,
                  smooth: true,
                })
              }}
              variant="ghost"
            >
              FAQ
            </Button>
            <Link href="https://forms.gle/gTCRsKQasRLc1QcX9" isExternal>
              <Button colorScheme="green" variant="solid">
                Register Now
              </Button>
            </Link>
          </HStack>
          <ColorModeSwitcher />
          <Box display={{ base: 'inline-flex', md: 'none' }}>
            <IconButton
              display={{ base: 'flex', md: 'none' }}
              aria-label="Open menu"
              fontSize="20px"
              color={useColorModeValue('gray.800', 'inherit')}
              variant="ghost"
              icon={<AiOutlineMenu />}
              onClick={onOpen}
            />

            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerBody mt={8} p={3}>
                  <Button w="full" variant="ghost">
                    About
                  </Button>
                  <Button w="full" variant="ghost">
                    Tracks
                  </Button>
                  <Button w="full" variant="ghost">
                    Sponsors
                  </Button>
                  <Button w="full" variant="ghost">
                    FAQ
                  </Button>
                  <Button w="full" colorScheme="green" variant="solid">
                    Register Now
                  </Button>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Box>
        </HStack>
      </Flex>
    </chakra.header>
  )
}
