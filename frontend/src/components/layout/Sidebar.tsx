import { Box, Link, Heading } from "@chakra-ui/react";

const Sidebar = () => {
    return(
        <Box as={"aside"} bg={"gray"} padding={"10px"} w={"200px"} h={"100dvh"}>
            <Heading size={"xl"}>Task Manager</Heading>

            <Box as={"ul"} display={"flex"} flexDirection={"column"} gap={"10px"} marginTop={"20px"}>
                <Link href="/">Home</Link>
                <Link href="/tasks">Tasks</Link>
                <Link href="/settings">Settings</Link>
            </Box>
        </Box>
    )
}

export default Sidebar;