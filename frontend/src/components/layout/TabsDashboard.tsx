import { Box, Grid, GridItem, Tabs } from '@chakra-ui/react';
import { LuFolder, LuLayoutDashboard } from 'react-icons/lu';
import BarChart from '../common/BarChart';
import PieChart from '../common/PieChart';
import DoughnutChart from '../common/DoughnutChart';

const TabsDashboard = () => {
    return (
        <Tabs.Root defaultValue="overview" variant="outline">
            <Tabs.List>
                <Tabs.Trigger
                    value="overview"
                    display="flex"
                    alignItems="center"
                    gap={2}
                    fontSize="sm"
                    fontWeight="medium"
                    color="text.secondary"
                    _selected={{
                        color: 'brand.solid',
                        borderColor: 'brand.solid',
                    }}
                >
                    <LuLayoutDashboard />
                    Overview
                </Tabs.Trigger>

                <Tabs.Trigger
                    value="projects"
                    display="flex"
                    alignItems="center"
                    gap={2}
                    fontSize="sm"
                    fontWeight="medium"
                    color="text.secondary"
                    _selected={{
                        color: 'brand.solid',
                        borderColor: 'brand.solid',
                    }}
                >
                    <LuFolder />
                    Projects
                </Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content value="overview" pt={6}>
                <Grid
                    gap={6}
                    templateRows={{ base: 'auto', md: 'repeat(2, 1fr)' }}
                    templateColumns="repeat(4, 1fr)"
                >
                    <GridItem
                        bg="bg.surface"
                        rowSpan={2}
                        colSpan={{ base: 4, lg: 3 }}
                        p={4}
                        borderRadius="md"
                        boxShadow="sm"
                    >
                        <Box h={{ base: '300px', md: '450px' }}>
                            <BarChart />
                        </Box>
                    </GridItem>

                    <GridItem
                        bg="bg.surface"
                        colSpan={{ base: 4, sm: 2, lg: 1 }}
                        p={4}
                        borderRadius="md"
                        boxShadow="sm"
                    >
                        <Box h="220px">
                            <PieChart />
                        </Box>
                    </GridItem>

                    <GridItem
                        bg="bg.surface"
                        colSpan={{ base: 4, sm: 2, lg: 1 }}
                        p={4}
                        borderRadius="md"
                        boxShadow="sm"
                    >
                        <Box h="220px">
                            <DoughnutChart />
                        </Box>
                    </GridItem>
                </Grid>
            </Tabs.Content>

            <Tabs.Content value="projects" pt={6}>
                Manage your projects
            </Tabs.Content>
        </Tabs.Root>
    );
};

export default TabsDashboard;
