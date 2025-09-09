import { Tabs } from "@chakra-ui/react"
import { LuFolder, LuSquareCheck, LuUser } from "react-icons/lu"
import BarChart from "../common/BarChart"

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
                <BarChart
                    series={[{
                        "name": "age",
                        "color": "red"
                    }]}
                    data={[
                        {
                            "name": "123",
                            "age": "78"
                        },
                        {
                            "name": "45",
                            "age": "100"
                        }]}
                    xKey="name"
                />
            </Tabs.Content>
            <Tabs.Content value="projects">Manage your projects</Tabs.Content>
            <Tabs.Content value="tasks">
                Manage your tasks for freelancers
            </Tabs.Content>
        </Tabs.Root>
    )
}

export default TabsDashboard