"use client";

import { FC, useContext, useMemo, useState } from "react";
import {
  Box,
  Card,
  Grid,
  GridCol,
  Group,
  SegmentedControl,
  Title,
} from "@mantine/core";
import { YFDashboardContext } from "./YFDashboardContext";
import { TimeSerieChart } from "../charts/TimeSerieChart";
import { TableFromListDict } from "../TableFromListDict";

export const YFDashboard: FC = () => {
  const { data, loading } = useContext(YFDashboardContext);
  const [filter, setFilter] = useState<string>("all");
  const dataChart: any = useMemo(() => {
    if (!data) return [];
    let filteredData = [...data.data];
    if (filter !== "all") {
      filteredData = filteredData.slice(parseInt(`-${filter}`));
    }

    return {
      name: data.symbol,
      data: filteredData.map((item: any) => ({
        date: item.Date,
        count: item.Close,
      })),
    };
  }, [data, filter]);

  const dataForecast: any = useMemo(() => {
    if (!data) return [];
    return {
      name: data.symbol,
      data: data.forecast.map((item: any) => ({
        date: item.Date,
        count: item.Close,
      })),
    };
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <Grid>
      <GridCol span={12}>
        <Title order={3} mb="lg">
          {data?.symbol}
        </Title>
      </GridCol>

      <GridCol span={8}>
        <Card shadow="sm" padding="md" radius="md">
          <Group justify="end">
            <Box my="sm">
              <SegmentedControl
                data={["30", "90", "180", "all"]}
                value={filter}
                onChange={setFilter}
              />
            </Box>
          </Group>
          <Box>
            {data && (
              <TimeSerieChart
                series={[dataChart]}
                predictions={[dataForecast]}
              />
            )}
          </Box>
        </Card>
      </GridCol>
      <GridCol span={4}>
        <Card shadow="sm" padding="md" radius="md">
          <Title order={3}>Forecast</Title>
          <Box>{data && <TableFromListDict data={data.forecast} />}</Box>
        </Card>
      </GridCol>
    </Grid>
  );
};
