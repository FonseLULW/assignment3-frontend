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
    Tag
} from '@chakra-ui/react'

function PanelRecentErrors({errors}) {
    return (
        <TableContainer>
            <Table variant='striped' colorScheme="blackAlpha" mt={5}>
                <Thead bg="#C59f69" >
                    <Tr>
                        <Th><Text color='black'>Date</Text></Th>
                        <Th><Text color='black'>Error Name</Text></Th>
                        <Th><Text color='black'>Status Code</Text></Th>
                        <Th><Text color='black'>Endpoint</Text></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        errors
                        .sort((a, b) => new Date(b.date) - new Date(a.date))
                        .map(pokeError => 
                            <Tr key={pokeError._id}>
                                <Td>{new Date(pokeError.date).toLocaleString('en-CA')}</Td>
                                <Td>{pokeError.name}</Td>
                                <Td>{pokeError.code}</Td>
                                <Td><Tag colorScheme="orange">{pokeError.endpointMethod + ' ' +  pokeError.endpoint}</Tag></Td>
                            </Tr>
                        )
                    }
                </Tbody>
            </Table>
        </TableContainer>
    )
}

export default PanelRecentErrors;