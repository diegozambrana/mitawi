"use client";

import Link from "next/link";
import { Box, NavLink } from "@mantine/core";
import { usePathname } from "next/navigation";
import {
  IconBrandGithub,
  IconBrandPython,
  IconBrandYahoo,
} from "@tabler/icons-react";

export const Sidebar = () => {
  const pathname = usePathname();

  const links = [
    {
      label: "Repositories",
      path: "/compareRepo",
      icon: IconBrandGithub,
    },
    {
      label: "Organizations",
      path: "/compareOrg",
      icon: IconBrandGithub,
    },
    {
      label: "Package Downloads",
      path: "/compareDownloads",
      icon: IconBrandPython,
    },
    {
      label: "Yahoo Finance",
      path: "/yahooFinanceHistory",
      icon: IconBrandYahoo,
    },
  ];

  return (
    <Box>
      {links.map((link) => (
        <Box key={`li_${link.label}`} style={{ color: "nord.4" }}>
          <Link href={link.path} passHref legacyBehavior>
            <NavLink
              component="a"
              leftSection={<link.icon size="1rem" stroke={1.5} />}
              label={link.label}
              variant="filled"
              active={pathname.startsWith(link.path)} /* icon={icon} */
            />
          </Link>
        </Box>
      ))}
    </Box>
  );
};
