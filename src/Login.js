import React from "react";
import { Box, Text, Center, Square } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input
  } from '@chakra-ui/react'

function Login() {
    return (
        <Center h='100%'>
            <Box bg='#FFFFFF' w='20%' p={4} borderColor='gray.200' border='1px'>
                <Text fontSize='3xl' mb={10}>Login</Text>
                <FormControl isRequired>
                    <FormLabel>Username</FormLabel>
                    <Input placeholder='Username' />

                    <FormLabel mt={2}>Password</FormLabel>
                    <Input type="password"/>
                </FormControl>
            </Box>
        </Center>
    )
}

export default Login;