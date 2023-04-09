import React from 'react'
import Page from './Page'
import Pagination from './Pagination';
import { Text, Center  } from '@chakra-ui/react'


function Display({pokemons, PAGE_SIZE, filterType, filterName, currentPage, setCurrentPage, onPokemonClick}) {
    pokemons = pokemons.filter((pokemon) => {
        if (filterType.length <= 0) { return true }
        return pokemon['type'].some(t => filterType.includes(t))
    }).filter((pokemon) => {
        if (!filterName) { return pokemon }
        return pokemon.name.english.toLowerCase().includes(filterName.toLowerCase())
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
                onPokemonClick={onPokemonClick}
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