import { BaseSyntheticEvent, FC } from "react";
import { DetailElement } from "./DetailsEditor";
import { Box, Checkbox, Input, NumberInput, TextInput } from "@mantine/core";

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
              //   value={value[detail.field]}
              onBlur={(e) => onChangeField(detail.field, e.currentTarget.value)}
            />
          )}
          {detail.type === "number" && (
            <NumberInput
              label={detail.label}
              onBlur={(e) => onChangeField(detail.field, e.currentTarget.value)}
            />
          )}
          {detail.type === "boolean" && (
            <Checkbox
              label={detail.label}
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
