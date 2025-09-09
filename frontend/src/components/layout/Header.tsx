import { Avatar, Box, Heading, Menu, Portal } from "@chakra-ui/react"

type HeaderProps = {
  title: string
}

const Header = (
  { title }: HeaderProps
) => {
  return (
    <Box as={"header"} bg={"red"} padding={"10px"} w={"100%"} h={"60px"} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
      <Heading>
        {title}
      </Heading>

      <Menu.Root positioning={{ placement: "bottom" }}>
        <Menu.Trigger rounded="full" focusRing="outside">
          <Avatar.Root size="sm">
            <Avatar.Fallback name="Segun Adebayo" />
            <Avatar.Image src="https://bit.ly/sage-adebayo" />
          </Avatar.Root>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              <Menu.Item value="account">Account</Menu.Item>
              <Menu.Item value="settings">Settings</Menu.Item>
              <Menu.Item value="logout">Logout</Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </Box>
  )
}

export default Header;