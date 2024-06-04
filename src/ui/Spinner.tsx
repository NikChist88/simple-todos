import { Spinner as ChakraSpinner } from '@chakra-ui/react'

export const Spinner = () => {
  return (
    <ChakraSpinner
      position={'absolute'}
      left={'50%'}
      top={'50%'}
      thickness="3px"
      speed="0.5s"
      size="xl"
      emptyColor="gray.200"
      color="#259795"
    />
  )
}
