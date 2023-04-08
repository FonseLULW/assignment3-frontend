import React from "react";
import { Text } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Center } from '@chakra-ui/react'
import PanelUsers from "./PanelUsers";

function AdminDashboard() {
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
                        <PanelUsers />
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