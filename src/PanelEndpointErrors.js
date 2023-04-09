import React from "react";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Text,
    Tag,
    Center,
    VStack
} from '@chakra-ui/react'

function PanelEndpointErrors({errors}) {
    let pokeErrors = {};
    errors.forEach(pokeError => {
        const requestName = `${pokeError.endpointMethod} ${pokeError.endpoint}`;
        if (!pokeErrors[requestName]) pokeErrors[requestName] = [];
        pokeErrors[requestName].push(pokeError);
    });

    pokeErrors = Object.entries(pokeErrors);
    console.log(pokeErrors);
    return (
        
        <TableContainer>
            <VStack>
                {
                    pokeErrors.map(errGroup => 
                        <Table key={errGroup[0]} variant='striped' colorScheme="blackAlpha" mt={5}>
                            <Thead bg="#C59f69" >
                                <Tr>
                                    <Th><Text color='black'>{errGroup[0]}</Text></Th>
                                    <Th><Text color='black'>Status Code</Text></Th>
                                    <Th><Text color='black'>Date</Text></Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {
                                    errGroup[1]
                                    .map(errInfo => 
                                        <Tr key={errInfo._id}>
                                            <Td>{errInfo.name}</Td>
                                            <Td>{errInfo.code}</Td>
                                            <Td>{new Date(errInfo.date).toLocaleString('en-CA')}</Td>
                                        </Tr>
                                    )
                                }
                            </Tbody>
                        </Table>
                    )
                }
            </VStack>
        </TableContainer>
        
    )
}

export default PanelEndpointErrors