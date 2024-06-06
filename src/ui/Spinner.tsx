import { Spinner as ChakraSpinner } from '@chakra-ui/react'

export const Spinner = () => {
  return (
    <ChakraSpinner
      position={'absolute'}
      left={'50%'}
      top={'50%'}
      translateX={'-50%'}
      thickness="3px"
      speed="0.5s"
      size="xl"
      emptyColor="#fff"
      color="#815CD2"
    />
  )
}
