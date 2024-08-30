"use client";

import { Box, Button, Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconTrash } from "@tabler/icons-react";
import { useContext } from "react";
import { DashboardOrganizationContext } from "../dashboardOrganization/DashboardContext";

export default function CleanOrg() {
  const [opened, { open, close }] = useDisclosure(false);
  const { clean } = useContext(DashboardOrganizationContext);

  const onClean = () => {
    clean();
    close();
  };

  return (
    <>
      <Modal opened={opened} onClose={close} title="Clean organizations">
        <Text>Do you want to clean the organization dashboard?</Text>
        <Box ta="right" mt="1rem">
          <Button mr="1rem" color="nord3" onClick={close}>
            Cancel
          </Button>
          <Button color="nord11" variant="filled" onClick={onClean}>
            Clean
          </Button>
        </Box>
      </Modal>
      <Button
        fullWidth
        mr="0.25rem"
        size="sm"
        variant="filled"
        color="nord11"
        leftSection={<IconTrash size={14} />}
        onClick={open}
      >
        Clean
      </Button>
    </>
  );
}
