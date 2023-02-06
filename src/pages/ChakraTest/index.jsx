

import { Heading, Flex, Input, Button, useColorMode, useColorModeValue } from '@chakra-ui/react'

export default function ChakraTest() {
  const { toggleColorMode } = useColorMode()

  const foregroundColor = useColorModeValue("gray.100", "gray.700")

  return (
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex direction="column" background={foregroundColor} p={12} rounded={6}>
          <Heading mb={6}>Log in</Heading>
          <Input placeholder="lazar@chakra-ui.com" variant="filled" mb={3} type="email" />
          <Input placeholder="**********" variant="filled" mb={6} type="password" />
          <Button mb={6} colorScheme="teal">Log in</Button>
          <Button onClick={toggleColorMode}> change color
          </Button>
        </Flex>
      </Flex>
  )
}