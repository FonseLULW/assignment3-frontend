import React from 'react'
import Page from './Page'
import Pagination from './Pagination';
import { Text, Center  } from '@chakra-ui/react'

function Display({pokemons, PAGE_SIZE, filterType, filterName, currentPage, setCurrentPage}) {
    pokemons = pokemons.filter((pokemon) => {
        if (filterType.length > 0) {
            return pokemon['type'].some(t => filterType.includes(t))
        } else {
            return true
        }
    })
    return (
        <>
            <Center>
                <Text fontSize='2xl'>Page {currentPage}</Text>
            </Center>
            <Page 
                pokemons={pokemons} 
                PAGE_SIZE={PAGE_SIZE} 
                currentPage={currentPage}
            />
            <Center mt={10}>
                <Pagination 
                pokemons={pokemons}
                PAGE_SIZE={PAGE_SIZE}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                />
            </Center>
        </>
    )
}

export default Display;