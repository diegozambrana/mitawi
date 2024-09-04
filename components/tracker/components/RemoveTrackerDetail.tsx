import { Button, Flex, Modal, Text } from "@mantine/core";
import { FC } from "react";

type RemoveTrackerDetailProps = {
  open: boolean;
  tracker: { name: string; [k: string]: any };
  onClose: () => void;
  onRemove: () => void;
};

export const RemoveTrackerDetail: FC<RemoveTrackerDetailProps> = ({
  open,
  tracker,
  onClose,
  onRemove,
}) => {
  if (!tracker) return null;
  return (
    <Modal title="Remove track" opened={open} onClose={onClose}>
      <Text>Do you want to remove this {`"${tracker.name}"`} tracker?</Text>
      <Flex justify="flex-end" mt="md">
        <Button variant="filled" color="nord3" onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={onRemove} ml="sm">
          Remove
        </Button>
      </Flex>
    </Modal>
  );
};
