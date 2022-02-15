import React from 'react'
import {
  Avatar,
  Box,
  chakra,
  Container,
  Heading,
  Text,
  Image,
  Flex,
  Icon,
  SimpleGrid,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react'

const testimonials = [
  {
    name: '3 Exciting Tracks Available',
    content:
      'It really saves me time and effort. It is exactly what our business has been lacking. EEZY is the most valuable business resource we have EVER purchased. After using EEZY my business skyrocketed!',
    avatar: null,
  },
  {
    name: 'Gamethon',
    content:
      'Build the best possible game in 24 hours. With a theme to be announced, you will be judged on creativity, design and your technology.',
    avatar: '/gameathon.svg',
  },
  {
    name: 'Analysis',
    content:
      'For people that love data. Find, Analyze and Use data pertinent to the theme. For budding Data Scientists and Machine Learning Enthusiasts. You will be judged on analysis, presentation and implementation of your analysis!',
    avatar: '/analysis.svg',
  },
  {
    name: 'Momento',
    content:
      'We capture moments and memories all the time though our devices. Use our theme to innovate a product built to share. You will be judged on idea, execution and marketing.',
    avatar: '/share.svg',
  },
]

const backgrounds = [
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='102.633' cy='61.0737' rx='102.633' ry='61.0737' fill='%23ED64A6' /%3E%3Cellipse cx='399.573' cy='123.926' rx='102.633' ry='61.0737' fill='%23F56565' /%3E%3Cellipse cx='366.192' cy='73.2292' rx='193.808' ry='73.2292' fill='%2338B2AC' /%3E%3Cellipse cx='222.705' cy='110.585' rx='193.808' ry='73.2292' fill='%23ED8936' /%3E%3C/svg%3E")`,
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ED8936'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%2348BB78'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%230BC5EA'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%23ED64A6'/%3E%3C/svg%3E")`,
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='102.633' cy='61.0737' rx='102.633' ry='61.0737' fill='%23ED8936'/%3E%3Cellipse cx='399.573' cy='123.926' rx='102.633' ry='61.0737' fill='%2348BB78'/%3E%3Cellipse cx='366.192' cy='73.2292' rx='193.808' ry='73.2292' fill='%230BC5EA'/%3E%3Cellipse cx='222.705' cy='110.585' rx='193.808' ry='73.2292' fill='%23ED64A6'/%3E%3C/svg%3E")`,
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ECC94B'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%239F7AEA'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%234299E1'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%2348BB78'/%3E%3C/svg%3E")`,
]

interface TrackCardProps {
  name: string
  content: string
  avatar: string | null
  index: number
}

function TrackCard(props: TrackCardProps) {
  const { name, content, avatar, index } = props
  const gcolor = useColorModeValue('green.400', 'green.200')
  const gs = useBreakpointValue({ base: '2xl', md: '3xl' })
  return (
    <Flex
      boxShadow="sm"
      maxW="640px"
      direction={{ base: 'column-reverse', md: 'row' }}
      width="full"
      rounded="xl"
      p={10}
      justifyContent="space-between"
      position="relative"
      bg={useColorModeValue('white', 'gray.800')}
      _before={{
        content: '""',
        position: 'absolute',
        zIndex: '-1',
        height: 'full',
        maxW: '640px',
        width: 'full',
        filter: 'blur(40px)',
        transform: 'scale(0.98)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        top: 0,
        left: 0,
        backgroundImage: backgrounds[index % 4],
      }}
    >
      <Flex direction="column" textAlign="left" justifyContent="space-between">
        <Heading
          color={avatar ? gcolor : ''}
          size={avatar ? 'xl' : gs}
          my={avatar ? 3 : 8}
        >
          {name}
        </Heading>
        <chakra.p
          display={avatar ? '' : 'none'}
          fontWeight="medium"
          fontSize="15px"
          pb={4}
        >
          {content}
        </chakra.p>
      </Flex>
      {avatar && (
        <Image
          src={avatar}
          w={200}
          alignSelf="center"
          m={{ base: '0 0 35px 0', md: '0 0 0 50px' }}
        />
      )}
    </Flex>
  )
}

export default function Tracks() {
  return (
    <Flex
      textAlign="center"
      pt={10}
      justifyContent="center"
      direction="column"
      width="full"
      id="tracks"
    >
      <SimpleGrid columns={{ base: 1, xl: 2 }} spacing="20" mt={16} mx="auto">
        {testimonials.map((cardInfo, index) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <TrackCard {...cardInfo} index={index} />
        ))}
      </SimpleGrid>
    </Flex>
  )
}
