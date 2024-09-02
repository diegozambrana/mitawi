"use client";
import {
  Avatar,
  Box,
  Burger,
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
import { FC } from "react";

type HeaderProps = {
  BurgerOpened: boolean;
  onClickBurger: () => void;
};

export const Header: FC<HeaderProps> = ({ BurgerOpened, onClickBurger }) => {
  return (
    <Group justify="space-between" mx={16} mt={8}>
      <Box className="burger__button">
        <Burger
          opened={BurgerOpened}
          onClick={onClickBurger}
          hiddenFrom="sm"
          size="sm"
        />
      </Box>
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
