import { FC } from "react";
import { DetailElement } from "./DetailsEditor";
import { Box, Checkbox, NumberInput, TextInput } from "@mantine/core";

type DetailValueType = { [field: string]: string | number | boolean };

interface DetailTrackerActionProps {
  details: DetailElement[];
  value: DetailValueType;
  onChange: (value: DetailValueType) => void;
}

export const DetailTrackerAction: FC<DetailTrackerActionProps> = ({
  details,
  value,
  onChange,
}) => {
  const onChangeField = (
    field: string,
    newValue: string | number | boolean
  ) => {
    onChange({
      ...value,
      [field]: newValue,
    });
  };
  return (
    <Box>
      {details.map((detail) => (
        <Box key={detail.field} mt="md">
          {detail.type === "text" && (
            <TextInput
              label={detail.label}
              defaultValue={value[detail.field] as string}
              onBlur={(e) => onChangeField(detail.field, e.currentTarget.value)}
            />
          )}
          {detail.type === "number" && (
            <NumberInput
              label={detail.label}
              defaultValue={value[detail.field] as string}
              onBlur={(e) => onChangeField(detail.field, e.currentTarget.value)}
            />
          )}
          {detail.type === "boolean" && (
            <Checkbox
              label={detail.label}
              defaultChecked={value[detail.field] as boolean}
              onChange={(e) =>
                onChangeField(detail.field, e.currentTarget.checked)
              }
            />
          )}
        </Box>
      ))}
    </Box>
  );
};
