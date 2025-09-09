import { Box, Grid, GridItem, Tabs } from "@chakra-ui/react"
import { LuFolder, LuSquareCheck, LuUser } from "react-icons/lu"
import BarChart from "../common/BarChart"
import PieChart from "../common/PieChart";
import DoughnutChart from "../common/DoughnutChart";

const TabsDashboard = () => {

    return (
        <Tabs.Root defaultValue="members">
            <Tabs.List>
                <Tabs.Trigger value="members">
                    <LuUser />
                    Tasks
                </Tabs.Trigger>
                <Tabs.Trigger value="projects">
                    <LuFolder />
                    Projects
                </Tabs.Trigger>
                <Tabs.Trigger value="tasks">
                    <LuSquareCheck />
                    Settings
                </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="members">

                <Grid
                    templateRows={"repeat(2, 1fr)"}
                    templateColumns={"repeat(2, 1fr)"}
                    gap={"4"}
                >

                    <GridItem rowSpan={2} colSpan={{ base: 4, lg: 3 }} p={4} borderRadius="md" boxShadow="sm">
                        <Box h={{ base: '300px', md: '100%' }}>
                            <BarChart />
                        </Box>
                    </GridItem>

                    <GridItem colSpan={{ base: 4, sm: 2, lg: 1 }} p={4} borderRadius="md" boxShadow="sm">
                        <Box h="250px">
                            <PieChart />
                        </Box>
                    </GridItem>

                    <GridItem colSpan={{ base: 4, sm: 2, lg: 1 }} p={4} borderRadius="md" boxShadow="sm">
                        <Box h="250px">
                            <DoughnutChart />
                        </Box>
                    </GridItem>

                </Grid>


            </Tabs.Content>
            <Tabs.Content value="projects">Manage your projects</Tabs.Content>
            <Tabs.Content value="tasks">
                Manage your tasks for freelancers
            </Tabs.Content>
        </Tabs.Root>
    )
}

export default TabsDashboard