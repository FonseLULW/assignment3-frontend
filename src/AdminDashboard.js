import React from "react";
import { useEffect, useState } from "react";
import { Text } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Center } from '@chakra-ui/react'
import PanelUsers from "./PanelUsers";
import axios from "axios";

function AdminDashboard({SERVER_URL, refreshAccessToken}) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function getUsers() {
            const refreshed = await refreshAccessToken();
            if (!refreshed) {
                console.log("Cannot refresh access token");
            } else {
                const res = await axios.get(`${SERVER_URL}/users`, {
                    headers: {'auth-token-access': localStorage.getItem("access-token")}
                })
        
                if (res.status == 200 && !res.data.pokeErrCode) {
                    console.log(res.data);
                    setUsers(res.data);
                }
            }
        }
        getUsers();
    }, [])

    return (
        <>
            <Text fontSize='3xl'>Admin Dashboard</Text>
            <Tabs mt={10}>
                <TabList>
                    <Tab>API Users</Tab>
                    <Tab>Top API Users</Tab>
                    <Tab>Top Users by Endpoint</Tab>
                    <Tab>4xx Errors by Endpoint</Tab>
                    <Tab>Recent 4xx Errors</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <PanelUsers users={users}/>
                    </TabPanel>
                    <TabPanel>
                    <p>two!</p>
                    </TabPanel>
                    <TabPanel>
                    <p>three!</p>
                    </TabPanel>
                    <TabPanel>
                    <p>four!</p>
                    </TabPanel>
                    <TabPanel>
                    <p>five!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )
}

export default AdminDashboard;