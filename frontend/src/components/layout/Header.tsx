import { Avatar, Box, Heading, Menu, Portal } from '@chakra-ui/react';

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <Box
      as="header"
      bg="bg.surface"
      borderBottomWidth="1px"
      borderColor="border.default"
      px={6}
      h="60px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Heading as="h2" size="lg" color="text.primary">
        {title}
      </Heading>

      <Menu.Root positioning={{ placement: 'bottom-end' }}>
        <Menu.Trigger>
          <Avatar.Root size="sm">
            <Avatar.Image src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" />
            <Avatar.Fallback>SA</Avatar.Fallback>
          </Avatar.Root>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              <Menu.Item value="account">Account</Menu.Item>
              <Menu.Item value="settings">Settings</Menu.Item>
              <Menu.Separator />
              <Menu.Item value="logout" color="red.500">
                Logout
              </Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </Box>
  );
};

export default Header;