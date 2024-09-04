"use client";
import { useTracker } from "@/hooks/api/useTracker";
import {
  ActionIcon,
  Box,
  Button,
  Card,
  CardSection,
  CloseButton,
  Container,
  Flex,
  Grid,
  GridCol,
  Group,
  Menu,
  MenuDropdown,
  MenuItem,
  MenuTarget,
  rem,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { BaseSyntheticEvent, FC, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AddNewTracker } from "./components/AddNewTracker";
import { IconDots, IconPencil, IconTrash } from "@tabler/icons-react";
import { RemoveTrackerDetail } from "./components/RemoveTrackerDetail";
import { EditTrackerDetail } from "./components/EditTrackerDetail";

/* 
  This component is used to display all the trackers in the system.
  It uses the useTracker hook to fetch the tracker details from the API.
  It also uses the AddNewTracker component to create a new tracker.
 */

export const Tracker: FC = () => {
  const trackerDetails = useRef<any[]>();
  const [trackerDetailsFiltered, setTrackerDetailsFiltered] = useState<any[]>();
  const search = useRef<HTMLInputElement>(null);
  const [openNew, setOpenNew] = useState(false);
  const [openRemove, setOpenRemove] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedTracker, setSelectedTracker] = useState<any>();

  const { getTrackerDeatils, deleteTracker } = useTracker();

  const loadData = () => {
    // load tracker details
    getTrackerDeatils().then((res) => {
      trackerDetails.current = res.data;
      setTrackerDetailsFiltered(res.data);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  const filterTracker = () => {
    setTrackerDetailsFiltered(
      trackerDetails.current?.filter((tracker) =>
        tracker.name.toLowerCase().includes(search.current?.value.toLowerCase())
      )
    );
  };

  const onSearch = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    filterTracker();
  };

  return (
    <Container>
      <Title order={2}>Katik Tracker</Title>
      <Box>
        <form onSubmit={onSearch}>
          <Flex>
            <Box style={{ width: "100%" }}>
              <TextInput
                placeholder="Search tracker"
                ref={search}
                rightSection={
                  <CloseButton
                    aria-label="Clear input"
                    onClick={() => {
                      search.current!.value = "";
                      filterTracker();
                    }}
                    style={{
                      display: search.current?.value ? undefined : "none",
                    }}
                  />
                }
              />
            </Box>
            <Button ml="sm" type="submit" w="100px">
              Search
            </Button>
          </Flex>
        </form>
      </Box>
      <Box mt="sm">
        <Button onClick={() => setOpenNew(true)}>+ Create new tracker</Button>
      </Box>
      <Grid mt="md">
        {trackerDetailsFiltered?.map((tracker) => (
          <GridCol span={{ base: 12, sm: 6, md: 4, lg: 3 }} key={tracker.id}>
            <Card shadow="sm" padding="md" radius="md">
              <CardSection inheritPadding py="xs">
                <Group justify="space-between">
                  <Title order={4}>{tracker.name}</Title>
                  <Menu withinPortal position="bottom-end" shadow="sm">
                    <MenuTarget>
                      <ActionIcon variant="subtle" color="gray">
                        <IconDots style={{ width: rem(16), height: rem(16) }} />
                      </ActionIcon>
                    </MenuTarget>

                    <MenuDropdown>
                      <MenuItem
                        leftSection={
                          <IconPencil
                            style={{ width: rem(14), height: rem(14) }}
                          />
                        }
                        onClick={() => {
                          setSelectedTracker(tracker);
                          setOpenEdit(true);
                        }}
                      >
                        Edit
                      </MenuItem>
                      <MenuItem
                        leftSection={
                          <IconTrash
                            style={{ width: rem(14), height: rem(14) }}
                          />
                        }
                        onClick={() => {
                          setSelectedTracker(tracker);
                          setOpenRemove(true);
                        }}
                        color="red"
                      >
                        Delete
                      </MenuItem>
                    </MenuDropdown>
                  </Menu>
                </Group>
              </CardSection>

              <Text>{tracker.description}</Text>
              <Box mt="sm">
                <Button component={Link} href={`/tracker/${tracker.code}`}>
                  Go to
                </Button>
              </Box>
            </Card>
          </GridCol>
        ))}
      </Grid>
      <AddNewTracker
        open={openNew}
        onClose={() => {
          setOpenNew(false);
        }}
        onCreate={loadData}
      />
      <RemoveTrackerDetail
        open={openRemove}
        onClose={() => {
          setOpenRemove(false);
        }}
        tracker={selectedTracker}
        onRemove={() => {
          deleteTracker(selectedTracker.id).then(() => {
            loadData();
            setOpenRemove(false);
          });
        }}
      />
      {selectedTracker && (
        <EditTrackerDetail
          open={openEdit}
          onClose={() => {
            setOpenEdit(false);
          }}
          tracker={selectedTracker}
          onEdit={() => {
            loadData();
          }}
        />
      )}
    </Container>
  );
};
