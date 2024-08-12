import { Box, Title } from "@mantine/core";
import Link from "next/link";

export const Header = () => {
  return (
    <Box style={{ display: "inline-block" }} ml={16}>
      <Link href="/" style={{ textDecoration: "none", color: "black" }}>
        <Title order={1}>Mitawi</Title>
      </Link>
    </Box>
  );
};
