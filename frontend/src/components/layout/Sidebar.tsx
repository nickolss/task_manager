import { Box, Heading, VStack } from '@chakra-ui/react';
import { LuLayoutDashboard, LuSquareCheck, LuSettings } from 'react-icons/lu';
import NavLink from './NavLink';

const navItems = [
    { href: '/', icon: LuLayoutDashboard, label: 'Dashboard' },
    { href: '/tasks', icon: LuSquareCheck, label: 'Tasks' },
    { href: '/settings', icon: LuSettings, label: 'Settings' },
];

const Sidebar = () => {
    return (
        <Box
            as="aside"
            bg="bg.surface"
            w="250px"
            minH="100vh"
            borderRightWidth="1px"
            borderColor="border.default"
            p={4}
        >
            <Heading size="lg" mb={8}>
                Task Manager
            </Heading>

            <VStack as="nav" align="stretch">
                {navItems.map((item) => (
                    <NavLink key={item.label} to={item.href}>
                        <item.icon style={{ marginRight: '12px' }} />
                        {item.label}
                    </NavLink>
                ))}
            </VStack>
        </Box>
    );
};

export default Sidebar;
