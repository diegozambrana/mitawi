import { Autocomplete, Box, Group, Text, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
import { FC, useState } from "react";
import { useRouter } from "next/navigation";

export const SelectSymbolModal: FC = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useState("");
  const router = useRouter();
  const onSelect = () => {
    router.push(`/yahooFinanceHistory?symbol=${value}`);
    close();
  };
  return (
    <Box>
      <Modal opened={opened} onClose={close} title="Select a symbol">
        <Text>
          Enter a symbol value like <code>BTC-USD</code>
        </Text>
        <Autocomplete
          mt="md"
          data={["BTC-USD", "ETH-USD", "DOGE-USD"]}
          placeholder="Select a symbol"
          label="Symbol"
          value={value}
          onChange={setValue}
          required
        />
        <Group justify="end" mt="md">
          <Button onClick={close} color="nord3">
            Cancel
          </Button>
          <Button onClick={onSelect}>Select</Button>
        </Group>
      </Modal>

      <Button onClick={open}>Select Symbol</Button>
    </Box>
  );
};
