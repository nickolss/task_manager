import Header from "@/components/layout/Header"
import Sidebar from "@/components/layout/Sidebar"
import TabsDashboard from "@/components/layout/TabsDashboard"
import { Box, Heading } from "@chakra-ui/react"


const DashboardPage = () => {

  return (

    <Box display={"flex"}>
      <Sidebar />
      <Box flexGrow={1}>
        <Header title="Dashboard" />
        <Box p={"20px"} display={"flex"} flexDirection={"column"} gap={"20px"}>

          <Heading as={"h1"} size={"4xl"}>Overview</Heading>

          <TabsDashboard />
        </Box>

      </Box>
    </Box>

  )
}

export default DashboardPage
