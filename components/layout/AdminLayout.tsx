"use client";
import { AppShell, Box, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

export const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 250,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Header BurgerOpened={opened} onClickBurger={toggle} />
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Sidebar />
      </AppShell.Navbar>

      <AppShell.Main>
        <Box>{children}</Box>
      </AppShell.Main>
    </AppShell>
  );
};
