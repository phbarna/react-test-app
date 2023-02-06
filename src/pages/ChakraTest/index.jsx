

import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from '@chakra-ui/react'
import { Heading, Flex, Input, Button } from '@chakra-ui/react'

export default function ChakraTest() {

  return (

    <ChakraProvider> 
        <Flex height="100vh" alignItems="center" justifyContent="center">
          <Flex direction="column" background="gray.100" p={12} rounded={6}>
            <Heading mb={6}>Log in</Heading>
            <Input placeholder="lazar@chakra-ui.com" variant="filled" mb={3}  type="email"/>
            <Input placeholder="**********" variant="filled" mb={6}  type="password"/>
            <Button colorScheme="teal">Log in</Button>

            </Flex>

        </Flex>
    </ChakraProvider>
  )
}