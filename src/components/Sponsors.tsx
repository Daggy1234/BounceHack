import React from 'react'
import {
  Box,
  useBreakpointValue,
  chakra,
  Container,
  Heading,
  Text,
  Image,
  Flex,
  Icon,
  SimpleGrid,
  Link,
  useColorModeValue,
} from '@chakra-ui/react'

export default function Sponsors() {
  return (
    <Box id="sponsors" pt={20}>
      <Heading
        color={useColorModeValue('green.400', 'green.200')}
        size={useBreakpointValue({ base: '2xl', md: '4xl' })}
      >
        Sponsors
      </Heading>
      <Box
        textAlign="center"
        rounded="lg"
        my={10}
        bg={useColorModeValue('gray.50', 'gray.600')}
        h="800px"
        p={{ base: 2, md: 20 }}
      >
        <Heading
          fontWeight={800}
          fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
          lineHeight="110%"
        >
          <Text as="span" color={useColorModeValue('green.400', 'green.200')}>
            {'<'}your brand{'>'}
          </Text>
          <br />
          Sponsor BounceHack
        </Heading>
        <Box mt={3}>
          <Link
            color={useColorModeValue('blue.400', 'blue.200')}
            fontWeight={800}
            fontSize={{ base: 20, md: 48 }}
            href="mailto:bouncebackteam@gmail.com"
          >
            Contact Us
          </Link>
        </Box>
      </Box>
    </Box>
  )
}
