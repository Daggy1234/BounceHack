import React from 'react'
import {
  Flex,
  useColorModeValue,
  Icon,
  VStack,
  Image,
  chakra,
  Text,
  Link,
  Button,
  useBreakpointValue,
  Box,
  Heading,
} from '@chakra-ui/react'

import { AiFillCalendar, AiFillHome, AiFillClockCircle } from 'react-icons/ai'

export default function HomeWidget() {
  return (
    <Box>
      <Flex direction="column">
        <Flex
          py={{ base: 5, md: 40 }}
          // backgroundRepeat="no-repeat"
          // backgroundSize="cover"
          // backgroundImage="/opuR60.jpg"
          direction={{ base: 'column', md: 'row' }}
        >
          <Flex p={{ base: 2, md: 10 }} direction="column">
            <Heading size={useBreakpointValue({ base: '2xl', md: '4xl' })}>
              <Text
                as="span"
                position="relative"
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'green.400',
                  zIndex: -1,
                }}
              >
                BounceHack
              </Text>
            </Heading>
            <VStack
              alignItems="left"
              alignSelf="left"
              mt={6}
              textAlign="left"
              spacing={3}
            >
              <Flex fontSize="xl">
                <Icon mr={3} w={6} h={6} as={AiFillCalendar} />
                <Text fontWeight="bold">Feb. 26 - 27 2022</Text>
              </Flex>
              <Flex fontSize="xl">
                <Icon mr={3} w={6} h={6} as={AiFillHome} />
                <Text fontWeight="bold">Online</Text>
              </Flex>
              <Flex fontSize="xl">
                <Icon mr={3} w={6} h={6} as={AiFillClockCircle} />
                <Text fontWeight="bold">24 Hours</Text>
              </Flex>
            </VStack>
            <Link href="https://forms.gle/gTCRsKQasRLc1QcX9" isExternal>
              <Button colorScheme="green" mt={3} maxW="sm">
                Register Now
              </Button>
            </Link>
          </Flex>
          <Flex>
            <Image src="/stars.svg" alt="image" />
          </Flex>
        </Flex>
        <Flex id="about" direction={{ base: 'column-reverse', md: 'row' }}>
          <Box mt={6}>
            <Image
              w="100vmin"
              src={useColorModeValue(
                '/bouncehack_light.png',
                '/bouncehack_dark.png'
              )}
              alt="logo"
            />
          </Box>
          <Box mx="auto">
            <Box px={10}>
              <Heading
                color={useColorModeValue('green.400', 'green.200')}
                size="2xl"
              >
                What is BounceHack?
              </Heading>
              <Text mt={3}>
                BounceHack is a hackathon from BounceBack to raise funds for the
                Samiksha Foundation. BounceBack was a sports tournament, that
                has since pivoted to a series of events!
                <br />
                <br />
                Samiksha Foundation is a creative learning initiative for
                children with cancer and their caregivers. It provides
                educational, spiritual, and creative support to children while
                they undergo treatment for cancer and other life-limiting
                conditions.{' '}
                <chakra.span color={useColorModeValue('blue.400', 'blue.200')}>
                  https://samikshafoundation.org/
                </chakra.span>
                <br />
                <br />
                Participants will work in teams to create incredible and
                exciting projects in 24 hours. Each team may compete in 1 of 3
                tracks, with separate prizes for each track!
              </Text>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}
