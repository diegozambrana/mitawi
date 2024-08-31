import {
  Avatar,
  Box,
  Group,
  Menu,
  MenuDropdown,
  MenuItem,
  MenuTarget,
  rem,
  Title,
} from "@mantine/core";
import { IconLogout, IconSettings } from "@tabler/icons-react";
import Link from "next/link";

export const Header = () => {
  return (
    <Group justify="space-between" mx={16} mt={8}>
      <Link href="/" style={{ textDecoration: "none" }}>
        <Title order={1}>Mitawi</Title>
      </Link>
      <Box>
        <Menu>
          <MenuTarget>
            <Avatar radius="xl" />
          </MenuTarget>
          <MenuDropdown>
            <MenuItem
              leftSection={
                <IconSettings style={{ width: rem(14), height: rem(14) }} />
              }
            >
              Settings
            </MenuItem>
            <MenuItem
              leftSection={
                <IconLogout style={{ width: rem(14), height: rem(14) }} />
              }
              color="nord11"
            >
              Log out
            </MenuItem>
          </MenuDropdown>
        </Menu>
      </Box>
    </Group>
  );
};
