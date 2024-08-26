"use client";
import { useTracker } from "@/hooks/api/useTracker";
import { Box, Button, Card, Grid, GridCol, Text, Title } from "@mantine/core";
import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { AddNewTracker } from "./components/AddNewTracker";

/* 
  This component is used to display all the trackers in the system.
  It uses the useTracker hook to fetch the tracker details from the API.
  It also uses the AddNewTracker component to create a new tracker.
 */

export const Tracker: FC = () => {
  const [trackerDetails, setTrackerDetails] = useState<any[]>();
  const [openNew, setOpenNew] = useState(true);

  const { getTrackerDeatils } = useTracker();

  const loadData = () => {
    // load tracker details
    getTrackerDeatils().then((res) => {
      setTrackerDetails(res.data);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Title order={2}>Katik Tracker</Title>
      <Box mt="sm">
        <Button onClick={() => setOpenNew(true)}>+ Create new tracker</Button>
      </Box>
      <Grid mt="md">
        {trackerDetails?.map((tracker) => (
          <GridCol span={{ base: 12, sm: 6, md: 4, lg: 3 }} key={tracker.id}>
            <Card shadow="sm" padding="md" radius="md">
              <Title order={4}>{tracker.code}</Title>
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
    </div>
  );
};
