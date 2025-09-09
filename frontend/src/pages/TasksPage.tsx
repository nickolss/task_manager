import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { Box } from "@chakra-ui/react";

const TasksPage = () => {
    return (
        <Box display={"flex"}>
            <Sidebar />
            <Box flexGrow={1}>
                <Header title="Tasks" />
                TasksPage
            </Box>
        </Box>
    );
}

export default TasksPage;
