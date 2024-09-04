import { Box, Button, Flex, Modal, TextInput, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { BaseSyntheticEvent, FC, use, useEffect, useState } from "react";
import { baseElement, DetailElement, DetailsEditor } from "./DetailsEditor";
import { useTracker } from "@/hooks/api/useTracker";

type EditTrackerDetailProps = {
  open: boolean;
  onClose: () => void;
  onEdit: () => void;
  tracker: {
    name: string;
    description: string;
    details: DetailElement[];
    id: string;
  };
};

export const EditTrackerDetail: FC<EditTrackerDetailProps> = ({
  open,
  onClose,
  onEdit,
  tracker,
}) => {
  const { editTracker } = useTracker();
  const [editedTracker, setEditedTracker] = useState({ ...tracker });

  useEffect(() => {
    setEditedTracker({ ...tracker });
  }, [tracker]);

  const onSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    editTracker(editedTracker.id, editedTracker).then(() => {
      onEdit();
      onClose();
    });
  };

  return (
    <Modal opened={open} onClose={onClose} title="Create a new Tracker">
      <form onSubmit={onSubmit}>
        <TextInput
          label="Name"
          placeholder="Name"
          required
          value={editedTracker.name}
          onChange={(e) =>
            setEditedTracker({ ...editedTracker, name: e.target.value })
          }
        />
        <TextInput
          label="Description"
          placeholder="Description"
          required
          mt="sm"
          value={editedTracker.description}
          onChange={(e) =>
            setEditedTracker({ ...editedTracker, description: e.target.value })
          }
          // {...form.getInputProps("description")}
        />
        <Title order={5} mt="sm">
          Details
        </Title>
        <Box>
          {editedTracker.details?.length > 0 && (
            <DetailsEditor
              value={editedTracker.details}
              onChange={(newDetails) => {
                setEditedTracker({ ...editedTracker, details: newDetails });
              }}
            />
          )}
        </Box>
        <Flex justify="flex-end" mt="md">
          <Button variant="filled" color="nord3" onClick={onClose}>
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
