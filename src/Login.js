import React from "react";
import axios from 'axios';
import { useState, useEffect } from "react";
import { Box, Text, Center, Button } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input
} from '@chakra-ui/react'

function Login({SERVER_URL}) {
    const [usernameInput, setUsernameInput] = useState('')
    const handleUsernameInputChange = (e) => setUsernameInput(e.target.value)

    const [passwordInput, setPasswordInput] = useState('')
    const handlePasswordInputChange = (e) => setPasswordInput(e.target.value)

    const [errMsg, setErrMsg] = useState('')

    const handleSubmit = async () => {
        try {
            const res = await axios.post(`${SERVER_URL}/login`, {
                username: usernameInput,
                password: passwordInput
            })
    
            if (res.status == 200 && !res.data.pokeErrCode) {
                const accessToken = res.headers["auth-token-access"];
                const refreshToken = res.headers["auth-token-refresh"];
                
                localStorage.setItem("access-token", accessToken);
                localStorage.setItem("refresh-token", refreshToken);
                window.location.href = '/';
            } else {
                setErrMsg("Login Failed. Try Again!")
            } 
        } catch (e) {
            setErrMsg(e.message);
        }
    }

    return (
        <Center h='100%'>
            <Box bg='#FFFFFF' w='20%' p={4} borderColor='gray.200' border='1px'>
                <Text fontSize='3xl' mb={10}>Login</Text>
                <FormControl isRequired isInvalid={errMsg}>
                    <FormLabel>Username</FormLabel>
                    <Input placeholder='Username' value={usernameInput} onChange={handleUsernameInputChange}/>
                    <FormLabel mt={2}>Password</FormLabel>
                    <Input type="password" value={passwordInput} onChange={handlePasswordInputChange}/>

                    <FormErrorMessage>{errMsg}</FormErrorMessage>
                    
                    <Center>
                        <Button
                            mt={4}
                            colorScheme='teal'
                            type='submit'
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                    </Center>
                </FormControl>
            </Box>
        </Center>
    )
}

export default Login;