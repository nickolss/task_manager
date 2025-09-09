import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import TabsDashboard from '@/components/layout/TabsDashboard';
import { Box, Heading } from '@chakra-ui/react';

const DashboardPage = () => {
  return (
    <Box display="flex">
      <Sidebar />
      <Box flexGrow={1} bg="bg.page">
        <Header title="Dashboard" />
        <Box
          p={6}
          display="flex"
          flexDirection="column"
          gap={6}
        >
          <Heading as="h1" size="xl">
            Overview
          </Heading>

          <TabsDashboard />
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardPage;