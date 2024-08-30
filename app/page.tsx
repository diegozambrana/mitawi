import styles from "./page.module.scss";
import { Box, Button, Card, Text, Title } from "@mantine/core";
export default function Home() {
  return (
    <main className={styles.main}>
      <Card shadow="sm" padding="md" radius="md">
        <Box my={16} mx={8}>
          <Title order={2}>Mitawi</Title>
          <Text mt={16}>
            Welcome to Mitawi, this is a collection of tools that use AI for
            analytics.
          </Text>
        </Box>
      </Card>
    </main>
  );
}
