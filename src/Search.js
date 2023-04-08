import React, { useEffect, useState } from 'react'
import "./style.css";
import { Select, Input, Center, Text, Checkbox, CheckboxGroup, Stack, useCheckboxGroup } from '@chakra-ui/react'

function Page({types, setFilterType, setFilterName, setCurrentPage}) {
    const { value, getCheckboxProps } = useCheckboxGroup({})
    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        setFilterType(value)
        setCurrentPage(1)
    }, [value])

    useEffect(() => {
        setFilterName(inputValue)
        setCurrentPage(1)
    }, [inputValue])

    return (
        <Center>
            <Input 
                placeholder='Find Pokemons'
                width='auto'
                id='input'
                bg="#FFFFFF"
                mr={10}
                onChange={(e) => {setInputValue(e.target.value)}}
            />
            <CheckboxGroup colorScheme='green'>
                <Stack spacing={[1, 5]} direction={['column', 'row']}>
                    {
                        types.map((pokeType) => <Checkbox key={pokeType} {...getCheckboxProps({value: pokeType})}>{pokeType}</Checkbox>)
                    }
                </Stack>
            </CheckboxGroup>
        </Center>
    )
}

export default Page;