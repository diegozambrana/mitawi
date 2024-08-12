"use client";

import Link from "next/link";

export const Sidebar = () => {
  return (
    <nav>
      <li>
        <Link href={"/testing-page"}>Testing page</Link>
      </li>
    </nav>
  );
};
