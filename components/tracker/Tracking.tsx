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
import { IconCheck, IconPencil, IconX } from "@tabler/icons-react";
import { FC, useEffect, useRef, useState } from "react";
import { DetailTrackerAction } from "./components/DetailTrackerAction";
import { formatDateTime } from "@/utils/datetime";
import { RemoveTracking } from "./components/RemoveTracking";
import { EditTracking } from "./components/EditTracking";

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
    deleteTracking,
  } = useTracking(trackerCode);

  const [openDeleteTracking, setOpenDeleteTracking] = useState(false);
  const [openEditTracking, setOpenEditTracking] = useState(false);
  const [selectedTracking, setSelectedTracking] = useState<any>();
  const selectedTrackingId = useRef("");

  const onSelectTracking = (tracker_id: string) => {
    setSelectedTracking(
      trackingList.find((track) => track.tracker_id === tracker_id)
    );
    selectedTrackingId.current = tracker_id;
  };
  const onConfirmRemoveTracking = () => {
    deleteTracking(selectedTrackingId.current);
    setOpenDeleteTracking(false);
  };

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
              updateTracking(currentTracking.tracker_id, { data });
            }}
          />
          <Button onClick={finishTracking} mt="lg" fullWidth>
            Finish
          </Button>
        </Box>
      )}

      {trackingList.length === 0 && <Box mt="md">No Data to display</Box>}

      <div style={{ overflowX: "auto" }}>
        {trackingList.length > 0 && (
          <Table mt="lg">
            <TableThead>
              <TableTr>
                <TableTh>Start Date</TableTh>
                <TableTh>End Date</TableTh>
                <TableTh>Status</TableTh>
                {trackerDetail.details.map((detail: any) => (
                  <TableTh key={detail.field}>{detail.label}</TableTh>
                ))}
                <TableTh>Actions</TableTh>
              </TableTr>
            </TableThead>
            <TableTbody>
              {trackingList.map((track) => (
                <TableTr key={track.tracker_id}>
                  <TableTd>{formatDateTime(track.started_at)}</TableTd>
                  <TableTd>{formatDateTime(track.finished_at)}</TableTd>
                  <TableTd>{track.status}</TableTd>
                  {trackerDetail.details.map((detail: any) => (
                    <TableTd key={detail.field}>
                      {detail.type === "boolean" &&
                        (!track.data ? (
                          "-"
                        ) : track.data[detail.field] ? (
                          <IconCheck />
                        ) : (
                          <IconX />
                        ))}
                      {track.data && track.data[detail.field]}
                    </TableTd>
                  ))}
                  <TableTd>
                    <ActionIcon
                      mr="sm"
                      onClick={() => {
                        onSelectTracking(track.tracker_id);
                        setOpenEditTracking(true);
                      }}
                    >
                      <IconPencil />
                    </ActionIcon>

                    <ActionIcon
                      onClick={() => {
                        onSelectTracking(track.tracker_id);
                        setOpenDeleteTracking(true);
                      }}
                    >
                      <IconX />
                    </ActionIcon>
                  </TableTd>
                </TableTr>
              ))}
            </TableTbody>
          </Table>
        )}
      </div>
      <RemoveTracking
        open={openDeleteTracking}
        onClose={() => setOpenDeleteTracking(false)}
        onRemove={onConfirmRemoveTracking}
      />
      {openEditTracking && selectedTracking && (
        <EditTracking
          open={openEditTracking}
          onClose={() => setOpenEditTracking(false)}
          onEdit={(updatedData) => {
            console.log(
              "~~~ currentTracking",
              selectedTrackingId.current,
              updatedData
            );
            updateTracking(
              selectedTrackingId.current,
              updatedData,
              true
            ).finally(() => {
              setOpenEditTracking(false);
            });
          }}
          trackingData={selectedTracking}
          details={trackerDetail.details}
        />
      )}
    </Box>
  );
};
