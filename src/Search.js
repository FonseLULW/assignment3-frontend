import React, { useEffect, useState } from 'react'
import "./style.css";
import { Select, Input, Center, Text, Checkbox, CheckboxGroup, Stack, useCheckboxGroup } from '@chakra-ui/react'

function Page({types, setFilterType, setFilterName, setCurrentPage}) {
    const { value, getCheckboxProps } = useCheckboxGroup({})

    useEffect(() => {
        setFilterType(value)
        setCurrentPage(1)
    }, [value])

    return (
        <Center>
            <Input 
                placeholder='Find Pokemons'
                width='auto'
                id='input'
                bg="#FFFFFF"
                mr={10}
            />
            <CheckboxGroup colorScheme='green'>
                <Text>{value.sort().join(' and ')}</Text>
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