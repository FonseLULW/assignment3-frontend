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
    Tag
} from '@chakra-ui/react'

function PanelUsers({users}) {
    return (
        <TableContainer>
            <Table variant='striped' colorScheme="blackAlpha" mt={5}>
                <Thead bg="#C59f69" >
                    <Tr>
                        <Th><Text color='black'>Username</Text></Th>
                        <Th><Text color='black'>Email</Text></Th>
                        <Th><Text color='black'>Role</Text></Th>
                        <Th><Text color='black'>Times Logged In</Text></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        users.map(user => 
                            <Tr>
                                <Td>{user.username}</Td>
                                <Td>{user.email}</Td>
                                <Td><Tag colorScheme="orange">{user.role}</Tag></Td>
                                <Td>{user.timesLoggedIn}</Td>
                            </Tr>
                        )
                    }
                </Tbody>
            </Table>
        </TableContainer>
    )
}

export default PanelUsers;