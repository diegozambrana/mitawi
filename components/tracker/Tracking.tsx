"use client";
import { useTracking } from "@/hooks/api/useTracking";
import {
  ActionIcon,
  Box,
  Button,
  Table,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
  Text,
  Title,
} from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import { FC, useEffect } from "react";
import { DetailTrackerAction } from "./components/DetailTrackerAction";

type TrackingProps = {
  trackerCode: string;
};

export const Tracking: FC<TrackingProps> = ({ trackerCode }) => {
  const {
    getTrackerDetail,
    trackerDetail,
    trackingList,
    currentTracking,
    startTracking,
    updateTracking,
    finishTracking,
  } = useTracking(trackerCode);

  useEffect(() => {
    getTrackerDetail();
  }, []);

  if (!trackerDetail) return <Box>...loading</Box>;

  return (
    <Box>
      <Title order={2}>{trackerDetail.name}</Title>
      <Text>{trackerDetail.description}</Text>
      {!currentTracking?.tracker_id && (
        <Box>
          <Button onClick={startTracking} mt="lg" fullWidth>
            Start
          </Button>
        </Box>
      )}

      {currentTracking?.tracker_id && (
        <Box>
          <DetailTrackerAction
            value={currentTracking.data}
            details={trackerDetail.details}
            onChange={(data) => {
              updateTracking(currentTracking.tracker_id, data);
            }}
          />
          <Button onClick={finishTracking} mt="lg" fullWidth>
            Finish
          </Button>
        </Box>
      )}

      <Table mt="lg">
        <TableThead>
          <TableTr>
            <TableTh>Start Date</TableTh>
            <TableTh>End Date</TableTh>
            <TableTh>Status</TableTh>
            <TableTh></TableTh>
          </TableTr>
        </TableThead>
        <TableTbody>
          {trackingList.map((track) => (
            <TableTr key={track.tracker_id}>
              <TableTd>{track.started_at}</TableTd>
              <TableTd>{track.finished_at}</TableTd>
              <TableTd>{track.status}</TableTd>
              <TableTd>
                <ActionIcon>
                  <IconX />
                </ActionIcon>
              </TableTd>
            </TableTr>
          ))}
        </TableTbody>
      </Table>
    </Box>
  );
};
