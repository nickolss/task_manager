import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { Box } from "@chakra-ui/react";

const SettingsPage = () => {
    return (
        <Box display={"flex"}>
            <Sidebar />
            <Box flexGrow={1}>
                <Header title="Settings" />
                SettingsPage
            </Box>
        </Box>
    )
}

export default SettingsPage;