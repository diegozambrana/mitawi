import styles from "./page.module.css";
import { Button } from "@mantine/core";
export default function Home() {
  return (
    <main className={styles.main}>
      <div>Hola</div>
      <Button variant="filled">Hello</Button>
    </main>
  );
}
