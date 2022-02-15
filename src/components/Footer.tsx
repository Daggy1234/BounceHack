import React, { ReactNode } from 'react'
import {
  Box,
  chakra,
  Container,
  Link,
  Flex,
  Stack,
  Image,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Logo } from './Logo'

function SocialButton({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded="full"
      w={14}
      h={14}
      cursor="pointer"
      as="a"
      href={href}
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      transition="background 0.3s ease"
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW="6xl"
        py={4}
        spacing={4}
        justify="center"
        align="center"
      >
        <Flex>
          <Logo w="24vmin" />
          <Image ml={3} h="10vmin" src="/samiksha.png" alt="Samiksha" />
          <Image ml={3} h="10vmin" src="/mais.png" alt="MAIS" />
        </Flex>
        <Stack direction="row" spacing={6}>
          <Text fontSize="xl">
            Reach out to us at{' '}
            <Link
              color={useColorModeValue('blue.400', 'blue.200')}
              fontWeight={800}
              href="mailto:bouncebackteam@gmail.com"
            >
              bouncebackteam@gmail.com
            </Link>
          </Text>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle="solid"
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container
          as={Stack}
          maxW="6xl"
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text>Copyright 2022 © Bouncehacks | Made with by 💚 Daggy1234</Text>
          <Stack direction="row" spacing={6}>
            <SocialButton label="Twitter" href="#">
              <FaTwitter />
            </SocialButton>
            <SocialButton label="YouTube" href="#">
              <FaYoutube />
            </SocialButton>
            <SocialButton label="Instagram" href="#">
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
