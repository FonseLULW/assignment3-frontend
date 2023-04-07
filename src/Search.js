import React, { useEffect } from 'react'
import "./style.css";
import { Select, Input, Center, Text } from '@chakra-ui/react'

function Page({types}) {
    return (
        <Center id="search">
            <Text fontSize='3xl'>Find Pokemons</Text>
            <Input 
                placeholder='Basic usage'
                htmlSize={10}
                width='auto'
                id='input'    
            />
            <Select 
                placeholder='Select option' 
                htmlSize={4} 
                width='auto'
                id='select'
            >
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
            </Select>
        </Center>
    )
}

export default Page;