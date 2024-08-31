"use client";
import {
  Button,
  Card,
  Group,
  TextInput,
  Container,
  Box,
  Text,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import Link from "next/link";

export const LoginForm = () => {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) => (value.length >= 6 ? null : "Password is too short"),
    },
  });

  return (
    <Container size="30rem" mt="md">
      <Card>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <TextInput
            withAsterisk
            label="Email"
            placeholder="Email"
            key={form.key("email")}
            {...form.getInputProps("email")}
          />
          <TextInput
            withAsterisk
            label="Password"
            type="password"
            placeholder="password"
            key={form.key("password")}
            {...form.getInputProps("password")}
          />

          <Group justify="flex-end" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
        <Box mt="md" style={{ textAlign: "center" }}>
          <Text>
            You can <Link href="/auth/request">request an account</Link>
          </Text>
        </Box>
      </Card>
    </Container>
  );
};
