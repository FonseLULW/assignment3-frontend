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
    Text
} from '@chakra-ui/react'

function PanelUsers() {
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
                    <Tr>
                        <Td>fonse</Td>
                        <Td>fonse@fonse.com</Td>
                        <Td>User</Td>
                        <Td>20</Td>
                    </Tr>
                    <Tr>
                        <Td>fonse</Td>
                        <Td>fonse@fonse.com</Td>
                        <Td>User</Td>
                        <Td>20</Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    )
}

export default PanelUsers;