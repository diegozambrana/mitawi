import { Button, Flex, Modal, Text } from "@mantine/core";
import { FC } from "react";

type RemoveTrackingProps = {
  open: boolean;
  onClose: () => void;
  onRemove: () => void;
};

export const RemoveTracking: FC<RemoveTrackingProps> = ({
  open,
  onClose,
  onRemove,
}) => {
  return (
    <Modal title="Remove track" opened={open} onClose={onClose}>
      <Text>Are you want to remove this track?</Text>
      <Flex justify="flex-end" mt="md">
        <Button variant="filled" color="gray" onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={onRemove} ml="sm">
          Remove
        </Button>
      </Flex>
    </Modal>
  );
};
