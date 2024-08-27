import { Box, Button, Flex, Modal, TextInput, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { FC, useState } from "react";
import { baseElement, DetailElement, DetailsEditor } from "./DetailsEditor";
import { useTracker } from "@/hooks/api/useTracker";

type AddNewTracker = {
  open: boolean;
  onClose: () => void;
  onCreate: () => void;
};

export const AddNewTracker: FC<AddNewTracker> = ({
  open,
  onClose,
  onCreate,
}) => {
  const { createTracker } = useTracker();
  const [details, setDetails] = useState<DetailElement[]>([baseElement]);

  const form = useForm({
    initialValues: {
      name: "",
      description: "",
    },
    validate: {
      name: (value: string) =>
        value.length === 0
          ? "This field is required"
          : value.length <= 2
          ? "This field is too short"
          : null,
      description: (value: string) =>
        value.length === 0
          ? "This field is required"
          : value.length <= 2
          ? "This field is too short"
          : null,
    },
  });

  const onSubmit = (values: any) => {
    createTracker({ ...values, details })
      .then(() => {
        onCreate();
      })
      .finally(() => onClose());
  };

  return (
    <Modal opened={open} onClose={onClose} title="Create a new Tracker">
      <form
        onSubmit={form.onSubmit((values) => {
          onSubmit(values);
        })}
      >
        <TextInput
          label="Name"
          placeholder="Name"
          required
          {...form.getInputProps("name")}
        />
        <TextInput
          label="Description"
          placeholder="Description"
          required
          mt="sm"
          {...form.getInputProps("description")}
        />
        <Title order={5} mt="sm">
          Details
        </Title>
        <Box>
          <DetailsEditor value={details} onChange={setDetails} />
        </Box>
        <Flex justify="flex-end" mt="md">
          <Button variant="filled" color="gray" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" ml="sm">
            Submit
          </Button>
        </Flex>
      </form>
    </Modal>
  );
};
