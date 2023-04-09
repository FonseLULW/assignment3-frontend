import React from "react";
import { useEffect, useState } from "react";
import { Text } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Center } from '@chakra-ui/react'
import PanelUsers from "./PanelUsers";
import axios from "axios";
import PanelTopUsers from "./PanelTopUsers";
import PanelTopUsersEndpoint from "./PanelTopUsersEndpoint";
import PanelEndpointErrors from "./PanelEndpointErrors";
import PanelRecentErrors from "./PanelRecentErrors";

function AdminDashboard({SERVER_URL, refreshAccessToken}) {
    const [users, setUsers] = useState([]);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        async function getInfo() {
            const refreshed = await refreshAccessToken();
            if (!refreshed) {
                console.log("Cannot refresh access token");
            } else {
                let resUsers, resErrors;
                const accessToken = localStorage.getItem("access-token");
                [resUsers, resErrors] = await Promise.all([
                    await axios.get(`${SERVER_URL}/users`, {
                        headers: {'auth-token-access': accessToken}
                    }),
                    await axios.get(`${SERVER_URL}/errors`, {
                        headers: {'auth-token-access': accessToken}
                    })
                ]);
        
                if (resUsers.status == 200 && !resUsers.data.pokeErrCode) {
                    setUsers(resUsers.data);
                }

                if (resErrors.status == 200 && !resErrors.data.pokeErrCode) {
                    setErrors(resErrors.data);
                }
            }
        }

        getInfo();
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
                        <PanelTopUsers users={users}/>
                    </TabPanel>
                    <TabPanel>
                        <PanelTopUsersEndpoint users={users} />
                    </TabPanel>
                    <TabPanel>
                        <PanelEndpointErrors errors={errors} />
                    </TabPanel>
                    <TabPanel>
                        <PanelRecentErrors errors={errors} />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )
}

export default AdminDashboard;