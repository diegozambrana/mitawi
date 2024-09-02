import { Button, Flex, Modal, Select, Text } from "@mantine/core";
import { BaseSyntheticEvent, FC, useState } from "react";
import { DateTimePicker } from "@mantine/dates";
import { DetailTrackerAction } from "./DetailTrackerAction";

type EditTrackingProps = {
  trackingData: any;
  details: any;
  open: boolean;
  onClose: () => void;
  onEdit: () => void;
};

export const EditTracking: FC<EditTrackingProps> = ({
  trackingData,
  details,
  open,
  onClose,
  onEdit,
}) => {
  const [tracking, setTracking] = useState<any>({
    ...trackingData,
    started_at: new Date(trackingData.started_at),
    finished_at: new Date(trackingData.finished_at),
  });

  const onSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    console.log("tracking", tracking);
  };

  if (!trackingData) {
    return null;
  }

  const onChange = (field: string, value: any) => {
    setTracking({
      ...tracking,
      [field]: value,
    });
  };

  return (
    <Modal title="Edit track" opened={open} onClose={onClose}>
      <form onSubmit={onSubmit}>
        <DateTimePicker
          label="Started at"
          placeholder="Started at"
          value={tracking.started_at}
          onChange={(date) => {
            console.log("date", date);
            onChange("started_at", date);
          }}
        />
        <DateTimePicker
          mt="sm"
          label="Finished at"
          placeholder="Finished at"
          value={tracking.finished_at}
          onChange={(date) => {
            console.log("date", date);
            onChange("finished_at", date);
          }}
        />
        <Select
          mt="sm"
          value={tracking.status}
          label="Status"
          onChange={(type) => {
            console.log("type", type);
            onChange("status", type);
          }}
          data={["started", "finished"]}
        />
        {tracking?.data && (
          <DetailTrackerAction
            details={details}
            value={tracking.data}
            onChange={(data) => {
              onChange("data", data);
            }}
          />
        )}
        <Flex justify="flex-end" mt="md">
          <Button variant="filled" color="nord3" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" ml="sm">
            Update
          </Button>
        </Flex>
      </form>
    </Modal>
  );
};
