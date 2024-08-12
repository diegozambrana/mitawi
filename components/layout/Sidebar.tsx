"use client";

import Link from "next/link";

export const Sidebar = () => {
  const links = [
    { label: "Repositories", path: "/compareRepo" },
    { label: "Organizations", path: "/compareOrg" },
    { label: "Package Downloads", path: "/compareDownloads" },
  ];
  return (
    <nav>
      {links.map((link) => (
        <li>
          <Link key={`li_${link.label}`} href={link.path}>
            {link.label}
          </Link>
        </li>
      ))}
    </nav>
  );
};
