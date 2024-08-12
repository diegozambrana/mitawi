"use client";

import Link from "next/link";
import { NavLink } from "@mantine/core";
import { usePathname } from "next/navigation";
import { IconBrandGithub, IconBrandPython } from "@tabler/icons-react";

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
  ];

  return (
    <div>
      {links.map((link) => (
        <div key={`li_${link.label}`}>
          <Link href={link.path} passHref legacyBehavior>
            <NavLink
              component="a"
              leftSection={<link.icon size="1rem" stroke={1.5} />}
              label={link.label}
              variant="filled"
              active={pathname.startsWith(link.path)} /* icon={icon} */
            />
          </Link>
        </div>
      ))}
    </div>
  );
};
