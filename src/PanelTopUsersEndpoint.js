import React from "react";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Text,
} from '@chakra-ui/react'

function PanelTopUsersEndpoint({users}) {
    let clickedPokemonNames = new Set();

    // for each userdata get unique clickedPokemonNames
    users.forEach(user => {
        for (const poke in user.clickedPokemon) {
            clickedPokemonNames.add(poke.split(":")[0])
        }
    });

    return (
        <TableContainer>
            <Table variant='striped' colorScheme="blackAlpha" mt={5}>
                <Thead bg="#C59f69" >
                    <Tr>
                        <Th><Text color='black'>Pokemon Endpoint</Text></Th>
                        <Th><Text color='black'>Top User</Text></Th>
                        <Th><Text color='black'>Times Clicked</Text></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        Array.from(clickedPokemonNames)
                        .map(pokemonName => {
                            const topUser = users
                            .filter(user => user.clickedPokemon[pokemonName] !== undefined)
                            .reduce((a, b) => a.clickedPokemon[pokemonName] > b.clickedPokemon[pokemonName] ? a : b)

                            return  <Tr key={pokemonName}>
                                        <Td>{pokemonName}</Td>
                                        <Td>{topUser.username}</Td>
                                        <Td>{topUser.clickedPokemon[pokemonName]}</Td>
                                    </Tr>
                        })
                    }
                </Tbody>
            </Table>
        </TableContainer>
    )
}

export default PanelTopUsersEndpoint;