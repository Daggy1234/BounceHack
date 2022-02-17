import React from 'react'
import {
  Box,
  chakra,
  Container,
  Heading,
  Text,
  Image,
  Flex,
  Icon,
  SimpleGrid,
  Link,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react'

export default function FAQ() {
  const gc = useColorModeValue('green.200', 'green.600')
  const accordianMapping = [
    {
      title: 'Who can participate in the event?',
      data: 'Anyone in High School (Grades 9-12) can participate. There is no selection process and everyone is welcome.',
    },
    {
      title: 'How many people on a team?',
      data: 'A team may have a maximum of 5 members.',
    },
    {
      title: 'What does my registration fee go towards?',
      data: 'Bouncehack uses registration fees to fund prizes, and all proceeds will be donated to the Samiksha Foundation.',
    },
    {
      title: 'What languages/software can I use?',
      data: 'Any language, technology stack or library can be used to create your solutions! Scratch can be used only for the Gameathon track and drag and drop software cannot be used in the other two tracks.',
    },
    {
      title: 'Can I submit previously developed projects?',
      data: 'All projects submitted must have been made within the hackathon, not previous projects are allowed. You own the full IP of your submission.',
    },
    {
      title: 'What platforms will be used on event day?',
      data: 'Leading up to event week, you’ll receive all important information via email. Our Discord server will open up at the start of event week. Event day communications will all take place in the Discord server.',
    },
  ]

  return (
    <Box id="faq" pt={20}>
      <Heading
        color={useColorModeValue('green.400', 'green.200')}
        size={useBreakpointValue({ base: '2xl', md: '4xl' })}
      >
        Frequently Asked Questions
      </Heading>
      <Accordion allowToggle mt={6} defaultIndex={[0]}>
        {accordianMapping.map((item) => (
          <AccordionItem>
            <AccordionButton
              fontWeight={800}
              _expanded={{ bg: gc }}
              key={item.title}
            >
              <Box py={4} flex="1" textAlign="left">
                <Heading size="lg">{item.title}</Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel py={8} px={4}>
              <Text fontSize="lg">{item.data}</Text>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  )
}
