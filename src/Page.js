import React from 'react'
import "./style.css";
import { Center, Text, Card, CardBody, CardFooter } from '@chakra-ui/react'
import PokeInfo from './PokeInfo';

function Page({pokemons, PAGE_SIZE, currentPage, filterType, filterName}) {
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    pokemons = pokemons.slice(startIndex, endIndex);
    
    const x = (id) => id < 10 ? "00" : id < 100 ? "0" : "";
    return (
        <div className='poke'>
            {
                pokemons.map(pokemon =>
                    // <Card maxW='sm'  m='2' key={pokemon.id}>
                    //     <CardBody>
                    //         <img 
                    //             src={`https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${x(pokemon.id)}${pokemon.id}.png`}
                    //             alt={pokemon.name.english}
                    //         />
                    //         <Center mt='3'>
                    //             <Text fontSize='xl'>{pokemon.name.english}</Text>
                    //         </Center>
                    //     </CardBody>
                    // </Card>
                    <PokeInfo pokemon={pokemon}></PokeInfo>
                )
            }
        </div>
    )
}

export default Page;