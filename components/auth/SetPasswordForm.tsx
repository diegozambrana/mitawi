"use client";
import { Button, Card, Group, TextInput, Container } from "@mantine/core";
import { useForm } from "@mantine/form";

export const SetPasswordForm = () => {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      password: "",
      confirmPassword: "",
    },

    validate: {
      password: (value) => (value.length >= 6 ? null : "Password is too short"),
      confirmPassword: (value) =>
        value.length >= 6 ? null : "Password is too short",
    },
  });

  return (
    <Container size="30rem" mt="md">
      <Card>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <TextInput
            withAsterisk
            label="Password"
            type="password"
            placeholder="password"
            key={form.key("password")}
            {...form.getInputProps("password")}
          />
          <TextInput
            withAsterisk
            label="Confirm Password"
            type="password"
            placeholder="password"
            key={form.key("confirmPassword")}
            {...form.getInputProps("confirmPassword")}
          />

          <Group justify="flex-end" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Card>
    </Container>
  );
};
