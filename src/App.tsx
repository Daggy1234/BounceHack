import * as React from 'react'
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react'
import { Logo } from './components/Logo'
import Navbar from './components/Navbar'
import HomeWidget from './components/HomeWidget'
import Footer from './components/Footer'
import Tracks from './components/Tracks'
import Sponsors from './components/Sponsors'
import FAQ from './components/FAQ'

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Box m="5%">
        <HomeWidget />
        <Tracks />
        <Sponsors />
        <FAQ />
      </Box>
      <Footer />
    </ChakraProvider>
  )
}
