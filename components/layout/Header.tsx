import { Title } from "@mantine/core";
import Link from "next/link";

export const Header = () => {
  return (
    <div style={{ display: "inline-block" }}>
      <Link href="/">
        <Title order={1}>Mitawi</Title>
      </Link>
    </div>
  );
};
