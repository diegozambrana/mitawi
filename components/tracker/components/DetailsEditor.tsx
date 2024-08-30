import {
  ActionIcon,
  Box,
  Button,
  Flex,
  Select,
  SimpleGrid,
  TextInput,
} from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import { FC } from "react";

export interface DetailElement {
  type: string;
  field: string;
  label: string;
}

interface DetailsEditorProps {
  value: DetailElement[];
  onChange: (value: DetailElement[]) => void;
}

export const baseElement = {
  type: "text",
  field: "",
  label: "",
};

/* 
  This component is used to edit the details of a tracker.
  It is used in the AddNewTracker component.
*/
export const DetailsEditor: FC<DetailsEditorProps> = ({ value, onChange }) => {
  const onChangeField = (
    index: number,
    field: string,
    fieldValue: string | null
  ) => {
    const newValue = [...value];
    newValue[index] = { ...newValue[index], [field]: fieldValue };
    onChange(newValue);
  };

  const addNewDetail = () => {
    onChange([...value, baseElement]);
  };

  const removeElement = (index: number) => {
    const newValue = [...value];
    newValue.splice(index, 1);
    onChange(newValue);
  };

  return (
    <Box>
      {value.map((item, index) => (
        <Flex align="center" mt="md" key={index}>
          <SimpleGrid cols={3} spacing="sm">
            <Select
              value={item.type}
              onChange={(type) => {
                console.log("type", type);
                onChangeField(index, "type", type);
              }}
              data={["text", "number", "boolean"]}
            />
            <TextInput
              value={item.field}
              onChange={(e) =>
                onChangeField(index, "field", e.currentTarget.value)
              }
              placeholder="Field"
            />
            <TextInput
              value={item.label}
              onChange={(e) =>
                onChangeField(index, "label", e.currentTarget.value)
              }
              placeholder="Label"
            />
          </SimpleGrid>

          <ActionIcon
            onClick={() => removeElement(index)}
            ml="sm"
            variant="light"
            color="nord11"
            size="sm"
            radius="xl"
          >
            <IconX style={{ width: "70%", height: "70%" }} stroke={1.5} />
          </ActionIcon>
        </Flex>
      ))}
      <Button fullWidth mt="sm" size="sm" onClick={addNewDetail}>
        + Add new detail
      </Button>
    </Box>
  );
};
