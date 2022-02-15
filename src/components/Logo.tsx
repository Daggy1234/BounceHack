import * as React from 'react'
import {
  chakra,
  keyframes,
  ImageProps,
  forwardRef,
  useColorModeValue,
} from '@chakra-ui/react'
import logo from './bouncehack.svg'
import dlogo from './bouncehack_d.svg'

// const spin = keyframes`
// from { transform: rotate(0deg); }
// to { transform: rotate(360deg); }
// `

export const Logo = forwardRef<ImageProps, 'img'>((props, ref) => {
  // const prefersReducedMotion = usePrefersReducedMotion()

  // const animation = prefersReducedMotion
  //   ? undefined
  //   : `${spin} infinite 20s linear`

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <chakra.img src={useColorModeValue(logo, dlogo)} {...props} />
})
