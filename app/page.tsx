import styles from "./page.module.css";
import { Button, Text, Title } from "@mantine/core";
export default function Home() {
  return (
    <main className={styles.main}>
      <Title order={2}>Mitawi</Title>
      <Text>Welcome to Mitawi</Text>
      <Text>This is a collection of tools that use AI for analytics.</Text>
    </main>
  );
}
